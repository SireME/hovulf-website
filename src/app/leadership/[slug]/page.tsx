import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { leadershipBySlug } from "@/content/siteAssets";

type LeadershipProfilePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return leadershipBySlug.map((leader) => ({ slug: leader.slug }));
}

export default async function LeadershipProfilePage({ params }: LeadershipProfilePageProps) {
  const { slug } = await params;
  const profile = leadershipBySlug.find((leader) => leader.slug === slug);

  if (!profile) {
    notFound();
  }

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl px-6">
        <Link href="/leadership" className="text-sm font-medium text-primary hover:underline">
          ← Back to leadership
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          <div className="relative h-[460px] w-full">
            <Image src={profile.image} alt={profile.title} fill className="object-cover" priority />
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900">{profile.title}</h1>
            <p className="mt-4 text-lg text-gray-700">{profile.description}</p>
            <p className="mt-4 text-gray-600">
              {profile.title} plays a key role in implementing HOVULF&apos;s mission
              through transparent leadership, community partnership, and
              inclusive service delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
