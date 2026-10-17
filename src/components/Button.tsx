import React from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';

interface ButtonProps {
  children?: React.ReactNode;
  href?: string;
  variant?: 'solid-orange' | 'outline' | 'ghost' | 'dashed-placeholder';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  external?: boolean;
  disabled?: boolean;
  placeholderLabel?: string;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'solid-orange',
  size = 'md',
  className = '',
  onClick,
  external = false,
  disabled = false,
  placeholderLabel,
  'aria-label': ariaLabel,
}) => {
  const isPlaceholder = variant === 'dashed-placeholder' || (!href && Boolean(placeholderLabel));

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-mono font-medium rounded-full',
    md: 'px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold rounded-full',
    lg: 'px-6 py-3.5 text-xs font-mono uppercase tracking-widest font-bold rounded-full',
  }[size];

  if (isPlaceholder) {
    return (
      <span
        tabIndex={0}
        role="button"
        aria-disabled="true"
        aria-label={ariaLabel || `${placeholderLabel || 'Link'} - placeholder`}
        className={`inline-flex items-center gap-2 border border-dashed border-[#D8D3C9] text-[#77766F] bg-[#EDE8DF] ${sizeClasses} cursor-not-allowed select-none transition-all hover:border-[#252522]/30 hover:text-[#252522] focus-visible:outline-2 focus-visible:outline-[#687765] ${className}`}
        title="Verified link not yet configured"
      >
        <Lock className="w-3.5 h-3.5 opacity-50" aria-hidden="true" />
        <span>{children || placeholderLabel || '(add link)'}</span>
        <span className="text-[10px] tracking-wider uppercase opacity-40 font-mono">(pending)</span>
      </span>
    );
  }

  const baseStyles =
    'inline-flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#FF6538] focus-visible:outline-offset-3 select-none';

  const variantStyles = {
    'solid-orange':
      'bg-[#FF6538] text-[#080808] font-bold hover:bg-[#ff7b52] hover:shadow-[0_0_24px_rgba(255,101,56,0.45)] border border-[#FF6538]',
    outline:
      'bg-transparent text-[#F2F0EA] border border-white/20 hover:border-white/50 hover:bg-white/[0.05]',
    ghost:
      'bg-white/[0.04] text-[#F2F0EA] border border-white/10 hover:border-white/30 hover:bg-white/[0.08]',
    'dashed-placeholder': '',
  }[variant];

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variantStyles} ${sizeClasses} ${className}`}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <span>{children}</span>
        {external && <ArrowUpRight className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizeClasses} ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
    </button>
  );
};
