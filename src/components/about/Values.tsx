const values = [
  "Compassion & Service",
  "Equity & Inclusion",
  "Transparency & Accountability",
  "Respect & Dignity",
  "Community Participation",
  "Empowerment",
];

export default function Values() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Our Core Values</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {values.map((value) => (
          <div
            key={value}
            className="border rounded-lg p-4 text-center font-medium"
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

