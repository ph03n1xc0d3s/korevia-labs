import type { ReactNode } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blog';
import { TechBadge } from '../components/TechBadge';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogType="article"
      />

      <article className="pt-32 pb-section-sm md:pt-40 md:pb-section">
        <div className="container-narrow">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-secondary transition-colors focus-ring rounded-md"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
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
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15] text-text-primary mb-5">
              {post.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <TechBadge key={tag} name={tag} />
              ))}
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-none [&_strong]:text-text-primary [&_strong]:font-semibold [&_em]:text-text-secondary
              [&_code]:text-accent-blue [&_code]:bg-bg-tertiary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
              [&_a]:text-accent-blue [&_a]:no-underline hover:[&_a]:underline"
          >
            {(() => {
              const renderInline = (text: string) => {
                const parts = text.split(/(\*\*[^*]+\*\*)/g);
                return parts.map((part, j) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j}>{part.replace(/\*\*/g, '')}</strong>;
                  }
                  const codeParts = part.split(/(`[^`]+`)/g);
                  return codeParts.map((cp, k) =>
                    cp.startsWith('`') && cp.endsWith('`') ? (
                      <code key={`${j}-${k}`}>{cp.replace(/`/g, '')}</code>
                    ) : (
                      <span key={`${j}-${k}`}>{cp}</span>
                    )
                  );
                });
              };

              const lines = post.content.split('\n');
              const elements: ReactNode[] = [];
              let listBuffer: string[] = [];

              const flushList = (key: string) => {
                if (listBuffer.length === 0) return;
                elements.push(
                  <ul key={key} className="list-disc pl-5 text-text-secondary space-y-1 mb-4">
                    {listBuffer.map((item, j) => (
                      <li key={j}>{renderInline(item)}</li>
                    ))}
                  </ul>
                );
                listBuffer = [];
              };

              lines.forEach((line, i) => {
                if (line.startsWith('- ')) {
                  listBuffer.push(line.replace('- ', ''));
                  return;
                }
                flushList(`list-${i}`);

                if (line.startsWith('## ')) {
                  elements.push(
                    <h2 key={i} className="text-2xl font-bold tracking-tight text-text-primary mt-12 mb-4">
                      {line.replace('## ', '')}
                    </h2>
                  );
                } else if (line.startsWith('### ')) {
                  elements.push(
                    <h3 key={i} className="text-xl font-bold tracking-tight text-text-primary mt-8 mb-3">
                      {line.replace('### ', '')}
                    </h3>
                  );
                } else if (line.startsWith('**') && line.endsWith('**')) {
                  elements.push(
                    <p key={i} className="text-text-secondary leading-relaxed mb-4">
                      <strong>{line.replace(/\*\*/g, '')}</strong>
                    </p>
                  );
                } else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
                  elements.push(
                    <p key={i} className="text-text-secondary leading-relaxed mb-4">
                      <em>{line.replace(/\*/g, '')}</em>
                    </p>
                  );
                } else if (line.trim() !== '') {
                  elements.push(
                    <p key={i} className="text-text-secondary leading-relaxed mb-4">
                      {renderInline(line)}
                    </p>
                  );
                }
              });
              flushList('list-end');

              return elements;
            })()}
          </motion.div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border-primary flex justify-between">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-2 text-sm text-text-tertiary hover:text-text-secondary transition-colors focus-ring rounded-md"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                {prevPost.title}
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-2 text-sm text-text-tertiary hover:text-text-secondary transition-colors focus-ring rounded-md text-right"
              >
                {nextPost.title}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </article>
    </>
  );
}
