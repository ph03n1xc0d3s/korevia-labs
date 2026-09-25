import { SEO } from '../components/SEO';
import { HeroSection } from '../sections/HeroSection';
import { TrustStrip } from '../sections/TrustStrip';
import { ServicesSection } from '../sections/ServicesSection';
import { WhatWeBuildSection } from '../sections/WhatWeBuildSection';
import { TechSection } from '../sections/TechSection';
import { CaseStudiesSection } from '../sections/CaseStudiesSection';
import { PhilosophySection } from '../sections/PhilosophySection';
import { ProcessSection } from '../sections/ProcessSection';
import { WhyUsSection } from '../sections/WhyUsSection';
import { AISection } from '../sections/AISection';
import { CTASection } from '../sections/CTASection';

export function HomePage() {
  return (
    <>
      <SEO canonical="/" />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <WhatWeBuildSection />
      <TechSection />
      <CaseStudiesSection />
      <PhilosophySection />
      <ProcessSection />
      <WhyUsSection />
      <AISection />
      <CTASection />
    </>
  );
}
