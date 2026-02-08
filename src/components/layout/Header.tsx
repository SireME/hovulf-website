import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/projects", label: "Projects" },
  { href: "/impact", label: "Impact" },
  { href: "/leadership", label: "Leadership" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-bold text-primary"
        >
          <Image
            src="/assets/images/image1.png"
            alt="HOVULF logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full bg-white object-contain"
            priority
          />
          <span>HOVULF</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/donate"
          className="rounded-md bg-primary px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}
