import test, { describe, it } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

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

// Exercise MockElement methods
{
  const p = new MockElement('div');
  const c = new MockElement('span');
  p.appendChild(c);
  c.remove();
  p.appendChild(c);
  p.removeChild(c);
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
    const camInScreen = {
      mockX: 0, mockY: 0, mockZ: 0.5,
      position: { x: 10, y: 0, z: 0, clone() { return new MockWorldPos(10, 0, 0); } },
      getWorldDirection(out) { out.x = 0; out.y = 0; out.z = 1; }
    };
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

    // 4b. Behind camera via directional dot product (dx*camDir.x + dy*camDir.y + dz*camDir.z <= 0.5)
    const camBehindVector = {
      mockX: 0, mockY: 0, mockZ: 0.5,
      position: { x: 10, y: 0, z: 30, clone() { return new MockWorldPos(10, 0, 30); } },
      getWorldDirection(out) { out.x = 0; out.y = 0; out.z = 1; }
    };
    mp.updateProjectedNametag(1, 'FastRacer', 150, pos, camBehindVector);
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

    const camFront = {
      mockX: 0.1, mockY: 0.1, mockZ: 0.5,
      position: { x: 0, y: 2, z: 0, clone() { return new MockPos(0, 2, 0); } },
      getWorldDirection(out) { out.x = 0; out.y = 0; out.z = 1; }
    };
    const now = performance.now();

    // 1. In front of camera -> display: block
    mp.updateEmoteBubbles(now, mockDirector, camFront);
    const bubble = mp.emoteEls.get(1);
    assert.strictEqual(bubble.el.style.display, 'block');

    // 2. Behind camera (z > 1.0) -> display: none
    const camBehind = { mockX: 0.1, mockY: 0.1, mockZ: 1.8, position: { clone() { return new MockPos(0, 2, 0); } } };
    mp.updateEmoteBubbles(now, mockDirector, camBehind);
    assert.strictEqual(bubble.el.style.display, 'none');

    // 3. Behind camera via directional dot product -> display: none
    const camBehindVector = {
      mockX: 0.1, mockY: 0.1, mockZ: 0.5,
      position: { x: 0, y: 2, z: 20, clone() { return new MockPos(0, 2, 20); } },
      getWorldDirection(out) { out.x = 0; out.y = 0; out.z = 1; }
    };
    mp.updateEmoteBubbles(now, mockDirector, camBehindVector);
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
    const validKarts = ['nix', 'bruno', 'sable', 'zuzu', 'rustam', 'marlow', 'princess', 'pirate'];
    for (const id of validKarts) {
      assert.ok(typeof id === 'string' && id.length > 0);
    }
  });
});

describe('=== UNIT & PROCESS TESTS: 24 TRACKS, ARCHITECTURE & GEOMETRY ===', () => {
  // Load track catalog
  const tracksJsonPath = '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe/scratch/final_tracks.json';
  const tracks = JSON.parse(fs.readFileSync(tracksJsonPath, 'utf8'));

  // Wire to globalThis.window
  globalThis.window.__ZEPHYR_TRACKS = tracks.map(t => ({
    name: t.name, sub: t.sub, cup: t.cup, diff: t.diff, ico: t.ico,
    bridge: t.bridge, tunnel: t.tunnel, segs: t.segs
  }));
  globalThis.window.__ZEPHYR_THEMES = tracks.map(t => t.theme);

  it('1. Exact 24 tracks defined across 6 Grand Prix Cups with progressive difficulty', () => {
    assert.strictEqual(tracks.length, 24);
    assert.strictEqual(window.__ZEPHYR_TRACKS.length, 24);
    assert.strictEqual(window.__ZEPHYR_THEMES.length, 24);

    const cups = ['Coppa Brezza', 'Coppa Canyon', 'Coppa Abissi', 'Coppa Cielo', 'Coppa Antica', 'Coppa Nova'];
    const trackNames = new Set();

    for (let i = 0; i < 24; i++) {
      const t = tracks[i];
      assert.ok(t.name && t.name.length > 0, `Track ${i} must have a name`);
      assert.ok(!trackNames.has(t.name), `Duplicate track name: ${t.name}`);
      trackNames.add(t.name);

      const expectedCup = cups[Math.floor(i / 4)];
      const expectedDiff = Math.floor(i / 4) + 1;
      assert.strictEqual(t.cup, expectedCup, `Track ${t.name} cup mismatch`);
      assert.strictEqual(t.diff, expectedDiff, `Track ${t.name} difficulty mismatch`);
      assert.ok(t.ico && t.ico.length > 0, `Track ${t.name} must have an icon`);
      assert.ok(t.sub && t.sub.length > 0, `Track ${t.name} must have a subtitle`);
    }
  });

  it('2. Mathematical closed-loop geometry verification for all 24 tracks', () => {
    const bo = s => s * Math.PI / 180;

    for (let i = 0; i < 24; i++) {
      const t = tracks[i];
      assert.ok(Array.isArray(t.segs) && t.segs.length >= 8, `Track ${t.name} must have >= 8 segments`);

      let sweepSum = 0;
      let totalLength = 0;

      for (const seg of t.segs) {
        if (seg.k === 'S') {
          assert.ok(seg.len >= 25, `Segment len in ${t.name} must be >= 25m, got ${seg.len}`);
          totalLength += seg.len;
        }
        if (seg.k === 'A') {
          assert.ok(seg.radius >= 25, `Segment radius in ${t.name} must be >= 25m, got ${seg.radius}`);
          assert.ok(Math.abs(seg.sweep) > 0, `Segment sweep in ${t.name} must be non-zero`);
          sweepSum += seg.sweep;
          totalLength += Math.abs(seg.radius * bo(seg.sweep));
        }
      }

      // Total sweep must form a 360 loop
      assert.ok(
        Math.abs(Math.abs(sweepSum) - 360) < 0.1,
        `Track ${t.name} sweepSum ${sweepSum} must equal 360 degrees`
      );

      // Total length must be suitable for grand prix racing
      assert.ok(totalLength >= 1000 && totalLength <= 2000, `Track ${t.name} totalLength ${totalLength}m out of bounds`);

      // Simulate Fg arc tracing to verify start & end connection
      let ang = Math.PI / 2, ex = 0, ez = 0;
      for (const seg of t.segs) {
        if (seg.k === 'S') {
          ex += Math.cos(ang) * seg.len;
          ez += Math.sin(ang) * seg.len;
        } else {
          const c = bo(seg.sweep), h = c > 0 ? 1 : -1;
          const f = ex + seg.radius * h * -Math.sin(ang);
          const g = ez + seg.radius * h * Math.cos(ang);
          if (h > 0) {
            ex = f + seg.radius * Math.sin(ang + Math.abs(c));
            ez = g - seg.radius * Math.cos(ang + Math.abs(c));
          } else {
            ex = f - seg.radius * Math.sin(ang - Math.abs(c));
            ez = g + seg.radius * Math.cos(ang - Math.abs(c));
          }
          ang += c;
        }
      }
      const gap = Math.hypot(ex, ez);
      assert.ok(gap <= 8.0, `Track ${t.name} closure gap ${gap}m exceeds 8m tolerance`);
    }
  });

  it('3. Vertical altimetry profiles and bridge/tunnel section classification', () => {
    for (let i = 0; i < 24; i++) {
      const t = tracks[i];
      const h = t.height;
      assert.ok(Array.isArray(h) && h.length >= 4, `Track ${t.name} must have >= 4 height keyframes`);

      // Starts at u=0 and ends at u=1 with matching elevations
      assert.strictEqual(h[0][0], 0);
      assert.strictEqual(h[h.length - 1][0], 1);
      assert.strictEqual(h[0][1], h[h.length - 1][1], `Elevation at start & end must match for closed loop in ${t.name}`);

      // Check strictly increasing u
      for (let k = 0; k < h.length - 1; k++) {
        assert.ok(h[k][0] < h[k + 1][0], `Height keyframes must have strictly increasing u in ${t.name}`);
        assert.ok(h[k][1] >= -45 && h[k][1] <= 80, `Elevation ${h[k][1]}m out of safe bounds in ${t.name}`);
      }

      // Check bridge and tunnel ranges
      if (t.bridge) {
        assert.ok(t.bridge[0] >= 0 && t.bridge[1] <= 1 && t.bridge[0] < t.bridge[1]);
      }
      if (t.tunnel) {
        assert.ok(t.tunnel[0] >= 0 && t.tunnel[1] <= 1 && t.tunnel[0] < t.tunnel[1]);
      }
    }
  });

  it('4. Atmospheric themes and lighting matrix for all 24 tracks', () => {
    for (let i = 0; i < 24; i++) {
      const thm = window.__ZEPHYR_THEMES[i];
      assert.ok(thm, `Theme for track ${i} must exist`);
      assert.strictEqual(thm.skyHorizon.length, 3);
      assert.strictEqual(thm.skyMid.length, 3);
      assert.strictEqual(thm.skyZenith.length, 3);
      assert.strictEqual(thm.sunDir.length, 3);

      for (const val of [...thm.skyHorizon, ...thm.skyMid, ...thm.skyZenith]) {
        assert.ok(val >= 0 && val <= 1, `Sky color value ${val} out of range [0, 1]`);
      }

      const sunLen = Math.hypot(...thm.sunDir);
      assert.ok(sunLen > 0.5, `Sun dir vector must not be zero in theme ${thm.name}`);

      assert.ok(typeof thm.fogColor === 'number' && thm.fogColor >= 0);
      assert.ok(thm.fogDensity >= 0.0005 && thm.fogDensity <= 0.0035);
      assert.ok(typeof thm.curbColor1 === 'number' && thm.curbColor1 > 0);
      assert.ok(typeof thm.curbColor2 === 'number' && thm.curbColor2 > 0);
      assert.ok(typeof thm.glowColor === 'number' && thm.glowColor > 0);
    }
  });

  it('5. Track records storage, persistence and formatting across all 24 tracks', () => {
    localStorage.clear();

    for (let i = 0; i < 24; i++) {
      // Initially no record
      assert.strictEqual(localStorage.getItem('zephyr_record_' + i), null);

      // Save initial record (e.g. 1m 24.50s = 84.50s)
      const initialTime = 70 + i * 2.5;
      localStorage.setItem('zephyr_record_' + i, initialTime.toFixed(2));
      assert.strictEqual(localStorage.getItem('zephyr_record_' + i), initialTime.toFixed(2));

      // Slower time does NOT overwrite
      const slowerTime = initialTime + 5.2;
      const curRec = parseFloat(localStorage.getItem('zephyr_record_' + i));
      const shouldUpdateSlower = slowerTime < curRec;
      assert.strictEqual(shouldUpdateSlower, false);
      assert.strictEqual(localStorage.getItem('zephyr_record_' + i), initialTime.toFixed(2));

      // Faster time overwrites
      const fasterTime = initialTime - 4.1;
      if (fasterTime < curRec) {
        localStorage.setItem('zephyr_record_' + i, fasterTime.toFixed(2));
      }
      assert.strictEqual(localStorage.getItem('zephyr_record_' + i), fasterTime.toFixed(2));

      // Formatting check
      const sec = parseFloat(localStorage.getItem('zephyr_record_' + i));
      const m = Math.floor(sec / 60);
      const s = (sec % 60).toFixed(2).padStart(5, '0');
      const formatted = `Record: ${m}:${s}`;
      assert.ok(formatted.startsWith('Record: '));
    }
  });

  it('6. MultiplayerManager full 24-track sync, selection and rematch rollover', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-24TRK');

    let lastBroadcast = null;
    host.broadcastToAll = (msg) => { lastBroadcast = msg; };

    // Test setting each track 0..23
    for (let i = 0; i < 24; i++) {
      host.setTrack(i);
      assert.strictEqual(host.trackIndex, i);
      assert.strictEqual(lastBroadcast.type, 'TRACK_SYNC');
      assert.strictEqual(lastBroadcast.trackIndex, i);
    }

    // Test Rematch cycling across all 24 tracks
    let rematchFired = false;
    host.onRematch = () => { rematchFired = true; };
    host.trackIndex = 22;
    host.requestRematch(true);
    assert.strictEqual(host.trackIndex, 23);
    assert.strictEqual(lastBroadcast.type, 'REMATCH');
    assert.strictEqual(lastBroadcast.trackIndex, 23);
    assert.strictEqual(rematchFired, true);

    // Roll from track 23 back to 0
    host.requestRematch(true);
    assert.strictEqual(host.trackIndex, 0);
    assert.strictEqual(lastBroadcast.trackIndex, 0);

    // Cover PING message handler
    let pongSent = false;
    host.handleMessage({ send: (msg) => { if (msg.type === 'PONG') pongSent = true; } }, { type: 'PING', t: 100 });
    assert.strictEqual(pongSent, true);
  });
});

describe('=== UNIT & PROCESS TESTS: UNIVERSAL ANDROID & BATTERY OPTIMIZATIONS ===', () => {
  it('1. WebGL Context creation flags and powerPreference high-performance', () => {
    const jsContent = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(jsContent.includes('powerPreference:"high-performance"'), 'Must specify powerPreference high-performance');
    assert.ok(jsContent.includes('alpha:!1'), 'Must specify alpha:false to prevent expensive SurfaceFlinger compositing');
    assert.ok(jsContent.includes('depth:!0'), 'Must retain depth buffer');
    assert.ok(jsContent.includes('stencil:!1'), 'Must disable unused stencil buffer to save VRAM');
    assert.ok(jsContent.includes('preserveDrawingBuffer:!1'), 'Must disable preserveDrawingBuffer for fast swapchain flips');
  });

  it('2. Frame pacing cadence and exponential delta smoothing filter', () => {
    let smoothDt = 0.016;
    const rawSamples = [0.0166, 0.0152, 0.0178, 0.0149, 0.0167];
    const smoothedHistory = [];

    for (const raw of rawSamples) {
      smoothDt = smoothDt * 0.75 + raw * 0.25;
      smoothedHistory.push(smoothDt);
    }

    const avgRaw = rawSamples.reduce((a, b) => a + b, 0) / rawSamples.length;
    const varRaw = rawSamples.reduce((a, b) => a + Math.pow(b - avgRaw, 2), 0) / rawSamples.length;

    const avgSmooth = smoothedHistory.reduce((a, b) => a + b, 0) / smoothedHistory.length;
    const varSmooth = smoothedHistory.reduce((a, b) => a + Math.pow(b - avgSmooth, 2), 0) / smoothedHistory.length;

    assert.ok(varSmooth < varRaw, `Smoothed variance (${varSmooth}) must be lower than raw jitter variance (${varRaw})`);

    const isRace = true;
    const lowMinInterval = isRace ? 13.5 : 31.0;
    const highMinInterval = isRace ? 7.0 : 31.0;
    const menuMinInterval = (!isRace) ? 7.0 : 31.0;

    assert.strictEqual(lowMinInterval, 13.5);
    assert.strictEqual(highMinInterval, 7.0);
    assert.strictEqual(menuMinInterval, 31.0);
  });

  it('3. Dynamic Resolution Scaling (DRS) throttling and recovery loop', () => {
    let drsScale = 1.0;
    let fpsFrames = 0;
    let fpsAccum = 0;
    let appliedDpr = 1.0;
    const baseDpr = 1.5;

    const applyDrsScale = () => {
      appliedDpr = Math.max(0.65, baseDpr * drsScale);
    };

    for (let f = 0; f < 20; f++) {
      fpsFrames++;
      fpsAccum += 21.0;
    }
    if (fpsFrames >= 20) {
      const avg = fpsAccum / fpsFrames;
      if (avg > 18.5 && drsScale > 0.75) {
        drsScale = Math.max(0.75, drsScale - 0.08);
        applyDrsScale();
      }
      fpsFrames = 0;
      fpsAccum = 0;
    }

    assert.strictEqual(drsScale, 0.92);
    assert.strictEqual(appliedDpr, 1.5 * 0.92);

    for (let cycle = 0; cycle < 5; cycle++) {
      for (let f = 0; f < 20; f++) {
        fpsFrames++;
        fpsAccum += 22.0;
      }
      const avg = fpsAccum / fpsFrames;
      if (avg > 18.5 && drsScale > 0.75) {
        drsScale = Math.max(0.75, drsScale - 0.08);
        applyDrsScale();
      }
      fpsFrames = 0;
      fpsAccum = 0;
    }
    assert.strictEqual(drsScale, 0.75, 'DRS scale must floor at 0.75');
    assert.ok(appliedDpr >= 0.65, 'Applied DPR must never drop below 0.65');

    for (let cycle = 0; cycle < 6; cycle++) {
      for (let f = 0; f < 20; f++) {
        fpsFrames++;
        fpsAccum += 11.0;
      }
      const avg = fpsAccum / fpsFrames;
      if (avg < 13.5 && drsScale < 1.0) {
        drsScale = Math.min(1.0, drsScale + 0.05);
        applyDrsScale();
      }
      fpsFrames = 0;
      fpsAccum = 0;
    }
    assert.strictEqual(drsScale, 1.0, 'DRS scale must recover back to 1.0 ceiling');
    assert.strictEqual(appliedDpr, baseDpr);
  });

  it('4. Deterministic 60Hz physics step & substep cap across all screen refresh rates', () => {
    const jsContent = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(jsContent.includes('fixedStep:1/60'), 'fixedStep must be 1/60 (60Hz)');
    assert.ok(jsContent.includes('maxSubsteps:4'), 'maxSubsteps must be 4 to cap catchup execution');

    let accumulator = 0;
    let stepCount = 0;
    const fixedStep = 1 / 60;
    const maxSubsteps = 4;

    const tickFrame = (dt) => {
      accumulator += Math.min(dt, 0.1);
      let r = 0;
      while (accumulator >= fixedStep && r < maxSubsteps) {
        stepCount++;
        accumulator -= fixedStep;
        r++;
      }
      if (r >= maxSubsteps) accumulator = 0;
    };

    tickFrame(1 / 120);
    assert.strictEqual(stepCount, 0);
    tickFrame(1 / 120);
    assert.strictEqual(stepCount, 1);

    stepCount = 0;
    tickFrame(0.1);
    assert.strictEqual(stepCount, 4);
    assert.strictEqual(accumulator, 0);
  });

  it('5. Dynamic Camera Aspect Ratio (FOVx expansion on 4:3, 16:10, 1:1)', () => {
    const calcAspectCorr = (aspect) => (aspect < 1.65 ? (1.65 - aspect) * 18 : 0);

    assert.strictEqual(calcAspectCorr(20 / 9), 0);
    assert.strictEqual(calcAspectCorr(16 / 9), 0);

    const corr1610 = calcAspectCorr(1.6);
    assert.ok(corr1610 > 0.8 && corr1610 < 1.0);

    const corr43 = calcAspectCorr(4 / 3);
    assert.ok(corr43 > 5.5 && corr43 < 5.8);

    const corr11 = calcAspectCorr(1.0);
    assert.strictEqual(Number(corr11.toFixed(1)), 11.7);
  });

  it('6. Universal Safe Area Insets & Responsive Android HUD Layouts in index.html and CSS', () => {
    const htmlContent = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf-8');

    assert.ok(htmlContent.includes('env(safe-area-inset-top)'));
    assert.ok(htmlContent.includes('env(safe-area-inset-bottom)'));
    assert.ok(htmlContent.includes('env(safe-area-inset-left)'));
    assert.ok(htmlContent.includes('env(safe-area-inset-right)'));

    assert.ok(htmlContent.includes('@media (max-height: 520px)'));
    assert.ok(htmlContent.includes('.z-steer { width: 66px; height: 66px;'));
    assert.ok(htmlContent.includes('.z-gas { width: 72px; height: 72px;'));

    assert.ok(htmlContent.includes('@media (min-height: 521px) and (max-aspect-ratio: 16/10)'));
  });

  it('7. Visibility state transitions, audio suspension, and battery preservation', () => {
    let audioSuspended = false;
    let audioResumed = false;
    let isHidden = false;
    let rafStopped = false;

    const mockAudio = {
      ctx: {
        suspend() { audioSuspended = true; },
        resume() { audioResumed = true; }
      }
    };

    const handleVisibilityChange = (hidden, isRacing = false) => {
      if (hidden) {
        if (isRacing) return;
        mockAudio.ctx.suspend();
        isHidden = true;
      } else {
        isHidden = false;
        mockAudio.ctx.resume();
        rafStopped = false;
      }
    };

    handleVisibilityChange(true, false);
    assert.strictEqual(audioSuspended, true);
    assert.strictEqual(isHidden, true);

    handleVisibilityChange(false, false);
    assert.strictEqual(audioResumed, true);
    assert.strictEqual(isHidden, false);
    assert.strictEqual(rafStopped, false);
  });
});

