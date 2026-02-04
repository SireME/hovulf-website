import Image from "next/image";
import DonationMethods from "@/components/donate/DonationMethods";
import DonationImpact from "@/components/donate/DonationImpact";
import Transparency from "@/components/donate/Transparency";

export default function DonatePage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <h1 className="mb-6 text-4xl font-bold">Support Our Work</h1>

        <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
            alt="Volunteers supporting community families"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
          />
        </div>

        <p className="mb-12 text-lg text-gray-700">
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
