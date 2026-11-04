const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// theme
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
root.dataset.theme = saved || 'dark';
$('#theme').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// hamburger drawer
const menu = $('#menu'), burger = $('#burger'), overlay = $('#overlay');
function setMenu(open) {
  menu.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  overlay.classList.toggle('show', open);
  document.body.classList.toggle('lock', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
overlay.addEventListener('click', () => setMenu(false));
menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
addEventListener('resize', () => { if (innerWidth > 900) setMenu(false); });

// scroll: nav shadow, progress bar, back-to-top
const nav = $('#nav'), bar = $('#progress'), toTop = $('#top');
function onScroll() {
  const h = document.documentElement;
  nav.classList.toggle('scrolled', scrollY > 10);
  bar.style.width = (scrollY / (h.scrollHeight - innerHeight || 1)) * 100 + '%';
  toTop.classList.toggle('show', scrollY > 600);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

// reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); setTimeout(() => e.target.classList.add('settled'), 1100); }
}), { threshold: 0.1 });
$$('.reveal').forEach(el => io.observe(el));

// cursor glow (fine pointers only)
if (matchMedia('(hover:hover) and (pointer:fine)').matches && !reduced) {
  const g = $('#glow');
  addEventListener('mousemove', e => { g.style.opacity = 1; g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; });
  // 3D tilt + spotlight on cards
  $$('.tilt, .what, .edu-item, .panel').forEach(c => {
    c.addEventListener('mousemove', e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.transform = `perspective(800px) rotateY(${(x - .5) * 8}deg) rotateX(${(.5 - y) * 8}deg) translateY(-4px)`;
      c.style.setProperty('--mx', x * 100 + '%'); c.style.setProperty('--my', y * 100 + '%');
    });
    c.addEventListener('mouseleave', () => c.style.transform = '');
  });
}

// scroll spy (home page only)
const links = $$('#menu a[href^="#"]');
if (links.length) {
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));
}

// typed roles
const typed = $('#typed');
if (typed) {
  const words = ['AI Developer', 'Full-Stack Developer', 'Python & FastAPI Engineer', 'VFX Workflow Automator'];
  let w = 0, i = 0, del = false;
  (function tick() {
    const word = words[w];
    if (reduced) { typed.textContent = word; w = (w + 1) % words.length; return setTimeout(tick, 2200); }
    typed.textContent = word.slice(0, i);
    if (!del && i === word.length) { del = true; return setTimeout(tick, 1400); }
    if (del && i === 0) { del = false; w = (w + 1) % words.length; }
    i += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 75);
  })();
}

// counters
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now();
  (function step(t) {
    const p = Math.min((t - t0) / 1400, 1);
    el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
  cio.unobserve(el);
}));
$$('[data-count]').forEach(el => cio.observe(el));

// client marquee
const track = $('#track');
if (track) {
  const names = ['Rotomaker AI', 'Meta VFX', 'Matchmation', 'Hollywood CS', 'Smily Kiddos', 'Mike Bags', 'White Panther Creations', 'Lakmé Academy Hyderabad', 'AdsAI'];
  track.innerHTML = [...names, ...names].map(n => `<span>${n}</span>`).join('');
}

// toast + contact form (opens the visitor's mail app)
const toast = $('#toast');
function say(msg) { toast.textContent = msg; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2800); }
const form = $('#form');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const body = `${d.get('msg')}\n\n— ${d.get('name')} (${d.get('email')})`;
  location.href = `mailto:reddysri0306@gmail.com?subject=${encodeURIComponent('Portfolio message from ' + d.get('name'))}&body=${encodeURIComponent(body)}`;
  say('Opening your email app…');
  form.reset();
});

$('#yr').textContent = new Date().getFullYear();

// ---------- v3: loader, network canvas, terminal, rail, magnetic buttons ----------
const loader = $('#loader');
if (loader) {
  const hide = () => { loader.classList.add('done'); setTimeout(() => loader.remove(), 700); };
  if (document.readyState === 'complete') setTimeout(hide, 350); else addEventListener('load', () => setTimeout(hide, 350));
}

