import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { CTASection } from '../sections/CTASection';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We understand the product, users, business goals and constraints.',
    details: [
      'Product vision and business requirements',
      'User research and workflow analysis',
      'Technical landscape and constraints',
      'Integration requirements',
      'Performance and scalability expectations',
    ],
  },
  {
    number: '02',
    title: 'Architect',
    description: 'We define the technical architecture, stack and delivery plan.',
    details: [
      'System architecture design',
      'Technology stack selection',
      'Database and data flow design',
      'API and integration architecture',
      'Sprint planning and delivery milestones',
    ],
  },
  {
    number: '03',
    title: 'Build',
    description: 'We build iteratively with regular releases and feedback.',
    details: [
      'Sprint-based development cycles',
      'Regular code reviews and quality checks',
      'Deployed releases for feedback',
      'Continuous integration and testing',
      'Technical documentation',
    ],
  },
  {
    number: '04',
    title: 'Validate',
    description: 'Testing, security reviews, performance checks and real-world validation.',
    details: [
      'Automated and manual testing',
      'Security audits and penetration testing',
      'Performance benchmarking',
      'Load testing and stress testing',
      'User acceptance testing',
    ],
  },
  {
    number: '05',
    title: 'Scale',
    description: 'Deployment, monitoring, optimization and continued engineering support.',
    details: [
      'Production deployment',
      'Monitoring and alerting setup',
      'Performance optimization',
      'Ongoing maintenance and updates',
      'Feature development and scaling',
    ],
  },
];

export function ProcessPage() {
  return (
    <>
      <SEO
        title="Process"
        description="Our structured engineering process from discovery and architecture through iterative development, validation, and scaling."
        canonical="/process"
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <SectionHeader
            label="Our Process"
            title="From idea to production."
            description="A structured engineering process that turns your requirements into a working, scalable system. Every phase has clear deliverables and decision points."
          />
        </div>
      </section>

      <section className="pb-section-sm md:pb-section">
        <div className="container-main max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex gap-6 md:gap-10"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-bg-card border border-border-secondary flex items-center justify-center shrink-0 group-hover:border-accent-blue group-hover:bg-accent-blue/10 transition-all duration-300">
                  <span className="text-sm font-mono font-bold text-text-muted group-hover:text-accent-blue transition-colors">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border-primary min-h-[2rem]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-14 md:pb-20 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                  {step.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.details.map((detail, j) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.04, duration: 0.3 }}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-text-tertiary"
                    >
                      <div className="w-1 h-1 rounded-full bg-accent-blue/40 shrink-0" />
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
