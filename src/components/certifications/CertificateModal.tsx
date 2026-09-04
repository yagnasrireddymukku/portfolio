import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import type { CertificateItem } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { getTechIcon } from '../common/TechLogos';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-title"
        className="relative w-full max-w-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-2xs shrink-0">
              {getTechIcon(certificate.organization, 'w-6 h-6')}
            </div>
            <div>
              <Badge variant="brand">{certificate.category}</Badge>
              <h3 id="cert-title" className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                {certificate.name}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 py-3 border-y border-slate-100 dark:border-dark-border/80 my-4">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Issuer: <strong className="text-slate-900 dark:text-white">{certificate.organization}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Issued: <strong>{certificate.date}</strong></span>
          </div>
          {certificate.credentialId && (
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span className="text-slate-400">ID:</span>
              <span className="bg-slate-100 dark:bg-dark-surface px-2 py-0.5 rounded text-brand-600 dark:text-cyan-400 font-bold">
                {certificate.credentialId}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justified leading-relaxed mb-6">
          {certificate.description}
        </p>

        {/* Skills covered */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-2.5">
            Competencies & Topics Covered
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {certificate.keySkills.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border flex items-center gap-1.5 shadow-2xs"
              >
                <span>{getTechIcon(skill, 'w-3.5 h-3.5')}</span>
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100 dark:border-dark-border/80">
          {certificate.credentialUrl ? (
            <Button
              href={certificate.credentialUrl}
              variant="glow"
              size="md"
              icon={<ExternalLink className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Verify Credential
            </Button>
          ) : (
            <span className="text-xs text-slate-400">Credential ID Verified</span>
          )}

          <Button
            variant="ghost"
            size="md"
            onClick={onClose}
            className="w-full sm:w-auto ml-auto"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
