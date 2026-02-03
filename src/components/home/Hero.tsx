import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Restoring Hope. Protecting Dignity.
          <br />
          Empowering the Vulnerable.
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Hope for the Vulnerable Foundation works with communities in Cameroon
          to empower girls, women, children, and the elderly through health,
          education, livelihoods, and protection programs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Donate Now
          </Link>

          <Link
            href="/projects"
            className="border border-primary text-primary px-8 py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition"
          >
            Support a Project
          </Link>
        </div>
      </div>
    </section>
  );
}

