import Image from "next/image";

const programs = [
  {
    title: "Health & Nutrition",
    description:
      "Community health outreach, maternal care, SRHR education, and nutrition support for vulnerable households.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    alt: "Health outreach team supporting community members",
  },
  {
    title: "Livelihoods & Economic Empowerment",
    description:
      "Income-generating activities including poultry farming, vocational skills, and entrepreneurship for women and youth.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    alt: "Women participating in livelihood skills training",
  },
  {
    title: "Protection & Gender Equality",
    description:
      "Prevention of gender-based violence, child safeguarding, and safe spaces for girls and women.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    alt: "Community protection program meeting",
  },
];

export default function ProgramsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="relative mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
            alt="NGO program team supporting community members"
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
      </div>
    </section>
  );
}
