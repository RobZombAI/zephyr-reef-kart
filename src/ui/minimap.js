export class AugustaMinimap {
  constructor(canvas, track) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.track = track;

    this.width = canvas.width;
    this.height = canvas.height;

    // devicePixelRatio: scale the backing store while keeping logical coordinates
    const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
    this.dpr = dpr;
    if (dpr !== 1) {
      canvas.width = Math.round(this.width * dpr);
      canvas.height = Math.round(this.height * dpr);
      this.ctx.scale(dpr, dpr);
    }

    // Compute bounding box of track to fit canvas
    let minX = Infinity, maxX = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;

    for (let u = 0; u <= 1.0; u += 0.01) {
      const pt = track.getPointAt(u);
      if (pt.x < minX) minX = pt.x;
      if (pt.x > maxX) maxX = pt.x;
      if (pt.z < minZ) minZ = pt.z;
      if (pt.z > maxZ) maxZ = pt.z;
    }

    if (!Number.isFinite(minX) || !Number.isFinite(minZ) ||
        maxX - minX < 1e-6 || maxZ - minZ < 1e-6) {
      // Degenerate bounding box: fall back to unit scale centred on the origin (no NaN)
      this.scale = 1;
      this.offsetX = this.width / 2;
      this.offsetZ = this.height / 2;
    } else {
      const padding = 24;
      this.scaleX = (this.width - padding * 2) / (maxX - minX);
      this.scaleZ = (this.height - padding * 2) / (maxZ - minZ);
      this.scale = Math.min(this.scaleX, this.scaleZ);

      this.offsetX = (this.width - (maxX - minX) * this.scale) / 2 - minX * this.scale;
      this.offsetZ = (this.height - (maxZ - minZ) * this.scale) / 2 - minZ * this.scale;
    }

    // Cached track outline: one Path2D built at construction (after the scale is
    // known), stroked every frame instead of 201 getPointAt calls per frame.
    this.trackPath = new Path2D();
    for (let i = 0; i <= 200; i++) {
      const u = i / 200;
      const pt = track.getPointAt(u);
      const c = this.worldToCanvas(pt.x, pt.z);
      if (i === 0) this.trackPath.moveTo(c.x, c.y);
      else this.trackPath.lineTo(c.x, c.y);
    }
    this.trackPath.closePath();
  }

  worldToCanvas(x, z) {
    return {
      x: x * this.scale + this.offsetX,
      y: z * this.scale + this.offsetZ
    };
  }

  render(playerController, aiRacers) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw track loop (cached Path2D)
    // Road outer glow
    ctx.strokeStyle = 'rgba(0, 247, 255, 0.25)';
    ctx.lineWidth = 10;
    ctx.stroke(this.trackPath);

    // Road surface
    ctx.strokeStyle = '#182836';
    ctx.lineWidth = 6;
    ctx.stroke(this.trackPath);

    // Centerline
    ctx.strokeStyle = '#ffcf33';
    ctx.lineWidth = 1.5;
    ctx.stroke(this.trackPath);

    // 2. Draw Landmark Zones (theme-aware: each emoji only on its own track theme)
    const theme = this.track.theme;
    ctx.font = '14px sans-serif';
    if (theme === 'refinery') {
      // Refinery (Flame / Smokestacks)
      const refPt = this.track.getPointAt(0.24);
      const refC = this.worldToCanvas(refPt.x, refPt.z);
      ctx.fillStyle = '#ff5500';
      ctx.fillText('🏭', refC.x - 7, refC.y + 5);
    }
    if (theme === 'trapcity') {
      // Concert Stage
      const concPt = this.track.getPointAt(0.38);
      const concC = this.worldToCanvas(concPt.x, concPt.z);
      ctx.fillStyle = '#ff00aa';
      ctx.fillText('🎵', concC.x - 7, concC.y + 5);

      // Propaganda Avenue
      const propPt = this.track.getPointAt(0.55);
      const propC = this.worldToCanvas(propPt.x, propPt.z);
      ctx.fillStyle = '#00f7ff';
      ctx.fillText('📢', propC.x - 7, propC.y + 5);
    }
    if (theme === 'lighthouse') {
      // Lighthouse (Finish / Freedom)
      const lhPt = this.track.getPointAt(0.95);
      const lhC = this.worldToCanvas(lhPt.x, lhPt.z);
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('🗼', lhC.x - 7, lhC.y + 5);
    }

    // 3. Draw AI Racers
    if (aiRacers && aiRacers.racers) {
      aiRacers.racers.forEach(r => {
        const c = this.worldToCanvas(r.controller.position.x, r.controller.position.z);
        ctx.beginPath();
        ctx.arc(c.x, c.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = r.config.color || r.config.kartColor || '#00e5ff';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });
    }

    // 4. Draw Player (Directional Arrow Pointer - Item 38)
    if (playerController) {
      const p = this.worldToCanvas(playerController.position.x, playerController.position.z);

      // Pulse halo ring
      ctx.beginPath();
      ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 247, 255, 0.35)';
      ctx.fill();

      // Directional arrow pointer
      ctx.save();
      ctx.translate(p.x, p.y);
      // world->canvas maps world +X to canvas +X and world +Z to canvas +Y, while the
      // kart forward is (sin yaw, 0, cos yaw). The tip at (0, 11) points along +canvas-y,
      // which aligns with that forward vector only when rotated by -yaw.
      ctx.rotate(-playerController.yaw);
      ctx.beginPath();
      ctx.moveTo(0, 11);
      ctx.lineTo(6, -6);
      ctx.lineTo(0, -3);
      ctx.lineTo(-6, -6);
      ctx.closePath();
      ctx.fillStyle = '#00f7ff';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.0;
      ctx.stroke();
      ctx.restore();
    }
  }
}
