/**
 * Zephyr Reef Kart - Private P2P Multiplayer Manager (WebRTC via PeerJS)
 * Fully serverless, zero-config, low-latency private sessions with invite links & room codes.
 */

export class MultiplayerManager {
  constructor() {
    this.peer = null;
    this.isHost = false;
    this.roomCode = '';
    this.state = 'IDLE'; // 'IDLE' | 'HOST_LOBBY' | 'GUEST_LOBBY' | 'RACING' | 'RESULTS'
    
    // Player details
    this.playerName = localStorage.getItem('zephyr_player_name') || ('Racer_' + Math.floor(100 + Math.random() * 900));
    this.selectedKart = localStorage.getItem('zephyr_kart') || 'nix';
    this.mySlot = 0;
    
    // Connections & party
    this.connections = new Map(); // peerId -> DataConnection
    this.hostConnection = null;   // For guests: DataConnection to Host
    this.players = [];            // [{ peerId, slot, name, kartId, isHost, ping, isAI, finishTime, rank }]
    
    // Room settings
    this.trackIndex = parseInt(localStorage.getItem('zephyr_track') || '0', 10);
    this.laps = 3;
    this.fillAI = true;
    
    // High-frequency sync buffer
    this.remoteStates = new Map(); // slot -> { x, y, z, yaw, pitch, roll, speed, steer, driftTier, isDrifting, boost, lap, dist, lastUpdate }
    this.lastBroadcastTime = 0;
    this.broadcastIntervalMs = 33; // ~30 Hz transmission rate
    
    // DOM Nametags & Emotes Layer
    this.nametagsLayer = null;
    this.nametagEls = new Map();   // slot -> HTMLElement
    this.emoteEls = new Map();     // slot -> { el, expireTime }
    
    // Callbacks for UI & Game Engine
    this.onLobbyUpdate = null;
    this.onRaceStart = null;
    this.onItemUse = null;
    this.onRacerHit = null;
    this.onEmote = null;
    this.onPlayerFinish = null;
    this.onRematch = null;
    this.onError = null;
    this.onToast = null;
    
    // Heartbeat ping timer
    this.pingInterval = null;

    this.initDOM();
  }

  initDOM() {
    let layer = document.getElementById('z-mp-nametags-layer');
    if (!layer) {
      layer = document.createElement('div');
      layer.id = 'z-mp-nametags-layer';
      layer.style.cssText = 'position: fixed; inset: 0; pointer-events: none; z-index: 8000; overflow: hidden;';
      document.body.appendChild(layer);
    }
    this.nametagsLayer = layer;
  }

  // Generate clean 4-digit room code: ZEPH-XXXX
  static generateRoomCode() {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `ZEPH-${code}`;
  }

  static getPeerId(roomCode) {
    return `zephyr-reef-room-${roomCode.toUpperCase().trim()}`;
  }

  getInviteLink() {
    const base = window.location.origin + window.location.pathname;
    return `${base}#room=${encodeURIComponent(this.roomCode)}`;
  }

  setPlayerName(name) {
    if (!name || !name.trim()) return;
    this.playerName = name.trim().slice(0, 16);
    localStorage.setItem('zephyr_player_name', this.playerName);
    if (this.state === 'HOST_LOBBY' || this.state === 'GUEST_LOBBY') {
      const me = this.players.find(p => p.slot === this.mySlot);
      if (me) me.name = this.playerName;
      this.broadcastLobbyUpdate();
    }
  }

  setSelectedKart(kartId) {
    this.selectedKart = kartId;
    if (this.state === 'HOST_LOBBY' || this.state === 'GUEST_LOBBY') {
      const me = this.players.find(p => p.slot === this.mySlot);
      if (me) me.kartId = kartId;
      this.broadcastLobbyUpdate();
    }
  }

  setTrack(index) {
    this.trackIndex = index;
    if (this.isHost) {
      this.broadcastToAll({
        type: 'TRACK_SYNC',
        trackIndex: this.trackIndex,
        laps: this.laps
      });
      this.notifyLobbyUpdate();
    }
  }

  setLaps(laps) {
    this.laps = Math.max(1, Math.min(5, laps));
    if (this.isHost) {
      this.broadcastToAll({
        type: 'TRACK_SYNC',
        trackIndex: this.trackIndex,
        laps: this.laps
      });
      this.notifyLobbyUpdate();
    }
  }

