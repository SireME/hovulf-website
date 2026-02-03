import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Featured Project
        </h2>

        <div className="bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">
            Poultry Farming for Adolescent Girls & Young Women
          </h3>

          <p className="text-gray-700 mb-4">
            In partnership with UNICEF and the Kumba North Health District,
            this project empowers adolescent girls and young women through
            poultry farming as a sustainable income-generating activity.
          </p>

          <p className="text-sm text-gray-600 mb-6">
            📍 Kumba North Health District • 🐔 Livelihoods • 🤝 UNICEF • 📅 2025
          </p>

          <Link
            href="/projects/poultry-farming-kumba-north"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            View Project Details
          </Link>
        </div>
      </div>
    </section>
  );
}

