import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';

export function ServicesSection() {
  return (
    <section id="services" className="py-section-sm md:py-section">
      <div className="container-main">
        <SectionHeader
          label="Services"
          title="Engineering capabilities built around your product."
          description="We don't offer generic development hours. We provide focused engineering across the full stack — from architecture to deployment."
        />

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-8 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 gap-5 md:gap-6 scrollbar-hide *:shrink-0 *:w-[85vw] *:max-w-[340px] *:snap-center sm:*:w-auto sm:*:max-w-none">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
