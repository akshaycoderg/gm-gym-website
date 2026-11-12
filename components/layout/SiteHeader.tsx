"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navLinks, site, generalWhatsappUrl } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility strip */}
      <div className="hidden border-b border-white/8 bg-ink/90 backdrop-blur-md sm:block">
        <div className="container-gm flex h-9 items-center justify-between gap-6 text-[0.64rem] tracking-[0.06em] text-ash">
          <p className="flex items-center gap-2">
            <MapPin size={12} className="text-lime" aria-hidden="true" />
            <span className="truncate">{site.address}</span>
          </p>
          <div className="flex shrink-0 items-center gap-5">
            <p className="hidden items-center gap-2 lg:flex">
              <Clock size={12} className="text-lime" aria-hidden="true" />
              Mon–Sat · 6:00 AM – 9:30 PM
            </p>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-semibold text-chalk transition-colors hover:text-lime"
            >
              <Phone size={12} className="text-lime" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || open
            ? "border-white/10 bg-ink/95 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-ink/80 to-transparent"
        }`}
      >
        <div className="container-gm flex h-[4.5rem] items-center justify-between gap-5">
          <Logo />

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 xl:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-active={active === link.href}
                className="nav-link"
                onClick={() => setActive(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message GM GYM on WhatsApp"
              className="hidden h-11 w-11 items-center justify-center border border-white/15 text-chalk transition-colors hover:border-lime hover:text-lime sm:flex xl:hidden 2xl:flex"
            >
              <MessageCircle size={17} aria-hidden="true" />
            </a>
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime btn-sm hidden sm:inline-flex"
            >
              Join Now
              <span aria-hidden="true">→</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-chalk transition-colors hover:border-lime hover:text-lime xl:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={`overflow-hidden border-b border-white/10 bg-ink/98 backdrop-blur-xl transition-[max-height,opacity] duration-300 xl:hidden ${
          open ? "max-h-[calc(100dvh-4.5rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="container-gm flex max-h-[calc(100dvh-4.5rem)] flex-col overflow-y-auto py-5"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-white/8 py-3.5 text-[0.82rem] font-semibold tracking-[0.14em] text-chalk uppercase transition-colors hover:text-lime"
            >
              <span className="flex items-center gap-3">
                <span className="text-[0.6rem] font-normal tracking-[0.1em] text-ash/85">
                  0{index + 1}
                </span>
                {link.label}
              </span>
              <span className="text-lime opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </a>
          ))}

          <div className="mt-5 grid gap-2.5 pb-2 sm:grid-cols-2">
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime w-full"
            >
              Join Now
            </a>
            <a href={site.phoneHref} className="btn btn-outline w-full">
              <Phone size={14} aria-hidden="true" /> Call the gym
            </a>
          </div>
          <p className="mt-4 flex items-start gap-2 pb-1 text-[0.72rem] leading-relaxed text-ash">
            <MapPin size={13} className="mt-0.5 shrink-0 text-lime" aria-hidden="true" />
            {site.address}
          </p>
        </nav>
      </div>
    </header>
  );
}
