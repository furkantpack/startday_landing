'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Root({
  asChild,
  className,
  variant = 'primary',
  type,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: 'primary';
}) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        'inline-flex h-12 w-full items-center justify-center rounded-2xl px-5 text-[16px] font-semibold transition duration-200',
        variant === 'primary' &&
          'bg-[linear-gradient(180deg,#4d6bff_0%,#4361ee_100%)] text-white shadow-[0_14px_28px_rgba(67,97,238,0.24)] hover:brightness-[0.98]',
        className,
      )}
      type={asChild ? undefined : (type ?? 'button')}
      {...props}
    />
  );
}
