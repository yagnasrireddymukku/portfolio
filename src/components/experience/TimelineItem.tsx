import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import type { ExperienceItem } from '../../types';
import { Badge } from '../common/Badge';
import { RotomakerEmblem, getTechIcon } from '../common/TechLogos';

interface TimelineItemProps {
  experience: ExperienceItem;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLast = false }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative flex gap-5 md:gap-7 text-left"
    >
      {/* Left Timeline Spine */}
      <div className="flex flex-col items-center">
        {/* Node Icon */}
        <div
          className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-md transition-all ${
            experience.isCurrent
              ? 'bg-slate-900 border-2 border-cyan-400 text-white shadow-cyan-500/20 ring-4 ring-cyan-500/15'
              : 'bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          <RotomakerEmblem className="w-5 h-5" />
        </div>

        {/* Vertical Progress Line */}
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-brand-500/40 via-cyan-400/30 to-slate-800 my-2 transition-colors" />
        )}
      </div>

      {/* Right Content Card */}
      <div className="flex-1 pb-10">
        <motion.div
          whileHover={{ y: -3, scale: 1.005 }}
          className={`rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#111827] border transition-all ${
            experience.isCurrent
              ? 'border-brand-500/40 dark:border-cyan-500/40 shadow-xl shadow-cyan-500/5'
              : 'border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5 text-left">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                  {experience.roleArea}
                </span>
                <Badge variant={experience.isCurrent ? 'accent' : 'neutral'} size="sm">
                  {experience.badge}
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-600 dark:text-cyan-400">
                <RotomakerEmblem className="w-3.5 h-3.5" />
                <span>{experience.company}</span>
                {experience.team && (
                  <>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600 dark:text-slate-300 font-mono text-xs">
                      {experience.team}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#151B2D] px-3 py-1 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{experience.period}</span>
            </div>
          </div>

          {/* Description: Full Justification */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justified leading-relaxed mb-5">
            {experience.description}
          </p>

          {/* Toggleable Details */}
          {isExpanded && (
            <div className="space-y-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              {/* Focus Areas & Responsibilities */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-2.5 text-left">
                  Key Focus Areas & Impact
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {experience.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-justified">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used with Tech Logos */}
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-2.5 text-left">
                  Applied Technologies & Platforms
                </h4>
                <div className="flex flex-wrap gap-2 text-left">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-[#151B2D] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-2xs"
                    >
                      {getTechIcon(tech, 'w-3.5 h-3.5')}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Collapse/Expand Footer Button */}
          <div className="mt-4 pt-3 flex justify-end">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-brand-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>{isExpanded ? 'Show less' : 'View highlights & tools'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
