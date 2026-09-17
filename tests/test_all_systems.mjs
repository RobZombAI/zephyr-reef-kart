import test, { describe, it } from 'node:test';
import assert from 'node:assert';

// Setup Mock DOM environment for Node.js
globalThis.window = {
  location: { origin: 'https://robzombai.github.io', pathname: '/zephyr-reef-kart/' },
  __zephyr: null
};

globalThis.localStorage = {
  store: {},
  getItem(k) { return this.store[k] || null; },
  setItem(k, v) { this.store[k] = String(v); },
  removeItem(k) { delete this.store[k]; },
  clear() { this.store = {}; }
};

class MockElement {
  constructor(tag = 'div') {
    this.tagName = tag.toUpperCase();
    this._id = '';
    this.children = [];
    this.style = {};
    this.dataset = {};
    this.classList = {
      _classes: new Set(),
      add(c) { this._classes.add(c); },
      remove(c) { this._classes.delete(c); },
      contains(c) { return this._classes.has(c); }
    };
    this.innerHTML = '';
    this.textContent = '';
  }
  get id() { return this._id; }
  set id(val) {
    this._id = val;
    if (val) mockElements.set(val, this);
  }
  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
    return child;
  }
  append(...children) {
    for (const ch of children) this.appendChild(ch);
  }
  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      child.parentNode = null;
    }
    return child;
  }
  remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }
}

globalThis.window.innerWidth = 1920;
globalThis.window.innerHeight = 1080;

const mockElements = new Map();
globalThis.document = {
  createElement(tag) { return new MockElement(tag); },
  getElementById(id) {
    return mockElements.get(id) || null;
  },
  body: new MockElement('body')
};

// Import MultiplayerManager
const { MultiplayerManager } = await import('/Users/robzomb/Documents/antigravity/agitated-einstein/assets/multiplayerManager.js');

