import {
  ArrowUp,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navLinks, site } from "@/lib/site";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.2h2.6l.4-3h-3V8.9c0-.87.28-1.47 1.55-1.47h1.58V4.73c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.18H8v3h2.55V21h2.95z" />
    </svg>
  );
}

function YoutubeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="M10.5 9.2 15 12l-4.5 2.8V9.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const membershipLinks = [
  "Daily Pass",
  "Monthly Plan",
  "Half-Yearly Plan",
  "Annual Plan",
];

const facilityLinks = [
  "Strength Training",
  "Cardio",
  "Free Weights",
  "Functional Training",
];

const socials = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Facebook", Icon: FacebookIcon },
  { label: "YouTube", Icon: YoutubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060706]">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <div className="container-gm relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-8">
            <Logo />
            <p className="mt-5 max-w-xs text-[0.82rem] leading-[1.8] text-ash">
              Jankipuram&apos;s trusted hub for strength and conditioning.
              Beginner-friendly guidance, dedicated training zones and a floor
              that keeps you moving.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ label, Icon }) => (
                <span
                  key={label}
                  title={`${label} link — to be added`}
                  aria-label={`${label} — social link placeholder`}
                  role="img"
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-ash/50"
                >
                  <Icon size={15} />
                </span>
              ))}
            </div>
            <p className="mt-3 text-[0.54rem] tracking-[0.12em] text-ash/85 uppercase">
              Social links are placeholders
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm tracking-[0.12em] text-chalk">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.76rem] text-ash transition-colors hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm tracking-[0.12em] text-chalk">
              Membership
            </h3>
            <ul className="mt-4 space-y-2.5">
              {membershipLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#membership"
                    className="text-[0.76rem] text-ash transition-colors hover:text-lime"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm tracking-[0.12em] text-chalk">
              Facilities
            </h3>
            <ul className="mt-4 space-y-2.5">
              {facilityLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#facilities"
                    className="text-[0.76rem] text-ash transition-colors hover:text-lime"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm tracking-[0.12em] text-chalk">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-[0.74rem] leading-relaxed text-ash">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-2 transition-colors hover:text-lime"
                >
                  <Phone size={13} className="mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors hover:text-lime"
                >
                  <MapPin size={13} className="mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                  <span>{site.address}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={13} className="mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                <span>
                  Mon–Sat: 6:00 AM – 9:30 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/8 py-6 pb-24 sm:flex-row sm:items-center sm:pb-6">
          <p className="text-[0.63rem] leading-relaxed text-ash/85">
            © {new Date().getFullYear()} GM GYM. All rights reserved. ·{" "}
            <span className="text-ash/85">
              Demonstration website — sample content, pricing and imagery.
            </span>
          </p>
          <div className="flex items-center gap-5">
            <span className="text-[0.58rem] font-semibold tracking-[0.14em] text-ash/85 uppercase">
              Jankipuram · Lucknow
            </span>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center border border-white/12 text-chalk transition-colors hover:border-lime hover:bg-lime hover:text-ink"
            >
              <ArrowUp size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
