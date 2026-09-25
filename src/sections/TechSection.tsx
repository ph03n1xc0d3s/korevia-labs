import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { technologies } from '../data/technologies';

export function TechSection() {
  return (
    <section className="py-section-sm md:py-section">
      <div className="container-main">
        <SectionHeader
          label="Technology"
          title="Built with the right tools."
          description="We select technologies based on your product requirements, not personal preference. Here's what we work with regularly."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {technologies.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                {category.name}
              </h3>
              <div className="space-y-2">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.08 + techIndex * 0.04,
                    }}
                    className="group flex items-center gap-2.5 px-3 py-2 bg-bg-card border border-border-primary rounded-lg hover:border-border-accent hover:bg-bg-card-hover transition-all duration-200 cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/40 group-hover:bg-accent-blue transition-colors" />
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
