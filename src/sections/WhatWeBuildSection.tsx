import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Monitor, Brain, Building2, Server, Smartphone } from 'lucide-react';

const systems = [
  {
    title: 'SaaS Platforms',
    description: 'Multi-tenant applications with authentication, billing, RBAC and integrations.',
    icon: Monitor,
    visual: ['Tenancy', 'Auth', 'Billing', 'RBAC', 'API', 'Integrations'],
  },
  {
    title: 'AI Systems',
    description: 'AI agents, knowledge systems, RAG pipelines and intelligent automation.',
    icon: Brain,
    visual: ['LLM', 'RAG', 'Agents', 'Vectors', 'Reasoning', 'Tools'],
  },
  {
    title: 'Enterprise Applications',
    description: 'Dashboards, CRMs, operational systems and internal platforms.',
    icon: Building2,
    visual: ['Dashboard', 'Reports', 'Workflows', 'Roles', 'Data', 'Audit'],
  },
  {
    title: 'High-Scale Backends',
    description: 'APIs, event-driven systems, queues, caching and distributed services.',
    icon: Server,
    visual: ['API', 'Events', 'Queue', 'Cache', 'Workers', 'Scaling'],
  },
  {
    title: 'Customer-Facing Products',
    description: 'Web applications, mobile applications and product interfaces.',
    icon: Smartphone,
    visual: ['UI/UX', 'Mobile', 'PWA', 'SEO', 'Analytics', 'A/B'],
  },
];

export function WhatWeBuildSection() {
  return (
    <section className="py-section-sm md:py-section bg-bg-secondary/30">
      <div className="container-main">
        <SectionHeader
          label="What We Build"
          title="Real systems. Not just wireframes."
          description="We build the types of systems that power modern businesses — from SaaS platforms and AI products to enterprise backends and customer-facing applications."
        />

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 gap-5 md:gap-6 scrollbar-hide *:shrink-0 *:w-[85vw] *:max-w-[340px] *:snap-center md:*:w-auto md:*:max-w-none">
          {systems.map((system, i) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative p-6 md:p-7 bg-bg-card border border-border-primary rounded-xl hover:border-border-accent transition-all duration-300 flex flex-col justify-between h-full ${
                  i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-1">
                      {system.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {system.description}
                    </p>
                  </div>
                </div>

                {/* Technical visual - component architecture */}
                <div className="grid grid-cols-3 gap-1.5">
                  {system.visual.map((item, j) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.04, duration: 0.3 }}
                      className="px-2 py-1.5 text-[10px] font-mono text-text-muted bg-bg-tertiary border border-border-primary rounded text-center group-hover:border-border-secondary group-hover:text-text-tertiary transition-all"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