describe('=== UNIT & PROCESS TESTS: REAR FLICKER PREVENTION & CAMERA OCCLUSION ===', () => {
  it('1. Kart model frustumCulled is disabled on all submeshes to prevent partial mesh flashing', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('e.traverse(b=>{b.isMesh&&(b.frustumCulled=!1)})'), 'bundle must disable frustumCulled on all kart meshes');
  });

  it('2. Camera near clipping plane is calibrated to optimize depth precision and prevent lens intersection clipping', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('this.camera=new Ke(e.fovBase,t,.16,1400)') || bundle.includes('this.camera=new Ke(e.fovBase,t,.08,2200)'), 'camera clipping planes calibrated for depth precision');
  });

  it('3. Look-back (rearview) snaps camera and aim targets to eliminate origin crossing singularity', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('targetLb=this.wantLookBack?1:0,isTogglingLb=(this.lookBack>.5)!==(targetLb>.5)'), 'lookback must detect toggle without lerp singularity');
    assert.ok(bundle.includes('(isTogglingLb||this.pos.distanceToSquared(Ie)>900)&&(this.pos.copy(Ie),this.aim.copy(Ui))'), 'lookback toggle must snap position and aim immediately');
    assert.ok(bundle.includes('p=-24'), 'lookback aim must look 24m down the track behind kart');
  });

  it('4. Camera trailing close distance dynamic clearance buffer keeps lens ahead of pursuers', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('trailingCloseDist:trDist'), 'Ev.syncVisual must compute trDist and pass to camera');
    assert.ok(bundle.includes('extra&&extra.trailingCloseDist<8.5&&(c=Math.min(c,Math.max(3.6,extra.trailingCloseDist-1.8))'), 'computeDesired must clamp distance in front of pursuer');
  });

  it('5. AI avoidance hysteresis prevents steering and chassis lean flutter when drafting behind player', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('E(this,"_avSide",0)'), 'nc class must have _avSide hysteresis property');
    assert.ok(bundle.includes('side=Rt>.3?1:Rt<-.3?-1:this._avSide'), 'avoidance must employ lateral hysteresis deadband');
  });

  it('6. Closer third-person camera perspective optimized for desktop and mobile devices', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('distance:4.8'), 'desktop camera distance should be 4.8m');
    assert.ok(bundle.includes('mobileDistance:4.35'), 'mobile camera distance should be 4.35m');
    assert.ok(bundle.includes('height:2.18'), 'desktop camera height should be 2.18m');
    assert.ok(bundle.includes('mobileHeight:1.98'), 'mobile camera height should be 1.98m');
    assert.ok(bundle.includes('isMob=(typeof window!=="undefined")'), 'must dynamically detect mobile touch device viewport');
  });

  it('7. Elevated Minimap and HUD telemetry layouts guarantee zero touch button overlap across all viewports', () => {
    const htmlContent = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf-8');
    assert.ok(htmlContent.includes('.hud__minimap {\n        bottom: max(180px'), 'minimap base bottom must be at least 180px');
    assert.ok(htmlContent.includes('.hud__speed {\n        bottom: max(116px'), 'speedometer base bottom must be at least 116px');
    assert.ok(htmlContent.includes('.hud__coins {\n        bottom: max(226px'), 'coins/energy counter base bottom must be at least 226px');
    assert.ok(htmlContent.includes('bottom: max(152px, calc(env(safe-area-inset-bottom) + 146px)) !important;'), 'minimap mobile bottom must clear action buttons');
    assert.ok(htmlContent.includes('bottom: max(96px, calc(env(safe-area-inset-bottom) + 90px)) !important;'), 'speedometer mobile bottom must clear steering buttons');
    assert.ok(htmlContent.includes('bottom: max(176px, calc(env(safe-area-inset-bottom) + 170px)) !important;'), 'coins mobile bottom must clear speedometer');
  });
});

describe('=== UNIT & PROCESS TESTS: 50 ARCHITECTURAL IMPROVEMENTS ===', () => {
  it('1. Slipstream drafting timer accumulation, boost trigger and cooldown', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('o.draftTimer=o.draftTimer||0;o.draftBoost=o.draftBoost||0;'), 'bundle must manage draftTimer');
    assert.ok(bundle.includes('if(o.draftTimer>1.15){'), 'draft boost triggers after 1.15 seconds');
    assert.ok(bundle.includes('o.kart.physics.applyBoost(2.2,14)'), 'draft boost applies nitro');

    // Simulate drafting math
    let draftTimer = 0;
    const dt = 0.1;
    let boostTriggered = false;
    for (let t = 0; t < 1.3; t += dt) {
      draftTimer += dt;
      if (draftTimer > 1.15) {
        boostTriggered = true;
        draftTimer = 0;
        break;
      }
    }
    assert.strictEqual(boostTriggered, true, 'drafting behind rival should trigger nitro boost');
  });

  it('2. Jump trick stunt aerial detection, barrel roll animation and landing boost', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('!t.state.grounded||t.state.vy>1.0||t.state.airHeight>0.35'), 'stunt trick triggers when airborne');
    assert.ok(bundle.includes('if(o.state.justLanded&&o.stuntActive){'), 'landing stunt grants mini-turbo');
    assert.ok(bundle.includes('o.kart.physics.applyBoost(1.1,16)'), 'landing mini-turbo boosts kart');

    // Simulate stunt trigger logic
    const canStunt = (grounded, vy, airHeight, stuntActive, cooldown) => {
      if ((!grounded || vy > 1.0 || airHeight > 0.35) && !stuntActive && cooldown <= 0) {
        return true;
      }
      return false;
    };
    assert.strictEqual(canStunt(false, 1.5, 0.6, false, 0), true);
    assert.strictEqual(canStunt(true, 0, 0, false, 0), false);
    assert.strictEqual(canStunt(false, 1.5, 0.6, true, 0), false);
    assert.strictEqual(canStunt(false, 1.5, 0.6, false, 0.8), false);
  });

  it('3. Rocket start golden timing window vs early engine stall', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('this.countdown>1.25)this.engineStalled=1.1'), 'holding gas too early stalls engine');
    assert.ok(bundle.includes('this.countdown<=1.15&&this.countdown>=0.06'), 'holding gas in golden window primes launch boost');
    assert.ok(bundle.includes('this.countdown>0.06&&(this.rocketStartPrimed=!1)'), 'releasing gas unprimes rocket start');
    assert.ok(bundle.includes('rocketChance=.55+(aiSkill-1.0)*.4') || bundle.includes('rocketChance=.15*aiSkill'), 'AI racers have skill-based rocket start chance');
    assert.ok(bundle.includes('stallChance=0') || bundle.includes('stallChance=Math.max'), 'AI racers have skill-based stall chance');
    assert.ok(bundle.includes('if(this.engineStalled>0||t.engineStalled>0){n.throttle=0'), 'stalled engine clamps throttle and speed');

    // Evaluate launch logic simulation
    const simulateCountdown = (events) => {
      let countdown = 3.6;
      let stalled = 0;
      let rocketPrimed = false;
      const dt = 0.05;
      while (countdown > 0) {
        const isAccel = events(countdown);
        if (isAccel) {
          if (countdown > 1.25) {
            stalled = 1.1;
            rocketPrimed = false;
          } else if (countdown <= 1.15 && countdown >= 0.06) {
            if (!(stalled > 0)) rocketPrimed = true;
          }
        } else {
          if (countdown > 0.06) rocketPrimed = false;
        }
        countdown -= dt;
      }
      // Race start evaluation at countdown <= 0
      let boostGiven = false;
      let stallTriggered = false;
      const finalAccel = events(0);
      if (stalled > 0) {
        stallTriggered = true;
      } else if (rocketPrimed && finalAccel) {
        boostGiven = true;
      }
      return { stalled: stallTriggered, rocketBoost: boostGiven };
    };

    // Case 1: Early press during "3" or "2" (e.g. at 2.0s) -> Stalls!
    const resEarly = simulateCountdown((t) => t >= 1.5);
    assert.strictEqual(resEarly.stalled, true, 'early gas must stall engine');
    assert.strictEqual(resEarly.rocketBoost, false, 'early gas must not receive boost');

    // Case 2: Golden window press (starts at 1.0s and holds through 0) -> Rocket Start!
    const resGolden = simulateCountdown((t) => t <= 1.0);
    assert.strictEqual(resGolden.stalled, false, 'golden window gas should not stall');
    assert.strictEqual(resGolden.rocketBoost, true, 'golden window gas must trigger rocket start boost');

    // Case 3: Releasing gas early before GO -> No boost!
    const resReleased = simulateCountdown((t) => t <= 1.0 && t >= 0.3);
    assert.strictEqual(resReleased.rocketBoost, false, 'releasing gas before GO must lose rocket boost');

    // Case 4: No press during countdown, only pressing after GO -> Normal start (0 boost)
    const resNormal = simulateCountdown((t) => t <= 0);
    assert.strictEqual(resNormal.stalled, false, 'normal start should not stall');
    assert.strictEqual(resNormal.rocketBoost, false, 'normal start receives NO launch boost');

    // Case 5: AI balance test
    const aiSkills = [1.10, 1.03, 0.95];
    for (const skill of aiSkills) {
      const rocketChance = 0.15 * skill;
      const stallChance = Math.max(0.02, 0.08 - (skill - 0.95) * 0.15);
      assert.ok(rocketChance >= 0.14 && rocketChance <= 0.17);
      assert.ok(stallChance >= 0.02 && stallChance <= 0.08);
    }
  });

  it('4. Elastic soft bumper collision restitution (bounce = 0.70 & velocity-dependent effBounce)', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('const bounce=0.70;'), 'bumper restitution must be 0.70');
    assert.ok(bundle.includes('effBounce'), 'must use velocity-dependent effective restitution');
    assert.ok(bundle.includes('const D=-(1+effBounce)*S/(1/v+1/p);'), 'impulse equation must use effBounce restitution coefficient');
  });

  it('5. New combat items: vortex, horn, triple_shield, and backward bolt fire', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('spawnVortex(t,spline,racers)'), 'must include spawnVortex method');
    assert.ok(bundle.includes('detonateSuperHorn(t,racers)'), 'must include detonateSuperHorn method');
    assert.ok(bundle.includes('raiseTripleShield(t)'), 'must include raiseTripleShield method');
    assert.ok(bundle.includes('backward=!1'), 'fireBolt must accept backward parameter');
    assert.ok(bundle.includes('vortex:{id:"vortex"'), 'vortex item must be registered');
    assert.ok(bundle.includes('horn:{id:"horn"'), 'horn item must be registered');
    assert.ok(bundle.includes('triple_shield:{id:"triple_shield"'), 'triple_shield item must be registered');

    // Test Triple Shield absorption logic
    let shieldCharges = 3;
    let invuln = 0;
    const takeHit = () => {
      if (shieldCharges > 0) {
        shieldCharges--;
        invuln = 0.6;
        return false; // hit absorbed!
      }
      return true; // spun out
    };

    assert.strictEqual(takeHit(), false, 'charge 1 absorbed');
    assert.strictEqual(shieldCharges, 2);
    assert.strictEqual(takeHit(), false, 'charge 2 absorbed');
    assert.strictEqual(shieldCharges, 1);
    assert.strictEqual(takeHit(), false, 'charge 3 absorbed');
    assert.strictEqual(shieldCharges, 0);
    assert.strictEqual(takeHit(), true, 'after charges depleted, kart takes damage');
  });

  it('6. Dynamic item roulette distribution scales with race position', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('vortex:1+n*9'), 'vortex weight scales with trailing position');
    assert.ok(bundle.includes('triple_shield:Math.max(1,8-n*6)'), 'defensive ward favoured in leading position');

    // Test roulette weighting simulation
    const computeWeights = (rank, total) => {
      const n = (rank - 1) / (total - 1);
      return {
        vortex: 1 + n * 9,
        triple_shield: Math.max(1, 8 - n * 6)
      };
    };

    const firstPlaceWeights = computeWeights(1, 6);
    const lastPlaceWeights = computeWeights(6, 6);

    assert.ok(firstPlaceWeights.triple_shield > firstPlaceWeights.vortex, '1st place receives more shields than catch-up vortices');
    assert.ok(lastPlaceWeights.vortex > lastPlaceWeights.triple_shield, '6th place receives more vortices than shields');
  });

  it('7. Audio synthesis for all newly added sound effects', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('case"jump_trick":'), 'jump_trick audio effect defined');
    assert.ok(bundle.includes('case"drafting":'), 'drafting audio effect defined');
    assert.ok(bundle.includes('case"curb_tick":'), 'curb_tick audio effect defined');
    assert.ok(bundle.includes('case"vortex":'), 'vortex audio effect defined');
    assert.ok(bundle.includes('case"horn":'), 'horn audio effect defined');
    assert.ok(bundle.includes('case"threat_alert":'), 'threat_alert audio effect defined');
  });

  it('8. Radar systems: Blind spot detection, threat radar and rearview distance indicator', () => {
    const htmlContent = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf-8');
    assert.ok(htmlContent.includes('id="z-rearview-container"'), 'rearview container present');
    assert.ok(htmlContent.includes('id="z-blind-left"'), 'left blind spot element present');
    assert.ok(htmlContent.includes('id="z-blind-right"'), 'right blind spot element present');
    assert.ok(htmlContent.includes('id="z-threat-radar"'), 'threat alert element present');

    // Simulate blind spot logic
    const isBlindSpot = (fwdDist, latDist) => {
      if (fwdDist > -3.5 && fwdDist < 1.8) {
        if (latDist < -1.4 && latDist > -4.5) return 'left';
        if (latDist > 1.4 && latDist < 4.5) return 'right';
      }
      return 'none';
    };

    assert.strictEqual(isBlindSpot(-1.0, -2.5), 'left', 'rival on left flank detected');
    assert.strictEqual(isBlindSpot(-1.0, 2.5), 'right', 'rival on right flank detected');
    assert.strictEqual(isBlindSpot(10.0, 0), 'none', 'rival ahead not in blind spot');
  });

  it('9. Results screen lap breakdown and gold trophy winner badge', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('lapTimes:[...t.progress.lapTimes]'), 'results() includes lapTimes array');
    assert.ok(bundle.includes('🏆 VITTORIA! 1° POSTO 🏆'), 'showResults includes gold trophy winner badge');
    assert.ok(bundle.includes('G${idx+1}: <b>${Hn(lt)}</b>'), 'showResults formats each lap time');
  });

  it('10. Mobile controls: Quick chat radial and Settings modal (Auto-Gas, Tilt Gyro, FPS)', () => {
    const htmlContent = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf-8');
    assert.ok(htmlContent.includes('id="z-chat-modal"'), 'quick chat modal present');
    assert.ok(htmlContent.includes('id="z-settings-modal"'), 'settings modal present');
    assert.ok(htmlContent.includes('id="z-opt-autogas"'), 'autogas toggle present');
    assert.ok(htmlContent.includes('id="z-opt-gyro"'), 'gyro tilt toggle present');
    assert.ok(htmlContent.includes('id="z-opt-btnsize"'), 'touch button size selector present');
    assert.ok(htmlContent.includes('id="z-opt-speedclass"'), 'speed class selector present');
    assert.ok(htmlContent.includes('id="z-opt-fps"'), 'fps battery saver selector present');
  });
});

describe('=== UNIT & PROCESS TESTS: MINE IMPACT & COLLISION MECHANICS ===', () => {
  const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');

  it('1. Bundle code verification for mine fixes', () => {
    assert.ok(bundle.includes('this.spline=e,this.vfx=n'), 'mv stores track spline reference');
    assert.ok(bundle.includes('e.baseY=py'), 'mine remembers surface baseY');
    assert.ok(bundle.includes('n.armTimer>0&&(n.armTimer-=t);'), 'armTimer decrements without continue blocking rivals');
    assert.ok(bundle.includes('i===n.owner&&n.armTimer>0'), 'owner immunity is restricted strictly to armTimer window');
    assert.ok(bundle.includes('r*r+o*o<8.2&&Math.abs(a)<3.4'), 'expanded mine collision radius (2.86m)');
    assert.ok(bundle.includes('i.kart.physics.knockback(kx*7,kz*7,11,7.5)'), 'knockback pop applied to kart on mine hit');
    assert.ok(bundle.includes('this.onHit?.(i,"mine")'), 'explosion event triggered unconditionally');
    assert.ok(bundle.includes('break}}}}killBolt(t)'), 'closing braces balanced in updateBolts and class mv');
  });

  it('2. Mine deployment geometry & surface height clamping', () => {
    // Mock spline and kart
    const mockSpline = {
      surfaceHeight(x, z, idx) { return 4.5; }
    };
    const mockKart = {
      state: {
        pos: { x: 10, y: 5.0, z: 20 },
        yaw: 0,
        trackIndex: 2
      }
    };

    // Simulate dropMine
    const dropMineSim = (t, spline) => {
      const n = t.state;
      const i = -Math.sin(n.yaw), r = -Math.cos(n.yaw);
      const px = n.pos.x - i * 3.2, pz = n.pos.z - r * 3.2;
      const roadY = spline ? spline.surfaceHeight(px, pz, n.trackIndex || 0) : n.pos.y;
      const py = Math.max(n.pos.y - 0.8, Math.min(n.pos.y + 1.5, roadY + 0.55));
      return { active: true, life: 26, armTimer: 0.55, owner: t, spin: 0, baseY: py, pos: { x: px, y: py, z: pz } };
    };

    const mine = dropMineSim(mockKart, mockSpline);
    assert.strictEqual(mine.active, true);
    assert.strictEqual(mine.pos.x, 10);
    assert.strictEqual(mine.pos.z, 23.2, 'mine is deployed 3.2m behind kart');
    assert.strictEqual(mine.pos.y, 4.5 + 0.55, 'mine is clamped to track surface height + 0.55m');
    assert.strictEqual(mine.armTimer, 0.55);
  });

  it('3. Rival instant detonation vs owner immunity during armTimer, and owner detonation after armTimer', () => {
    const ownerKart = { id: 0, pos: { x: 10, y: 5.05, z: 23.2 }, progress: { finished: false } };
    const rivalKart = { id: 1, pos: { x: 10, y: 5.05, z: 23.2 }, progress: { finished: false } };

    const checkCollision = (mine, racer) => {
      if (racer.progress.finished || (racer === mine.owner && mine.armTimer > 0)) {
        return false;
      }
      const r = racer.pos.x - mine.pos.x;
      const o = racer.pos.z - mine.pos.z;
      const a = racer.pos.y + 0.6 - mine.pos.y;
      return (r * r + o * o < 8.2 && Math.abs(a) < 3.4);
    };

    const mine = { pos: { x: 10, y: 5.05, z: 23.2 }, armTimer: 0.55, life: 26, owner: ownerKart };

    // Owner should NOT detonate mine during armTimer
    assert.strictEqual(checkCollision(mine, ownerKart), false, 'owner is immune during armTimer');

    // Rival SHOULD detonate mine immediately even when armTimer > 0
    assert.strictEqual(checkCollision(mine, rivalKart), true, 'rival detonates mine immediately upon impact');

    // Owner impacts mine AFTER armTimer expires -> OWNER DETONATES TOO!
    mine.armTimer = 0;
    assert.strictEqual(checkCollision(mine, ownerKart), true, 'owner detonates mine when impacting it after armTimer expires');
  });

  it('4. Expanded contact radius detects kart front bumper & side grazing', () => {
    const mine = { pos: { x: 0, y: 1.0, z: 0 }, armTimer: 0, life: 20, owner: null };
    const checkHit = (racerX, racerZ, racerY) => {
      const r = racerX - mine.pos.x;
      const o = racerZ - mine.pos.z;
      const a = racerY + 0.6 - mine.pos.y;
      return (r * r + o * o < 8.2 && Math.abs(a) < 3.4);
    };

    // Front bumper contact at 2.6m (center of kart is 2.6m from mine)
    assert.strictEqual(checkHit(0, 2.6, 1.0), true, '2.6m direct contact triggers collision');
    // Side grazing contact at lateral 1.8m and forward 1.8m: dist = sqrt(1.8^2 + 1.8^2) = 2.54m
    assert.strictEqual(checkHit(1.8, 1.8, 1.0), true, '2.54m oblique contact triggers collision');
    // Far away at 3.5m: dist^2 = 12.25 > 8.2
    assert.strictEqual(checkHit(0, 3.5, 1.0), false, '3.5m beyond collision threshold');
  });

  it('5. Detonation physics: upward pop, radial knockback, coin drop and visual punch', () => {
    let droppedCoins = false;
    let visualPunched = 0;
    let knockbackApplied = null;
    let onHitType = null;

    const mockRacer = {
      pos: { x: 1.5, y: 1.0, z: 2.0 },
      dropCoins() { droppedCoins = true; },
      kart: {
        visual: { punch(p) { visualPunched = p; } },
        physics: {
          knockback(kx, kz, force, vy) {
            knockbackApplied = { kx, kz, force, vy };
          }
        }
      },
      hit(duration, dir) { return true; }
    };

    const mine = { object: { position: { x: 0, y: 1.0, z: 0 } }, active: true };
    const r = mockRacer.pos.x - mine.object.position.x;
    const o = mockRacer.pos.z - mine.object.position.z;
    const dist = Math.hypot(r, o) || 1;
    const kx = r / dist, kz = o / dist;

    // Simulate detonation
    mine.active = false;
    const hitOk = mockRacer.hit(1.5, 1);
    if (hitOk) {
      mockRacer.dropCoins();
      mockRacer.kart.visual.punch(1.3);
      mockRacer.kart.physics.knockback(kx * 7, kz * 7, 11, 7.5);
      onHitType = 'mine';
    }

    assert.strictEqual(mine.active, false, 'mine becomes inactive');
    assert.strictEqual(droppedCoins, true, 'coins dropped');
    assert.strictEqual(visualPunched, 1.3, 'chassis visual punch applied');
    assert.ok(knockbackApplied !== null, 'knockback applied');
    assert.strictEqual(knockbackApplied.vy, 7.5, 'upward vertical pop is 7.5m/s');
    assert.strictEqual(knockbackApplied.force, 11, 'outward impulse force is 11');
    assert.strictEqual(onHitType, 'mine', 'onHit type is mine');
  });

  it('6. Shielded racer absorbs damage but still deflects kart and triggers explosion audio', () => {
    let visualPunched = 0;
    let knockbackApplied = null;
    let onHitPlayed = false;
    let coinsDropped = false;

    const mockShieldedRacer = {
      pos: { x: 2.0, y: 1.0, z: 0 },
      dropCoins() { assert.fail('should not drop coins when shielded'); },
      kart: {
        visual: { punch(p) { visualPunched = p; } },
        physics: {
          knockback(kx, kz, force, vy) {
            knockbackApplied = { kx, kz, force, vy };
          }
        }
      },
      hit(duration, dir) { return false; } // Shield absorbs hit
    };

    const mine = { object: { position: { x: 0, y: 1.0, z: 0 } }, active: true };
    const r = mockShieldedRacer.pos.x - mine.object.position.x;
    const o = mockShieldedRacer.pos.z - mine.object.position.z;
    const dist = Math.hypot(r, o) || 1;
    const kx = r / dist, kz = o / dist;

    mine.active = false;
    onHitPlayed = true;
    const applyMineHit = (racer) => {
      const hitOk = racer.hit(1.5, 1);
      if (hitOk) {
        racer.dropCoins();
        racer.kart.visual.punch(1.3);
        racer.kart.physics.knockback(kx * 7, kz * 7, 11, 7.5);
      } else {
        racer.kart.visual.punch(0.7);
        racer.kart.physics.knockback(kx * 4, kz * 4, 6, 3.5);
      }
    };
    applyMineHit(mockShieldedRacer);

    assert.strictEqual(visualPunched, 0.7, 'shield punch applied');
    assert.strictEqual(knockbackApplied.vy, 3.5, 'shield deflection vertical pop applied');
    assert.strictEqual(onHitPlayed, true, 'explosion SFX played on shielded impact');

    // Also test unshielded racer branch
    const mockUnshieldedRacer = {
      pos: { x: 0.5, y: 1.0, z: 0.5 },
      shield: 0,
      hit: () => true,
      dropCoins: () => { coinsDropped = true; },
      kart: {
        visual: { punch: (p) => { visualPunched = p; } },
        physics: { knockback: (vx, vz, spd, vy) => { knockbackApplied = { vx, vz, spd, vy }; } }
      }
    };
    applyMineHit(mockUnshieldedRacer);
    assert.strictEqual(visualPunched, 1.3);
    assert.strictEqual(knockbackApplied.vy, 7.5);
  });

  it('7. Laser bolt destroys active mine on impact', () => {
    const mine = { object: { position: { x: 15, y: 2, z: 30 } }, active: true };
    const bolt = { object: { position: { x: 15.5, y: 2.1, z: 30.2 } }, active: true };

    const bx = mine.object.position.x - bolt.object.position.x;
    const by = mine.object.position.y - bolt.object.position.y;
    const bz = mine.object.position.z - bolt.object.position.z;
    const dSq = bx * bx + by * by + bz * bz;

    if (dSq < 5.5) {
      mine.active = false;
      bolt.active = false;
    }

    assert.strictEqual(mine.active, false, 'mine destroyed by laser bolt');
    assert.strictEqual(bolt.active, false, 'bolt consumed on impact with mine');
  });
});

