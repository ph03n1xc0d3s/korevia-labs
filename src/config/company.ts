/**
 * Centralized company configuration.
 * Change the company name, tagline, and all branding details here.
 * This is the ONLY place the company identity should be defined.
 */

export const COMPANY = {
  name: 'KOREVIA LABS',
  shortName: 'Korevia',
  legalName: 'Korevia Labs',
  tagline: 'We build software that scales with your business.',
  description:
    'We design and engineer custom software, SaaS platforms, AI systems, and automation for companies that need more than just another development agency.',
  metaDescription:
    'Korevia Labs builds scalable software, SaaS platforms, AI systems and automation for startups and growing businesses.',
  domain: 'korevialabs.com',
  email: 'hello@korevialabs.com',
  projectEmail: 'projects@korevialabs.com',
} as const;

export const SOCIAL = {
  github: 'https://github.com/korevialabs',
  linkedin: 'https://linkedin.com/company/korevialabs',
  x: 'https://x.com/korevialabs',
} as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
] as const;

export const CTA_PRIMARY = {
  label: 'Start a Project',
  href: '/contact',
} as const;

export const CTA_SECONDARY = {
  label: 'Book a Technical Consultation',
  href: '/contact',
} as const;
