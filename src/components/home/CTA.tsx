import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">
          Join Us in Restoring Hope
        </h2>

        <p className="mb-8 text-white/90">
          Your support helps create lasting change for vulnerable girls,
          women, children, and families in Cameroon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Donate Now
          </Link>

          <Link
            href="/get-involved"
            className="border border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}