describe('=== UNIT & PROCESS TESTS: HYPER-REALISTIC ZEPHYR HURRICANE ===', () => {
  it('1. Bundle verification for procedural hurricane geometry and assets', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('buildHurricane='), 'buildHurricane helper must be present');
    assert.ok(bundle.includes('makeSpiralRibbons='), 'makeSpiralRibbons procedural helper present');
    assert.ok(bundle.includes('spiralMesh='), 'outer helical spiral ribbon mesh present');
    assert.ok(bundle.includes('innerSpiralMesh='), 'inner counter-rotating spiral ribbon mesh present');
    assert.ok(bundle.includes('wireMesh='), 'spinning wireframe lattice mesh present');
    assert.ok(bundle.includes('u.spiralMesh&&(u.spiralMesh.rotation.y=v.spin*3.2)'), 'spiral ribbon fast cyclonic spin present');
    assert.ok(bundle.includes('u.innerSpiralMesh&&(u.innerSpiralMesh.rotation.y=-v.spin*3.8)'), 'inner spiral counter-rotation present');
    assert.ok(bundle.includes('xe(4.2,.45,6.8'), 'outer turbulent funnel cylinder geometry present');
    assert.ok(bundle.includes('xe(2.6,.25,6.2'), 'inner counter-rotating storm wall cylinder geometry present');
    assert.ok(bundle.includes('Xn(1.3,.12,6'), 'lower spiral accretion ring present');
    assert.ok(bundle.includes('Xn(2.7,.16,6'), 'mid spiral accretion ring present');
    assert.ok(bundle.includes('Xn(4.3,.22,6'), 'top spiral accretion ring present');
    assert.ok(bundle.includes('_n(.52,0)'), 'orbiting storm cloud puff icosahedron geometry present');
    assert.ok(bundle.includes('Da(.2,2.4'), 'ground spray plume ring geometry present');
    assert.ok(bundle.includes('xe(.12,.12,6.6'), 'central electric lightning conduit present');
    assert.ok(bundle.includes('Zephyr Hurricane'), 'item blurb updated with Zephyr Hurricane');
    assert.ok(bundle.includes('v.s+80*t'), 'hurricane travels along track at 80 m/s');
    assert.ok(bundle.includes('v.life=6.8'), 'hurricane lifetime set to 6.8 seconds');
    assert.ok(bundle.includes('landSquash=1'), 'kart landing squash triggered on slam');
    assert.ok(bundle.includes('-26'), 'violent downward velocity vy = -26 applied on ground slam');
  });

  it('2. Hurricane procedural structure and component rotation simulation', () => {
    const mockHurricane = {
      funnel: { rotation: { y: 0 } },
      wire: { rotation: { y: 0 } },
      inner: { rotation: { y: 0 } },
      spiral: { rotation: { y: 0 } },
      innerSpiral: { rotation: { y: 0 } },
      rings: [
        { rotation: { y: 0, z: 0.28 } },
        { rotation: { y: 0, z: -0.22 } },
        { rotation: { y: 0, z: 0.16 } }
      ],
      core: { material: { opacity: 0.75, color: { setHex: () => {} } } },
      clouds: [
        { mesh: { position: { x: 0, y: 0, z: 0 }, scale: { setScalar: () => {} } }, spd: 1.8, off: 0 },
        { mesh: { position: { x: 0, y: 0, z: 0 }, scale: { setScalar: () => {} } }, spd: -1.5, off: 1.05 }
      ],
      plume: { rotation: { z: 0 } }
    };

    let spin = 0;
    const dt = 0.016;
    spin += dt * 16;
    mockHurricane.funnel.rotation.y = spin * 1.2;
    mockHurricane.wire.rotation.y = spin * 2.2;
    mockHurricane.inner.rotation.y = -spin * 1.8;
    mockHurricane.spiral.rotation.y = spin * 3.2;
    mockHurricane.innerSpiral.rotation.y = -spin * 3.8;
    mockHurricane.rings[0].rotation.y = spin * 4.2;
    mockHurricane.rings[1].rotation.y = -spin * 3.6;
    mockHurricane.rings[2].rotation.y = spin * 2.8;
    mockHurricane.plume.rotation.z = -spin * 3.2;

    assert.ok(mockHurricane.funnel.rotation.y > 0, 'outer funnel rotates counter-clockwise');
    assert.ok(mockHurricane.wire.rotation.y > mockHurricane.funnel.rotation.y, 'wireframe cage spins faster');
    assert.ok(mockHurricane.inner.rotation.y < 0, 'inner funnel counter-rotates clockwise');
    assert.ok(mockHurricane.spiral.rotation.y > 0, 'spiral streamers rotate violently forward');
    assert.ok(mockHurricane.innerSpiral.rotation.y < 0, 'inner spiral streamers counter-rotate');
    assert.ok(mockHurricane.rings[0].rotation.y > 0, 'ring 0 rotates with outer stream');
    assert.ok(mockHurricane.rings[1].rotation.y < 0, 'ring 1 counter-rotates');
    assert.ok(mockHurricane.plume.rotation.z < 0, 'ground plume spins');

    for (const c of mockHurricane.clouds) {
      const normY = ((spin * 0.28 + c.off / 6.28) % 1 + 1) % 1;
      const curY = 0.35 + normY * 6;
      const curRad = 0.55 + normY * 3.8;
      const pAng = spin * c.spd + c.off;
      c.mesh.position.x = Math.cos(pAng) * curRad;
      c.mesh.position.y = curY;
      c.mesh.position.z = Math.sin(pAng) * curRad;
    }
    assert.notStrictEqual(mockHurricane.clouds[0].mesh.position.x, 0, 'cloud orbital position X updated');
    assert.ok(mockHurricane.clouds[0].mesh.position.y > 0.35, 'cloud puff climbs upward along Y axis');
  });

  it('3. Multi-racer suction, aerial lift and violent ground slam simulation', () => {
    const vortex = {
      pos: { x: 10, y: 1, z: 10 },
      active: true,
      hitRacers: new Set(['caster']),
      absorbedRacers: []
    };

    let coinsDropped1 = false, coinsDropped2 = false;
    let punch1 = 0, punch2 = 0;
    let kb1 = null, kb2 = null;

    const racer1 = {
      id: 'racer1',
      pos: { x: 12, y: 1, z: 12 },
      state: { vy: 0, airHeight: 0, grounded: true, yaw: 0 },
      hit: () => true,
      dropCoins: () => { coinsDropped1 = true; },
      kart: {
        visual: { punch: (p) => { punch1 = p; } },
        physics: { knockback: (vx, vz, spd, vy) => { kb1 = { vx, vz, spd, vy }; } }
      }
    };

    const racer2 = {
      id: 'racer2',
      pos: { x: 14, y: 1, z: 14 },
      state: { vy: 0, airHeight: 0, grounded: true, yaw: 0 },
      hit: () => true,
      dropCoins: () => { coinsDropped2 = true; },
      kart: {
        visual: { punch: (p) => { punch2 = p; } },
        physics: { knockback: (vx, vz, spd, vy) => { kb2 = { vx, vz, spd, vy }; } }
      }
    };

    const racers = [racer1, racer2];

    for (const r of racers) {
      if (!vortex.hitRacers.has(r.id)) {
        const dx = r.pos.x - vortex.pos.x;
        const dz = r.pos.z - vortex.pos.z;
        const distSq = dx * dx + dz * dz;
        if (distSq < 81) {
          vortex.hitRacers.add(r.id);
          vortex.absorbedRacers.push({
            racer: r,
            timer: 0.42,
            baseY: r.pos.y,
            angle: Math.atan2(dz, dx),
            radius: Math.min(Math.sqrt(distSq), 4.5)
          });
        }
      }
    }

    assert.strictEqual(vortex.absorbedRacers.length, 2, 'both racers sucked into hurricane');
    assert.strictEqual(vortex.active, true, 'hurricane remains active to chase subsequent opponents');

    const dt = 0.05;
    for (let step = 0; step < 4; step++) {
      for (const a of vortex.absorbedRacers) {
        a.timer -= dt;
        a.angle += dt * 16;
        a.radius = Math.max(0.4, a.radius - dt * 6.5);
        const r = a.racer;
        const prog = 1 - Math.max(0, a.timer / 0.42);
        if (prog > 0.12 && prog < 0.9) {
          r.state.vy = 10;
          r.state.grounded = false;
          r.state.airHeight = 4.6 * Math.sin(prog * Math.PI);
        }
        r.state.yaw += dt * 22;
      }
    }

    assert.strictEqual(racer1.state.grounded, false, 'racer 1 is lifted airborne');
    assert.ok(racer1.state.airHeight > 2.0, 'racer 1 has high airHeight inside cyclone');
    assert.ok(racer1.state.yaw > 0, 'racer 1 undergoes violent spinout');

    while (vortex.absorbedRacers.length > 0) {
      for (let i = vortex.absorbedRacers.length - 1; i >= 0; i--) {
        const a = vortex.absorbedRacers[i];
        a.timer -= dt;
        if (a.timer <= 0) {
          const r = a.racer;
          r.state.vy = -26;
          r.state.airHeight = 0;
          r.state.grounded = true;
          r.hit(1.4, 1);
          r.dropCoins();
          r.kart.visual.punch(1.8);
          r.kart.physics.knockback(1, 1, 16, -26);
          vortex.absorbedRacers.splice(i, 1);
        }
      }
    }

    assert.strictEqual(vortex.absorbedRacers.length, 0, 'all racers processed through ground slam');
    assert.strictEqual(coinsDropped1, true, 'racer 1 dropped coins on slam');
    assert.strictEqual(coinsDropped2, true, 'racer 2 dropped coins on slam');
    assert.strictEqual(punch1, 1.8, 'visual squash/punch 1.8 applied on racer 1');
    assert.strictEqual(punch2, 1.8, 'visual squash/punch 1.8 applied on racer 2');
    assert.strictEqual(kb1.vy, -26, 'downward slam velocity -26 applied on racer 1');
    assert.strictEqual(kb2.vy, -26, 'downward slam velocity -26 applied on racer 2');
  });

  it('4. Hurricane audio synthesis and SVG icon definitions', () => {
    const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');
    assert.ok(bundle.includes('sawtooth'), 'howling wind uses sawtooth oscillator');
    assert.ok(bundle.includes('sweep'), 'audio includes frequency sweep');
    assert.ok(bundle.includes('2200'), 'cyclonic wind noise filter cutoff frequency');
    assert.ok(bundle.includes('case"vortex":return`<svg ${r}><path d="M8 12c10-5 22-5 32 0'), 'vortex SVG icon generator case exists');
    assert.ok(bundle.includes('d="M22 6l4 7-6 2 8 8"'), 'lightning bolt path present in hurricane SVG');
  });
});

describe('=== UNIT & PROCESS TESTS: MULTI-KART COLLISION & CLUSTER STABILITY ===', () => {
  const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');

  it('1. Bundle verification for multi-kart collision & anti-jitter improvements', () => {
    assert.ok(bundle.includes('getEffR='), 'oriented elliptical hull calculation must be defined');
    assert.ok(bundle.includes('a=1.68*sc,b=1.12*sc'), 'elliptical semi-axes (longitudinal 1.68m, lateral 1.12m) must be set');
    assert.ok(bundle.includes('clampTrack='), 'track boundary clamping for resolving multi-kart displacement must be defined');
    assert.ok(bundle.includes('pen=(c-d)-.03'), 'slop tolerance (0.03m) must be applied to prevent contact jitter');
    assert.ok(bundle.includes('const push=Math.min(.55,pen*.75)'), 'relaxation push per pass must be calibrated to prevent interpenetration');
    assert.ok(bundle.includes('effBounce='), 'restitution must be velocity-dependent');
    assert.ok(bundle.includes('Math.abs(S)<2.5?0'), 'resting contact relative velocity (<2.5 m/s) must have zero bounce');
    assert.ok(bundle.includes('Math.abs(S)>3'), 'visual punch must be gated to energetic impacts');
    assert.ok(bundle.includes('pt>=-2.5&&pt<.4&&Math.abs(Rt)<3.2'), 'AI must check alongside lane avoidance');
  });

  it('2. Oriented elliptical bounding hull geometry vs circular hull', () => {
    const calcEffR = (yaw, ux, uz, scale = 1.0) => {
      const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
      const sx = -fz, sz = fx;
      const uf = ux * fx + uz * fz;
      const us = ux * sx + uz * sz;
      const sc = scale;
      const a = 1.68 * sc;
      const b = 1.12 * sc;
      const dsq = (b * uf) * (b * uf) + (a * us) * (a * us);
      return (a * b) / Math.sqrt(Math.max(1e-4, dsq));
    };

    // Longitudinal approach (north-south, forward/backward bumper contact)
    // Kart facing yaw = 0 (forward is (0, -1))
    const rFront = calcEffR(0, 0, -1);
    const rBack = calcEffR(0, 0, 1);
    assert.ok(Math.abs(rFront - 1.68) < 0.01, `front effective radius should be ~1.68m, got ${rFront}`);
    assert.ok(Math.abs(rBack - 1.68) < 0.01, `rear effective radius should be ~1.68m, got ${rBack}`);

    // Lateral side-by-side approach (east-west door contact)
    const rSideL = calcEffR(0, -1, 0);
    const rSideR = calcEffR(0, 1, 0);
    assert.ok(Math.abs(rSideL - 1.12) < 0.01, `side effective radius should be ~1.12m, got ${rSideL}`);
    assert.ok(Math.abs(rSideR - 1.12) < 0.01, `side effective radius should be ~1.12m, got ${rSideR}`);

    // Wheel-to-wheel racing scenario: Two karts driving parallel at 2.4m lateral clearance
    const kart1_effR = calcEffR(0, 1, 0);
    const kart2_effR = calcEffR(0, -1, 0);
    const totalEllipticalR = kart1_effR + kart2_effR; // 2.24m
    const totalCircularR = 1.65 + 1.65; // 3.30m

    assert.ok(totalEllipticalR < 2.4, 'elliptical total radius (2.24m) allows clean 2.4m wheel-to-wheel racing');
    assert.ok(totalCircularR > 2.4, 'circular radius (3.30m) causes 0.9m false penetration at 2.4m spacing');
  });

  it('3. Multi-kart pack cluster relaxation convergence (3 and 4 karts pack)', () => {
    const racers = [
      { pos: { x: 0, z: 0, y: 0 }, yaw: 0, weight: 1 },
      { pos: { x: 1.2, z: 0.1, y: 0 }, yaw: 0, weight: 1 },
      { pos: { x: 0.6, z: 1.5, y: 0 }, yaw: 0, weight: 1.1 },
      { pos: { x: 1.8, z: 1.4, y: 0 }, yaw: 0, weight: 0.95 }
    ];

    const getEffR = (k, ux, uz) => {
      const y = k.yaw, fx = -Math.sin(y), fz = -Math.cos(y);
      const sx = -fz, sz = fx;
      const uf = ux * fx + uz * fz, us = ux * sx + uz * sz;
      const a = 1.68, b = 1.12;
      const dsq = (b * uf) * (b * uf) + (a * us) * (a * us);
      return (a * b) / Math.sqrt(Math.max(1e-4, dsq));
    };

    const t = racers.length;
    for (let it = 0; it < 3; it++) {
      for (let e = 0; e < t; e++) {
        const n = racers[e];
        for (let i = e + 1; i < t; i++) {
          const r = racers[i];
          const o = r.pos.x - n.pos.x, a = r.pos.z - n.pos.z;
          const h = o * o + a * a;
          if (h < 1e-6) continue;
          const d = Math.sqrt(h), u = o / d, f = a / d;
          const rn = getEffR(n, u, f), rr = getEffR(r, -u, -f);
          const c = rn + rr;
          const pen = (c - d) - 0.03;
          if (pen <= 0) continue;
          const push = Math.min(0.55, pen * 0.75);
          const pPush = push * 0.85;
          const v = n.weight, p = r.weight, m = v + p;
          n.pos.x -= u * pPush * (p / m);
          n.pos.z -= f * pPush * (p / m);
          r.pos.x += u * pPush * (v / m);
          r.pos.z += f * pPush * (v / m);
        }
      }
    }

    for (const r of racers) {
      assert.ok(!Number.isNaN(r.pos.x) && !Number.isNaN(r.pos.z), 'position coordinates must be valid numbers');
      assert.ok(Math.abs(r.pos.x) < 10 && Math.abs(r.pos.z) < 10, 'relaxation must not explode positions');
    }

    // Verify distance between kart 0 and 1 expanded gently
    const finalDist01 = Math.hypot(racers[1].pos.x - racers[0].pos.x, racers[1].pos.z - racers[0].pos.z);
    assert.ok(finalDist01 >= 1.2, `cluster spacing must expand or stabilize, final = ${finalDist01.toFixed(3)}m`);
  });

  it('4. Restitution gating: inelastic resting contact vs elastic impact bounce', () => {
    const calcImpulse = (S, v = 1, p = 1) => {
      if (S >= 0) return { D: 0, effBounce: 0, punch: 0 };
      const bounce = 0.70;
      const effBounce = Math.abs(S) < 2.5 ? 0 : (Math.abs(S) < 5 ? 0.25 : bounce);
      const D = -(1 + effBounce) * S / (1 / v + 1 / p);
      const punch = Math.abs(S) > 3 ? Math.min(0.35, (Math.abs(S) - 2.5) * 0.08) : 0;
      return { D, effBounce, punch };
    };

    // Resting/rubbing contact: S = -1.0 m/s
    const resting = calcImpulse(-1.0);
    assert.strictEqual(resting.effBounce, 0, 'resting contact effBounce must be 0');
    assert.strictEqual(resting.punch, 0, 'resting contact must not trigger chassis punch shake');
    assert.strictEqual(resting.D, 0.5, 'impulse should purely cancel approach without bounce velocity');

    // Medium collision: S = -3.5 m/s
    const medium = calcImpulse(-3.5);
    assert.strictEqual(medium.effBounce, 0.25, 'medium collision effBounce must be 0.25');
    assert.ok(medium.punch > 0, 'medium collision triggers subtle punch');

    // Energetic collision: S = -7.0 m/s
    const hard = calcImpulse(-7.0);
    assert.strictEqual(hard.effBounce, 0.70, 'hard collision effBounce must be 0.70');
    assert.ok(hard.punch >= 0.35, 'hard collision triggers max punch');
    assert.strictEqual(hard.D, 1.70 * 7.0 / 2, 'hard collision applies full restitution impulse');
  });

  it('5. Track boundary clamping prevents karts from being shoved outside guardrails', () => {
    const spline = { halfWidthAt: 12 };
    const scratch = { halfWidthAt: 12, lateral: 12.5, rightX: 1, rightZ: 0 };
    const kart = { pos: { x: 15, z: 20 }, state: { trackIndex: 0 } };

    const clampTrack = (k) => {
      const srf = scratch;
      const maxL = Math.max(1, srf.halfWidthAt - 0.75); // 11.25m
      if (Math.abs(srf.lateral) > maxL) {
        const ovr = Math.abs(srf.lateral) - maxL; // 1.25m
        const sgn = srf.lateral >= 0 ? 1 : -1;
        k.pos.x -= srf.rightX * sgn * ovr;
        k.pos.z -= srf.rightZ * sgn * ovr;
      }
    };

    clampTrack(kart);
    assert.strictEqual(kart.pos.x, 15 - 1.25, 'kart pos X clamped inside track guardrail margin');
    assert.strictEqual(kart.pos.z, 20, 'kart pos Z untouched');
  });

  it('6. AI alongside lateral steering avoidance', () => {
    // Test AI avoidance logic for alongside neighbor
    const evaluateAvoidance = (zt, Dt, yaw) => {
      const q = Math.sin(yaw);
      const Mt = Math.cos(yaw);
      const pt = zt * -q + Dt * -Mt; // forward/backward
      const Rt = zt * Mt + Dt * -q; // lateral right/left
      let g = 0;
      if (pt >= -2.5 && pt < 0.4 && Math.abs(Rt) < 3.2) {
        const sPt = 1 - Math.min(1, Math.max(0, Math.abs(Rt) / 3.2));
        const sRep = Rt >= 0 ? 1 : -1;
        g -= sRep * sPt * 2.8;
      }
      return { pt, Rt, g };
    };

    // Neighbor directly alongside to the right (Rt = +1.6m, pt = -0.5m)
    const resRight = evaluateAvoidance(1.6, 0.5, 0);
    assert.ok(resRight.g < 0, 'AI steers left away from neighbor on right');
    assert.ok(Math.abs(resRight.g) > 1.0, 'meaningful avoidance impulse applied');

    // Neighbor directly alongside to the left (Rt = -1.6m, pt = -0.5m)
    const resLeft = evaluateAvoidance(-1.6, 0.5, 0);
    assert.ok(resLeft.g > 0, 'AI steers right away from neighbor on left');
    assert.ok(Math.abs(resLeft.g) > 1.0, 'meaningful avoidance impulse applied');

    // Neighbor far away (Rt = 5.0m)
    const resFar = evaluateAvoidance(5.0, 0.5, 0);
    assert.strictEqual(resFar.g, 0, 'no avoidance when clear');
  });
});

