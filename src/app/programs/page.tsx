import Image from "next/image";
import { programSections } from "@/content/siteAssets";

const programs = [
  {
    title: "Health & Nutrition",
    description:
      "Community health outreach, maternal care, SRHR education, and nutrition support for vulnerable households.",
    image: "/assets/images/image9.jpeg",
    alt: "Health outreach team supporting community members",
  },
  {
    title: "Livelihoods & Economic Empowerment",
    description:
      "Income-generating activities including poultry farming, vocational skills, and entrepreneurship for women and youth.",
    image: "/assets/images/image2.jpeg",
    alt: "Women participating in livelihood skills training",
  },
  {
    title: "Protection & Gender Equality",
    description:
      "Prevention of gender-based violence, child safeguarding, and safe spaces for girls and women.",
    image: "/assets/images/image6.jpeg",
    alt: "Community protection program meeting",
  },
];

const allActivities = programSections.flatMap((section) => section.items);

export default function ProgramsPage() {
  return (
    <section className="bg-[#eef7f5] py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="relative mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/assets/images/image3.jpeg"
            alt="HOVULF program beneficiaries during training"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/70 px-6 py-2 text-center text-3xl font-bold text-gray-900 backdrop-blur">
              Programs
            </div>
          </div>
        </div>

        <p className="mb-10 text-lg text-gray-700">
          Our programs are designed with communities to meet urgent needs while
          building long-term resilience and opportunity.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <div className="relative h-44">
                <Image
                  src={program.image}
                  alt={program.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {program.title}
                </h2>
                <p className="mt-3 text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="all-activities" className="mt-14 scroll-mt-20">
          <h3 className="mb-5 text-2xl font-bold text-gray-900">All General Activities</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allActivities.map((item) => (
              <figure key={item.image} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative h-48">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <figcaption className="p-4">
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
