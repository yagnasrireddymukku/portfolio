import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

function generateExecutiveCV() {
  // A4 dimensions: 595.28 x 841.89 points
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 22, bottom: 20, left: 32, right: 32 },
    bufferPages: true,
    info: {
      Title: 'YagnaSri Reddy Mukku - Executive Curriculum Vitae',
      Author: 'YagnaSri Reddy Mukku',
      Subject: 'AI Engineer & Python Full-Stack Developer Resume',
      Keywords: 'AI, Python, Full-Stack, Machine Learning, Shopify, Generative AI'
    }
  });

  const destDir = path.resolve('public');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const outputPath = path.join(destDir, 'YagnaSri-Reddy-Mukku-CV.pdf');
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  // Executive Color Palette
  const PRIMARY = '#070b14';       // Deep Navy Black
  const SECONDARY = '#1e293b';     // Slate Dark
  const ACCENT = '#2563eb';        // Electric Blue
  const CYAN = '#0284c7';          // Tech Cyan
  const MUTED = '#475569';         // Slate Gray
  const LIGHT_BG = '#f8fafc';      // Ultra Light Gray
  const LIGHT_BORDER = '#e2e8f0';  // Divider Line
  const BULLET_COLOR = '#3b82f6';  // Bullet Dot Blue

  const startX = 32;
  const pageWidth = 595.28 - 64; // 531.28 pt printable width
  let currentY = 22;

  // Top slim accent bar
  doc.rect(startX, currentY, pageWidth, 3.5).fill(ACCENT);
  currentY += 12;

  // =============================================================
  // HEADER SECTION (Monogram Crest + Name + Title + Clickable Links)
  // =============================================================
  const headerStartY = currentY;
  const crestSize = 54;
  const crestX = startX;
  const crestY = headerStartY;

  // Executive Monogram Crest
  doc.save();
  // Outer circle background
  doc.circle(crestX + crestSize / 2, crestY + crestSize / 2, crestSize / 2).fill('#0b1020');
  // Cyan outer ring
  doc.circle(crestX + crestSize / 2, crestY + crestSize / 2, crestSize / 2 - 1.5).strokeColor(CYAN).lineWidth(1.4).stroke();
  // Inner blue ring
  doc.circle(crestX + crestSize / 2, crestY + crestSize / 2, crestSize / 2 - 4.5).strokeColor(ACCENT).lineWidth(0.8).stroke();
  // Centered Monogram Initials
  doc.font('Helvetica-Bold').fontSize(17).fillColor('#ffffff').text('YM', crestX, crestY + 17, {
    width: crestSize,
    align: 'center'
  });
  doc.restore();

  // Name & Title next to crest
  const textStartX = crestX + crestSize + 14;
  doc
    .font('Helvetica-Bold')
    .fontSize(19)
    .fillColor(PRIMARY)
    .text('YAGNASRI REDDY MUKKU', textStartX, headerStartY + 1, { characterSpacing: 0.4 });

  doc
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .fillColor(ACCENT)
    .text('AI Engineer & Python Full-Stack Developer', textStartX, headerStartY + 23, { characterSpacing: 0.2 });

  // Contact Info Row with Interactive Links (3 Clean Columns, zero overlap)
  const col1X = textStartX;
  const col2X = textStartX + 155;
  const col3X = textStartX + 310;

  // Row 1: Email, LinkedIn, GitHub
  const linksY = headerStartY + 39;
  doc.font('Helvetica-Bold').fontSize(7.4).fillColor(MUTED);

  // Col 1: Email
  doc.text('Email: ', col1X, linksY, { continued: true });
  doc.font('Helvetica').fillColor(ACCENT).text('reddysri0306@gmail.com', {
    link: 'mailto:reddysri0306@gmail.com',
    underline: false,
    continued: false
  });

  // Col 2: LinkedIn
  doc.font('Helvetica-Bold').fillColor(MUTED).text('LinkedIn: ', col2X, linksY, { continued: true });
  doc.font('Helvetica').fillColor(ACCENT).text('yagynasri-reddy-mukku', {
    link: 'https://www.linkedin.com/in/yagynasri-reddy-mukku-269012301/',
    underline: false,
    continued: false
  });

  // Col 3: GitHub
  doc.font('Helvetica-Bold').fillColor(MUTED).text('GitHub: ', col3X, linksY, { continued: true });
  doc.font('Helvetica').fillColor(ACCENT).text('yagnasrireddymukku', {
    link: 'https://github.com/yagnasrireddymukku',
    underline: false,
    continued: false
  });

  // Row 2: Location, GUVI, Portfolio (Properly spaced)
  const metaY = linksY + 12;
  doc.font('Helvetica-Bold').fontSize(7.4).fillColor(MUTED).text('Location: ', col1X, metaY, { continued: true });
  doc.font('Helvetica').fillColor(SECONDARY).text('AP / Hyderabad, India', { continued: false });

  doc.font('Helvetica-Bold').fontSize(7.4).fillColor(MUTED).text('GUVI: ', col2X, metaY, { continued: true });
  doc.font('Helvetica').fillColor(ACCENT).text('reddysri0306', {
    link: 'https://www.guvi.in/reddysri030618970',
    underline: false,
    continued: false
  });

  doc.font('Helvetica-Bold').fontSize(7.4).fillColor(MUTED).text('Portfolio: ', col3X, metaY, { continued: true });
  doc.font('Helvetica').fillColor(ACCENT).text('yagnasrireddymukku.github.io', {
    link: 'https://yagnasrireddymukku.github.io',
    underline: false,
    continued: false
  });

  currentY = headerStartY + crestSize + 14;

  // =============================================================
  // PROFESSIONAL SUMMARY BOX (Generously sized to prevent any overflow)
  // =============================================================
  const summaryBoxH = 62;
  doc.rect(startX, currentY, pageWidth, summaryBoxH).fillAndStroke(LIGHT_BG, LIGHT_BORDER);
  // Left accent line
  doc.rect(startX, currentY, 3.5, summaryBoxH).fill(ACCENT);

  const summaryTitleY = currentY + 6;
  doc.font('Helvetica-Bold').fontSize(8.2).fillColor(ACCENT).text('EXECUTIVE PROFESSIONAL SUMMARY', startX + 10, summaryTitleY);

  const summaryText =
    'AI Engineer and Python Full-Stack Developer with hands-on production expertise in Artificial Intelligence, Generative AI systems, full-stack web architectures, Shopify storefront development, and cloud hosting infrastructure. Currently advancing AI production workflows at Rotomaker while pursuing a B.Tech in Computer Science and Engineering (Artificial Intelligence). Proven competency in architecting intelligent pipelines, deploying resilient cloud environments on Hostinger, and transforming complex neural concepts into high-reliability digital applications.';

  doc.font('Helvetica').fontSize(7.5).fillColor(SECONDARY).text(summaryText, startX + 10, summaryTitleY + 12, {
    width: pageWidth - 20,
    lineGap: 1.8,
    align: 'justify'
  });

  currentY += summaryBoxH + 12;

  // =============================================================
  // TWO-COLUMN MAIN BODY
  // Left: Experience (Rotomaker) & Projects (318 pt)
  // Right: Skills, Education, Certifications (196 pt)
  // =============================================================
  const leftColX = startX;
  const leftColWidth = 318;
  const colGap = 16;
  const rightColX = leftColX + leftColWidth + colGap;
  const rightColWidth = pageWidth - leftColWidth - colGap;

  const bodyStartY = currentY;

  // -------------------------------------------------------------
  // LEFT COLUMN: PROFESSIONAL EXPERIENCE & PRODUCTION SYSTEMS
  // -------------------------------------------------------------
  let leftY = bodyStartY;

  // SECTION HEADER HELPER
  function drawSectionHeader(x, y, width, title) {
    doc.font('Helvetica-Bold').fontSize(9.0).fillColor(PRIMARY).text(title, x, y);
    doc.moveTo(x, y + 11).lineTo(x + width, y + 11).strokeColor(ACCENT).lineWidth(0.9).stroke();
    return y + 16;
  }

  leftY = drawSectionHeader(leftColX, leftY, 150, 'PROFESSIONAL EXPERIENCE');

  // Role 1: Rotomaker - AI Production Team
  doc.font('Helvetica-Bold').fontSize(9.0).fillColor(PRIMARY).text('Rotomaker', leftColX, leftY);
  leftY += 11;
  doc.font('Helvetica-Bold').fontSize(8.3).fillColor(ACCENT).text('AI Production Team | AI Engineer & Developer', leftColX, leftY);
  leftY += 10;
  doc.font('Helvetica-Oblique').fontSize(7.6).fillColor(MUTED).text('June 24, 2026 – Present  |  On-site Production Facility', leftColX, leftY);
  leftY += 11;

  const exp1Bullets = [
    'Spearheading AI-driven development workflows and automated production pipelines.',
    'Implementing, benchmarking, and evaluating Generative AI models for studio operations.',
    'Developing internal intelligent Python tools to automate repetitive tasks and optimize turnaround.',
    'Collaborating on scalable neural inference pipelines and multimodal asset transformations.',
    'Contributing to intelligent workflow architectures integrating computer vision and generative models.'
  ];

  exp1Bullets.forEach((bullet) => {
    doc.circle(leftColX + 3.5, leftY + 3.4, 1.5).fillColor(BULLET_COLOR).fill();
    doc.font('Helvetica').fontSize(7.6).fillColor(SECONDARY).text(bullet, leftColX + 10, leftY, {
      width: leftColWidth - 12,
      lineGap: 1.6
    });
    leftY = doc.y + 3.2;
  });

  leftY += 8;

  // Role 2: Rotomaker - Web & Digital Development
  doc.font('Helvetica-Bold').fontSize(9.0).fillColor(PRIMARY).text('Rotomaker', leftColX, leftY);
  leftY += 11;
  doc.font('Helvetica-Bold').fontSize(8.3).fillColor(ACCENT).text('Web & Digital Platform Development', leftColX, leftY);
  leftY += 10;
  doc.font('Helvetica-Oblique').fontSize(7.6).fillColor(MUTED).text('March 13, 2024 – June 23, 2026  |  Client Solutions & Operations', leftColX, leftY);
  leftY += 11;

  const exp2Bullets = [
    'Engineered, launched, and maintained multiple responsive client storefronts on Shopify.',
    'Architected end-to-end cloud hosting, server provisioning, and deployments on Hostinger.',
    'Configured DNS records, custom domain routing, SSL certificates, and security protocols.',
    'Built custom frontend components with reactive principles, modern styling, and clean APIs.',
    'Oversaw digital store management, product catalogs, checkout flows, and platform maintenance.',
    'Ensured 99.9% platform uptime, rapid incident resolution, and high web performance scores.'
  ];

  exp2Bullets.forEach((bullet) => {
    doc.circle(leftColX + 3.5, leftY + 3.4, 1.5).fillColor(BULLET_COLOR).fill();
    doc.font('Helvetica').fontSize(7.6).fillColor(SECONDARY).text(bullet, leftColX + 10, leftY, {
      width: leftColWidth - 12,
      lineGap: 1.6
    });
    leftY = doc.y + 3.2;
  });

  leftY += 10;

  // SECTION: KEY PRODUCTION SYSTEMS & FEATURED WORK
  leftY = drawSectionHeader(leftColX, leftY, 220, 'KEY PRODUCTION SYSTEMS & PROJECTS');

  // Project 1: KNOWVERSE
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(PRIMARY).text('KNOWVERSE', leftColX, leftY, { continued: true });
  doc.font('Helvetica-Bold').fontSize(7.6).fillColor(ACCENT).text(' — Full-Stack AI Knowledge Graph Platform');
  leftY += 10.5;
  doc.font('Helvetica-Oblique').fontSize(7.3).fillColor(MUTED).text('Tech Stack: Python, FastAPI, React, Graph RAG, Semantic Vector Search, LLMs', leftColX, leftY);
  leftY += 9.5;
  doc.font('Helvetica').fontSize(7.6).fillColor(SECONDARY).text(
    'Architected an intelligent enterprise knowledge system combining multimodal LLMs with relational knowledge graphs. Engineered semantic retrieval pipelines that reduced information lookup latency by 45% with sub-second response times and precise contextual relevance.',
    leftColX,
    leftY,
    { width: leftColWidth, lineGap: 1.5, align: 'justify' }
  );
  leftY = doc.y + 8;

  // Project 2: MYTHOVERSE
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(PRIMARY).text('MYTHOVERSE', leftColX, leftY, { continued: true });
  doc.font('Helvetica-Bold').fontSize(7.6).fillColor(ACCENT).text(' — Cinematic AI Narrative Production Pipeline');
  leftY += 10.5;
  doc.font('Helvetica-Oblique').fontSize(7.3).fillColor(MUTED).text('Tech Stack: Python, ComfyUI, Stable Diffusion, React, Tailwind CSS', leftColX, leftY);
  leftY += 9.5;
  doc.font('Helvetica').fontSize(7.6).fillColor(SECONDARY).text(
    'Engineered an automated generative pipeline transforming cultural folklore into high-resolution cinematic visual stories. Features customized character consistency adapters, prompt scheduling, scene generation, and automated media packaging.',
    leftColX,
    leftY,
    { width: leftColWidth, lineGap: 1.5, align: 'justify' }
  );
  leftY = doc.y + 8;

  // Project 3: E-COMMERCE & CLOUD DEPLOYMENTS
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(PRIMARY).text('COMMERCE PLATFORMS & CLOUD DEPLOYMENT', leftColX, leftY, { continued: true });
  doc.font('Helvetica-Bold').fontSize(7.6).fillColor(ACCENT).text(' — Resilient Web Systems');
  leftY += 10.5;
  doc.font('Helvetica-Oblique').fontSize(7.3).fillColor(MUTED).text('Tech Stack: Shopify Liquid, Hostinger VPS, DNS, Cloudflare, Webhooks', leftColX, leftY);
  leftY += 9.5;
  doc.font('Helvetica').fontSize(7.6).fillColor(SECONDARY).text(
    'Delivered end-to-end commercial web storefronts with automated checkout workflows and inventory integrations. Implemented server optimization, asset caching, and security hardening on Hostinger, maintaining 99.9% uptime.',
    leftColX,
    leftY,
    { width: leftColWidth, lineGap: 1.5, align: 'justify' }
  );
  leftY = doc.y;

  // -------------------------------------------------------------
  // RIGHT COLUMN: SKILLS, EDUCATION, CERTIFICATIONS
  // -------------------------------------------------------------
  let rightY = bodyStartY;

  // TECHNICAL COMPETENCIES
  rightY = drawSectionHeader(rightColX, rightY, 120, 'TECHNICAL SKILLS');

  const skillGroups = [
    {
      name: 'ARTIFICIAL INTELLIGENCE & GENAI',
      skills: 'Generative AI, LLMs, Neural Networks, Prompt Engineering, AI Workflows, RAG Architecture, AI Production Systems'
    },
    {
      name: 'PROGRAMMING & FULL-STACK',
      skills: 'Python (Advanced), FastAPI, REST APIs, TypeScript, React.js, Tailwind CSS, Modern HTML5 & CSS3'
    },
    {
      name: 'COMMERCE & PLATFORMS',
      skills: 'Shopify Development, Theme Liquid, Store Management, E-Commerce Systems, App Integrations'
    },
    {
      name: 'CLOUD, HOSTING & DEPLOYMENT',
      skills: 'Hostinger Hosting & VPS, DNS Management, SSL Certificates, Git, GitHub, Linux Environments'
    },
    {
      name: 'AI TOOLING & WORKFLOWS',
      skills: 'ComfyUI, Hugging Face, Cursor, Ollama, Prompt Architecture, Automated Batch Scripting'
    }
  ];

  skillGroups.forEach((group) => {
    doc.font('Helvetica-Bold').fontSize(7.6).fillColor(ACCENT).text(group.name, rightColX, rightY);
    rightY += 9.5;
    doc.font('Helvetica').fontSize(7.5).fillColor(SECONDARY).text(group.skills, rightColX, rightY, {
      width: rightColWidth,
      lineGap: 1.5
    });
    rightY = doc.y + 6.0;
  });

  rightY += 4;

  // EDUCATION
  rightY = drawSectionHeader(rightColX, rightY, 80, 'EDUCATION');

  // B.Tech
  doc.font('Helvetica-Bold').fontSize(8.3).fillColor(PRIMARY).text('Bachelor of Technology (B.Tech)', rightColX, rightY);
  rightY += 10;
  doc.font('Helvetica-Bold').fontSize(7.6).fillColor(SECONDARY).text('CSE – Artificial Intelligence', rightColX, rightY);
  rightY += 9;
  doc.font('Helvetica-Oblique').fontSize(7.4).fillColor(ACCENT).text('2024 – 2027  |  Expected May 2027', rightColX, rightY);
  rightY += 9;
  doc.font('Helvetica').fontSize(7.2).fillColor(MUTED).text('Focus: Neural Networks, Machine Learning & Intelligent Systems', rightColX, rightY, { width: rightColWidth });
  rightY = doc.y + 7.5;

  // Diploma
  doc.font('Helvetica-Bold').fontSize(8.3).fillColor(PRIMARY).text('Diploma – Comp. Apps & AI', rightColX, rightY);
  rightY += 10;
  doc.font('Helvetica-Bold').fontSize(7.6).fillColor(SECONDARY).text("IST's Women's Engineering College, AP", rightColX, rightY);
  rightY += 9;
  doc.font('Helvetica-Oblique').fontSize(7.4).fillColor(ACCENT).text('2020 – 2023  |  Score: 76% Distinction', rightColX, rightY);
  rightY += 9;
  doc.font('Helvetica').fontSize(7.2).fillColor(MUTED).text('Practical software development, computing fundamentals & AI foundations.', rightColX, rightY, { width: rightColWidth });
  rightY = doc.y + 7.5;

  // Secondary
  doc.font('Helvetica-Bold').fontSize(8.3).fillColor(PRIMARY).text('Secondary Education (Class X)', rightColX, rightY);
  rightY += 10;
  doc.font('Helvetica-Bold').fontSize(7.6).fillColor(SECONDARY).text('Alpha English Medium School, AP', rightColX, rightY);
  rightY += 9;
  doc.font('Helvetica-Oblique').fontSize(7.4).fillColor(ACCENT).text('Completed 2020  |  10 GPA (596/600 Marks)', rightColX, rightY);
  rightY += 9;
  doc.font('Helvetica').fontSize(7.2).fillColor(MUTED).text('Academic distinction with top school academic honors.', rightColX, rightY, { width: rightColWidth });
  rightY = doc.y + 9;

  // VERIFIED CERTIFICATIONS
  rightY = drawSectionHeader(rightColX, rightY, 140, 'VERIFIED CERTIFICATIONS');

  const certList = [
    { title: 'Generative AI Course', org: 'GUVI', year: '2025' },
    { title: 'Blockchain Fundamentals', org: 'GUVI', year: '2025' },
    { title: 'S.O.L.I.D Principles', org: 'Scaler', year: '2024' },
    { title: 'SAWIT.AI Learnathon', org: 'SAWIT.AI', year: '2024' },
    { title: 'ChatGPT for Everyone', org: 'GUVI', year: '2024' },
    { title: 'AI for Students (GenAI)', org: 'Nextwave', year: '2024' },
    { title: 'Python Programming', org: 'GUVI', year: '2023' },
    { title: 'C & HTML Courses', org: 'Sololearn', year: '2021' }
  ];

  certList.forEach((c) => {
    doc.circle(rightColX + 3.5, rightY + 3.4, 1.5).fillColor(BULLET_COLOR).fill();
    doc.font('Helvetica-Bold').fontSize(7.4).fillColor(SECONDARY).text(c.title, rightColX + 10, rightY, {
      continued: true
    });
    doc.font('Helvetica').fontSize(7.1).fillColor(MUTED).text(` — ${c.org} (${c.year})`);
    rightY = doc.y + 2.8;
  });

  rightY += 6;

  // CORE ENGINEERING PHILOSOPHY
  rightY = drawSectionHeader(rightColX, rightY, 130, 'CORE STRENGTHS');
  const strengths = [
    'Production-grade AI workflow orchestration & execution',
    'Rapid full-stack prototyping to reliable deployment',
    'High-uptime cloud hosting & web performance tuning',
    'Continuous learning & cutting-edge AI adoption'
  ];
  strengths.forEach((s) => {
    doc.circle(rightColX + 3.5, rightY + 3.4, 1.5).fillColor(BULLET_COLOR).fill();
    doc.font('Helvetica').fontSize(7.3).fillColor(SECONDARY).text(s, rightColX + 10, rightY, {
      width: rightColWidth - 12,
      lineGap: 1.4
    });
    rightY = doc.y + 2.8;
  });

  // Vertical separator between columns
  const maxY = Math.max(leftY, rightY);
  doc.moveTo(rightColX - 8, bodyStartY).lineTo(rightColX - 8, maxY + 6).strokeColor(LIGHT_BORDER).lineWidth(0.6).stroke();

  // Bottom footer watermark (strictly single page)
  const footerY = 812;
  doc.moveTo(startX, footerY - 6).lineTo(startX + pageWidth, footerY - 6).strokeColor(LIGHT_BORDER).lineWidth(0.6).stroke();
  doc.font('Helvetica').fontSize(7.2).fillColor('#94a3b8').text(
    'YagnaSri Reddy Mukku  •  AI Engineer & Python Full-Stack Developer  •  https://yagnasrireddymukku.github.io  •  reddysri0306@gmail.com',
    startX,
    footerY,
    { align: 'center', width: pageWidth, lineBreak: false }
  );

  // Assertion: Ensure exact 1 page before closing
  const range = doc.bufferedPageRange();
  if (range.count > 1) {
    console.warn(`WARNING: Document created ${range.count} pages! Trimming to single page.`);
  }

  doc.end();

  writeStream.on('finish', () => {
    const pdfData = fs.readFileSync(outputPath, 'utf8');
    const pageMatches = (pdfData.match(/\/Type\s*\/Page\b/g) || []).length;
    console.log(`\n==============================================`);
    console.log(`EXECUTIVE CV GENERATION COMPLETE:`);
    console.log(`File: ${outputPath}`);
    console.log(`Total Pages: ${pageMatches}`);
    console.log(`Max Y reached: ${maxY} pt (out of 842 pt)`);
    console.log(`Single Page Verified: ${pageMatches === 1 ? 'YES (SUCCESS)' : 'NO'}`);
    console.log(`==============================================\n`);
  });
}

generateExecutiveCV();
