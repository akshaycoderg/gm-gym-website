import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trainers, generalWhatsappUrl } from "@/lib/site";

export function Trainers() {
  return (
    <section id="trainers" className="relative overflow-hidden bg-ink">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-35"
        aria-hidden="true"
      />
      <div className="container-gm section-space relative">
        <div className="mx-auto max-w-2xl text-center">
          <div data-reveal className="reveal">
            <SectionHeading
              eyebrow="The floor team"
              title={
                <>
                  Train With the
                  <br />
                  <span className="text-lime">Right Guidance.</span>
                </>
              }
              intro="Approachable support for your first session or your heaviest lift — with form, consistency and confidence at the centre."
              align="center"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <article
              key={trainer.role}
              data-reveal
              className="reveal group relative overflow-hidden border border-white/10 bg-panel transition-colors duration-300 hover:border-lime/45"
              style={
                { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
              }
            >
              <div className="image-shine relative aspect-[4/5] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={`Illustrative training guidance image for ${trainer.role} — not an actual GM GYM trainer.`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 border border-white/20 bg-ink/65 px-2.5 py-1.5 text-[0.53rem] font-semibold tracking-[0.13em] text-chalk/75 uppercase backdrop-blur-sm">
                  <BadgeCheck size={11} className="text-lime" aria-hidden="true" />
                  Demo profile
                </span>

                <div className="absolute right-5 bottom-5 left-5">
                  <p className="text-[0.55rem] font-semibold tracking-[0.2em] text-lime uppercase">
                    Coach 0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-[1.75rem] leading-none tracking-wide text-chalk">
                    {trainer.role}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-5">
                <p className="text-[0.7rem] leading-relaxed text-ash">
                  {trainer.focus}
                </p>
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask about ${trainer.role} guidance on WhatsApp`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-ash transition-all duration-300 hover:border-lime hover:bg-lime hover:text-ink"
                >
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border border-white/8 bg-panel/50 px-5 py-4 sm:flex-row sm:items-center">
          <p className="text-[0.68rem] leading-relaxed text-ash/85">
            These are sample role-based profiles created for this demonstration
            website. No qualifications or experience are claimed. Replace with
            real coach details before launch.
          </p>
          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-[0.62rem] font-semibold tracking-[0.14em] text-lime uppercase transition-colors hover:text-chalk"
          >
            Ask about guidance
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
