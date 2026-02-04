import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-rose-50 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="container relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Empowering communities across Cameroon
          </p>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Restoring Hope. Protecting Dignity.
            <br />
            Empowering the Vulnerable.
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Hope for the Vulnerable Foundation partners with local leaders to
            expand health access, strengthen livelihoods, and protect girls and
            women with life-changing programs.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/donate"
              className="rounded-md bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-blue-200/60 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Donate Now
            </Link>

            <Link
              href="/projects"
              className="rounded-md border border-primary px-8 py-3 font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
            >
              Support a Project
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -right-6 rounded-2xl bg-white/80 px-4 py-3 text-xs font-semibold text-gray-700 shadow-lg backdrop-blur">
            500+ girls and women empowered
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white/80 px-4 py-3 text-xs font-semibold text-gray-700 shadow-lg backdrop-blur">
            30+ health & protection activities
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80"
              alt="Community members celebrating together"
              width={900}
              height={760}
              className="animate-float h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
