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
    
    // Countdown state (5-second synchronized pre-race transition)
    this.countdownSec = 5;
    this.countdownTimer = null;

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
    this.onCountdownTick = null;
    this.onCountdownCancel = null;
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

  allPlayersReady() {
    const humanPlayers = this.players.filter(p => !p.isAI);
    if (humanPlayers.length === 0) return false;
    return humanPlayers.every(p => p.isReady !== false);
  }

  setReady(isReady = true) {
    const me = this.players.find(p => p.slot === this.mySlot);
    if (me) me.isReady = !!isReady;
    if (this.isHost) {
      this.broadcastLobbyUpdate();
    } else {
      this.broadcastToAll({
        type: 'PLAYER_READY',
        slot: this.mySlot,
        isReady: !!isReady
      });
      this.notifyLobbyUpdate();
    }
  }

  toggleReady() {
    const me = this.players.find(p => p.slot === this.mySlot);
    const nextState = me ? !me.isReady : true;
    this.setReady(nextState);
    return nextState;
  }

  setPlayerName(name) {
    if (!name || !name.trim()) return;
    this.playerName = name.trim().slice(0, 16);
    localStorage.setItem('zephyr_player_name', this.playerName);
    if (this.state === 'HOST_LOBBY' || this.state === 'GUEST_LOBBY') {
      const me = this.players.find(p => p.slot === this.mySlot);
      if (me) me.name = this.playerName;
      if (this.isHost) {
        this.broadcastLobbyUpdate();
      } else {
        this.broadcastToAll({
          type: 'PLAYER_UPDATE',
          slot: this.mySlot,
          name: this.playerName,
          kartId: this.selectedKart,
          isReady: me ? me.isReady : false
        });
        this.notifyLobbyUpdate();
      }
    }
  }

  setSelectedKart(kartId) {
    this.selectedKart = kartId;
    localStorage.setItem('zephyr_kart', kartId);
    if (this.state === 'HOST_LOBBY' || this.state === 'GUEST_LOBBY') {
      const me = this.players.find(p => p.slot === this.mySlot);
      if (me) {
        me.kartId = kartId;
        // If guest changes kart, reset ready status so they confirm choice
        if (!this.isHost) {
          me.isReady = false;
        }
      }
      if (this.isHost) {
        this.broadcastLobbyUpdate();
      } else {
        this.broadcastToAll({
          type: 'PLAYER_UPDATE',
          slot: this.mySlot,
          name: this.playerName,
          kartId: this.selectedKart,
          isReady: me ? me.isReady : false
        });
        this.notifyLobbyUpdate();
      }
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
      isAI: false,
      isReady: true
    }];

    this.notifyLobbyUpdate();

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
      this.connections.set(conn.peer, conn);
    });

    conn.on('data', (data) => this.handleMessage(conn, data));

    conn.on('close', () => {
      this.handlePeerDisconnect(conn.peer);
    });
  }

  handlePeerDisconnect(peerId) {
    console.log(`[Host] Client disconnected: ${peerId}`);
    this.connections.delete(peerId);
    const idx = this.players.findIndex(p => p.peerId === peerId);
    if (idx !== -1) {
      const leaving = this.players[idx];
      if (this.state === 'COUNTDOWN') {
        this.players.splice(idx, 1);
        this.cancelCountdown(`${leaving.name} si è disconnesso durante il conto alla rovescia.`);
      } else if (this.state === 'RACING') {
        // Prevent array shifting during race: mark as AI and inform everyone
        leaving.isAI = true;
        this.toast(`${leaving.name} si è disconnesso (subentra l'IA).`);
        this.broadcastToAll({
          type: 'PLAYER_DISCONNECTED',
          slot: leaving.slot,
          name: leaving.name
        });
        this.nametagEls.get(leaving.slot)?.remove();
        this.nametagEls.delete(leaving.slot);
        this.emoteEls.get(leaving.slot)?.el?.remove();
        this.emoteEls.delete(leaving.slot);
        this.remoteStates.delete(leaving.slot);
        if (window.__zephyr?.director?.racers?.[leaving.slot]) {
          const r = window.__zephyr.director.racers[leaving.slot];
          r.kind = "ai";
          r.isPlayer = false;
          r.isRemotePlayer = false;
          r.name = `${leaving.name} (IA)`;
        }
      } else {
        this.players.splice(idx, 1);
        this.toast(`${leaving.name} è uscito dalla stanza.`);
        this.broadcastLobbyUpdate();
      }
    }
  }

  // --- MESSAGE ROUTING ---
  handleIncomingData(conn, data) {
    return this.handleMessage(conn, data);
  }

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
          isAI: false,
          isReady: false
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

      case 'PLAYER_READY': {
        const p = this.players.find(pl => pl.slot === data.slot);
        if (p) {
          p.isReady = !!data.isReady;
        }
        if (this.isHost) {
          this.broadcastLobbyUpdate();
        } else {
          this.notifyLobbyUpdate();
        }
        break;
      }

      case 'PLAYER_UPDATE': {
        if (!this.isHost) return;
        const p = this.players.find(pl => pl.slot === data.slot);
        if (p) {
          if (data.name) p.name = data.name;
          if (data.kartId) p.kartId = data.kartId;
          if (typeof data.isReady === 'boolean') p.isReady = data.isReady;
          this.broadcastLobbyUpdate();
        }
        break;
      }

      case 'PLAYER_DISCONNECTED': {
        this.toast(`${data.name} si è disconnesso (subentra l'IA)`);
        this.nametagEls.get(data.slot)?.remove();
        this.nametagEls.delete(data.slot);
        this.emoteEls.get(data.slot)?.el?.remove();
        this.emoteEls.delete(data.slot);
        this.remoteStates.delete(data.slot);
        if (window.__zephyr?.director?.racers?.[data.slot]) {
          const r = window.__zephyr.director.racers[data.slot];
          r.kind = "ai";
          r.isPlayer = false;
          r.isRemotePlayer = false;
          r.name = `${data.name} (IA)`;
        }
        break;
      }

      case 'ROOM_WELCOME': {
        this.state = 'GUEST_LOBBY';
        this.mySlot = data.mySlot;
        this.roomCode = data.roomCode;
        this.trackIndex = data.trackIndex;
        this.laps = data.laps;
        this.players = data.players;
        try { localStorage.setItem('zephyr_track', String(data.trackIndex)); } catch {}
        this.toast(`Sei nella stanza privata! (Slot ${this.mySlot + 1})`);
        this.notifyLobbyUpdate();
        this.startHeartbeat();
        break;
      }

      case 'LOBBY_UPDATE': {
        this.players = data.players;
        this.trackIndex = data.trackIndex;
        this.laps = data.laps;
        try { localStorage.setItem('zephyr_track', String(data.trackIndex)); } catch {}
        this.notifyLobbyUpdate();
        break;
      }

      case 'TRACK_SYNC': {
        this.trackIndex = data.trackIndex;
        this.laps = data.laps;
        try { localStorage.setItem('zephyr_track', String(data.trackIndex)); } catch {}
        this.notifyLobbyUpdate();
        break;
      }

      case 'START_COUNTDOWN': {
        this.handleCountdownStart(data);
        break;
      }

      case 'COUNTDOWN_CANCEL': {
        if (this.countdownTimer) {
          clearInterval(this.countdownTimer);
          this.countdownTimer = null;
        }
        this.state = 'GUEST_LOBBY';
        this.players = data.players || this.players;
        this.toast(data.reason || 'Partenza annullata');
        if (this.onCountdownCancel) {
          this.onCountdownCancel(data.reason);
        }
        this.notifyLobbyUpdate();
        break;
      }

      case 'RACE_START_SYNC': {
        if (this.countdownTimer) {
          clearInterval(this.countdownTimer);
          this.countdownTimer = null;
        }
        this.state = 'RACING';
        this.trackIndex = data.trackIndex;
        this.laps = data.laps;
        this.players = data.players;
        try { localStorage.setItem('zephyr_track', String(data.trackIndex)); } catch {}
        if (this.onRaceStart) {
          this.onRaceStart(data);
        }
        break;
      }

      case 'KART_STATE': {
        const s = data.slot;
        let rState = this.remoteStates.get(s);
        if (!rState) {
          rState = {
            x: 0, y: 0, z: 0, yaw: 0, pitch: 0, roll: 0, speed: 0, steer: 0,
            driftTier: 0, isDrifting: false, boost: false, lap: 1, dist: 0, lastUpdate: 0
          };
          this.remoteStates.set(s, rState);
        }
        rState.x = data.x;
        rState.y = data.y;
        rState.z = data.z;
        rState.yaw = data.yaw;
        rState.pitch = data.pitch || 0;
        rState.roll = data.roll || 0;
        rState.speed = data.speed || 0;
        rState.steer = data.steer || 0;
        rState.driftTier = data.driftTier || 0;
        rState.isDrifting = !!data.isDrifting;
        rState.boost = !!data.boost;
        rState.lap = data.lap || 1;
        rState.dist = data.dist || 0;
        rState.lastUpdate = performance.now();

        if (this.isHost) {
          for (const [peerId, otherConn] of this.connections.entries()) {
            if (peerId !== conn?.peer && otherConn.open) {
              otherConn.send(data);
            }
          }
        }
        break;
      }


      case 'ITEM_USE': {
        if (this.onItemUse) this.onItemUse(data);
        if (this.isHost) {
          this.relayToOthers(conn?.peer, data);
        }
        break;
      }

      case 'RACER_HIT': {
        if (this.onRacerHit) this.onRacerHit(data);
        if (this.isHost) {
          this.relayToOthers(conn?.peer, data);
        }
        break;
      }

      case 'EMOTE': {
        this.displayEmoteBubble(data.slot, data.text);
        if (this.onEmote) this.onEmote(data);
        if (this.isHost) {
          this.relayToOthers(conn?.peer, data);
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
          this.relayToOthers(conn?.peer, data);
        }
        break;
      }

      case 'REMATCH': {
        this.trackIndex = data.trackIndex;
        if (this.onRematch) this.onRematch(data);
        break;
      }

      case 'PING': {
        if (conn?.send) conn.send({ type: 'PONG', t: data.t });
        break;
      }

      case 'PONG': {
        const rtt = Math.round(performance.now() - data.t);
        const p = this.players.find(pl => pl.peerId === conn?.peer);
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
        allReady: this.allPlayersReady(),
        inviteLink: this.getInviteLink()
      });
    }
  }

  startCountdown(countdownSec = 5) {
    return this.startRace(countdownSec);
  }

  // --- START RACE (HOST TRIGGER WITH OPTIONAL COUNTDOWN & READY CHECK) ---
  startRace(countdownSec = 0) {
    if (!this.isHost) return false;

    if (!this.allPlayersReady()) {
      this.toast('Tutti i giocatori della stanza devono confermare prima di avviare la gara!');
      return false;
    }

    if (this.state === 'COUNTDOWN' || this.state === 'RACING') return false;

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
          isAI: true,
          isReady: true
        });
      }
    }

    fullGrid.sort((a, b) => a.slot - b.slot);
    this.players = fullGrid;

    if (countdownSec > 0) {
      this.state = 'COUNTDOWN';
      const payload = {
        type: 'START_COUNTDOWN',
        countdownSec: countdownSec,
        trackIndex: this.trackIndex,
        laps: this.laps,
        players: this.players,
        startTime: Date.now() + (countdownSec * 1000)
      };

      this.broadcastToAll(payload);
      this.handleCountdownStart(payload);
      return true;
    }

    this.state = 'RACING';
    const payload = {
      type: 'RACE_START_SYNC',
      trackIndex: this.trackIndex,
      laps: this.laps,
      players: this.players,
      startTime: Date.now() + 1000
    };

    this.broadcastToAll(payload);
    if (this.onRaceStart) this.onRaceStart(payload);
    return true;
  }

  handleCountdownStart(data) {
    this.state = 'COUNTDOWN';
    this.trackIndex = data.trackIndex;
    this.laps = data.laps;
    this.players = data.players;
    try { localStorage.setItem('zephyr_track', String(data.trackIndex)); } catch {}

    if (this.countdownTimer) clearInterval(this.countdownTimer);
    let remaining = data.countdownSec || 5;

    if (this.onCountdownTick) {
      this.onCountdownTick(remaining, data);
    }

    this.countdownTimer = setInterval(() => {
      remaining--;
      if (this.onCountdownTick) {
        this.onCountdownTick(remaining, data);
      }

      if (remaining <= 0) {
        clearInterval(this.countdownTimer);
        this.countdownTimer = null;

        if (this.isHost) {
          this.state = 'RACING';
          const raceStartPayload = {
            type: 'RACE_START_SYNC',
            trackIndex: this.trackIndex,
            laps: this.laps,
            players: this.players,
            startTime: Date.now()
          };
          this.broadcastToAll(raceStartPayload);
          if (this.onRaceStart) this.onRaceStart(raceStartPayload);
        }
      }
    }, 1000);
  }

  cancelCountdown(reason = 'Conto alla rovescia annullato') {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
    this.state = this.isHost ? 'HOST_LOBBY' : 'GUEST_LOBBY';
    for (const p of this.players) {
      if (!p.isHost && !p.isAI) p.isReady = false;
    }
    this.toast(reason);
    if (this.isHost) {
      this.broadcastToAll({
        type: 'COUNTDOWN_CANCEL',
        reason: reason,
        players: this.players
      });
      this.broadcastLobbyUpdate();
    }
    if (this.onCountdownCancel) {
      this.onCountdownCancel(reason);
    }
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
      x: Math.round(p.pos.x * 100) / 100,
      y: Math.round(p.pos.y * 100) / 100,
      z: Math.round(p.pos.z * 100) / 100,
      yaw: Math.round(p.yaw * 1000) / 1000,
      pitch: Math.round((p.pitch || 0) * 1000) / 1000,
      roll: Math.round((p.roll || 0) * 1000) / 1000,
      speed: Math.round(p.speed * 10) / 10,
      steer: Math.round(p.steer * 100) / 100,
      driftTier: p.driftTier || 0,
      isDrifting: !!p.drifting,
      boost: (p.boostTime > 0 || p.padBoostTime > 0),
      lap: prog.lap || 1,
      dist: Math.round(prog.distance * 10) / 10
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
      const nameSpan = document.createElement('span');
      nameSpan.style.color = '#76fff0';
      const dotSpan = document.createElement('span');
      dotSpan.style.cssText = 'display:inline-block; width: 7px; height: 7px; border-radius: 50%;';
      const pingSpan = document.createElement('span');
      pingSpan.style.cssText = 'font-size: 10px; color: #94a3b8; font-family: monospace;';
      el.append(nameSpan, dotSpan, pingSpan);
      el._nameSpan = nameSpan;
      el._dotSpan = dotSpan;
      el._pingSpan = pingSpan;
      el._lastName = '';
      el._lastPing = -1;

      this.nametagsLayer.appendChild(el);
      this.nametagEls.set(slot, el);
    }

    // Project world coordinates to 2D screen without heap allocation
    if (!this._scratchVec && worldPos.clone) {
      this._scratchVec = worldPos.clone();
    }
    const p = this._scratchVec || worldPos.clone();
    p.copy(worldPos);
    p.y += 2.1; // Float above kart
    p.project(camera);

    // Check if behind camera
    let isBehind = p.z > 1.0;
    if (camera?.getWorldDirection && camera?.position) {
      if (!this._scratchCamDir) this._scratchCamDir = camera.position.clone();
      camera.getWorldDirection(this._scratchCamDir);
      const dx = worldPos.x - camera.position.x;
      const dy = worldPos.y - camera.position.y;
      const dz = worldPos.z - camera.position.z;
      if (dx * this._scratchCamDir.x + dy * this._scratchCamDir.y + dz * this._scratchCamDir.z <= 0.5) {
        isBehind = true;
      }
    }
    if (isBehind) {
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

    if (el._lastName !== name) {
      el._lastName = name;
      el._nameSpan.textContent = name.slice(0, 12);
    }
    if (el._lastPing !== ping) {
      el._lastPing = ping;
      const pingColor = ping < 60 ? '#10b981' : ping < 120 ? '#f59e0b' : '#ef4444';
      el._dotSpan.style.background = pingColor;
      el._dotSpan.style.boxShadow = `0 0 6px ${pingColor}`;
      el._pingSpan.textContent = `${ping}ms`;
    }
  }

  // --- IN-GAME EMOTES & QUICK CHAT ---
  sendEmote(text) {
    if (this.state !== 'RACING') return false;
    const now = performance.now();
    if (this.lastEmoteTime && now - this.lastEmoteTime < 750) return false;
    this.lastEmoteTime = now;
    this.displayEmoteBubble(this.mySlot, text);
    this.broadcastToAll({
      type: 'EMOTE',
      slot: this.mySlot,
      text: text
    });
    if (this.onEmote) {
      this.onEmote({ slot: this.mySlot, text: text });
    }
    return true;
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
    if (!this._scratchEmoteVec && camera?.position?.clone) {
      this._scratchEmoteVec = camera.position.clone();
    }
    for (const [slot, emote] of this.emoteEls.entries()) {
      if (now > emote.expireTime) {
        emote.el.style.display = 'none';
      } else {
        const racer = director?.racers?.[slot];
        if (racer && camera) {
          const p = this._scratchEmoteVec || racer.pos.clone();
          p.copy(racer.pos);
          p.y += 3.2; // Float above nametag
          p.project(camera);

          let isBehind = p.z > 1.0;
          if (camera?.getWorldDirection && camera?.position) {
            if (!this._scratchEmoteCamDir) this._scratchEmoteCamDir = camera.position.clone();
            camera.getWorldDirection(this._scratchEmoteCamDir);
            const dx = racer.pos.x - camera.position.x;
            const dy = racer.pos.y - camera.position.y;
            const dz = racer.pos.z - camera.position.z;
            if (dx * this._scratchEmoteCamDir.x + dy * this._scratchEmoteCamDir.y + dz * this._scratchEmoteCamDir.z <= 0.5) {
              isBehind = true;
            }
          }
          if (isBehind) {
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
      const totalTracks = (typeof window !== 'undefined' && window.__ZEPHYR_TRACKS?.length) || 24;
      this.trackIndex = (this.trackIndex + 1) % totalTracks;
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
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
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
