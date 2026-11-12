import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "lime" | "outline" | "dark";

const variants: Record<Variant, string> = {
  lime: "btn-lime",
  outline: "btn-outline",
  dark: "btn-dark",
};

export function ButtonLink({
  href,
  children,
  variant = "lime",
  className = "",
  external = false,
  arrow = true,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  arrow?: boolean;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`btn ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />}
    </a>
  );
}
