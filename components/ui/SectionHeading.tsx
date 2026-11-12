import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
  titleClassName = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : ""} ${className}`}
    >
      <p className={`eyebrow ${centered ? "eyebrow-center" : ""}`}>
        {eyebrow}
      </p>
      <h2 className={`display-lg mt-5 text-chalk ${titleClassName}`}>{title}</h2>
      {intro && (
        <p
          className={`body-copy mt-5 ${centered ? "mx-auto" : ""} max-w-xl`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
