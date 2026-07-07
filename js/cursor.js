/* ─────────────────────────────────────────
   CURSOR.JS — Custom Cursor Tracking
   ───────────────────────────────────────── */

const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

function initCursorHoverEffects() {
  document.querySelectorAll('a, button, .hex-item, .project-card, .cert-card, .arch-node').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      cursorRing.style.transform = 'translate(-50%, -50%) scale(1.4)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}
initCursorHoverEffects(); 