/* ─────────────────────────────────────────
   BOOT.JS — Boot Sequence Timing
   ───────────────────────────────────────── */

const heroContent = document.getElementById('hero-content');
const bootScreen = document.getElementById('boot-screen');

setTimeout(() => {
  bootScreen.classList.add('done');
  setTimeout(() => {
    bootScreen.style.display = 'none';
    heroContent.style.opacity = '1';
  }, 800);
}, 4200); 