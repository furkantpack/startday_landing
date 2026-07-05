import Link from "next/link";
import type { ComponentType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type LinkButtonRootProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  variant?: "gray";
};

export function Root({
  children,
  className,
  href = "#",
  variant = "gray",
  ...props
}: LinkButtonRootProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center text-[15px] font-medium transition duration-200",
        variant === "gray" && "text-[var(--text-sub-600)]",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

type LinkButtonIconProps = HTMLAttributes<HTMLSpanElement> & {
  as: ComponentType<{ className?: string }>;
  className?: string;
};

export function Icon({ as: IconComponent, className, ...props }: LinkButtonIconProps) {
  return (
    <span className="inline-flex shrink-0" {...props}>
      <IconComponent className={className} />
    </span>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center", className)}>{children}</span>;
}
