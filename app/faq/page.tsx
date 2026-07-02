import { constructMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions (FAQ) | IV7 Game",
  description: "Find answers to all your questions about IV7 Game APK download, real cash rewards, deposits, and game rules.",
  url: "https://iv7-s.com/faq",
});

const faqs = [
  {
    question: "How do I download the IV7 APK?",
    answer: "You can securely download the official IV7 APK directly from our homepage by clicking the 'Download' button. Ensure you allow installations from unknown sources in your Android settings.",
  },
  {
    question: "Is IV7 safe to play?",
    answer: "Yes, IV7 is 100% safe and secure. We use advanced encryption to protect your data and all our games run on certified Random Number Generators (RNGs) for fair play.",
  },
  {
    question: "How do I deposit and withdraw money?",
    answer: "We support multiple secure payment methods including UPI, Bank Transfer, and Crypto. Deposits are instant, and withdrawals are processed within 24 hours.",
  },
  {
    question: "What is the IV7 Referral Program?",
    answer: "Our Agent Rewards program allows you to earn commissions by inviting friends. You earn a percentage based on their gameplay, with no upper limit on your earnings.",
  },
  {
    question: "Are there any joining bonuses?",
    answer: "Yes! New players can claim exclusive welcome bonuses and IPL rewards upon signing up and making their first deposit.",
  },
];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://iv7-s.com" },
          { name: "FAQ", url: "https://iv7-s.com/faq" },
        ]}
      />
      <FAQSchema items={faqs} />
      <Header />
      <main className="flex-1 flex flex-col py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#DF264D]">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-300 mb-10">
          Find answers to the most common questions about the IV7 Game APK download and platform.
        </p>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h2 className="text-xl font-semibold mb-3 text-white">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
