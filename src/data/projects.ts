import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "knowverse",
    slug: "knowverse",
    title: "KNOWVERSE",
    category: "AI",
    shortDescription: "An AI-powered knowledge platform designed to create intelligent, multi-modal knowledge experiences using modern web technologies and AI orchestration.",
    fullDescription: "KNOWVERSE is an advanced AI-powered knowledge platform engineered to revolutionize information synthesis and comprehension. By unifying large language models, structured knowledge graphs, and real-time semantic retrieval, KNOWVERSE enables users to explore complex topics, query multifaceted datasets, and receive cited, context-aware responses in an intuitive user interface.",
    status: "In Development",
    role: "Creator & Lead Developer",
    featured: true,
    bannerGradient: "from-blue-600/30 via-indigo-600/20 to-cyan-500/10",
    iconName: "Brain",
    tags: [
      "Artificial Intelligence",
      "Modern Web Development",
      "React",
      "TypeScript",
      "API Integration",
      "Product Development",
      "Vector Embeddings",
      "Python Backend"
    ],
    metrics: [
      { label: "Architecture", value: "Microservices" },
      { label: "Query Latency", value: "< 450ms" },
      { label: "Model Layer", value: "Generative AI & Embeddings" },
      { label: "Deployment", value: "Cloud Native" }
    ],
    keyFeatures: [
      "Semantic Search & Contextual Synthesis: AI-driven retrieval across heterogeneous document formats with citations.",
      "Dynamic Knowledge Maps: Visual knowledge graphs that adaptively structure complex relational data for easy navigation.",
      "Custom Knowledge Workspaces: Dedicated spaces for team research, automated summaries, and intelligent Q&A.",
      "Responsive High-Performance UI: Built with React and TypeScript for low latency interaction and high frame rates."
    ],
    technicalArchitecture: [
      "Frontend: React 18, TypeScript, Tailwind CSS, State-managed reactive query client",
      "Backend & AI: Python (FastAPI), LangChain/LlamaIndex orchestration, Vector database for semantic indexing",
      "Infrastructure: Containerized microservices with secure API gateway and automated CI/CD pipeline"
    ],
    liveDemoUrl: "https://knowverse.example.com",
    githubUrl: "https://github.com/yagnasri/knowverse"
  },
  {
    id: "mythoverse",
    slug: "mythoverse",
    title: "MYTHOVERSE",
    category: "Creative Technology",
    shortDescription: "A Telugu cinematic storytelling initiative bringing Indian mythology, ancient epics, and legends to life via Generative AI and creative production systems.",
    fullDescription: "MYTHOVERSE is a visionary Telugu cinematic storytelling universe focused on reviving the grandeur of Indian mythology, timeless epics, folklore, and spiritual legends through cutting-edge Artificial Intelligence and creative production pipelines. The project synthesizes high-fidelity generative visual art, AI-assisted cinematics, sound design, and narrative scripting to produce immersive cinematic episodes.",
    status: "Active Production",
    role: "Creator & Creative Director",
    featured: true,
    bannerGradient: "from-amber-600/30 via-rose-600/20 to-purple-600/10",
    iconName: "Sparkles",
    tags: [
      "AI Storytelling",
      "Generative AI",
      "AI Image Generation",
      "AI Video Production",
      "Cinematic Storytelling",
      "Creative Production Systems",
      "Narrative Design",
      "Prompt Engineering"
    ],
    metrics: [
      { label: "Language", value: "Telugu / Multi-lingual" },
      { label: "Medium", value: "Cinematic Digital Media" },
      { label: "Art Engine", value: "Generative Diffusion Models" },
      { label: "Focus", value: "Mythology & Epics" }
    ],
    keyFeatures: [
      "Cinematic AI Visuals: High-detail world-building, mythological character designs, and atmospheric environment renders.",
      "Generative Video Pipelines: AI-driven video synthesis workflows integrating character consistency and dynamic camera motion.",
      "Rich Cultural Preservation: Scripting authentic mythological narratives rooted in ancient Indian epics with cinematic pacing.",
      "Multi-Track Audio Integration: Telugu voice synthesis and orchestral Indian classical sound design."
    ],
    technicalArchitecture: [
      "Visual Generation: Advanced diffusion models, LoRA fine-tuning for authentic Indian aesthetic motifs and attire",
      "Motion & Video: Frame interpolation, AI video synthesis tools, multi-camera composition",
      "Post-Production: Digital color grading, high-resolution upscaling, and spatial audio alignment"
    ],
    liveDemoUrl: "https://mythoverse.example.com",
    githubUrl: "https://github.com/yagnasri/mythoverse"
  },
  {
    id: "shopify-ecommerce-platform",
    slug: "shopify-ecommerce-platform",
    title: "Enterprise E-Commerce & Retail Suite",
    category: "E-Commerce",
    shortDescription: "Custom high-conversion Shopify storefronts, theme architectures, and integrated inventory management for commercial clients.",
    fullDescription: "A comprehensive e-commerce engineering showcase featuring bespoke Shopify themes, automated catalog management, and checkout funnel optimization. Built with compliance, security, and responsive speed at the forefront to maximize conversion and streamline order fulfillment.",
    status: "Deployed & Maintained",
    role: "Lead E-Commerce Developer",
    featured: true,
    bannerGradient: "from-emerald-600/30 via-teal-600/20 to-blue-600/10",
    iconName: "ShoppingBag",
    tags: [
      "Shopify",
      "Shopify Development",
      "Liquid",
      "E-Commerce Platforms",
      "Checkout Funnels",
      "Payment Gateway Integration",
      "Website Management"
    ],
    metrics: [
      { label: "Platform", value: "Shopify Plus / Standard" },
      { label: "Performance", value: "95+ Lighthouse Score" },
      { label: "Uptime", value: "99.98%" },
      { label: "Turnaround", value: "Production-ready" }
    ],
    keyFeatures: [
      "Custom Liquid Theme Development: Modular sections and custom product detail configurations tailored for high conversions.",
      "Third-Party App Integrations: Automated email notifications, live order tracking, and analytics dashboards.",
      "Mobile-First Shopping Experience: Zero friction tap-to-checkout flows optimized for handheld shoppers."
    ],
    technicalArchitecture: [
      "Frontend: Shopify Liquid, JavaScript ES6+, Tailwind CSS",
      "Backend: Shopify Admin GraphQL API, Webhook endpoints",
      "Optimization: CDN asset caching, lazy image rendering, responsive SVGs"
    ],
    liveDemoUrl: "https://example-store.shopify.com",
    githubUrl: "https://github.com/yagnasri/shopify-suite"
  },
  {
    id: "cloud-portal-deployment",
    slug: "cloud-portal-deployment",
    title: "Cloud Scale Digital Portal & Hosting System",
    category: "Full-Stack",
    shortDescription: "Modern corporate web presence with custom CMS integrations, Hostinger cloud infrastructure, DNS configuration, and automated backups.",
    fullDescription: "An end-to-end full-stack digital platform built to deliver responsive, secure web access for business operations. Complete with automated deployment pipelines on Hostinger VPS/shared servers, custom DNS records, SSL certification, and continuous security patching.",
    status: "Production Deployment",
    role: "Full-Stack & Hosting Engineer",
    featured: false,
    bannerGradient: "from-purple-600/30 via-indigo-600/20 to-cyan-600/10",
    iconName: "Server",
    tags: [
      "Full-Stack Development",
      "Hostinger",
      "Website Hosting",
      "Website Deployment",
      "DNS Management",
      "SSL / Security",
      "Web Development"
    ],
    metrics: [
      { label: "Host", value: "Hostinger Cloud" },
      { label: "SSL", value: "Automated Let's Encrypt" },
      { label: "Stack", value: "Python / JS / PHP" },
      { label: "Security", value: "WAF & DDoS Protected" }
    ],
    keyFeatures: [
      "Reliable Server Deployment: Zero-downtime server setups, automated regular backups, and log monitoring.",
      "Domain & DNS Orchestration: Complex routing, subdomains, mail exchanger (MX) setup, and CDN optimization.",
      "Responsive Cross-Device Layout: Clean modern responsive layout designed for enterprise presentation."
    ],
    technicalArchitecture: [
      "Deployment Environment: Hostinger Cloud Server, Nginx / Apache reverse proxy",
      "Security: TLS 1.3 encryption, rate limiting, and regular file integrity checks",
      "Stack: Modern responsive web front with structured API backends"
    ],
    liveDemoUrl: "https://portal.example.com",
    githubUrl: "https://github.com/yagnasri/cloud-portal"
  }
];
