import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-bold mb-6">Our Projects</h1>

        <p className="text-gray-600 mb-10">
          Our projects focus on empowering vulnerable girls, women, children,
          and communities through sustainable, community-driven interventions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {project.summary}
              </p>

              <p className="text-sm text-gray-500 mb-4">
                📍 {project.location} • 📅 {project.year}
                {project.partner && ` • 🤝 ${project.partner}`}
              </p>

              <Link
                href={`/projects/${project.slug}`}
                className="text-primary font-medium hover:underline"
              >
                View project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

