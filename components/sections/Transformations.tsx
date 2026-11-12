import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trialWhatsappUrl } from "@/lib/site";

const visuals = [
  { image: "/images/transformation-1.jpg", label: "Strength" },
  { image: "/images/transformation-2.jpg", label: "Consistency" },
  { image: "/images/transformation-3.jpg", label: "Conditioning" },
];

export function Transformations() {
  return (
    <section className="relative overflow-hidden bg-coal">
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-lime/8 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-gm section-space relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div data-reveal className="reveal lg:col-span-7">
            <SectionHeading
              eyebrow="Progress"
              title={
                <>
                  Real Effort.
                  <br />
                  <span className="text-lime">Real Progress.</span>
                </>
              }
              intro="Transformation is built one session at a time. Show up, put in the work and let consistency do the rest."
            />
          </div>
          <div
            data-reveal
            className="reveal lg:col-span-5 lg:pb-2 lg:text-right"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <p className="ml-auto max-w-sm text-[0.68rem] leading-relaxed text-ash/85">
              The visuals below are illustrative placeholders only. They do not
              represent real GM GYM members, and no specific result is claimed
              or guaranteed.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visuals.map((visual, index) => (
            <div
              key={visual.label}
              data-reveal
              className="reveal group border border-white/10 bg-panel p-2.5 transition-colors duration-300 hover:border-lime/40"
              style={
                { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
              }
            >
              <div className="relative overflow-hidden">
                <div className="grid grid-cols-2 gap-px bg-white/15">
                  {[0, 1].map((side) => (
                    <div key={side} className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={visual.image}
                        alt={`Illustrative fitness progress visual — not a real GM GYM member result.`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 24vw, 16vw"
                        className={`object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                          side === 0
                            ? "grayscale contrast-75 brightness-75"
                            : "saturate-[1.15]"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                      <span className="absolute bottom-2.5 left-2.5 text-[0.52rem] font-bold tracking-[0.16em] text-chalk/75 uppercase">
                        {side === 0 ? "Before" : "After"}
                      </span>
                    </div>
                  ))}
                </div>

                <span className="absolute top-3 left-1/2 -translate-x-1/2 border border-white/20 bg-ink/75 px-2.5 py-1 text-[0.5rem] font-semibold tracking-[0.14em] text-lime uppercase backdrop-blur-sm">
                  Illustrative
                </span>
                <span className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lime/50 bg-ink text-lime">
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </div>
              <div className="flex items-center justify-between px-2 py-3">
                <p className="text-[0.6rem] font-semibold tracking-[0.15em] text-chalk/75 uppercase">
                  {visual.label}
                </p>
                <Sparkles size={13} className="text-lime/70" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div data-reveal className="reveal">
            <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.3rem)] leading-none tracking-wide text-chalk">
              Your Transformation Starts Here!
            </h3>
            <p className="mt-2 text-[0.8rem] text-ash">
              One free trial is all it takes to see how it feels.
            </p>
          </div>
          <ButtonLink href={trialWhatsappUrl} external className="shrink-0">
            Book Free Trial
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