  // --- HOST: CREATE PRIVATE ROOM ---
  createRoom(customCode = null) {
    this.leaveRoom();
    this.isHost = true;
    this.roomCode = customCode ? customCode.toUpperCase().trim() : MultiplayerManager.generateRoomCode();
    const hostPeerId = MultiplayerManager.getPeerId(this.roomCode);

    this.state = 'HOST_LOBBY';
    this.mySlot = 0;
    this.players = [{
      peerId: hostPeerId,
      slot: 0,
      name: this.playerName,
      kartId: this.selectedKart,
      isHost: true,
      ping: 0,
      isAI: false
    }];

    this.initPeer(hostPeerId, () => {
      this.toast(`Stanza creata! Codice: ${this.roomCode}`);
      this.notifyLobbyUpdate();
      this.startHeartbeat();
    });
  }

  // --- GUEST: JOIN PRIVATE ROOM ---
  joinRoom(roomCode, customName = null) {
    this.leaveRoom();
    if (customName) this.setPlayerName(customName);
    this.isHost = false;
    this.roomCode = roomCode.toUpperCase().trim();
    const hostPeerId = MultiplayerManager.getPeerId(this.roomCode);

    this.state = 'CONNECTING';
    const guestPeerId = `zephyr-guest-${Math.floor(10000 + Math.random() * 90000)}`;

    this.initPeer(guestPeerId, () => {
      this.toast(`Connessione alla stanza ${this.roomCode}...`);
      const conn = this.peer.connect(hostPeerId, { reliable: true });
      this.hostConnection = conn;

      conn.on('open', () => {
        this.toast('Connesso all\'Host! Invio dati pilota...');
        conn.send({
          type: 'JOIN_REQUEST',
          name: this.playerName,
          kartId: this.selectedKart
        });
      });

      conn.on('data', (data) => this.handleMessage(conn, data));
      conn.on('close', () => {
        this.toast('Disconnesso dalla stanza privata');
        this.leaveRoom();
      });
      conn.on('error', (err) => {
        console.error('Peer connection error:', err);
        this.toast('Errore di connessione alla stanza');
      });
    });
  }

  initPeer(peerId, onOpen) {
    if (!window.Peer) {
      console.error('PeerJS is not loaded');
      this.toast('Modulo PeerJS non disponibile');
      return;
    }

    try {
      this.peer = new window.Peer(peerId, {
        debug: 0,
        config: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
            { urls: 'stun:stun2.l.google.com:19302' }
          ]
        }
      });

      this.peer.on('open', (id) => {
        console.log(`[Multiplayer] Peer initialized: ${id}`);
        if (onOpen) onOpen(id);
      });

      this.peer.on('connection', (conn) => {
        if (!this.isHost) return;
        this.handleHostIncomingConnection(conn);
      });

