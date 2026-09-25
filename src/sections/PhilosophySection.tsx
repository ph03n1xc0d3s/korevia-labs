import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { GitBranch, Shield, Gauge, Activity, Lightbulb } from 'lucide-react';

const principles = [
  {
    title: 'Architecture',
    description: 'Systems designed for maintainability and future growth.',
    icon: GitBranch,
  },
  {
    title: 'Security',
    description: 'Authentication, authorization, data isolation and secure infrastructure from day one.',
    icon: Shield,
  },
  {
    title: 'Performance',
    description: 'Caching, database optimization, asynchronous processing and scalable architecture.',
    icon: Gauge,
  },
  {
    title: 'Reliability',
    description: 'Monitoring, logging, testing and deployment discipline.',
    icon: Activity,
  },
  {
    title: 'Product Thinking',
    description: "We don't blindly implement tickets. We understand the business problem first.",
    icon: Lightbulb,
  },
];

export function PhilosophySection() {
  return (
    <section className="py-section-sm md:py-section">
      <div className="container-main">
        <SectionHeader
          title="Good software isn't just code that works."
          description="We build software as a product — not a deliverable. Every decision is made with architecture, security, performance, and long-term maintainability in mind."
        />

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-8 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 gap-5 md:gap-6 scrollbar-hide *:shrink-0 *:w-[75vw] *:max-w-[280px] *:snap-center sm:*:w-auto sm:*:max-w-none">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group text-center p-6 bg-bg-card border border-border-primary rounded-xl hover:border-border-accent transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-cyan/15 transition-colors">
                  <Icon size={18} className="text-accent-cyan" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
