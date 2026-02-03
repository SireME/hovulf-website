import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import FeaturedProject from "@/components/home/FeaturedProject";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ProgramsPreview />
      <FeaturedProject />
      <CTA />
    </>
  );
}

