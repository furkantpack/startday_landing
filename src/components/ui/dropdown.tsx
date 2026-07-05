'use client';

import * as React from 'react';
import type { ComponentType, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

const DropdownContext = React.createContext<{ open: boolean; setOpen: (value: boolean) => void } | null>(null);

export function Root({
  children,
  defaultOpen = false,
}: {
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return <DropdownContext.Provider value={{ open, setOpen }}>{children}</DropdownContext.Provider>;
}

export function Trigger({
  asChild,
  children,
}: {
  asChild?: boolean;
  children: React.ReactElement;
}) {
  const context = React.useContext(DropdownContext);
  if (!context) return children;
  const props = {
    onClick: () => context.setOpen(!context.open),
  };
  return asChild ? React.cloneElement(children, props) : <button {...props}>{children}</button>;
}

export function Content({ className, children }: HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(DropdownContext);
  if (!context?.open) return null;
  return (
    <div
      className={cn(
        'mt-3 w-full rounded-[20px] border border-[var(--stroke-soft-200)] bg-white p-1.5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Group({ className, children }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-0.5', className)}>{children}</div>;
}

export function Item({
  className,
  children,
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-[14px] font-medium text-[var(--text-sub-600)] transition hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function ItemIcon({
  as,
  className,
  src,
}: {
  as: ComponentType<{ className?: string }> | 'img';
  className?: string;
  src?: string;
}) {
  if (as === 'img') {
    return <img src={src} alt="" className={cn('size-4.5 shrink-0', className)} />;
  }
  const Icon = as;
  return <Icon className={cn('size-4.5 shrink-0 text-[var(--text-soft-400)]', className)} />;
}
