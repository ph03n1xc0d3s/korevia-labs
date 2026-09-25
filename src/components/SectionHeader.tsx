import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {label && (
        <span className="inline-block mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase text-accent-blue bg-accent-blue/10 border border-accent-blue/20 rounded-full">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15] text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
