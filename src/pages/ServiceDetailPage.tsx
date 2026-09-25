import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { TechBadge } from '../components/TechBadge';
import { services } from '../data/services';
import { CTASection } from '../sections/CTASection';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.id !== slug);

  return (
    <>
      <SEO
        title={service.title}
        description={service.longDescription}
        canonical={`/services/${service.id}`}
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
            <div className="w-14 h-14 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-6">
              <Icon size={24} className="text-accent-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-text-primary mb-5">
              {service.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {service.longDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {service.tags.map((tag) => (
                <TechBadge key={tag} name={tag} />
              ))}
            </div>
            <Button href="/contact" size="lg">
              Discuss Your Project
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-section-sm md:py-section bg-bg-secondary/30">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary mb-4">
                What we deliver
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Every engagement is scoped to your specific requirements. Here are the types of
                work we typically handle under {service.title.toLowerCase()}.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              {service.capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="flex items-start gap-3 px-4 py-3 bg-bg-card border border-border-primary rounded-lg"
                >
                  <Check size={16} className="text-accent-green mt-0.5 shrink-0" />
                  <span className="text-sm text-text-secondary">{cap}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-section-sm md:py-section">
        <div className="container-main">
          <h2 className="text-xl font-bold tracking-tight text-text-primary mb-8">
            Other services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => {
              const OtherIcon = s.icon;
              return (
                <motion.a
                  key={s.id}
                  href={`/services/${s.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group flex items-center gap-4 p-4 bg-bg-card border border-border-primary rounded-xl hover:border-border-accent transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <OtherIcon size={16} className="text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                      {s.title}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">{s.shortTitle}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
