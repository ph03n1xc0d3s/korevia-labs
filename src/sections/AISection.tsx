import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

const aiCapabilities = [
  'AI agents',
  'RAG systems',
  'Internal AI assistants',
  'Document intelligence',
  'AI-powered search',
  'Workflow automation',
  'LLM integrations',
  'Customer support automation',
  'AI copilots',
];

const pipeline = [
  { label: 'Data', color: 'from-accent-blue/20 to-accent-blue/5' },
  { label: 'Retrieval', color: 'from-accent-purple/20 to-accent-purple/5' },
  { label: 'Reasoning', color: 'from-accent-cyan/20 to-accent-cyan/5' },
  { label: 'Tools', color: 'from-accent-green/20 to-accent-green/5' },
  { label: 'Action', color: 'from-accent-amber/20 to-accent-amber/5' },
  { label: 'Human', color: 'from-accent-blue/20 to-accent-blue/5' },
];

export function AISection() {
  return (
    <section className="relative py-section-sm md:py-section overflow-hidden">
      {/* Distinctive background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-[#0a0d1a] to-bg-primary" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, #4f8fff 50%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <SectionHeader
          label="AI Engineering"
          title="AI shouldn't be a feature. It should improve the system."
          description="We build AI that creates real operational value — not demos that look impressive but never make it to production."
        />

        {/* Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex overflow-x-auto sm:justify-center items-center pb-6 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 scrollbar-hide snap-x snap-mandatory">
            {pipeline.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center shrink-0 snap-center"
              >
                <div className={`px-4 md:px-6 py-3 bg-gradient-to-b ${step.color} border border-border-secondary rounded-lg text-center`}>
                  <span className="text-sm font-medium text-text-primary">{step.label}</span>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="w-6 md:w-8 h-px bg-gradient-to-r from-border-accent to-border-secondary" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {aiCapabilities.map((cap, i) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="flex items-center gap-3 px-4 py-3 bg-bg-card/50 border border-border-primary rounded-lg hover:border-border-accent transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-purple/60" />
              <span className="text-sm text-text-secondary">{cap}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
