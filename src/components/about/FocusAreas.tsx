const focusAreas = [
  "AGYW Empowerment & Protection",
  "Livelihood Skills for Vulnerable Girls & Women",
  "Gender-Based Violence (GBV) Prevention & Support",
  "Nutrition Support for Vulnerable Households",
  "Community Health Outreach (HIV, HPV, SRHR, NCDs)",
  "Child Protection & Elderly Support Programs",
  "Community-Based Research & Learning",
];

export default function FocusAreas() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">What We Focus On</h2>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {focusAreas.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>
    </div>
  );
}

