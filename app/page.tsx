import { setupAssets } from "@/lib/setup-assets";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gameplay from "@/components/Gameplay";
import Rewards from "@/components/Rewards";
import Download from "@/components/Download";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  // Execute server-side check and copy of the generated image assets
  setupAssets();
  // JSON-LD Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IV7 Gaming",
    "url": "https://www.iv7.game",
    "logo": "https://www.iv7.game/favicon1.png",
    "sameAs": [
      "https://twitter.com/iv7game",
      "https://discord.gg/iv7game",
      "https://youtube.com/iv7game",
      "https://instagram.com/iv7game"
    ]
  };

  // JSON-LD SoftwareApplication Schema
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "IV7 Gaming Platform",
    "operatingSystem": "iOS 12.0 or higher, Android 8.0 or higher",
    "applicationCategory": "GameApplication",
    "genre": "Global Gaming Hub",
    "screenshot": [
      "https://www.iv7.game/1.jpeg",
      "https://www.iv7.game/2.jpeg",
      "https://www.iv7.game/3.jpeg",
      "https://www.iv7.game/4.jpeg"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "18450"
    }
  };

  // JSON-LD Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.iv7.game"
      }
    ]
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
      </main>

      <Footer />
    </>
  );
}
