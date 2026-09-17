import { RACERS, TRACKS } from '../config/augustaConfig.js';

function triggerHaptic(ms = 15) {
  if (window.AndroidHaptics && window.AndroidHaptics.vibrate) {
    try { window.AndroidHaptics.vibrate(ms); } catch (e) {}
  } else if (window.navigator && window.navigator.vibrate) {
    try { window.navigator.vibrate(ms); } catch (e) {}
  }
}

export class AugustaUI {
  constructor(game) {
    this.game = game;

    // Screens
    this.screenTitle = document.getElementById('screen-title');
    this.screenTrack = document.getElementById('screen-track');
    this.screenSelect = document.getElementById('screen-select');
    this.hud = document.getElementById('hud');
    this.screenResults = document.getElementById('screen-results');

    // Modals (Item 33, 34)
    this.modalPause = document.getElementById('modal-pause');
    this.modalSettings = document.getElementById('modal-settings');

    // Title Elements
    this.titleTrackBadge = document.getElementById('title-track-badge');

    // HUD Elements
    this.valSpeed = document.getElementById('val-speed');
    this.barSpeed = document.getElementById('bar-speed');
    this.valPos = document.getElementById('val-pos');
    this.valLap = document.getElementById('val-lap');
    this.valTime = document.getElementById('val-time');
    this.smogBar = document.getElementById('bar-smog');
    this.valSmog = document.getElementById('val-smog');
    this.driftContainer = document.getElementById('hud-drift');
    this.barDrift = document.getElementById('bar-drift');
    this.countdownEl = document.getElementById('countdown');
    this.warnEl = document.getElementById('hud-warn');
    this.wrongWayEl = document.getElementById('hud-wrong-way');
    this.finalLapEl = document.getElementById('hud-final-lap');
    this.sectorSplitEl = document.getElementById('hud-sector-split');
    this.standingsTable = document.getElementById('standings-rows');

    // Item UI Elements
    this.touchBtnItem = document.getElementById('touch-btn-item');
    this.touchItemIcon = document.getElementById('touch-item-icon');
    this.touchItemText = document.getElementById('touch-item-text');
    this.hudItemBox = document.getElementById('hud-item-box');
    this.hudItemIcon = document.getElementById('hud-item-icon');
    this.hudItemName = document.getElementById('hud-item-name');

    this.selectedRacerIndex = 0;
    this.selectedTrackIndex = 0;
    this.rouletteIcons = ['🍋', '🛢️', '🔊', '🗳️', '🌵'];
    this.isPaused = false;
    this.steeringSensitivity = 1.0;

    this.initEvents();
    this.renderTrackSelectGrid();
    this.renderRacerSelectGrid();
    this.updateTrackBadge();
  }

