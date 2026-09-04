import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { OpenAILogo, PythonLogo, ShopifyLogo } from '../common/TechLogos';

const OVERVIEW_AREAS = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Developing intelligent pipelines, Generative AI models, and automated production workflows for modern studio operations.",
    link: "/skills",
    linkText: "Explore AI Skills",
    icon: () => <OpenAILogo className="w-5 h-5 text-cyan-400" />,
    accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Architecting end-to-end web applications combining robust Python backends, reactive React interfaces, and clean APIs.",
    link: "/projects",
    linkText: "View Applications",
    icon: () => <PythonLogo className="w-5 h-5" />,
    accent: "text-blue-400 bg-blue-500/10 border-blue-500/20"
  },
  {
    id: "platforms",
    title: "Digital Platforms & Hosting",
    description: "Engineering high-conversion Shopify storefronts, full site management, DNS, and reliable Hostinger deployments.",
    link: "/experience",
    linkText: "View Platform Experience",
    icon: () => <ShopifyLogo className="w-5 h-5" />,
    accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
  },
  {
    id: "creative",
    title: "Creative Technology",
    description: "Bridging AI image/video generation, mythological storytelling, and tactile handmade resin craftsmanship.",
    link: "/creative",
    linkText: "Discover Creative Side",
    icon: () => <Sparkles className="w-5 h-5 text-amber-400" />,
    accent: "text-amber-400 bg-amber-500/10 border-amber-500/20"
  }
];

export const QuickOverview: React.FC = () => {
  return (
    <section className="py-12 md:py-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="container">
        <div className="text-left max-w-2xl mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-cyan-400 mb-2 font-semibold">
            Core Disciplines
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC]">
            Engineering Across the Digital Spectrum
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {OVERVIEW_AREAS.map((area) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.id}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/90 hover:border-brand-500/50 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-xl transition-all duration-300 text-left"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${area.accent} group-hover:scale-105 transition-transform`}>
                    <IconComponent />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-cyan-300 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                <Link
                  to={area.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-cyan-400 group-hover:gap-2 transition-all"
                >
                  <span>{area.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
