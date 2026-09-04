import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import type { EducationItem } from '../../types';
import { Badge } from '../common/Badge';

interface EducationCardProps {
  item: EducationItem;
}

export const EducationCard: React.FC<EducationCardProps> = ({ item }) => {
  if (item.isProminent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        whileHover={{ y: -2 }}
        className="relative rounded-3xl bg-gradient-to-b from-brand-600/10 via-white dark:via-dark-card to-white dark:to-dark-card border-2 border-brand-500/50 dark:border-cyan-400/50 p-8 sm:p-10 shadow-xl shadow-brand-500/5 overflow-hidden"
      >
        {/* Glow ambient highlight */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 dark:bg-cyan-500/15 rounded-bl-full pointer-events-none blur-2xl" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyan-400 text-white shadow-md">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <Badge variant="accent" size="sm" className="mb-1">
                Highest Academic Pursuit • Primary Focus
              </Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {item.degree}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-brand-600 dark:text-cyan-400 mt-0.5">
                {item.branch}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-xs font-mono text-slate-600 dark:text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-brand-500 dark:text-cyan-400" />
              <span>{item.period}</span>
            </div>
            {item.status && (
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                {item.status}
              </span>
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justified leading-relaxed mb-6 max-w-3xl">
          {item.summary}
        </p>

        {/* Coursework & Modules */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-dark-border">
          <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3">
            Specialized Curriculum & Technical Focus
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {item.coursework.map((course, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard/Secondary card
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 sm:p-7 shadow-sm hover:border-brand-500/40 dark:hover:border-cyan-500/30 transition-all"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {item.degree}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-brand-600 dark:text-cyan-400">
            {item.branch}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-dark-surface px-2.5 py-1 rounded-md border border-slate-200 dark:border-dark-border">
            <Calendar className="w-3 h-3 text-slate-400" />
            {item.period}
          </span>
        </div>
      </div>

      {(item.institution || item.location) && (
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3">
          {item.institution && <span>{item.institution}</span>}
          {item.institution && item.location && <span>•</span>}
          {item.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {item.location}
            </span>
          )}
        </div>
      )}

      {item.grade && (
        <div className="mb-4">
          <Badge variant="emerald" size="sm">
            <Award className="w-3 h-3 text-emerald-500" />
            <span>Score: {item.grade}</span>
          </Badge>
        </div>
      )}

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed mb-4">
        {item.summary}
      </p>

      {item.coursework && item.coursework.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-dark-border/80">
          {item.coursework.map((course, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-dark-border"
            >
              {course}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};
