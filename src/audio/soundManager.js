export class SoundManager {
  constructor() {
    this.audioContext = null;
    this.bgmAudio = null;
    this.isMuted = false;
    this.volume = 0.75;
    this.ambientWindGain = null;
    this.hasUserInteracted = false;
    this.bgmLoaded = false;

    this.initBGM();
  }

  initBGM() {
    this.bgmAudio = new Audio('/audio/japanese_shrine_garden_bgm.mp3');
    this.bgmAudio.loop = true;
    this.bgmAudio.volume = this.volume;
    this.bgmAudio.preload = 'auto';

    this.bgmAudio.addEventListener('canplaythrough', () => {
      this.bgmLoaded = true;
    });
  }

  ensureAudioContext() {
    if (!this.audioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioContext = new AudioContext();
        this.setupAmbientWind();
      }
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  play() {
    this.ensureAudioContext();
    this.hasUserInteracted = true;
    if (this.bgmAudio) {
      this.bgmAudio.play().catch(e => {
        console.log('Autoplay deferred until user clicks:', e.message);
      });
    }
    if (this.ambientWindGain) {
      this.ambientWindGain.gain.setTargetAtTime(0.08 * this.volume, this.audioContext.currentTime, 0.5);
    }
  }

  pause() {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
    }
    if (this.ambientWindGain && this.audioContext) {
      this.ambientWindGain.gain.setTargetAtTime(0.0, this.audioContext.currentTime, 0.3);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.bgmAudio) {
      this.bgmAudio.muted = this.isMuted;
    }
    if (this.ambientWindGain && this.audioContext) {
      this.ambientWindGain.gain.setTargetAtTime(this.isMuted ? 0.0 : 0.08 * this.volume, this.audioContext.currentTime, 0.1);
    }
    return this.isMuted;
  }

  setVolume(val) {
    this.volume = THREE_clamp(val, 0.0, 1.0);
    if (this.bgmAudio) {
      this.bgmAudio.volume = this.volume;
    }
    if (this.ambientWindGain && this.audioContext && !this.isMuted) {
      this.ambientWindGain.gain.setTargetAtTime(0.08 * this.volume, this.audioContext.currentTime, 0.1);
    }
  }

  seek(seconds) {
    if (this.bgmAudio && !isNaN(this.bgmAudio.duration)) {
      this.bgmAudio.currentTime = seconds % this.bgmAudio.duration;
    }
  }

  // Procedural Water Drop Sound Synthesizer
  playWaterDrop() {
    if (this.isMuted || !this.audioContext) return;
    try {
      const now = this.audioContext.currentTime;
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      const baseFreq = 750 + Math.random() * 450;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.6, now + 0.06);

      gain.gain.setValueAtTime(0.12 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.start(now);
      osc.stop(now + 0.24);
    } catch (e) {}
  }

  // Procedural Japanese Temple Bell (Bonshō / Rin) Synthesizer
  playTempleBell() {
    if (this.isMuted || !this.audioContext) return;
    try {
      const now = this.audioContext.currentTime;
      const fundamentals = [220, 442, 668, 1120];

      fundamentals.forEach((freq, idx) => {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const decay = 3.5 - idx * 0.6;
        const amp = (0.2 / (idx + 1)) * this.volume;

        gain.gain.setValueAtTime(amp, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.start(now);
        osc.stop(now + decay);
      });
    } catch (e) {}
  }

  // Subtle Wind synthesis using filtered white noise
  setupAmbientWind() {
    if (!this.audioContext) return;
    try {
      const bufferSize = this.audioContext.sampleRate * 2;
      const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.audioContext.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = this.audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 380;
      filter.Q.value = 3.0;

      this.ambientWindGain = this.audioContext.createGain();
      this.ambientWindGain.gain.value = 0.0; // Start quiet until play

      whiteNoise.connect(filter);
      filter.connect(this.ambientWindGain);
      this.ambientWindGain.connect(this.audioContext.destination);

      whiteNoise.start();
    } catch (e) {}
  }
}

function THREE_clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
