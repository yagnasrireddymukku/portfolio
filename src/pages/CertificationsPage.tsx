import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Code, Layers, Globe } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PageHeader } from '../components/common/PageHeader';
import { CertificateCard } from '../components/certifications/CertificateCard';
import { CertificateModal } from '../components/certifications/CertificateModal';
import { CERTIFICATES_DATA } from '../data/certificates';
import type { CertificateCategory, CertificateItem } from '../types';
import { fadeIn, staggerContainer, staggerItem } from '../utils/animations';
import { OpenAILogo, PythonLogo, GuviLogo, ScalerLogo } from '../components/common/TechLogos';

const CATEGORIES: CertificateCategory[] = [
  'All',
  'Artificial Intelligence',
  'Programming',
  'Web Development',
  'Software Engineering'
];

export const CertificationsPage: React.FC = () => {
  useDocumentTitle(
    'Learning & Certifications | YagnaSri Reddy Mukku',
    'Verified certifications in Artificial Intelligence, Python, Generative AI, SOLID principles, and Web Development.'
  );

  const [activeCategory, setActiveCategory] = useState<CertificateCategory>('All');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredCerts = activeCategory === 'All'
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter((c) => c.category === activeCategory);

  const getCategoryIcon = (category: CertificateCategory) => {
    switch (category) {
      case 'Artificial Intelligence':
        return <Brain className="w-3.5 h-3.5" />;
      case 'Programming':
        return <Code className="w-3.5 h-3.5" />;
      case 'Software Engineering':
        return <Layers className="w-3.5 h-3.5" />;
      case 'Web Development':
        return <Globe className="w-3.5 h-3.5" />;
      default:
        return <Award className="w-3.5 h-3.5" />;
    }
  };

  const getCategoryCount = (category: CertificateCategory) => {
    if (category === 'All') return CERTIFICATES_DATA.length;
    return CERTIFICATES_DATA.filter((c) => c.category === category).length;
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container py-8 space-y-10 text-left"
    >
      <PageHeader
        badge="Continuous Mastery"
        title="Learning & Certifications"
        subtitle="Professional credentials and specialized technical coursework tracking my continuous learning journey across AI, software design, and full-stack development."
      />

      {/* Executive Accreditation Metrics Bar */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <motion.div
          variants={staggerItem}
          whileHover={{ y: -3, scale: 1.01 }}
          className="p-5 rounded-3xl bg-white/90 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border shadow-sm hover:border-cyan-500/40 hover:shadow-md transition-all text-left"
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <OpenAILogo className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
              Core Track
            </span>
          </div>
          <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
            Generative AI & LLMs
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Prompt pipelines, diffusion & model engineering
          </p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          whileHover={{ y: -3, scale: 1.01 }}
          className="p-5 rounded-3xl bg-white/90 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border shadow-sm hover:border-blue-500/40 hover:shadow-md transition-all text-left"
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <PythonLogo className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
              Full-Stack
            </span>
          </div>
          <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
            Python & Algorithms
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Core programming, data structures & automation
          </p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          whileHover={{ y: -3, scale: 1.01 }}
          className="p-5 rounded-3xl bg-white/90 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border shadow-sm hover:border-rose-500/40 hover:shadow-md transition-all text-left"
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500">
              <ScalerLogo className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">
              Masterclass
            </span>
          </div>
          <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
            S.O.L.I.D Principles
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Clean code, OOP patterns & architecture
          </p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          whileHover={{ y: -3, scale: 1.01 }}
          className="p-5 rounded-3xl bg-white/90 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border shadow-sm hover:border-emerald-500/40 hover:shadow-md transition-all text-left"
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
              <GuviLogo className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              Verified
            </span>
          </div>
          <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
            Blockchain & Web
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Decentralized systems & web standards
          </p>
        </motion.div>
      </motion.section>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2.5 pb-2 text-left">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 font-semibold border border-brand-500'
                  : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-dark-border hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-dark-surface'
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-white/20 dark:bg-dark-bg/60">
                {getCategoryCount(cat)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Certificates Grid: Spacious, Neat 2-Column Desktop Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        key={activeCategory}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
      >
        {filteredCerts.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            onView={(c) => setSelectedCert(c)}
          />
        ))}
      </motion.div>

      {/* Detail Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </motion.div>
  );
};
