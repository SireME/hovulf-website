import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <p className="text-lg text-gray-700 mb-10">
          Have a question, partnership proposal, or want to learn more about
          our work? We’d love to hear from you.
        </p>

        {/* Contact Details */}
        <div className="mb-12 bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Details</h2>

          <p className="text-gray-700">
            📍 <strong>Address:</strong> Kake I, Mbonge Road, Kumba, SWR Cameroon
          </p>
          <p className="text-gray-700">
            📞 <strong>Phone:</strong> 237 675 10 05 37 / 237 651 51 04 48
          </p>
          <p className="text-gray-700">
            ✉️ <strong>Email:</strong> hovulfcameroon@gmail.com
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