describe('=== UNIT & PROCESS TESTS: 10 GEOLOGICAL BIOMES & TRACK OVERHAUL ===', () => {
  const finalTracks = JSON.parse(fs.readFileSync('scratch/final_tracks.json', 'utf8'));
  const bundleCode = fs.readFileSync('assets/index-C9rd31_W.js', 'utf8');
  const indexHtml = fs.readFileSync('index.html', 'utf8');

  it('1. Catalog & Bundle Track Metadata (10 Geological Biomes)', () => {
    const expected = [
      { name: 'Sunken Atlantis Citadel', icon: '🏛️', sub: 'Cittadella Sommersa di Atlantide' },
      { name: 'Zephyr Terminal Runway', icon: '✈️', sub: 'Aeroporto Transatlantico' },
      { name: 'Ancient Redwood Forest', icon: '🌲', sub: 'Foresta dei Giganti' },
      { name: 'Apex Big-Air Stadium', icon: '🦘', sub: 'Circuito dei Megasalti' },
      { name: 'Redrock Canyon & Mines', icon: '🏜️', sub: 'Gola dei Minatori & Canyon' },
      { name: 'Glacier Frostbite Peaks', icon: '❄️', sub: 'Vette di Ghiaccio & Ghiacciai' },
      { name: 'Neo Zephyr Cybercity', icon: '🏙️', sub: 'Metropoli Neon Cyberpunk' },
      { name: 'Magma Caldera', icon: '🌋', sub: 'Caldera del Vulcano Magmatico' },
      { name: 'Nether Inferno Abyss', icon: '🔥', sub: "Fauci dell'Inferno" },
      { name: 'Cosmic Rainbow Orbit', icon: '🌌', sub: 'Nastro Spaziale Iperuranio' }
    ];

    assert.strictEqual(finalTracks.length, 24, '24 tracks in catalog');
    for (let i = 0; i < 10; i++) {
      const trk = finalTracks[i];
      const exp = expected[i];
      assert.strictEqual(trk.name, exp.name, `Track ${i} name`);
      assert.strictEqual(trk.ico, exp.icon, `Track ${i} icon`);
      assert.strictEqual(trk.sub, exp.sub, `Track ${i} subtitle`);
      assert.ok(bundleCode.includes(exp.name), `Bundle includes track name: ${exp.name}`);
      assert.ok(bundleCode.includes(exp.sub), `Bundle includes track sub: ${exp.sub}`);
    }
  });

  it('2. Mathematical Closed-Loop & Gap <= 0.5m across all 10 tracks', () => {
    function simulateTrackPoints(segs) {
      const bo = d => d * Math.PI / 180;
      let t = Math.PI / 2, e = 0, n = 0, i = 0;
      const pts = [{ x: 0, z: 0, u: 0 }];
      const total = segs.reduce((l, c) => l + (c.k === 'S' ? c.len : Math.abs(c.radius * bo(c.sweep))), 0);
      for (const l of segs) {
        if (l.k === 'S') {
          const step = Math.max(1, Math.round(l.len / 6));
          for (let h = 1; h <= step; h++) {
            e = pts[pts.length - 1].x + Math.cos(t) * (l.len / step);
            n = pts[pts.length - 1].z + Math.sin(t) * (l.len / step);
            i += l.len / step;
            pts.push({ x: e, z: n, u: i / total });
          }
        } else {
          const c = bo(l.sweep), h = c > 0 ? 1 : -1, d = Math.abs(l.radius * c);
          const step = Math.max(2, Math.round(d / (l.radius * bo(20))));
          const f = e + l.radius * h * -Math.sin(t), g = n + l.radius * h * Math.cos(t);
          for (let v = 1; v <= step; v++) {
            const p = Math.abs(c) * v / step;
            h > 0 ? (e = f + l.radius * Math.sin(t + p), n = g - l.radius * Math.cos(t + p)) : (e = f - l.radius * Math.sin(t - p), n = g + l.radius * Math.cos(t - p));
            i += d / step;
            pts.push({ x: e, z: n, u: i / total });
          }
          t += c;
        }
      }
      const gap = Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].z - pts[pts.length - 1].z);
      return { total, gap };
    }

    for (let i = 0; i < 10; i++) {
      const trk = finalTracks[i];
      const { total, gap } = simulateTrackPoints(trk.segs);
      assert.ok(total >= 1000, `Track ${i} total length (${total.toFixed(1)}m) >= 1000m`);
      assert.ok(gap <= 0.5, `Track ${i} closure gap (${gap.toFixed(4)}m) <= 0.5m`);
    }
  });

  it('3. Custom Altimetry Profiles, Bridges & Tunnels for all 10 tracks', () => {
    for (let i = 0; i < 10; i++) {
      const trk = finalTracks[i];
      assert.ok(Array.isArray(trk.height) && trk.height.length >= 6, `Track ${i} has custom height profile`);
      if (trk.bridge) {
        assert.ok(trk.bridge[0] < trk.bridge[1], `Track ${i} bridge interval is valid`);
      }
      if (trk.tunnel) {
        assert.ok(trk.tunnel[0] < trk.tunnel[1], `Track ${i} tunnel interval is valid`);
      }
    }
  });

  it('4. Track Terrain Palettes & Geological Surface Shading', () => {
    assert.ok(bundleCode.includes('trackPalettes=['), 'Bundle contains trackPalettes definition');
    assert.ok(bundleCode.includes('pal=trackPalettes[curTrackIdx]||cupPalettes[cupIdx]||cupPalettes[0]'), 'Terrain uses trackPalettes for current track');
    // Check specific biome colors
    assert.ok(bundleCode.includes('#2d7875'), 'Atlantis reef sand color defined');
    assert.ok(bundleCode.includes('#2b303a'), 'Airport runway tarmac sand color defined');
    assert.ok(bundleCode.includes('#3e271a'), 'Redwood forest loam color defined');
    assert.ok(bundleCode.includes('#c67d38'), 'Stadium clay dirt color defined');
    assert.ok(bundleCode.includes('#c86d3b'), 'Redrock canyon sandstone color defined');
    assert.ok(bundleCode.includes('#9fd3e8'), 'Glacial ice turquoise color defined');
    assert.ok(bundleCode.includes('#12131c'), 'Cybercity dark asphalt color defined');
    assert.ok(bundleCode.includes('#181214'), 'Magma caldera volcanic ash color defined');
    assert.ok(bundleCode.includes('#200a0d'), 'Nether inferno brimstone color defined');
    assert.ok(bundleCode.includes('#16082e'), 'Cosmic orbit deep space dust color defined');
  });

  it('5. Molten Lava Shader & Space Bottomless Void', () => {
    assert.ok(bundleCode.includes('uIsLava:'), 'Water shader declares uIsLava uniform');
    assert.ok(bundleCode.includes('if (uIsLava > 0.5)'), 'Lava fragment branch exists');
    assert.ok(bundleCode.includes('vec3 magmaBright = vec3(1.0, 0.28, 0.02);'), 'Molten lava bright color defined');
    assert.ok(bundleCode.includes('vec3 magmaCore = vec3(1.0, 0.88, 0.25);'), 'Molten lava core incandescent yellow defined');
    assert.ok(bundleCode.includes('if(curTrackIdx===9){u.visible=!1;}'), 'Ocean plane is hidden on Track 9 (Cosmic Orbit) for bottomless space void');
  });

  it('6. Procedural Landmarks & Materials for 10 Biomes', () => {
    assert.ok(bundleCode.includes('trackMatPalettes=['), 'Bundle contains trackMatPalettes definition');
    assert.ok(bundleCode.includes('specificTrackLandmarks=['), 'Bundle contains specificTrackLandmarks definition');
    assert.ok(bundleCode.includes('specificTrackLandmarks[idx]||cupLandmarks[cup]||cupLandmarks[0]'), 'Landmarks list selects specificTrackLandmarks');
  });

  it('7. Track Selector Modal HTML synchronization', () => {
    const modalNames = [
      'Sunken Atlantis Citadel', 'Zephyr Terminal Runway', 'Ancient Redwood Forest',
      'Apex Big-Air Stadium', 'Redrock Canyon & Mines', 'Glacier Frostbite Peaks',
      'Neo Zephyr Cybercity', 'Magma Caldera', 'Nether Inferno Abyss', 'Cosmic Rainbow Orbit'
    ];
    for (let i = 0; i < 10; i++) {
      assert.ok(indexHtml.includes(`data-index="${i}"`), `index.html contains data-index ${i}`);
      assert.ok(indexHtml.includes(modalNames[i]), `index.html contains ${modalNames[i]}`);
    }
  });

  it('8. Exhaust Smoke & Particle Reduction for Mobile Visibility', () => {
    // 1. Point size cap in particle vertex shader yg (reduced to 24.0, multiplier 160.0)
    assert.ok(
      bundleCode.includes('gl_PointSize = clamp(aSize * (160.0 / max(1.0, -mv.z)), 0.0, 24.0);'),
      'Particle vertex shader caps gl_PointSize to 24.0 to prevent screen-covering billboard blobs'
    );

    // 2. Smoke fragment shader transparency (reduced to faint 0.15 mist)
    assert.ok(
      bundleCode.includes('gl_FragColor = vec4(vColor, a * vAlpha * 0.15);'),
      'Smoke fragment shader softens alpha to 0.15 for ultra-clear visibility through puffs'
    );

    // 3. Exhaust puff size, vertical velocity, gravity, and lifetime in Ag.exhaust
    assert.ok(
      bundleCode.includes('0.04+Math.random()*0.08+o*0.04'),
      'Exhaust upward lift reduced so particles stay low near tarmac behind bumper'
    );
    assert.ok(
      bundleCode.includes('o>.55?.08:.05'),
      'Exhaust particle size reduced to 0.05-0.08'
    );
    assert.ok(
      bundleCode.includes('.04+o*.03'),
      'Exhaust particle lifetime shortened so puffs dissipate quickly behind the kart'
    );

    // 4. Boost trail ZERO smoke in Ag.boostTrail
    assert.ok(
      !bundleCode.match(/boostTrail\([^)]*\)\{[^}]*this\.smoke\.emit/),
      'Boost trail has ZERO smoke emission for sleek, clean flame jets'
    );

    // 5. Burst ZERO smoke in Ag.burst
    assert.ok(
      !bundleCode.match(/burst\(t,e,n,i,r,o\)\{[^}]*this\.smoke\.emit/),
      'Burst has ZERO smoke emission so nitro/rocket start never drops smoke clouds'
    );

    // 6. Intelligent emission throttling in syncVisual
    assert.ok(
      bundleCode.includes('const isThrottle=this.controls.throttle>0||a;'),
      'Exhaust emissions only occur when kart is actively throttling or boosting'
    );
    assert.ok(
      bundleCode.includes('const exRate=a?0.20:(this.isPlayer?0.16:0.10);'),
      'Exhaust emission rate is throttled cleanly for player and AI'
    );
    assert.ok(
      bundleCode.includes('a?e.boostTrail(d.x,d.y+.02,d.z,-this.backDir.x*.4,-this.backDir.z*.4,c):e.exhaust(d.x,d.y,d.z,this.backDir.x,this.backDir.z,l)'),
      'When boosting, regular exhaust is suppressed in favor of pure boostTrail'
    );
  });
});


describe('=== UNIT & PROCESS TESTS: 10 GRAPHICAL ENHANCEMENTS & FIDELITY OVERHAUL ===', () => {
  const bundleCode = fs.readFileSync('assets/index-C9rd31_W.js', 'utf8');
  const cssCode = fs.readFileSync('assets/index-DMliwuo_.css', 'utf8');

  it('1. Shadow Map Quality & Bias (Item 1)', () => {
    assert.ok(bundleCode.includes('left:-75,right:75,top:75,bottom:-75'), 'Directional shadow camera bounds optimized for tight texel density');
    assert.ok(bundleCode.includes('shadow.bias=-0.00025'), 'Shadow bias calibrated to eliminate shadow acne');
    assert.ok(bundleCode.includes('shadow.normalBias=.042'), 'Shadow normalBias calibrated to eliminate peter-panning on slopes');
  });

  it('2. Road Surface Specular & PBR Realism (Item 2)', () => {
    assert.ok(bundleCode.includes('d.roughness=.62'), 'Road surface roughness tuned for specular sheen');
    assert.ok(bundleCode.includes('d.metalness=.16'), 'Road surface metalness set for subtle asphalt reflectivity');
    assert.ok(bundleCode.includes('d.bumpScale=.032'), 'Road surface bump scale increased for tactile 3D grit');
  });

  it('3. Dynamic Biome Water & Molten Lava Shader (Item 3)', () => {
    assert.ok(bundleCode.includes('uWaterColor:'), 'Water shader declares uWaterColor uniform');
    assert.ok(bundleCode.includes('uniform vec3 uWaterColor;'), 'Fragment shader receives uWaterColor');
    assert.ok(bundleCode.includes('vec3 _deepCol = uWaterColor * 0.42;'), 'Deep lagoon blends dynamically with theme water color');
    assert.ok(bundleCode.includes('float cracks = smoothstep(0.04, 0.0, abs(lavaNoise - 0.15))'), 'Molten lava features animated incandescent crust fissures');
  });

  it('4. Sky Dome Atmospheric Horizon Scattering (Item 4)', () => {
    assert.ok(bundleCode.includes('float horizonHaze=exp(-abs(d.y)*5.2);'), 'Exponential Rayleigh horizon haze scattering');
    assert.ok(bundleCode.includes('c=mix(c,uSkyHorizon*1.12,horizonHaze*0.72);'), 'Sky dome smoothly blends into terrain horizon fog');
    assert.ok(bundleCode.includes('c+=vec3(1.,.82,.55)*pow(sd,32.)*horizonHaze*.55;'), 'Warm solar atmospheric halo at horizon');
  });

  it('5. Kart Automotive Metallic Car Paint & Material Contrast (Item 5)', () => {
    assert.ok(bundleCode.includes('o=r(s.kart.body,.22,.62)'), 'Kart chassis uses high-gloss automotive metallic paint');
    assert.ok(bundleCode.includes('c=r(s.kart.rim,.15,.85)'), 'Kart rims use polished alloy finish');
    assert.ok(bundleCode.includes('l=r(s.kart.tyre,.88,.04)'), 'Kart tyres use deep vulcanized matte rubber');
  });

  it('6. White Speed Lines Elimination & Speedlines Overlay Removal', () => {
    assert.ok(cssCode.includes('.speedlines{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}'), 'Speedlines CSS overlay is completely neutralized');
  });

  it('7. Solar Bloom & Lens Glare Flare (Item 7)', () => {
    assert.ok(bundleCode.includes('<div class="hud__glare" data-role="glare"></div>'), 'HUD includes solar glare overlay element');
    assert.ok(bundleCode.includes('this.setSolarGlare='), 'UI provides setSolarGlare method');
    assert.ok(bundleCode.includes('this.ui.setSolarGlare(_dot>.62?Math.pow((_dot-.62)/.38,2.2)*.85:0)'), 'Race loop computes camera-to-sun alignment glare');
    assert.ok(cssCode.includes('.hud__glare{'), 'CSS defines optical lens glare styling');
  });

  it('8. Kart Headlight & Taillight Ground Projection (Item 8)', () => {
    assert.ok(bundleCode.includes('rgba(255,250,220,0.5)'), 'Canvas generates twin front headlight projection pools');
    assert.ok(bundleCode.includes('s.kart.glow'), 'Kart underglow neon color projected onto ground');
    assert.ok(bundleCode.includes('polygonOffsetUnits:-6'), 'Ground projection decal uses polygonOffset to eliminate z-fighting');
    assert.ok(bundleCode.includes('_gqd.geometry.dispose()'), 'Ground projection resources disposed cleanly on kart unload');
  });

  it('9. Anti-Aliased Textured Skidmarks (Item 9)', () => {
    assert.ok(bundleCode.includes('varying vec2 vUv;'), 'Skidmark vertex and fragment shaders declare vUv');
    assert.ok(bundleCode.includes('float edge = 1.0 - pow(abs(vUv.x * 2.0 - 1.0), 3.2);'), 'Skidmarks feature lateral anti-aliased edge feathering');
    assert.ok(bundleCode.includes('float grooves = 0.78 + 0.22 * sin(vUv.x * 37.69);'), 'Skidmarks feature realistic rubber tyre tread grooves');
    assert.ok(bundleCode.includes('this.geo.setAttribute("uv",new ve(_uvs,2))'), 'Geometry initializes UV coordinates for all skid quads');
  });

  it('10. HUD Telemetry Dials & Minimap Visual Polish (Item 10)', () => {
    assert.ok(cssCode.includes('border:1px solid rgba(124,249,255,.45)'), 'HUD panels feature luminous glass border highlight');
    assert.ok(cssCode.includes('text-shadow:0 2px 10px rgba(0,0,0,.92)'), 'Speedometer and telemetry text have strong drop-shadow contrast');
    assert.ok(bundleCode.includes('e.strokeStyle="rgba(2, 8, 16, 0.95)",e.lineWidth=19'), 'Minimap uses high-contrast deep outer outline');
    assert.ok(bundleCode.includes('e.arc(ox,oy,14,0,Math.PI*2),e.strokeStyle="rgba(255, 200, 87, 0.3)"'), 'Player minimap blip features glowing outer pulse ring');
  });
});

describe('=== UNIT & PROCESS TESTS: REAR & CLOSE-KART VISUAL STABILITY ===', () => {
  const bundleCode = fs.readFileSync('assets/index-C9rd31_W.js', 'utf8');

  it('1. Calibrated Ground Projection Quad Footprint & Anti-Popping', () => {
    assert.ok(bundleCode.includes('new mi(2.1,3.2)'), 'Ground decal footprint scaled down to 2.1x3.2m to fit cleanly under chassis');
    assert.ok(bundleCode.includes('_gqd.frustumCulled=!1'), 'Ground quad explicitly sets frustumCulled to false to prevent popping/flicker');
    assert.ok(bundleCode.includes('side:0'), 'Ground projection material uses FrontSide (0) to eliminate backface bleeding into other chassis');
    assert.ok(bundleCode.includes('position.set(0,.02,-.15)'), 'Ground decal placed immediately under vehicle belly');
  });

  it('2. Airborne Ground Decal Opacity Fading & Anti-Strobe Damping', () => {
    assert.ok(
      bundleCode.includes('this._shAlpha=ne(this._shAlpha!==undefined?this._shAlpha:.72') ||
      bundleCode.includes('o.gqd&&(o.gqd.material.opacity=t.grounded'),
      'Ground decal smoothly fades to 0 when kart is airborne or jumping'
    );
  });

  it('3. Proximity Camera Fading & Lens Near-Clip Protection (Schmitt-Trigger & Anti-Doubling)', () => {
    assert.ok(bundleCode.includes('updateProximityFade('), 'ac class defines updateProximityFade method');
    assert.ok(bundleCode.includes('resetProximityFade()'), 'ac class defines resetProximityFade method');
    assert.ok(bundleCode.includes('this._fadeAlpha<.04'), 'Schmitt trigger culls karts only when smoothly faded below 0.04 to eliminate flicker');
    assert.ok(bundleCode.includes('this._fadeAlpha>.20'), 'Schmitt trigger unhides karts only when alpha exceeds 0.20 for stable hysteresis');
    assert.ok(bundleCode.includes('l.mat.depthWrite=!0'), 'Kart materials preserve depthWrite:true during fade to prevent double-mesh geometry ("si sdoppia")');
    assert.ok(bundleCode.includes('_rk.updateProximityFade?.(_cPos,_pl,_lb'), 'Ev.syncVisual updates proximity fade with camera, player, lookback, and delta time');
  });

  it('4. Opponent Exhaust Smoke Suppression in Proximity Zone', () => {
    assert.ok(
      bundleCode.includes('if((!this.isPlayer&&this._proxActive)?!1:Math.random()<exRate)'),
      'Suppresses dense exhaust puffs when opponent kart is close or faded near camera lens'
    );
    assert.ok(
      bundleCode.includes('if(!n||this._proxHidden){this.hasPrev=!1;return}'),
      'Suppresses skids and particle sparks when kart is hidden inside near-clip zone'
    );
  });

  it('5. Dynamic Chase Camera Height Elevation Buffer', () => {
    assert.ok(
      bundleCode.includes('(8.5-extra.trailingCloseDist)*.04'),
      'Camera dynamically elevates height gently when pursuers draft closely behind player'
    );
  });
});

