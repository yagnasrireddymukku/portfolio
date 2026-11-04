/*
  PROFILE DATA — edit this file to update the Certifications section and the "Ask my AI" assistant.
  Add or remove items; the page rebuilds itself. (Initial list is from the CV; add anything new from LinkedIn.)
*/
const CERTS = [
  { name: 'Generative AI Course', img: 'assets/certificates/generative-ai.png',      org: 'GUVI',       year: 2025, icon: '🧠' },
  { name: 'Blockchain Fundamentals', img: 'assets/certificates/blockchain-fundamentals.png',   org: 'GUVI',       year: 2025, icon: '⛓️' },
  { name: 'S.O.L.I.D Principles',      org: 'Scaler',     year: 2024, icon: '🏗️' },
  { name: 'SAWIT.AI Learnathon', img: 'assets/certificates/sawit-ai-learnathon.png',       org: 'SAWIT.AI',   year: 2024, icon: '🏆' },
  { name: 'ChatGPT for Everyone', img: 'assets/certificates/chatgpt-for-everyone.png',      org: 'GUVI',       year: 2024, icon: '💬' },
  { name: 'AI for Students (GenAI)',   org: 'Nextwave',   year: 2024, icon: '🎓' },
  { name: 'Python Programming', img: 'assets/certificates/python-programming.png',        org: 'GUVI',       year: 2023, icon: '🐍' },
  { name: 'C & HTML Courses',          org: 'Sololearn',  year: 2021, icon: '💻' },
];

(() => {
  const el = document.getElementById('certs');
  if (!el) return;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // certificates with an image first (they get a thumbnail + click-to-enlarge), then the rest
  const list = [...CERTS].sort((a, b) => (b.img ? 1 : 0) - (a.img ? 1 : 0));
  el.innerHTML = list.map((c, i) => `
    <article class="cert tilt reveal${c.img ? ' has-img' : ''}" style="--d:${(i % 4) * .08}s"${c.img ? ` tabindex="0" role="button" data-img="${esc(c.img)}" data-title="${esc(c.name)}" aria-label="View certificate: ${esc(c.name)}"` : ''}>
      ${c.img ? `<div class="cert-thumb"><img src="${esc(c.img)}" alt="${esc(c.name)} certificate" loading="lazy"><span>🔍 View</span></div>` : `<div class="cert-ico">${c.icon || '📜'}</div>`}
      <h3>${esc(c.name)}</h3>
      <p>${esc(c.org)}</p>
      <span class="yr">${esc(c.year)}</span>
    </article>`).join('');

  // lightbox
  const box = document.createElement('div');
  box.className = 'lightbox'; box.hidden = true;
  box.innerHTML = '<button aria-label="Close">✕</button><img alt=""><p></p>';
  document.body.appendChild(box);
  const show = c => { box.querySelector('img').src = c.dataset.img; box.querySelector('img').alt = c.dataset.title; box.querySelector('p').textContent = c.dataset.title; box.hidden = false; document.body.classList.add('lock'); };
  const hide = () => { box.hidden = true; document.body.classList.remove('lock'); };
  el.addEventListener('click', e => { const c = e.target.closest('.has-img'); if (c) show(c); });
  el.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('has-img')) { e.preventDefault(); show(e.target); } });
  box.addEventListener('click', e => { if (e.target !== box.querySelector('img')) hide(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) hide(); });
})();
