import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PageHeader } from '../components/common/PageHeader';
import { CreativeGallery } from '../components/creative/CreativeGallery';
import { CREATIVE_STATEMENT } from '../data/creative';
import { Badge } from '../components/common/Badge';
import { fadeIn, fadeUp, staggerContainer, staggerItem } from '../utils/animations';

export const CreativePage: React.FC = () => {
  useDocumentTitle(
    'Beyond Technology | YagnaSri Reddy Mukku',
    'Exploring creativity, color chemistry, and craftsmanship through handmade resin and UV resin art.'
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container py-8 space-y-10"
    >
      <PageHeader
        badge="Creative Dimension"
        title="Beyond Technology"
        subtitle="Creating Beyond Code — exploring color chemistry, fluid dynamics, and tactile craftsmanship through handmade resin art."
      />

      {/* Identity Clarification Banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="p-4 sm:p-5 rounded-2xl bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/20 text-xs sm:text-sm text-brand-800 dark:text-cyan-200 flex items-center gap-3"
      >
        <Sparkles className="w-5 h-5 text-brand-500 dark:text-cyan-400 shrink-0" />
        <p className="text-justified">
          <strong>Note on Professional Identity:</strong> My core profession is an <strong>AI Engineer & Python Full-Stack Developer</strong>. This creative portfolio showcases an artistic passion that enriches my design intuition and eye for detail.
        </p>
      </motion.div>

      {/* Narrative Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <div className="lg:col-span-2 p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            The Craft of Resin & UV Art
          </h3>
          <p className="text-justified">
            {CREATIVE_STATEMENT.statement}
          </p>
          <p className="text-justified">
            {CREATIVE_STATEMENT.philosophy}
          </p>
        </div>

        {/* Medium Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {CREATIVE_STATEMENT.areas.map((area, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-brand-500/30 dark:hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  {area.title}
                </h4>
                <Badge variant="accent" size="sm">{area.badge}</Badge>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Interactive Gallery */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Handmade Artwork Showcase
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select any piece to inspect details, techniques, and pigments in high-resolution lightbox view.
            </p>
          </div>
        </div>

        <CreativeGallery />
      </motion.section>
    </motion.div>
  );
};
