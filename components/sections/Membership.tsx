import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans, whatsappUrl } from "@/lib/site";

export function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-lime/7 blur-[140px]"
        aria-hidden="true"
      />
      <div className="container-gm section-space relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div data-reveal className="reveal">
            <SectionHeading
              eyebrow="Membership plans"
              title={
                <>
                  Choose Your
                  <br />
                  <span className="text-lime">Commitment.</span>
                </>
              }
              intro="Straightforward plans for every stage — from a single session to a full year of training."
            />
          </div>
          <div
            data-reveal
            className="reveal flex shrink-0 items-center gap-3 border border-white/12 bg-panel px-4 py-3 lg:mb-2"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <p className="text-[0.62rem] font-semibold tracking-[0.14em] text-chalk/80 uppercase">
              Admissions open · Walk in today
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              data-reveal
              className={`reveal group relative flex flex-col border p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.popular
                  ? "border-lime bg-[linear-gradient(160deg,rgba(200,255,0,0.11),rgba(15,17,14,0.95)_45%)] shadow-[0_24px_70px_-45px_rgba(200,255,0,0.55)]"
                  : "border-white/10 bg-panel hover:border-white/25"
              }`}
              style={
                { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
              }
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime px-3 py-1.5 text-[0.55rem] font-bold tracking-[0.16em] whitespace-nowrap text-ink uppercase">
                  Most popular
                </span>
              )}

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-[1.45rem] leading-none tracking-wide text-chalk">
                  {plan.name}
                </h3>
                <span
                  className={`text-[0.55rem] font-semibold tracking-[0.14em] uppercase ${
                    plan.popular ? "text-lime" : "text-lime/70"
                  }`}
                >
                  0{index + 1}
                </span>
              </div>
              <p className="mt-2 text-[0.76rem] leading-relaxed text-ash">
                {plan.note}
              </p>

              <div className="mt-6 flex items-end gap-1.5">
                <span className="font-display text-[2.9rem] leading-[0.8] tracking-tight text-chalk">
                  {plan.price}
                </span>
                <span className="pb-0.5 text-[0.72rem] text-ash">
                  {plan.unit}
                </span>
              </div>

              <div className="my-6 h-px w-full bg-white/10" />

              <ul className="flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[0.78rem] leading-snug text-chalk/78"
                  >
                    <Check
                      size={13}
                      strokeWidth={3}
                      className="mt-0.5 shrink-0 text-lime"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Join Now — ${plan.name} on WhatsApp`}
                className={`btn mt-7 w-full ${
                  plan.popular ? "btn-lime" : "btn-outline"
                }`}
              >
                Join Now
                <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-white/8 pt-5 sm:flex-row sm:items-center">
          <p className="text-[0.68rem] leading-relaxed text-ash/85">
            Prices above are sample estimates for this demonstration website.
            Please confirm current plans at the GM GYM front desk.
          </p>
          <p className="shrink-0 text-[0.6rem] font-semibold tracking-[0.14em] text-lime/80 uppercase">
            Every plan includes floor access
          </p>
        </div>
      </div>
    </section>
  );
}
