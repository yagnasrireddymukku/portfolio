
const grid = document.getElementById('works');
const filters = document.getElementById('filters');
const modal = document.getElementById('modal');
const player = document.getElementById('player');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function render(cat) {
  const list = WORKS.filter(w => cat === 'All' || w.cat === cat);
  grid.innerHTML = list.map((w, i) => `
    <article class="work${cat === 'All' && i === 0 ? ' feature' : ''}" tabindex="0" data-i="${WORKS.indexOf(w)}" style="animation-delay:${i * 60}ms" aria-label="Play ${esc(w.title)}">
      <div class="thumb">
        <div class="ph"><div><b>${esc(w.title)}</b><small>Video coming soon</small></div></div>
        <video muted loop playsinline preload="metadata" ${w.poster ? `poster="${esc(w.poster)}"` : ''} src="${esc(w.video)}#t=0.5"></video>
        <span class="badge">${esc(w.cat)}</span>
        <span class="play"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
      </div>
      <div class="work-body">
        <h3>${esc(w.title)}</h3>
        <p>${esc(w.desc || '')}</p>
        ${w.url ? `<a class="visit" href="${esc(w.url)}" target="_blank" rel="noopener">Visit site ↗</a>` : ''}
      </div>
    </article>`).join('') || '<p class="empty">No works in this category yet.</p>';

  // hide the placeholder once the real video can render; hover = silent preview
  grid.querySelectorAll('.thumb').forEach(t => {
    const v = t.querySelector('video'), ph = t.querySelector('.ph');
    v.addEventListener('loadeddata', () => ph.style.display = 'none');
    const card = t.closest('.work');
    card.addEventListener('mouseenter', () => { if (v.readyState > 1) v.play().catch(() => {}); });
    card.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0.5; });
  });
}

function openVideo(i) {
  const w = WORKS[i];
  player.src = w.video;
  if (w.poster) player.poster = w.poster; else player.removeAttribute('poster');
  document.getElementById('mTitle').textContent = w.title;
  document.getElementById('mDesc').textContent = w.desc || '';
  modal.classList.add('open');
  document.body.classList.add('lock');
  player.play().catch(() => {});
}
function closeVideo() {
  player.pause(); player.removeAttribute('src'); player.load();
  modal.classList.remove('open');
  document.body.classList.remove('lock');
}

grid.addEventListener('click', e => {
  if (e.target.closest('.visit')) return;
  const c = e.target.closest('.work'); if (c) openVideo(+c.dataset.i);
});
grid.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('work')) { e.preventDefault(); openVideo(+e.target.dataset.i); }
});
document.getElementById('mClose').addEventListener('click', closeVideo);
modal.addEventListener('click', e => { if (e.target === modal) closeVideo(); });
addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeVideo(); });
player.addEventListener('error', () => { if (player.getAttribute('src')) say('Video file not found yet — add it to the videos folder.'); });

const cats = ['All', ...new Set(WORKS.map(w => w.cat))];
filters.innerHTML = cats.map((c, i) => `<button role="tab" class="${i ? '' : 'on'}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
filters.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  filters.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
  render(b.dataset.c);
});
render('All');
const play = new URLSearchParams(location.search).get('play');
if (play !== null && WORKS[+play]) openVideo(+play);
