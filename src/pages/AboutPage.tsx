import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Code,
  ShoppingBag,
  Sparkles,
  Download,
  ArrowRight,
  CheckCircle2,
  Compass,
  Target,
  Lightbulb,
  GraduationCap,
  Briefcase,
  Layers,
  MapPin,
  ExternalLink,
  Mail,
  Rocket
} from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PageHeader } from '../components/common/PageHeader';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { PERSONAL_INFO } from '../data/personal';
import { SOCIAL_LINKS, CONTACT_CONFIG } from '../data/socialLinks';
import { fadeUp, fadeIn, staggerContainer, staggerItem } from '../utils/animations';
import { OpenAILogo, ReactLogo, HostingerLogo, ShopifyLogo } from '../components/common/TechLogos';
import { PillarsHologram3D } from '../components/3d/PillarsHologram3D';

export const AboutPage: React.FC = () => {
  useDocumentTitle(
    'About Me | YagnaSri Reddy Mukku',
    'Learn about YagnaSri Reddy Mukku, AI Engineer and Python Full-Stack Developer: journey, values, skills, and approach.'
  );

  const getWhatIDoIcon = (id: string) => {
    switch (id) {
      case 'ai':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'fullstack':
        return <Code className="w-6 h-6 text-blue-400" />;
      case 'platforms':
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  const linkedinUrl = SOCIAL_LINKS.find((s) => s.id === 'linkedin')?.url || '#';

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container py-8 space-y-16"
    >
      {/* Page Header */}
      <PageHeader
        badge="Professional Dossier"
        title="About Me"
        subtitle="AI Engineer, Python Full-Stack Developer, and product builder combining machine intelligence, scalable software, and digital craftsmanship."
      >
        <Button
          href={PERSONAL_INFO.cvPath}
          download="YagnaSri-Reddy-Mukku-CV.pdf"
          variant="glow"
          icon={<Download className="w-4 h-4" />}
        >
          Download CV
        </Button>
        <Button
          to="/contact"
          variant="outline"
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
        >
          Get In Touch
        </Button>
      </PageHeader>

      {/* Section 1: Executive Profile & Story (Icon & Text Bento) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
      >
        <SectionHeader
          badge="Identity & Background"
          title="Who I Am"
          subtitle="A holistic perspective combining enterprise AI production, full-stack web engineering, and computer science academics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Executive Identity Card with Icons */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Photo & Identity */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-brand-500/30 dark:border-cyan-400/40 shadow-md bg-slate-900 shrink-0">
                  <img
                    src={PERSONAL_INFO.profilePhoto || '/assets/profile/profile-avatar.svg'}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/profile/profile-avatar.svg';
                    }}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-dark-card" title="Active in AI Production" />
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-500/10 dark:bg-cyan-500/10 border border-brand-500/20 dark:border-cyan-500/20 text-brand-600 dark:text-cyan-400 text-[11px] font-mono">
                    <Sparkles className="w-3 h-3" />
                    <span>AI ENGINEER</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-1.5">
                    <span>{PERSONAL_INFO.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
                    {PERSONAL_INFO.primaryTitle}
                  </p>
                </div>
              </div>

              {/* At-a-Glance Metadata with Icons */}
              <div className="pt-4 border-t border-slate-100 dark:border-dark-border/80 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-dark-border/40">
                  <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-500" /> Current Position
                  </span>
                  <strong className="text-slate-800 dark:text-slate-200">Rotomaker AI Production</strong>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-dark-border/40">
                  <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-500" /> Academic Degree
                  </span>
                  <strong className="text-slate-800 dark:text-slate-200">B.Tech CSE (AI) &bull; 2027</strong>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-dark-border/40">
                  <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" /> Primary Location
                  </span>
                  <strong className="text-slate-800 dark:text-slate-200">AP / Hyderabad, India</strong>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-dark-border/40">
                  <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-500" /> Direct Email
                  </span>
                  <strong className="text-slate-800 dark:text-slate-200 font-mono text-[11px]">{CONTACT_CONFIG.primaryEmail}</strong>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-500" /> Core Tech Stack
                  </span>
                  <strong className="text-slate-800 dark:text-slate-200">Python, React, TS, GenAI</strong>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons with Icons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <Button
                href={PERSONAL_INFO.cvPath}
                download="YagnaSri-Reddy-Mukku-CV.pdf"
                variant="glow"
                size="sm"
                icon={<Download className="w-3.5 h-3.5" />}
                className="flex-1 justify-center text-xs"
              >
                Download CV
              </Button>
              <Button
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                className="flex-1 justify-center text-xs"
              >
                LinkedIn Profile
              </Button>
            </div>
          </div>

          {/* Right Column: Unified Story Card & Competency Matrix */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Brand Statement Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-500/10 via-cyan-500/10 to-transparent border border-brand-500/20 dark:border-cyan-500/20 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-snug">
                  "{PERSONAL_INFO.brandStatement}"
                </p>
              </div>

              {/* Narrative Story */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justified">
                <p>
                  I am <strong className="text-slate-900 dark:text-white">YagnaSri Reddy Mukku</strong>, an AI Engineer and Python Full-Stack Developer with hands-on industry experience building intelligent production systems, web applications, e-commerce architectures, and creative technology products.
                </p>
                <p>
                  My foundation started in software and full-stack web engineering at <strong className="text-slate-900 dark:text-white">Rotomaker</strong>, where I managed commercial websites, Shopify storefronts, DNS configurations, SSL security, and Hostinger cloud hosting environments.
                </p>
                <p>
                  In June 2026, I transitioned into Rotomaker's dedicated <strong className="text-slate-900 dark:text-white">AI Production Team</strong>, where I design and build automated AI pipelines, integrate Generative AI models into production workflows, and develop internal software tools that elevate studio velocity.
                </p>
                <p>
                  In parallel, I am pursuing my <strong className="text-slate-900 dark:text-white">Bachelor of Technology in Computer Science & Engineering (Artificial Intelligence)</strong>, grounding my day-to-day engineering with deep learning theory, neural algorithms, and data science fundamentals.
                </p>
              </div>
            </div>

            {/* 4 Icon-Driven Competency Badges */}
            <div className="pt-4 border-t border-slate-100 dark:border-dark-border/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-dark-border/60 text-center space-y-1">
                <Brain className="w-5 h-5 text-cyan-500 mx-auto" />
                <p className="text-[10px] font-mono uppercase text-slate-400">AI Pipelines</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Generative AI</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-dark-border/60 text-center space-y-1">
                <Code className="w-5 h-5 text-blue-500 mx-auto" />
                <p className="text-[10px] font-mono uppercase text-slate-400">Full-Stack</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Python &bull; React</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-dark-border/60 text-center space-y-1">
                <ShoppingBag className="w-5 h-5 text-emerald-500 mx-auto" />
                <p className="text-[10px] font-mono uppercase text-slate-400">Platforms</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Shopify &bull; Cloud</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-dark-border/60 text-center space-y-1">
                <GraduationCap className="w-5 h-5 text-purple-500 mx-auto" />
                <p className="text-[10px] font-mono uppercase text-slate-400">Academics</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">B.Tech (AI)</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Career & Academic Journey (Icon-Guided Timeline) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
      >
        <SectionHeader
          badge="Milestones & Trajectory"
          title="Career & Academic Journey"
          subtitle="A clear progression from full-stack web and platform architecture to enterprise AI production and machine intelligence."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-dark-border space-y-8 my-4 ml-2 sm:ml-4">
          {/* Milestone 1: AI Production */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-dark-bg group-hover:scale-125 transition-transform" />
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm hover:border-cyan-500/40 transition-all space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
                  <Brain className="w-3.5 h-3.5" />
                  <span>June 2026 – Present</span>
                </div>
                <span className="text-xs font-mono text-slate-400 font-medium">Rotomaker &bull; Full-time</span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>AI Production Engineer</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-300">
                  AI Team
                </span>
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justified leading-relaxed">
                Spearheading the engineering of AI-driven production workflows, building generative model pipelines, and creating automated tooling to accelerate production velocity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span>Generative model & LLM pipeline design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span>Workflow automation tools for production</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span>Prompt engineering & model inference</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span>Software engineering for AI integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 2: B.Tech CSE AI */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white dark:ring-dark-bg group-hover:scale-125 transition-transform" />
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm hover:border-purple-500/40 transition-all space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-500 dark:text-purple-400 border border-purple-500/20">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>2024 – 2027 (Ongoing)</span>
                </div>
                <span className="text-xs font-mono text-slate-400 font-medium">Undergraduate Degree</span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                B.Tech in Computer Science & Engineering (Artificial Intelligence)
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justified leading-relaxed">
                Complementing commercial production with rigorous academic study in computer science theory, machine learning mathematics, neural networks, and algorithms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span>Deep learning & neural architectures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span>Data structures & algorithm design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span>Applied machine learning mathematics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span>Continuous high-academic achievement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 3: Web & Shopify Platforms */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-dark-bg group-hover:scale-125 transition-transform" />
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm hover:border-emerald-500/40 transition-all space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
                  <Code className="w-3.5 h-3.5" />
                  <span>March 2024 – June 2026</span>
                </div>
                <span className="text-xs font-mono text-slate-400 font-medium">Rotomaker &bull; Full-Stack</span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Web Development & Platform Management
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justified leading-relaxed">
                Engineered commercial digital platforms, managed live Shopify storefronts, configured DNS/SSL protocols, and maintained production web hosting environments on Hostinger.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Shopify e-commerce architecture & inventory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Hostinger cloud deployments & server ops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>DNS routing, domain security & SSL setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Cross-device responsive web experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interactive 3D Multi-Disciplinary Architecture Hologram */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
      >
        <PillarsHologram3D />
      </motion.section>

      {/* Section 3: Core Competencies (What I Do) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
      >
        <SectionHeader
          badge="Core Competencies"
          title="What I Do"
          subtitle="A versatile skill set combining modern AI tools, full-stack software development, and digital platform management."
        />
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PERSONAL_INFO.whatIDo.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-500/30 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getWhatIDoIcon(item.id)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Specific Competency Tags */}
              <div className="pt-3 border-t border-slate-100 dark:border-dark-border/60 flex flex-wrap gap-1.5">
                {item.id === 'ai' && (
                  <>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-500 text-[11px] font-mono">Generative AI</span>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-500 text-[11px] font-mono">Prompt Pipelines</span>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-500 text-[11px] font-mono">Model Automation</span>
                  </>
                )}
                {item.id === 'fullstack' && (
                  <>
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 text-[11px] font-mono">Python</span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 text-[11px] font-mono">React &bull; TS</span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 text-[11px] font-mono">RESTful APIs</span>
                  </>
                )}
                {item.id === 'platforms' && (
                  <>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[11px] font-mono">Shopify Stores</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[11px] font-mono">Hostinger Cloud</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[11px] font-mono">DNS &bull; SSL</span>
                  </>
                )}
                {item.id === 'product' && (
                  <>
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-500 text-[11px] font-mono">Knowverse</span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-500 text-[11px] font-mono">Mythoverse</span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-500 text-[11px] font-mono">Digital Media</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Section 4: Technical Arsenal (Categorized Icon Stack) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
      >
        <SectionHeader
          badge="Tooling & Stack"
          title="Technical Arsenal"
          subtitle="Specialized technologies and developer platforms leveraged in daily production."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Stack 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-3 hover:border-cyan-500/40 transition-all card-hover-effect text-left">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
              <OpenAILogo className="w-5 h-5 text-cyan-400" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              AI & Machine Learning
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
              Python, Generative AI models, prompt engineering pipelines, LLM APIs, and automated inference.
            </p>
          </div>

          {/* Stack 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-3 hover:border-blue-500/40 transition-all card-hover-effect text-left">
            <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <ReactLogo className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Frontend Engineering
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
              React, TypeScript, JavaScript (ES6+), Vite, Tailwind CSS, responsive UI/UX, and component systems.
            </p>
          </div>

          {/* Stack 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-3 hover:border-emerald-500/40 transition-all card-hover-effect text-left">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <HostingerLogo className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Backend & Cloud Ops
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
              Python REST APIs, Hostinger cloud server infrastructure, DNS routing, SSL certificates, and Git.
            </p>
          </div>

          {/* Stack 4 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-3 hover:border-purple-500/40 transition-all card-hover-effect text-left">
            <div className="w-11 h-11 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <ShopifyLogo className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              E-Commerce & Tools
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
              Shopify storefront management, Google Apps Script Webhooks, VS Code, and digital product design.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 5: Engineering Methodology & Philosophy */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
      >
        <SectionHeader
          badge="Methodology"
          title="My Approach"
          subtitle="Core guiding principles behind every software architecture, AI pipeline, and production deployment."
        />
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={staggerItem} className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-cyan-500/30 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">
              Systematic Problem Solving
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
              Deconstructing ambiguous requirements into clean, decoupled software components, establishing transparent data flows, and verifying edge conditions.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-amber-500/30 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">
              Pragmatic Intelligence
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
              Deploying AI models where they genuinely unlock business velocity and resolve friction, prioritizing measurable impact over superficial hype.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-emerald-500/30 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-white">
              End-to-End Reliability
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
              Taking end-to-end ownership from intuitive UI/UX design to robust backend APIs, server hosting, DNS configuration, and uptime.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Section 6: Core Values */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
      >
        <SectionHeader
          badge="Guiding Principles"
          title="Personal Values"
          subtitle="The professional ethos behind my work, engineering standards, and collaborations."
        />
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PERSONAL_INFO.coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-cyan-500/30 transition-all space-y-2"
            >
              <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {val.title}
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Section 7: Next Steps / CTA Banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 dark:bg-dark-card border border-slate-700/60 dark:border-cyan-500/20 shadow-2xl relative overflow-hidden text-left"
      >
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Rocket className="w-3.5 h-3.5" />
            <span>LOOKING FORWARD</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Let's Build Something Meaningful Together
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 text-justified leading-relaxed">
            Whether you have an ambitious AI project, a full-stack product in need of engineering, or an opportunity to discuss, I am always excited to connect and collaborate.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Button to="/projects" variant="glow">
              Explore Projects
            </Button>
            <Button to="/contact" variant="outline">
              Initiate Dialogue
            </Button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};


