import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl px-6">
        <h1 className="mb-6 text-4xl font-bold">Contact Us</h1>

        <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
            alt="Team meeting with partners"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
          />
        </div>

        <p className="mb-10 text-lg text-gray-700">
          Have a question, partnership proposal, or want to learn more about
          our work? We’d love to hear from you.
        </p>

        <div className="mb-12 rounded-lg bg-muted p-6">
          <h2 className="mb-4 text-2xl font-semibold">Our Contact Details</h2>

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