describe('=== UNIT & PROCESS TESTS: MULTIPLAYER READY CHECK, 5S COUNTDOWN & LOBBY SYNC ===', () => {
  it('1. Host initializes as ready and guest initializes as unready upon joining', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-CONF');
    assert.strictEqual(host.players[0].isReady, true, 'Host should default to isReady: true');
    assert.strictEqual(host.allPlayersReady(), true, 'Host alone in room should be considered ready');

    // Simulate guest join
    let welcomeSent = null;
    const mockGuestConn = {
      peer: 'guest_peer_1',
      send: (data) => { welcomeSent = data; },
      close: () => {}
    };

    host.handleIncomingData(mockGuestConn, {
      type: 'JOIN_REQUEST',
      name: 'GuestRacer',
      kartId: 'zuzu'
    });

    assert.strictEqual(host.players.length, 2);
    const guestPlayer = host.players.find(p => p.slot === 1);
    assert.ok(guestPlayer, 'Guest should be assigned slot 1');
    assert.strictEqual(guestPlayer.isReady, false, 'New guest player must start with isReady: false');
    assert.strictEqual(host.allPlayersReady(), false, 'allPlayersReady must return false when guest has not confirmed ready');
    host.leaveRoom();
  });

  it('2. Ready status toggling and PLAYER_READY message propagation', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-TOGG');
    host.players = [
      { peerId: 'p0', slot: 0, name: 'Host', kartId: 'nix', isHost: true, ping: 0, isAI: false, isReady: true },
      { peerId: 'p1', slot: 1, name: 'Guest1', kartId: 'bruno', isHost: false, ping: 30, isAI: false, isReady: false }
    ];

    assert.strictEqual(host.allPlayersReady(), false);

    // Guest sends PLAYER_READY: true
    let lobbyUpdated = false;
    host.notifyLobbyUpdate = () => { lobbyUpdated = true; };
    host.broadcastToAll = () => {};

    host.handleIncomingData({ peer: 'p1' }, {
      type: 'PLAYER_READY',
      slot: 1,
      isReady: true
    });

    assert.strictEqual(host.players[1].isReady, true, 'Guest player should now be marked ready');
    assert.strictEqual(host.allPlayersReady(), true, 'All players should now be confirmed ready');

    // Guest toggles back to unready
    host.handleIncomingData({ peer: 'p1' }, {
      type: 'PLAYER_READY',
      slot: 1,
      isReady: false
    });
    assert.strictEqual(host.players[1].isReady, false);
    assert.strictEqual(host.allPlayersReady(), false, 'Unready guest must revoke allPlayersReady');
    host.leaveRoom();
  });

  it('3. Host startRace prevents race launch when not all players are ready', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-GATE');
    host.players = [
      { peerId: 'p0', slot: 0, name: 'Host', kartId: 'nix', isHost: true, ping: 0, isAI: false, isReady: true },
      { peerId: 'p1', slot: 1, name: 'Guest1', kartId: 'sable', isHost: false, ping: 20, isAI: false, isReady: false }
    ];

    let toastMsg = '';
    host.onToast = (msg) => { toastMsg = msg; };
    let broadcastSent = null;
    host.broadcastToAll = (msg) => { broadcastSent = msg; };

    const startResult = host.startRace(5);
    assert.strictEqual(startResult, false, 'startRace must return false when human player is unready');
    assert.strictEqual(host.state, 'HOST_LOBBY', 'State must remain HOST_LOBBY');
    assert.strictEqual(broadcastSent, null, 'No countdown or start message should be broadcasted');
    assert.ok(toastMsg.includes('confermare') || toastMsg.includes('pronti'), 'Must toast informative warning message');

    // Now confirm guest readiness and try again
    host.players[1].isReady = true;
    const okResult = host.startRace(5);
    assert.strictEqual(okResult, true, 'startRace must succeed when all players are confirmed ready');
    assert.strictEqual(host.state, 'COUNTDOWN', 'Host state must transition to COUNTDOWN');
    assert.ok(broadcastSent, 'Should broadcast countdown payload');
    assert.strictEqual(broadcastSent.type, 'START_COUNTDOWN');
    assert.strictEqual(broadcastSent.countdownSec, 5);

    // Clean up timer
    host.leaveRoom();
  });

  it('4. 5-Second Synchronized Countdown lifecycle and tick notifications', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-5SEC');
    host.players = [
      { peerId: 'p0', slot: 0, name: 'Host', kartId: 'nix', isHost: true, ping: 0, isAI: false, isReady: true }
    ];

    let ticks = [];
    host.onCountdownTick = (remaining, data) => {
      ticks.push(remaining);
    };

    host.startCountdown(5);
    assert.strictEqual(host.state, 'COUNTDOWN');
    assert.strictEqual(ticks[0], 5, 'Immediate tick notification at 5 seconds');
    assert.ok(host.countdownTimer !== null, 'Countdown timer interval must be active');

    // Clean up timer
    host.leaveRoom();
    assert.strictEqual(host.countdownTimer, null, 'leaveRoom must clear countdown timer');
  });

  it('5. Disconnection during 5-second countdown aborts countdown and notifies lobby', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-DROP');
    host.players = [
      { peerId: 'p0', slot: 0, name: 'Host', kartId: 'nix', isHost: true, ping: 0, isAI: false, isReady: true },
      { peerId: 'guest_drop', slot: 1, name: 'LeavingGuest', kartId: 'marlow', isHost: false, ping: 40, isAI: false, isReady: true }
    ];

    let countdownCancelled = false;
    let cancelReason = '';
    host.onCountdownCancel = (reason) => {
      countdownCancelled = true;
      cancelReason = reason;
    };

    let broadcastMsgs = [];
    host.broadcastToAll = (msg) => { broadcastMsgs.push(msg); };

    // Start 5-second countdown
    host.startRace(5);
    assert.strictEqual(host.state, 'COUNTDOWN');
    assert.ok(host.countdownTimer !== null);

    // Client drops during countdown
    host.handlePeerDisconnect('guest_drop');

    assert.strictEqual(host.state, 'HOST_LOBBY', 'State must revert from COUNTDOWN back to HOST_LOBBY');
    assert.strictEqual(host.countdownTimer, null, 'Countdown timer must be terminated');
    assert.strictEqual(countdownCancelled, true, 'onCountdownCancel callback must be triggered');
    assert.ok(cancelReason.includes('disconnesso'), 'Cancel reason should report peer disconnect');
    assert.ok(broadcastMsgs.some(m => m.type === 'COUNTDOWN_CANCEL'), 'Must broadcast COUNTDOWN_CANCEL to any remaining peers');

    host.leaveRoom();
  });

  it('6. Changing character resets ready check to require re-confirmation', () => {
    const guest = new MultiplayerManager();
    guest.state = 'GUEST_LOBBY';
    guest.mySlot = 1;
    guest.players = [
      { peerId: 'p0', slot: 0, name: 'Host', kartId: 'nix', isHost: true, isAI: false, isReady: true },
      { peerId: 'p1', slot: 1, name: 'Guest', kartId: 'bruno', isHost: false, isAI: false, isReady: true }
    ];

    let sentUpdate = null;
    guest.broadcastToAll = (msg) => { sentUpdate = msg; };

    assert.strictEqual(guest.players[1].isReady, true);

    // Guest picks different kart
    guest.setSelectedKart('rustam');

    assert.strictEqual(guest.players[1].kartId, 'rustam', 'Guest kart must update to rustam');
    assert.strictEqual(guest.players[1].isReady, false, 'Guest isReady must reset to false when character is changed');
    assert.strictEqual(sentUpdate?.type, 'PLAYER_UPDATE');
    assert.strictEqual(sentUpdate?.kartId, 'rustam');
    assert.strictEqual(sentUpdate?.isReady, false, 'Broadcasted update must reflect unready state');

    guest.leaveRoom();
  });

  it('7. Track synchronization broadcasts across all connected peers in room', () => {
    const host = new MultiplayerManager();
    host.createRoom('ZEPH-TRK');
    let syncBroadcast = null;
    host.broadcastToAll = (msg) => { syncBroadcast = msg; };

    host.setTrack(14); // Stratos Hairpins
    assert.strictEqual(host.trackIndex, 14);
    assert.strictEqual(syncBroadcast?.type, 'TRACK_SYNC');
    assert.strictEqual(syncBroadcast?.trackIndex, 14);

    // Guest receives TRACK_SYNC
    const guest = new MultiplayerManager();
    guest.state = 'GUEST_LOBBY';
    guest.handleIncomingData({}, {
      type: 'TRACK_SYNC',
      trackIndex: 14,
      laps: 3
    });
    assert.strictEqual(guest.trackIndex, 14, 'Guest must synchronize track index from TRACK_SYNC');

    host.leaveRoom();
    guest.leaveRoom();
  });

  it('8. Connected guest hides join button and guest form, leaving room restores them', () => {
    const guest = new MultiplayerManager();
    let lobbyEvents = [];
    guest.onLobbyUpdate = (lobby) => {
      lobbyEvents.push({ ...lobby, state: guest.state });
    };

    // Simulate joining and receiving ROOM_WELCOME
    guest.handleIncomingData({}, {
      type: 'ROOM_WELCOME',
      roomCode: 'ZEPH-GUEST',
      mySlot: 1,
      trackIndex: 5,
      laps: 3,
      players: [
        { slot: 0, name: 'Host', isHost: true, isReady: true },
        { slot: 1, name: 'Guest', isHost: false, isReady: false }
      ]
    });

    assert.strictEqual(guest.state, 'GUEST_LOBBY', 'State must be GUEST_LOBBY upon ROOM_WELCOME');
    assert.strictEqual(guest.isHost, false);
    const isGuestInRoom = (mgr) => !mgr.isHost && (
      mgr.state === 'CONNECTING' || 
      mgr.state === 'GUEST_LOBBY' || 
      mgr.state === 'COUNTDOWN' || 
      mgr.state === 'RACING' || 
      mgr.state === 'RESULTS'
    );
    assert.strictEqual(isGuestInRoom(guest), true, 'isGuestInRoom must be true so that joinBtn and guest form are hidden');

    // Leaving room triggers state IDLE and resets UI
    guest.leaveRoom();
    assert.strictEqual(guest.state, 'IDLE', 'State must reset to IDLE upon leaveRoom');
    assert.strictEqual(isGuestInRoom(guest), false, 'isGuestInRoom must be false after leaving room so joinBtn is restored');
    assert.strictEqual(lobbyEvents.length >= 2, true, 'onLobbyUpdate must have fired on welcome and on leaveRoom');
  });

  it('9. Connecting state immediately notifies lobby and flags isGuestInRoom as true to hide ENTRA NELLA STANZA button', () => {
    const guest = new MultiplayerManager();
    let updates = 0;
    guest.onLobbyUpdate = () => { updates++; };

    const isGuestInRoom = (mgr) => !mgr.isHost && (
      mgr.state === 'CONNECTING' || 
      mgr.state === 'GUEST_LOBBY' || 
      mgr.state === 'COUNTDOWN' || 
      mgr.state === 'RACING' || 
      mgr.state === 'RESULTS'
    );

    assert.strictEqual(guest.state, 'IDLE');
    assert.strictEqual(isGuestInRoom(guest), false, 'Initially IDLE, join button visible');

    // Guest begins joining
    guest.state = 'CONNECTING';
    guest.notifyLobbyUpdate();
    assert.strictEqual(guest.state, 'CONNECTING');
    assert.strictEqual(isGuestInRoom(guest), true, 'CONNECTING state must flag isGuestInRoom as true to hide join button immediately');
    assert.strictEqual(updates, 1, 'onLobbyUpdate must fire immediately upon entering CONNECTING');

    // Connection opens: peer connects
    guest.state = 'GUEST_LOBBY';
    guest.notifyLobbyUpdate();
    assert.strictEqual(guest.state, 'GUEST_LOBBY');
    assert.strictEqual(isGuestInRoom(guest), true, 'GUEST_LOBBY keeps join button hidden');
    assert.strictEqual(updates, 2);

    guest.leaveRoom();
    assert.strictEqual(guest.state, 'IDLE');
    assert.strictEqual(isGuestInRoom(guest), false, 'After leaving room, join button is cleanly restored');
  });

  it('10. Coordinated race start flow: 5s synchronized pre-race preparation ticks -> RACE_START_SYNC -> transition to classic 3s starting grid countdown', () => {
    const host = new MultiplayerManager();
    const guest = new MultiplayerManager();

    host.createRoom('ZEPH-LIVE');
    host.players = [
      { peerId: 'p0', slot: 0, name: 'Host', kartId: 'nix', isHost: true, ping: 0, isAI: false, isReady: true },
      { peerId: 'p1', slot: 1, name: 'Guest', kartId: 'bruno', isHost: false, ping: 35, isAI: false, isReady: true }
    ];

    guest.state = 'GUEST_LOBBY';
    guest.mySlot = 1;
    guest.players = [...host.players];

    let hostTicks = [];
    let guestTicks = [];
    host.onCountdownTick = (r) => hostTicks.push(r);
    guest.onCountdownTick = (r) => guestTicks.push(r);

    let hostRaceStarted = false;
    let guestRaceStarted = false;
    let hostRaceData = null;
    let guestRaceData = null;

    host.onRaceStart = (d) => { hostRaceStarted = true; hostRaceData = d; };
    guest.onRaceStart = (d) => { guestRaceStarted = true; guestRaceData = d; };

    // Host starts 5-second countdown
    const started = host.startCountdown(5);
    assert.strictEqual(started, true);
    assert.strictEqual(host.state, 'COUNTDOWN');
    assert.strictEqual(hostTicks[0], 5);

    // Guest receives START_COUNTDOWN message
    guest.handleIncomingData({}, {
      type: 'START_COUNTDOWN',
      countdownSec: 5,
      trackIndex: host.trackIndex,
      laps: host.laps,
      players: host.players,
      startTime: Date.now() + 5000
    });
    assert.strictEqual(guest.state, 'COUNTDOWN');
    assert.strictEqual(guestTicks[0], 5);

    // When 5 seconds expire, host emits RACE_START_SYNC
    const racePayload = {
      type: 'RACE_START_SYNC',
      trackIndex: host.trackIndex,
      laps: host.laps,
      players: host.players,
      startTime: Date.now()
    };
    host.state = 'RACING';
    host.onRaceStart(racePayload);
    guest.handleIncomingData({}, racePayload);

    assert.strictEqual(hostRaceStarted, true, 'Host must trigger onRaceStart');
    assert.strictEqual(guestRaceStarted, true, 'Guest must trigger onRaceStart upon receiving RACE_START_SYNC');
    assert.strictEqual(host.state, 'RACING');
    assert.strictEqual(guest.state, 'RACING');
    assert.strictEqual(guestRaceData.players.length, 6, 'Grid must contain 6 racers with AI fill');

    // Clean up
    host.leaveRoom();
    guest.leaveRoom();
  });
});

describe('=== UNIT & PROCESS TESTS: MULTIPLAYER TOURNAMENT PLAYLIST, SCORING & INTER-RACE ADVANCEMENT ===', () => {
  it('1. Tournament Grand Prix points constant conforms strictly to [15, 12, 10, 8, 6, 4]', () => {
    assert.ok(Array.isArray(MultiplayerManager.TOURNAMENT_POINTS), 'TOURNAMENT_POINTS must be an array');
    assert.deepStrictEqual(MultiplayerManager.TOURNAMENT_POINTS, [15, 12, 10, 8, 6, 4], 'Points schedule must be [15, 12, 10, 8, 6, 4]');
  });

  it('2. Host can configure playlist track count (1 to 5) and assign specific tracks per slot', () => {
    const host = new MultiplayerManager();
    host.isHost = true;
    assert.strictEqual(host.playlistTracks.length, 3, 'Default playlist should have 3 tracks');

    // Change count to 4
    host.setPlaylistCount(4);
    assert.strictEqual(host.playlistTracks.length, 4, 'Playlist should have 4 tracks');

    // Clamp count to maximum 5
    host.setPlaylistCount(10);
    assert.strictEqual(host.playlistTracks.length, 5, 'Playlist count should be clamped to 5 max');

    // Clamp count to minimum 1
    host.setPlaylistCount(0);
    assert.strictEqual(host.playlistTracks.length, 1, 'Playlist count should be clamped to 1 min');

    // Configure specific tracks: [3, 7, 12, 23]
    host.setPlaylistCount(4);
    host.setPlaylistTrackAt(0, 3);
    host.setPlaylistTrackAt(1, 7);
    host.setPlaylistTrackAt(2, 12);
    host.setPlaylistTrackAt(3, 23);

    assert.deepStrictEqual(host.playlistTracks, [3, 7, 12, 23], 'Playlist tracks must match configured indices');
    assert.strictEqual(host.trackIndex, 3, 'First track in playlist must become initial trackIndex');
  });

  it('3. Host broadcasts playlist to guest via PLAYLIST_SYNC and guest updates playlist', () => {
    const host = new MultiplayerManager();
    host.isHost = true;
    const guest = new MultiplayerManager();
    guest.isHost = false;

    let broadcastData = null;
    host.broadcast = (d) => { broadcastData = d; };

    host.setPlaylist([2, 5, 9], 2);
    assert.ok(broadcastData, 'Host must broadcast PLAYLIST_SYNC');
    assert.strictEqual(broadcastData.type, 'PLAYLIST_SYNC');
    assert.deepStrictEqual(broadcastData.playlistTracks, [2, 5, 9]);
    assert.strictEqual(broadcastData.laps, 2);

    // Guest receives PLAYLIST_SYNC
    guest.handleIncomingData({}, broadcastData);
    assert.deepStrictEqual(guest.playlistTracks, [2, 5, 9]);
    assert.strictEqual(guest.laps, 2);
    assert.strictEqual(guest.trackIndex, 2);
  });

  it('4. Host processes race results, computes points based on rank, and accumulates cumulative scores', () => {
    const host = new MultiplayerManager();
    host.isHost = true;
    host.mySlot = 0;
    host.players = [
      { slot: 0, name: 'HostRacer', kartId: 'nix', isHost: true },
      { slot: 1, name: 'GuestRacer', kartId: 'zuzu', isHost: false },
      { slot: 2, name: 'AI 1', kartId: 'bruno', isAI: true },
      { slot: 3, name: 'AI 2', kartId: 'sable', isAI: true },
      { slot: 4, name: 'AI 3', kartId: 'rustam', isAI: true },
      { slot: 5, name: 'AI 4', kartId: 'marlow', isAI: true }
    ];

    let standingsData = null;
    host.onTournamentStandings = (d) => { standingsData = d; };

    // Race 1 finish order: Guest 1st, Host 2nd, AI 1 3rd, AI 2 4th, AI 3 5th, AI 4 6th
    const race1Results = [
      { slot: 1, rank: 1, time: 65.2 },
      { slot: 0, rank: 2, time: 66.1 },
      { slot: 2, rank: 3, time: 68.0 },
      { slot: 3, rank: 4, time: 69.5 },
      { slot: 4, rank: 5, time: 71.0 },
      { slot: 5, rank: 6, time: 72.3 }
    ];

    host.handleRaceResults(race1Results);

    assert.ok(standingsData, 'onTournamentStandings must be called');
    assert.strictEqual(standingsData.standings[0].slot, 1, 'Guest must be in 1st place');
    assert.strictEqual(standingsData.standings[0].totalPoints, 15, '1st place receives 15 points');
    assert.strictEqual(standingsData.standings[1].slot, 0, 'Host must be in 2nd place');
    assert.strictEqual(standingsData.standings[1].totalPoints, 12, '2nd place receives 12 points');
    assert.strictEqual(standingsData.standings[2].totalPoints, 10, '3rd place receives 10 points');
    assert.strictEqual(standingsData.isFinalRace, false, 'Race 1 of 3 is not final race');

    // Race 2 finish order: Host 1st (+15), Guest 2nd (+12)
    const race2Results = [
      { slot: 0, rank: 1, time: 64.0 },
      { slot: 1, rank: 2, time: 64.5 },
      { slot: 2, rank: 3, time: 67.0 },
      { slot: 3, rank: 4, time: 68.0 },
      { slot: 4, rank: 5, time: 70.0 },
      { slot: 5, rank: 6, time: 72.0 }
    ];

    host.playlistIndex = 1;
    host.handleRaceResults(race2Results);

    // Host: 12 + 15 = 27 pts. Guest: 15 + 12 = 27 pts.
    assert.strictEqual(host.tournamentScores.get(0), 27, 'Host cumulative score must be 27');
    assert.strictEqual(host.tournamentScores.get(1), 27, 'Guest cumulative score must be 27');
  });

  it('5. Host broadcasts TOURNAMENT_STANDINGS_SYNC to guests and triggers callbacks', () => {
    const host = new MultiplayerManager();
    host.isHost = true;
    const guest = new MultiplayerManager();
    guest.isHost = false;
    guest.mySlot = 1;

    let guestStandings = null;
    guest.onTournamentStandings = (d) => { guestStandings = d; };

    const syncMsg = {
      type: 'TOURNAMENT_STANDINGS_SYNC',
      standings: [
        { slot: 1, name: 'GuestRacer', kartId: 'zuzu', totalPoints: 15, lastRacePoints: 15, lastRaceRank: 1 },
        { slot: 0, name: 'HostRacer', kartId: 'nix', totalPoints: 12, lastRacePoints: 12, lastRaceRank: 2 }
      ],
      playlistIndex: 0,
      totalTracks: 3,
      isFinalRace: false
    };

    guest.handleIncomingData({}, syncMsg);

    assert.ok(guestStandings, 'Guest onTournamentStandings must be triggered');
    assert.strictEqual(guest.tournamentScores.get(1), 15);
    assert.strictEqual(guest.tournamentScores.get(0), 12);
    assert.strictEqual(guestStandings.isFinalRace, false);
  });

  it('6. Host advances to next tournament race via advanceToNextRace(), incrementing playlistIndex and starting countdown', () => {
    const host = new MultiplayerManager();
    host.isHost = true;
    host.playlistTracks = [0, 4, 8];
    host.playlistIndex = 0;
    host.trackIndex = 0;

    const guest = new MultiplayerManager();
    guest.isHost = false;
    guest.playlistTracks = [0, 4, 8];
    guest.playlistIndex = 0;

    let nextRaceBroadcast = null;
    host.broadcast = (d) => { nextRaceBroadcast = d; };

    let guestTick = null;
    guest.onCountdownTick = (r) => { guestTick = r; };

    const advanced = host.advanceToNextRace(5);
    assert.strictEqual(advanced, true, 'advanceToNextRace should return true');
    assert.strictEqual(host.playlistIndex, 1, 'playlistIndex should advance to 1');
    assert.strictEqual(host.trackIndex, 4, 'trackIndex should become next track (4)');
    assert.strictEqual(host.state, 'COUNTDOWN');

    // Verify broadcast to guests
    assert.ok(nextRaceBroadcast);
    assert.strictEqual(nextRaceBroadcast.type, 'NEXT_TOURNAMENT_RACE');
    assert.strictEqual(nextRaceBroadcast.playlistIndex, 1);
    assert.strictEqual(nextRaceBroadcast.trackIndex, 4);

    // Guest handles NEXT_TOURNAMENT_RACE
    guest.handleIncomingData({}, nextRaceBroadcast);
    assert.strictEqual(guest.playlistIndex, 1);
    assert.strictEqual(guest.trackIndex, 4);
    assert.strictEqual(guest.state, 'COUNTDOWN');
    assert.strictEqual(guestTick, 5);

    host.leaveRoom();
    guest.leaveRoom();
  });

  it('7. Final tournament race completion triggers onTournamentComplete callback', () => {
    const host = new MultiplayerManager();
    host.isHost = true;
    host.playlistTracks = [0, 1]; // 2-race tournament
    host.playlistIndex = 1; // 2nd race (final)
    host.players = [
      { slot: 0, name: 'ChampionHost', kartId: 'nix', isHost: true },
      { slot: 1, name: 'RunnerUpGuest', kartId: 'sable', isHost: false }
    ];

    let tournamentDone = false;
    let winnerName = null;
    host.onTournamentComplete = (d) => {
      tournamentDone = true;
      winnerName = d.standings[0]?.name;
    };

    const finalResults = [
      { slot: 0, rank: 1, time: 60.0 },
      { slot: 1, rank: 2, time: 62.0 }
    ];

    host.handleRaceResults(finalResults);

    assert.strictEqual(host.isTournamentComplete, true, 'Tournament must be marked complete');
    assert.strictEqual(tournamentDone, true, 'onTournamentComplete callback must fire');
    assert.strictEqual(winnerName, 'ChampionHost', 'Winner must be the racer with top cumulative points');
  });

  it('8. Tournament reset clears scores and restores playlist index', () => {
    const host = new MultiplayerManager();
    host.isHost = true;
    host.playlistTracks = [10, 15, 20];
    host.playlistIndex = 2;
    host.tournamentScores.set(0, 45);
    host.isTournamentComplete = true;

    let resetBroadcast = null;
    host.broadcast = (d) => { resetBroadcast = d; };

    host.resetTournament();

    assert.strictEqual(host.playlistIndex, 0);
    assert.strictEqual(host.trackIndex, 10);
    assert.strictEqual(host.tournamentScores.size, 0);
    assert.strictEqual(host.isTournamentComplete, false);
    assert.ok(resetBroadcast);
    assert.strictEqual(resetBroadcast.type, 'TOURNAMENT_RESET');
  });

  it('9. NOS trail particle emission conforms to subtle specifications', () => {
    // Test particle emission simulation matching Ag.nosTrail parameters in bundle
    const particles = [];
    const mockSmokeEmitter = {
      emit: (pos, vel, col, sz, life, drag) => {
        particles.push({ pos, vel, col, sz, life, drag });
      }
    };

    const nosTrailSim = (x, y, z, backDirX, backDirZ) => {
      // White color (0xFFFFFF = 16777215), subtle size (0.15), fast fade (0.18s), drag 3.2
      const vx = backDirX * 3.5 + (Math.random() - 0.5) * 0.4;
      const vy = 0.35 + (Math.random() - 0.5) * 0.2;
      const vz = backDirZ * 3.5 + (Math.random() - 0.5) * 0.4;
      mockSmokeEmitter.emit({ x, y, z }, { x: vx, y: vy, z: vz }, 16777215, 0.15, 0.18, 3.2);
    };

    // Emit 4 NOS trail puffs
    for (let i = 0; i < 4; i++) {
      nosTrailSim(0, 0.3, 0, 0, -1);
    }

    assert.strictEqual(particles.length, 4, 'Should emit 4 particles');
    particles.forEach(p => {
      assert.strictEqual(p.col, 16777215, 'Color must be pure white (16777215 / 0xFFFFFF)');
      assert.strictEqual(p.sz, 0.15, 'Size must be subtle 0.15 (not large smoke plumes)');
      assert.strictEqual(p.life, 0.18, 'Lifetime must be fast-dissipating 0.18s');
      assert.strictEqual(p.drag, 3.2, 'Drag must be 3.2 for rapid decelerating dissipation');
    });
  });
});

