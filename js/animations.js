/* ─────────────────────────────────────────
   ANIMATIONS.JS — Scroll Reveal & Counters
   ───────────────────────────────────────── */

/* ─── Scroll Reveal ─── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

reveals.forEach((r) => observer.observe(r));

/* ─── Counter Animation ─── */
function animCounter(el, target) {
  let current = 0;
  const step = Math.ceil(target / 40);
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + (el.dataset.suffix || '');
    if (current >= target) clearInterval(interval);
  }, 40);
}

const metricObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.metric-num').forEach((el) => {
        animCounter(el, parseInt(el.dataset.target));
      });
      metricObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('#metrics').forEach((s) => metricObs.observe(s)); 