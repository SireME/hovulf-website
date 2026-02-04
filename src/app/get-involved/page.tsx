import Image from "next/image";
import Link from "next/link";

const opportunities = [
  {
    title: "Volunteer",
    description:
      "Join our team in community outreach, training, research, and advocacy activities.",
    link: "/contact",
    linkLabel: "Sign up →",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    alt: "Volunteers supporting community outreach",
  },
  {
    title: "Partner With Us",
    description:
      "We collaborate with NGOs, donors, institutions, and private sector partners.",
    link: "/contact",
    linkLabel: "Become a partner →",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "Partners meeting with NGO team",
  },
  {
    title: "Sponsor a Project",
    description:
      "Support a specific project and directly impact vulnerable communities.",
    link: "/projects",
    linkLabel: "View projects →",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    alt: "Community project collaboration",
  },
];

export default function GetInvolvedPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="relative mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80"
            alt="Volunteers coordinating community outreach"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/70 px-6 py-2 text-center text-3xl font-bold text-gray-900 backdrop-blur">
              Get Involved
            </div>
          </div>
        </div>

        <p className="mb-12 text-lg text-gray-700">
          There are many ways to support our mission and make a difference
          in the lives of vulnerable communities.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-lg border bg-white shadow-sm"
            >
              <div className="relative h-40">
                <Image src={item.image} alt={item.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h2 className="mb-3 text-2xl font-semibold">{item.title}</h2>
                <p className="mb-4 text-gray-700">{item.description}</p>
                <Link
                  href={item.link}
                  className="text-primary font-medium hover:underline"
                >
                  {item.linkLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
