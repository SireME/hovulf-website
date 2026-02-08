import Link from "next/link";

export default function LocationMap() {
  return (
    <section className="bg-[#edf8f3] py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Find Us</h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            We work with communities in and around Kumba, Cameroon. Use the map
            below for quick location access and directions.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <iframe
            title="HOVULF location map"
            src="https://www.google.com/maps?q=Kumba,+Cameroon&output=embed"
            className="h-[380px] w-full md:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-4">
          <Link
            href="https://www.google.com/maps/search/?api=1&query=Kumba,+Cameroon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Open in Google Maps
          </Link>
        </div>
      </div>
    </section>
  );
}
