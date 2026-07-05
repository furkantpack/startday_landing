'use client';

import type { HTMLAttributes, InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Root({ className, children }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('w-full', className)}>{children}</div>;
}

export function Wrapper({ className, children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex h-12 items-center gap-3 rounded-2xl border border-[var(--stroke-soft-200)] bg-white px-4 text-[var(--text-sub-600)] shadow-[0_2px_10px_rgba(15,23,42,0.03)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full border-0 bg-transparent text-[16px] text-[var(--text-strong-950)] outline-none placeholder:text-[#98a2b3]',
        className,
      )}
      {...props}
    />
  );
}
