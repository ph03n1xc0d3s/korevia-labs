import { SEO } from '../components/SEO';
import { COMPANY } from '../config/company';

export function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description={`Terms of Service for ${COMPANY.name}.`}
        canonical="/terms"
      />

      <article className="pt-32 pb-section-sm md:pt-40 md:pb-section">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-text-muted mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Use of This Website</h2>
              <p>
                This website is provided by {COMPANY.legalName} for informational purposes.
                By accessing and using this website, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Intellectual Property</h2>
              <p>
                All content on this website, including text, designs, and code examples, is the
                property of {COMPANY.legalName} unless otherwise stated. You may not reproduce,
                distribute, or use this content without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Service Agreements</h2>
              <p>
                Project-specific terms, deliverables, timelines, and payment terms are defined
                in individual service agreements between {COMPANY.legalName} and its clients.
                These terms of service apply to the use of this website only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Limitation of Liability</h2>
              <p>
                {COMPANY.legalName} makes no warranties regarding the accuracy or completeness
                of the information on this website. We are not liable for any damages arising
                from the use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Contact</h2>
              <p>
                For questions about these terms, contact us at{' '}
                <a href={`mailto:${COMPANY.email}`} className="text-accent-blue hover:underline">
                  {COMPANY.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
