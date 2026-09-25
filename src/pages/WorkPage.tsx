import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { TechBadge } from '../components/TechBadge';
import { caseStudies } from '../data/caseStudies';
import { CTASection } from '../sections/CTASection';

export function WorkPage() {
  return (
    <>
      <SEO
        title="Work"
        description="Selected projects and case studies showcasing our software engineering, AI, and SaaS development capabilities."
        canonical="/work"
      />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <SectionHeader
            label="Selected Work"
            title="Systems we've designed and built."
            description="Representative examples of our engineering work. Project details are kept confidential where necessary."
          />
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-section-sm md:pb-section">
        <div className="container-main space-y-10 md:space-y-16">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-bg-card border border-border-primary rounded-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-3 p-6 md:p-8 lg:p-10">
                  {study.isRepresentative && (
                    <span className="inline-block mb-3 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-text-muted bg-bg-tertiary border border-border-primary rounded">
                      Representative Architecture
                    </span>
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                    {study.title}
                  </h2>
                  <p className="text-sm text-text-tertiary mb-4">{study.subtitle}</p>
                  <p className="text-text-secondary leading-relaxed mb-8 max-w-lg">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {study.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-8">
                    {study.highlights.map((h) => (
                      <div key={h.label}>
                        <p className="text-xl md:text-2xl font-bold text-text-primary">{h.value}</p>
                        <p className="text-xs text-text-muted mt-1">{h.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 bg-bg-tertiary/50 border-t lg:border-t-0 lg:border-l border-border-primary p-6 md:p-8 flex items-center justify-center">
                  <div className="w-full max-w-xs space-y-3">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">
                      System Architecture
                    </p>
                    {study.architecture.map((node, j) => (
                      <div key={node}>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent-blue/50 shrink-0" />
                          <div className="flex-1 px-3 py-2 text-xs font-mono text-text-secondary bg-bg-card border border-border-primary rounded-md">
                            {node}
                          </div>
                        </div>
                        {j < study.architecture.length - 1 && (
                          <div className="ml-[3px] w-px h-3 bg-border-secondary" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
