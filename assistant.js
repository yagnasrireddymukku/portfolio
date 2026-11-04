/* "Ask my AI" — a small built-in assistant that answers from the portfolio's own content (no external AI service). */
(() => {
  const certs = (typeof CERTS !== 'undefined' ? CERTS : []).map(c => `${c.name} (${c.org}, ${c.year})`).join('; ');
  const KB = [
    { k: ['experience', 'work', 'job', 'rotomaker', 'role', 'career'], a: 'Yagnasri has 2+ years at Rotomaker. Since June 2026 as AI/ML Engineer in VFX Production (integrating computer-vision models into VFX workflows, automating tracking and masking in Python). Before that, March 2024 – June 2026, as Web Developer / Python Full-Stack Developer who built, deployed and maintained 14+ websites.' },
    { k: ['skill', 'tech', 'stack', 'python', 'react', 'fastapi', 'language', 'tools'], a: 'Tech skills: Python, FastAPI & REST APIs, React & TypeScript, HTML & CSS, Shopify & E-commerce, SQL & PostgreSQL, Git & GitHub, and AI/ML & VFX workflows. Spoken languages: English (fluent), Telugu (native), Hindi (basic).' },
    { k: ['project', 'achievement', 'hackathon', 'nuke', 'maskforge', 'detector', 'built'], a: 'Highlights: Nuke Agent & Production Intelligence (event telemetry, offline command queues, heartbeat diagnostics), MaskForge (AI-assisted segmentation for masking & rotoscoping), and an Open-Vocabulary Object Detector (text-prompted zero-shot detection for artists).' },
    { k: ['website', 'works', 'video', 'client', 'shopify', 'portfolio'], a: 'Selected websites: Rotomaker AI, Meta VFX, Matchmation, Hollywood CS, Smily Kiddos, Mike Bags, White Panther Creations, Lakmé Academy Hyderabad and AdsAI. Walkthrough videos are on the My Works page.' },
    { k: ['cert', 'course', 'badge', 'license'], a: 'Certifications: ' + (certs || 'see the Certifications section.') },
    { k: ['education', 'study', 'college', 'degree', 'btech', 'b.tech', 'school', 'gpa'], a: "B.Tech in CSE (Artificial Intelligence) at ABR College of Engineering and Technology (2024–2027, pursuing); Diploma in CSE (AI) at ISTS Women's Engineering College, Rajahmundry (2020–2023, 76%); Class X at Alpha English Medium School, Kanigiri (2020, 596/600)." },
    { k: ['contact', 'email', 'phone', 'hire', 'reach', 'whatsapp', 'location', 'where'], a: 'Email: reddysri0306@gmail.com · Phone/WhatsApp: +91 7997428878 · Based in Hyderabad, India. You can also use the contact form at the bottom of this page.' },
    { k: ['who', 'about', 'yourself', 'hello', 'hi', 'hey'], a: "Hi! I'm the assistant for Mukku Yagnasri Reddy — an AI Developer and full-stack engineer at Rotomaker, building AI-enabled VFX workflows and web platforms. Ask me about experience, skills, projects, certificates or contact." },
  ];
  const chips = ['Experience', 'Skills', 'Projects', 'Certificates', 'Contact'];

  const root = document.createElement('div'); root.className = 'ai';
  root.innerHTML = `
    <button class="ai-fab" aria-label="Ask my AI assistant" aria-expanded="false"><span>✦</span><b>Ask my AI</b></button>
    <section class="ai-panel" role="dialog" aria-label="AI assistant" hidden>
      <header><div><b>Yagnasri's AI</b><small>Built-in assistant · answers from this portfolio</small></div><button class="ai-x" aria-label="Close">✕</button></header>
      <div class="ai-log" aria-live="polite"></div>
      <div class="ai-chips"></div>
      <form class="ai-form"><input aria-label="Your question" placeholder="Ask about skills, projects…" autocomplete="off"><button aria-label="Send">➤</button></form>
    </section>`;
  document.body.appendChild(root);
  const $ = s => root.querySelector(s), log = $('.ai-log'), panel = $('.ai-panel'), fab = $('.ai-fab'), input = $('input');

  const say = (txt, me) => { const d = document.createElement('div'); d.className = 'msg ' + (me ? 'me' : 'bot'); d.textContent = txt; log.appendChild(d); log.scrollTop = log.scrollHeight; return d; };
  function ask(q) {
    say(q, true);
    const low = q.toLowerCase(), best = KB.map(e => ({ e, s: e.k.filter(w => low.includes(w)).length })).sort((a, b) => b.s - a.s)[0];
    const t = say('…'); t.classList.add('typing');
    setTimeout(() => { t.classList.remove('typing'); t.textContent = best.s ? best.e.a : 'I can tell you about experience, skills, projects, certificates, education or contact details — try one of the suggestions below.'; log.scrollTop = log.scrollHeight; }, 550);
  }
  $('.ai-chips').innerHTML = chips.map(c => `<button type="button">${c}</button>`).join('');
  $('.ai-chips').addEventListener('click', e => { if (e.target.tagName === 'BUTTON') ask(e.target.textContent); });
  $('.ai-form').addEventListener('submit', e => { e.preventDefault(); const v = input.value.trim(); if (v) { ask(v); input.value = ''; } });
  const set = open => { panel.hidden = !open; fab.setAttribute('aria-expanded', open); root.classList.toggle('open', open); if (open) { if (!log.children.length) say("Hi! Ask me anything about Yagnasri's work, skills or certificates."); input.focus(); } };
  fab.addEventListener('click', () => set(panel.hidden));
  $('.ai-x').addEventListener('click', () => set(false));
  addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) set(false); });
})();
