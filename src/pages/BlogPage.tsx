import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { blogPosts } from '../data/blog';
import { COMPANY } from '../config/company';

export function BlogPage() {
  return (
    <>
      <SEO
        title="Blog"
        description={`Technical insights and engineering articles from ${COMPANY.name}. Software architecture, AI engineering, backend development, and more.`}
        canonical="/blog"
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <SectionHeader
            label="Blog"
            title="Technical insights."
            description="Engineering perspectives on software architecture, AI systems, backend development, and building products that scale."
          />
        </div>
      </section>

      <section className="pb-section-sm md:pb-section">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full p-6 bg-bg-card border border-border-primary rounded-xl hover:border-border-accent hover:bg-bg-card-hover transition-all duration-300 focus-ring"
                >
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-blue bg-accent-blue/10 border border-accent-blue/20 rounded">
                      {post.category}
                    </span>
                    {post.isDraft && (
                      <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-text-muted bg-bg-tertiary border border-border-primary rounded">
                        Draft
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Read more */}
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-text-tertiary group-hover:text-accent-blue transition-colors">
                    <span>Read article</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
