import DonationMethods from "@/components/donate/DonationMethods";
import DonationImpact from "@/components/donate/DonationImpact";
import Transparency from "@/components/donate/Transparency";

export default function DonatePage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">Support Our Work</h1>

        <p className="text-lg text-gray-700 mb-12">
          Your donation helps restore dignity, create livelihoods, improve
          health, and protect vulnerable girls, women, children, and families
          in Cameroon.
        </p>

        <DonationMethods />
        <DonationImpact />
        <Transparency />
      </div>
    </section>
  );
}

