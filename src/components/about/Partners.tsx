const partners = [
  "UNICEF",
  "UNFPA",
  "World Health Organization (WHO)",
  "PLAN International",
  "Danish Refugee Council",
  "International Rescue Committee (IRC)",
  "Action Against Hunger",
  "Local Councils & Health Districts",
];

export default function Partners() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Our Partners</h2>

      <p className="text-gray-700 mb-4">
        We collaborate with government institutions, UN agencies,
        international NGOs, and community-based networks to ensure
        effective, accountable, and sustainable impact.
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {partners.map((partner) => (
          <li key={partner}>{partner}</li>
        ))}
      </ul>
    </div>
  );
}

