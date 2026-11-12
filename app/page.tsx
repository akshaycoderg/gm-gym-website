import { Hero } from "@/components/sections/Hero";
import { MarqueeBand } from "@/components/sections/MarqueeBand";
import { About } from "@/components/sections/About";
import { Membership } from "@/components/sections/Membership";
import { Facilities } from "@/components/sections/Facilities";
import { Trainers } from "@/components/sections/Trainers";
import { Transformations } from "@/components/sections/Transformations";
import { Reviews } from "@/components/sections/Reviews";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { TrialCta } from "@/components/sections/TrialCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <About />
      <Membership />
      <Facilities />
      <Trainers />
      <Transformations />
      <Reviews />
      <Gallery />
      <Contact />
      <TrialCta />
    </>
  );
}
