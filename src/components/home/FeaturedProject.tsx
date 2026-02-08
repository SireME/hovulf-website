import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="bg-[#fff8ef] py-16">
      <div className="container mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-6 left-8 rounded-2xl bg-white/80 px-4 py-2 text-xs font-semibold text-gray-700 shadow-lg backdrop-blur">
            UNICEF partnership · 2025
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/assets/images/image11.jpeg"
              alt="Poultry farming project participants"
              width={840}
              height={520}
              className="animate-fade-up h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/25 via-transparent to-transparent" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-gray-900">Featured Project</h2>
          <h3 className="mt-4 text-2xl font-semibold text-primary">
            Poultry Farming for Adolescent Girls & Young Women
          </h3>

          <p className="mt-4 text-gray-700">
            In partnership with UNICEF and the Kumba North Health District, this
            project empowers adolescent girls and young women through poultry
            farming as a sustainable income-generating activity.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">📍 Kumba North</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">🐔 Livelihoods</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">🤝 UNICEF</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">📅 2025</span>
          </div>

          <Link
            href="/projects/poultry-farming-kumba-north"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200/50 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            View Project Details
          </Link>
        </div>
      </div>
    </section>
  );
}
