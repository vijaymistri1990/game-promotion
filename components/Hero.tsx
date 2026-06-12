"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  // Floating particles helper
  const particles = Array.from({ length: 20 });

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Dark & Neon Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/1.jpeg"
          alt="IV7: Neon Reckoning background skyline"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-[#030308]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030308] via-transparent to-[#030308]/50" />
        {/* Neon blue and purple ambient glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-cyan/40"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 text-center flex flex-col items-center">
        {/* Game Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 px-4 py-1.5 glass-panel rounded-full text-xs font-mono uppercase tracking-widest text-neon-cyan flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
          IPL Exclusive Benefits Live
        </motion.div>

        {/* Game Title Logo — wrapped in H1 for SEO */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-72 h-24 md:w-[420px] md:h-36 mb-6 select-none"
          aria-label="IV7 Game – Official Gaming Platform"
        >
          {/* Visually hidden SEO H1 text */}
          <span className="sr-only">
            IV7 Game – Download IV7 App | Official IV7 Gaming Platform
          </span>
          <Image
            src="/logo.png"
            alt="IV7 Game – Official Gaming Platform Logo"
            fill
            priority
            className="object-contain"
          />
        </motion.h1>

        {/* Catchy Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-sans"
        >
          Join IV7, a rising star in the tech industry since 2023. Enjoy 1,000+ high-quality fair play games, exclusive IPL benefits, 24/7 active support, and earn rewards with millions of fans across South Asia and beyond.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center relative"
        >
          <motion.a
            href="https://share-rxapq9cajg.iv7.info/share/agent/AA6TPXPF?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-3 px-10 py-5 font-mono font-bold uppercase text-black bg-gradient-to-r from-neon-pink via-[#ff2a85] to-neon-purple rounded-sm overflow-hidden cursor-pointer w-full sm:w-auto shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 15px rgba(255, 0, 127, 0.4)",
                "0 0 30px rgba(255, 0, 127, 0.8)",
                "0 0 15px rgba(255, 0, 127, 0.4)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            {/* Background scanning light / shimmer effect */}
            <motion.span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
              initial={{ left: "-100%" }}
              animate={{ left: "150%" }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0.8,
              }}
            />
            <Download className="w-5 h-5 relative z-10 animate-bounce" />
            <span className="relative z-10">Download</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
