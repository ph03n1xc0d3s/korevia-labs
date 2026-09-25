import { SEO } from '../components/SEO';
import { COMPANY } from '../config/company';

export function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description={`Privacy Policy for ${COMPANY.name}. How we collect, use, and protect your information.`}
        canonical="/privacy"
      />

      <article className="pt-32 pb-section-sm md:pt-40 md:pb-section">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-text-muted mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Information We Collect</h2>
              <p>
                When you contact us through our website, we collect the information you provide
                in our contact form, including your name, email address, company name, and project details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">How We Use Your Information</h2>
              <p>
                We use the information you provide to respond to your inquiries, discuss potential
                projects, and communicate with you about our services. We do not sell, trade, or
                otherwise transfer your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Data Security</h2>
              <p>
                We implement reasonable security measures to protect the information you provide.
                However, no method of transmission over the internet or electronic storage is
                completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Cookies</h2>
              <p>
                Our website may use essential cookies to ensure proper functionality. We do not
                use tracking cookies or third-party analytics services that collect personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Contact</h2>
              <p>
                If you have questions about this privacy policy, please contact us at{' '}
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
