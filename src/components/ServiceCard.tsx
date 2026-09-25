import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../data/services';
import { TechBadge } from './TechBadge';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <Link
        to={service.href}
        className="group block h-full p-6 md:p-7 bg-bg-card border border-border-primary rounded-xl hover:border-border-accent hover:bg-bg-card-hover transition-all duration-300 focus-ring"
      >
        {/* Icon */}
        <div className="w-11 h-11 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-5 group-hover:bg-accent-blue/15 transition-colors">
          <Icon size={20} className="text-accent-blue" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.tags.map((tag) => (
            <TechBadge key={tag} name={tag} />
          ))}
        </div>

        {/* Arrow */}
        <div className="flex items-center gap-1.5 text-sm font-medium text-text-tertiary group-hover:text-accent-blue transition-colors">
          <span>Learn more</span>
          <ArrowRight
            size={14}
            className="transform group-hover:translate-x-1 transition-transform"
          />
        </div>
      </Link>
    </motion.div>
  );
}
