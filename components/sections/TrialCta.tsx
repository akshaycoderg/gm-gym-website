import Image from "next/image";
import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site, trialWhatsappUrl } from "@/lib/site";

export function TrialCta() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/trial-cta.jpg"
          alt="Gym training floor with strength equipment — illustrative image."
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink/25" />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-lime/12 blur-[100px]"
          aria-hidden="true"
        />
      </div>

      <div className="container-gm relative section-space">
        <div
          data-reveal
          className="reveal mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow eyebrow-center justify-center">
            Your first session is on us
          </p>
          <h2 className="display-xl mt-5 text-chalk">
            Start Your Fitness
            <br />
            Journey <span className="text-lime">Today!</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-7 text-chalk/70">
            Take the first step towards a healthier and stronger you. Book a
            free trial and see the floor for yourself.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={trialWhatsappUrl}
              external
              className="w-full sm:w-auto"
            >
              Book Your Free Trial
            </ButtonLink>
            <a
              href={site.phoneHref}
              className="btn btn-outline w-full sm:w-auto"
            >
              <Phone size={14} aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
          <p className="mt-5 text-[0.6rem] tracking-[0.14em] text-ash/85 uppercase">
            No pressure · Just a conversation about your goals
          </p>
        </div>
      </div>
    </section>
  );
}
