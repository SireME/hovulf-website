import Image from "next/image";
import Link from "next/link";
import ProgramsCarousel from "@/components/home/ProgramsCarousel";
import { programSections } from "@/content/siteAssets";

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

const programItems = programSections.flatMap((section) => section.items);
const previewItems = programItems.slice(0, 4);

export default function ProgramsPreview() {
  return (
    <section className="relative overflow-hidden bg-[#eaf6f4] py-16">
      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
          <p className="mt-4 text-gray-600">
            Integrated programs that amplify local resilience, create income,
            and promote safe, inclusive communities.
          </p>
        </div>

        <div className="mb-12">
          <ProgramsCarousel />
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

        <div className="mt-14">
          <div className="mb-5 flex items-end justify-between gap-3">
            <h3 className="text-2xl font-bold text-gray-900">General Activities</h3>
            <Link href="/programs#all-activities" className="text-sm font-semibold text-primary hover:underline">
              View all activities →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {previewItems.map((item) => (
              <figure
                key={item.image}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="relative h-44">
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
