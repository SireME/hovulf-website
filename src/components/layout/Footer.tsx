import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10H8v3h2.6v8h2.9Z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M6.5 8A1.5 1.5 0 1 1 6.5 5a1.5 1.5 0 0 1 0 3ZM5 9h3v10H5V9Zm5 0h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.6 2 3.6 4.7V19h-3v-4.9c0-1.2 0-2.6-1.6-2.6-1.6 0-1.8 1.2-1.8 2.5V19h-3V9Z"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M23 12c0 2.7-.3 4.5-.7 5.4-.4.8-1 1.4-1.8 1.8-.9.4-2.7.7-5.4.7h-6c-2.7 0-4.5-.3-5.4-.7-.8-.4-1.4-1-1.8-1.8C1.3 16.5 1 14.7 1 12s.3-4.5.7-5.4c.4-.8 1-1.4 1.8-1.8C4.4 4.3 6.2 4 8.9 4h6c2.7 0 4.5.3 5.4.7.8.4 1.4 1 1.8 1.8.4.9.7 2.7.7 5.5ZM10 9v6l5-3-5-3Z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-semibold text-white">
            Hope for the Vulnerable Foundation
          </h3>
          <p className="text-sm">
            Restoring hope and protecting dignity for vulnerable communities
            across Cameroon.
          </p>

          <div className="mt-5">
            <p className="mb-3 text-xs uppercase tracking-wide text-gray-400">
              Connect with us
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="rounded-full border border-gray-700 bg-gray-800 p-2 text-gray-200 transition hover:border-primary hover:text-primary"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/leadership">Leadership</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/donate">Donate</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-white">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/policies/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/policies/transparency">Financial Transparency</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Hope for the Vulnerable Foundation. All rights reserved.
      </div>
    </footer>
  );
}
