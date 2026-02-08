import Image from "next/image";
import Link from "next/link";
import { leadershipBySlug } from "@/content/siteAssets";

export default function LeadershipPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-gray-900">Leadership</h1>
        <p className="mt-3 max-w-3xl text-gray-700">
          Our leadership and management team steers strategy, governance, and
          operational excellence to serve vulnerable communities with dignity.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipBySlug.map((leader) => (
            <article
              key={leader.slug}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <div className="relative h-72">
                <Image src={leader.image} alt={leader.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{leader.title}</h2>
                <p className="mt-2 text-gray-600">{leader.description}</p>
                <Link
                  href={`/leadership/${leader.slug}`}
                  className="mt-4 inline-block font-medium text-primary hover:underline"
                >
                  View full profile →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
