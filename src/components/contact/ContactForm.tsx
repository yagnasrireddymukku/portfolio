import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import type { ContactFormData } from '../../types';
import { Button } from '../common/Button';
import { CONTACT_CONFIG } from '../../data/socialLinks';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const effectiveSheetUrl = CONTACT_CONFIG.googleSheetWebhookUrl || (import.meta.env.VITE_GOOGLE_SHEET_URL as string | undefined);
      const promises: Promise<any>[] = [];

      // 1. Send directly to Google Sheet Web App (No redirect)
      if (effectiveSheetUrl) {
        promises.push(
          fetch(effectiveSheetUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
              timestamp: new Date().toISOString()
            })
          }).catch((err) => console.warn('Google Sheet background post warning:', err))
        );
      }

      // 2. Direct Background Email Dispatch (Zero redirects, no mailto popup)
      promises.push(
        fetch(`https://formsubmit.co/ajax/${CONTACT_CONFIG.primaryEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
            message: formData.message
          })
        }).catch((err) => console.warn('FormSubmit background post warning:', err))
      );

      // Await background transmissions
      await Promise.all(promises);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 sm:p-10 shadow-xl shadow-brand-500/5">
      <div className="mb-2">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Send a Message
        </h3>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 text-justified leading-relaxed">
        Have a project in mind, an opportunity to discuss, or want to collaborate? Fill out the form below and I will get back to you promptly.
      </p>

      {/* Success Notification */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 flex items-start gap-3.5 text-left">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
          <div className="text-sm">
            <p className="font-semibold text-emerald-600 dark:text-emerald-400">Message Sent Successfully!</p>
            <p className="text-xs mt-1 text-slate-600 dark:text-slate-300 text-justified leading-relaxed">
              Thank you for getting in touch. Your message has been sent to YagnaSri's inbox and will be reviewed promptly.
            </p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-500" />
          <div className="text-sm">
            <p className="font-semibold text-rose-600 dark:text-rose-400">Transmission Notice</p>
            <p className="text-xs mt-0.5 text-rose-700 dark:text-rose-400">
              There was an issue sending your message. You can also reach out directly to {CONTACT_CONFIG.primaryEmail}.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Morgan"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border text-slate-900 dark:text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.name
                  ? 'border-rose-500 focus:ring-rose-400'
                  : 'border-slate-200 dark:border-dark-border focus:ring-brand-500 focus:border-brand-500'
              }`}
              disabled={isSubmitting}
              required
            />
            {errors.name && (
              <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@company.com"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border text-slate-900 dark:text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-rose-500 focus:ring-rose-400'
                  : 'border-slate-200 dark:border-dark-border focus:ring-brand-500 focus:border-brand-500'
              }`}
              disabled={isSubmitting}
              required
            />
            {errors.email && (
              <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 mb-2"
          >
            Subject <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="AI Engineering Collaboration / Full-Stack Project"
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border text-slate-900 dark:text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.subject
                ? 'border-rose-500 focus:ring-rose-400'
                : 'border-slate-200 dark:border-dark-border focus:ring-brand-500 focus:border-brand-500'
            }`}
            disabled={isSubmitting}
            required
          />
          {errors.subject && (
            <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 mb-2"
          >
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your inquiry, project scope, or opportunity..."
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border text-slate-900 dark:text-white placeholder-slate-400 text-sm transition-all focus:outline-none focus:ring-2 resize-none ${
              errors.message
                ? 'border-rose-500 focus:ring-rose-400'
                : 'border-slate-200 dark:border-dark-border focus:ring-brand-500 focus:border-brand-500'
            }`}
            disabled={isSubmitting}
            required
          />
          {errors.message && (
            <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Action */}
        <div className="flex items-center gap-4">
          <Button
            type="submit"
            variant="glow"
            size="lg"
            disabled={isSubmitting}
            icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};