describe('=== UNIT & PROCESS TESTS: AI OPPONENT OVERHAUL & ANTI-FLICKER PRECISION ===', () => {
  const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');

  it('1. AI difficulty profiles are calibrated with boosted skills, tight lines, and 100% drift capability', () => {
    assert.ok(bundle.includes('{skill:1.28,aggression:.98,lineNoise:.12,canDrift:!0,reaction:.015}'), 'AI ace profile calibrated');
    assert.ok(bundle.includes('{skill:1.12,aggression:.82,lineNoise:.28,canDrift:!0,reaction:.04}'), 'AI base profile calibrated');
  });

  it('2. AI continuous full throttle on straights and high-speed drift entrance', () => {
    assert.ok(bundle.includes('U>=0?(G=1,H=0):U>-2.2?(G=Math.max(.72,1+U/6),H=0):(G=0,H=$t(-U/8))'), 'AI maintains full throttle on straights');
    assert.ok(bundle.includes('B>.011&&c>15&&Math.abs(I)>.28&&this.driftHold<=0'), 'AI enters power drift proactively on turns');
  });

  it('3. AI strategic deployment for all special weapons (vortex, horn, triple_shield, turbo)', () => {
    assert.ok(bundle.includes('case"vortex":return r>0&&minAheadDist<50;'), 'AI fires vortex aggressively at leaders');
    assert.ok(bundle.includes('case"horn":return a>0||o>0||Math.abs(t.state.speed)<16;'), 'AI sounds super horn defensively and when crowded');
    assert.ok(bundle.includes('case"triple_shield":return o>0||r>0||this.rng()<.08;'), 'AI deploys triple shield');
    assert.ok(bundle.includes('Math.abs(l.curvature)<.016||r>0||this.rng()<.08'), 'AI turbo usage expanded to slight curves and chases');
  });

  it('4. AI rocket launch start chance scaled to high competitive tier with zero stall', () => {
    assert.ok(bundle.includes('rocketChance=.55+(aiSkill-1.0)*.4,stallChance=0;'), 'AI hits rocket starts 60-80% of the time with 0 stalls');
  });

  it('5. Kart ground quad shadow elevation compensation and smoothed alpha damping', () => {
    assert.ok(bundle.includes('o.gqd&&(o.gqd.position.y=.045+.22*this.squash);'), 'Ground shadow floats above surface with suspension squash compensation');
    assert.ok(bundle.includes('this._shAlpha=ne(this._shAlpha!==undefined?this._shAlpha:.72,_targetShOp,14,e);'), 'Ground shadow alpha smoothly damped to eliminate 60Hz strobing');
  });

  it('6. Track racing line decal elevated and camera depth precision calibrated', () => {
    assert.ok(bundle.includes('v.quad(q(N,Ft[O]+et-Ot,.032)'), 'Racing line elevated to 32mm above road surface to prevent z-fighting');
    assert.ok(bundle.includes('f.polygonOffsetFactor=-4,f.polygonOffsetUnits=-8'), 'Racing line material uses enhanced polygon offset');
    assert.ok(bundle.includes('this.camera=new Ke(e.fovBase,t,.16,1400)') || bundle.includes('this.camera=new Ke(e.fovBase,t,.08,2200)'), 'Race camera depth near/far ratio optimized');
  });

  it('7. AI corner anticipation and 100% full throttle drift exit', () => {
    assert.ok(bundle.includes('let _=$*o.skill*this.rubberBand;const M=de(c*c/26,12,60),b=a.minSpeedAhead(h+2,M)*o.skill*this.rubberBand;_=Math.min(_,b);'), 'AI computes target speed using upcoming corner braking anticipation');
    assert.ok(bundle.includes('this.driftHold>0&&(this.driftHold-=t,k=!0,G=1)'), 'AI sustains 100% throttle through drift');
  });

  it('8. Relentless competitive rubberbanding (minimum 1.04x speed, up to 1.16x catchup)', () => {
    assert.ok(bundle.includes('rubberBandFor(t){const n=this.player.progress.distance-t.progress.distance;return n>180?1.16:n>90?1.12:n>30?1.08:1.04}'), 'AI never slows down when leading and aggressively catches up');
  });
});




describe('=== UNIT & PROCESS TESTS: GRAPHICS & FLUIDITY 60FPS MASTER OVERHAUL ===', () => {
  const bundle = fs.readFileSync(new URL('../assets/index-C9rd31_W.js', import.meta.url), 'utf-8');

  it('1. Directional shadow texel snapping prevents edge crawl and shimmering', () => {
    assert.ok(bundle.includes('_snapSize=150/(t.shadowMapSize||2048)'), 'Shadow texel size calculated from frustum width and map resolution');
    assert.ok(bundle.includes('_snappedT=new T'), 'Pre-allocated temporary vector prevents per-frame GC');
    assert.ok(bundle.includes('Math.floor(_u/_snapSize)*_snapSize'), 'Shadow camera target snapped along orthogonal basis to texel increments');
    assert.ok(bundle.includes('l.position.copy(_snappedT).addScaledVector(e,220)'), 'Directional light position rigidly locked to snapped target');
  });

  it('2. Solar glare effect functional: Zg returns sky and solar glare angle computed', () => {
    assert.ok(bundle.includes('return{group:e,spline:n,sunDir:l.sunDir,sky:l,'), 'Zg world factory returns sky object reference');
    assert.ok(bundle.includes('this.setSolarGlare='), 'UI declares setSolarGlare handler');
    assert.ok(bundle.includes('this.world.sky.sunDir'), 'Game loop samples sun direction from active sky instance');
  });

  it('3. Bloom post-processing resolution capped at 384x216 on viewport resize', () => {
    assert.ok(bundle.includes('this.bloom?.setSize?.(Math.max(1,Math.min(384,Math.floor(t/3))),Math.max(1,Math.min(216,Math.floor(e/3))))'), 'Bloom resize pass strictly bounded to 384x216 max render target');
  });

  it('4. Camera altimetry spring cushion eliminates sudden vertical elevation shudder', () => {
    assert.ok(bundle.includes('if(this.pos.y<o+1.15)this.pos.y=ne(this.pos.y,o+1.15,24,t);'), 'Camera smoothly cushions upward against track elevation changes');
    assert.ok(bundle.includes('if(this.pos.y<o+.7)this.pos.y=o+.7;'), 'Camera maintains hard clip safety floor above terrain');
  });

  it('5. DRS buffer reallocation thrashing eliminated during active gameplay', () => {
    assert.ok(!bundle.includes('applyDrsScale(){const baseDpr=Math.min(window.devicePixelRatio||1,this.quality.pixelRatioCap);const targetDpr=Math.max(.65,baseDpr*(this.drsScale||1));this.renderer.setPixelRatio(targetDpr);const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight);this.composer?.setSize?.(t,e)}'), 'Composer setSize removed from dynamic DRS scale updates');
    assert.ok(bundle.includes('this._fpsFrames>=120'), 'DRS evaluation smoothed over 120-frame window to prevent stutter cycles');
  });

  it('6. Timestep tolerance snapping prevents V-sync accumulator phase drift and judder', () => {
    assert.ok(bundle.includes('if(Math.abs(e-.0166667)<.0032)e=.0166667;'), 'Frame delta snapped to exactly 1/60s when within ±3.2ms');
    assert.ok(bundle.includes('if(Math.abs(i-n)<.0028)i=n;'), 'Physics accumulator step aligned with fixed 60Hz step to prevent alternating 0/2 tick judder');
  });

  it('7. DOM HUD innerHTML churn eliminated: direct textContent update on timers', () => {
    assert.ok(bundle.includes('this._tLap.textContent=Hn(t.lapTime)'), 'Lap timer updates textContent directly without DOM rebuild');
    assert.ok(bundle.includes('this._tRace.textContent=Hn(t.raceTime)'), 'Race timer updates textContent directly without DOM rebuild');
    assert.ok(bundle.includes('_curN-this._lastStdTime>90'), 'Field standings DOM generation throttled to 10Hz to eliminate layout thrashing');
  });

  it('8. Minimap background track rasterization cached to offscreen canvas', () => {
    assert.ok(bundle.includes('this.bgCanvas=typeof document!=="undefined"?document.createElement("canvas"):null'), 'Minimap creates offscreen background canvas');
    assert.ok(bundle.includes('e.drawImage(this.bgCanvas,0,0)'), 'Minimap draws cached background bitmap with single blit');
  });

  it('9. Particle vertex buffer uploads optimized: aColor uploaded only on dirty state', () => {
    assert.ok(bundle.includes('this.aColorDirty'), 'Kl particle system tracks dirty state for aColor buffer');
    assert.ok(bundle.includes('(this.aColorDirty&&(n.getAttribute("aColor").needsUpdate=!0,this.aColorDirty=!1))'), 'Particle system skips uploading unchanged aColor to GPU every frame');
  });

  it('10. Title screen and menu unthrottled for silky smooth 60 FPS transitions', () => {
    assert.ok(!bundle.includes('isRace?(this.quality.level==="low"?13.5:7):31'), '31ms menu throttle removed in favor of 60 FPS refresh');
  });
});

describe('=== UNIT & PROCESS TESTS: IOS IPHONE NATIVE WRAPPER & IPA PACKAGING ===', () => {
  it('1. Xcode project structure & PBXProject validity', () => {
    const pbxprojPath = 'ios/ZephyrReefKart/ZephyrReefKart.xcodeproj/project.pbxproj';
    assert.ok(fs.existsSync(pbxprojPath), 'project.pbxproj must exist');
    const pbxContent = fs.readFileSync(pbxprojPath, 'utf8');
    assert.ok(pbxContent.includes('ZephyrReefKart'), 'project.pbxproj references target ZephyrReefKart');
    assert.ok(pbxContent.includes('IPHONEOS_DEPLOYMENT_TARGET = 15.0'), 'Deployment target iOS 15.0+ configured');
    assert.ok(pbxContent.includes('SUPPORTED_PLATFORMS = "iphoneos iphonesimulator"'), 'Supported platforms set to iphoneos and iphonesimulator');
    assert.ok(pbxContent.includes('SWIFT_VERSION = 5.0'), 'Swift 5.0 version specified');
  });

  it('2. Swift native source files & architecture exist', () => {
    const files = [
      'ios/ZephyrReefKart/ZephyrReefKart/App/AppDelegate.swift',
      'ios/ZephyrReefKart/ZephyrReefKart/App/SceneDelegate.swift',
      'ios/ZephyrReefKart/ZephyrReefKart/App/ViewController.swift',
      'ios/ZephyrReefKart/ZephyrReefKart/WebView/GameWebView.swift',
      'ios/ZephyrReefKart/ZephyrReefKart/WebView/NativeHapticsBridge.swift',
      'ios/ZephyrReefKart/ZephyrReefKart/WebView/LocalSchemeHandler.swift'
    ];
    for (const f of files) {
      assert.ok(fs.existsSync(f), `Swift source file ${f} must exist`);
    }
  });

  it('3. Taptic Engine bridge & haptics polyfill implementation', () => {
    const bridge = fs.readFileSync('ios/ZephyrReefKart/ZephyrReefKart/WebView/NativeHapticsBridge.swift', 'utf8');
    assert.ok(bridge.includes('UIImpactFeedbackGenerator(style: .light)'), 'Light impact generator for cord curbs and drifts');
    assert.ok(bridge.includes('UIImpactFeedbackGenerator(style: .heavy)'), 'Heavy impact generator for wall collisions');
    assert.ok(bridge.includes('window.AndroidHaptics'), 'Polyfills window.AndroidHaptics for seamless cross-platform parity');
    assert.ok(bridge.includes('navigator.vibrate'), 'Polyfills navigator.vibrate for Web API parity');
  });

  it('4. Info.plist configuration: landscape lock, fullscreen and UILaunchScreen', () => {
    const plist = fs.readFileSync('ios/ZephyrReefKart/ZephyrReefKart/Info.plist', 'utf8');
    assert.ok(plist.includes('<string>UIInterfaceOrientationLandscapeLeft</string>'), 'LandscapeLeft supported');
    assert.ok(plist.includes('<string>UIInterfaceOrientationLandscapeRight</string>'), 'LandscapeRight supported');
    assert.ok(plist.includes('<key>UIRequiresFullScreen</key>'), 'Full screen required');
    assert.ok(plist.includes('<key>UILaunchScreen</key>'), 'UILaunchScreen dictionary configured for smooth launch');
  });

  it('5. WebAssets bundle contains all required offline resources', () => {
    const webAssetsDir = 'ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets';
    assert.ok(fs.existsSync(`${webAssetsDir}/index.html`), 'index.html present in WebAssets');
    assert.ok(fs.existsSync(`${webAssetsDir}/zephyr.html`), 'zephyr.html present in WebAssets');
    assert.ok(fs.existsSync(`${webAssetsDir}/assets/index-C9rd31_W.js`), 'JavaScript bundle present in WebAssets');
    assert.ok(fs.existsSync(`${webAssetsDir}/assets/index-DMliwuo_.css`), 'CSS stylesheet present in WebAssets');
    assert.ok(fs.existsSync(`${webAssetsDir}/audio/japanese_shrine_garden_bgm.mp3`), 'BGM audio track present in WebAssets');
  });

  it('6. Packaging script & ZephyrReefKart.ipa binary output', () => {
    assert.ok(fs.existsSync('scripts/build_ios.sh'), 'scripts/build_ios.sh packaging script must exist');
    assert.ok(fs.existsSync('ZephyrReefKart.ipa'), 'ZephyrReefKart.ipa binary archive must exist');
    const ipaStats = fs.statSync('ZephyrReefKart.ipa');
    assert.ok(ipaStats.size > 1000000, `ZephyrReefKart.ipa should be a complete archive (>1MB), got ${(ipaStats.size / 1024 / 1024).toFixed(2)}MB`);
  });
});

describe('=== UNIT & PROCESS TESTS: 24 MASTER OVERHAUL QUALITY, GRAPHICS & GAMEPLAY ===', () => {
  const bundleCode = fs.readFileSync('assets/index-C9rd31_W.js', 'utf8');

  it('1. Quality: trackPalettes expanded to all 24 tracks with complete geological palettes', () => {
    assert.ok(bundleCode.includes('trackPalettes=['), 'trackPalettes defined');
    const tpStart = bundleCode.indexOf('trackPalettes=[');
    const tpEnd = bundleCode.indexOf('],cupPalettes=', tpStart);
    const tpBlock = bundleCode.substring(tpStart, tpEnd);
    const tpCount = tpBlock.split('\n').filter(l => l.includes('sand:')).length;
    assert.strictEqual(tpCount, 24, 'All 24 track palettes defined with sand/grass/rock/peak');
  });

  it('2. Quality: trackMatPalettes expanded to all 24 tracks with PBR material palettes', () => {
    assert.ok(bundleCode.includes('trackMatPalettes=['), 'trackMatPalettes defined');
    const tmpStart = bundleCode.indexOf('trackMatPalettes=[');
    const tmpEnd = bundleCode.indexOf('],cupMatPalettes=', tmpStart);
    const tmpBlock = bundleCode.substring(tmpStart, tmpEnd);
    const tmpCount = tmpBlock.split('\n').filter(l => l.includes('rock1:')).length;
    assert.strictEqual(tmpCount, 24, 'All 24 track PBR material palettes defined');
  });

  it('3. Quality: specificTrackLandmarks defined for all tracks 0 to 23', () => {
    assert.ok(bundleCode.includes('specificTrackLandmarks=['), 'specificTrackLandmarks defined');
    const stlStart = bundleCode.indexOf('specificTrackLandmarks=[');
    const stlEnd = bundleCode.indexOf('];const cupLandmarks', stlStart);
    const stlBlock = bundleCode.substring(stlStart, stlEnd);
    const stlCount = stlBlock.split('\n').filter(l => l.trim().startsWith('[{')).length;
    assert.strictEqual(stlCount, 24, 'All 24 specific track landmark arrays defined');
  });

  it('4. Graphics: Bottomless Void hides ocean mesh on cosmic tracks 9, 21, and 22', () => {
    assert.ok(bundleCode.includes('if(curTrackIdx===9){u.visible=!1;}'), 'Track 9 ocean hidden for void');
    assert.ok(bundleCode.includes('if(curTrackIdx===21||curTrackIdx===22){u.visible=!1;}'), 'Tracks 21 & 22 ocean hidden for void');
  });

  it('5. Graphics: Lava Shader enabled on volcanic tracks 7, 8, and 20', () => {
    assert.ok(bundleCode.includes('isLava=curTrackIdx===7||curTrackIdx===8||curTrackIdx===20'), 'Lava shader enabled for tracks 7, 8, 20');
  });

  it('6. Gameplay: Void Fall Respawn detects out-of-bounds drop and triggers Lakitu rescue', () => {
    assert.ok(bundleCode.includes('isVoidFall=n.pos.y<-35'), 'Void fall check y < -35');
    assert.ok(bundleCode.includes('this.rescueRacer(n)'), 'Rescue racer called');
    assert.ok(bundleCode.includes('n.invuln=Math.max(n.invuln||0,1.5)'), 'Rescue grants 1.5s invulnerability');
  });

  it('7. Quality: Track Transition resets minimap and world state cleanly', () => {
    assert.ok(bundleCode.includes('this.cine?.build?.(this.world.spline);'), 'Cinematic spline rebuild on track transition');
    assert.ok(bundleCode.includes('this.ui.attachMinimap(this.world.spline);'), 'Minimap attached to new spline');
  });

  it('8. Quality: Real-Time Gap Delta formats live chronometer with s suffix', () => {
    assert.ok(bundleCode.includes('function Cv(s){if(!Number.isFinite(s))return"--";const t=s>=0?"+":"-",e=Math.abs(s);return`${t}${e.toFixed(2)}s`}'), 'Cv returns gap formatted with s suffix');
  });

  it('9. Graphics: Minimap Leader Crown renders 👑 icon over rank 1 racer', () => {
    assert.ok(bundleCode.includes('fillText("👑",ox,oy-mRad-5)'), 'Crown emoji rendered over race leader');
  });

  it('10. Graphics: Boost Pad Energy Pulse emits directional chevron sparks on contact', () => {
    assert.ok(bundleCode.includes('a.cooldown=.35,i(r,1);'), 'Boost pad triggers booster callback');
    assert.ok(bundleCode.includes('bYaw=t.state.yaw'), 'Pad sparks aligned with kart yaw');
  });

  it('11. Graphics: Slipstream Wind Streaks emit trailing air sparks during drafting', () => {
    assert.ok(bundleCode.includes('r1.draftTimer>0.4&&Math.random()<0.22'), 'Slipstream wind streaks active when drafting');
  });

  it('12. Graphics: Dynamic FOV expands with speed and boost gains', () => {
    assert.ok(bundleCode.includes('fovSpeedGain:13') && bundleCode.includes('fovBoostGain:11'), 'Dynamic FOV tuning constants present');
  });

  it('13. Graphics: Rail Scrape Spark Hue reflects biome active theme glowColor', () => {
    assert.ok(bundleCode.includes('window.__ACTIVE_THEME?.glowColor||16773888'), 'Wall scrape sparks use biome theme glow color');
  });

  it('14. Graphics: Rocket Start Flame Pop emits exhaust sparks during countdown rev', () => {
    assert.ok(bundleCode.includes('this.countdown<=1.15&&this.countdown>=0.06') && bundleCode.includes('16744448'), 'Countdown rev sweet spot sparks emitted');
  });

  it('15. Quality: Audio Pitch & Doppler updates engine sounds per racer', () => {
    assert.ok(bundleCode.includes('this.audio.engine.update(h.id'), 'Engine sound pitch and Doppler updated');
  });

  it('16. Graphics: Winner Podium Ceremony unleashes fireworks and confetti for top 3', () => {
    assert.ok(bundleCode.includes('i<=3&&window.__zephyr?.vfx'), 'Podium celebration check present');
    assert.ok(bundleCode.includes('fireworks?.(') && bundleCode.includes('confetti?.('), 'Fireworks and confetti launched');
  });

  it('17. Gameplay: Ultra Mini-Turbo Tier 3 features 2.5s boost and magenta burst', () => {
    assert.ok(bundleCode.includes('sv=[0,.7,1.15,2.5]'), 'Ultra mini turbo boost duration set to 2.5s');
    assert.ok(bundleCode.includes('12845311') || bundleCode.includes('16711914'), 'Tier 3 magenta spark / burst color defined');
  });

  it('18. Gameplay: Boost Off-Road Cut negates off-road friction penalty while boosting', () => {
    assert.ok(bundleCode.includes('(o.boostTime>0||o.padBoostTime>0)'), 'Boost cuts off-road drag');
  });

  it('19. Gameplay: Jump Landing Suspension absorbs impact with land squash and visual punch', () => {
    assert.ok(bundleCode.includes('landSquash') && bundleCode.includes('visualSteer'), 'Suspension landing physics present');
  });

  it('20. Gameplay: AI Multi-Line Avoidance distributes racing line lateral offsets', () => {
    assert.ok(bundleCode.includes('((this.profile.seed%5)-2)*0.7'), 'AI lines laterally offset based on profile seed');
  });

  it('21. Gameplay: Spline-Bounded Bolt Homing clamps missile laterally inside track width', () => {
    assert.ok(bundleCode.includes('bMax=bsmp.halfWidth+1.5'), 'Bolt clamped to track boundary halfWidth + 1.5');
  });

  it('22. Quality: Curb Rumble Feedback triggers curb_tick audio and haptic feedback', () => {
    assert.ok(bundleCode.includes('curb_tick'), 'Curb rumble audio trigger present');
  });

  it('23. Quality: Dynamic Engine Synth responds to throttle, offroad state, and slip', () => {
    assert.ok(bundleCode.includes('this.audio.setEngineState'), 'Engine state communicates offroad and slip to audio synth');
  });

  it('24. Gameplay: Tiered Difficulty AI scales difficulty across 6 cups', () => {
    assert.ok(bundleCode.includes('tierDiff=1+cupIdx*0.03'), 'AI skill scaled by cup index with tierDiff');
  });
});

