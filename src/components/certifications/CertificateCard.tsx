import React from 'react';
import { Calendar, ExternalLink, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { CertificateItem } from '../../types';
import { Badge } from '../common/Badge';
import { getTechIcon } from '../common/TechLogos';

interface CertificateCardProps {
  certificate: CertificateItem;
  onView: (cert: CertificateItem) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4, scale: 1.008 }}
      className="rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 sm:p-7 shadow-sm hover:border-brand-500/40 dark:hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all flex flex-col justify-between group text-left"
    >
      <div className="space-y-4">
        {/* Top Header: Issuer Badge, Date & Credential Status */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 border-b border-slate-100 dark:border-dark-border/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
              {getTechIcon(certificate.organization, 'w-4 h-4')}
            </div>
            <div className="text-left">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Accreditation
              </span>
              <strong className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                {certificate.organization}
              </strong>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-dark-surface px-2.5 py-1 rounded-lg border border-slate-200 dark:border-dark-border">
              <Calendar className="w-3 h-3 text-slate-400" />
              <span>{certificate.date}</span>
            </span>
            {certificate.credentialId && (
              <span className="hidden sm:inline-flex text-[10px] font-mono text-brand-600 dark:text-cyan-400 bg-brand-500/10 dark:bg-cyan-500/10 px-2 py-1 rounded-lg border border-brand-500/20 dark:border-cyan-500/20">
                ID: {certificate.credentialId}
              </span>
            )}
          </div>
        </div>

        {/* Category & Title */}
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2">
            <Badge variant="brand" size="sm">
              {certificate.category}
            </Badge>
            {certificate.credentialUrl && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="w-2.5 h-2.5" />
                Verified
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-600 dark:group-hover:text-cyan-300 transition-colors">
            {certificate.name}
          </h3>
        </div>

        {/* Description: Full Justification */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-justified leading-relaxed">
          {certificate.description}
        </p>

        {/* Competencies / Key Skills Tags */}
        <div className="space-y-1.5 text-left pt-1">
          <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold block">
            Skills Mastered:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {certificate.keySkills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border shadow-2xs hover:border-cyan-500/40 transition-colors"
              >
                <span>{getTechIcon(skill, 'w-3 h-3')}</span>
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 mt-5 border-t border-slate-100 dark:border-dark-border/80 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onView(certificate)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-cyan-300 transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-dark-surface cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Inspect Curriculum</span>
        </button>

        {certificate.credentialUrl ? (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:text-white px-3 py-1.5 rounded-xl bg-brand-500/10 dark:bg-cyan-500/10 hover:bg-brand-600 dark:hover:bg-cyan-500 border border-brand-500/20 dark:border-cyan-500/30 transition-all shadow-2xs"
            title="Verify Credential Online"
            aria-label={`Verify ${certificate.name} credential`}
          >
            <span>Verify Online</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>Coursework Verified</span>
          </span>
        )}
      </div>
    </motion.div>
  );
};
