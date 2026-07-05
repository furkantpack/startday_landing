'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Root({
  children,
  className,
  variant = 'line',
}: {
  children?: ReactNode;
  className?: string;
  variant?: 'line' | 'line-text' | 'line-spacing';
}) {
  if (variant === 'line-text') {
    return (
      <div className={cn('relative flex items-center justify-center py-1', className)}>
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[var(--stroke-soft-200)]" />
        <span className="relative bg-white px-3 text-[12px] font-medium tracking-[0.08em] text-[var(--text-soft-400)]">
          {children}
        </span>
      </div>
    );
  }

  if (variant === 'line-spacing') {
    return (
      <div className={cn('py-1.5', className)}>
        <div className="h-px w-full bg-[var(--stroke-soft-200)]" />
      </div>
    );
  }

  return <div className={cn('h-px w-full bg-[var(--stroke-soft-200)]', className)} />;
}