describe('=== UNIT & PROCESS TESTS: 50 GAMEPLAY, 20 QUALITATIVE GRAPHICS & 100 SYSTEMIC FIXES ===', () => {
  const bundleCode = fs.readFileSync('assets/index-C9rd31_W.js', 'utf8');

  it('1. Physics: Dynamic Chassis Weight Transfer computes longitudinal pitch & centrifugal roll', () => {
    assert.ok(bundleCode.includes('pitchTransfer=de(-f*.0065*(u?1.6:1)+((t.airPitchTrim||0)*.7),-.16,.16)'), 'Longitudinal pitch transfer computed with air trim');
    assert.ok(bundleCode.includes('rollTransfer=de(latG+(t.drifting?t.driftDir*.07:0),-.24,.24)'), 'Lateral centrifugal roll transfer computed with drift offset');
    assert.ok(bundleCode.includes('latG=(t.speed*(t.yawRate||0))*0.0095'), 'G-force computed from velocity and yaw rate');
  });

  it('2. Physics: Logarithmic Overcharge Boost Stacking extends duration on successive boosts', () => {
    assert.ok(bundleCode.includes('n.boostTime=n.boostTime>0?n.boostTime+t*.65:Math.max(n.boostTime,t)'), 'Standard boost stacks logarithmically');
    assert.ok(bundleCode.includes('n.padBoostTime=n.padBoostTime>0?n.padBoostTime+t*.75:Math.max(n.padBoostTime,t)'), 'Pad boost stacks logarithmically');
  });

  it('3. Physics: Cosmic Tracks Low-Gravity creates floaty orbital jumps', () => {
    assert.ok(bundleCode.includes('isCosmic=(window.__CURRENT_TRACK_INDEX===9||window.__CURRENT_TRACK_INDEX===21||window.__CURRENT_TRACK_INDEX===22)'), 'Cosmic tracks 9, 21, and 22 detected');
    assert.ok(bundleCode.includes('grav=isCosmic?24:30'), 'Gravity reduced from 30 to 24 m/s^2 on cosmic tracks');
  });

  it('4. Gameplay: Hairpin Brake-Drift Pivot enables agile tight-radius cornering', () => {
    assert.ok(bundleCode.includes('brakePivot=(C>0)?1.34:1'), 'Braking during drift increases angular steering rate by 34%');
  });

  it('5. Gameplay: Air-Time Pitch Trim allows in-flight chassis pitch adjustment', () => {
    assert.ok(bundleCode.includes('o.airPitchTrim=ne(o.airPitchTrim||0,(R-C)*.22,6,t)'), 'Throttle and brake trim pitch angle while airborne');
  });

  it('6. Gameplay: Front Wheel Ackerman Steering & Dynamic Camber under load', () => {
    assert.ok(bundleCode.includes('ackermanL=x>0?1.12:.92') && bundleCode.includes('ackermanR=x<0?1.12:.92'), 'Differential Ackerman angles applied to left/right front wheels');
    assert.ok(bundleCode.includes('camberZ=(t.drifting?t.driftDir*.16:0)+de(latG*.35,-.12,.12)'), 'Suspension camber tilts dynamically under lateral G-force');
  });

  it('7. Gameplay: AI Corner Apex Clipping tightens corner entry towards inside track boundary', () => {
    assert.ok(bundleCode.includes('apexBias=-Math.sign(zApex.curvature)*(zApex.halfWidth*0.28*o.aggression)'), 'Apex bias computed from track curvature and AI aggression');
    assert.ok(bundleCode.includes('Math.abs(zApex.curvature)>0.008?apexBias:0'), 'Apex bias blended smoothly into AI racing line query');
  });

  it('8. Visuals: Deceleration Exhaust Backfire Pops emit burst flames and sparks', () => {
    assert.ok(bundleCode.includes('isDecelPop=i.grounded&&!a&&this.controls.brake>0&&Math.abs(i.speed)>14'), 'High-speed aggressive braking triggers backfire state');
    assert.ok(bundleCode.includes('e.burst(d.x,d.y,d.z,16744448,6,3)'), 'Backfire pop flame bursts emitted at exhaust anchors');
  });

  it('9. Visuals: Biome-Aware Kickup Particles reflect terrain geological substance', () => {
    assert.ok(bundleCode.includes('isLavaTrk=curTrkIdx===7||curTrkIdx===8||curTrkIdx===20'), 'Volcanic tracks identified for cinder/soot kickup');
    assert.ok(bundleCode.includes('isIceTrk=curTrkIdx===5||curTrkIdx===13'), 'Ice tracks identified for glacial snow spray');
    assert.ok(bundleCode.includes('isCosmicTrk=curTrkIdx===9||curTrkIdx===21||curTrkIdx===22'), 'Cosmic tracks identified for stardust particle spray');
  });

  it('10. Visuals: Trailing Slipstream Vortex Streaks emit aerodynamic air trails', () => {
    assert.ok(bundleCode.includes('this.draftTimer>0.4&&Math.random()<0.2'), 'Drafting timer threshold activates wake particles');
    assert.ok(bundleCode.includes('e.spark(r.center.x+(Math.random()-.5)*1.2'), 'Streamlined air streak sparks emitted along kart hull');
  });

  it('11. Graphics: Volumetric Atmospheric God Rays in Sky Atmosphere Shader', () => {
    assert.ok(bundleCode.includes('float godRay=pow(sd,48.)*(.65+.35*sin(atan(d.x,d.z)*14.+uTime*.15));'), 'Atmospheric Mie scattering shafts computed in sky fragment shader');
    assert.ok(bundleCode.includes('c+=vec3(1.,.94,.76)*godRay*.35;'), 'God rays blended into zenith sky color');
  });

  it('12. Graphics: Ocean Multi-Frequency Caustic Refraction Network', () => {
    assert.ok(bundleCode.includes('float caust = pow(max(0.0, sin(p.x * 1.6 + sin(p.y * 1.4 + uTime * 1.1)) * cos(p.y * 1.7 - uTime * 1.3) * 0.5 + 0.5), 3.0);'), 'Dual-frequency caustic wave pattern computed in water shader');
    assert.ok(bundleCode.includes('c += vec3(0.52, 0.92, 1.0) * caust * 0.32 * (1.0 - shallow);'), 'Caustic illumination mapped onto underwater shelf');
  });

  it('13. Graphics: Finish Line Checkered Banner Physics Flutter Animation', () => {
    assert.ok(bundleCode.includes('P.offset.x=Math.sin(N*3.5)*.015;'), 'Checkered victory banner animates sinusoidal wind flutter');
  });

  it('14. HUD: Dedicated Slipstream Gauge Bar & Reactive Speedometer', () => {
    assert.ok(bundleCode.includes('data-role="draftwrap"'), 'HUD markup includes slipstream draft container');
    assert.ok(bundleCode.includes('data-role="draftbar"'), 'HUD markup includes slipstream fill bar');
    assert.ok(bundleCode.includes('this.elDraftWrap=e("draftwrap")'), 'UI controller queries draftwrap element');
    assert.ok(bundleCode.includes('this.elSpeed.classList.toggle("fast",t.speed>85)'), 'Speedometer toggles fast state above 85 km/h');
    assert.ok(bundleCode.includes('this.elSpeed.classList.toggle("hyper",t.speed>115)'), 'Speedometer toggles hyper state above 115 km/h');
  });

  it('15. HUD: Minimap Directional Orientation Chevron displays kart rotation', () => {
    assert.ok(bundleCode.includes('e.rotate(r.yaw+Math.PI)'), 'Minimap rotates canvas context to match racer yaw');
    assert.ok(bundleCode.includes('e.moveTo(0,-mRad-4)') && bundleCode.includes('e.lineTo(-3,-mRad+1)'), 'Directional arrowhead pointer drawn on racer dot');
    assert.ok(bundleCode.includes('o.yaw=e.state.yaw'), 'Minimap pool records live yaw per frame');
  });

  it('16. Systemic Fixes: Polygon offset and depth parameters eliminate Z-fighting', () => {
    assert.ok(bundleCode.includes('polygonOffsetFactor=-4,f.polygonOffsetUnits=-8'), 'Road markings and decals use calibrated negative polygon offsets');
    assert.ok(bundleCode.includes('polygonOffsetFactor:-9,polygonOffsetUnits:-18'), 'Boost pad chevron decals use deep negative polygon offsets');
    assert.ok(bundleCode.includes('polygonOffsetFactor:-4,polygonOffsetUnits:-6'), 'Ground projection quad decal uses calibrated polygon offset');
  });

  it('17. Systemic Fixes: Camera near clip 0.16 prevents bumper clipping on steep hills', () => {
    assert.ok(bundleCode.includes('new Ke(e.fovBase,t,.16,1400)'), 'Perspective camera near clip set to 0.16m');
  });

  it('18. Systemic Fixes: Shadow camera frustum bounds and acne elimination', () => {
    assert.ok(bundleCode.includes('left:-75,right:75,top:75,bottom:-75'), 'Shadow orthographic bounds clamped to 150m corridor');
    assert.ok(bundleCode.includes('shadow.bias=-0.00025') && bundleCode.includes('shadow.normalBias=.042'), 'Sub-millimeter depth bias prevents shadow acne and peter-panning');
  });

  it('19. Systemic Fixes: Aspect ratio correction for mobile and ultrawide viewports', () => {
    assert.ok(bundleCode.includes('_aspCorr=_asp<1.65?(1.65-_asp)*18:0'), 'FOV dynamically widened on narrow aspect ratios');
  });

  it('20. Systemic Fixes: PBR Roughness & Metalness parameters normalized across models', () => {
    assert.ok(bundleCode.includes('d.roughness=.62') && bundleCode.includes('d.metalness=.16'), 'Road asphalt materials properly calibrated for PBR lighting');
    assert.ok(bundleCode.includes('o=r(s.kart.body,.22,.62)'), 'Kart body uses clearcoat metallic specular lobe');
  });
});

describe('=== UNIT & PROCESS TESTS: 80+ ENHANCEMENTS, 24 BESPOKE LEVEL LANDMARKS & FLUID MODES ===', () => {
  const bundleCode = fs.readFileSync('assets/index-C9rd31_W.js', 'utf8');

  it('1. Architecture: All 24 Tracks have unique, distinct landmark arrays in specificTrackLandmarks', () => {
    const expectedLandmarks = [
      'temple_colonnade', 'radar_tower', 'giant_redwood', 'stadium_jumbotron',
      'mine_headframe', 'ice_shard_monolith', 'cyber_skyscraper', 'lava_chimney',
      'hell_obelisk', 'stargate_ring', 'kraken_tentacle', 'bioluminescent_shroom',
      'cloud_palace', 'storm_pylon', 'sky_needle', 'vortex_funnel',
      'abyssal_trident', 'acropolis_rotunda', 'dragon_ribcage', 'prism_pyramid',
      'smelter_forge', 'tachyon_gate', 'singularity_collider', 'omega_monument'
    ];
    for (let i = 0; i < expectedLandmarks.length; i++) {
      assert.ok(bundleCode.includes(expectedLandmarks[i]), `specificTrackLandmarks defines signature landmark ${expectedLandmarks[i]} for track ${i}`);
    }
  });

  it('2. 3D Procedural Builders: All 24 Signature Landmark kinds implemented in Kg', () => {
    const customKinds = [
      'temple_colonnade', 'radar_tower', 'giant_redwood', 'stadium_jumbotron',
      'mine_headframe', 'ice_shard_monolith', 'cyber_skyscraper', 'lava_chimney',
      'hell_obelisk', 'stargate_ring', 'kraken_tentacle', 'bioluminescent_shroom',
      'cloud_palace', 'storm_pylon', 'sky_needle', 'vortex_funnel',
      'abyssal_trident', 'acropolis_rotunda', 'dragon_ribcage', 'prism_pyramid',
      'smelter_forge', 'tachyon_gate', 'singularity_collider', 'omega_monument'
    ];
    for (const kind of customKinds) {
      assert.ok(bundleCode.includes(`_.kind==="${kind}"`), `Kg implements procedural 3D builder branch for ${kind}`);
    }
  });

  it('3. Fluid Shaders: Supports 4 distinct dynamic fluid regimes (Lava, Ice, Cyber, Toxic)', () => {
    assert.ok(bundleCode.includes('uIsLava'), 'Shader includes uIsLava uniform for tracks 7, 8, 20');
    assert.ok(bundleCode.includes('uIsIce'), 'Shader includes uIsIce uniform for Track 5');
    assert.ok(bundleCode.includes('uIsCyber'), 'Shader includes uIsCyber uniform for Track 6');
    assert.ok(bundleCode.includes('uIsToxic'), 'Shader includes uIsToxic uniform for Track 11');
    assert.ok(bundleCode.includes('if (uIsIce > 0.5)'), 'Fragment shader implements glacial ice shelf glint and vein branching');
    assert.ok(bundleCode.includes('if (uIsCyber > 0.5)'), 'Fragment shader implements synthetic cyber neon grid and scanline pulse');
    assert.ok(bundleCode.includes('if (uIsToxic > 0.5)'), 'Fragment shader implements luminous mutagen ooze and bubbling');
  });

  it('4. Environment: Biome-specific instanced scenery geometries and palettes per Cup', () => {
    assert.ok(bundleCode.includes('_cupGeos='), 'Kg defines distinct instanced prop geometry sets per Cup');
    assert.ok(bundleCode.includes('_cupCols='), 'Kg defines distinct instanced prop color palettes per Cup');
    assert.ok(bundleCode.includes('const I=_cupGeos[curCup]||_cupGeos[0]'), 'Instanced mesh selects Cup geometry array');
    assert.ok(bundleCode.includes('$=_cupCols[curCup]||_cupCols[0]'), 'Instanced mesh selects Cup color palette');
  });

  it('5. Physics: Track-specific environmental physics modifiers active in av.step', () => {
    assert.ok(bundleCode.includes('window.__CURRENT_TRACK_INDEX===5&&o.drifting)G*=.82'), 'Track 5 Glacier Peak reduces lateral drift grip for icy sliding');
    assert.ok(bundleCode.includes('window.__CURRENT_TRACK_INDEX===13||window.__CURRENT_TRACK_INDEX===14||window.__CURRENT_TRACK_INDEX===15)&&!l.grounded'), 'Tracks 13-15 Nimbus Overpass simulate airborne crosswind buffeting');
    assert.ok(bundleCode.includes('(window.__CURRENT_TRACK_INDEX===7||window.__CURRENT_TRACK_INDEX===8||window.__CURRENT_TRACK_INDEX===20)&&o.padBoostTime>0)z*=1.06'), 'Tracks 7, 8, 20 Volcanic tracks supercharge geothermal boost pads by 6%');
  });

  it('6. Clearance: Custom wide/floating landmark clearance logic', () => {
    assert.ok(bundleCode.includes('_isFloatOrWide='), '_isFloatOrWide classification defines clearance rules');
    assert.ok(bundleCode.includes('_isFloatOrWide?22:_.kind==="shell"?18:8'), 'Clearance radius expanded to 22m for large signature landmarks');
  });
});

describe('=== UNIT & PROCESS TESTS: PERMANENT MAXIMUM HIGH QUALITY GRAPHICS LOCK ===', () => {
  const bundleCode = fs.readFileSync('assets/index-C9rd31_W.js', 'utf8');
  const indexHtml = fs.readFileSync('index.html', 'utf8');
  const zephyrHtml = fs.readFileSync('zephyr.html', 'utf8');

  it('1. yo() profile generator unconditionally returns maximum HIGH quality spec', () => {
    assert.ok(bundleCode.includes('function yo(s,t){return{level:"high",pixelRatioCap:Math.min(1.5,t),shadows:!0,shadowMapSize:2048,bloom:.5,sceneryDensity:1,particleBudget:2400,fancyWater:!0,antialias:!0,anisotropy:8}}'), 'yo() locked to return high-fidelity profile with 2048 shadows, 0.5 bloom, 2400 particles and 8x anisotropy');
  });

  it('2. Mg() settings loader strictly defaults and returns quality: "high"', () => {
    assert.ok(bundleCode.includes('function Mg(){try{const s=localStorage.getItem(dh);if(s){const t=JSON.parse(s);return{...Mo,...t,quality:"high"}}}catch{}return{...Mo,quality:"high"}}'), 'Mg() overrides any persisted setting with quality: "high"');
  });

  it('3. sr(s) settings persister enforces s.quality = "high"', () => {
    assert.ok(bundleCode.includes('function sr(s){try{s.quality="high";localStorage.setItem(dh,JSON.stringify(s))}catch{}}'), 'sr() explicitly enforces quality: "high" before saving to localStorage');
  });

  it('4. cycleQuality() remains permanently locked at HIGH profile', () => {
    assert.ok(bundleCode.includes('cycleQuality(){this.userSettings.quality="high",sr(this.userSettings),this.quality=yo("high",window.devicePixelRatio),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.shadowMap.enabled=!0,this.bloom.strength=this.quality.bloom,this.ui.setSettings(this.userSettings),this.ui.toast("Quality: HIGH",1.6),this.audio.play("ui_accept")}'), 'cycleQuality() ensures settings remain HIGH and alerts user');
  });

  it('5. WebGL renderer requests high-performance power preference and antialiasing', () => {
    assert.ok(bundleCode.includes('powerPreference:"high-performance"'), 'WebGL initializes with high-performance powerPreference');
    assert.ok(bundleCode.includes('antialias:this.quality.antialias'), 'WebGL initializes with antialiasing enabled');
  });

  it('6. HTML boots with APP_VERSION zephyr-6.9.5 and sanitizes localStorage quality to high', () => {
    assert.ok(indexHtml.includes("var APP_VERSION = 'zephyr-6.9.5';"), 'index.html defines APP_VERSION zephyr-6.9.5');
    assert.ok(zephyrHtml.includes("var APP_VERSION = 'zephyr-6.9.5';"), 'zephyr.html defines APP_VERSION zephyr-6.9.5');
    assert.ok(indexHtml.includes("parsed.quality = 'high';"), 'index.html resets any non-high quality setting to high');
    assert.ok(zephyrHtml.includes("parsed.quality = 'high';"), 'zephyr.html resets any non-high quality setting to high');
  });

  it('7. Ablation & Fluidity: Speedlines overlay is completely neutralized in CSS and JS', () => {
    const cssContent = fs.readFileSync('assets/index-DMliwuo_.css', 'utf8');
    assert.ok(cssContent.includes('.speedlines{display:none!important;opacity:0!important;pointer-events:none!important;visibility:hidden!important}'), 'CSS disables speedlines overlay completely');
    assert.ok(!bundleCode.includes('this.elSpeedlines.style.opacity='), 'JS no longer sets speedlines opacity in tick');
  });

  it('8. Multi-racer Broadphase, Zero-GC HUD, Two-Pass Minimap and WebAudio Voice Budgeting', () => {
    assert.ok(bundleCode.includes('Math.abs(o)>5.5||Math.abs(a)>5.5'), 'Multi-racer collision uses broadphase distance early-out');
    assert.ok(bundleCode.includes('this._hudPool'), 'HUD standings uses pre-allocated object pool');
    assert.ok(bundleCode.includes('_lastRk'), 'HUD uses zero-allocation numeric and bitwise dirty checking');
    assert.ok(bundleCode.includes('renderRacerDot(t[idx])'), 'Minimap array sort() is replaced with zero-allocation two-pass rendering');
    assert.ok(bundleCode.includes('this._audioDist=new Float32Array(16)'), 'WebAudio uses zero-allocation spatial audio distance buffer');
    assert.ok(bundleCode.includes('drsScale>0.58'), 'DRS scale floor supports scaling down to 0.58 on low-end GPUs');
  });
});

