import Image from "next/image";
import Link from "next/link";
import ProgramsCarousel from "@/components/home/ProgramsCarousel";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-16">
      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
          <p className="mt-4 text-gray-600">
            Integrated programs that amplify local resilience, create income,
            and promote safe, inclusive communities.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
              alt="Women collaborating in a community workshop"
              width={800}
              height={500}
              className="animate-float h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 via-transparent to-sky-500/30" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white text-lg font-bold text-primary">
                  0{index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {program.title}
              </h3>
              <p className="mt-3 text-gray-600">{program.description}</p>
              <Link
                href="/programs"
                className="mt-4 inline-flex items-center gap-2 font-medium text-primary transition group-hover:gap-3"
              >
                Learn more <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
