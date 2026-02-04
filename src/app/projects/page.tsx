import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1200&q=80",
    alt: "Poultry farming project in action",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    alt: "Community program support session",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="mb-6 text-4xl font-bold">Our Projects</h1>

        <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
            alt="Community development project in action"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
          />
        </div>

        <p className="mb-10 text-gray-600">
          Our projects focus on empowering vulnerable girls, women, children,
          and communities through sustainable, community-driven interventions.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-lg border p-6 transition hover:shadow-md"
            >
              <h2 className="mb-2 text-2xl font-semibold">
                {project.title}
              </h2>

              <p className="mb-4 text-gray-600">{project.summary}</p>

              <p className="mb-4 text-sm text-gray-500">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