// neural-network particle background (pauses off-screen, lighter on phones)
const net = $('#net');
if (net && !reduced && !window.THREE) {
  const ctx = net.getContext('2d'), dpr = Math.min(devicePixelRatio || 1, 2);
  let W = 0, H = 0, pts = [], mx = -999, my = -999, visible = true, raf = 0;
  const size = () => {
    const r = net.parentElement.getBoundingClientRect();
    W = r.width; H = r.height; net.width = W * dpr; net.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(innerWidth < 700 ? 26 : 70, W * H / 15000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    const c = root.dataset.theme === 'dark' ? '217,133,185' : '122,45,94', L = innerWidth < 700 ? 95 : 130;
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      ctx.fillStyle = `rgba(${c},.7)`; ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, 6.283); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < L) { ctx.strokeStyle = `rgba(${c},${(1 - d / L) * .35})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      const dm = Math.hypot(a.x - mx, a.y - my);
      if (dm < 160) { ctx.strokeStyle = `rgba(${c},${(1 - dm / 160) * .6})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke(); }
    }
    raf = visible ? requestAnimationFrame(draw) : 0;
  };
  size(); draw();
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(size, 200); });
  net.parentElement.addEventListener('pointermove', e => { const r = net.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
  net.parentElement.addEventListener('pointerleave', () => { mx = my = -999; });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !raf) draw(); }).observe(net.parentElement);
}

// terminal typing
const term = $('#term');
if (term) {
  const script = [
    ['p', '$ whoami'], ['o', 'Mukku Yagnasri Reddy — AI Developer'],
    ['p', '$ cat stack.txt'], ['o', 'Python · FastAPI · React · TypeScript · PostgreSQL'],
    ['p', '$ ./current_mission --role rotomaker'], ['o', 'Integrating computer-vision models into VFX production workflows ✔'],
    ['p', '$ _'],
  ];
  const html = [];
  const paint = (cur) => term.innerHTML = html.concat(cur ? [cur] : []).join('\n');
  const line = (cls, txt) => `<span class="${cls}">${txt.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</span>`;
  if (reduced) { script.forEach(([c, t]) => html.push(line(c, t))); paint(); }
  else new IntersectionObserver(([e], o) => {
    if (!e.isIntersecting) return; o.disconnect();
    let li = 0, ci = 0;
    (function step() {
      if (li >= script.length) return;
      const [c, t] = script[li];
      if (c === 'o') { html.push(line(c, t)); paint(); li++; return setTimeout(step, 350); }
      ci++; paint(line(c, t.slice(0, ci)));
      if (ci >= t.length) { html.push(line(c, t)); li++; ci = 0; paint(); return setTimeout(step, 400); }
      setTimeout(step, 38);
    })();
  }, { threshold: .4 }).observe(term);
}

// featured works rail
const rail = $('#rail');
if (rail && typeof WORKS !== 'undefined') {
  const escH = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  rail.innerHTML = WORKS.map((w, i) => `
    <a class="work" href="works.html?play=${i}" aria-label="Watch ${escH(w.title)}">
      <div class="thumb" data-no="${String(i + 1).padStart(2, '0')}">
        <div class="ph"><small>Video coming soon</small></div>
        <video muted loop playsinline preload="metadata" ${w.poster ? `poster="${escH(w.poster)}"` : ''} src="${escH(w.video)}#t=0.5"></video>
        <div class="cap"><b aria-hidden="true">${splitLetters(w.title)}</b><p>${escH(w.desc || '')}</p></div>
        <span class="badge">${escH(w.cat)}</span>
        <span class="play"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg><em>Watch</em></span>
      </div>
      <div class="work-body"><h3>${escH(w.title)}</h3><p>${escH(w.desc || '')}</p><span class="go">Watch walkthrough →</span></div>
    </a>`).join('') + '<a class="rail-more" href="works.html"><span>View all works<br>→</span></a>';
  bindWorkFx(rail);
  rail.querySelectorAll('.work').forEach(c => {
    const v = c.querySelector('video'), ph = c.querySelector('.ph');
    v.addEventListener('loadeddata', () => ph.style.display = 'none');
    c.addEventListener('mouseenter', () => { if (v.readyState > 1) v.play().catch(() => {}); });
    c.addEventListener('mouseleave', () => { v.pause(); v.currentTime = .5; });
  });
  const by = d => rail.scrollBy({ left: d * Math.min(380, rail.clientWidth * .8), behavior: 'smooth' });
  $('#railPrev').addEventListener('click', () => by(-1));
  $('#railNext').addEventListener('click', () => by(1));
}

