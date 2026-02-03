export default function PrivacyPolicyPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Privacy & Data Protection Policy</h1>

        <p className="mb-4">
          Hope for the Vulnerable Foundation (HOVULF) is committed to protecting
          the privacy and personal data of beneficiaries, donors, staff, and
          partners.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Data We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Names and contact information</li>
          <li>Program and demographic data</li>
          <li>Donation and financial records</li>
          <li>Photos and testimonials (with consent)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Your Rights</h2>
        <p>
          Individuals may request access, correction, or deletion of their
          personal data at any time.
        </p>
      </div>
    </section>
  );
}

