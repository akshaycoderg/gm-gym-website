import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  Dumbbell,
  HeartPulse,
  UserRound,
  Users,
  Weight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facilities } from "@/lib/site";

const icons = [Dumbbell, HeartPulse, Weight, Activity, UserRound, Users];

export function Facilities() {
  return (
    <section id="facilities" className="relative bg-coal">
      <div className="container-gm section-space">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div data-reveal className="reveal">
            <SectionHeading
              eyebrow="What's inside"
              title={
                <>
                  Our <span className="text-lime">Facilities.</span>
                </>
              }
              intro="Everything you need to achieve your fitness goals — under one roof."
            />
          </div>
          <div
            data-reveal
            className="reveal hidden items-center gap-3 text-[0.6rem] font-semibold tracking-[0.16em] text-ash uppercase lg:flex"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <span className="h-px w-12 bg-lime/60" />
            Six training zones · One floor
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => {
            const Icon = icons[index] ?? Dumbbell;
            return (
              <article
                key={facility.title}
                data-reveal
                className="reveal group relative overflow-hidden border border-white/10 bg-panel transition-colors duration-300 hover:border-lime/50"
                style={
                  { "--reveal-delay": `${(index % 3) * 70}ms` } as React.CSSProperties
                }
              >
                <div className="image-shine relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={`${facility.title} at GM GYM — illustrative gym photography.`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/5 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center border border-white/20 bg-ink/55 text-lime backdrop-blur-sm">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <span className="absolute top-4 right-4 text-[0.55rem] font-semibold tracking-[0.16em] text-chalk/80 uppercase">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative -mt-14 p-5 sm:p-6">
                  <p className="text-[0.55rem] font-semibold tracking-[0.2em] text-lime uppercase">
                    {facility.tag}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="font-display text-[1.4rem] leading-tight tracking-wide text-chalk sm:text-[1.55rem]">
                      {facility.title}
                    </h3>
                    <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-ash transition-all duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-2 max-w-[32ch] text-[0.77rem] leading-[1.7] text-ash">
                    {facility.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-[0.62rem] leading-relaxed text-ash/85">
          All photographs are illustrative gym imagery. Facility availability
          can be confirmed directly with GM GYM.
        </p>
      </div>
    </section>
  );
}
