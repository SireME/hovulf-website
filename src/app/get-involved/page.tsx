import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">Get Involved</h1>

        <p className="text-lg text-gray-700 mb-12">
          There are many ways to support our mission and make a difference
          in the lives of vulnerable communities.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Volunteer */}
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Volunteer</h2>
            <p className="text-gray-700 mb-4">
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

          {/* Partner */}
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Partner With Us</h2>
            <p className="text-gray-700 mb-4">
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

          {/* Sponsor */}
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Sponsor a Project</h2>
            <p className="text-gray-700 mb-4">
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

