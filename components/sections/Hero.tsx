import Image from "next/image";
import { Clock, MapPin, Star, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site, trialWhatsappUrl } from "@/lib/site";

const highlights = [
  { icon: Star, value: site.rating.score, label: "Google rating" },
  { icon: Users, value: site.rating.reviews, label: "Member reviews" },
  { icon: Clock, value: "6 AM – 9:30 PM", label: "Mon – Sat" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-[6.5rem] sm:pt-[8rem]"
    >
      <Image
        src="/images/hero.jpg"
        alt="Athlete training with a barbell in a gym — illustrative image."
        fill
        preload
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-[58%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/35" />
      <div
        className="pointer-events-none absolute -top-32 left-1/3 h-[32rem] w-[32rem] rounded-full bg-lime/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-gm relative flex flex-1 items-center py-12 sm:py-16">
        <div className="max-w-[52rem]">
          <div className="fade-rise flex flex-wrap items-center gap-3">
            <span className="eyebrow">Jankipuram · Lucknow</span>
            <span className="hidden h-px w-8 bg-white/20 sm:block" />
            <span className="flex items-center gap-1.5 text-[0.62rem] font-semibold tracking-[0.16em] text-ash uppercase">
              <MapPin size={12} className="text-lime" aria-hidden="true" />
              Behind Sahara States
            </span>
          </div>

          <h1 className="display-hero fade-rise mt-6 max-w-[14ch] text-chalk [--fade-delay:100ms]">
            Transform Your Body.{" "}
            <span className="relative inline-block text-lime">
              Transform Your Life.
              <span
                className="absolute -right-2 -bottom-2 hidden h-3 w-3 bg-lime lg:block"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="fade-rise mt-6 max-w-lg text-[1.02rem] leading-7 text-chalk/72 sm:text-lg [--fade-delay:180ms]">
            Jankipuram&apos;s trusted hub for strength and conditioning. Train
            hard, stay fit — right behind Sahara States.
          </p>

          <div className="fade-rise mt-7 inline-flex items-center gap-3 border border-white/12 bg-white/[0.055] px-3.5 py-2.5 backdrop-blur-md [--fade-delay:240ms]">
            <span className="flex gap-0.5 text-lime" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-[0.7rem] font-semibold tracking-[0.05em] text-chalk">
              {site.rating.score} Rated by {site.rating.reviews} Members
            </span>
          </div>

          <div className="fade-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center [--fade-delay:300ms]">
            <ButtonLink
              href={trialWhatsappUrl}
              external
              className="w-full sm:w-auto"
            >
              Book Free Trial
            </ButtonLink>
            <ButtonLink
              href="#membership"
              variant="outline"
              arrow={false}
              className="w-full sm:w-auto"
            >
              Explore Membership
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="container-gm relative pb-8 sm:pb-10">
        <div className="fade-rise grid grid-cols-1 divide-y divide-white/10 border-t border-white/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0 [--fade-delay:380ms]">
          {highlights.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 py-4 sm:px-6 sm:py-5 first:sm:pl-0 last:sm:pr-0"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-lime/30 bg-lime/8 text-lime">
                <Icon size={15} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg leading-none tracking-wide text-chalk">
                  {value}
                </p>
                <p className="mt-1 text-[0.6rem] font-medium tracking-[0.16em] text-ash uppercase">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 bottom-28 hidden items-center gap-3 text-[0.55rem] font-semibold tracking-[0.22em] text-chalk/40 uppercase lg:flex">
        <span className="h-10 w-px bg-white/20" />
        Scroll to explore
      </div>
    </section>
  );
}
