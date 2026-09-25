import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { Monitor, Brain, Building2, Server, Smartphone, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'For Startups & Founders',
    description: 'Turn your idea into a working MVP. We help founders move from concept to first users with a structured engineering approach.',
    items: ['MVP development', 'Technical architecture', 'Rapid prototyping', 'Investor-ready product'],
    icon: Smartphone,
  },
  {
    title: 'For SaaS Companies',
    description: 'Build or scale your SaaS platform with proper multi-tenant architecture, billing integration, and growth infrastructure.',
    items: ['Multi-tenant architecture', 'Subscription billing', 'API platform', 'Scaling & performance'],
    icon: Monitor,
  },
  {
    title: 'For Enterprise',
    description: 'Modernize legacy systems, build internal platforms, and integrate AI into existing business processes.',
    items: ['Legacy modernization', 'Internal tools', 'System integration', 'Process automation'],
    icon: Building2,
  },
  {
    title: 'AI Integration',
    description: 'Add AI capabilities to your existing product — from intelligent search and document processing to full agent systems.',
    items: ['RAG systems', 'AI agents', 'Document intelligence', 'Workflow automation'],
    icon: Brain,
  },
  {
    title: 'For Digital Agencies',
    description: 'White-label engineering partnership. We handle the complex technical work while you manage the client relationship.',
    items: ['Dedicated engineering teams', 'Technical consulting', 'Backend development', 'Infrastructure'],
    icon: Server,
  },
];

export function SolutionsPage() {
  return (
    <>
      <SEO
        title="Solutions"
        description="Engineering solutions for startups, SaaS companies, enterprises, and digital agencies. From MVPs to AI integration."
        canonical="/solutions"
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <SectionHeader
            label="Solutions"
            title="Engineering for your stage and scale."
            description="Whether you're building an MVP, scaling a SaaS platform, or modernizing legacy systems — we tailor our engineering approach to your specific situation."
          />
        </div>
      </section>

      <section className="pb-section-sm md:pb-section">
        <div className="container-main space-y-6 md:space-y-8">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group grid md:grid-cols-5 gap-6 md:gap-8 p-6 md:p-8 bg-bg-card border border-border-primary rounded-2xl hover:border-border-accent transition-all"
              >
                <div className="md:col-span-3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent-blue" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-text-primary">{solution.title}</h2>
                      <p className="text-sm text-text-secondary leading-relaxed mt-2">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col justify-between">
                  <ul className="space-y-2 mb-4">
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-tertiary">
                        <div className="w-1 h-1 rounded-full bg-accent-blue/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="ghost" size="sm" className="self-start">
                    Discuss this solution <ArrowRight size={14} />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
