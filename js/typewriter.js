/* ─────────────────────────────────────────
   TYPEWRITER.JS — Rotating Role Titles
   ───────────────────────────────────────── */

const roles = [
  'Cloud Engineer',
  'DevOps Enthusiast',
  'Cloud Security Analyst',
  'Serverless Builder',
  'Operating System Wizard',
  'Solutions Architect',
  'Aspiring CTO'
];

let roleIdx = 0, charIdx = 0, deleting = false, waiting = false;
const tw = document.getElementById('typewriter');

function type() {
  if (waiting) return;

  const role = roles[roleIdx];

  if (!deleting) {
    tw.textContent = role.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === role.length) {
      waiting = true;
      const pause = roleIdx === roles.length - 1 ? 20000 : 2200;
      setTimeout(() => { waiting = false; deleting = true; }, pause);
    } else {
      setTimeout(type, 80);
    }
  } else {
    tw.textContent = role.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
    setTimeout(type, 40);
  }
}

setTimeout(type, 4500); 