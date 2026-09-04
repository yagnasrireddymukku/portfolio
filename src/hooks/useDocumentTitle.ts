import { useEffect } from 'react';

export const useDocumentTitle = (title: string, description?: string) => {
  useEffect(() => {
    const fullTitle = title.includes('YagnaSri Reddy Mukku')
      ? title
      : `${title} | YagnaSri Reddy Mukku`;
    document.title = fullTitle;

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Scroll smoothly to top on every route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description]);
};
