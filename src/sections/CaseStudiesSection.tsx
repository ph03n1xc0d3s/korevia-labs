import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { TechBadge } from '../components/TechBadge';
import { caseStudies } from '../data/caseStudies';

export function CaseStudiesSection() {
  return (
    <section className="py-section-sm md:py-section bg-bg-secondary/30">
      <div className="container-main">
        <SectionHeader
          label="Selected Work"
          title="Systems we've built."
          description="Representative examples of the types of systems we design and engineer. Project details are kept private where necessary."
        />

        <div className="space-y-8 md:space-y-12">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-bg-card border border-border-primary rounded-2xl overflow-hidden hover:border-border-accent transition-all duration-300"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Content */}
                <div className="lg:col-span-3 p-6 md:p-8 lg:p-10">
                  {study.isRepresentative && (
                    <span className="inline-block mb-3 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-text-muted bg-bg-tertiary border border-border-primary rounded">
                      Representative Architecture
                    </span>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-text-tertiary mb-4">{study.subtitle}</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-lg">
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {study.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-6">
                    {study.highlights.map((h) => (
                      <div key={h.label}>
                        <p className="text-lg md:text-xl font-bold text-text-primary">
                          {h.value}
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">{h.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Visualization */}
                <div className="lg:col-span-2 bg-bg-tertiary/50 border-t lg:border-t-0 lg:border-l border-border-primary p-6 md:p-8 flex items-center justify-center">
                  <div className="w-full max-w-xs space-y-3">
                    {study.architecture.map((node, j) => (
                      <motion.div
                        key={node}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.06, duration: 0.3 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent-blue/50 shrink-0" />
                          <div className="flex-1 px-3 py-2 text-xs font-mono text-text-secondary bg-bg-card border border-border-primary rounded-md">
                            {node}
                          </div>
                        </div>
                        {j < study.architecture.length - 1 && (
                          <div className="ml-[3px] w-px h-3 bg-border-secondary" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors focus-ring rounded-md px-2 py-1"
          >
            View all work
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
