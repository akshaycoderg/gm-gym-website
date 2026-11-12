const words = [
  "Strength Training",
  "Functional Fitness",
  "Cardio",
  "Free Weights",
  "Trainer Guidance",
  "Jankipuram",
];

export function MarqueeBand() {
  const content = (
    <span className="flex shrink-0 items-center">
      {words.map((word) => (
        <span key={word} className="flex items-center">
          <span className="px-6 py-3.5 text-[0.68rem] font-bold tracking-[0.2em] whitespace-nowrap text-ink uppercase sm:px-8 sm:text-[0.72rem]">
            {word}
          </span>
          <span className="text-ink/45" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="relative overflow-hidden border-y border-lime bg-lime" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {content}
        {content}
      </div>
    </div>
  );
}
