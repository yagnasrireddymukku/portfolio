import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PROJECTS } from '../data/projects';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { GithubIcon } from '../components/common/Icons';
import { getTechIcon } from '../components/common/TechLogos';
import { fadeIn, fadeUp } from '../utils/animations';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  useDocumentTitle(
    project ? `${project.title} | Projects` : 'Project Not Found',
    project ? project.shortDescription : 'Project details not found'
  );

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container py-8 space-y-10"
    >
      {/* Breadcrumb Navigation */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-600 dark:hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Hero Banner Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border overflow-hidden shadow-sm hover:border-brand-500/30 dark:hover:border-cyan-500/30 transition-all"
      >
        <div className={`h-48 sm:h-56 w-full bg-gradient-to-r ${project.bannerGradient} relative flex flex-col justify-end p-6 sm:p-10 border-b border-slate-200 dark:border-dark-border`}>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="brand">{project.category}</Badge>
            <Badge variant="accent">{project.status}</Badge>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-dark-bg/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
              Role: {project.role}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {project.title}
          </h1>
        </div>

        <div className="p-6 sm:p-10">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justified leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Action links */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100 dark:border-dark-border/80">
            {project.liveDemoUrl && (
              <Button
                href={project.liveDemoUrl}
                variant="glow"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="right"
              >
                Launch Live Demo
              </Button>
            )}
            {project.githubUrl && (
                <Button
                href={project.githubUrl}
                variant="secondary"
                size="md"
                icon={<GithubIcon className="w-4 h-4" />}
              >
                View GitHub Repository
              </Button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Metrics Row */}
      {project.metrics && project.metrics.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm hover:border-brand-500/30 dark:hover:border-cyan-500/30 transition-all"
            >
              <span className="text-xs font-mono text-slate-400 block mb-1">
                {metric.label}
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {metric.value}
              </span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Key Features */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Key Capabilities & Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.keyFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-dark-surface/50 border border-slate-200/80 dark:border-dark-border/80 flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-500 dark:text-cyan-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 text-justified leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Technical Architecture */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Technical Architecture & Stack
          </h2>
        </div>

        <div className="space-y-3">
          {project.technicalArchitecture.map((arch, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-dark-surface/50 border border-slate-200/80 dark:border-dark-border/80 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300"
            >
              {arch}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-4 border-t border-slate-100 dark:border-dark-border/80">
          <p className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 mb-3">
            Technology Stack & Frameworks
          </p>
          <div className="flex flex-wrap gap-2 text-left">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border shadow-2xs"
              >
                {getTechIcon(tag, 'w-3.5 h-3.5')}
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
