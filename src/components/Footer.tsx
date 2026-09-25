import { Link } from 'react-router-dom';
import { COMPANY, SOCIAL } from '../config/company';
import { GithubIcon, LinkedinIcon, XIcon } from './SocialIcons';

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Process', href: '/process' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Software Development', href: '/services/software-development' },
    { label: 'AI Development', href: '/services/ai-development' },
    { label: 'SaaS Development', href: '/services/saas-development' },
    { label: 'Automation', href: '/services/automation' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Technical Insights', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { label: 'GitHub', href: SOCIAL.github, icon: GithubIcon },
  { label: 'LinkedIn', href: SOCIAL.linkedin, icon: LinkedinIcon },
  { label: 'X', href: SOCIAL.x, icon: XIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border-primary bg-bg-secondary">
      {/* CTA Strip */}
      <div className="container-main py-16 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-4">
          Let's build something useful.
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto mb-8">
          Tell us about your project. We'll figure out the best way to help.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-blue text-white rounded-lg font-medium text-sm hover:bg-accent-blue/90 transition-all shadow-lg shadow-accent-blue/20 focus-ring"
        >
          Start a Project
        </Link>
      </div>

      {/* Links */}
      <div className="border-t border-border-primary">
        <div className="container-main py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4 focus-ring rounded-md">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                  <span className="text-white font-bold text-xs">N</span>
                </div>
                <span className="text-sm font-bold tracking-tight text-text-primary">
                  {COMPANY.name}
                </span>
              </Link>
              <p className="text-sm text-text-tertiary leading-relaxed mb-6 max-w-xs">
                {COMPANY.description}
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-text-muted hover:text-text-secondary transition-colors rounded-md focus-ring"
                    aria-label={link.label}
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4">Company</h3>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-text-tertiary hover:text-text-secondary transition-colors focus-ring rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4">Services</h3>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-text-tertiary hover:text-text-secondary transition-colors focus-ring rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4">Resources</h3>
              <ul className="space-y-2.5">
                {footerLinks.resources.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-text-tertiary hover:text-text-secondary transition-colors focus-ring rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-primary">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="text-xs text-text-muted hover:text-text-tertiary transition-colors focus-ring rounded-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-text-muted hover:text-text-tertiary transition-colors focus-ring rounded-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
