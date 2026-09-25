import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Users, Target, Blocks, Brain, Handshake } from 'lucide-react';

const reasons = [
  {
    title: 'Senior Engineering',
    description: 'Work directly with experienced engineers rather than being buried under layers of management.',
    icon: Users,
  },
  {
    title: 'Product Mindset',
    description: 'We care about why something should be built, not only how.',
    icon: Target,
  },
  {
    title: 'Scalable Architecture',
    description: "Build today's product without creating tomorrow's technical disaster.",
    icon: Blocks,
  },
  {
    title: 'AI-Native Thinking',
    description: 'Identify opportunities where AI and automation can create real operational leverage.',
    icon: Brain,
  },
  {
    title: 'Long-Term Partnership',
    description: 'We can stay involved after launch for optimization, maintenance and continued product development.',
    icon: Handshake,
  },
];

export function WhyUsSection() {
  return (
    <section className="py-section-sm md:py-section">
      <div className="container-main">
        <SectionHeader
          label="Why Us"
          title="An engineering partner, not a vendor."
          description="We work with companies that need technical depth — not just developers who write code to spec."
        />

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-8 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 gap-5 md:gap-6 scrollbar-hide *:shrink-0 *:w-[85vw] *:max-w-[340px] *:snap-center sm:*:w-auto sm:*:max-w-none">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group p-6 md:p-7 bg-bg-card border border-border-primary rounded-xl hover:border-border-accent transition-all duration-300 flex flex-col h-full ${
                  i >= 3 ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center mb-4 group-hover:bg-accent-green/15 transition-colors">
                  <Icon size={18} className="text-accent-green" />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
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