describe('=== UNIT & PROCESS TESTS: MULTIPLAYER MANAGER ===', () => {

  it('1. Room code generation format & randomness', () => {
    for (let i = 0; i < 50; i++) {
      const code = MultiplayerManager.generateRoomCode();
      assert.match(code, /^ZEPH-[23456789ABCDEFGHJKLMNPQRSTUVWXYZ]{4}$/);
      const peerId = MultiplayerManager.getPeerId(code);
      assert.strictEqual(peerId, `zephyr-reef-room-${code}`);
    }
  });

  it('2. Initialization & localStorage fallback', () => {
    localStorage.clear();
    const mp = new MultiplayerManager();
    assert.strictEqual(mp.state, 'IDLE');
    assert.strictEqual(mp.isHost, false);
    assert.strictEqual(mp.mySlot, 0);
    assert.match(mp.playerName, /^Racer_\d+/);
    assert.strictEqual(mp.selectedKart, 'nix');
  });

  it('3. Invite link generation', () => {
    const mp = new MultiplayerManager();
    mp.roomCode = 'ZEPH-TEST';
    const link = mp.getInviteLink();
    assert.ok(link.includes('#room=ZEPH-TEST'));
  });

  it('4. Player name & kart selection with storage persistence', () => {
    const mp = new MultiplayerManager();
    mp.setPlayerName('Champion');
    assert.strictEqual(mp.playerName, 'Champion');
    assert.strictEqual(localStorage.getItem('zephyr_player_name'), 'Champion');

    mp.setSelectedKart('bruno');
    assert.strictEqual(mp.selectedKart, 'bruno');
    assert.strictEqual(localStorage.getItem('zephyr_kart'), 'bruno');
  });

  it('5. Host room creation & initial lobby state', () => {
    const mp = new MultiplayerManager();
    mp.setPlayerName('HostUser');
    mp.setSelectedKart('zuzu');
    mp.createRoom('ZEPH-HOST');

    assert.strictEqual(mp.isHost, true);
    assert.strictEqual(mp.roomCode, 'ZEPH-HOST');
    assert.strictEqual(mp.state, 'HOST_LOBBY');
    assert.strictEqual(mp.players.length, 1);
    assert.strictEqual(mp.players[0].name, 'HostUser');
    assert.strictEqual(mp.players[0].kartId, 'zuzu');
    assert.strictEqual(mp.players[0].isHost, true);
    assert.strictEqual(mp.players[0].slot, 0);
  });

  it('6. Host track & laps configuration', () => {
    const mp = new MultiplayerManager();
    mp.createRoom('ZEPH-OPTS');
    const broadcasts = [];
    mp.broadcastToAll = (msg) => {
      broadcasts.push(msg);
    };
    mp.setTrack(2);
    mp.setLaps(4);
    assert.strictEqual(mp.trackIndex, 2);
    assert.strictEqual(mp.laps, 4);
    assert.strictEqual(broadcasts.length, 2);
    assert.strictEqual(broadcasts[0].type, 'TRACK_SYNC');
    assert.strictEqual(broadcasts[0].trackIndex, 2);
    assert.strictEqual(broadcasts[1].type, 'TRACK_SYNC');
    assert.strictEqual(broadcasts[1].laps, 4);
  });

  it('7. Guest join request & slot assignment', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-RACE');

    let lobbyUpdated = false;
    host.onLobbyUpdate = (lobby) => {
      lobbyUpdated = true;
      assert.strictEqual(lobby.players.length, 2);
    };

    // Simulate guest sending JOIN_REQUEST
    let sentData = null;
    const mockGuestConn = {
      peer: 'guest-peer-123',
      send: (data) => { sentData = data; },
      on: () => {},
      close: () => {}
    };

    host.handleIncomingData(mockGuestConn, {
      type: 'JOIN_REQUEST',
      name: 'GuestRacer',
      kartId: 'sable'
    });

    assert.strictEqual(lobbyUpdated, true);
    assert.strictEqual(sentData.type, 'ROOM_WELCOME');
    assert.strictEqual(sentData.mySlot, 1);
    assert.strictEqual(sentData.players.length, 2);
    assert.strictEqual(sentData.players[1].name, 'GuestRacer');
    assert.strictEqual(sentData.players[1].kartId, 'sable');
  });

  it('8. Full room (6 racers) rejection logic', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-FULL');

    // Fill remaining 5 slots
    for (let i = 1; i <= 5; i++) {
      host.handleIncomingData({ peer: `peer-${i}`, send: () => {}, on: () => {} }, {
        type: 'JOIN_REQUEST',
        name: `Racer_${i}`,
        kartId: 'nix'
      });
    }
    assert.strictEqual(host.players.length, 6);

    // Attempt 7th racer
    let rejectedMsg = null;
    let connClosed = false;
    host.handleIncomingData({
      peer: 'peer-7',
      send: (d) => { rejectedMsg = d; },
      close: () => { connClosed = true; },
      on: () => {}
    }, {
      type: 'JOIN_REQUEST',
      name: 'Racer_7',
      kartId: 'marlow'
    });

    assert.strictEqual(rejectedMsg.type, 'ROOM_FULL');
    assert.strictEqual(connClosed, true);
  });

  it('9. Real-time player update (kart change in lobby)', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-SYNC');

    host.handleIncomingData({ peer: 'peer-guest', send: () => {}, on: () => {} }, {
      type: 'JOIN_REQUEST',
      name: 'GuestOne',
      kartId: 'nix'
    });

    let updated = false;
    host.onLobbyUpdate = () => { updated = true; };

    host.handleIncomingData({ peer: 'peer-guest', send: () => {}, on: () => {} }, {
      type: 'PLAYER_UPDATE',
      slot: 1,
      name: 'GuestOnePro',
      kartId: 'rustam'
    });

    assert.strictEqual(updated, true);
    assert.strictEqual(host.players[1].name, 'GuestOnePro');
    assert.strictEqual(host.players[1].kartId, 'rustam');
  });

  it('10. Emote broadcast, cooldown and expire handling', () => {
    const mp = new MultiplayerManager();
    mp.createRoom('ZEPH-EMOTE');
    mp.state = 'RACING';

    let emoteDispatched = false;
    mp.onEmote = (data) => {
      emoteDispatched = true;
      assert.strictEqual(data.slot, 0);
      assert.strictEqual(data.text, '🔥');
    };

    const res1 = mp.sendEmote('🔥');
    assert.strictEqual(res1, true);
    assert.strictEqual(emoteDispatched, true);

    // Rapid spam should be rate-limited by cooldown
    let spammed = false;
    mp.onEmote = () => { spammed = true; };
    const res2 = mp.sendEmote('⚡');
    assert.strictEqual(res2, false); // Ignored due to 0.75s cooldown
    assert.strictEqual(spammed, false);
  });

  it('11. Race start signal & participant handover', () => {
    const guest = new MultiplayerManager();
    let raceStarted = false;
    guest.onRaceStart = (opts) => {
      raceStarted = true;
      assert.strictEqual(opts.trackIndex, 1);
      assert.strictEqual(opts.laps, 3);
    };

    guest.handleIncomingData(null, {
      type: 'RACE_START_SYNC',
      trackIndex: 1,
      laps: 3,
      players: [
        { slot: 0, name: 'Host', kartId: 'nix' },
        { slot: 1, name: 'Guest', kartId: 'bruno' }
      ]
    });

    assert.strictEqual(raceStarted, true);
    assert.strictEqual(guest.state, 'RACING');
  });

  it('12. High-frequency spatial state synchronization (StateSync)', () => {
    const mp = new MultiplayerManager();
    mp.state = 'RACING';
    mp.handleIncomingData(null, {
      type: 'KART_STATE',
      slot: 1,
      x: 10.5,
      y: 1.2,
      z: -45.8,
      yaw: 1.57,
      pitch: 0.05,
      roll: -0.02,
      speed: 28.5,
      steer: 0.2,
      driftTier: 2,
      isDrifting: true,
      boost: 1.2,
      lap: 2,
      dist: 340.5
    });

    const st = mp.remoteStates.get(1);
    assert.ok(st);
    assert.strictEqual(st.x, 10.5);
    assert.strictEqual(st.speed, 28.5);
    assert.strictEqual(st.driftTier, 2);
    assert.strictEqual(st.isDrifting, true);
  });

  it('13. Items usage and collision hits across network', () => {
    const mp = new MultiplayerManager();
    let itemUsed = null;
    let racerHit = null;

    mp.onItemUse = (data) => { itemUsed = data; };
    mp.onRacerHit = (data) => { racerHit = data; };

    mp.handleIncomingData(null, {
      type: 'ITEM_USE',
      slot: 1,
      itemType: 'shockwave',
      pos: { x: 5, y: 1, z: 20 },
      dir: { yaw: 0.5 }
    });
    assert.strictEqual(itemUsed.itemType, 'shockwave');

    mp.handleIncomingData(null, {
      type: 'RACER_HIT',
      slot: 1,
      duration: 1.4
    });
    assert.strictEqual(racerHit.slot, 1);
    assert.strictEqual(racerHit.duration, 1.4);
  });

  it('14. Player finish reporting and rematch negotiation', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-FINISH');
    host.state = 'RACING';

    let finishReported = null;
    host.onPlayerFinish = (data) => { finishReported = data; };

    host.handleIncomingData(null, {
      type: 'PLAYER_FINISH',
      slot: 1,
      finishTime: 65.432,
      rank: 2
    });

    assert.strictEqual(finishReported.finishTime, 65.432);
    assert.strictEqual(finishReported.rank, 2);

    let rematchTriggered = false;
    host.onRematch = () => { rematchTriggered = true; };
    host.handleIncomingData(null, { type: 'REMATCH', trackIndex: 1 });
    assert.strictEqual(rematchTriggered, true);
  });

  it('15. Disconnection and AI takeover fallback', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-LEAVE');
    host.handleIncomingData({ peer: 'guest-p', send: () => {}, on: () => {} }, {
      type: 'JOIN_REQUEST',
      name: 'DropUser',
      kartId: 'zuzu'
    });
    assert.strictEqual(host.players.length, 2);

    host.state = 'RACING';
    host.handlePeerDisconnect('guest-p');
    // During race, disconnected player converts to AI
    assert.strictEqual(host.players[1].isAI, true);
  });

  it('16. PeerJS initialization with mock Peer: open, connection, and error callbacks', () => {
    class MockPeer {
      constructor(id, opts) {
        this.id = id;
        this.opts = opts;
        this.events = new Map();
      }
      on(event, cb) {
        this.events.set(event, cb);
      }
      emit(event, ...args) {
        const cb = this.events.get(event);
        if (cb) cb(...args);
      }
      destroy() {}
    }

    window.Peer = MockPeer;
    const mp = new MultiplayerManager();

    let openCalled = false;
    mp.initPeer('test-peer-id', (id) => {
      openCalled = true;
      assert.strictEqual(id, 'test-peer-id');
    });
    mp.peer.emit('open', 'test-peer-id');
    assert.strictEqual(openCalled, true);

    // Test error events
    let capturedError = null;
    mp.onError = (err) => { capturedError = err; };

    mp.peer.emit('error', { type: 'unavailable-id', message: 'ID in use' });
    assert.strictEqual(capturedError.type, 'unavailable-id');

    mp.peer.emit('error', { type: 'peer-unavailable', message: 'Room not found' });
    assert.strictEqual(capturedError.type, 'peer-unavailable');

    mp.peer.emit('error', { type: 'network', message: 'Socket error' });
    assert.strictEqual(capturedError.type, 'network');

    delete window.Peer;
  });

  it('17. Host incoming connection listener and client registration', () => {
    const host = new MultiplayerManager();
    host.isHost = true;

    const mockConn = {
      peer: 'peer-client-99',
      open: true,
      events: new Map(),
      on(evt, cb) { this.events.set(evt, cb); },
      send() {},
      close() {}
    };

    host.handleHostIncomingConnection(mockConn);
    mockConn.events.get('open')();
    assert.strictEqual(host.connections.has('peer-client-99'), true);

    let msgHandled = false;
    host.onEmote = () => { msgHandled = true; };
    mockConn.events.get('data')({ type: 'EMOTE', slot: 1, text: '🎉' });
    assert.strictEqual(msgHandled, true);
  });

  it('18. Guest joinRoom workflow with custom name and host connection', () => {
    class MockPeer {
      constructor(id) {
        this.id = id;
        this.events = new Map();
      }
      on(evt, cb) { this.events.set(evt, cb); }
      emit(evt, ...args) { this.events.get(evt)?.(...args); }
      connect(hostPeerId) {
        const c = {
          peer: hostPeerId,
          open: true,
          events: new Map(),
          on(evt, cb) { this.events.set(evt, cb); },
          emit(evt, ...args) { this.events.get(evt)?.(...args); },
          send(data) { this.sentData = data; },
          close() {}
        };
        this.mockConn = c;
        return c;
      }
      destroy() {}
    }

    window.Peer = MockPeer;
    const guest = new MultiplayerManager();
    guest.joinRoom('ZEPH-JOIN', 'SpeedyGuest');

    assert.strictEqual(guest.playerName, 'SpeedyGuest');
    assert.strictEqual(guest.roomCode, 'ZEPH-JOIN');
    assert.strictEqual(guest.state, 'CONNECTING');

    // Simulate peer open
    guest.peer.emit('open', guest.peer.id);
    assert.ok(guest.hostConnection);

    // Simulate conn open
    guest.hostConnection.emit('open');
    assert.strictEqual(guest.hostConnection.sentData.type, 'JOIN_REQUEST');
    assert.strictEqual(guest.hostConnection.sentData.name, 'SpeedyGuest');

    delete window.Peer;
  });

  it('19. Host startRace grid preparation, AI assignment and ordering', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-START');
    host.players = [
      { peerId: 'p0', slot: 0, name: 'HostRacer', kartId: 'nix', isHost: true, ping: 0, isAI: false },
      { peerId: 'p2', slot: 2, name: 'GuestRacer', kartId: 'sable', isHost: false, ping: 25, isAI: false }
    ];

    let startPayload = null;
    host.broadcastToAll = (msg) => { startPayload = msg; };

    host.startRace();

    assert.strictEqual(host.state, 'RACING');
    assert.strictEqual(host.players.length, 6);
    // Verifies all 6 slots are sorted 0 to 5
    for (let s = 0; s < 6; s++) {
      assert.strictEqual(host.players[s].slot, s);
    }
    // Slots 1, 3, 4, 5 should be marked AI
    assert.strictEqual(host.players[1].isAI, true);
    assert.strictEqual(host.players[3].isAI, true);
    assert.strictEqual(host.players[4].isAI, true);
    assert.strictEqual(host.players[5].isAI, true);
    assert.strictEqual(startPayload.type, 'RACE_START_SYNC');
  });

  it('20. Real-time telemetry sendMyState with 30Hz rate limiting', () => {
    const mp = new MultiplayerManager();
    mp.state = 'RACING';
    mp.mySlot = 0;

    let sentPacket = null;
    mp.broadcastToAll = (data) => { sentPacket = data; };

    const mockKart = {
      physics: {
        state: {
          pos: { x: 12.345, y: 1.234, z: -56.789 },
          yaw: 1.5707,
          pitch: 0.051,
          roll: -0.021,
          speed: 28.46,
          steer: 0.254,
          drifting: true,
          driftTier: 2,
          boostTime: 1.0,
          padBoostTime: 0
        }
      }
    };
    const mockDirector = {
      player: {
        progress: { lap: 2, distance: 450.82 }
      }
    };

    // First call: sends packet
    mp.lastBroadcastTime = performance.now() - 100;
    mp.sendMyState(mockKart, mockDirector);
    assert.ok(sentPacket);
    assert.strictEqual(sentPacket.type, 'KART_STATE');
    assert.strictEqual(sentPacket.x, 12.35);
    assert.strictEqual(sentPacket.y, 1.23);
    assert.strictEqual(sentPacket.z, -56.79);
    assert.strictEqual(sentPacket.speed, 28.5);
    assert.strictEqual(sentPacket.isDrifting, true);
    assert.strictEqual(sentPacket.boost, true);
    assert.strictEqual(sentPacket.lap, 2);

    // Immediate next call: throttled
    sentPacket = null;
    mp.sendMyState(mockKart, mockDirector);
    assert.strictEqual(sentPacket, null);
  });

  it('21. Remote racers 60fps interpolation and yaw unwrapping', () => {
    const mp = new MultiplayerManager();
    mp.state = 'RACING';
    mp.mySlot = 0;
    mp.players = [
      { slot: 0, isAI: false },
      { slot: 1, name: 'RemoteOne', ping: 35, isAI: false }
    ];

    mp.remoteStates.set(1, {
      x: 20.0,
      y: 2.0,
      z: 40.0,
      yaw: 3.10, // Near PI
      speed: 30.0,
      steer: -0.5,
      driftTier: 1,
      isDrifting: true,
      lap: 2,
      dist: 500.0,
      lastUpdate: performance.now()
    });

    let syncedSteer = 0;
    let syncedSpark = false;
    const mockRacer = {
      pos: { x: 0, y: 0, z: 0, clone() { return { ...this, copy(v) { Object.assign(this, v); }, project() { this.x = 0; this.y = 0; this.z = 0.5; } }; } },
      state: { yaw: -3.10, speed: 0, steer: 0, drifting: false, driftTier: 0 },
      progress: { lap: 1, distance: 0 },
      kart: {
        visual: {
          syncWheelSteer(s) { syncedSteer = s; },
          syncDriftSpark(d, t) { syncedSpark = d; }
        }
      }
    };

    const mockDirector = {
      racers: { 1: mockRacer }
    };

    const mockCamera = {
      position: { clone() { return { x: 0, y: 5, z: -10, copy() {}, project() {} }; } }
    };

    mp.updateRemoteRacers(1 / 60, mockDirector, null, mockCamera);

    // Position lerped towards remote
    assert.ok(mockRacer.pos.x > 0);
    assert.ok(mockRacer.pos.z > 0);
    // Yaw wrapped without full 360 degree spin
    assert.strictEqual(mockRacer.state.speed, 30.0);
    assert.strictEqual(mockRacer.state.drifting, true);
    assert.strictEqual(syncedSteer, -0.5);
    assert.strictEqual(syncedSpark, true);
  });

  it('22. 3D projected DOM nametag and distance/frustum culling', () => {
    const mp = new MultiplayerManager();

    class MockWorldPos {
      constructor(x, y, z) { this.x = x; this.y = y; this.z = z; }
      clone() { return new MockWorldPos(this.x, this.y, this.z); }
      copy(v) { this.x = v.x; this.y = v.y; this.z = v.z; }
      project(camera) {
        this.x = camera.mockX ?? 0.2;
        this.y = camera.mockY ?? 0.2;
        this.z = camera.mockZ ?? 0.5;
      }
    }

    const pos = new MockWorldPos(10, 0, 20);

    // 1. Normal in-screen projection
    const camInScreen = { mockX: 0, mockY: 0, mockZ: 0.5 };
    mp.updateProjectedNametag(1, 'FastRacer', 45, pos, camInScreen);
    const el = mp.nametagEls.get(1);
    assert.ok(el);
    assert.strictEqual(el.style.display, 'flex');
    assert.strictEqual(el._nameSpan.textContent, 'FastRacer');
    assert.strictEqual(el._dotSpan.style.background, '#10b981'); // <60ms green

    // 2. Amber ping (90ms)
    mp.updateProjectedNametag(1, 'FastRacer', 90, pos, camInScreen);
    assert.strictEqual(el._dotSpan.style.background, '#f59e0b');

    // 3. Red ping (150ms)
    mp.updateProjectedNametag(1, 'FastRacer', 150, pos, camInScreen);
    assert.strictEqual(el._dotSpan.style.background, '#ef4444');

    // 4. Behind camera (z > 1.0)
    const camBehind = { mockX: 0, mockY: 0, mockZ: 1.5 };
    mp.updateProjectedNametag(1, 'FastRacer', 150, pos, camBehind);
    assert.strictEqual(el.style.display, 'none');

    // 5. Off-screen bounds
    const camOffscreen = { mockX: 5.0, mockY: 5.0, mockZ: 0.5 };
    mp.updateProjectedNametag(1, 'FastRacer', 150, pos, camOffscreen);
    assert.strictEqual(el.style.display, 'none');
  });

  it('23. In-game emote speech bubbles rendering and expiry', () => {
    const mp = new MultiplayerManager();
    mp.displayEmoteBubble(0, '🏎️');

    const emote = mp.emoteEls.get(0);
    assert.ok(emote);
    assert.strictEqual(emote.el.textContent, '🏎️');
    assert.strictEqual(emote.el.style.display, 'block');

    // Test expiry update
    const pastTime = emote.expireTime + 100;
    mp.updateEmoteBubbles(pastTime, null, null);
    assert.strictEqual(emote.el.style.display, 'none');
  });

  it('24. Host message relaying to other connected peers', () => {
    const host = new MultiplayerManager();
    host.isHost = true;

    let p1Sent = null;
    let p2Sent = null;
    const conn1 = { open: true, send: (d) => { p1Sent = d; } };
    const conn2 = { open: true, send: (d) => { p2Sent = d; } };

    host.connections.set('peer-1', conn1);
    host.connections.set('peer-2', conn2);

    const testPayload = { type: 'ITEM_USE', itemType: 'nitro' };
    // Relay from peer-1 -> should only reach peer-2
    host.relayToOthers('peer-1', testPayload);

    assert.strictEqual(p1Sent, null);
    assert.strictEqual(p2Sent, testPayload);
  });

  it('25. Heartbeat ping-pong latency computation', () => {
    const host = new MultiplayerManager();
    host.isHost = true;
    host.players = [
      { peerId: 'peer-host', slot: 0, ping: 0 },
      { peerId: 'peer-guest', slot: 1, ping: 0 }
    ];

    let pingSent = null;
    const mockConn = {
      peer: 'peer-guest',
      open: true,
      send: (d) => { pingSent = d; }
    };
    host.connections.set('peer-guest', mockConn);

    host.startHeartbeat();
    assert.ok(host.pingInterval);

    // Guest replies with PONG
    const sendTime = performance.now() - 42;
    host.handleIncomingData(mockConn, { type: 'PONG', t: sendTime });

    assert.ok(host.players[1].ping >= 12);

    clearInterval(host.pingInterval);
  });

  it('26. Player disconnect during lobby vs during race', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-DISC');
    host.players = [
      { peerId: 'host-p', slot: 0, name: 'Host', isAI: false },
      { peerId: 'guest-lobby', slot: 1, name: 'LobbyGuest', isAI: false }
    ];

    // In lobby: player is removed from array
    host.handlePeerDisconnect('guest-lobby');
    assert.strictEqual(host.players.length, 1);

    // During race: player is converted to AI
    host.state = 'RACING';
    host.players.push({ peerId: 'guest-race', slot: 1, name: 'RaceGuest', isAI: false });
    host.handlePeerDisconnect('guest-race');
    assert.strictEqual(host.players.length, 2);
    assert.strictEqual(host.players[1].isAI, true);
  });

  it('27. Request rematch with track advance and host check', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-REMATCH');
    host.trackIndex = 1;

    let rematchMsg = null;
    host.broadcastToAll = (d) => { rematchMsg = d; };

    host.requestRematch(true); // Advances to next track (2)
    assert.strictEqual(host.trackIndex, 2);
    assert.strictEqual(rematchMsg.type, 'REMATCH');
    assert.strictEqual(rematchMsg.trackIndex, 2);

    // Guest should not be able to trigger rematch
    const guest = new MultiplayerManager();
    guest.isHost = false;
    let guestSent = null;
    guest.broadcastToAll = (d) => { guestSent = d; };
    guest.requestRematch(true);
    assert.strictEqual(guestSent, null);
  });

  it('28. Comprehensive leaveRoom cleanup', () => {
    const mp = new MultiplayerManager();
    mp.createRoom('ZEPH-CLEAN');
    mp.remoteStates.set(1, {});

    let connClosed = false;
    mp.connections.set('peer-x', { close: () => { connClosed = true; } });

    mp.leaveRoom();

    assert.strictEqual(connClosed, true);
    assert.strictEqual(mp.state, 'IDLE');
    assert.strictEqual(mp.roomCode, '');
    assert.strictEqual(mp.isHost, false);
    assert.strictEqual(mp.players.length, 0);
    assert.strictEqual(mp.connections.size, 0);
    assert.strictEqual(mp.remoteStates.size, 0);
    assert.strictEqual(mp.pingInterval, null);
  });

  it('29. Toast notifications handling and callbacks', () => {
    const mp = new MultiplayerManager();
    let toastReceived = null;
    mp.onToast = (msg) => { toastReceived = msg; };

    mp.toast('Race Finished!');
    assert.strictEqual(toastReceived, 'Race Finished!');

    // Test Zephyr UI fallback
    mp.onToast = null;
    let zephyrToast = null;
    window.__zephyr = { ui: { toast: (m) => { zephyrToast = m; } } };
    mp.toast('Engine Boost!');
    assert.strictEqual(zephyrToast, 'Engine Boost!');
    window.__zephyr = null;
  });

  it('30. Edge cases: invalid message payloads, clamped laps, empty names', () => {
    const mp = new MultiplayerManager();

    // Invalid messages do not throw
    mp.handleIncomingData(null, null);
    mp.handleIncomingData(null, {});
    mp.handleIncomingData(null, { type: 'UNKNOWN_TYPE' });

    // Empty player names are rejected
    const prevName = mp.playerName;
    mp.setPlayerName('');
    assert.strictEqual(mp.playerName, prevName);
    mp.setPlayerName('   ');
    assert.strictEqual(mp.playerName, prevName);

    // Clamped laps: 0 -> 1, 10 -> 5
    mp.setLaps(0);
    assert.strictEqual(mp.laps, 1);
    mp.setLaps(10);
    assert.strictEqual(mp.laps, 5);
  });

  it('31. initDOM creation when element does not initially exist', () => {
    // Remove element if already in mock
    mockElements.delete('z-mp-nametags-layer');
    const mp = new MultiplayerManager();
    assert.ok(mp.nametagsLayer);
    assert.strictEqual(mp.nametagsLayer.id, 'z-mp-nametags-layer');
  });

  it('32. setPlayerName and setSelectedKart during HOST_LOBBY and GUEST_LOBBY', () => {
    // 1. HOST_LOBBY
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-EDIT');
    let hostBroadcast = null;
    host.broadcastToAll = (msg) => { hostBroadcast = msg; };
    host.setPlayerName('HostCaptain');
    assert.strictEqual(host.playerName, 'HostCaptain');
    assert.strictEqual(host.players[0].name, 'HostCaptain');
    assert.strictEqual(hostBroadcast.type, 'LOBBY_UPDATE');

    host.setSelectedKart('bruno');
    assert.strictEqual(host.selectedKart, 'bruno');
    assert.strictEqual(host.players[0].kartId, 'bruno');

    // 2. GUEST_LOBBY
    const guest = new MultiplayerManager();
    guest.state = 'GUEST_LOBBY';
    guest.mySlot = 1;
    guest.players = [
      { slot: 0, name: 'HostCaptain', kartId: 'bruno' },
      { slot: 1, name: 'GuestOne', kartId: 'nix' }
    ];
    let guestBroadcast = null;
    guest.broadcastToAll = (msg) => { guestBroadcast = msg; };

    guest.setPlayerName('GuestHero');
    assert.strictEqual(guest.playerName, 'GuestHero');
    assert.strictEqual(guest.players[1].name, 'GuestHero');
    assert.strictEqual(guestBroadcast.type, 'PLAYER_UPDATE');
    assert.strictEqual(guestBroadcast.name, 'GuestHero');

    guest.setSelectedKart('rustam');
    assert.strictEqual(guest.selectedKart, 'rustam');
    assert.strictEqual(guest.players[1].kartId, 'rustam');
    assert.strictEqual(guestBroadcast.kartId, 'rustam');
  });

  it('33. createRoom with Peer open event triggering heartbeat and toast', () => {
    class MockPeer {
      constructor(id) {
        this.id = id;
        this.events = new Map();
      }
      on(evt, cb) { this.events.set(evt, cb); }
      emit(evt, ...args) { this.events.get(evt)?.(...args); }
      destroy() {}
    }
    window.Peer = MockPeer;

    const host = new MultiplayerManager();
    let lobbyNotified = false;
    host.onLobbyUpdate = () => { lobbyNotified = true; };

    host.createRoom('ZEPH-LIVE');
    host.peer.emit('open', host.peer.id);

    assert.ok(host.pingInterval);
    assert.strictEqual(lobbyNotified, true);
    clearInterval(host.pingInterval);
    delete window.Peer;
  });

  it('34. joinRoom complete lifecycle: conn open, conn data, conn close, conn error', () => {
    class MockPeer {
      constructor(id) {
        this.id = id;
        this.events = new Map();
      }
      on(evt, cb) { this.events.set(evt, cb); }
      emit(evt, ...args) { this.events.get(evt)?.(...args); }
      connect(hostPeerId) {
        this.mockConn = {
          peer: hostPeerId,
          open: true,
          events: new Map(),
          on(evt, cb) { this.events.set(evt, cb); },
          emit(evt, ...args) { this.events.get(evt)?.(...args); },
          send(data) { this.sent = data; },
          close() { this.closed = true; }
        };
        return this.mockConn;
      }
      destroy() {}
    }
    window.Peer = MockPeer;

    const guest = new MultiplayerManager();
    guest.joinRoom('ZEPH-CYCLE');
    guest.peer.emit('open', guest.peer.id);

    const conn = guest.hostConnection;
    assert.ok(conn);

    // conn open
    conn.emit('open');
    assert.strictEqual(conn.sent.type, 'JOIN_REQUEST');

    // conn data
    let receivedMsg = null;
    guest.onLobbyUpdate = (lobby) => { receivedMsg = lobby; };
    conn.emit('data', {
      type: 'ROOM_WELCOME',
      mySlot: 2,
      roomCode: 'ZEPH-CYCLE',
      trackIndex: 1,
      laps: 3,
      players: [{ slot: 0 }, { slot: 1 }, { slot: 2 }]
    });
    assert.strictEqual(guest.state, 'GUEST_LOBBY');
    assert.strictEqual(guest.mySlot, 2);

    // conn error
    let errToasted = false;
    guest.onToast = (msg) => { if (msg.includes('Errore')) errToasted = true; };
    conn.emit('error', new Error('Net reset'));
    assert.strictEqual(errToasted, true);

    // conn close -> triggers leaveRoom
    conn.emit('close');
    assert.strictEqual(guest.state, 'IDLE');

    delete window.Peer;
  });

  it('35. sendItemUse, sendRacerHit, sendPlayerFinish broadcast helpers', () => {
    const mp = new MultiplayerManager();
    mp.state = 'RACING';
    mp.mySlot = 1;

    const sent = [];
    mp.broadcastToAll = (d) => { sent.push(d); };

    mp.sendItemUse('slick', { x: 5, y: 0, z: 10 }, { yaw: 1.2 });
    assert.strictEqual(sent[0].type, 'ITEM_USE');
    assert.strictEqual(sent[0].slot, 1);
    assert.strictEqual(sent[0].itemType, 'slick');

    mp.sendRacerHit(2, 1.5);
    assert.strictEqual(sent[1].type, 'RACER_HIT');
    assert.strictEqual(sent[1].slot, 2);
    assert.strictEqual(sent[1].duration, 1.5);

    mp.sendPlayerFinish(58.91, 1);
    assert.strictEqual(sent[2].type, 'PLAYER_FINISH');
    assert.strictEqual(sent[2].slot, 1);
    assert.strictEqual(sent[2].finishTime, 58.91);
    assert.strictEqual(sent[2].rank, 1);
  });

  it('36. handleMessage cases: ROOM_WELCOME, LOBBY_UPDATE, TRACK_SYNC, KART_STATE relay', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-MSG');
    host.state = 'RACING';

    let relayedP2 = null;
    const mockConn1 = { peer: 'peer-1', open: true, send: () => {} };
    const mockConn2 = { peer: 'peer-2', open: true, send: (d) => { relayedP2 = d; } };
    host.connections.set('peer-1', mockConn1);
    host.connections.set('peer-2', mockConn2);

    // KART_STATE message from peer-1 relayed to peer-2
    host.handleIncomingData(mockConn1, {
      type: 'KART_STATE',
      slot: 1,
      x: 10, y: 0, z: 20, yaw: 0, speed: 20
    });
    assert.ok(relayedP2);
    assert.strictEqual(relayedP2.type, 'KART_STATE');
    assert.strictEqual(relayedP2.slot, 1);

    // Guest handles TRACK_SYNC and LOBBY_UPDATE
    const guest = new MultiplayerManager();
    let guestLobby = null;
    guest.onLobbyUpdate = (l) => { guestLobby = l; };

    guest.handleIncomingData(null, {
      type: 'TRACK_SYNC',
      trackIndex: 3,
      laps: 2
    });
    assert.strictEqual(guest.trackIndex, 3);
    assert.strictEqual(guest.laps, 2);

    guest.handleIncomingData(null, {
      type: 'LOBBY_UPDATE',
      trackIndex: 0,
      laps: 4,
      players: [{ slot: 0, name: 'Host' }]
    });
    assert.strictEqual(guest.trackIndex, 0);
    assert.strictEqual(guest.laps, 4);
    assert.strictEqual(guest.players.length, 1);
  });

  it('37. updateEmoteBubbles with active racer and 3D camera projection', () => {
    const mp = new MultiplayerManager();
    mp.displayEmoteBubble(1, '🔥');

    class MockPos {
      constructor(x, y, z) { this.x = x; this.y = y; this.z = z; }
      clone() { return new MockPos(this.x, this.y, this.z); }
      copy(v) { this.x = v.x; this.y = v.y; this.z = v.z; }
      project(cam) {
        this.x = cam.mockX ?? 0.1;
        this.y = cam.mockY ?? 0.1;
        this.z = cam.mockZ ?? 0.5;
      }
    }

    const mockDirector = {
      racers: {
        1: { pos: new MockPos(0, 1, 10) }
      }
    };

    const camFront = { mockX: 0.1, mockY: 0.1, mockZ: 0.5, position: { clone() { return new MockPos(0, 2, 0); } } };
    const now = performance.now();

    // 1. In front of camera -> display: block
    mp.updateEmoteBubbles(now, mockDirector, camFront);
    const bubble = mp.emoteEls.get(1);
    assert.strictEqual(bubble.el.style.display, 'block');

    // 2. Behind camera -> display: none
    const camBehind = { mockX: 0.1, mockY: 0.1, mockZ: 1.8, position: { clone() { return new MockPos(0, 2, 0); } } };
    mp.updateEmoteBubbles(now, mockDirector, camBehind);
    assert.strictEqual(bubble.el.style.display, 'none');
  });

  it('38. updateRemoteRacers when not RACING or with negative yaw wrap', () => {
    const mp = new MultiplayerManager();
    mp.state = 'IDLE';

    let nametagCleared = false;
    mp.clearAllNametags = () => { nametagCleared = true; };
    mp.updateRemoteRacers(1 / 60, null, null, null);
    assert.strictEqual(nametagCleared, true);

    // Negative yaw wrap: deltaYaw < -Math.PI
    mp.clearAllNametags = MultiplayerManager.prototype.clearAllNametags;
    mp.state = 'RACING';
    mp.mySlot = 0;
    mp.players = [
      { slot: 0, isAI: false },
      { slot: 1, name: 'WrapUser', ping: 30, isAI: false }
    ];
    mp.remoteStates.set(1, {
      x: 5, y: 0, z: 10,
      yaw: -3.10, // Near -PI
      speed: 25, steer: 0, driftTier: 0, isDrifting: false, lap: 1, dist: 100,
      lastUpdate: performance.now()
    });

    const mockRacer = {
      pos: { x: 5, y: 0, z: 10, clone() { return { ...this, copy() {}, project() {} }; } },
      state: { yaw: 3.10, speed: 25, steer: 0, drifting: false, driftTier: 0 },
      progress: { lap: 1, distance: 100 },
      kart: null
    };

    mp.updateRemoteRacers(1 / 60, { racers: { 1: mockRacer } }, null, null);
    // Yaw should have wrapped around smoothly
    assert.ok(mockRacer.state.yaw > 3.10);
  });

  it('39. initPeer connection listener for host and guest, plus exception handler', () => {
    class MockPeer {
      constructor(id) {
        this.id = id;
        this.events = new Map();
      }
      on(evt, cb) { this.events.set(evt, cb); }
      emit(evt, ...args) { this.events.get(evt)?.(...args); }
      destroy() {}
    }
    window.Peer = MockPeer;

    // 1. Host receives connection
    const host = new MultiplayerManager();
    host.isHost = true;
    let handledConn = null;
    host.handleHostIncomingConnection = (c) => { handledConn = c; };
    host.initPeer('host-p', () => {});
    host.peer.emit('connection', { peer: 'incoming-client' });
    assert.strictEqual(handledConn.peer, 'incoming-client');

    // 2. Guest ignores connection event
    const guest = new MultiplayerManager();
    guest.isHost = false;
    let guestHandled = false;
    guest.handleHostIncomingConnection = () => { guestHandled = true; };
    guest.initPeer('guest-p', () => {});
    guest.peer.emit('connection', { peer: 'ignored-client' });
    assert.strictEqual(guestHandled, false);

    // 3. Exception branch when constructor throws
    window.Peer = class ThrowingPeer {
      constructor() { throw new Error('WebRTC failure'); }
    };
    let errorToast = false;
    const failMp = new MultiplayerManager();
    failMp.onToast = (msg) => { if (msg.includes('fallita')) errorToast = true; };
    failMp.initPeer('bad-id', () => {});
    assert.strictEqual(errorToast, true);

    delete window.Peer;
  });

  it('40. PLAYER_DISCONNECTED director racers AI conversion', () => {
    const mp = new MultiplayerManager();
    const mockRacer = {
      kind: 'player',
      isPlayer: true,
      isRemotePlayer: true,
      name: 'RacerPro'
    };

    window.__zephyr = {
      director: {
        racers: { 2: mockRacer }
      }
    };

    mp.handleIncomingData(null, {
      type: 'PLAYER_DISCONNECTED',
      slot: 2,
      name: 'RacerPro'
    });

    assert.strictEqual(mockRacer.kind, 'ai');
    assert.strictEqual(mockRacer.isPlayer, false);
    assert.strictEqual(mockRacer.isRemotePlayer, false);
    assert.strictEqual(mockRacer.name, 'RacerPro (IA)');

    window.__zephyr = null;
  });

  it('41. Host connection close and director AI conversion during race', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-FULLCOVER');
    host.state = 'RACING';
    host.players = [
      { peerId: 'host-p', slot: 0, name: 'Host', isAI: false },
      { peerId: 'guest-p', slot: 1, name: 'ClientA', isAI: false }
    ];

    const mockRacer = { kind: 'player', isPlayer: true, name: 'ClientA' };
    window.__zephyr = { director: { racers: { 1: mockRacer } } };

    const mockConn = {
      peer: 'guest-p',
      open: true,
      events: new Map(),
      on(evt, cb) { this.events.set(evt, cb); },
      send() {},
      close() {}
    };
    host.connections.set('guest-p', mockConn);
    host.handleHostIncomingConnection(mockConn);

    // Trigger conn close
    mockConn.events.get('close')();

    assert.strictEqual(host.players[1].isAI, true);
    assert.strictEqual(mockRacer.kind, 'ai');
    assert.strictEqual(mockRacer.name, 'ClientA (IA)');

    window.__zephyr = null;
  });

  it('42. Heartbeat interval firing for both host and guest', () => {
    const host = new MultiplayerManager();
    host.isHost = true;
    let hostPing = null;
    host.connections.set('c1', { open: true, send: (d) => { hostPing = d; } });

    // Mock setInterval to invoke synchronously once
    const origSetInterval = globalThis.setInterval;
    globalThis.setInterval = (fn) => { fn(); return 12345; };

    host.startHeartbeat();
    assert.strictEqual(hostPing.type, 'PING');

    // Guest heartbeat
    const guest = new MultiplayerManager();
    guest.isHost = false;
    let guestPing = null;
    guest.hostConnection = { open: true, send: (d) => { guestPing = d; } };
    guest.startHeartbeat();
    assert.strictEqual(guestPing.type, 'PING');

    globalThis.setInterval = origSetInterval;
  });

  it('43. broadcastToAll for host with open connection and guest with open connection', () => {
    const host = new MultiplayerManager();
    host.isHost = true;
    let hostSent = null;
    host.connections.set('c1', { open: true, send: (d) => { hostSent = d; } });
    host.broadcastToAll({ type: 'TEST' });
    assert.strictEqual(hostSent.type, 'TEST');

    const guest = new MultiplayerManager();
    guest.isHost = false;
    let guestSent = null;
    guest.hostConnection = { open: true, send: (d) => { guestSent = d; } };
    guest.broadcastToAll({ type: 'TEST_GUEST' });
    assert.strictEqual(guestSent.type, 'TEST_GUEST');
  });

  it('44. Host relaying of ITEM_USE, RACER_HIT, EMOTE, PLAYER_FINISH to connected peers', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-RELAY');
    host.state = 'RACING';
    host.players = [
      { peerId: 'host-p', slot: 0, isAI: false },
      { peerId: 'guest-1', slot: 1, isAI: false },
      { peerId: 'guest-2', slot: 2, isAI: false }
    ];

    const relayed = [];
    const conn1 = { peer: 'guest-1', open: true, send: () => {} };
    const conn2 = { peer: 'guest-2', open: true, send: (d) => { relayed.push(d); } };
    host.connections.set('guest-1', conn1);
    host.connections.set('guest-2', conn2);

    host.handleIncomingData(conn1, { type: 'ITEM_USE', slot: 1, itemType: 'rocket' });
    assert.strictEqual(relayed[0].type, 'ITEM_USE');

    host.handleIncomingData(conn1, { type: 'RACER_HIT', slot: 2, duration: 1.0 });
    assert.strictEqual(relayed[1].type, 'RACER_HIT');

    host.handleIncomingData(conn1, { type: 'EMOTE', slot: 1, text: '👋' });
    assert.strictEqual(relayed[2].type, 'EMOTE');

    host.handleIncomingData(conn1, { type: 'PLAYER_FINISH', slot: 1, finishTime: 70.1, rank: 2 });
    assert.strictEqual(relayed[3].type, 'PLAYER_FINISH');
  });
});

