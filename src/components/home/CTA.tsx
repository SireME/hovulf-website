import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16 text-white">
      <div className="container relative mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold">
            Stand with vulnerable communities
          </p>
          <h2 className="text-3xl font-bold">Join Us in Restoring Hope</h2>

          <p className="mt-4 text-white/90">
            Your support helps create lasting change for vulnerable girls,
            women, children, and families in Cameroon.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="rounded-md bg-white px-8 py-3 font-semibold text-primary shadow-lg shadow-white/30 transition hover:-translate-y-0.5 hover:bg-gray-100"
            >
              Donate Now
            </Link>

            <Link
              href="/get-involved"
              className="rounded-md border border-white px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-primary"
            >
              Get Involved
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80"
              alt="Volunteers celebrating together"
              width={760}
              height={420}
              className="animate-float h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-purple-500/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
