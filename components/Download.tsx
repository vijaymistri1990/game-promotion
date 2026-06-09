"use client";

import { motion } from "framer-motion";
import { Play as AndroidIcon, Apple as AppleIcon, QrCode, Monitor, Download as DownloadIcon } from "lucide-react";
import Image from "next/image";

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
            Available Now
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase font-mono tracking-tight text-white">
            ENTER THE GRID <span className="text-neon-cyan">TODAY</span>
          </h2>
          <div className="w-16 h-1 bg-neon-cyan mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Action buttons and download pitch */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-extrabold font-mono text-white uppercase leading-tight">
                DOWNLOAD FREE TO PLAY
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                Experience full cross-play and cross-progression between platforms. Join over half a million netrunners fighting in the neon alleys. Scan the QR code or click the store links below to boot up.
              </p>
            </div>

            {/* Platform Download Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* App Store */}
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Redirecting to Apple App Store (Alpha Build Download)...");
                }}
                className="flex items-center gap-4 px-4 py-4 glass-panel border-cyber-border hover:border-neon-pink hover:shadow-neon-pink/15 hover:shadow-lg transition-all duration-300 rounded group cursor-pointer"
              >
                <div className="p-2 rounded bg-neon-pink/10 text-neon-pink group-hover:scale-110 transition-transform">
                  <AppleIcon className="w-6 h-6 fill-current" />
                </div>
                <div className="text-left font-mono">
                  <span className="text-[10px] text-gray-500 block">Download on the</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">App Store</span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Redirecting to Google Play Store (Alpha Build Download)...");
                }}
                className="flex items-center gap-4 px-4 py-4 glass-panel border-cyber-border hover:border-neon-cyan hover:shadow-neon-cyan/15 hover:shadow-lg transition-all duration-300 rounded group cursor-pointer"
              >
                <div className="p-2 rounded bg-neon-cyan/10 text-neon-cyan group-hover:scale-110 transition-transform">
                  <AndroidIcon className="w-6 h-6 fill-current" />
                </div>
                <div className="text-left font-mono">
                  <span className="text-[10px] text-gray-500 block">Get it on</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Google Play</span>
                </div>
              </a>

              {/* Direct Download */}
              <a
                href="https://share-rxapq9cajg.iv7.info/share/agent/AA6TPXPF?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-4 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 border border-neon-pink/35 hover:border-neon-pink hover:shadow-neon-pink/15 hover:shadow-lg transition-all duration-300 rounded group cursor-pointer"
              >
                <div className="p-2 rounded bg-neon-pink/20 text-neon-pink group-hover:scale-110 transition-transform">
                  <DownloadIcon className="w-6 h-6" />
                </div>
                <div className="text-left font-mono">
                  <span className="text-[10px] text-gray-500 block">Direct Link</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Game APK/EXE</span>
                </div>
              </a>
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
                    <li><strong className="text-gray-300">OS:</strong> iOS 16.0 or higher</li>
                    <li><strong className="text-gray-300">Device:</strong> iPhone 14 Pro or newer</li>
                    <li><strong className="text-gray-300">RAM:</strong> 6GB Min / 8GB Recommended</li>
                    <li><strong className="text-gray-300">Storage:</strong> 8.5 GB available space</li>
                  </ul>
                </div>

                {/* Android Requirements */}
                <div className="p-5 rounded bg-cyber-dark border border-cyber-border">
                  <h5 className="font-mono font-bold text-neon-cyan text-xs uppercase tracking-wider mb-3">Android devices</h5>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li><strong className="text-gray-300">OS:</strong> Android 13 or higher</li>
                    <li><strong className="text-gray-300">Processor:</strong> Snapdragon 8 Gen 1 / Dimensity 9000</li>
                    <li><strong className="text-gray-300">RAM:</strong> 8GB Min / 12GB Recommended</li>
                    <li><strong className="text-gray-300">Storage:</strong> 8.5 GB available space</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code and scanner info */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-lg border-neon-cyan/35 flex flex-col items-center text-center shadow-xl shadow-black relative"
            >
              <div className="absolute inset-0 neon-border-glow pointer-events-none rounded-lg" />
              
              <div className="relative w-64 h-64 bg-black border border-neon-cyan/20 rounded p-4 mb-6 shadow-inner shadow-black flex items-center justify-center">
                <Image
                  src="/qr_code.png"
                  alt="Download QR code scanner"
                  width={240}
                  height={240}
                  className="rounded object-contain filter brightness-110 drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                />
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-bold text-white text-base uppercase tracking-wider flex items-center justify-center gap-2">
                  <QrCode className="w-5 h-5 text-neon-cyan" /> Scan to Download
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed max-w-[240px]">
                  Point your mobile device camera at the QR code to install the game directly on your phone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
