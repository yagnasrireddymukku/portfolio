import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Brain, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PageHeader } from '../components/common/PageHeader';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { GithubIcon } from '../components/common/Icons';
import { getTechIcon } from '../components/common/TechLogos';
import { PROJECTS } from '../data/projects';
import type { ProjectCategory } from '../types';
import { fadeUp, fadeIn, staggerContainer } from '../utils/animations';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'AI',
  'Full-Stack',
  'Creative Technology',
  'E-Commerce'
];

export const ProjectsPage: React.FC = () => {
  useDocumentTitle(
    'Projects & Work | YagnaSri Reddy Mukku',
    'Explore featured AI applications, full-stack systems, creative technology initiatives, and e-commerce platforms built by YagnaSri Reddy Mukku.'
  );

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const knowverse = PROJECTS.find((p) => p.slug === 'knowverse');
  const mythoverse = PROJECTS.find((p) => p.slug === 'mythoverse');
  const otherProjects = PROJECTS.filter((p) => p.slug !== 'knowverse' && p.slug !== 'mythoverse');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container py-8 space-y-12"
    >
      <PageHeader
        badge="Engineering Portfolio"
        title="Projects & Work"
        subtitle="A collection of intelligent AI systems, cinematic generative storytelling platforms, full-stack architectures, and high-conversion e-commerce storefronts."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 font-semibold border border-brand-500'
                  : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-surface'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* EDITORIAL PRESENTATION (When on 'All' or specific filter) */}
      {activeCategory === 'All' ? (
        <div className="space-y-16">
          {/* FEATURE 1: KNOWVERSE - Flagship AI Case Study */}
          {knowverse && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="relative rounded-3xl bg-white dark:bg-dark-card border-2 border-brand-500/40 dark:border-cyan-400/40 p-6 sm:p-10 shadow-2xl overflow-hidden group hover:border-brand-500/60 dark:hover:border-cyan-400/60 transition-colors"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 dark:bg-cyan-500/10 rounded-bl-full pointer-events-none blur-3xl" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="accent" size="md">
                    <Brain className="w-4 h-4 text-cyan-400" />
                    <span>FLAGSHIP AI PLATFORM</span>
                  </Badge>
                  <Badge variant="brand" size="sm">
                    {knowverse.status}
                  </Badge>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Role: {knowverse.role}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
                <div className="lg:col-span-7">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                    {knowverse.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justified leading-relaxed mb-6">
                    {knowverse.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {knowverse.keyFeatures.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {knowverse.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border shadow-2xs"
                      >
                        {getTechIcon(tag, 'w-3.5 h-3.5')}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      to={`/project/${knowverse.slug}`}
                      variant="glow"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      View Deep Dive Case Study
                    </Button>
                    {knowverse.liveDemoUrl && (
                      <Button
                        href={knowverse.liveDemoUrl}
                        variant="secondary"
                        size="md"
                        icon={<ExternalLink className="w-4 h-4" />}
                      >
                        Live Demo
                      </Button>
                    )}
                    {knowverse.githubUrl && (
                      <Button
                        href={knowverse.githubUrl}
                        variant="ghost"
                        size="md"
                        icon={<GithubIcon className="w-4 h-4" />}
                      >
                        Repository
                      </Button>
                    )}
                  </div>
                </div>

                {/* Architecture Panel */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200/80 dark:border-dark-border">
                  <div className="flex items-center gap-2 mb-4 text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>Technical Architecture</span>
                  </div>
                  <div className="space-y-2.5 mb-6 text-xs font-mono text-slate-600 dark:text-slate-300">
                    {knowverse.technicalArchitecture.map((arch, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white dark:bg-dark-card border border-slate-200/60 dark:border-dark-border/60">
                        {arch}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    {knowverse.metrics?.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white dark:bg-dark-card border border-slate-200/60 dark:border-dark-border/60">
                        <span className="text-[10px] text-slate-400 block font-mono">{m.label}</span>
                        <span className="text-xs font-bold text-slate-800 dark:text-white">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* FEATURE 2: MYTHOVERSE - Cinematic Storytelling Showcase */}
          {mythoverse && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="relative rounded-3xl bg-gradient-to-tr from-slate-900 via-amber-950/40 to-slate-950 border border-amber-500/40 p-6 sm:p-10 shadow-2xl text-white overflow-hidden group hover:border-amber-500/60 transition-colors"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-bl-full pointer-events-none blur-2xl" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="neutral" size="md" className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>CINEMATIC AI STORYTELLING</span>
                  </Badge>
                  <span className="text-xs font-mono text-amber-200/80 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-500/30">
                    Telugu Epics & Legends
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-300">
                  Role: {mythoverse.role}
                </span>
              </div>

              <div className="max-w-3xl mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  {mythoverse.title}
                </h2>
                <p className="text-amber-200/90 font-mono text-xs mb-3">
                  Ancient Stories. Eternal Legends.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 text-justified leading-relaxed mb-6">
                  {mythoverse.fullDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {mythoverse.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-black/40 text-amber-200 border border-amber-500/20 shadow-2xs"
                    >
                      {getTechIcon(tag, 'w-3.5 h-3.5')}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    to={`/project/${mythoverse.slug}`}
                    variant="glow"
                    size="md"
                    className="bg-amber-600 hover:bg-amber-500 text-white border-amber-400/40"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Explore Production Systems
                  </Button>
                  {mythoverse.liveDemoUrl && (
                    <Button
                      href={mythoverse.liveDemoUrl}
                      variant="secondary"
                      size="md"
                      className="bg-black/60 text-white border-slate-700 hover:bg-black/80"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      Preview Universe
                    </Button>
                  )}
                </div>
              </div>
            </motion.section>
          )}

          {/* OTHER PROJECTS SECTION: Professional Web & Shopify Work */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Professional Web, Commerce & Deployment Systems
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Enterprise client storefronts, server management, and full-stack web platforms.
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      ) : (
        /* Filtered Grid View */
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};
