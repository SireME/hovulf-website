import Image from "next/image";
import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <h1 className="mb-6 text-4xl font-bold">Get Involved</h1>

        <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=80"
            alt="Volunteers coordinating community outreach"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
          />
        </div>

        <p className="mb-12 text-lg text-gray-700">
          There are many ways to support our mission and make a difference
          in the lives of vulnerable communities.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h2 className="mb-3 text-2xl font-semibold">Volunteer</h2>
            <p className="mb-4 text-gray-700">
              Join our team in community outreach, training, research,
              and advocacy activities.
            </p>
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Sign up →
            </Link>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="mb-3 text-2xl font-semibold">Partner With Us</h2>
            <p className="mb-4 text-gray-700">
              We collaborate with NGOs, donors, institutions, and private
              sector partners.
            </p>
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Become a partner →
            </Link>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="mb-3 text-2xl font-semibold">Sponsor a Project</h2>
            <p className="mb-4 text-gray-700">
              Support a specific project and directly impact vulnerable
              communities.
            </p>
            <Link
              href="/projects"
              className="text-primary font-medium hover:underline"
            >
              View projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
