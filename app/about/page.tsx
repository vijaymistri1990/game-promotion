import { constructMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "About Us | IV7 Game APK Download Platform",
  description: "Learn about IV7 Gaming, the ultimate real cash gaming platform. Discover our mission, our games, and why millions trust us.",
  url: "https://iv7-s.com/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://iv7-s.com" },
          { name: "About Us", url: "https://iv7-s.com/about" },
        ]}
      />
      <Header />
      <main className="flex-1 flex flex-col py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#DF264D]">About IV7 Gaming</h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to IV7, the world's most trusted real cash gaming platform. 
          Founded with a mission to deliver unparalleled gaming experiences, we offer a diverse range of 
          games including Aviator Pro, Dragon Tiger, and Teen Patti.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-300 mb-6">
          Our mission is to provide a fair, transparent, and exhilarating gaming environment for players globally. 
          With our cutting-edge technology and a billion-dollar rewards program, we redefine what a gaming platform should be.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose IV7?</h2>
        <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
          <li>1000+ Real Cash Games</li>
          <li>Certified Fair-Play algorithms and RNGs</li>
          <li>Massive Agent Rewards Program</li>
          <li>24/7 Dedicated Customer Support</li>
          <li>Instant withdrawals and secure deposits</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
