'use client';

import type { LabelHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Root({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn('text-[14px] font-medium text-[var(--text-strong-950)]', className)}
      {...props}
    />
  );
}
