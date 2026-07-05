'use client';

import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Root({
  className,
  size,
  children,
}: HTMLAttributes<HTMLDivElement> & {
  size?: '40' | '48';
  children: ReactNode;
}) {
  const sizes = {
    '40': 'size-10',
    '48': 'size-12',
  };

  return (
    <div className={cn('relative inline-flex shrink-0 overflow-hidden rounded-full', size ? sizes[size] : '', className)}>
      {children}
    </div>
  );
}

export function Image({ className, alt = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img alt={alt} className={cn('h-full w-full object-cover', className)} {...props} />;
}

export function Indicator({
  className,
  position = 'top',
  children,
}: HTMLAttributes<HTMLDivElement> & {
  position?: 'top';
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'absolute right-0 top-0 translate-x-1/4 -translate-y-1/4',
        position === 'top' && 'right-0 top-0',
        className,
      )}
    >
      {children}
    </div>
  );
}
