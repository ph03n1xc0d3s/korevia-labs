import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue text-white hover:opacity-90 shadow-lg shadow-accent-purple/20 hover:shadow-accent-cyan/30 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500',
  secondary:
    'bg-bg-elevated text-text-primary border border-border-secondary hover:border-accent-blue/50 hover:bg-bg-card-hover hover:shadow-[0_0_15px_rgba(79,143,255,0.15)] transition-all',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-bg-elevated',
  outline:
    'border border-border-secondary text-text-primary hover:border-accent-blue hover:text-accent-blue hover:shadow-[0_0_15px_rgba(79,143,255,0.15)]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
    'transition-all duration-250 ease-out',
    'focus-ring cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');

  if ('href' in props && props.href) {
    const { href, ...rest } = props;
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }
    return <Link to={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