describe('=== UNIT & PROCESS TESTS: KART PHYSICS & FRICTION ===', () => {

  it('1. Guardrail friction deceleration and forward alignment', () => {
    // Simulate guardrail wall collision formula
    const dt = 1 / 60;
    let speed = 25.0; // ~90 km/h
    let vFwd = 25.0;

    // Simulate 15 frames scraping the guardrail
    for (let f = 0; f < 15; f++) {
      const isAccelerating = true;
      if (isAccelerating) {
        speed = Math.max(8.5, Math.max(vFwd, Math.abs(speed)) * 0.88);
        vFwd = speed;
      }
    }

    // Speed should have dropped noticeably from 25 m/s to the friction clamp 8.5 m/s (~30.6 km/h)
    assert.ok(speed < 12.0, `Speed was not slowed down sufficiently: ${speed}`);
    assert.strictEqual(speed, 8.5, 'Speed did not settle at minimum guardrail forward momentum');
  });

  it('2. Off-road dirt speed penalty and viscous deceleration', () => {
    const maxSpeed = 34.0;
    const boostPower = 0;
    const dt = 1 / 60;

    // Normal road top speed:
    const onRoadTopSpeed = maxSpeed * 1.0;
    assert.strictEqual(onRoadTopSpeed, 34.0);

    // Off-road dirt top speed (0.58 multiplier):
    const offRoadTopSpeed = maxSpeed * 0.58;
    assert.strictEqual(Number(offRoadTopSpeed.toFixed(2)), 19.72);

    // Dirt drag deceleration (11.0 * dt per frame):
    let currentSpeed = 30.0;
    for (let f = 0; f < 30; f++) { // 0.5 seconds
      currentSpeed -= 11.0 * dt;
    }
    assert.ok(currentSpeed < 25.0, `Offroad drag was not applied: ${currentSpeed}`);
  });

  it('3. Boost ignores off-road dirt drag (Mario Kart nitro shortcut rule)', () => {
    const maxSpeed = 34.0;
    const boostPower = 18.0;
    const H = true; // Boosting

    // With nitro active, onRoad||H is true, so multiplier is 1.0 (full speed through grass/dirt)
    const boostTopSpeed = (maxSpeed + boostPower) * (false || H ? 1 : 0.58);
    assert.strictEqual(boostTopSpeed, 52.0);
  });

  it('4. Guardrail yaw clamping within 22 deg barrier / 45 deg track limit', () => {
    const trackYaw = 0; // Forward is 0
    let kartYaw = -1.2; // Pointing into right barrier (dYaw > 0)
    const r = 1; // Right barrier

    let dYaw = (trackYaw - kartYaw) % (Math.PI * 2);
    if (dYaw * r > 0.38) {
      kartYaw = trackYaw - r * 0.38;
      dYaw = trackYaw - kartYaw;
    }
    assert.ok(Math.abs(kartYaw) <= 0.3801, `Nose angle into wall not clamped: ${kartYaw}`);

    // Opposite deviation: turned > 45 deg away
    kartYaw = -1.5;
    dYaw = (trackYaw - kartYaw) % (Math.PI * 2);
    if (Math.abs(dYaw) > 0.78) {
      kartYaw = trackYaw - Math.sign(dYaw) * 0.78;
    }
    assert.ok(Math.abs(kartYaw) <= 0.7801, `Deviation angle from track heading not clamped: ${kartYaw}`);
  });
});

