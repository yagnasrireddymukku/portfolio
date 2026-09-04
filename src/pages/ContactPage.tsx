import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Download, MapPin, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { PageHeader } from '../components/common/PageHeader';
import { ContactForm } from '../components/contact/ContactForm';
import { Button } from '../components/common/Button';
import { GithubIcon, LinkedinIcon, GuviIcon } from '../components/common/Icons';
import { PERSONAL_INFO } from '../data/personal';
import { SOCIAL_LINKS, CONTACT_CONFIG } from '../data/socialLinks';
import { fadeIn, staggerContainer, staggerItem } from '../utils/animations';

export const ContactPage: React.FC = () => {
  useDocumentTitle(
    'Contact Me | YagnaSri Reddy Mukku',
    'Get in touch with YagnaSri Reddy Mukku for AI engineering opportunities, full-stack development, and digital product collaborations.'
  );

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_CONFIG.primaryEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container py-8 space-y-10"
    >
      <PageHeader
        badge="Initiate Dialogue"
        title="Let's Build Something Intelligent"
        subtitle="I'm always interested in exploring new ideas, technology, Artificial Intelligence, and meaningful projects. Feel free to connect with me."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Executive Details & Direct Channels */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 space-y-6"
        >
          {/* Executive Profile Card */}
          <motion.div
            variants={staggerItem}
            className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm hover:border-brand-500/30 dark:hover:border-cyan-500/30 transition-all space-y-3"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 dark:bg-cyan-500/10 border border-brand-500/20 dark:border-cyan-500/20 text-brand-600 dark:text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3 h-3" />
              <span>AI ENGINEER &bull; DEVELOPER</span>
            </div>

            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {PERSONAL_INFO.name}
              </h3>
              <span title="Verified Professional" className="inline-flex items-center text-sky-500 dark:text-sky-400">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
              </span>
            </div>

            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              AI Production Engineer <span className="text-slate-400">&bull;</span> Rotomaker
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              B.Tech in Computer Science & Engineering (Artificial Intelligence)
            </p>
          </motion.div>

          {/* Direct Email Card */}
          <motion.div
            variants={staggerItem}
            className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm hover:border-brand-500/30 dark:hover:border-cyan-500/30 transition-all"
          >
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block mb-2">
              Direct Inquiries
            </span>
            <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200/80 dark:border-dark-border">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-brand-500 dark:text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono truncate text-slate-800 dark:text-slate-200">
                  {CONTACT_CONFIG.primaryEmail}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl text-slate-500 hover:text-brand-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-dark-card transition-colors shrink-0"
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-emerald-500 mt-2 font-mono flex items-center gap-1">
                <Check className="w-3 h-3" /> Email copied to clipboard!
              </p>
            )}
          </motion.div>

          {/* Social Profiles */}
          <motion.div
            variants={staggerItem}
            className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm hover:border-brand-500/30 dark:hover:border-cyan-500/30 transition-all"
          >
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block mb-4">
              Professional Networks
            </span>
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200/80 dark:border-dark-border hover:border-brand-500/40 dark:hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    {link.id === 'github' && <GithubIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" />}
                    {link.id === 'linkedin' && <LinkedinIcon className="w-5 h-5 text-blue-500" />}
                    {link.id === 'guvi' && <GuviIcon className="w-5 h-5 text-emerald-500" />}
                    {link.id === 'email' && <Mail className="w-5 h-5 text-cyan-500" />}
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-cyan-400 transition-colors">
                        {link.name}
                      </p>
                      <p className="text-xs text-slate-400 font-mono">
                        {link.username}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-brand-600 dark:group-hover:text-cyan-400 font-mono">
                    Visit &rarr;
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Availability & Location */}
          <motion.div
            variants={staggerItem}
            className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-4 hover:border-brand-500/30 dark:hover:border-cyan-500/30 transition-all"
          >
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">Response Window</p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                  {CONTACT_CONFIG.responseWindow}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">Location</p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                  {CONTACT_CONFIG.location}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-dark-border/80">
              <Button
                href={PERSONAL_INFO.cvPath}
                download="YagnaSri-Reddy-Mukku-CV.pdf"
                variant="outline"
                size="md"
                icon={<Download className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Download Curriculum Vitae
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
};

