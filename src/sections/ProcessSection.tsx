import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We understand the product, users, business goals and constraints.',
  },
  {
    number: '02',
    title: 'Architect',
    description: 'We define the technical architecture, stack and delivery plan.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We build iteratively with regular releases and feedback.',
  },
  {
    number: '04',
    title: 'Validate',
    description: 'Testing, security reviews, performance checks and real-world validation.',
  },
  {
    number: '05',
    title: 'Scale',
    description: 'Deployment, monitoring, optimization and continued engineering support.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-section-sm md:py-section bg-bg-secondary/30">
      <div className="container-main">
        <SectionHeader
          label="Process"
          title="From idea to production."
          description="A structured approach that turns your requirements into a working, scalable system."
        />

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex gap-6 md:gap-8"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-bg-card border border-border-secondary flex items-center justify-center shrink-0 group-hover:border-accent-blue group-hover:bg-accent-blue/10 transition-all duration-300">
                  <span className="text-xs font-mono font-bold text-text-muted group-hover:text-accent-blue transition-colors">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border-primary min-h-[3rem]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 md:pb-14">
                <h3 className="text-lg font-semibold text-text-primary mb-1.5 group-hover:text-accent-blue transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
