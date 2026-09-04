import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { RotomakerEmblem, ShopifyLogo, OpenAILogo, PythonLogo } from '../common/TechLogos';

export const CareerPreview: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-50/50 dark:bg-[#0B1020]/60 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-left">
          <div>
            <Badge variant="brand" className="mb-2.5">Career Journey</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC]">
              Professional Evolution
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 max-w-xl text-justified leading-relaxed">
              From building resilient web platforms and commercial Shopify storefronts to architecting intelligent AI production workflows at Rotomaker.
            </p>
          </div>

          <Button
            to="/experience"
            variant="outline"
            size="sm"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            View Full Experience
          </Button>
        </div>

        {/* Timeline Path Ribbon */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500/20 via-brand-500/40 to-cyan-400/40 -translate-y-1/2 -z-0" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 text-left"
          >
            {/* Step 1 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.01 }}
              className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-mono text-xs font-bold text-brand-600 dark:text-cyan-400 bg-brand-50 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-md border border-brand-200 dark:border-slate-700">
                    MARCH 2024
                  </span>
                  <RotomakerEmblem className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
                  Started at Rotomaker
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
                  Began professional engineering journey delivering commercial web solutions and mastering studio production development.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 mt-4 flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span>Rotomaker Team</span>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.01 }}
              className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/40 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                    2024 – 2026
                  </span>
                  <ShopifyLogo className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
                  Web & Digital Platforms
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
                  Specialized in Shopify e-commerce development, website management, hosting infrastructure, and Hostinger cloud deployments.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 mt-4 flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span>Shopify &bull; Hostinger &bull; DNS</span>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.01 }}
              className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-brand-500/30 dark:border-cyan-500/30 shadow-sm hover:border-cyan-500/60 hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-500/10 dark:bg-cyan-500/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-mono text-xs font-bold text-brand-600 dark:text-cyan-300 bg-brand-500/10 dark:bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-brand-500/20 dark:border-cyan-500/20">
                    JUNE 2026
                  </span>
                  <OpenAILogo className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
                  AI Production Team
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
                  Transitioned internally into AI Production, developing intelligent pipelines, Generative AI models, and internal studio tooling.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 mt-4 flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                <span>GenAI &bull; Model Pipelines</span>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.01 }}
              className="p-6 rounded-3xl bg-gradient-to-b from-brand-600/10 to-transparent dark:bg-[#111827] border border-brand-500/40 dark:border-cyan-400/40 shadow-md hover:border-cyan-400 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    PRESENT
                  </span>
                  <PythonLogo className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
                  AI Engineer & Developer
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
                  Building intelligent software products at the convergence of machine intelligence, scalable software, and digital technology.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 mt-4 flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                <Calendar className="w-3 h-3 text-emerald-400" />
                <span>Active in Industry</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
