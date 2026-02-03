import Link from "next/link";

const programs = [
  {
    title: "Health & Nutrition",
    description:
      "Community health outreach, HIV & SRHR education, and nutrition support for vulnerable households.",
  },
  {
    title: "Livelihoods & Economic Empowerment",
    description:
      "Income-generating activities including poultry farming and vocational skills for women and youth.",
  },
  {
    title: "Protection & Gender Equality",
    description:
      "Prevention of gender-based violence and safe spaces for girls and women.",
  },
];

export default function ProgramsPreview() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="font-semibold text-xl mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {program.description}
              </p>
              <Link
                href="/programs"
                className="text-primary font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

