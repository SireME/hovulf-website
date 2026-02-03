import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="font-semibold text-white mb-3">
            Hope for the Vulnerable Foundation
          </h3>
          <p className="text-sm">
            Restoring hope and protecting dignity for vulnerable communities
            across Cameroon.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/donate">Donate</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold text-white mb-3">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/policies/privacy">Privacy Policy</Link></li>
            <li><Link href="/policies/safeguarding">Child Safeguarding</Link></li>
            <li><Link href="/policies/transparency">Financial Transparency</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} Hope for the Vulnerable Foundation. All rights reserved.
      </div>
    </footer>
  );
}

