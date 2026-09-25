import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { COMPANY } from '../config/company';
import { CTASection } from '../sections/CTASection';
import { Code2, Shield, TrendingUp, Brain, Users, Blocks } from 'lucide-react';

const values = [
  {
    title: 'Engineering Depth',
    description: 'We invest in understanding the problem before writing code. Architecture decisions made early define the quality of the system for years.',
    icon: Code2,
  },
  {
    title: 'Security by Default',
    description: 'Authentication, authorization, data isolation and secure infrastructure aren\'t features — they\'re baseline requirements in every system we build.',
    icon: Shield,
  },
  {
    title: 'Scalable Design',
    description: 'Every system is designed to handle growth. We build for where you\'re going, not just where you are today.',
    icon: TrendingUp,
  },
  {
    title: 'AI Awareness',
    description: 'We actively identify where AI and automation can create real value in your product — not as a buzzword, but as a practical engineering tool.',
    icon: Brain,
  },
  {
    title: 'Partnership Approach',
    description: 'We work as an extension of your team. We care about the outcome of the product, not just delivering code that matches a specification.',
    icon: Users,
  },
  {
    title: 'Product Thinking',
    description: 'Every technical decision is connected to a business goal. We understand the user, the market, and the constraints before proposing solutions.',
    icon: Blocks,
  },
];

export function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description={`${COMPANY.name} is an engineering-led technology company specializing in custom software, AI systems, and SaaS platform development.`}
        canonical="/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase text-accent-blue bg-accent-blue/10 border border-accent-blue/20 rounded-full">
              About
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-text-primary mb-6">
              An engineering company that builds products.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              {COMPANY.name} is an engineering-led technology company. We design, build, and scale
              custom software, SaaS platforms, AI systems, and automation for businesses that need
              genuine technical capability.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              We're not a body shop or a generic agency. We're engineers who understand products,
              business problems, and the technical architecture required to solve them properly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-section-sm md:py-section bg-bg-secondary/30">
        <div className="container-main">
          <SectionHeader
            title="What drives our engineering."
            description="These aren't values on a poster. They're the principles that shape every technical decision, architecture review, and code deployment."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group p-6 md:p-7 bg-bg-card border border-border-primary rounded-xl hover:border-border-accent transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-accent-blue" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-section-sm md:py-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary mb-6">
                How we work with clients.
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Every engagement starts with understanding — not immediately writing code.
                  We take the time to understand your product, your users, your technical
                  landscape, and the constraints you're working within.
                </p>
                <p>
                  From there, we define the architecture, select the right technology stack,
                  and build iteratively with regular communication and deployed releases.
                </p>
                <p>
                  We prefer long-term partnerships over transactional projects. The best
                  software is built by teams that understand the product deeply — and that
                  understanding grows over time.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {[
                { label: 'Discovery & Architecture', detail: 'Understanding the problem and designing the solution' },
                { label: 'Iterative Development', detail: 'Building in sprints with regular deployed releases' },
                { label: 'Quality & Security', detail: 'Testing, code review, and security from day one' },
                { label: 'Launch & Support', detail: 'Deployment, monitoring, and continued optimization' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="flex items-start gap-4 p-4 bg-bg-card border border-border-primary rounded-lg"
                >
                  <div className="w-8 h-8 rounded-md bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-bold text-accent-blue">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{item.label}</p>
                    <p className="text-xs text-text-tertiary mt-0.5">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
