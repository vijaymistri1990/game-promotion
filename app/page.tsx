import { setupAssets } from "@/lib/setup-assets";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gameplay from "@/components/Gameplay";
import Rewards from "@/components/Rewards";
import Download from "@/components/Download";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SeoContent from "@/components/SeoContent";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const SITE_URL = "https://iv7-s.com";

export const metadata: Metadata = {
  title: "IV7 Game APK Download, IV7 APP & IV7 New Launch (2026Guide)",
  description:
    "The online gaming industry continues to expand rapidly in 2026. Get the official IV7 Game APK Download, IV7 App, and discover the IV7 New Launch. Experience 1,000+ fair-play games.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    title: "IV7 Game APK Download, IV7 APP & IV7 New Launch (2026Guide)",
    description:
      "The online gaming industry continues to expand rapidly in 2026. Get the official IV7 Game APK Download, IV7 App, and discover the IV7 New Launch. Experience 1,000+ fair-play games.",
    images: [
      {
        url: "/1.jpeg",
        width: 1200,
        height: 630,
        alt: "IV7 Gaming Platform – Download & Play Now",
      },
    ],
  },
};

export default function Home() {
  // Execute server-side check and copy of the generated image assets
  setupAssets();

  // JSON-LD Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IV7 Gaming",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 400,
      height: 120,
    },
    description:
      "IV7 is the ultimate gaming platform. Play real cash games like Aviator Pro, Dragon Tiger, and Teen Patti. Enjoy exclusive IPL benefits and a billion-dollar referral rewards program.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    sameAs: [
      "https://twitter.com/iv7game",
      "https://discord.gg/iv7game",
      "https://youtube.com/iv7game",
      "https://instagram.com/iv7game",
    ],
  };

  // JSON-LD SoftwareApplication Schema
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "IV7 Gaming Platform",
    alternateName: "IV7 App",
    url: SITE_URL,
    downloadUrl: `${SITE_URL}/download`,
    operatingSystem: "iOS 12.0 or higher, Android 8.0 or higher",
    applicationCategory: "GameApplication",
    applicationSubCategory: "Online Gaming Platform",
    genre: "Global Gaming Hub",
    inLanguage: "en",
    isAccessibleForFree: true,
    screenshot: [
      `${SITE_URL}/1.jpeg`,
      `${SITE_URL}/2.jpeg`,
      `${SITE_URL}/3.jpeg`,
      `${SITE_URL}/4.jpeg`,
    ],
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "18450",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Top Games: Aviator Pro, Dragon Tiger, Teen Patti, Andar Bahar",
      "1000+ Real Cash and Fair Play Games",
      "IV7 Referral Rewards Program",
      "Exclusive IPL Benefits",
      "24/7 Customer Support",
      "Advanced Anti-Cheat System",
      "Cross-Platform Play",
    ],
  };

  // JSON-LD Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };

  // FAQ Schema (for homepage FAQs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is IV7 Game?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IV7 is the ultimate gaming platform with 1,000+ fair-play games, exclusive IPL benefits, 24/7 support, and a billion-dollar referral rewards program. Download the IV7 app on iOS or Android.",
        },
      },
      {
        "@type": "Question",
        name: "How do I download the IV7 app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can download the IV7 app directly from iv7-s.com. The app is available for iOS (iOS 12.0+) and Android (Android 8.0+) devices.",
        },
      },
      {
        "@type": "Question",
        name: "What is the IV7 referral rewards program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The IV7 referral program (Agent Rewards) lets you earn generous commissions by inviting friends to the platform. Over $1,000,000,000 has been distributed in agent rewards.",
        },
      },
      {
        "@type": "Question",
        name: "Is IV7 safe and fair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. IV7 holds international certifications for a secure and fair gaming environment. All games use certified Random Number Generators (RNG) that are externally audited.",
        },
      },
      {
        "@type": "Question",
        name: "What platforms is IV7 available on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IV7 is available on iOS and Android mobile platforms. Requirements: iOS 12.0+ (iPhone 8 or newer) or Android 8.0+ with at least 2GB RAM and 200MB storage.",
        },
      },
    ],
  };

  return (
    <>
      {/* Inject SEO Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Landing Page layout structure using semantic HTML5 tags */}
      <Header />

      <main className="flex-1 flex flex-col">
        <Hero />
        <Features />
        <Gameplay />
        <Rewards />
        <Download />
        <Testimonials />
        <FAQ />
        <SeoContent />
      </main>

      <Footer />
    </>
  );
}
