import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, ArrowRight } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PageHeader } from '../components/common/PageHeader';
import { EducationCard } from '../components/education/EducationCard';
import { EDUCATION_DATA } from '../data/education';
import { fadeIn, fadeUp, staggerContainer } from '../utils/animations';

export const EducationPage: React.FC = () => {
  useDocumentTitle(
    'Education Journey | YagnaSri Reddy Mukku',
    'Academic foundations: B.Tech in CSE (Artificial Intelligence), Diploma in Computer Applications & AI, and Secondary Education honors.'
  );

  const prominentItem = EDUCATION_DATA.find((e) => e.isProminent);
  const otherItems = EDUCATION_DATA.filter((e) => !e.isProminent);

  const milestones = [
    {
      year: '2020',
      title: 'Secondary Education (Class X)',
      detail: 'Perfect 10 GPA • 596/600 Marks',
      icon: <Award className="w-4 h-4 text-emerald-400" />,
      tag: 'Completed with Honors'
    },
    {
      year: '2020 – 2023',
      title: 'Diploma in Computer Apps & AI',
      detail: 'IST\'s Women\'s Engg College • 76% Distinction',
      icon: <BookOpen className="w-4 h-4 text-blue-400" />,
      tag: 'Distinction'
    },
    {
      year: '2024 – 2027',
      title: 'B.Tech in CSE (Artificial Intelligence)',
      detail: 'Specialized Neural, ML & AI Systems',
      icon: <GraduationCap className="w-4 h-4 text-cyan-400" />,
      tag: 'Currently Pursuing'
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container py-8 space-y-10"
    >
      <PageHeader
        badge="Academic Foundations"
        title="Education Journey"
        subtitle="Formal degrees and technical programs that built the theoretical, algorithmic, and applied foundation of my engineering career."
      />

      {/* Academic Progression Pipeline / Stepper */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm"
      >
        <span className="text-xs font-mono uppercase tracking-wider font-semibold text-brand-600 dark:text-cyan-400 block mb-2">
          Chronological Evolution
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
          Academic Milestone Progression
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative text-left">
          {milestones.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-dark-surface/60 border border-slate-200/80 dark:border-dark-border/80 relative flex flex-col justify-between hover:border-brand-500/40 dark:hover:border-cyan-500/40 hover:shadow-md transition-all text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-brand-600 dark:text-cyan-400 bg-brand-500/10 dark:bg-cyan-500/10 px-2.5 py-1 rounded-md border border-brand-500/20 dark:border-cyan-500/20">
                    {m.year}
                  </span>
                  <div className="p-2 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm">
                    {m.icon}
                  </div>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1 text-left">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-left">
                  {m.detail}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-dark-border/60 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span>{m.tag}</span>
                {idx < milestones.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden md:block" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Prominent B.Tech Card */}
      {prominentItem && (
        <section>
          <EducationCard item={prominentItem} />
        </section>
      )}

      {/* Other Education Programs */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="space-y-6"
      >
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Prior Technical & Secondary Qualifications
        </h3>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {otherItems.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};
