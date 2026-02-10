import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import VisionMissionCards from "@/components/home/VisionMissionCards";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import FeaturedProject from "@/components/home/FeaturedProject";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import CTA from "@/components/home/CTA";
import LocationMap from "@/components/home/LocationMap";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VisionMissionCards />
      <ImpactStats />
      <ProgramsPreview />
      <FeaturedProject />
      <LeadershipPreview />
      <CTA />
      <LocationMap />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}
