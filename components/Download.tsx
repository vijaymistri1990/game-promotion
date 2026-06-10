"use client";

import { motion } from "framer-motion";
import { Monitor } from "lucide-react";

export default function Download() {
  return (
    <section id="download" className="relative py-24 bg-[#030308] overflow-hidden">
      {/* Top separator line with glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

      {/* Glow overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-cyan mb-3">
            Play Now
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase font-mono tracking-tight text-white">
            JOIN THE ACTION <span className="text-neon-cyan">TODAY</span>
          </h2>
          <div className="w-16 h-1 bg-neon-cyan mt-4 rounded" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Action buttons and download pitch */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-extrabold font-mono text-white uppercase leading-tight">
                DOWNLOAD IV7 PLATFORM
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                During breaks from watching the games, come here to enjoy relaxing entertainment with a fast pace and plenty of perks! Play anytime, anywhere.
              </p>
            </div>



            {/* System Requirements Grid */}
            <div className="space-y-4 pt-4">
              <h4 className="font-mono text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Monitor className="w-4 h-4 text-neon-cyan" /> Mobile Specs Requirements
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* iOS Requirements */}
                <div className="p-5 rounded bg-cyber-dark border border-cyber-border">
                  <h5 className="font-mono font-bold text-neon-pink text-xs uppercase tracking-wider mb-3">iOS devices</h5>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li><strong className="text-gray-300">OS:</strong> iOS 12.0 or higher</li>
                    <li><strong className="text-gray-300">Device:</strong> iPhone 8 or newer</li>
                    <li><strong className="text-gray-300">RAM:</strong> 2GB Min / 4GB Recommended</li>
                    <li><strong className="text-gray-300">Storage:</strong> 200 MB available space</li>
                  </ul>
                </div>

                {/* Android Requirements */}
                <div className="p-5 rounded bg-cyber-dark border border-cyber-border">
                  <h5 className="font-mono font-bold text-neon-cyan text-xs uppercase tracking-wider mb-3">Android devices</h5>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li><strong className="text-gray-300">OS:</strong> Android 8.0 or higher</li>
                    <li><strong className="text-gray-300">Processor:</strong> Snapdragon 600 series or equivalent</li>
                    <li><strong className="text-gray-300">RAM:</strong> 2GB Min / 4GB Recommended</li>
                    <li><strong className="text-gray-300">Storage:</strong> 200 MB available space</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
