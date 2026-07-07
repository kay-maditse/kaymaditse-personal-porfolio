/* ─────────────────────────────────────────
   RADAR.JS — Skills Radar Chart
   ───────────────────────────────────────── */

function drawRadar() {
  const c = document.getElementById('radarCanvas');
  if (!c) return;

  const ctx2 = c.getContext('2d');
  const cx = 190, cy = 190, r = 140;
  const cats = ['Cloud\n(AWS)', 'DevOps', 'Linux/OS', 'Networking', 'Security', 'Development'];
  const vals = [92, 78, 88, 75, 72, 85];
  const colors = ['#00d4ff', '#a855f7', '#00ff88', '#ffaa00', '#ff3366', '#fff'];
  const n = cats.length;

  ctx2.clearRect(0, 0, 380, 380);

  // Rings
  for (let i = 1; i <= 5; i++) {
    ctx2.beginPath();
    for (let j = 0; j < n; j++) {
      const angle = (j * 2 * Math.PI / n) - Math.PI / 2;
      const rad = r * (i / 5);
      const x = cx + rad * Math.cos(angle);
      const y = cy + rad * Math.sin(angle);
      j === 0 ? ctx2.moveTo(x, y) : ctx2.lineTo(x, y);
    }
    ctx2.closePath();
    ctx2.strokeStyle = `rgba(0,212,255,${0.05 + i * 0.03})`;
    ctx2.lineWidth = 0.5;
    ctx2.stroke();
  }

  // Axes
  for (let j = 0; j < n; j++) {
    const angle = (j * 2 * Math.PI / n) - Math.PI / 2;
    ctx2.beginPath();
    ctx2.moveTo(cx, cy);
    ctx2.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
    ctx2.strokeStyle = 'rgba(0,212,255,.15)';
    ctx2.lineWidth = 0.5;
    ctx2.stroke();
  }

  // Data polygon
  ctx2.beginPath();
  for (let j = 0; j < n; j++) {
    const angle = (j * 2 * Math.PI / n) - Math.PI / 2;
    const rad = r * (vals[j] / 100);
    const x = cx + rad * Math.cos(angle);
    const y = cy + rad * Math.sin(angle);
    j === 0 ? ctx2.moveTo(x, y) : ctx2.lineTo(x, y);
  }
  ctx2.closePath();
  ctx2.fillStyle = 'rgba(0,212,255,.08)';
  ctx2.fill();
  ctx2.strokeStyle = 'rgba(0,212,255,.7)';
  ctx2.lineWidth = 1.5;
  ctx2.stroke();

  // Points
  for (let j = 0; j < n; j++) {
    const angle = (j * 2 * Math.PI / n) - Math.PI / 2;
    const rad = r * (vals[j] / 100);
    const x = cx + rad * Math.cos(angle);
    const y = cy + rad * Math.sin(angle);
    ctx2.beginPath();
    ctx2.arc(x, y, 4, 0, Math.PI * 2);
    ctx2.fillStyle = colors[j];
    ctx2.fill();
  }

  // Labels
  ctx2.font = '500 11px "Share Tech Mono"';
  ctx2.textAlign = 'center';
  for (let j = 0; j < n; j++) {
    const angle = (j * 2 * Math.PI / n) - Math.PI / 2;
    const lx = cx + (r + 24) * Math.cos(angle);
    const ly = cy + (r + 24) * Math.sin(angle);
    ctx2.fillStyle = colors[j];
    const lines = cats[j].split('\n');
    lines.forEach((line, li) => ctx2.fillText(line, lx, ly + (li * 14) - (lines.length - 1) * 7));
  }
}

drawRadar(); 