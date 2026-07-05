import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type BadgeRootProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'lighter' | 'filled';
  color?: 'blue' | 'gray';
  children: ReactNode;
};

const styles = {
  lighter: {
    blue: 'bg-[#eef2ff] text-[var(--primary-base)]',
    gray: 'bg-[var(--bg-weak-50)] text-[var(--text-sub-600)]',
  },
  filled: {
    blue: 'bg-[var(--primary-base)] text-white',
    gray: 'bg-[var(--text-strong-950)] text-white',
  },
} as const;

export function Root({
  className,
  variant = 'lighter',
  color = 'blue',
  children,
  ...props
}: BadgeRootProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.04em]',
        styles[variant][color],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
