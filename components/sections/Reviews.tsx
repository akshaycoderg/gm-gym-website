import { ArrowUpRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sampleReviews, site } from "@/lib/site";

function GoogleWord() {
  return (
    <span className="font-display text-lg tracking-wide" aria-label="Google">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-lime/6 blur-[130px]"
        aria-hidden="true"
      />
      <div className="container-gm section-space relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div data-reveal className="reveal lg:col-span-7">
            <SectionHeading
              eyebrow="Member reviews"
              title={
                <>
                  What Our
                  <br />
                  <span className="text-lime">Members Say.</span>
                </>
              }
              intro="A 4.8-star rating and 270+ reviews from the Jankipuram community. Read the latest feedback on Google."
            />
          </div>

          <div
            data-reveal
            className="reveal lg:col-span-5"
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <div className="relative border border-lime/25 bg-[linear-gradient(150deg,rgba(200,255,0,0.08),rgba(15,17,14,0.9)_55%)] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.56rem] font-semibold tracking-[0.2em] text-ash uppercase">
                    Google rating
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="font-display text-[3.4rem] leading-[0.75] tracking-tight text-chalk">
                      {site.rating.score}
                    </span>
                    <span className="pb-1 text-sm text-ash">/ 5</span>
                  </div>
                </div>
                <div className="border border-white/12 bg-white/[0.04] px-2.5 py-2">
                  <GoogleWord />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="flex gap-0.5 text-lime" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <span className="text-[0.72rem] font-medium text-chalk/75">
                  {site.rating.reviews} reviews
                </span>
              </div>

              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lime btn-sm mt-6 w-full"
              >
                View on Google
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <p className="mt-3 text-center text-[0.58rem] leading-relaxed text-ash/85">
                Google listing link is an editable placeholder
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {sampleReviews.map((review, index) => (
            <figure
              key={review.label}
              data-reveal
              className="reveal group relative flex h-full flex-col border border-white/10 bg-panel p-6 transition-colors duration-300 hover:border-lime/35"
              style={
                { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
              }
            >
              <div className="flex items-center justify-between">
                <span className="flex gap-0.5 text-lime" aria-hidden="true">
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <Star key={star} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <span className="border border-white/12 px-2 py-1 text-[0.5rem] font-semibold tracking-[0.14em] text-ash/90 uppercase">
                  Sample
                </span>
              </div>
              <Quote
                size={24}
                className="mt-5 text-lime/30"
                aria-hidden="true"
              />
              <blockquote className="mt-3 flex-1 text-[0.86rem] leading-[1.8] text-chalk/78">
                {review.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/8 pt-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] font-display text-[0.7rem] tracking-wide text-lime">
                  GM
                </span>
                <div>
                  <p className="text-[0.68rem] font-semibold tracking-[0.04em] text-chalk/80">
                    {review.label}
                  </p>
                  <p className="mt-0.5 text-[0.56rem] tracking-[0.08em] text-ash/85 uppercase">
                    Placeholder review
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-[0.62rem] leading-relaxed text-ash/85">
          The three testimonials above are clearly labelled sample placeholders,
          not verified customer reviews. Replace them with real Google reviews
          before publishing. The rating and count are shown as provided by the
          business.
        </p>
      </div>
    </section>
  );
}
