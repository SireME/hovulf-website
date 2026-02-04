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
        <div className="relative mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
            alt="Community development project in action"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/70 px-6 py-2 text-center text-3xl font-bold text-gray-900 backdrop-blur">
              Our Projects
            </div>
          </div>
        </div>

        <p className="mb-10 text-gray-600">
          Our projects focus on empowering vulnerable girls, women, children,
          and communities through sustainable, community-driven interventions.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-40">
                <Image
                  src={projectImages[index % projectImages.length].src}
                  alt={projectImages[index % projectImages.length].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-2xl font-semibold">
                  {project.title}
                </h2>

                <p className="mb-4 text-gray-600">{project.summary}</p>

                <p className="mb-4 text-sm text-gray-500">
                  📍 {project.location} • 📅 {project.year}
                  {project.partner ? (
                    <span> • 🤝 {project.partner}</span>
                  ) : null}
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
