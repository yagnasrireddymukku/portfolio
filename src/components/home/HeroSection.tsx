import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ChevronDown, Cpu } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { GithubIcon, LinkedinIcon, GuviIcon } from '../common/Icons';
import { PythonLogo, ShopifyLogo, OpenAILogo } from '../common/TechLogos';
import { HeroCanvas3D } from '../3d/HeroCanvas3D';
import { Card3D } from '../3d/Card3D';
import { PERSONAL_INFO } from '../../data/personal';
import { SOCIAL_LINKS } from '../../data/socialLinks';

const ROTATING_SPECIALIZATIONS = [
  'AI Engineering',
  'Generative AI',
  'Python Full-Stack',
  'Shopify & Commerce',
  'Digital Product Systems'
];

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState<string>(PERSONAL_INFO.profilePhoto || '/assets/profile/profile-avatar.svg');
  const [activeHeroView, setActiveHeroView] = useState<'3d' | 'photo'>('3d');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Rotating specialization
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_SPECIALIZATIONS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Subtle interactive background particle matrix
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    const count = Math.min(Math.floor(width / 35), 32);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(54, 96, 222, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particle dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(18, 179, 166, 0.45)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getSocialIcon = (id: string) => {
    switch (id) {
      case 'github':
        return <GithubIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'guvi':
        return <GuviIcon className="w-4 h-4" />;
      case 'email':
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden">
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-70 dark:opacity-80"
      />

      {/* Atmospheric lighting gradients */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 -z-20 w-[550px] h-[400px] bg-gradient-to-tr from-brand-600/15 via-cyan-400/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 -z-20 w-[450px] h-[350px] bg-gradient-to-br from-purple-600/10 via-brand-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="container w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Brand Statement & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="accent" size="md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>AI Production & Full-Stack Systems</span>
              </Badge>
            </div>

            {/* Salutation */}
            <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-2">
              HELLO, I'M
            </p>

            {/* Main Name */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[#F8FAFC] mb-3 uppercase">
              {PERSONAL_INFO.name}
            </h1>

            {/* Role Header */}
            <h2 className="text-base sm:text-lg font-bold text-brand-600 dark:text-cyan-400 mb-3">
              AI Engineer & Python Full-Stack Developer
            </h2>

            {/* Dynamic rotating specialization badge */}
            <div className="flex items-center gap-2 mb-5 h-8">
              <span className="font-mono text-xs sm:text-sm text-slate-400">&gt; Specializing in:</span>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="font-mono font-bold text-xs sm:text-sm px-2.5 py-0.5 rounded-md bg-brand-500/10 dark:bg-cyan-500/10 text-brand-600 dark:text-cyan-300 border border-brand-500/20 dark:border-cyan-500/30"
              >
                {ROTATING_SPECIALIZATIONS[roleIndex]}
              </motion.span>
            </div>

            {/* Brand statement */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justified leading-relaxed max-w-xl mb-7 font-normal">
              Building intelligent applications, digital products, and technology-driven experiences at the intersection of AI, software, and creativity.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button
                to="/projects"
                variant="glow"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Explore My Work
              </Button>
              <Button
                href={PERSONAL_INFO.cvPath}
                download="YagnaSri-Reddy-Mukku-CV.pdf"
                variant="secondary"
                size="lg"
                icon={<Download className="w-4 h-4" />}
                ariaLabel="Download Curriculum Vitae (PDF)"
              >
                Download CV
              </Button>
            </div>

            {/* Professional Social Connect */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-dark-border/80 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mr-1">
                Direct Channels:
              </span>
              {SOCIAL_LINKS.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : undefined}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white/80 dark:bg-dark-card/90 text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-cyan-400 hover:border-brand-500/40 shadow-sm backdrop-blur-sm transition-colors"
                  aria-label={item.name}
                  title={item.name}
                >
                  {getSocialIcon(item.id)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Digital Headquarters Badge & Portrait */}
          {/* Right Column: Interactive 3D Digital Headquarters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Animated Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 via-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-35 dark:opacity-45 animate-pulse-subtle" />

              {/* 3D Perspective Card Container */}
              <Card3D maxRotation={7} className="rounded-3xl">
                <div className="relative rounded-3xl bg-white/90 dark:bg-dark-card/95 border border-slate-200 dark:border-dark-border p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden [transform-style:preserve-3d]">
                  {/* Header telemetry with 3D Mode Switcher */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-dark-border/80 mb-4 [transform:translateZ(20px)]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        rotomaker.ai // production
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100 dark:bg-dark-surface p-1 rounded-xl border border-slate-200 dark:border-dark-border text-[11px] font-mono">
                      <button
                        type="button"
                        onClick={() => setActiveHeroView('3d')}
                        className={`px-2.5 py-0.5 rounded-lg transition-all ${
                          activeHeroView === '3d'
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        3D Core
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveHeroView('photo')}
                        className={`px-2.5 py-0.5 rounded-lg transition-all ${
                          activeHeroView === 'photo'
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Profile ID
                      </button>
                    </div>
                  </div>

                  {/* 3D Interactive View vs Photo View */}
                  <div className="relative mb-4 [transform:translateZ(30px)]">
                    {activeHeroView === '3d' ? (
                      <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950/70 shadow-inner">
                        <HeroCanvas3D className="w-full h-full min-h-0" />
                      </div>
                    ) : (
                      <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden border-2 border-brand-500/40 dark:border-cyan-400/40 shadow-xl bg-slate-900 flex items-center justify-center">
                        <img
                          src={imgSrc}
                          onError={() => setImgSrc('/assets/profile/profile-avatar.svg')}
                          alt={PERSONAL_INFO.name}
                          className="w-full h-full object-cover"
                        />

                        {/* Cybernetic Corner Accents */}
                        <span className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" />
                        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400" />
                        <span className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400" />
                        <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400" />
                      </div>
                    )}
                  </div>

                  {/* Technical Node Matrix */}
                  <div className="grid grid-cols-3 gap-2 text-center mb-3.5 [transform:translateZ(15px)]">
                    <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200/80 dark:border-dark-border hover:border-cyan-400/40 transition-all card-hover-effect">
                      <OpenAILogo className="w-4 h-4 mx-auto mb-1 text-cyan-400" />
                      <p className="text-[9px] font-mono text-slate-400 uppercase">Production</p>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">GenAI / ML</p>
                    </div>
                    <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200/80 dark:border-dark-border hover:border-blue-400/40 transition-all card-hover-effect">
                      <PythonLogo className="w-4 h-4 mx-auto mb-1" />
                      <p className="text-[9px] font-mono text-slate-400 uppercase">Full-Stack</p>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Python / React</p>
                    </div>
                    <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200/80 dark:border-dark-border hover:border-emerald-400/40 transition-all card-hover-effect">
                      <ShopifyLogo className="w-4 h-4 mx-auto mb-1" />
                      <p className="text-[9px] font-mono text-slate-400 uppercase">Commerce</p>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Shopify / DNS</p>
                    </div>
                  </div>

                  {/* Key Status Bar */}
                  <div className="p-2.5 rounded-xl bg-brand-50/70 dark:bg-dark-surface/60 border border-brand-200/60 dark:border-dark-border flex items-center justify-between text-xs [transform:translateZ(10px)]">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-[11px]">Degree Track:</span>
                    </div>
                    <span className="font-mono font-semibold text-brand-600 dark:text-cyan-300 text-[11px]">
                      B.Tech CSE (AI)
                    </span>
                  </div>
                </div>
              </Card3D>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="mt-8 flex flex-col items-center justify-center text-xs font-mono text-slate-400 dark:text-slate-500"
      >
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 mt-0.5 text-cyan-400" />
      </motion.div>
    </section>
  );
};