// magnetic buttons (mouse only)
if (matchMedia('(hover:hover) and (pointer:fine)').matches && !reduced) {
  $$('.btn').forEach(b => {
    b.addEventListener('mousemove', e => {
      const r = b.getBoundingClientRect();
      b.style.setProperty('--tx', (e.clientX - r.left - r.width / 2) * .18 + 'px');
      b.style.setProperty('--ty', (e.clientY - r.top - r.height / 2) * .25 + 'px');
    });
    b.addEventListener('mouseleave', () => { b.style.setProperty('--tx', '0px'); b.style.setProperty('--ty', '0px'); });
  });
}

// 3D tech sphere (CSS-projected, draggable, auto-rotating)
const sph = $('#sphere');
if (sph) {
  const words = ['Python','FastAPI','React','TypeScript','PostgreSQL','SQL','Shopify','Liquid','HTML','CSS','Git','GitHub','ComfyUI','Computer Vision','LLMs','RAG','Hostinger','DNS','REST APIs','Nuke','VFX','AI/ML'];
  const items = words.map((w, i) => {
    const n = words.length, y = 1 - 2 * (i + .5) / n, r = Math.sqrt(1 - y * y), th = i * 2.39996;
    const el = document.createElement('span'); el.textContent = w; sph.appendChild(el);
    return { el, x: Math.cos(th) * r, y, z: Math.sin(th) * r };
  });
  let ax = .25, ay = 0, vx = .004, vy = 0, drag = false, hover = false, lx = 0, ly = 0, on = true;
  const paint = () => {
    const R = Math.min(sph.clientWidth, 460) / 2.5, ca = Math.cos(ax), sa = Math.sin(ax), cb = Math.cos(ay), sb = Math.sin(ay);
    items.forEach(o => {
      const y1 = o.y * ca - o.z * sa, z1 = o.y * sa + o.z * ca, x2 = o.x * cb + z1 * sb, z2 = -o.x * sb + z1 * cb, k = (z2 + 1) / 2;
      o.el.style.transform = `translate(-50%,-50%) translate3d(${x2 * R}px,${y1 * R}px,0) scale(${.6 + .5 * k})`;
      o.el.style.opacity = (.28 + .72 * k).toFixed(2);
      o.el.style.zIndex = Math.round(k * 100);
    });
  };
  (function spin() {
    if (on && !drag && !hover && !reduced) { ay += vx; ax += (.25 - ax) * .02; }
    else if (!drag) { ay += vy; vy *= .95; }
    if (on) paint();
    requestAnimationFrame(spin);
  })();
  new IntersectionObserver(([e]) => on = e.isIntersecting).observe(sph);
  sph.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hover = true; });
  sph.addEventListener('pointerleave', () => hover = false);
  sph.addEventListener('pointerdown', e => { drag = true; lx = e.clientX; ly = e.clientY; sph.setPointerCapture(e.pointerId); sph.classList.add('grab'); });
  sph.addEventListener('pointermove', e => {
    if (!drag) return;
    vy = (e.clientX - lx) * .008; ay += vy; ax = Math.max(-1, Math.min(1, ax + (e.clientY - ly) * .006)); lx = e.clientX; ly = e.clientY;
  });
  const up = () => { drag = false; sph.classList.remove('grab'); };
  sph.addEventListener('pointerup', up); sph.addEventListener('pointercancel', up);
}

// decrypt-style reveal for section labels
if (!reduced) {
  const glyphs = '01<>/{}#$%&';
  const eio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    eio.unobserve(e.target);
    const el = e.target, txt = el.dataset.t; let f = 0;
    const id = setInterval(() => {
      f++;
      el.textContent = [...txt].map((c, i) => c === ' ' || i < f / 1.4 ? c : glyphs[(Math.random() * glyphs.length) | 0]).join('');
      if (f > txt.length * 1.4) { clearInterval(id); el.textContent = txt; }
    }, 28);
  }), { threshold: 1 });
  $$('.eyebrow').forEach(el => { el.dataset.t = el.textContent.trim(); eio.observe(el); });
}

