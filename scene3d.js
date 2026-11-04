/* 3D AI neural-core background (Three.js). Falls back silently to the 2D canvas if WebGL/Three.js is unavailable. */
(() => {
  if (!window.THREE) return;
  const canvas = document.getElementById('gl');
  if (!canvas) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;

  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { return; }
  const root = document.documentElement;
  root.classList.add('gl-ok');

  const small = innerWidth < 700;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.5 : 1.75));
  const scene = new THREE.Scene();
  const FOV = 45, camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
  camera.position.z = 9;

  const rig = new THREE.Group(); scene.add(rig);   // position / scale driven by layout
  const core = new THREE.Group(); rig.add(core);   // rotation driven by time, scroll, pointer

  // soft round sprite for points
  const dot = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.35, 'rgba(255,255,255,.7)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  })();

  // ---- neural network on a sphere shell ----
  const N = small ? 64 : 120, nodes = [];
  for (let i = 0; i < N; i++) {
    const y = 1 - 2 * (i + .5) / N, r = Math.sqrt(1 - y * y), th = i * 2.399963;
    nodes.push(new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r).multiplyScalar(1 + (Math.random() - .5) * .16));
  }
  const edges = [], seen = new Set();
  nodes.forEach((a, i) => {
    nodes.map((b, j) => ({ j, d: a.distanceTo(b) })).filter(o => o.j !== i).sort((p, q) => p.d - q.d).slice(0, 3).forEach(o => {
      const k = i < o.j ? i + '-' + o.j : o.j + '-' + i;
      if (!seen.has(k)) { seen.add(k); edges.push([i, o.j]); }
    });
  });
  const linePos = new Float32Array(edges.length * 6);
  edges.forEach(([a, b], k) => { nodes[a].toArray(linePos, k * 6); nodes[b].toArray(linePos, k * 6 + 3); });
  const lineGeo = new THREE.BufferGeometry(); lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
  const lines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ transparent: true }));
  core.add(lines);

  const nodeGeo = new THREE.BufferGeometry();
  nodeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nodes.flatMap(v => v.toArray())), 3));
  const pts = new THREE.Points(nodeGeo, new THREE.PointsMaterial({ map: dot, size: .13, transparent: true, depthWrite: false }));
  core.add(pts);

  // data pulses travelling along edges
  const M = small ? 10 : 18, pulses = Array.from({ length: M }, () => ({ e: (Math.random() * edges.length) | 0, t: Math.random(), s: .35 + Math.random() * .6 }));
  const pulseGeo = new THREE.BufferGeometry(); pulseGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(M * 3), 3));
  const pulsePts = new THREE.Points(pulseGeo, new THREE.PointsMaterial({ map: dot, size: .26, transparent: true, depthWrite: false }));
  core.add(pulsePts);

  // outer wire shell + orbit rings with satellites
  const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.28, 1), new THREE.MeshBasicMaterial({ wireframe: true, transparent: true }));
  core.add(shell);
  const rings = [], sats = [];
  [[1.42, 1.1, .3], [1.58, -.7, .9]].forEach(([r, rx, rz], i) => {
    const g = new THREE.Group(); g.rotation.set(rx, 0, rz);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, .006, 8, 160), new THREE.MeshBasicMaterial({ transparent: true }));
    const sat = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array([r, 0, 0]), 3)), new THREE.PointsMaterial({ map: dot, size: .32, transparent: true, depthWrite: false }));
    const pivot = new THREE.Group(); pivot.add(sat); g.add(ring, pivot); core.add(g);
    rings.push(ring); sats.push({ pivot, sat, speed: .5 + i * .35 });
  });

  // starfield
  const S = small ? 220 : 480, sp = new Float32Array(S * 3);
  for (let i = 0; i < S; i++) { sp[i * 3] = (Math.random() - .5) * 30; sp[i * 3 + 1] = (Math.random() - .5) * 20; sp[i * 3 + 2] = -14 + Math.random() * 16; }
  const starGeo = new THREE.BufferGeometry(); starGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ map: dot, size: .07, transparent: true, depthWrite: false }));
  scene.add(stars);

  // ---- morphing particle cloud: re-forms into a new 3D shape for each section ----
  const P = small ? 900 : 2200, cur = new Float32Array(P * 3), tgt = new Float32Array(P * 3), spd = new Float32Array(P), rnd = Math.random;
  const grid = () => (((rnd() * 5) | 0) - 2) * .5;
  const SHAPES = [
    i => { const y = 1 - 2 * (i + .5) / P, r = Math.sqrt(1 - y * y), th = i * 2.399963; return [Math.cos(th) * r * 1.7, y * 1.7, Math.sin(th) * r * 1.7]; },            // 0 sphere
    i => { const u = Math.floor(i / 3) / (P / 3), t = u * Math.PI * 9, y = (u - .5) * 3.6, k = i % 3, c = Math.cos(t) * .8, sn = Math.sin(t) * .8, m = k === 2 ? rnd() * 2 - 1 : (k ? -1 : 1); return [c * m, y, sn * m]; }, // 1 DNA helix
    () => { const u = rnd() * 6.2832, v = rnd() * 6.2832; return [(1.15 + .5 * Math.cos(v)) * Math.cos(u), .5 * Math.sin(v), (1.15 + .5 * Math.cos(v)) * Math.sin(u)]; },        // 2 torus
    () => { const a = [grid() * 1.5, grid() * 1.5, (rnd() * 2 - 1) * 1.5], r = (rnd() * 3) | 0; return [a[r], a[(r + 1) % 3], a[(r + 2) % 3]]; },                                // 3 lattice
    i => { const side = i % 2 ? 1 : -1, th = Math.acos(2 * rnd() - 1), ph = rnd() * 6.2832, f = 1 + .13 * Math.sin(6 * th) * Math.sin(5 * ph); return [side * .6 + Math.sin(th) * Math.cos(ph) * .85 * f, Math.cos(th) * .95 * f, Math.sin(th) * Math.sin(ph) * 1.15 * f]; }, // 4 brain
    i => { const rr = Math.pow(rnd(), .6) * 2.1, a = rr * 2.1 + (i % 3) * 2.094; return [Math.cos(a) * rr + (rnd() - .5) * .3, (rnd() - .5) * .3 * (1 - rr / 2.4), Math.sin(a) * rr + (rnd() - .5) * .3]; }, // 5 galaxy
  ];
  for (let i = 0; i < P; i++) { cur[i * 3] = (rnd() - .5) * 8; cur[i * 3 + 1] = (rnd() - .5) * 8; cur[i * 3 + 2] = (rnd() - .5) * 8; spd[i] = .02 + rnd() * .05; }
  function setShape(k) { for (let i = 0; i < P; i++) { const v = SHAPES[k](i); tgt[i * 3] = v[0]; tgt[i * 3 + 1] = v[1]; tgt[i * 3 + 2] = v[2]; } }
  setShape(0);
  const cloudGeo = new THREE.BufferGeometry(); cloudGeo.setAttribute('position', new THREE.BufferAttribute(cur, 3));
  const cloud = new THREE.Points(cloudGeo, new THREE.PointsMaterial({ map: dot, size: .06, transparent: true, depthWrite: false }));
  rig.add(cloud);
  const SECTION_SHAPE = { home: 0, about: 4, experience: 1, skills: 3, achievements: 5, certifications: 2, 'works-rail': 0, education: 2, contact: 5 };
  const shapeIO = new IntersectionObserver(es => es.forEach(e => {
    const k = SECTION_SHAPE[e.target.id];
    if (e.isIntersecting && k !== undefined) setShape(k);
  }), { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(sec => shapeIO.observe(sec));
  if (!document.getElementById('home')) setShape(5);

  // ---- theme colours ----
  const mats = [
    [lines.material, 'line', .42], [pts.material, 'node', .95], [pulsePts.material, 'pulse', 1],
    [shell.material, 'shell', .16], [rings[0].material, 'ring', .5], [rings[1].material, 'ring', .35],
    [sats[0].sat.material, 'pulse', 1], [sats[1].sat.material, 'node', 1], [stars.material, 'star', .8], [cloud.material, 'node', 0],
  ];
  const PAL = {
    dark:  { line: 0xd985b9, node: 0xf6cfe8, pulse: 0xffffff, shell: 0xb48cff, ring: 0xe39acb, star: 0xe8d6f2, blend: THREE.AdditiveBlending },
    light: { line: 0x7a2d5e, node: 0x5a2145, pulse: 0xc2569b, shell: 0x7a2d5e, ring: 0xc2569b, star: 0x7a2d5e, blend: THREE.NormalBlending },
  };
  let isDark = true;
  function applyTheme() {
    isDark = root.dataset.theme !== 'light';
    const p = PAL[isDark ? 'dark' : 'light'];
    mats.forEach(([m, k]) => { m.color.setHex(p[k]); m.blending = p.blend; m.needsUpdate = true; });
  }
  applyTheme();
  new MutationObserver(applyTheme).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  // ---- layout: core hugs the hero photo, then drifts to the sides as ambient decoration ----
  let W = innerWidth, H = innerHeight, mx = 0, my = 0, smx = 0, smy = 0;
  function resize() {
    const w = innerWidth, h = innerHeight;
    if (w === W && Math.abs(h - H) < 150 && renderer.domElement.width) return; // ignore mobile URL-bar jitter
    W = w; H = h; renderer.setSize(W, H, false); camera.aspect = W / H; camera.updateProjectionMatrix();
  }
  renderer.setSize(W, H, false); camera.aspect = W / H; camera.updateProjectionMatrix();
  addEventListener('resize', () => { resize(); if (reduced) frame(0); });
  if (fine) addEventListener('pointermove', e => { mx = e.clientX / W - .5; my = e.clientY / H - .5; }, { passive: true });

  const photo = document.querySelector('.photo-wrap');
  const ease = t => t * t * (3 - 2 * t);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  function layout() {
    const visH = 2 * camera.position.z * Math.tan(FOV * Math.PI / 360), visW = visH * camera.aspect;
    const p = ease(clamp(scrollY / (H * .85), 0, 1));
    let ax = visW * .3, ay = 0, as = visH * .2;                       // ambient pose
    ax = visW * .3 * Math.sin(scrollY / H * .9 + 1.1); ay = visH * .06 * Math.sin(scrollY / H * .7);
    let x = ax, y = ay, s = as;
    if (photo) {
      const r = photo.getBoundingClientRect();
      if (r.width) {
        const hx = ((r.left + r.width / 2) / W - .5) * visW, hy = -((r.top + r.height / 2) / H - .5) * visH, hs = (r.width / H) * visH * .5 * 1.42;
        x = hx + (ax - hx) * p; y = hy + (ay - hy) * p; s = hs + (as - hs) * p;
      }
    }
    rig.position.set(x, y, 0); rig.scale.setScalar(s);
    return p;
  }

  const clock = new THREE.Clock(); let raf = 0, t = 0;
  function frame(dt) {
    camera.position.z = 9 + Math.sin(scrollY / H * .5) * 1.2;        // slow camera dolly as you scroll
    const p = layout();
    t += dt;
    smx += (mx - smx) * .05; smy += (my - smy) * .05;
    core.rotation.y = t * .16 + scrollY * .0013 + smx * 1.2;
    core.rotation.x = smy * .8 + Math.sin(t * .3) * .08;
    camera.position.x = smx * .5; camera.position.y = -smy * .35; camera.lookAt(0, 0, 0);
    stars.position.y = scrollY * .0025; stars.rotation.y = t * .01;

    if (isDark) {                                                        // colour drifts pink ⇄ violet with scroll
      const h = .9 + .06 * Math.sin(scrollY / H * .55 + t * .05);
      mats.forEach(([m, k]) => { if (k !== 'star') m.color.setHSL(h, k === 'pulse' ? .25 : .55, { line: .68, node: .86, pulse: .95, shell: .72, ring: .74 }[k]); });
    }
    const fade = 1 - .6 * p;                                            // dim a little when behind content
    mats.forEach(([m, , o]) => { m.opacity = m === stars.material ? o : o * fade; });
    cloud.material.opacity = .22 + .55 * p;
    const u2 = rig.scale.x / 2.2; cloud.material.size = .06 * Math.max(u2, .6);
    const ca = cloudGeo.attributes.position.array, k = dt * 60;
    for (let i = 0; i < P; i++) { const j = i * 3, f = spd[i] * k; ca[j] += (tgt[j] - ca[j]) * f; ca[j + 1] += (tgt[j + 1] - ca[j + 1]) * f; ca[j + 2] += (tgt[j + 2] - ca[j + 2]) * f; }
    cloudGeo.attributes.position.needsUpdate = true;
    cloud.rotation.y = -t * .12 + scrollY * .0008; cloud.rotation.x = Math.sin(t * .2) * .15;
    const u = rig.scale.x / 2.2;                                         // keep dot sizes proportional to the core
    pts.material.size = .13 * u * (1 + .1 * Math.sin(t * 2));
    pulsePts.material.size = .22 * u; sats[0].sat.material.size = sats[1].sat.material.size = .28 * u;

    const pa = pulseGeo.attributes.position.array;
    pulses.forEach((u, i) => {
      u.t += u.s * dt;
      if (u.t >= 1) { u.t = 0; u.e = (Math.random() * edges.length) | 0; }
      const [a, b] = edges[u.e];
      pa[i * 3] = nodes[a].x + (nodes[b].x - nodes[a].x) * u.t;
      pa[i * 3 + 1] = nodes[a].y + (nodes[b].y - nodes[a].y) * u.t;
      pa[i * 3 + 2] = nodes[a].z + (nodes[b].z - nodes[a].z) * u.t;
    });
    pulseGeo.attributes.position.needsUpdate = true;
    sats.forEach(o => { o.pivot.rotation.z = t * o.speed; });
    renderer.render(scene, camera);
  }

  function loop() {
    raf = 0;
    if (document.hidden) return;
    frame(Math.min(clock.getDelta(), .05));
    raf = requestAnimationFrame(loop);
  }
  if (reduced) {
    frame(0); addEventListener('scroll', () => requestAnimationFrame(() => frame(0)), { passive: true });
  } else {
    loop();
    document.addEventListener('visibilitychange', () => { if (!document.hidden && !raf) { clock.getDelta(); loop(); } });
  }
})();
