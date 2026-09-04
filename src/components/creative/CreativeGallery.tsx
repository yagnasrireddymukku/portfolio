import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Maximize2, Sparkles } from 'lucide-react';
import { CREATIVE_GALLERY } from '../../data/creative';
import type { CreativeItem } from '../../types';
import { LightboxModal } from './LightboxModal';
import { Badge } from '../common/Badge';

export const CreativeGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CreativeItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CREATIVE_GALLERY.map((art, index) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedItem(art)}
            className="group relative cursor-pointer rounded-3xl bg-white/90 dark:bg-dark-card/90 border border-slate-200 dark:border-dark-border hover:border-purple-500/40 dark:hover:border-cyan-500/40 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col backdrop-blur-sm"
          >
            {/* Visual Canvas Card */}
            <div
              className={`w-full h-56 bg-gradient-to-tr ${art.accentColor} relative flex items-center justify-center p-6 overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]`}
            >
              <div className="absolute inset-0 bg-tech-grid opacity-20" />
              <div className="text-center p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                <Palette className="w-9 h-9 mx-auto mb-2 text-white" />
                <p className="font-bold text-sm tracking-wide">{art.title}</p>
                <p className="text-[10px] text-white/80 font-mono mt-0.5">{art.medium}</p>
              </div>

              {/* Expand Hint Overlay */}
              <div className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Information snippet */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <Badge variant="brand" size="sm">
                    {art.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-400">
                    Handmade Craft
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-cyan-300 transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed line-clamp-2">
                  {art.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-dark-border/80 flex items-center justify-between text-xs text-brand-600 dark:text-cyan-400 font-semibold">
                <span>Explore Artisan Craft</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <LightboxModal
        item={selectedItem}
        items={CREATIVE_GALLERY}
        onClose={() => setSelectedItem(null)}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />
    </>
  );
};
