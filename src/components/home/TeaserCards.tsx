import React from 'react';
import { motion } from 'framer-motion';
import { Award, Palette, ArrowRight, Sparkles, Mail } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { staggerContainer, staggerItem, fadeUp } from '../../utils/animations';

export const TeaserCards: React.FC = () => {
  return (
    <section className="py-12 md:py-16 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-[#0B1020]/40">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
        >
          {/* Certification Teaser Card */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-brand-500/40 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-3.5">
                <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 text-brand-600 dark:text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <Badge variant="brand">Continuous Mastery</Badge>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                8+ Learning Certifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 text-justified leading-relaxed">
                Structured accreditations across Artificial Intelligence, Generative AI models, Python engineering, SOLID design architecture, and modern web development.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Artificial Intelligence', 'Python Programming', 'Software Engineering', 'Web Development'].map((pill, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <Button
              to="/certifications"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="self-start"
            >
              View Certifications
            </Button>
          </motion.div>

          {/* Creative Side Teaser Card */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/40 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-3.5">
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 text-amber-600 dark:text-amber-400">
                  <Palette className="w-5 h-5" />
                </div>
                <Badge variant="neutral">Beyond Technology</Badge>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Creating Beyond Code
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 text-justified leading-relaxed">
                Exploring color chemistry, fluid dynamics, and tactile craftsmanship through handmade epoxy and UV resin art. A creative dimension complementing engineering precision.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Resin Art', 'UV Resin Art', 'Tactile Crafts', 'Fluid Dynamics'].map((pill, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <Button
              to="/creative"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="self-start"
            >
              Explore Creative Side
            </Button>
          </motion.div>
        </motion.div>

        {/* Big Contact CTA Banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-r from-brand-900/30 via-[#111827] to-cyan-950/30 border border-brand-500/30 dark:border-cyan-500/30 p-8 sm:p-10 text-center overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex p-2.5 rounded-2xl bg-brand-500/10 text-cyan-400 mb-3 border border-cyan-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              Let's Build Something Intelligent.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 text-justified leading-relaxed">
              Whether you are looking to collaborate on AI-driven products, discuss Python full-stack engineering, or explore innovative platforms, my inbox is always open.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Button
                to="/contact"
                variant="glow"
                size="md"
                icon={<Mail className="w-4 h-4" />}
              >
                Get In Touch
              </Button>
              <Button
                to="/about"
                variant="secondary"
                size="md"
              >
                Learn More About Me
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
