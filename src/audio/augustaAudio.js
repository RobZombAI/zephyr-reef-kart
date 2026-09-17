// Augusta Kart Audio Engine & Procedural Sound Synthesizer
// Features: Dynamic multi-channel engine hum, drift screech, procedural synthwave BGM,
// item pickups, 5 unique power-up launch sounds, wall impacts, mini-turbo tiers, lap chimes, and victory fanfare.

export class AugustaSoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem("augusta_muted") === "true";
    this.volume = parseFloat(localStorage.getItem("augusta_vol") || "0.8");

    // Engine Nodes
    this.masterGain = null;
    this.engineGain = null;
    this.engineOsc1 = null;
    this.engineOsc2 = null;
    this.engineFilter = null;

    // Drift Nodes
    this.driftGain = null;
    this.driftNoise = null;

    // Music Nodes & Sequencer
    this.musicGain = null;
    this.musicInterval = null;
    this.musicStep = 0;
    this.isMusicPlaying = false;

    this.initialized = false;
    this.setupAutoUnlock();
  }

  setupAutoUnlock() {
    const unlock = () => {
      if (!this.initialized) {
        this.init();
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    };
    window.addEventListener("touchstart", unlock, { once: true, passive: true });
    window.addEventListener("mousedown", unlock, { once: true, passive: true });
    window.addEventListener("keydown", unlock, { once: true, passive: true });
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.isMuted ? 0 : this.volume;
      this.masterGain.connect(this.ctx.destination);

      // 1. Engine Synthesizer (Dual Saw/Square with resonant lowpass)
      this.engineFilter = this.ctx.createBiquadFilter();
      this.engineFilter.type = "lowpass";
      this.engineFilter.frequency.value = 450;
      this.engineFilter.Q.value = 2.0;

      this.engineGain = this.ctx.createGain();
      this.engineGain.gain.value = 0.0;

      this.engineOsc1 = this.ctx.createOscillator();
      this.engineOsc1.type = "sawtooth";
      this.engineOsc1.frequency.value = 55;

      this.engineOsc2 = this.ctx.createOscillator();
      this.engineOsc2.type = "square";
      this.engineOsc2.frequency.value = 27.5;

      this.engineOsc1.connect(this.engineFilter);
      this.engineOsc2.connect(this.engineFilter);
      this.engineFilter.connect(this.engineGain);
      this.engineGain.connect(this.masterGain);

      this.engineOsc1.start();
      this.engineOsc2.start();

      // 2. Drift Screech Synthesizer (White noise with bandpass)
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      this.driftNoise = this.ctx.createBufferSource();
      this.driftNoise.buffer = noiseBuffer;
      this.driftNoise.loop = true;

      const driftFilter = this.ctx.createBiquadFilter();
      driftFilter.type = "bandpass";
      driftFilter.frequency.value = 1800;
      driftFilter.Q.value = 3.2;

      this.driftGain = this.ctx.createGain();
      this.driftGain.gain.value = 0.0;

      this.driftNoise.connect(driftFilter);
      driftFilter.connect(this.driftGain);
      this.driftGain.connect(this.masterGain);
      this.driftNoise.start();

      // 3. Music Master Bus
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0.38;
      this.musicGain.connect(this.masterGain);

      this.initialized = true;
    } catch (e) {
      console.warn("Web Audio initialization failed:", e);
    }
  }

  updateEngine(speed, isAccelerating, isDrifting, driftLevel) {
    if (!this.initialized || !this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const t = this.ctx.currentTime;
    const absSpeed = Math.abs(speed);

    this.engineGain.gain.setTargetAtTime(0.18, t, 0.05);

    const baseFreq = 52 + absSpeed * 4.4 + (isAccelerating ? 24 : 0);
    this.engineOsc1.frequency.setTargetAtTime(baseFreq, t, 0.05);
    this.engineOsc2.frequency.setTargetAtTime(baseFreq * 0.5, t, 0.05);
    this.engineFilter.frequency.setTargetAtTime(360 + absSpeed * 16, t, 0.05);

    if (isDrifting) {
      const screetchVol = Math.min(0.32, 0.09 + driftLevel * 0.07);
      this.driftGain.gain.setTargetAtTime(screetchVol, t, 0.04);
    } else {
      this.driftGain.gain.setTargetAtTime(0.0, t, 0.06);
    }
  }

  stopEngine() {
    if (!this.initialized || !this.ctx || !this.engineGain) return;
    const t = this.ctx.currentTime;
    this.engineGain.gain.setTargetAtTime(0.0, t, 0.08);
    this.driftGain.gain.setTargetAtTime(0.0, t, 0.05);
    this.stopBackgroundMusic();
  }

  startBackgroundMusic() {
    if (!this.initialized) this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();
    if (this.isMusicPlaying) return;

    this.isMusicPlaying = true;
    this.musicStep = 0;

    const bassNotes = [87.31, 87.31, 103.83, 116.54, 130.81, 116.54, 103.83, 87.31];
    const leadNotes = [349.23, 415.30, 466.16, 523.25, 466.16, 415.30, 349.23, 523.25];
    const stepDuration = 0.15;

    const playStep = () => {
      if (!this.isMusicPlaying || !this.ctx) return;
      const t = this.ctx.currentTime;
      const idx = this.musicStep % 8;

      if (this.musicStep % 4 === 0) {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.frequency.setValueAtTime(140, t);
        osc.frequency.exponentialRampToValueAtTime(35, t + 0.08);
        g.gain.setValueAtTime(0.35, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
        osc.connect(g);
        g.connect(this.musicGain);
        osc.start(t);
        osc.stop(t + 0.12);
      } else if (this.musicStep % 4 === 2) {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(240, t);
        g.gain.setValueAtTime(0.2, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        osc.connect(g);
        g.connect(this.musicGain);
        osc.start(t);
        osc.stop(t + 0.1);
      }

      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bassOsc.type = "sawtooth";
      bassOsc.frequency.setValueAtTime(bassNotes[idx], t);
      bassGain.gain.setValueAtTime(0.18, t);
      bassGain.gain.exponentialRampToValueAtTime(0.001, t + stepDuration * 0.9);
      bassOsc.connect(bassGain);
      bassGain.connect(this.musicGain);
      bassOsc.start(t);
      bassOsc.stop(t + stepDuration * 0.9);

      if (this.musicStep % 2 === 0) {
        const leadOsc = this.ctx.createOscillator();
        const leadGain = this.ctx.createGain();
        leadOsc.type = "sine";
        leadOsc.frequency.setValueAtTime(leadNotes[idx], t);
        leadGain.gain.setValueAtTime(0.14, t);
        leadGain.gain.exponentialRampToValueAtTime(0.001, t + stepDuration * 1.6);
        leadOsc.connect(leadGain);
        leadGain.connect(this.musicGain);
        leadOsc.start(t);
        leadOsc.stop(t + stepDuration * 1.6);
      }

      this.musicStep++;
    };

    this.musicInterval = setInterval(playStep, stepDuration * 1000);
  }

  stopBackgroundMusic() {
    this.isMusicPlaying = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  playWallHit(intensity = 1.0) {
    if (!this.initialized || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(110, t);
    osc.frequency.exponentialRampToValueAtTime(45, t + 0.15);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, t);

    const vol = Math.min(0.45, 0.2 * intensity);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.2);
  }

  playItemPickup() {
    if (!this.initialized || !this.ctx) return;
    const t = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, t + idx * 0.04);
      gain.gain.setValueAtTime(0.25, t + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.005, t + idx * 0.04 + 0.15);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + idx * 0.04);
      osc.stop(t + idx * 0.04 + 0.15);
    });
  }

  playPowerup(itemId) {
    if (!this.initialized || !this.ctx) return;
    const t = this.ctx.currentTime;

    if (itemId === "granita") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(180, t);
      osc.frequency.exponentialRampToValueAtTime(1200, t + 0.45);
      gain.gain.setValueAtTime(0.4, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.6);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.6);
    } else if (itemId === "greggio") {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(160, t);
      osc.frequency.linearRampToValueAtTime(60, t + 0.3);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(350, t);
      gain.gain.setValueAtTime(0.4, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.35);
    } else if (itemId === "trap") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(110, t);
      osc.frequency.exponentialRampToValueAtTime(32, t + 0.4);
      gain.gain.setValueAtTime(0.55, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.5);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.5);
    } else if (itemId === "politica") {
      [440, 554.37, 659.25].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(freq, t + idx * 0.06);
        gain.gain.setValueAtTime(0.18, t + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.01, t + idx * 0.06 + 0.3);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(t + idx * 0.06);
        osc.stop(t + idx * 0.06 + 0.3);
      });
    } else if (itemId === "fico") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(440, t);
      osc.frequency.linearRampToValueAtTime(880, t + 0.1);
      osc.frequency.exponentialRampToValueAtTime(220, t + 0.4);
      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.45);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.45);
    }
  }

  playMiniTurbo(tier = 1) {
    if (!this.initialized || !this.ctx) return;
    const t = this.ctx.currentTime;
    const baseFreq = tier === 3 ? 880 : tier === 2 ? 660 : 440;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(baseFreq, t);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 2, t + 0.28);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.35);
  }

  playLapSound(lap, isFinalLap = false) {
    if (!this.initialized || !this.ctx) return;
    const t = this.ctx.currentTime;
    if (isFinalLap) {
      [880, 1174.66, 880, 1174.66].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t + idx * 0.12);
        gain.gain.setValueAtTime(0.35, t + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.01, t + idx * 0.12 + 0.2);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(t + idx * 0.12);
        osc.stop(t + idx * 0.12 + 0.2);
      });
    } else {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, t);
      osc.frequency.exponentialRampToValueAtTime(783.99, t + 0.25);
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.3);
    }
  }

  playVictoryFanfare() {
    if (!this.initialized || !this.ctx) return;
    const t = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, t + idx * 0.14);
      gain.gain.setValueAtTime(0.38, t + idx * 0.14);
      gain.gain.exponentialRampToValueAtTime(0.01, t + idx * 0.14 + 0.4);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + idx * 0.14);
      osc.stop(t + idx * 0.14 + 0.4);
    });
  }

  playBoost() {
    if (!this.initialized || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.35);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.5);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.5);
  }

  playCountdown(count) {
    if (!this.initialized || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    const freq = count === 0 ? 880 : 440;
    const duration = count === 0 ? 0.6 : 0.22;

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, t);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + duration);
  }

  playSpin() {
    if (!this.initialized || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.linearRampToValueAtTime(80, t + 0.45);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.45);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.45);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem("augusta_muted", this.isMuted.toString());
    if (this.masterGain) {
      this.masterGain.gain.value = this.isMuted ? 0 : this.volume;
    }
    return !this.isMuted;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1.0, val));
    localStorage.setItem("augusta_vol", this.volume.toString());
    if (this.masterGain && !this.isMuted) {
      this.masterGain.gain.value = this.volume;
    }
  }
}
