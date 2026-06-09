"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  tag: string;
  avatar: string;
  review: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "PHANTOM_NET",
    tag: "@phantom_net_stream",
    avatar: "CN",
    review: "The visual fidelity is absolutely insane. Best cyberpunk aesthetics I've seen in a mobile RPG. Combats are quick, tactical, and highly addictive. The implant system changed my playstyle completely.",
    rating: 5,
  },
  {
    name: "REAPER_V",
    tag: "@reaper_v_pro",
    avatar: "RV",
    review: "Referrals gave me legendary skins for free. Running co-op raids with my squad has never been this smooth. Netcode is amazing, and I get zero delays during matchmaking lobbies.",
    rating: 5,
  },
  {
    name: "ALPHA_SPECTRE",
    tag: "@alpha_spectre_gg",
    avatar: "AS",
    review: "I spent 4 hours straight on character customization. The implant skill nodes allow for insane speed-blitz builds. The developers actually listen to the alpha testing feedback.",
    rating: 5,
  },
  {
    name: "CYBER_QUEEN",
    tag: "@cyberqueen_rts",
    avatar: "CQ",
    review: "The weekly tournaments are tense and rewarding. Our Syndicate dominated this week's slum district map and won high-tier epic loot chests. 10/10 gameplay loop.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      autoPlayTimer.current = setInterval(() => {
        nextReview();
      }, 5000); // Swap reviews every 5 seconds
    } else if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
    
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isPaused, index]);

  const current = reviews[index];

  return (
    <section id="reviews" className="relative py-24 bg-[#030308] overflow-hidden">
      {/* Background glow dots */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
            Squad Intel
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase font-mono tracking-tight text-white">
            COMMUNITY <span className="text-neon-cyan">RECON</span>
          </h2>
          <div className="w-16 h-1 bg-neon-cyan mt-4 rounded" />
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card View with transitions */}
          <div className="min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full glass-panel p-8 md:p-12 rounded-lg relative"
              >
                {/* Glowing border inside */}
                <div className="absolute inset-0 neon-border-glow rounded-lg pointer-events-none" />

                {/* Card Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                  {/* Reviewer Details */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple p-0.5 shadow-md shadow-neon-cyan/10">
                      <div className="w-full h-full bg-[#0d0d18] rounded-full flex items-center justify-center font-mono font-bold text-white text-lg">
                        {current.avatar}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-mono font-black text-white text-lg tracking-wider">
                        {current.name}
                      </h4>
                      <span className="text-xs font-mono text-neon-cyan">{current.tag}</span>
                    </div>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-neon-pink fill-neon-pink filter drop-shadow-[0_0_4px_rgba(255,0,127,0.4)]" 
                      />
                    ))}
                  </div>
                </div>

                {/* Review Message Text */}
                <div className="relative">
                  <MessageSquare className="absolute -top-4 -left-4 w-12 h-12 text-[#111122]/40 -z-10" />
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans italic relative z-10 pl-2">
                    &ldquo;{current.review}&rdquo;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevReview}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 p-3 bg-cyber-card hover:bg-neon-cyan/20 border border-cyber-border rounded hover:border-neon-cyan transition-all duration-300 text-white cursor-pointer z-20 shadow-lg shadow-black/50"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextReview}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 p-3 bg-cyber-card hover:bg-neon-pink/20 border border-cyber-border rounded hover:border-neon-pink transition-all duration-300 text-white cursor-pointer z-20 shadow-lg shadow-black/50"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2.5 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-neon-cyan" : "w-2 bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
