import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

interface Props {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <p className="text-gray-600 mb-6">
          📍 {project.location} • 📅 {project.year}
          {project.partner && ` • 🤝 ${project.partner}`}
        </p>

        <p className="text-lg text-gray-700 mb-10">
          {project.description}
        </p>

        {/* Objectives */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Objectives</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {project.objectives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Activities */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Key Activities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {project.activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Outcomes */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Expected Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {project.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

