import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, ShoppingBag, Server, Layers } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PageHeader } from '../components/common/PageHeader';
import { SkillCategoryCard } from '../components/skills/SkillCategoryCard';
import { SKILL_CATEGORIES } from '../data/skills';
import { fadeIn, staggerContainer, staggerItem } from '../utils/animations';
import { PythonLogo, ShopifyLogo, HostingerLogo, OpenAILogo } from '../components/common/TechLogos';

export const SkillsPage: React.FC = () => {
  useDocumentTitle(
    'Skills & Technologies | YagnaSri Reddy Mukku',
    'Technical proficiencies across Artificial Intelligence, Python Full-Stack development, Shopify e-commerce, and Hostinger cloud hosting.'
  );

  const [activeTab, setActiveTab] = useState<string>('all');

  const displayedCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'ai':
        return <Brain className="w-4 h-4" />;
      case 'programming':
        return <Code className="w-4 h-4" />;
      case 'ecommerce':
        return <ShoppingBag className="w-4 h-4" />;
      case 'hosting':
        return <Server className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container py-8 space-y-12"
    >
      <PageHeader
        badge="Technical Arsenal"
        title="Skills & Technologies"
        subtitle="A comprehensive overview of competencies across Artificial Intelligence, software architecture, modern web development, and digital platform management."
      />

      {/* Domain Highlights Card Matrix with Brand Logos */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <motion.div
          variants={staggerItem}
          whileHover={{ y: -4, scale: 1.02 }}
          className="p-5 rounded-3xl bg-white/80 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border shadow-sm hover:border-cyan-500/40 hover:shadow-lg transition-all text-left"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400">
              <OpenAILogo className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
              Production
            </span>
          </div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
            Generative AI & ML
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Prompt pipelines, LLM APIs & diffusion
          </p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          whileHover={{ y: -4, scale: 1.02 }}
          className="p-5 rounded-3xl bg-white/80 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border shadow-sm hover:border-blue-500/40 hover:shadow-lg transition-all text-left"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-400">
              <PythonLogo className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
              Full-Stack
            </span>
          </div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
            Python & React
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Backend APIs, TypeScript & modern UI
          </p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          whileHover={{ y: -4, scale: 1.02 }}
          className="p-5 rounded-3xl bg-white/80 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border shadow-sm hover:border-emerald-500/40 hover:shadow-lg transition-all text-left"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400">
              <ShopifyLogo className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              Commerce
            </span>
          </div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
            Shopify Platforms
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Custom storefronts & retail funnels
          </p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          whileHover={{ y: -4, scale: 1.02 }}
          className="p-5 rounded-3xl bg-white/80 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border shadow-sm hover:border-purple-500/40 hover:shadow-lg transition-all text-left"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-400">
              <HostingerLogo className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">
              Cloud & DNS
            </span>
          </div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
            Hostinger Cloud
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            DNS routing, SSL security & uptime
          </p>
        </motion.div>
      </motion.section>

      {/* Category Navigation Pills */}
      <div className="flex flex-wrap items-center gap-2.5 pb-2 text-left">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === 'all'
              ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 font-semibold border border-brand-500'
              : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-dark-border hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-dark-surface'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>All Domains</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-white/20 dark:bg-dark-bg/60">
            {totalSkillsCount}
          </span>
        </button>
        {SKILL_CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 font-semibold border border-brand-500'
                  : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-dark-border hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-dark-surface'
              }`}
            >
              {getDomainIcon(cat.id)}
              <span>{cat.categoryName}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-white/20 dark:bg-dark-bg/60">
                {cat.skills.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Categories Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        key={activeTab}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        {displayedCategories.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </motion.div>
    </motion.div>
  );
};
