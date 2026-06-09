"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";

interface Screenshot {
  src: string;
  title: string;
  category: string;
  desc: string;
}

const screenshots: Screenshot[] = [
  {
    src: "/1.jpeg",
    title: "NEON COMBAT GRID",
    category: "Action / Combat",
    desc: "Engage rogue AI drones using high-powered energy weapons. Master dodging and implant tactical cooldowns to survive the arena.",
  },
  {
    src: "/2.jpeg",
    title: "NEON CITY DISTRICT",
    category: "World Exploration",
    desc: "Explore high-density districts of Neon City. Interact with black-market dealers, hack security terminals, and scale massive towers.",
  },
  {
    src: "/3.jpeg",
    title: "CYBERNETIC ASSEMBLY DOCK",
    category: "Customization",
    desc: "Upgrade implants and configure skill nodes inside the holographic deck. Optimize your build for damage output, shield density, or energy recharge speed.",
  },
  {
    src: "/4.jpeg",
    title: "BOSS ARENA SHIELD",
    category: "Tactical Raid",
    desc: "Face massive corporate robotic units and mech boss monsters with your squad. Coordinate tactics and use implant cooldown syncs to defeat high-tier foes.",
  },
];

export default function Gameplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const current = screenshots[currentIndex];

  return (
    <section id="gameplay" className="relative py-24 bg-[#030308] overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-cyan mb-3">
            In-Engine Gameplay
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase font-mono tracking-tight text-white">
            THE DISTRICTS AWAIT <span className="text-neon-pink">YOU</span>
          </h2>
          <div className="w-16 h-1 bg-neon-pink mt-4 rounded" />
        </div>

        {/* Slider Carousel Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text and description info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neon-pink px-2.5 py-1 bg-neon-pink/10 border border-neon-pink/20 rounded-full w-fit block">
                {current.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold font-mono text-white mt-4 uppercase">
                {current.title}
              </h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {current.desc}
            </p>

            {/* Slider Nav controls */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-cyber-card hover:bg-neon-cyan/20 border border-cyber-border rounded hover:border-neon-cyan transition-all duration-300 text-white cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="font-mono text-sm tracking-widest text-gray-400">
                <span className="text-neon-cyan font-bold">{currentIndex + 1}</span> / {screenshots.length}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 bg-cyber-card hover:bg-neon-pink/20 border border-cyber-border rounded hover:border-neon-pink transition-all duration-300 text-white cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview */}
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-cyber-border group shadow-2xl shadow-black">
              {/* Animation wrapper for slides */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={current.src}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    priority
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Hover Dark Overlay & Maximize Action */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="p-4 bg-neon-cyan text-black rounded-full hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg shadow-neon-cyan/35"
                  aria-label="Expand image"
                >
                  <Maximize2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Carousel dots indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-8 bg-neon-cyan" : "w-2 bg-gray-700"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            {/* Click outside target */}
            <div className="absolute inset-0" onClick={() => setLightboxOpen(false)} />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[85vh] bg-[#0c0c16] border border-neon-cyan/30 rounded-lg overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:text-neon-pink rounded-full hover:bg-black transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Image View */}
              <div className="relative flex-1 aspect-[16/9] w-full min-h-[300px]">
                <Image
                  src={current.src}
                  alt={current.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Lightbox Footer Details */}
              <div className="p-6 bg-[#07070f] border-t border-cyber-border text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <span className="text-xs font-mono uppercase text-neon-pink tracking-widest">
                    {current.category}
                  </span>
                  <h4 className="text-lg font-bold font-mono text-white mt-1 uppercase">
                    {current.title}
                  </h4>
                </div>

                {/* Lightbox Quick Nav controls */}
                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="p-2.5 bg-cyber-card border border-cyber-border hover:border-neon-cyan rounded text-white cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="p-2.5 bg-cyber-card border border-cyber-border hover:border-neon-pink rounded text-white cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
