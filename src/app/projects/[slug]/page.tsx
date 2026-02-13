import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="relative mb-8 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/assets/images/image11.jpeg"
            alt="Poultry farming project in action"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-xl rounded-2xl bg-white/70 px-6 py-3 text-center text-2xl font-bold text-gray-900 backdrop-blur">
              {project.title}
            </div>
          </div>
        </div>

        <p className="mb-6 text-sm text-gray-500">
          📍 {project.location} • 📅 {project.year}
          {project.partner && ` • 🤝 ${project.partner}`}
        </p>

        <p className="mb-10 text-lg text-gray-700">{project.description}</p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Objectives</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              {project.objectives.map((objective) => (
                <li key={objective}>• {objective}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Key Activities</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              {project.activities.map((activity) => (
                <li key={activity}>• {activity}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Expected Outcomes</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>• {outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
