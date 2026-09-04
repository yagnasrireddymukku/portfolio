import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { TimelineItem } from '../components/experience/TimelineItem';
import { EXPERIENCES } from '../data/experience';
import { PERSONAL_INFO } from '../data/personal';
import { staggerContainer, staggerItem } from '../utils/animations';
import { RotomakerEmblem, ShopifyLogo, HostingerLogo, OpenAILogo, PythonLogo } from '../components/common/TechLogos';

export const ExperiencePage: React.FC = () => {
  useDocumentTitle(
    'Professional Experience | YagnaSri Reddy Mukku',
    'Career timeline and professional engineering roles at Rotomaker: AI Production Team and Web & Digital Platforms.'
  );

  return (
    <div className="container py-8 space-y-10">
      <PageHeader
        badge="Career Track Record"
        title="Professional Experience"
        subtitle="Chronological progression of my engineering roles at Rotomaker—tracing the transition from web engineering, Shopify, and hosting into enterprise AI production."
      >
        <Button
          href={PERSONAL_INFO.cvPath}
          download="YagnaSri-Reddy-Mukku-CV.pdf"
          variant="glow"
          size="sm"
          icon={<Download className="w-4 h-4" />}
        >
          Download Full CV
        </Button>
      </PageHeader>

      {/* Career Transition Visual Journey Map */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Career Evolution & Transition Path</span>
          </h3>
          <Badge variant="accent" size="sm">2024 – Present</Badge>
        </div>

        {/* Transition Pipeline Stepper with Tech Logos */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5 relative text-left"
        >
          <motion.div variants={staggerItem} whileHover={{ y: -4, scale: 1.02 }} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#151B2D] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-slate-400 uppercase font-semibold">March 2024</span>
              <RotomakerEmblem className="w-4 h-4" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Career Start</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Web Building</p>
          </motion.div>

          <motion.div variants={staggerItem} whileHover={{ y: -4, scale: 1.02 }} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#151B2D] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-slate-400 uppercase font-semibold">E-Commerce</span>
              <ShopifyLogo className="w-4 h-4" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Shopify</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Store Operations</p>
          </motion.div>

          <motion.div variants={staggerItem} whileHover={{ y: -4, scale: 1.02 }} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#151B2D] border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-purple-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-slate-400 uppercase font-semibold">Cloud & DNS</span>
              <HostingerLogo className="w-4 h-4" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Hostinger</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Deploy & Host</p>
          </motion.div>

          <motion.div variants={staggerItem} whileHover={{ y: -4, scale: 1.02 }} className="p-4 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/30 shadow-2xs hover:border-cyan-400 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-brand-600 dark:text-cyan-400 uppercase font-bold">June 2026</span>
              <OpenAILogo className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">AI Production</p>
            <p className="text-[11px] text-brand-600 dark:text-cyan-300 mt-1">Rotomaker Team</p>
          </motion.div>

          <motion.div variants={staggerItem} whileHover={{ y: -4, scale: 1.02 }} className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 shadow-2xs hover:border-emerald-400 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Present
              </span>
              <PythonLogo className="w-4 h-4" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">AI Engineer</p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-300 mt-1">Full-Stack Dev</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <div className="pt-2">
        {EXPERIENCES.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            experience={exp}
            isLast={index === EXPERIENCES.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
