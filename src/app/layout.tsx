import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "Hope for the Vulnerable Foundation (HOVULF)",
    template: "%s | HOVULF",
  },
  description:
    "Hope for the Vulnerable Foundation (HOVULF) empowers girls, women, children, and the elderly in Cameroon through health, education, livelihoods, and protection programs.",
  keywords: [
    "NGO Cameroon",
    "Girls empowerment",
    "Women empowerment",
    "UNICEF partner NGO",
    "Poultry farming projects",
    "Gender-based violence prevention",
    "Community health Cameroon",
  ],
  authors: [{ name: "Hope for the Vulnerable Foundation" }],
  metadataBase: new URL("https://hovulf.vercel.app"), // update after custom domain
  openGraph: {
    title: "Hope for the Vulnerable Foundation",
    description:
      "Restoring hope and protecting dignity for vulnerable communities in Cameroon.",
    type: "website",
    locale: "en_US",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
