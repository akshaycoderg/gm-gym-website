import Link from "next/link";
import { Dumbbell } from "lucide-react";

export function Logo({
  light = true,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href="#home"
      title="GM GYM — back to top"
      className="group flex items-center gap-3"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center bg-lime text-ink transition-transform duration-300 group-hover:-rotate-6">
        <Dumbbell size={22} strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span className="flex flex-col">
        <span
          className={`font-display text-[1.55rem] leading-[0.9] tracking-[0.03em] ${
            light ? "text-chalk" : "text-ink"
          }`}
        >
          GM <span className="text-lime">GYM</span>
        </span>
        {!compact && (
          <span
            className={`mt-1 text-[0.48rem] font-semibold tracking-[0.28em] uppercase ${
              light ? "text-ash" : "text-ink/55"
            }`}
          >
            Strength · Conditioning
          </span>
        )}
      </span>
    </Link>
  );
}
