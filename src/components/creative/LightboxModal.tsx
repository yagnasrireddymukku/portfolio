import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Palette } from 'lucide-react';
import type { CreativeItem } from '../../types';
import { Badge } from '../common/Badge';

interface LightboxModalProps {
  item: CreativeItem | null;
  items: CreativeItem[];
  onClose: () => void;
  onNavigate: (newItem: CreativeItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(items[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(items[nextIndex]);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        className="relative z-10 w-full max-w-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* Visual Artwork Showcase Panel */}
        <div
          className={`w-full md:w-1/2 min-h-[260px] md:min-h-[400px] bg-gradient-to-tr ${item.accentColor} flex flex-col items-center justify-center p-8 relative`}
        >
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 bg-tech-grid opacity-20" />
          
          <div className="relative z-10 text-center p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 text-white max-w-xs shadow-lg">
            <Palette className="w-10 h-10 mx-auto mb-3 text-white/90 animate-bounce" />
            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
            <p className="text-xs font-mono text-white/80">{item.medium}</p>
          </div>

          {/* Navigation Arrows inside image */}
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between pointer-events-auto">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-white/80 bg-black/40 px-2 py-0.5 rounded-full">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Info & Details Panel */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="brand">{item.category}</Badge>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {item.title}
            </h3>

            <p className="text-xs font-mono text-brand-600 dark:text-cyan-400 mb-4">
              Medium: {item.medium}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="space-y-2 mb-6">
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Craft Details:
              </p>
              {item.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-dark-border/80 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              Use &larr; &rarr; arrows to navigate • Esc to close
            </span>
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