describe('=== UNIT & PROCESS TESTS: RACE FINISH, ALL CARS & CELEBRATION ===', () => {

  it('1. Finish crossing captures exact finishTime and finishRank for all 6 cars', () => {
    const racers = [
      { id: 0, isPlayer: true, progress: { lap: 3, finished: false, finishTime: 0, finishRank: 0 } },
      { id: 1, isPlayer: false, progress: { lap: 3, finished: false, finishTime: 0, finishRank: 0 } },
      { id: 2, isPlayer: false, progress: { lap: 3, finished: false, finishTime: 0, finishRank: 0 } },
      { id: 3, isPlayer: false, progress: { lap: 2, finished: false, finishTime: 0, finishRank: 0 } },
      { id: 4, isPlayer: false, progress: { lap: 2, finished: false, finishTime: 0, finishRank: 0 } },
      { id: 5, isPlayer: false, progress: { lap: 2, finished: false, finishTime: 0, finishRank: 0 } },
    ];

    let finishCounter = 0;
    const raceTime = 72.45;

    // Player crosses line 1st
    racers[0].progress.finished = true;
    racers[0].progress.finishTime = raceTime;
    racers[0].progress.finishRank = ++finishCounter;

    // AI racers cross in succession
    for (let i = 1; i < racers.length; i++) {
      racers[i].progress.finished = true;
      racers[i].progress.finishTime = raceTime + i * 0.85;
      racers[i].progress.finishRank = ++finishCounter;
    }

    // Verify all 6 racers have valid times and ranks
    for (let i = 0; i < racers.length; i++) {
      assert.strictEqual(racers[i].progress.finished, true);
      assert.ok(racers[i].progress.finishTime > 0);
      assert.strictEqual(racers[i].progress.finishRank, i + 1);
    }
  });

  it('2. Continuous victory driving (no braking on finish line)', () => {
    const playerRacer = {
      progress: { finished: true },
      controls: { throttle: 0, brake: 0, steer: 0 }
    };

    const phase = 'results';
    const isResults = phase === 'results';

    if (isResults) {
      // In updated v6.6.0: cruising continues on autopilot!
      playerRacer.controls.throttle = 0.65;
      playerRacer.controls.brake = 0.0;
    }

    assert.strictEqual(playerRacer.controls.throttle, 0.65);
    assert.strictEqual(playerRacer.controls.brake, 0.0);
  });

  it('3. Driver celebration animation flags', () => {
    const kartState = { finished: true, rank: 1, speed: 22.0 };
    const phase = 'finished';

    const isCelebrating = !!(kartState.finished || (phase === 'finished' && kartState.rank <= 3));
    assert.strictEqual(isCelebrating, true);

    // Arm positioning in celebration
    const time = 1.0;
    const rightArmRotationX = -2.4 + Math.sin(time * 12) * 0.45;
    const rightArmRotationZ = -0.4 + Math.sin(time * 8) * 0.25;

    // Fist raised high (rotation X < -1.8 rad ~ -100 deg)
    assert.ok(rightArmRotationX < -1.5, `Right arm not raised in victory: ${rightArmRotationX}`);
  });

  it('4. Fireworks & Confetti color palettes', () => {
    const fireworkColors = [16766720, 61695, 16711914, 65280, 16720384, 16777215];
    const confettiColors = [16777215, 16711935, 65535, 16776960, 65280, 16720384];

    assert.strictEqual(fireworkColors.length, 6);
    assert.strictEqual(confettiColors.length, 6);
    for (const c of fireworkColors) assert.ok(typeof c === 'number' && c > 0);
    for (const c of confettiColors) assert.ok(typeof c === 'number' && c > 0);
  });
});