  initEvents() {
    // Title screen buttons
    document.getElementById('btn-start-race')?.addEventListener('click', () => {
      triggerHaptic(20);
      this.game.startCountdown();
    });

    document.getElementById('btn-choose-track')?.addEventListener('click', () => {
      triggerHaptic(15);
      this.showScreen('track');
    });

    document.getElementById('btn-choose-racer')?.addEventListener('click', () => {
      triggerHaptic(15);
      this.showScreen('select');
    });

    // Track select screen buttons
    document.getElementById('btn-track-back')?.addEventListener('click', () => {
      triggerHaptic(15);
      this.showScreen('title');
    });

    document.getElementById('btn-confirm-track')?.addEventListener('click', () => {
      triggerHaptic(25);
      this.game.selectTrack(TRACKS[this.selectedTrackIndex]);
      this.updateTrackBadge();
      this.showScreen('title');
    });

    // Racer select screen buttons
    document.getElementById('btn-select-back')?.addEventListener('click', () => {
      triggerHaptic(15);
      this.showScreen('title');
    });

    document.getElementById('btn-confirm-racer')?.addEventListener('click', () => {
      triggerHaptic(25);
      this.game.setPlayerRacer(RACERS[this.selectedRacerIndex]);
      this.game.startCountdown();
    });

    // Results screen buttons
    document.getElementById('btn-restart-race')?.addEventListener('click', () => {
      triggerHaptic(20);
      this.game.resetRace();
      this.showScreen('title');
    });

    // Audio mute button
    document.getElementById('btn-mute')?.addEventListener('click', () => {
      triggerHaptic(15);
      const active = this.game.soundManager.toggleMute();
      document.getElementById('btn-mute').textContent = active ? 'AUDIO: ON' : 'AUDIO: OFF';
    });

    // Pause Menu (Item 33)
    const togglePause = () => {
      if (this.game.state !== 'racing') return;
      this.isPaused = !this.isPaused;
      if (this.isPaused) {
        this.modalPause?.classList.remove('hidden');
        this.game.soundManager.stopBackgroundMusic();
      } else {
        this.modalPause?.classList.add('hidden');
        this.game.soundManager.startBackgroundMusic();
      }
      triggerHaptic(20);
    };

    document.getElementById('touch-btn-pause')?.addEventListener('click', togglePause);
    document.getElementById('btn-pause-resume')?.addEventListener('click', () => {
      this.isPaused = false;
      this.modalPause?.classList.add('hidden');
      this.game.soundManager.startBackgroundMusic();
      triggerHaptic(20);
    });

    document.getElementById('btn-pause-restart')?.addEventListener('click', () => {
      this.isPaused = false;
      this.modalPause?.classList.add('hidden');
      this.game.startCountdown();
      triggerHaptic(25);
    });

    document.getElementById('btn-pause-exit')?.addEventListener('click', () => {
      this.isPaused = false;
      this.modalPause?.classList.add('hidden');
      this.game.resetRace();
      this.showScreen('track');
      triggerHaptic(20);
    });

    document.getElementById('btn-pause-settings')?.addEventListener('click', () => {
      this.modalSettings?.classList.remove('hidden');
      triggerHaptic(15);
    });

    // In-game Settings (Item 34)
    document.getElementById('touch-btn-settings')?.addEventListener('click', () => {
      this.modalSettings?.classList.remove('hidden');
      triggerHaptic(15);
    });

    document.getElementById('btn-settings-close')?.addEventListener('click', () => {
      this.modalSettings?.classList.add('hidden');
      triggerHaptic(15);
    });

    // Setting Sliders
    document.getElementById('slider-music')?.addEventListener('input', (e) => {
      this.game.soundManager.setMusicVolume(e.target.value / 100);
    });

    document.getElementById('slider-sfx')?.addEventListener('input', (e) => {
      this.game.soundManager.setSfxVolume(e.target.value / 100);
    });

    document.getElementById('slider-steer')?.addEventListener('input', (e) => {
      this.steeringSensitivity = e.target.value / 100;
      if (this.game.playerController) {
        this.game.playerController.handling = (this.game.playerController.racer.stats.handling * 1.5) * this.steeringSensitivity;
      }
    });

    document.getElementById('toggle-shadows')?.addEventListener('change', (e) => {
      this.game.renderer.shadowMap.enabled = e.target.checked;
      this.game.scene.traverse(node => {
        if (node.material) node.material.needsUpdate = true;
      });
    });

    // Escape Key Handler for Pause
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        togglePause();
      }
    });

    this.initTouchControls();
  }

  updateTrackBadge() {
    const track = TRACKS[this.selectedTrackIndex];
    if (this.titleTrackBadge) {
      const recordKey = 'augusta_best_' + track.id;
      const record = JSON.parse(localStorage.getItem(recordKey) || 'null');
      const bestStr = record ? (' | 🏆 RECORD: ' + record.bestLap) : '';
      this.titleTrackBadge.textContent = '📍 PISTA: ' + track.name.toUpperCase() + ' (' + track.difficulty.toUpperCase() + ')' + bestStr;
    }
  }

  initTouchControls() {
    const bindBtn = (id, prop) => {
      const el = document.getElementById(id);
      if (!el) return;

      const press = (e) => {
        e.preventDefault();
        e.stopPropagation();
        el.classList.add('active');
        if (this.game.playerController) {
          this.game.playerController.input[prop] = true;
        }
        triggerHaptic(12);
      };

      const release = (e) => {
        e.preventDefault();
        e.stopPropagation();
        el.classList.remove('active');
        if (this.game.playerController) {
          this.game.playerController.input[prop] = false;
        }
      };

      el.addEventListener('touchstart', press, { passive: false });
      el.addEventListener('touchend', release, { passive: false });
      el.addEventListener('touchcancel', release, { passive: false });
      el.addEventListener('mousedown', press);
      el.addEventListener('mouseup', release);
      el.addEventListener('mouseleave', release);
    };

    bindBtn('touch-steer-left', 'left');
    bindBtn('touch-steer-right', 'right');
    bindBtn('touch-btn-gas', 'accel');
    bindBtn('touch-btn-brake', 'brake');
    bindBtn('touch-btn-drift', 'drift');

    // Dedicated Item Button for Touch Screen
    const itemBtn = document.getElementById('touch-btn-item');
    if (itemBtn) {
      const useItem = (e) => {
        e.preventDefault();
        e.stopPropagation();
        itemBtn.classList.add('active');
        if (this.game.playerController) {
          this.game.playerController.useCurrentItem();
        }
        triggerHaptic(35);
        setTimeout(() => itemBtn.classList.remove('active'), 150);
      };
      itemBtn.addEventListener('touchstart', useItem, { passive: false });
      itemBtn.addEventListener('click', useItem);
    }

    // Reset button
    const resetEl = document.getElementById('touch-btn-reset');
    if (resetEl) {
      const doReset = (e) => {
        e.preventDefault();
        if (this.game.playerController) {
          this.game.playerController.resetToTrack(this.game.playerController.u);
        }
        triggerHaptic(25);
      };
      resetEl.addEventListener('touchstart', doReset, { passive: false });
      resetEl.addEventListener('click', doReset);
    }

    // Mute button
    const muteEl = document.getElementById('touch-btn-mute');
    if (muteEl) {
      const toggleMute = (e) => {
        e.preventDefault();
        const active = this.game.soundManager.toggleMute();
        muteEl.textContent = active ? '🔊 AUDIO' : '🔇 MUTED';
        triggerHaptic(15);
      };
      muteEl.addEventListener('touchstart', toggleMute, { passive: false });
      muteEl.addEventListener('click', toggleMute);
    }
  }

  showScreen(name) {
    this.screenTitle?.classList.add('hidden');
    this.screenTrack?.classList.add('hidden');
    this.screenSelect?.classList.add('hidden');
    this.hud?.classList.add('hidden');
    this.screenResults?.classList.add('hidden');

    if (name === 'title') this.screenTitle?.classList.remove('hidden');
    if (name === 'track') this.screenTrack?.classList.remove('hidden');
    if (name === 'select') this.screenSelect?.classList.remove('hidden');
    if (name === 'hud') this.hud?.classList.remove('hidden');
    if (name === 'results') this.screenResults?.classList.remove('hidden');
  }

  renderTrackSelectGrid() {
    const grid = document.getElementById('track-grid');
    if (!grid) return;
    grid.innerHTML = '';

    TRACKS.forEach((track, idx) => {
      const card = document.createElement('div');
      card.className = 'track-card ' + (idx === this.selectedTrackIndex ? 'active' : '');
      card.innerHTML = '<div class="track-card-icon">' + track.icon + '</div><div><div class="track-card-title">' + track.name + '</div><div class="track-card-sub">' + track.subtitle + '</div></div>';
      card.addEventListener('click', () => {
        document.querySelectorAll('.track-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.selectedTrackIndex = idx;
        this.renderTrackDetail(track);
      });
      grid.appendChild(card);
    });

    this.renderTrackDetail(TRACKS[this.selectedTrackIndex]);
  }

  renderTrackDetail(track) {
    const detail = document.getElementById('track-detail');
    if (!detail) return;
    const recordKey = 'augusta_best_' + track.id;
    const record = JSON.parse(localStorage.getItem(recordKey) || 'null');
    const recordText = record ? record.bestRace : '--:--.---';
    const bestLapText = record ? record.bestLap : '--:--.---';

    detail.innerHTML = '<div>' +
      '<div style="font-size: 38px; margin-bottom: 8px;">' + track.icon + '</div>' +
      '<h2 style="font-size: 26px; font-weight: 900; color: #ffffff; margin-bottom: 4px;">' + track.name + '</h2>' +
      '<div style="font-size: 14px; font-weight: 700; color: #38bdf8; margin-bottom: 14px;">' + track.subtitle + '</div>' +
      '<p style="font-size: 13px; line-height: 1.6; color: #cbd5e1; margin-bottom: 20px;">' + track.desc + '</p>' +
      '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">' +
        '<div class="panel" style="padding: 10px 16px; text-align: center;"><div style="font-size: 10px; color: #94a3b8; letter-spacing: 0.1em;">DIFFICOLTÀ</div><div style="font-size: 16px; font-weight: 800; color: #f59e0b;">' + track.difficulty + '</div></div>' +
        '<div class="panel" style="padding: 10px 16px; text-align: center;"><div style="font-size: 10px; color: #94a3b8; letter-spacing: 0.1em;">GUARDRAIL</div><div style="font-size: 16px; font-weight: 800; color: #10b981;">100% SICURO</div></div>' +
        '<div class="panel" style="padding: 10px 16px; text-align: center;"><div style="font-size: 10px; color: #94a3b8; letter-spacing: 0.1em;">MIGLIOR GIRO</div><div style="font-size: 15px; font-weight: 800; color: #38bdf8;">' + bestLapText + '</div></div>' +
        '<div class="panel" style="padding: 10px 16px; text-align: center;"><div style="font-size: 10px; color: #94a3b8; letter-spacing: 0.1em;">RECORD GARA</div><div style="font-size: 15px; font-weight: 800; color: #ffd700;">' + recordText + '</div></div>' +
      '</div>' +
    '</div>';
  }

  renderRacerSelectGrid() {
    const grid = document.getElementById('select-grid');
    if (!grid) return;
    grid.innerHTML = '';

    RACERS.forEach((racer, idx) => {
      const card = document.createElement('div');
      card.className = 'racer-card ' + (idx === this.selectedRacerIndex ? 'active' : '');
      card.innerHTML = '<div class="racer-card-avatar">' + racer.avatarIco + '</div><div class="racer-card-name">' + racer.name + '</div><div class="racer-card-kart">' + racer.kartName + '</div>';
      card.addEventListener('click', () => {
        document.querySelectorAll('.racer-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.selectedRacerIndex = idx;
        this.renderRacerDetail(racer);
      });
      grid.appendChild(card);
    });

    this.renderRacerDetail(RACERS[this.selectedRacerIndex]);
  }

  renderRacerDetail(racer) {
    const detail = document.getElementById('racer-detail');
    if (!detail) return;

    detail.innerHTML = '<div class="detail-header">' +
      '<div class="detail-avatar">' + racer.avatarIco + '</div>' +
      '<div><div class="detail-name">' + racer.name + ' <span style="font-size:14px; color:var(--cyan);">(' + racer.nickname + ')</span></div><div class="detail-kart">🚗 ' + racer.kartName + '</div></div>' +
    '</div>' +
    '<p class="detail-desc">' + racer.desc + '</p>' +
    '<div class="stat-rows">' +
      '<div class="stat-row"><span class="stat-label">VELOCITÀ</span><div class="stat-bar"><i style="width: ' + (racer.stats.speed * 85) + '%;"></i></div><span class="stat-val">' + racer.stats.speed.toFixed(2) + '</span></div>' +
      '<div class="stat-row"><span class="stat-label">ACCELERAZIONE</span><div class="stat-bar"><i style="width: ' + (racer.stats.accel * 80) + '%;"></i></div><span class="stat-val">' + racer.stats.accel.toFixed(2) + '</span></div>' +
      '<div class="stat-row"><span class="stat-label">TENUTA / GUIDA</span><div class="stat-bar"><i style="width: ' + (racer.stats.handling * 82) + '%;"></i></div><span class="stat-val">' + racer.stats.handling.toFixed(2) + '</span></div>' +
      '<div class="stat-row"><span class="stat-label">TURBO DERAPATA</span><div class="stat-bar"><i style="width: ' + (racer.stats.drift * 80) + '%;"></i></div><span class="stat-val">' + racer.stats.drift.toFixed(2) + '</span></div>' +
    '</div>';
  }

  showCountdown(text, isVia = false) {
    if (!this.countdownEl) return;
    this.countdownEl.textContent = text;
    this.countdownEl.className = 'countdown-box ' + (isVia ? 'via' : '');
    this.countdownEl.style.display = 'block';
    if (isVia) {
      setTimeout(() => {
        if (this.countdownEl) this.countdownEl.style.display = 'none';
      }, 1200);
    }
  }

  showFinalLapBanner() {
    if (!this.finalLapEl) return;
    this.finalLapEl.classList.remove('hidden');
    triggerHaptic(40);
    setTimeout(() => {
      this.finalLapEl?.classList.add('hidden');
    }, 2800);
  }

  showSectorSplit(sectorNum, delta = 0) {
    if (!this.sectorSplitEl) return;
    const sign = delta >= 0 ? '+' : '';
    this.sectorSplitEl.textContent = 'S' + (sectorNum + 1) + ': ' + sign + delta.toFixed(2) + 's';
    this.sectorSplitEl.style.color = delta <= 0 ? '#10b981' : '#f59e0b';
    this.sectorSplitEl.classList.remove('hidden');
    setTimeout(() => {
      this.sectorSplitEl?.classList.add('hidden');
    }, 2200);
  }

  updateHUD(player, raceTime, standings) {
    if (!player) return;

    // Speedometer
    const kmh = Math.round(Math.abs(player.speed) * 3.6);
    if (this.valSpeed) this.valSpeed.textContent = kmh;
    if (this.barSpeed) {
      const pct = Math.min(100, (kmh / 180) * 100);
      this.barSpeed.style.width = pct + '%';
    }

    // Position & Lap
    if (this.valPos) this.valPos.textContent = player.rank + '°';
    if (this.valLap) this.valLap.textContent = Math.min(3, player.lap) + ' / 3';

    // Timer
    if (this.valTime) {
      const m = Math.floor(raceTime / 60);
      const s = Math.floor(raceTime % 60);
      const ms = Math.floor((raceTime * 1000) % 1000);
      this.valTime.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') + '.' + String(ms).padStart(3, '0');
    }

    // Item Roulette & UI Display (Item 32)
    if (player.itemRollingTimer > 0) {
      const randIcon = this.rouletteIcons[Math.floor(Math.random() * this.rouletteIcons.length)];
      if (this.touchItemIcon) this.touchItemIcon.textContent = randIcon;
      if (this.touchItemText) this.touchItemText.textContent = 'SORTEGGIO...';
      if (this.touchBtnItem) this.touchBtnItem.classList.add('ready');
      if (this.hudItemBox) {
        this.hudItemBox.classList.remove('hidden');
        if (this.hudItemIcon) this.hudItemIcon.textContent = randIcon;
        if (this.hudItemName) this.hudItemName.textContent = 'SORTEGGIO...';
      }
    } else if (player.currentItem) {
      if (this.touchBtnItem) this.touchBtnItem.classList.add('ready');
      if (this.touchItemIcon) this.touchItemIcon.textContent = player.currentItem.icon;
      if (this.touchItemText) this.touchItemText.textContent = player.currentItem.name.split(' ')[0].toUpperCase();
      if (this.hudItemBox) {
        this.hudItemBox.classList.remove('hidden');
        if (this.hudItemIcon) this.hudItemIcon.textContent = player.currentItem.icon;
        if (this.hudItemName) this.hudItemName.textContent = player.currentItem.name;
      }
    } else {
      if (this.touchBtnItem) this.touchBtnItem.classList.remove('ready');
      if (this.touchItemIcon) this.touchItemIcon.textContent = '❓';
      if (this.touchItemText) this.touchItemText.textContent = 'POTERE';
      if (this.hudItemBox) this.hudItemBox.classList.add('hidden');
    }

    // Wrong Way Warning Flash (Item 26)
    if (this.wrongWayEl) {
      if (player.wrongWay && player.speed > 3.0) {
        this.wrongWayEl.classList.remove('hidden');
      } else {
        this.wrongWayEl.classList.add('hidden');
      }
    }

    // Smog Bar
    const smog = Math.round(player.smogLevel);
    if (this.valSmog) this.valSmog.textContent = smog + '% AQI';
    if (this.smogBar) {
      this.smogBar.style.width = smog + '%';
      if (smog > 65) {
        this.smogBar.style.background = '#dc2626';
        this.warnEl?.classList.remove('hidden');
      } else if (smog > 35) {
        this.smogBar.style.background = '#f59e0b';
        this.warnEl?.classList.add('hidden');
      } else {
        this.smogBar.style.background = '#10b981';
        this.warnEl?.classList.add('hidden');
      }
    }

    // Drift charge bar
    if (this.driftContainer && this.barDrift) {
      if (player.isDrifting && player.driftTimer > 0) {
        this.driftContainer.classList.remove('hidden');
        const driftPct = Math.min(100, (player.driftTimer / 2.8) * 100);
        this.barDrift.style.width = driftPct + '%';
      } else {
        this.driftContainer.classList.add('hidden');
      }
    }

    // Live Standings Rows
    if (this.standingsTable && standings) {
      let html = '';
      standings.slice(0, 6).forEach((s, idx) => {
        const gap = idx === 0 ? 'LEADER' : '+' + ((idx * 0.9)).toFixed(1) + 's';
        const isSelf = s.isPlayer;
        html += '<div class="standing-row ' + (isSelf ? 'self' : '') + '">' +
          '<span class="standing-pos">' + (idx + 1) + '°</span>' +
          '<span class="standing-name">' + s.racer.name.slice(0, 14) + '...</span>' +
          '<span class="standing-gap">' + gap + '</span>' +
        '</div>';
      });
      this.standingsTable.innerHTML = html;
    }
  }

  showResults(results, finalTimeStr, bestLapStr) {
    this.showScreen('results');
    const tbody = document.getElementById('results-body');
    if (!tbody) return;

    // Save record in localStorage (Item 35)
    const trackKey = 'augusta_best_' + this.game.currentTrackDef.id;
    const prev = JSON.parse(localStorage.getItem(trackKey) || 'null');
    if (!prev || finalTimeStr < prev.bestRace) {
      localStorage.setItem(trackKey, JSON.stringify({
        bestRace: finalTimeStr,
        bestLap: bestLapStr || finalTimeStr,
        date: new Date().toLocaleDateString()
      }));
    }

    let html = '';
    results.forEach((r, idx) => {
      html += '<tr class="' + (r.isPlayer ? 'player-row' : '') + '">' +
        '<td style="font-weight: 800; font-size: 18px;">' + (idx + 1) + '°</td>' +
        '<td><div style="font-weight: 800;">' + r.racer.avatarIco + ' ' + r.racer.name + '</div><div style="font-size: 12px; color: #94a3b8;">' + r.racer.kartName + '</div></td>' +
        '<td>' + r.timeStr + '</td>' +
      '</tr>';
    });
    tbody.innerHTML = html;
    this.updateTrackBadge();
  }
}
