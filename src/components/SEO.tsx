import { useEffect } from 'react';
import { COMPANY } from '../config/company';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

/**
 * Updates document head meta tags for SEO.
 * In a production app, consider using react-helmet-async.
 */
export function SEO({
  title,
  description = COMPANY.metaDescription,
  canonical,
  ogType = 'website',
  ogImage,
}: SEOProps) {
  const fullTitle = title
    ? `${title} — ${COMPANY.name}`
    : `${COMPANY.name} — Software, AI & SaaS Engineering`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta tags
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);

    // Open Graph
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', COMPANY.name, true);
    if (ogImage) setMeta('og:image', ogImage, true);

    // Twitter/X
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    if (ogImage) setMeta('twitter:image', ogImage);

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `https://${COMPANY.domain}${canonical}`);
    }
  }, [fullTitle, description, canonical, ogType, ogImage]);

  return null;
}