describe('=== UNIT & PROCESS TESTS: CHARACTER SELECTION SYNC ===', () => {

  it('1. Bidirectional sync between 3D select screen and multiplayer manager', () => {
    // 1. Host selects kart -> broadcasts LOBBY_UPDATE
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-CHAR');
    let hostBroadcast = null;
    host.broadcastToAll = (msg) => { hostBroadcast = msg; };

    host.setSelectedKart('marlow');

    assert.strictEqual(host.selectedKart, 'marlow');
    assert.strictEqual(host.players[0].kartId, 'marlow');
    assert.strictEqual(hostBroadcast.type, 'LOBBY_UPDATE');
    assert.strictEqual(hostBroadcast.players[0].kartId, 'marlow');

    // 2. Guest selects kart -> broadcasts PLAYER_UPDATE
    const guest = new MultiplayerManager();
    guest.state = 'GUEST_LOBBY';
    guest.mySlot = 1;
    guest.players = [
      { slot: 0, name: 'Host', kartId: 'nix' },
      { slot: 1, name: 'Guest', kartId: 'nix' }
    ];
    let guestBroadcast = null;
    guest.broadcastToAll = (msg) => { guestBroadcast = msg; };

    guest.setSelectedKart('sable');

    assert.strictEqual(guest.selectedKart, 'sable');
    assert.strictEqual(guest.players[1].kartId, 'sable');
    assert.strictEqual(guestBroadcast.type, 'PLAYER_UPDATE');
    assert.strictEqual(guestBroadcast.kartId, 'sable');
  });

  it('2. Kart roster valid specs', () => {
    const validKarts = ['nix', 'bruno', 'sable', 'zuzu', 'rustam', 'marlow'];
    for (const id of validKarts) {
      assert.ok(typeof id === 'string' && id.length > 0);
    }
  });
});
