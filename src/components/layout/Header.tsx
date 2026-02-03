import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/projects", label: "Projects" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg text-primary">
          HOVULF
        </Link>

        <nav className="hidden md:flex gap-6">
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
          className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}

