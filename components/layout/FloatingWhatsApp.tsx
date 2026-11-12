import { MessageCircle } from "lucide-react";
import { generalWhatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={generalWhatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GM GYM on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-lime text-ink shadow-lime transition-transform duration-300 hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-lime animate-pulse-ring"
      />
      <MessageCircle size={23} strokeWidth={2.2} aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap border border-white/10 bg-panel px-3 py-2 text-[0.62rem] font-semibold tracking-[0.12em] text-chalk uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
        WhatsApp us
      </span>
    </a>
  );
}
