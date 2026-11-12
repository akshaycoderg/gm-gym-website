"use client";

import { useEffect } from "react";

/** Lightweight one-time scroll reveal for elements marked with data-reveal. */
export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
