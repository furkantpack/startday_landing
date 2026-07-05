'use client';

import type { ComponentType, HTMLAttributes, ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Root({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  brand?: 'linkedin';
  mode?: 'stroke';
}) {
  return (
    <button
      className={cn(
        'inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[var(--stroke-soft-200)] bg-white px-4 text-[15px] font-medium text-[var(--text-strong-950)] transition hover:bg-[var(--bg-weak-50)]',
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export function Icon({
  as: IconComponent,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & {
  as: ComponentType<{ className?: string }>;
}) {
  return (
    <span className="inline-flex shrink-0" {...props}>
      <IconComponent className={className} />
    </span>
  );
}
