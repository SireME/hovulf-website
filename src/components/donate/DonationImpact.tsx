const impacts = [
  {
    amount: "10,000 CFA (~$17)",
    description:
      "Sanitary pads for girls, basic nutrition support for a vulnerable person.",
  },
  {
    amount: "25,000 CFA (~$45)",
    description:
      "Training materials for income-generating activities or poultry feed for a girls’ group.",
  },
  {
    amount: "50,000 CFA (~$90)",
    description:
      "Startup kit for one beneficiary in poultry farming or livelihood skills.",
  },
  {
    amount: "100,000+ CFA",
    description:
      "Scale up projects, support education for young mothers and orphans, or fund research.",
  },
];

export default function DonationImpact() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">
        What Your Donation Supports
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {impacts.map((impact) => (
          <div
            key={impact.amount}
            className="bg-muted p-6 rounded-lg"
          >
            <h3 className="font-semibold text-xl mb-2">
              {impact.amount}
            </h3>
            <p className="text-gray-700">
              {impact.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

