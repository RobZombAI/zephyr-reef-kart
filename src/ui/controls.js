export function setupUI(app) {
  // Elements
  const playPauseBtn = document.getElementById('btn-play-pause');
  const playPauseIcon = document.getElementById('play-pause-icon');
  const timelineScrubber = document.getElementById('timeline-scrubber');
  const timeDisplay = document.getElementById('time-display');

  const modeCinematicBtn = document.getElementById('btn-mode-cinematic');
  const modeOrbitBtn = document.getElementById('btn-mode-orbit');

  const btnAudioToggle = document.getElementById('btn-audio-toggle');
  const audioVolumeSlider = document.getElementById('audio-volume');
  const btnBell = document.getElementById('btn-bell');

  const presetSelect = document.getElementById('preset-select');
  const toggleRetroShader = document.getElementById('toggle-retro');
  const sliderPosterize = document.getElementById('slider-posterize');
  const sliderDither = document.getElementById('slider-dither');
  const sliderBloom = document.getElementById('slider-bloom');

  const btnFullscreen = document.getElementById('btn-fullscreen');
  const btnScreenshot = document.getElementById('btn-screenshot');
  const btnInfo = document.getElementById('btn-info');
  const infoModal = document.getElementById('info-modal');
  const closeInfoBtn = document.getElementById('close-info');

  const startOverlay = document.getElementById('start-overlay');
  const startBtn = document.getElementById('start-btn');

  // Start experience overlay (to unlock audio autoplay policies)
  if (startBtn && startOverlay) {
    startBtn.addEventListener('click', () => {
      startOverlay.classList.add('hidden');
      app.soundManager.play();
      app.cameraController.play();
    });
  }

  // Play / Pause
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      const isPlaying = app.cameraController.togglePlay();
      if (isPlaying) {
        app.soundManager.play();
        playPauseIcon.innerHTML = '&#10074;&#10074;'; // Pause icon
      } else {
        app.soundManager.pause();
        playPauseIcon.innerHTML = '&#9658;'; // Play icon
      }
    });
  }

  // Timeline scrubber
  if (timelineScrubber) {
    timelineScrubber.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      app.cameraController.seek(val);
      app.soundManager.seek(val * app.cameraController.duration);
    });

    // Update timeline from camera controller
    app.cameraController.onTimeUpdate = (normTime, seconds) => {
      timelineScrubber.value = normTime;
      const curM = Math.floor(seconds / 60);
      const curS = Math.floor(seconds % 60).toString().padStart(2, '0');
      const totM = Math.floor(app.cameraController.duration / 60);
      const totS = Math.floor(app.cameraController.duration % 60).toString().padStart(2, '0');
      if (timeDisplay) {
        timeDisplay.textContent = `${curM}:${curS} / ${totM}:${totS}`;
      }
    };
  }

  // Camera Modes
  if (modeCinematicBtn && modeOrbitBtn) {
    modeCinematicBtn.addEventListener('click', () => {
      app.cameraController.setMode('cinematic');
      modeCinematicBtn.classList.add('active');
      modeOrbitBtn.classList.remove('active');
    });

    modeOrbitBtn.addEventListener('click', () => {
      app.cameraController.setMode('orbit');
      modeOrbitBtn.classList.add('active');
      modeCinematicBtn.classList.remove('active');
    });
  }

  // Audio Controls
  if (btnAudioToggle) {
    btnAudioToggle.addEventListener('click', () => {
      const isMuted = app.soundManager.toggleMute();
      btnAudioToggle.textContent = isMuted ? '🔇' : '🔊';
    });
  }

  if (audioVolumeSlider) {
    audioVolumeSlider.addEventListener('input', (e) => {
      app.soundManager.setVolume(parseFloat(e.target.value));
    });
  }

  if (btnBell) {
    btnBell.addEventListener('click', () => {
      app.soundManager.playTempleBell();
    });
  }

  // Atmosphere Presets
  if (presetSelect) {
    presetSelect.addEventListener('change', (e) => {
      app.setPreset(e.target.value);
    });
  }

  // Retro Shader & Post-Processing
  if (toggleRetroShader) {
    toggleRetroShader.addEventListener('change', (e) => {
      const enabled = e.target.checked;
      if (app.retroPass) {
        app.retroPass.uniforms.uEnabled.value = enabled ? 1.0 : 0.0;
      }
    });
  }

  if (sliderPosterize) {
    sliderPosterize.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (app.retroPass) {
        app.retroPass.uniforms.uPosterizeLevels.value = val;
      }
      document.getElementById('val-posterize').textContent = val;
    });
  }

  if (sliderDither) {
    sliderDither.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (app.retroPass) {
        app.retroPass.uniforms.uDitherStrength.value = val;
      }
      document.getElementById('val-dither').textContent = val.toFixed(2);
    });
  }

  if (sliderBloom) {
    sliderBloom.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (app.bloomPass) {
        app.bloomPass.strength = val;
      }
      document.getElementById('val-bloom').textContent = val.toFixed(2);
    });
  }

  // Fullscreen
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.warn('Fullscreen request failed:', err);
        });
      } else {
        document.exitFullscreen();
      }
    });
  }

  // Screenshot
  if (btnScreenshot) {
    btnScreenshot.addEventListener('click', () => {
      app.composer.render();
      const dataUrl = app.renderer.domElement.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `japanese-shrine-garden-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    });
  }

  // Info modal
  if (btnInfo && infoModal && closeInfoBtn) {
    btnInfo.addEventListener('click', () => {
      infoModal.classList.remove('hidden');
    });
    closeInfoBtn.addEventListener('click', () => {
      infoModal.classList.add('hidden');
    });
  }

  return {
    updateTimeline: (normTime) => {
      if (timelineScrubber) timelineScrubber.value = normTime;
    }
  };
}
