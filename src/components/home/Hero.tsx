import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#eef4fb] pt-14 pb-24 md:pt-18 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative bg-gradient-to-br from-[#293a9b] via-[#2a2f84] to-[#1f255f] p-8 text-white md:p-10">
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                Hope for the Vulnerable Foundation
              </p>
              <h1 className="mt-5 text-4xl leading-tight font-bold md:text-5xl">
                Empowering Lives Through Dignity, Safety, and Opportunity.
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/90 md:text-base">
                We support vulnerable girls, women, children, and the elderly
                through practical programs in health, education, protection,
                gender equality, and livelihoods.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="rounded-md bg-[#ff6a21] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#eb5b14]"
                >
                  Donate Now
                </Link>
                <Link
                  href="/programs"
                  className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#2a2f84]"
                >
                  Explore Programs
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/assets/images/image6.jpeg"
                alt="HOVULF outreach supporting girls in community"
                width={1200}
                height={860}
                className="h-[360px] w-full object-cover md:h-[420px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-transparent" />
            </div>
          </div>

          <div className="relative z-10 mx-4 -mt-6 rounded-2xl bg-[#ff6a21] p-4 text-white shadow-xl md:mx-8 md:-mt-8 md:flex md:items-center md:justify-between md:p-5">
            <div>
              <p className="text-xs font-semibold tracking-wide uppercase text-white/80">
                Why we work
              </p>
              <p className="mt-1 text-lg font-bold md:text-xl">
                Every vulnerable person deserves dignity, safety, and a chance to thrive.
              </p>
            </div>
            <div className="mt-3 flex gap-2 md:mt-0">
              <Link
                href="/get-involved"
                className="rounded-md bg-white px-4 py-2 text-xs font-semibold text-[#ff6a21]"
              >
                Be a Volunteer
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-white/70 px-4 py-2 text-xs font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid gap-3 px-4 pt-5 pb-6 md:grid-cols-3 md:px-8">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-xs text-slate-600">Girls & women empowered</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
              <p className="text-2xl font-bold text-primary">10+</p>
              <p className="text-xs text-slate-600">Communities reached</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
              <p className="text-2xl font-bold text-primary">30+</p>
              <p className="text-xs text-slate-600">Protection & health activities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
