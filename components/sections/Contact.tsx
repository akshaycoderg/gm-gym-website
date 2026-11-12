import {
  ArrowUpRight,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { generalWhatsappUrl, site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative bg-ink">
      <div className="container-gm section-space">
        <div data-reveal className="reveal">
          <SectionHeading
            eyebrow="Contact us"
            title={
              <>
                Visit <span className="text-lime">GM GYM.</span>
              </>
            }
            intro="Walk in, call, or send a message on WhatsApp. We're behind Sahara States in Jankipuram."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 lg:col-span-5">
            <a
              href={site.phoneHref}
              data-reveal
              className="reveal group flex items-start gap-4 border border-white/10 bg-panel p-5 transition-colors hover:border-lime/40 sm:p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-lime/25 bg-lime/8 text-lime">
                <Phone size={18} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.56rem] font-semibold tracking-[0.2em] text-ash uppercase">
                  Call the gym
                </p>
                <p className="mt-1.5 font-display text-[1.6rem] leading-none tracking-wide text-chalk transition-colors group-hover:text-lime">
                  {site.phoneDisplay}
                </p>
                <p className="mt-1.5 text-[0.68rem] text-ash">
                  Tap to call from your phone
                </p>
              </div>
            </a>

            <a
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="reveal group flex items-start gap-4 border border-white/10 bg-panel p-5 transition-colors hover:border-lime/40 sm:p-6"
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-lime/25 bg-lime/8 text-lime">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.56rem] font-semibold tracking-[0.2em] text-ash uppercase">
                  Location
                </p>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-chalk/85">
                  {site.address}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[0.6rem] font-semibold tracking-[0.12em] text-lime uppercase">
                  Get directions
                  <ArrowUpRight size={12} aria-hidden="true" />
                </span>
              </div>
            </a>

            <div
              data-reveal
              className="reveal border border-white/10 bg-panel p-5 sm:p-6"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-lime" aria-hidden="true" />
                <p className="text-[0.56rem] font-semibold tracking-[0.2em] text-ash uppercase">
                  Opening hours
                </p>
              </div>
              <dl className="mt-4 space-y-3">
                {site.hours.map((entry) => (
                  <div
                    key={entry.day}
                    className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-[0.78rem] text-chalk/75">{entry.day}</dt>
                    <dd
                      className={`text-[0.78rem] font-semibold ${
                        entry.time === "Closed" ? "text-ash/85" : "text-lime"
                      }`}
                    >
                      {entry.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-[0.64rem] text-ash/85">
                Timings are indicative for this demo. Please confirm holiday
                hours with the gym.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <ButtonLink href={site.phoneHref} arrow={false}>
                <Phone size={14} aria-hidden="true" />
                Call Now
              </ButtonLink>
              <ButtonLink
                href={generalWhatsappUrl}
                external
                variant="outline"
                arrow={false}
              >
                <MessageCircle size={14} aria-hidden="true" />
                WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div
            data-reveal
            className="reveal border border-white/10 bg-gradient-to-b from-panel-2 to-panel p-5 sm:p-7 lg:col-span-7 lg:p-8"
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Enquiry form</p>
                <h3 className="mt-3 font-display text-[1.8rem] leading-none tracking-wide text-chalk">
                  Send us a message
                </h3>
              </div>
              <span className="hidden border border-white/12 px-2.5 py-1.5 text-[0.5rem] font-semibold tracking-[0.14em] text-ash/85 uppercase sm:block">
                No spam
              </span>
            </div>
            <p className="mt-3 max-w-md text-[0.8rem] leading-relaxed text-ash">
              Share your details and we&apos;ll open WhatsApp with a pre-filled
              message. It&apos;s the fastest way to reach the gym.
            </p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="reveal mt-6 overflow-hidden border border-white/10"
        >
          <div className="flex flex-col justify-between gap-2 border-b border-white/10 bg-panel px-5 py-3.5 sm:flex-row sm:items-center">
            <p className="flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.14em] text-chalk/75 uppercase">
              <Navigation size={13} className="text-lime" aria-hidden="true" />
              Behind Sahara States · Jankipuram
            </p>
            <a
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.58rem] font-semibold tracking-[0.12em] text-lime uppercase transition-colors hover:text-chalk"
            >
              Open in Google Maps
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
          <div className="map-frame h-[18rem] sm:h-[22rem]">
            <iframe
              title="Map showing the approximate GM GYM location in Jankipuram, Lucknow"
              src={site.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="border-t border-white/8 bg-panel px-5 py-3 text-[0.58rem] leading-relaxed text-ash/85">
            Map is a location placeholder for this demo. Exact pin and official
            Google Business Profile link can be added later.
          </p>
        </div>
      </div>
    </section>
  );
}
