import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import type { Project } from '../../types';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { getTechIcon } from '../common/TechLogos';

interface ProjectCardProps {
  project: Project;
  featuredOnly?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-brand-500/50 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 overflow-hidden text-left"
    >
      {/* Decorative gradient banner with Tech Icon */}
      <div className={`h-36 w-full bg-gradient-to-r ${project.bannerGradient} relative flex items-center justify-between p-6 border-b border-slate-200/60 dark:border-dark-border/60 overflow-hidden`}>
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors pointer-events-none" />
        <div className="p-3.5 rounded-2xl bg-white/95 dark:bg-dark-bg/90 backdrop-blur-md border border-white/30 dark:border-dark-border shadow-md relative z-10 group-hover:scale-110 transition-transform">
          {getTechIcon(project.tags[0] || project.category, 'w-6 h-6')}
        </div>
        <div className="flex items-center gap-2 relative z-10">
          <Badge variant="accent" size="sm">
            <Sparkles className="w-2.5 h-2.5 mr-1" />
            {project.status}
          </Badge>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2 text-left">
            <span className="text-xs font-mono text-brand-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.role}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-cyan-300 transition-colors text-left">
            <Link to={`/project/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed mb-4 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tags with Micro Tech Icons */}
          <div className="flex flex-wrap gap-1.5 mb-4 text-left">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border"
              >
                <span className="shrink-0">{getTechIcon(tag, 'w-3 h-3')}</span>
                <span>{tag}</span>
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-slate-100 dark:border-dark-border/80 flex items-center justify-between gap-2">
          <Link
            to={`/project/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:text-brand-700 dark:hover:text-cyan-300 transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
                title="View GitHub Repository"
                aria-label={`View ${project.title} GitHub repository`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
                title="View Live Demo"
                aria-label={`View ${project.title} Live Demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
