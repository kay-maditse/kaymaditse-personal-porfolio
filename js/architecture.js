/* ─────────────────────────────────────────
   ARCHITECTURE.JS — Live Diagram Connections
   ───────────────────────────────────────── */

function drawArchLines() {
  const svg = document.getElementById('arch-svg');
  if (!svg) return;

  const container = svg.parentElement;

  const getCenter = (id) => {
    const el = document.getElementById(id);
    if (!el) return null;
    const pr = container.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    return { x: er.left - pr.left + er.width / 2, y: er.top - pr.top + er.height / 2 };
  };

  const connections = [
    ['an-user', 'an-cf'],
    ['an-cf', 'an-s3'],
    ['an-cf', 'an-apigw'],
    ['an-cf', 'an-r53'],
    ['an-apigw', 'an-lambda'],
    ['an-apigw', 'an-sns'],
    ['an-lambda', 'an-db'],
    ['an-sns', 'an-db']
  ];

  svg.innerHTML = '';

  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
  marker.setAttribute('id', 'a');
  marker.setAttribute('viewBox', '0 0 10 10');
  marker.setAttribute('refX', '8');
  marker.setAttribute('refY', '5');
  marker.setAttribute('markerWidth', '6');
  marker.setAttribute('markerHeight', '6');
  marker.setAttribute('orient', 'auto-start-reverse');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M2 1L8 5L2 9');
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'rgba(0,212,255,0.5)');
  path.setAttribute('stroke-width', '1.5');

  marker.appendChild(path);
  defs.appendChild(marker);
  svg.appendChild(defs);

  connections.forEach(([a, b]) => {
    const p1 = getCenter(a);
    const p2 = getCenter(b);
    if (!p1 || !p2) return;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', p1.x);
    line.setAttribute('y1', p1.y);
    line.setAttribute('x2', p2.x);
    line.setAttribute('y2', p2.y);
    line.setAttribute('stroke', 'rgba(0,212,255,0.25)');
    line.setAttribute('stroke-width', '1');
    line.setAttribute('stroke-dasharray', '4 4');
    line.setAttribute('marker-end', 'url(#a)');
    svg.appendChild(line);
  });
}

setTimeout(drawArchLines, 500);
window.addEventListener('resize', drawArchLines); 