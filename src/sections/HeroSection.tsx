import { motion } from 'framer-motion';
import { COMPANY } from '../config/company';
import { Button } from '../components/Button';
import { HeroArchitecture } from '../components/HeroArchitecture';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-40" aria-hidden="true" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #4f8fff 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[100px]"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Copy */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block mb-6 px-3 py-1.5 text-xs font-medium tracking-wider uppercase text-accent-blue bg-accent-blue/8 border border-accent-blue/15 rounded-full">
                Software Engineering + AI + Automation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight leading-[1.1] text-text-primary"
            >
              {COMPANY.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl"
            >
              {COMPANY.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" size="lg">
                Start a Project
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </motion.div>
          </div>

          {/* Right — Architecture Visualization */}
          <div className="hidden lg:block h-[450px]">
            <HeroArchitecture />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" aria-hidden="true" />
    </section>
  );
}
