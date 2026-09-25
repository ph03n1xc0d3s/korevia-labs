interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className = '' }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium text-text-tertiary bg-bg-tertiary border border-border-primary rounded-md ${className}`}
    >
      {name}
    </span>
  );
}
