import { motion } from 'framer-motion';
import { Code2, Brain, Layers, Cloud, Lightbulb } from 'lucide-react';

const capabilities = [
  { label: 'Software Engineering', icon: Code2 },
  { label: 'AI & Automation', icon: Brain },
  { label: 'SaaS Development', icon: Layers },
  { label: 'Cloud & DevOps', icon: Cloud },
  { label: 'Product Development', icon: Lightbulb },
];

export function TrustStrip() {
  return (
    <section className="relative py-12 md:py-16 border-y border-border-primary bg-bg-secondary/50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16"
        >
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2.5 text-text-secondary"
              >
                <Icon size={16} className="text-text-muted" />
                <span className="text-sm font-medium tracking-wide">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
