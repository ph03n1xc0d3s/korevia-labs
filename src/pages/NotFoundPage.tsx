import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" canonical="/404" />

      <section className="pt-32 pb-section-sm md:pt-40 md:pb-section min-h-screen flex items-center">
        <div className="container-main text-center">
          <span className="inline-block mb-6 px-3 py-1.5 text-xs font-medium tracking-wider uppercase text-accent-blue bg-accent-blue/8 border border-accent-blue/15 rounded-full">
            404
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-text-primary mb-5">
            This page doesn't exist.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl mx-auto mb-10">
            The page you're looking for may have been moved or removed. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" size="lg">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
          <p className="mt-10 text-sm text-text-tertiary">
            Or explore{' '}
            <Link to="/services" className="text-accent-blue hover:underline">
              Services
            </Link>
            ,{' '}
            <Link to="/work" className="text-accent-blue hover:underline">
              Work
            </Link>
            , or{' '}
            <Link to="/blog" className="text-accent-blue hover:underline">
              Blog
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
