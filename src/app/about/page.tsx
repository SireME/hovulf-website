import Image from "next/image";
import VisionMission from "@/components/about/VisionMission";
import Values from "@/components/about/Values";
import FocusAreas from "@/components/about/FocusAreas";
import Geography from "@/components/about/Geography";
import Partners from "@/components/about/Partners";

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <h1 className="mb-6 text-4xl font-bold">About Us</h1>

        <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80"
            alt="HOVULF team engaging with community members"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
            priority
          />
        </div>

        <p className="mb-12 text-lg text-gray-700">
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
