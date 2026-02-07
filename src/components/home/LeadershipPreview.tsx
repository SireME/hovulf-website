import Image from "next/image";
import Link from "next/link";
import { leadershipBySlug } from "@/content/siteAssets";

export default function LeadershipPreview() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
            <p className="mt-2 text-gray-600">
              Meet the people guiding HOVULF&apos;s mission and daily implementation.
            </p>
          </div>
          <Link href="/leadership" className="font-semibold text-primary hover:underline">
            View all leaders →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {leadershipBySlug.slice(0, 3).map((leader) => (
            <article key={leader.slug} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative h-60">
                <Image src={leader.image} alt={leader.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{leader.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{leader.description}</p>
                <Link href={`/leadership/${leader.slug}`} className="mt-3 inline-block text-primary hover:underline">
                  Read profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
