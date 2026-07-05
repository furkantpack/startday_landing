'use client';

import { Slot } from "@radix-ui/react-slot";
import type { ComponentType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonRootProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "neutral";
  mode?: "filled" | "ghost" | "stroke";
  size?: "medium" | "xsmall" | "xxsmall";
};

const sizeClasses = {
  medium: "h-11 px-5 text-sm font-semibold",
  xsmall: "h-10 w-10",
  xxsmall: "h-8 px-3 text-sm font-medium",
} as const;

const variantClasses = {
  primary: {
    filled:
      "bg-[var(--primary-base)] text-white shadow-[0_10px_24px_rgba(59,91,246,0.2)] hover:bg-[var(--primary-hover)]",
    ghost:
      "bg-transparent text-[var(--text-sub-600)] hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]",
    stroke:
      "border border-[var(--stroke-soft-200)] bg-white text-[var(--text-strong-950)] hover:bg-[var(--bg-weak-50)]",
  },
  neutral: {
    filled: "bg-[var(--bg-weak-50)] text-[var(--text-strong-950)]",
    ghost:
      "bg-transparent text-[var(--text-sub-600)] hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]",
    stroke:
      "border border-[var(--stroke-soft-200)] bg-white text-[var(--text-sub-600)] hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)]",
  },
} as const;

export function Root({
  asChild,
  className,
  variant = "neutral",
  mode = "ghost",
  size = "medium",
  type,
  ...props
}: ButtonRootProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl transition duration-200 disabled:pointer-events-none disabled:opacity-60",
        sizeClasses[size],
        variantClasses[variant][mode],
        className,
      )}
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    />
  );
}

type ButtonIconProps = HTMLAttributes<HTMLSpanElement> & {
  as: ComponentType<{ className?: string }>;
  className?: string;
};

export function Icon({ as: IconComponent, className, ...props }: ButtonIconProps) {
  return (
    <span className="inline-flex shrink-0" {...props}>
      <IconComponent className={className} />
    </span>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center", className)}>{children}</span>;
}
