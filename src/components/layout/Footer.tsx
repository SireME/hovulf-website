import Link from "next/link";

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
