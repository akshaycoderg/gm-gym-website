import Image from "next/image";
import { ArrowUpRight, Dumbbell, HeartPulse, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/lib/site";

const icons = {
  users: Users,
  dumbbell: Dumbbell,
  heart: HeartPulse,
};

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-coal">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />
      <div className="container-gm section-space relative">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div data-reveal className="reveal">
              <SectionHeading
                eyebrow="About GM GYM"
                title={
                  <>
                    More Than
                    <br />
                    Just a Gym<span className="text-lime">.</span>
                  </>
                }
                intro="GM GYM is a fitness destination built for people who want to become stronger, healthier and more confident. Whether you are starting your fitness journey or looking to take your training to the next level, our gym provides a motivating environment, dedicated training spaces and approachable guidance."
              />
            </div>

            <div className="mt-10 space-y-0 border-t border-white/10">
              {features.map((feature, index) => {
                const Icon = icons[feature.icon as keyof typeof icons];
                return (
                  <div
                    key={feature.number}
                    data-reveal
                    className="reveal group flex gap-4 border-b border-white/10 py-5"
                    style={
                      { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
                    }
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/12 bg-white/[0.03] text-lime transition-colors duration-300 group-hover:border-lime/45 group-hover:bg-lime/8">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-[0.58rem] font-semibold tracking-[0.16em] text-ash/85">
                          {feature.number}
                        </span>
                        <h3 className="font-sans text-[0.82rem] font-semibold tracking-[0.02em] text-chalk normal-case">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-[0.84rem] leading-[1.7] text-ash">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#membership"
              className="mt-7 inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.16em] text-lime uppercase transition-colors hover:text-chalk"
            >
              See membership options
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div
              data-reveal
              className="reveal relative ml-auto max-w-[40rem]"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <div
                className="absolute -top-3 -right-3 h-28 w-28 border-t border-r border-lime/60"
                aria-hidden="true"
              />
              <div className="group image-shine relative aspect-[4/5] overflow-hidden bg-panel sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/about.jpg"
                  alt="Spacious gym interior with training equipment — illustrative image, not the GM GYM premises."
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute top-5 left-5 border border-white/20 bg-ink/55 px-3 py-2 text-[0.54rem] font-semibold tracking-[0.2em] text-chalk uppercase backdrop-blur-sm">
                  Jankipuram · Lucknow
                </div>

                <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[0.55rem] font-semibold tracking-[0.2em] text-lime uppercase">
                      Beginners welcome
                    </p>
                    <p className="mt-2 max-w-[22rem] font-display text-[1.6rem] leading-tight text-chalk">
                      Start where you are. Build from there.
                    </p>
                  </div>
                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center border border-lime/40 text-lime sm:flex">
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <p className="text-[0.58rem] tracking-[0.16em] text-ash/85 uppercase">
                  Illustrative gym photography
                </p>
                <p className="text-[0.72rem] text-ash/85">
                  4.8 ★ · 270+ member reviews
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">
              {[
                ["Strength", "Barbells · Racks · Plates"],
                ["Cardio", "Treadmills · Cycles"],
                ["Functional", "Kettlebells · Bodyweight"],
              ].map(([title, detail], index) => (
                <div
                  key={title}
                  data-reveal
                  className="reveal border border-white/10 bg-panel/60 p-3.5 sm:p-4"
                  style={
                    { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
                  }
                >
                  <p className="font-display text-base tracking-wide text-lime sm:text-lg">
                    {title}
                  </p>
                  <p className="mt-1 text-[0.62rem] leading-relaxed text-ash sm:text-[0.68rem]">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