// second ticker + custom cursor ring
const track2 = $('#track2');
if (track2) {
  const w2 = ['Generative AI', 'Computer Vision', 'LLMs', 'RAG', 'FastAPI', 'VFX Automation', 'Rotoscoping', 'Shopify', 'React'];
  track2.innerHTML = [...w2, ...w2].map(n => `<span>${n}</span>`).join('');
}
if (matchMedia('(hover:hover) and (pointer:fine)').matches && !reduced) {
  const cur = document.createElement('div'); cur.id = 'cur'; document.body.appendChild(cur);
  let cx = 0, cy = 0, tx = 0, ty = 0;
  addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; cur.style.opacity = 1; });
  document.addEventListener('mouseleave', () => cur.style.opacity = 0);
  document.addEventListener('mouseover', e => cur.classList.toggle('big', !!e.target.closest('a,button,.card,.work,.cert,.what,.edu-item,.panel,#sphere')));
  (function move() { cx += (tx - cx) * .2; cy += (ty - cy) * .2; cur.style.transform = `translate3d(${cx}px,${cy}px,0)`; requestAnimationFrame(move); })();
}

// ---------- v7: scroll-driven 3D ----------
if (!reduced) {
  // 1) sections tilt and recede in depth as they enter and leave the viewport
  const secs = $$('main section:not(.hero)').map(s => ({ s, w: s.querySelector(':scope > .wrap') })).filter(o => o.w);
  let queued = false;
  const depth = () => {
    queued = false;
    const vh = innerHeight, amp = innerWidth < 700 ? 4 : 7;
    secs.forEach(({ s, w }) => {
      const r = s.getBoundingClientRect();
      if (r.bottom < -150 || r.top > vh + 150) return;
      const enter = Math.min(1, Math.max(0, (r.top - vh * .35) / (vh * .65)));
      const leave = Math.min(1, Math.max(0, (vh * .4 - r.bottom) / (vh * .4)));
      const p = enter - leave;
      w.style.transform = `perspective(1400px) rotateX(${(p * amp).toFixed(2)}deg) translateZ(${(-Math.abs(p) * 60).toFixed(1)}px)`;
      w.style.setProperty('--py', p.toFixed(3));
    });
  };
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(depth); } }, { passive: true });
  addEventListener('resize', depth); depth();

  // 2) headings flip in word by word
  const sio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); sio.unobserve(e.target); } }), { threshold: .6 });
  $$('main h2').forEach(h => {
    let i = 0;
    const walk = n => [...n.childNodes].forEach(c => {
      if (c.nodeType === 3) {
        const frag = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(t => {
          if (!t) return;
          if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(' ')); return; }
          const sp = document.createElement('span'); sp.className = 'w' + (n.classList.contains('grad') ? ' grad' : '');
          sp.style.setProperty('--i', i++); sp.textContent = t; frag.appendChild(sp);
        });
        c.replaceWith(frag);
      } else if (c.nodeType === 1) walk(c);
    });
    walk(h);
    h.querySelectorAll('.grad:not(.w)').forEach(g => g.classList.remove('grad'));
    h.classList.add('split'); sio.observe(h);
  });
}

// ---------- work-card effects (shared by the home carousel and the Works page) ----------
// letters fly in one by one on hover (words stay unbroken so long names wrap nicely)
function splitLetters(text) {
  let n = 0;
  const esc = c => c.replace(/[&<>]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]));
  return String(text).split(' ').map(w => `<span class="wd">${[...w].map(c => `<i style="--i:${n++}">${esc(c)}</i>`).join('')}</span>`).join(' ');
}
// 3D tilt + moving light on hover (mouse only)
function bindWorkFx(root) {
  if (!matchMedia('(hover:hover) and (pointer:fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.querySelectorAll('.work').forEach(c => {
    c.addEventListener('mousemove', e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.transform = `perspective(900px) rotateY(${(x - .5) * 10}deg) rotateX(${(.5 - y) * 10}deg) translateY(-8px)`;
      c.style.setProperty('--mx', x * 100 + '%'); c.style.setProperty('--my', y * 100 + '%');
    });
    c.addEventListener('mouseleave', () => { c.style.transform = ''; });
  });
}