      this.peer.on('error', (err) => {
        console.warn('[Multiplayer Peer Error]:', err.type, err.message);
        if (err.type === 'unavailable-id') {
          this.toast(`Codice stanza già occupato. Riprova con un altro codice.`);
        } else if (err.type === 'peer-unavailable') {
          this.toast(`Stanza non trovata! Controlla il codice.`);
        } else {
          this.toast(`Errore di rete: ${err.type}`);
        }
        if (this.onError) this.onError(err);
      });
    } catch (e) {
      console.error('Failed to create Peer:', e);
      this.toast('Inizializzazione multiplayer fallita');
    }
  }

  // --- HOST CONNECTION HANDLING ---
  handleHostIncomingConnection(conn) {
    conn.on('open', () => {
      console.log(`[Host] Client connected: ${conn.peer}`);
    });

    conn.on('data', (data) => this.handleMessage(conn, data));

    conn.on('close', () => {
      console.log(`[Host] Client disconnected: ${conn.peer}`);
      this.connections.delete(conn.peer);
      const idx = this.players.findIndex(p => p.peerId === conn.peer);
      if (idx !== -1) {
        const leaving = this.players[idx];
        this.players.splice(idx, 1);
        this.toast(`${leaving.name} è uscito dalla stanza.`);
        this.broadcastLobbyUpdate();
      }
    });
  }

  // --- MESSAGE ROUTING ---
  handleMessage(conn, data) {
    if (!data || !data.type) return;

    switch (data.type) {
      case 'JOIN_REQUEST': {
        if (!this.isHost) return;
        const usedSlots = new Set(this.players.map(p => p.slot));
        let slot = 1;
        while (usedSlots.has(slot) && slot < 6) slot++;

        if (slot >= 6) {
          conn.send({ type: 'ROOM_FULL' });
          conn.close();
          return;
        }

        const newPlayer = {
          peerId: conn.peer,
          slot: slot,
          name: data.name || `Ospite ${slot}`,
          kartId: data.kartId || 'bruno',
          isHost: false,
          ping: 30,
          isAI: false
        };

        this.connections.set(conn.peer, conn);
        this.players.push(newPlayer);
        this.toast(`${newPlayer.name} è entrato nella stanza!`);

        conn.send({
          type: 'ROOM_WELCOME',
          roomCode: this.roomCode,
          mySlot: slot,
          trackIndex: this.trackIndex,
          laps: this.laps,
          players: this.players
        });

        this.broadcastLobbyUpdate();
        break;
      }

      case 'ROOM_WELCOME': {
        this.state = 'GUEST_LOBBY';
        this.mySlot = data.mySlot;
        this.roomCode = data.roomCode;
        this.trackIndex = data.trackIndex;
        this.laps = data.laps;
        this.players = data.players;
        this.toast(`Sei nella stanza privata! (Slot ${this.mySlot + 1})`);
        this.notifyLobbyUpdate();
        this.startHeartbeat();
        break;
      }

      case 'LOBBY_UPDATE': {
        this.players = data.players;
        this.trackIndex = data.trackIndex;
        this.laps = data.laps;
        this.notifyLobbyUpdate();
        break;
      }

      case 'TRACK_SYNC': {
        this.trackIndex = data.trackIndex;
        this.laps = data.laps;
        this.notifyLobbyUpdate();
        break;
      }

      case 'RACE_START_SYNC': {
        this.state = 'RACING';
        this.trackIndex = data.trackIndex;
        this.laps = data.laps;
        this.players = data.players;
        if (this.onRaceStart) {
          this.onRaceStart(data);
        }
        break;
      }

      case 'KART_STATE': {
        const s = data.slot;
        this.remoteStates.set(s, {
          x: data.x,
          y: data.y,
          z: data.z,
          yaw: data.yaw,
          pitch: data.pitch || 0,
          roll: data.roll || 0,
          speed: data.speed || 0,
          steer: data.steer || 0,
          driftTier: data.driftTier || 0,
          isDrifting: !!data.isDrifting,
          boost: !!data.boost,
          lap: data.lap || 1,
          dist: data.dist || 0,
          lastUpdate: performance.now()
        });

        if (this.isHost) {
          for (const [peerId, otherConn] of this.connections.entries()) {
            if (peerId !== conn.peer && otherConn.open) {
              otherConn.send(data);
            }
          }
        }
        break;
      }

      case 'ITEM_USE': {
        if (this.onItemUse) this.onItemUse(data);
        if (this.isHost) {
          this.relayToOthers(conn.peer, data);
        }
        break;
      }

      case 'RACER_HIT': {
        if (this.onRacerHit) this.onRacerHit(data);
        if (this.isHost) {
          this.relayToOthers(conn.peer, data);
        }
        break;
      }

      case 'EMOTE': {
        this.displayEmoteBubble(data.slot, data.text);
        if (this.onEmote) this.onEmote(data);
        if (this.isHost) {
          this.relayToOthers(conn.peer, data);
        }
        break;
      }

      case 'PLAYER_FINISH': {
        const p = this.players.find(pl => pl.slot === data.slot);
        if (p) {
          p.finishTime = data.finishTime;
          p.rank = data.rank;
        }
        if (this.onPlayerFinish) this.onPlayerFinish(data);
        if (this.isHost) {
          this.relayToOthers(conn.peer, data);
        }
        break;
      }

      case 'REMATCH': {
        this.trackIndex = data.trackIndex;
        if (this.onRematch) this.onRematch(data);
        break;
      }

      case 'PING': {
        conn.send({ type: 'PONG', t: data.t });
        break;
      }

      case 'PONG': {
        const rtt = Math.round(performance.now() - data.t);
        const p = this.players.find(pl => pl.peerId === conn.peer);
        if (p) p.ping = Math.max(12, rtt);
        this.notifyLobbyUpdate();
        break;
      }
    }
  }

  // --- HEARTBEAT & PING ---
  startHeartbeat() {
    if (this.pingInterval) clearInterval(this.pingInterval);
    this.pingInterval = setInterval(() => {
      const now = performance.now();
      if (this.isHost) {
        for (const conn of this.connections.values()) {
          if (conn.open) conn.send({ type: 'PING', t: now });
        }
      } else if (this.hostConnection && this.hostConnection.open) {
        this.hostConnection.send({ type: 'PING', t: now });
      }
    }, 2500);
  }

  // --- BROADCAST HELPERS ---
  broadcastToAll(data) {
    if (this.isHost) {
      for (const conn of this.connections.values()) {
        if (conn.open) conn.send(data);
      }
    } else if (this.hostConnection && this.hostConnection.open) {
      this.hostConnection.send(data);
    }
  }

  relayToOthers(senderPeerId, data) {
    for (const [peerId, conn] of this.connections.entries()) {
      if (peerId !== senderPeerId && conn.open) {
        conn.send(data);
      }
    }
  }

  broadcastLobbyUpdate() {
    if (!this.isHost) return;
    this.broadcastToAll({
      type: 'LOBBY_UPDATE',
      trackIndex: this.trackIndex,
      laps: this.laps,
      players: this.players
    });
    this.notifyLobbyUpdate();
  }

  notifyLobbyUpdate() {
    if (this.onLobbyUpdate) {
      this.onLobbyUpdate({
        roomCode: this.roomCode,
        isHost: this.isHost,
        mySlot: this.mySlot,
        trackIndex: this.trackIndex,
        laps: this.laps,
        players: this.players,
        inviteLink: this.getInviteLink()
      });
    }
  }

  // --- START RACE (HOST TRIGGER) ---
  startRace() {
    if (!this.isHost) return;
    this.state = 'RACING';

    const availableAIs = ['nix', 'bruno', 'sable', 'zuzu', 'rustam', 'marlow'];
    const usedKarts = new Set(this.players.map(p => p.kartId));
    
    const fullGrid = [...this.players];
    for (let slot = 0; slot < 6; slot++) {
      if (!fullGrid.some(p => p.slot === slot)) {
        const unusedKart = availableAIs.find(k => !usedKarts.has(k)) || availableAIs[slot % availableAIs.length];
        usedKarts.add(unusedKart);
        fullGrid.push({
          peerId: `ai_${slot}`,
          slot: slot,
          name: `${unusedKart.charAt(0).toUpperCase() + unusedKart.slice(1)} (IA)`,
          kartId: unusedKart,
          isHost: false,
          ping: 0,
          isAI: true
        });
      }
    }

    fullGrid.sort((a, b) => a.slot - b.slot);
    this.players = fullGrid;

    const payload = {
      type: 'RACE_START_SYNC',
      trackIndex: this.trackIndex,
      laps: this.laps,
      players: this.players,
      startTime: Date.now() + 1000
    };

    this.broadcastToAll(payload);
    if (this.onRaceStart) this.onRaceStart(payload);
  }

  // --- REAL-TIME TRANSMISSION (30 Hz) ---
  sendMyState(kart, director) {
    if (this.state !== 'RACING') return;
    const now = performance.now();
    if (now - this.lastBroadcastTime < this.broadcastIntervalMs) return;
    this.lastBroadcastTime = now;

    const p = kart.physics.state;
    const prog = director.player.progress;

    const payload = {
      type: 'KART_STATE',
      slot: this.mySlot,
      x: Number(p.pos.x.toFixed(2)),
      y: Number(p.pos.y.toFixed(2)),
      z: Number(p.pos.z.toFixed(2)),
      yaw: Number(p.yaw.toFixed(3)),
      pitch: Number((p.pitch || 0).toFixed(3)),
      roll: Number((p.roll || 0).toFixed(3)),
      speed: Number(p.speed.toFixed(1)),
      steer: Number(p.steer.toFixed(2)),
      driftTier: p.driftTier || 0,
      isDrifting: p.drifting || false,
      boost: (p.boostTime > 0 || p.padBoostTime > 0),
      lap: prog.lap || 1,
      dist: Number(prog.distance.toFixed(1))
    };

    this.broadcastToAll(payload);
  }

  // --- 60 FPS INTERPOLATION & RENDERING FOR REMOTE RACERS ---
  updateRemoteRacers(dt, director, scene, camera) {
    if (this.state !== 'RACING' || !director || !director.racers) {
      this.clearAllNametags();
      return;
    }

    const now = performance.now();

    for (const player of this.players) {
      if (player.slot === this.mySlot || player.isAI) continue;

      const racer = director.racers[player.slot];
      const remote = this.remoteStates.get(player.slot);
      if (!racer || !remote) continue;

      // Smooth Position Lerp
      const posLerpRate = Math.min(1.0, dt * 18.0);
      racer.pos.x += (remote.x - racer.pos.x) * posLerpRate;
      racer.pos.y += (remote.y - racer.pos.y) * posLerpRate;
      racer.pos.z += (remote.z - racer.pos.z) * posLerpRate;

      // Angular Yaw Lerp
      let deltaYaw = (remote.yaw - racer.state.yaw) % (Math.PI * 2);
      if (deltaYaw > Math.PI) deltaYaw -= Math.PI * 2;
      if (deltaYaw < -Math.PI) deltaYaw += Math.PI * 2;
      racer.state.yaw += deltaYaw * Math.min(1.0, dt * 16.0);

      // State flags
      racer.state.speed = remote.speed;
      racer.state.steer = remote.steer;
      racer.state.drifting = remote.isDrifting;
      racer.state.driftTier = remote.driftTier;
      racer.progress.lap = remote.lap;
      racer.progress.distance = remote.dist;

      // Sync kart visual geometry & wheels
      if (racer.kart && racer.kart.visual) {
        racer.kart.visual.syncWheelSteer?.(remote.steer);
        racer.kart.visual.syncDriftSpark?.(remote.isDrifting, remote.driftTier);
      }

      // Update 3D projected DOM Nametag
      this.updateProjectedNametag(player.slot, player.name, player.ping, racer.pos, camera);
    }

    this.updateEmoteBubbles(now, director, camera);
  }

  // --- DOM NAMETAG PROJECTION ---
  updateProjectedNametag(slot, name, ping, worldPos, camera) {
    if (!this.nametagsLayer || !camera) return;

    let el = this.nametagEls.get(slot);
    if (!el) {
      el = document.createElement('div');
      el.className = 'z-mp-nametag';
      el.style.cssText = `
        position: absolute;
        transform: translate(-50%, -100%);
        background: rgba(6, 22, 38, 0.88);
        border: 2px solid #76fff0;
        border-radius: 14px;
        padding: 4px 10px;
        display: flex;
        align-items: center;
        gap: 6px;
        font-family: sans-serif;
        font-weight: 800;
        font-size: 13px;
        color: #ffffff;
        box-shadow: 0 4px 14px rgba(0,0,0,0.6), 0 0 12px rgba(118,255,240,0.4);
        pointer-events: none;
        user-select: none;
        white-space: nowrap;
        transition: opacity 0.15s ease;
      `;
      this.nametagsLayer.appendChild(el);
      this.nametagEls.set(slot, el);
    }

    // Project world coordinates to 2D screen
    const p = worldPos.clone();
    p.y += 2.1; // Float above kart
    p.project(camera);

    // Check if behind camera
    if (p.z > 1.0) {
      el.style.display = 'none';
      return;
    }

    const screenX = (p.x * 0.5 + 0.5) * window.innerWidth;
    const screenY = (-p.y * 0.5 + 0.5) * window.innerHeight;

    // Check if within screen bounds
    if (screenX < -50 || screenX > window.innerWidth + 50 || screenY < -50 || screenY > window.innerHeight + 50) {
      el.style.display = 'none';
      return;
    }

    el.style.display = 'flex';
    el.style.left = `${screenX}px`;
    el.style.top = `${screenY}px`;

    const pingColor = ping < 60 ? '#10b981' : ping < 120 ? '#f59e0b' : '#ef4444';
    el.innerHTML = `
      <span style="color: #76fff0;">${name.slice(0, 12)}</span>
      <span style="display:inline-block; width: 7px; height: 7px; border-radius: 50%; background: ${pingColor}; box-shadow: 0 0 6px ${pingColor};"></span>
      <span style="font-size: 10px; color: #94a3b8; font-family: monospace;">${ping}ms</span>
    `;
  }

  // --- IN-GAME EMOTES & QUICK CHAT ---
  sendEmote(text) {
    if (this.state !== 'RACING') return;
    this.displayEmoteBubble(this.mySlot, text);
    this.broadcastToAll({
      type: 'EMOTE',
      slot: this.mySlot,
      text: text
    });
  }

  displayEmoteBubble(slot, text) {
    if (!this.nametagsLayer) return;

    let emote = this.emoteEls.get(slot);
    if (!emote) {
      const el = document.createElement('div');
      el.className = 'z-mp-speech-bubble';
      el.style.cssText = `
        position: absolute;
        transform: translate(-50%, -100%) scale(1);
        background: #ffc857;
        border: 2px solid #ffffff;
        border-radius: 16px;
        padding: 6px 14px;
        font-family: sans-serif;
        font-weight: 900;
        font-size: 18px;
        color: #061626;
        box-shadow: 0 6px 20px rgba(0,0,0,0.45);
        pointer-events: none;
        user-select: none;
        white-space: nowrap;
        animation: z-pop-bounce 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      `;
      this.nametagsLayer.appendChild(el);
      emote = { el, expireTime: 0 };
      this.emoteEls.set(slot, emote);
    }

    emote.el.textContent = text;
    emote.expireTime = performance.now() + 2600;
    emote.el.style.display = 'block';
    emote.el.style.opacity = '1';
  }

  updateEmoteBubbles(now, director, camera) {
    for (const [slot, emote] of this.emoteEls.entries()) {
      if (now > emote.expireTime) {
        emote.el.style.display = 'none';
      } else {
        const racer = director?.racers?.[slot];
        if (racer && camera) {
          const p = racer.pos.clone();
          p.y += 3.2; // Float above nametag
          p.project(camera);

          if (p.z > 1.0) {
            emote.el.style.display = 'none';
            continue;
          }

          const screenX = (p.x * 0.5 + 0.5) * window.innerWidth;
          const screenY = (-p.y * 0.5 + 0.5) * window.innerHeight;

          emote.el.style.display = 'block';
          emote.el.style.left = `${screenX}px`;
          emote.el.style.top = `${screenY}px`;
        }
      }
    }
  }

  clearAllNametags() {
    for (const el of this.nametagEls.values()) el.remove();
    this.nametagEls.clear();
    for (const emote of this.emoteEls.values()) emote.el.remove();
    this.emoteEls.clear();
  }

  sendItemUse(itemType, pos, dir) {
    this.broadcastToAll({
      type: 'ITEM_USE',
      slot: this.mySlot,
      itemType: itemType,
      pos: pos,
      dir: dir
    });
  }

  sendRacerHit(slot, duration = 1.0) {
    this.broadcastToAll({
      type: 'RACER_HIT',
      slot: slot,
      duration: duration
    });
  }

  sendPlayerFinish(finishTime, rank) {
    this.broadcastToAll({
      type: 'PLAYER_FINISH',
      slot: this.mySlot,
      finishTime: finishTime,
      rank: rank
    });
  }

  requestRematch(nextTrack = false) {
    if (!this.isHost) return;
    if (nextTrack) {
      this.trackIndex = (this.trackIndex + 1) % 4;
    }
    this.broadcastToAll({
      type: 'REMATCH',
      trackIndex: this.trackIndex
    });
    if (this.onRematch) {
      this.onRematch({ trackIndex: this.trackIndex });
    }
  }

  leaveRoom() {
    if (this.pingInterval) clearInterval(this.pingInterval);
    this.pingInterval = null;

    for (const conn of this.connections.values()) {
      try { conn.close(); } catch {}
    }
    this.connections.clear();

    if (this.hostConnection) {
      try { this.hostConnection.close(); } catch {}
      this.hostConnection = null;
    }

    if (this.peer) {
      try { this.peer.destroy(); } catch {}
      this.peer = null;
    }

    this.clearAllNametags();

    this.state = 'IDLE';
    this.roomCode = '';
    this.isHost = false;
    this.players = [];
    this.remoteStates.clear();
  }

  toast(msg) {
    console.log(`[Multiplayer Toast] ${msg}`);
    if (this.onToast) this.onToast(msg);
    else if (window.__zephyr?.ui?.toast) window.__zephyr.ui.toast(msg, 2.8);
  }
}

if (typeof window !== 'undefined') {
  window.MultiplayerManager = MultiplayerManager;
}
