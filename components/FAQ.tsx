"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What platforms is IV7.COM: Neon Reckoning available on?",
    answer: "IV7.COM is currently available for iOS and Android mobile platforms. We offer full cross-play and cross-progression, meaning you can play with friends on either platform and access your progress by logging into your unified neural account.",
  },
  {
    question: "Is IV7.COM: Neon Reckoning free to play?",
    answer: "Yes, IV7.COM: Neon Reckoning is completely free to play. Players can download and play the full game without paying. Optional in-game purchases are purely cosmetic weapon skins, badges, and avatar modifications, meaning there are no pay-to-win mechanics.",
  },
  {
    question: "How do I participate in weekly Syndicate Tournaments?",
    answer: "Weekly tournaments are held inside the app. To register, form a team of up to four players and register in the 'Tournaments' tab under the game dashboard before Thursday midnight. Winning teams get real credits, gear, and entry into the Seasonal Pro brackets.",
  },
  {
    question: "What are the requirements to run the game on Android?",
    answer: "For Android, you need Android 13 or higher. The minimum requirement is 8GB RAM with a Snapdragon 8 Gen 1 processor (or equivalent). For the best experience at 60 FPS (with ray-tracing enabled), we recommend 12GB RAM and Snapdragon 8 Gen 2 or newer.",
  },
  {
    question: "Can I transfer my account progress between Apple and Google?",
    answer: "Absolutely. When you launch the game, link your progress to a unified 'Neural net' account. This secures your weapon armory, custom implants, currency, and skins across both Apple and Google devices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  // Generate FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative py-24 bg-[#030308] overflow-hidden">
      {/* JSON-LD Structured Data for FAQ SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Glow overlays */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-cyan mb-3">
            Hacker Support
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase font-mono tracking-tight text-white">
            FREQUENTLY ASKED <span className="text-neon-pink">ANSWERS</span>
          </h2>
          <div className="w-16 h-1 bg-neon-pink mt-4 rounded" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#0d0d18] border-neon-cyan/40 shadow-lg shadow-neon-cyan/5"
                    : "bg-cyber-card border-cyber-border hover:border-gray-800"
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="font-mono text-sm md:text-base font-bold text-white group-hover:text-neon-cyan transition-colors flex items-center gap-3 pr-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? "text-neon-cyan" : "text-neon-pink"}`} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 group-hover:text-white transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-neon-cyan" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content Panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-400 text-xs md:text-sm leading-relaxed border-t border-cyber-border/50 mt-1">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
