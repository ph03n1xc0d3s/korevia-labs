import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';
import { CTASection } from '../sections/CTASection';

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Custom software development, AI engineering, SaaS development, automation, mobile development and cloud infrastructure services."
        canonical="/services"
      />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Services"
              title="Engineering capabilities built around your product."
              description="From architecture to deployment — we provide focused engineering across the full stack. Every engagement is tailored to your specific product and business requirements."
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-section-sm md:pb-section">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
