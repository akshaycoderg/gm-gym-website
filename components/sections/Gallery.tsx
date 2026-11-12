import Image from "next/image";
import { ArrowUpRight, Camera } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/lib/site";

const spans = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-coal">
      <div className="container-gm section-space">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div data-reveal className="reveal">
            <SectionHeading
              eyebrow="Gallery"
              title={
                <>
                  Inside <span className="text-lime">GM GYM.</span>
                </>
              }
              intro="A look at the training floor, the equipment and the energy you can expect."
            />
          </div>
          <p
            data-reveal
            className="reveal flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.16em] text-ash uppercase"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <Camera size={14} className="text-lime" aria-hidden="true" />
            Illustrative gym photography
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] lg:auto-rows-[14rem] lg:grid-cols-4">
          {gallery.map((item, index) => (
            <figure
              key={item.image}
              data-reveal
              className={`reveal group relative overflow-hidden border border-white/10 bg-panel ${spans[index]}`}
              style={
                { "--reveal-delay": `${(index % 4) * 60}ms` } as React.CSSProperties
              }
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <span className="translate-y-1 text-[0.62rem] font-semibold tracking-[0.14em] text-chalk uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 bg-ink/50 text-chalk opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
