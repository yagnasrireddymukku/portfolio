import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  useDocumentTitle('404: Page Not Found | YagnaSri Reddy Mukku');

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="p-4 rounded-2xl bg-brand-500/10 text-brand-500 dark:text-cyan-400 font-mono text-sm font-bold mb-4">
        ERROR 404
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
        Page Not Found
      </h1>
      <p className="text-base text-slate-600 dark:text-slate-400 max-w-md mb-8">
        The requested URL was not found on this portfolio. It may have been relocated or updated.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button to="/" variant="glow" icon={<Home className="w-4 h-4" />}>
          Return to Home
        </Button>
        <Button to="/projects" variant="outline" icon={<ArrowLeft className="w-4 h-4" />}>
          Explore Projects
        </Button>
      </div>
    </div>
  );
};
