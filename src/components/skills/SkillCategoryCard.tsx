import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, ShoppingBag, Server, CheckCircle2, Sparkles } from 'lucide-react';
import type { SkillCategory } from '../../types';
import { getTechIcon } from '../common/TechLogos';
import { Card3D } from '../3d/Card3D';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-blue-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      default:
        return <Server className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <Card3D maxRotation={5} className="h-full rounded-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-3xl bg-white/90 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border p-6 sm:p-8 shadow-md hover:border-brand-500/40 dark:hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 backdrop-blur-md flex flex-col justify-between h-full [transform-style:preserve-3d]"
      >
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-inner text-left">
            {getCategoryIcon(category.icon)}
          </div>
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {category.categoryName}
            </h3>
            <span className="text-xs font-mono text-brand-600 dark:text-cyan-400 flex items-center gap-1.5 mt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{category.skills.length} Specialized Clusters</span>
            </span>
          </div>
        </div>

        {/* Category Description: Full Justification */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 text-justified leading-relaxed">
          {category.description}
        </p>

        {/* Skills Cards Grid */}
        <div className="space-y-4">
          {category.skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-dark-surface/70 border border-slate-200/80 dark:border-dark-border/80 hover:border-brand-500/50 dark:hover:border-cyan-500/40 hover:shadow-md transition-all group"
            >
              {/* Skill Title & Brand Logo Header: Left Aligned */}
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2.5 text-left">
                  <div className="p-2 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/80 shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                    {getTechIcon(skill.name, 'w-4 h-4')}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-500/10 dark:bg-cyan-500/10 text-brand-600 dark:text-cyan-400 border border-brand-500/20 dark:border-cyan-500/20 shrink-0">
                  <Sparkles className="w-2.5 h-2.5 mr-1" />
                  Verified
                </span>
              </div>

              {/* Skill Narrative / Description: Full Justification */}
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3.5 text-justified leading-relaxed">
                {skill.description}
              </p>

              {/* Skill Tag Badges: Left Aligned */}
              <div className="flex flex-wrap gap-1.5 text-left">
                {skill.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border hover:border-cyan-400/40 hover:text-cyan-400 transition-colors shadow-2xs"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </Card3D>
  );
};