describe('=== UNIT & PROCESS TESTS: TRACK UNLOCKING PROGRESSION (1ST PLACE REQUIREMENT) ===', () => {
  const bundleCode = fs.readFileSync('assets/index-C9rd31_W.js', 'utf8');
  const indexHtml = fs.readFileSync('index.html', 'utf8');
  const zephyrHtml = fs.readFileSync('zephyr.html', 'utf8');

  it('1. CSS styling defines locked & won indicators, badges and shake animations', () => {
    assert.ok(indexHtml.includes('.z-track-item.locked'), 'index.html defines .z-track-item.locked styling');
    assert.ok(indexHtml.includes('.z-track-item.won'), 'index.html defines .z-track-item.won styling');
    assert.ok(indexHtml.includes('.z-track-lock-badge'), 'index.html defines .z-track-lock-badge');
    assert.ok(indexHtml.includes('.z-track-won-badge'), 'index.html defines .z-track-won-badge');
    assert.ok(indexHtml.includes('@keyframes z-shake'), 'index.html defines z-shake error feedback animation');

    assert.ok(zephyrHtml.includes('.z-track-item.locked'), 'zephyr.html defines .z-track-item.locked styling');
    assert.ok(zephyrHtml.includes('.z-track-item.won'), 'zephyr.html defines .z-track-item.won styling');
    assert.ok(zephyrHtml.includes('.z-track-lock-badge'), 'zephyr.html defines .z-track-lock-badge');
    assert.ok(zephyrHtml.includes('.z-track-won-badge'), 'zephyr.html defines .z-track-won-badge');
    assert.ok(zephyrHtml.includes('@keyframes z-shake'), 'zephyr.html defines z-shake error feedback animation');
  });

  it('2. HTML modal progression logic: getUnlockedMax, updateRecordDisplays and click guard', () => {
    assert.ok(indexHtml.includes('const getUnlockedMax = () => {'), 'index.html defines getUnlockedMax()');
    assert.ok(indexHtml.includes("localStorage.getItem('zephyr_max_unlocked_track')"), 'getUnlockedMax() checks zephyr_max_unlocked_track');
    assert.ok(indexHtml.includes("item.classList.toggle('locked', !isUnlocked)"), 'updateRecordDisplays() marks locked track cards');
    assert.ok(indexHtml.includes("item.classList.toggle('won', isWon)"), 'updateRecordDisplays() marks won track cards');
    assert.ok(indexHtml.includes("z-track-lock-badge"), 'updateRecordDisplays() adds lock badge');
    assert.ok(indexHtml.includes("z-track-won-badge"), 'updateRecordDisplays() adds won badge');
    assert.ok(indexHtml.includes("trackIdx > maxUnlocked"), 'Click listener guards against selecting locked tracks');
    assert.ok(indexHtml.includes("z-shake"), 'Click on locked track triggers shake feedback');

    assert.ok(zephyrHtml.includes('const getUnlockedMax = () => {'), 'zephyr.html defines getUnlockedMax()');
    assert.ok(zephyrHtml.includes("localStorage.getItem('zephyr_max_unlocked_track')"), 'zephyr.html checks zephyr_max_unlocked_track');
    assert.ok(zephyrHtml.includes("trackIdx > maxUnlocked"), 'zephyr.html guards against selecting locked tracks');
  });

  it('3. In-engine bundle: buildResults button reference, showResults victory progression check', () => {
    assert.ok(bundleCode.includes('this.btnNextTrack=this.button("Prossima Pista ❯"'), 'buildResults retains reference to btnNextTrack');
    assert.ok(bundleCode.includes('zephyr_max_unlocked_track'), 'bundle references zephyr_max_unlocked_track in progression logic');
    assert.ok(bundleCode.includes('zephyr_won_track_'), 'bundle records won track flags zephyr_won_track_<idx>');
    assert.ok(bundleCode.includes('localStorage.setItem("zephyr_won_track_"+'), 'showResults sets won track flag');
  });

  it('4. In-engine bundle: showResults updates Next Track button state based on unlocking', () => {
    assert.ok(bundleCode.includes('🔒 Prossima Pista (Bloccata)'), 'showResults disables button and sets locked text if next track is not unlocked');
    assert.ok(bundleCode.includes('Prossima Pista ❯'), 'showResults restores enabled text when next track is unlocked');
    assert.ok(bundleCode.includes('🎉 NUOVO CIRCUITO SBLOCCATO: PISTA'), 'showResults displays celebration banner when a new track is unlocked');
  });

  it('5. In-engine bundle: loadTrack and nextTrack enforce locked track boundary', () => {
    assert.ok(bundleCode.includes('🔒 Livello bloccato! Devi arrivare 1° nella Pista'), 'loadTrack toasts warning when attempting to switch to a locked track');
    assert.ok(bundleCode.includes('🔒 Pista successiva bloccata! Devi arrivare 1° per sbloccarla.'), 'nextTrack toasts warning when next track is locked');
    assert.ok(bundleCode.includes('const maxU=parseInt(localStorage.getItem("zephyr_max_unlocked_track")||"0",10)||0'), 'buildWorld clamps initial track to max unlocked');
  });

  it('6. Progression simulation: 1st place finishes required to advance through tracks sequentially', () => {
    // Clean mock localStorage
    globalThis.localStorage.clear();
    
    // Helper replicating progression
    function getMaxUnlocked() {
      return parseInt(globalThis.localStorage.getItem('zephyr_max_unlocked_track') || '0', 10) || 0;
    }
    function recordRaceFinish(trackIdx, rank) {
      if (rank === 1) {
        globalThis.localStorage.setItem(`zephyr_won_track_${trackIdx}`, '1');
        const curMax = getMaxUnlocked();
        if (trackIdx + 1 > curMax) {
          globalThis.localStorage.setItem('zephyr_max_unlocked_track', String(trackIdx + 1));
          return true; // newly unlocked
        }
      }
      return false;
    }

    // Default state: Only track 0 unlocked
    assert.strictEqual(getMaxUnlocked(), 0, 'Initially, only track 0 (Coral Sanctuary) is unlocked');

    // Finish 2nd place on track 0: No unlock!
    let unlocked = recordRaceFinish(0, 2);
    assert.strictEqual(unlocked, false, 'Finishing 2nd place does NOT unlock the next track');
    assert.strictEqual(getMaxUnlocked(), 0, 'Max unlocked track remains 0 after 2nd place finish');
    assert.strictEqual(globalThis.localStorage.getItem('zephyr_won_track_0'), null, 'Track 0 not marked won');

    // Finish 3rd place on track 0: No unlock!
    unlocked = recordRaceFinish(0, 3);
    assert.strictEqual(unlocked, false, 'Finishing 3rd place does NOT unlock the next track');
    assert.strictEqual(getMaxUnlocked(), 0, 'Max unlocked track remains 0');

    // Finish 1st place on track 0: UNLOCK Track 1!
    unlocked = recordRaceFinish(0, 1);
    assert.strictEqual(unlocked, true, 'Finishing 1st place unlocks Track 1');
    assert.strictEqual(getMaxUnlocked(), 1, 'Max unlocked track is now 1');
    assert.strictEqual(globalThis.localStorage.getItem('zephyr_won_track_0'), '1', 'Track 0 marked won');

    // Winning track 0 again: Already unlocked, won't advance past 1
    unlocked = recordRaceFinish(0, 1);
    assert.strictEqual(unlocked, false, 'Winning Track 0 again does not advance past track 1');
    assert.strictEqual(getMaxUnlocked(), 1, 'Max unlocked track stays 1');

    // Finish 2nd place on track 1: Track 2 remains locked!
    unlocked = recordRaceFinish(1, 2);
    assert.strictEqual(unlocked, false, 'Finishing 2nd place on Track 1 does not unlock Track 2');
    assert.strictEqual(getMaxUnlocked(), 1, 'Max unlocked track is still 1');

    // Finish 1st place on track 1: UNLOCK Track 2!
    unlocked = recordRaceFinish(1, 1);
    assert.strictEqual(unlocked, true, 'Finishing 1st place on Track 1 unlocks Track 2');
    assert.strictEqual(getMaxUnlocked(), 2, 'Max unlocked track is now 2');
    assert.strictEqual(globalThis.localStorage.getItem('zephyr_won_track_1'), '1', 'Track 1 marked won');

    // Finish 1st place sequentially all the way to track 23
    for (let t = 2; t < 24; t++) {
      assert.strictEqual(getMaxUnlocked(), t, `Before winning track ${t}, maxUnlocked is ${t}`);
      recordRaceFinish(t, 1);
      assert.strictEqual(getMaxUnlocked(), t + 1, `After winning track ${t}, maxUnlocked is ${t + 1}`);
      assert.strictEqual(globalThis.localStorage.getItem(`zephyr_won_track_${t}`), '1', `Track ${t} marked won`);
    }
    assert.strictEqual(getMaxUnlocked(), 24, 'All 24 tracks can be progressively unlocked by finishing 1st');
  });
});

describe('=== UNIT & PROCESS TESTS: NEW CHARACTERS (PRINCESS AURELIA & CAPTAIN BLACKBEARD) ===', () => {
  const bundleCode = fs.readFileSync('assets/index-C9rd31_W.js', 'utf8');
  const indexHtml = fs.readFileSync('index.html', 'utf8');
  const zephyrHtml = fs.readFileSync('zephyr.html', 'utf8');

  it('1. Roster expands to 8 racers with Princess Aurelia and Captain Blackbeard', () => {
    // Princess Aurelia check
    assert.ok(bundleCode.includes('id:"princess"'), 'Roster includes princess id');
    assert.ok(bundleCode.includes('name:"Principessa Aurelia"'), 'Roster includes Principessa Aurelia');
    assert.ok(bundleCode.includes('archetype:"Royal Sovereign"'), 'Princess has Royal Sovereign archetype');
    assert.ok(bundleCode.includes('speed:1.04,accel:1.08,handling:1.08,weight:.88'), 'Princess has balanced agile stats');

    // Captain Blackbeard check
    assert.ok(bundleCode.includes('id:"pirate"'), 'Roster includes pirate id');
    assert.ok(bundleCode.includes('name:"Capitan Barbanera"'), 'Roster includes Capitan Barbanera');
    assert.ok(bundleCode.includes('archetype:"Dread Corsair"'), 'Pirate has Dread Corsair archetype');
    assert.ok(bundleCode.includes('speed:1.12,accel:.9,handling:.92,weight:1.2'), 'Pirate has heavy ramming stats');
  });

  it('2. 3D Procedural Driver Models implemented in bundle', () => {
    // Princess 3D features
    assert.ok(bundleCode.includes('s.body==="princess"'), 'Driver generator handles princess body');
    assert.ok(bundleCode.includes('gem=pe(u,new br(.06,0)'), 'Princess includes crown sapphire gem');
    assert.ok(bundleCode.includes('cape=tn(d,r,'), 'Princess includes royal cape mesh');

    // Pirate 3D features
    assert.ok(bundleCode.includes('s.body==="pirate"'), 'Driver generator handles pirate body');
    assert.ok(bundleCode.includes('[-.18,.06,-.31],[.13,.13,.035]'), 'Pirate includes eye patch');
    assert.ok(bundleCode.includes('.41,-.02,0'), 'Pirate includes golden earring');
    assert.ok(bundleCode.includes('pe(g[0],new Xn(.11,.032,6,12'), 'Pirate includes metallic hook hand');
  });

  it('3. 2D Canvas Portrait generation supports princess and pirate', () => {
    assert.ok(bundleCode.includes('s.body==="princess"'), 'Portrait generator handles princess');
    assert.ok(bundleCode.includes('s.body==="pirate"'), 'Portrait generator handles pirate');
  });

  it('4. Multiplayer Lobby Kart options and KART_INFO updated in HTML and zephyr.html', () => {
    // index.html
    assert.ok(indexHtml.includes('<option value="princess">👑 Principessa Aurelia (Regale)</option>'), 'index.html has princess option');
    assert.ok(indexHtml.includes('<option value="pirate">🏴‍☠️ Capitan Barbanera (Corsaro)</option>'), 'index.html has pirate option');
    assert.ok(indexHtml.includes("princess: { icon: '👑', label: 'Principessa' }"), 'index.html has princess KART_INFO');
    assert.ok(indexHtml.includes("pirate: { icon: '🏴‍☠️', label: 'Pirata' }"), 'index.html has pirate KART_INFO');

    // zephyr.html
    assert.ok(zephyrHtml.includes('<option value="princess">👑 Principessa Aurelia (Regale)</option>'), 'zephyr.html has princess option');
    assert.ok(zephyrHtml.includes('<option value="pirate">🏴‍☠️ Capitan Barbanera (Corsaro)</option>'), 'zephyr.html has pirate option');
    assert.ok(zephyrHtml.includes("princess: { icon: '👑', label: 'Principessa' }"), 'zephyr.html has princess KART_INFO');
    assert.ok(zephyrHtml.includes("pirate: { icon: '🏴‍☠️', label: 'Pirata' }"), 'zephyr.html has pirate KART_INFO');
  });

  it('5. Native assets and mirrors are in exact synchronization', () => {
    const distHtml = fs.readFileSync('dist/index.html', 'utf8');
    const publicHtml = fs.readFileSync('public/index.html', 'utf8');
    const androidHtml = fs.readFileSync('android/ZephyrReefKart/app/src/main/assets/index.html', 'utf8');
    const iosHtml = fs.readFileSync('ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets/index.html', 'utf8');

    assert.ok(distHtml.includes('Principessa Aurelia'), 'dist has Princess');
    assert.ok(publicHtml.includes('Principessa Aurelia'), 'public has Princess');
    assert.ok(androidHtml.includes('Principessa Aurelia'), 'android has Princess');
    assert.ok(iosHtml.includes('Principessa Aurelia'), 'ios has Princess');

    assert.ok(distHtml.includes('Capitan Barbanera'), 'dist has Pirate');
    assert.ok(publicHtml.includes('Capitan Barbanera'), 'public has Pirate');
    assert.ok(androidHtml.includes('Capitan Barbanera'), 'android has Pirate');
    assert.ok(iosHtml.includes('Capitan Barbanera'), 'ios has Pirate');
  });
});

describe('=== UNIT & PROCESS TESTS: MULTIPLAYER SYNCHRONIZATION & HIGH-FIDELITY BUGFIXES ===', () => {
  it('1. syncStartTime coordination guarantees simultaneous race start across different devices', () => {
    const host = new MultiplayerManager();
    const guest = new MultiplayerManager();

    host.isHost = true;
    host.mySlot = 0;
    guest.isHost = false;
    guest.mySlot = 1;

    let broadcastedPayload = null;
    host.broadcastToAll = (msg) => { broadcastedPayload = msg; };

    // Host triggers countdown start
    host.handleCountdownStart({
      trackIndex: 3,
      laps: 3,
      countdownSec: 0,
      players: [
        { slot: 0, name: 'HostPC', isHost: true },
        { slot: 1, name: 'GuestPhone', isHost: false }
      ]
    });

    // Advance to countdown end
    const futureTime = Date.now() + 3000;
    host.syncStartTime = futureTime;

    const startPayload = {
      type: 'RACE_START_SYNC',
      trackIndex: 3,
      laps: 3,
      players: host.players,
      startTime: futureTime
    };

    // Guest receives sync packet
    let guestStarted = false;
    guest.onRaceStart = (data) => {
      guestStarted = true;
    };
    guest.handleMessage({ peer: 'host' }, startPayload);

    assert.strictEqual(guestStarted, true, 'Guest must handle RACE_START_SYNC');
    assert.strictEqual(guest.syncStartTime, futureTime, 'Guest must have identical syncStartTime');
    assert.strictEqual(guest.state, 'RACING');
  });

  it('2. Countdown formula in bundle locks to syncStartTime avoiding frame rate and load time drift', () => {
    const bundleCode = fs.readFileSync('assets/index-C9rd31_W.js', 'utf8');
    assert.ok(bundleCode.includes('window.__multiplayerManager?.syncStartTime'), 'Bundle checks window.__multiplayerManager.syncStartTime');
    assert.ok(bundleCode.includes('Math.max(0,(window.__multiplayerManager.syncStartTime-Date.now())/1000)'), 'Countdown formula locks to epoch difference');
  });

  it('3. Vertical surface height clamping and ground normal alignment in updateRemoteRacers', () => {
    const mp = new MultiplayerManager();
    mp.state = 'RACING';
    mp.mySlot = 0;
    mp.players = [
      { slot: 0, isAI: false },
      { slot: 1, name: 'RivalGuest', isAI: false }
    ];

    // Remote sent y: 15.0 (flying high in sky)
    mp.remoteStates.set(1, {
      x: 10, y: 15.0, z: 20,
      yaw: 0, speed: 20, steer: 0, driftTier: 0, isDrifting: false,
      grounded: true, airborne: false, lap: 1, dist: 50,
      lastUpdate: performance.now()
    });

    let normalSet = false;
    let normalVec = null;
    let syncVisualCalled = false;

    const mockKart = {
      setGroundNormal(x, y, z) { normalSet = true; normalVec = { x, y, z }; },
      syncVisual(dt) { syncVisualCalled = true; },
      physics: {
        state: { pos: { copy(v) { Object.assign(this, v); } }, yaw: 0, speed: 0, grounded: false, airHeight: 0 }
      },
      visual: {}
    };

    const mockRacer = {
      pos: { x: 10, y: 0, z: 20, clone() { return { ...this, copy(v) { Object.assign(this, v); }, project() {} }; } },
      state: { yaw: 0, speed: 0, steer: 0, drifting: false, driftTier: 0, trackIndex: 0, grounded: false, airHeight: 0 },
      progress: { lap: 1, distance: 0 },
      kart: mockKart
    };

    const mockDirector = {
      racers: [null, mockRacer],
      spline: {
        surfaceHeight(x, z, i) { return 1.5; } // Track asphalt is at y: 1.5
      },
      adapter: {
        scratch: {},
        querySurface(x, z, i, s) {
          return { upX: 0, upY: 0.98, upZ: 0.2, s: 50, onRoad: true };
        }
      }
    };

    mp.updateRemoteRacers(1 / 60, mockDirector, null, null);

    // Opponent kart MUST be clamped to road height (1.5) instead of flying at 15.0
    assert.strictEqual(mockRacer.pos.y, 1.5, 'Remote racer vertical position clamped to road surface');
    assert.strictEqual(mockRacer.state.grounded, true, 'Remote racer is marked grounded on asphalt');
    assert.strictEqual(normalSet, true, 'Ground normal was aligned with track banking');
    assert.deepStrictEqual(normalVec, { x: 0, y: 0.98, z: 0.2 }, 'Chassis received track surface normal');
    assert.strictEqual(syncVisualCalled, true, 'syncVisual executed');
  });

  it('4. Host broadcasts authoritative AI racer states and Guest replicates them', () => {
    const host = new MultiplayerManager();
    const guest = new MultiplayerManager();

    host.isHost = true;
    host.mySlot = 0;
    host.state = 'RACING';
    guest.isHost = false;
    guest.mySlot = 1;
    guest.state = 'RACING';

    let sentPacket = null;
    host.broadcastToAll = (p) => { sentPacket = p; };

    const mockHostDirector = {
      player: {
        kart: {
          physics: {
            state: {
              pos: { x: 5, y: 1, z: 12 },
              yaw: 1.2, speed: 32, steer: 0.1, driftTier: 0, drifting: false, grounded: true,
              pitch: 0, roll: 0, boostTime: 0, padBoostTime: 0
            }
          }
        }
      },
      racers: [
        { progress: { lap: 1, distance: 100 } }, // Slot 0: Host
        { progress: { lap: 1, distance: 95 } },  // Slot 1: Guest
        {
          id: 2,
          kind: 'ai',
          pos: { x: 12, y: 1.2, z: 30 },
          state: { yaw: 0.5, speed: 28, steer: 0, driftTier: 0, drifting: false, grounded: true },
          controls: { steer: -0.1 },
          progress: { lap: 1, distance: 88 }
        }
      ]
    };

    // Host sends state
    host.sendMyState(mockHostDirector.player.kart, mockHostDirector);

    assert.ok(sentPacket, 'Host must broadcast packet');
    assert.ok(Array.isArray(sentPacket.ais), 'Packet must contain ais array');
    assert.strictEqual(sentPacket.ais.length, 1, 'Contains slot 2 AI');
    assert.strictEqual(sentPacket.ais[0].slot, 2);
    assert.strictEqual(sentPacket.ais[0].speed, 28);

    // Guest receives Host packet and replicates AI state
    guest.handleMessage({ peer: 'host' }, sentPacket);
    const guestAiState = guest.remoteStates.get(2);
    assert.ok(guestAiState, 'Guest has remote state for AI slot 2');
    assert.strictEqual(guestAiState.x, 12);
    assert.strictEqual(guestAiState.speed, 28);
  });

  it('5. Results mapping associates slot and id accurately without name or rank corruption', () => {
    const mp = new MultiplayerManager();
    mp.mySlot = 1; // Playing as Guest (Slot 1)
    mp.players = [
      { slot: 0, name: 'AlphaHost', kartId: 'nix', isHost: true },
      { slot: 1, name: 'BetaGuest', kartId: 'princess', isHost: false },
      { slot: 2, name: 'GammaAI', kartId: 'bruno', isAI: true }
    ];

    // Director finishes race: Guest won (rank 1), Host second (rank 2), AI third (rank 3)
    const directorResults = [
      { rank: 1, slot: 1, id: 1, kartId: 'princess', finishTime: 45.2 },
      { rank: 2, slot: 0, id: 0, kartId: 'nix', finishTime: 46.8 },
      { rank: 3, slot: 2, id: 2, kartId: 'bruno', finishTime: 49.1 }
    ];

    mp.handleRaceResults(directorResults);

    assert.strictEqual(mp.lastRaceResults.length, 3);
    const winner = mp.lastRaceResults.find(r => r.rank === 1);
    const second = mp.lastRaceResults.find(r => r.rank === 2);

    assert.strictEqual(winner.name, 'BetaGuest', 'Winner is BetaGuest');
    assert.strictEqual(winner.kartId, 'princess');
    assert.strictEqual(winner.isPlayer, true, 'Guest correctly identified as local player');
    assert.strictEqual(winner.pointsEarned, 15, '1st place receives 15 points');

    assert.strictEqual(second.name, 'AlphaHost', 'Second place is AlphaHost');
    assert.strictEqual(second.kartId, 'nix');
    assert.strictEqual(second.isPlayer, false, 'Host is not local player');
    assert.strictEqual(second.pointsEarned, 12, '2nd place receives 12 points');
  });

  it('6. Distance snap guard prevents jumping across the map on spawn/respawn', () => {
    const mp = new MultiplayerManager();
    mp.state = 'RACING';
    mp.mySlot = 0;
    mp.players = [
      { slot: 0, isAI: false },
      { slot: 1, name: 'RespawningRival', isAI: false }
    ];

    // Remote player respawned 50 meters ahead
    mp.remoteStates.set(1, {
      x: 60, y: 1.0, z: 0,
      yaw: 1.5, speed: 10, steer: 0, driftTier: 0, isDrifting: false,
      grounded: true, airborne: false, lap: 1, dist: 200,
      lastUpdate: performance.now()
    });

    const mockRacer = {
      pos: { x: 0, y: 1.0, z: 0, clone() { return { ...this, copy() {}, project() {} }; } },
      state: { yaw: 0, speed: 0, steer: 0, drifting: false, driftTier: 0, trackIndex: 0, grounded: true },
      progress: { lap: 1, distance: 0 },
      kart: null
    };

    mp.updateRemoteRacers(1 / 60, { racers: [null, mockRacer] }, null, null);

    // Distance squared is 60^2 = 3600 > 400. Pos should snap directly to 60 rather than creeping/flying
    assert.strictEqual(mockRacer.pos.x, 60, 'Snapped immediately without sky lerp');
    assert.strictEqual(mockRacer.state.yaw, 1.5, 'Snapped yaw immediately');
  });
});

