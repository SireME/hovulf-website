import VisionMission from "@/components/about/VisionMission";
import Values from "@/components/about/Values";
import FocusAreas from "@/components/about/FocusAreas";
import Geography from "@/components/about/Geography";
import Partners from "@/components/about/Partners";

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <p className="text-lg text-gray-700 mb-12">
          Hope for the Vulnerable Foundation (HOVULF) is a community-based,
          non-profit organization working to improve the lives of vulnerable
          girls, women, children, and the elderly in Cameroon through
          inclusive, community-driven interventions.
        </p>

        <VisionMission />
        <Values />
        <FocusAreas />
        <Geography />
        <Partners />
      </div>
    </section>
  );
}

