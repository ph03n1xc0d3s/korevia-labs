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
            className="prose prose-invert max-w-none
              prose-headings:text-text-primary prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-text-primary prose-strong:font-semibold
              prose-em:text-text-secondary
              prose-code:text-accent-blue prose-code:bg-bg-tertiary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-ul:text-text-secondary prose-li:mb-1
              prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline"
          >
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i}>{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i}>{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('- ')) {
                return null; // Handled in groups below
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i}><strong>{line.replace(/\*\*/g, '')}</strong></p>;
              }
              if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
                return <p key={i}><em>{line.replace(/\*/g, '')}</em></p>;
              }
              if (line.trim() === '') return null;

              // Handle bold within text
              const parts = line.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={j}>{part.replace(/\*\*/g, '')}</strong>;
                    }
                    // Handle inline code
                    const codeParts = part.split(/(`[^`]+`)/g);
                    return codeParts.map((cp, k) => {
                      if (cp.startsWith('`') && cp.endsWith('`')) {
                        return <code key={`${j}-${k}`}>{cp.replace(/`/g, '')}</code>;
                      }
                      return <span key={`${j}-${k}`}>{cp}</span>;
                    });
                  })}
                </p>
              );
            })}

            {/* Render list items in groups */}
            {(() => {
              const lines = post.content.split('\n');
              const listGroups: { items: string[]; startIndex: number }[] = [];
              let currentGroup: string[] | null = null;
              let groupStart = 0;

              lines.forEach((line, i) => {
                if (line.startsWith('- ')) {
                  if (!currentGroup) {
                    currentGroup = [];
                    groupStart = i;
                  }
                  currentGroup.push(line.replace('- ', ''));
                } else {
                  if (currentGroup) {
                    listGroups.push({ items: currentGroup, startIndex: groupStart });
                    currentGroup = null;
                  }
                }
              });
              if (currentGroup) {
                listGroups.push({ items: currentGroup, startIndex: groupStart });
              }

              return listGroups.map((group) => (
                <ul key={`list-${group.startIndex}`}>
                  {group.items.map((item, j) => {
                    const parts = item.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <li key={j}>
                        {parts.map((part, k) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={k}>{part.replace(/\*\*/g, '')}</strong>;
                          }
                          return <span key={k}>{part}</span>;
                        })}
                      </li>
                    );
                  })}
                </ul>
              ));
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
