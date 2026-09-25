import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export function CTASection() {
  return (
    <section className="relative py-section-sm md:py-section overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/50 to-bg-primary" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.04] blur-[100px]"
        style={{ background: 'radial-gradient(circle, #4f8fff 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-text-primary mb-5">
            Have a product in mind?{' '}
            <span className="gradient-text">Let's build it.</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us what you're trying to build, where you're stuck, or what you want to automate.
            We'll help turn the idea into a practical engineering plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Start a Project
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Book a Technical Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
