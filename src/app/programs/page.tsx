import Image from "next/image";

const programs = [
  {
    title: "Health & Nutrition",
    description:
      "Community health outreach, maternal care, SRHR education, and nutrition support for vulnerable households.",
  },
  {
    title: "Livelihoods & Economic Empowerment",
    description:
      "Income-generating activities including poultry farming, vocational skills, and entrepreneurship for women and youth.",
  },
  {
    title: "Protection & Gender Equality",
    description:
      "Prevention of gender-based violence, child safeguarding, and safe spaces for girls and women.",
  },
];

export default function ProgramsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="mb-6 text-4xl font-bold">Programs</h1>

        <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80"
            alt="NGO program team supporting community members"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
            priority
          />
        </div>

        <p className="mb-10 text-lg text-gray-700">
          Our programs are designed with communities to meet urgent needs while
          building long-term resilience and opportunity.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-gray-900">
                {program.title}
              </h2>
              <p className="mt-3 text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
