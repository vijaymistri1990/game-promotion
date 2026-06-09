"use client";

import { useState } from "react";
import { Send, SendHorizontal } from "lucide-react";
import { FaDiscord, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const socialLinks = [
    { icon: <FaDiscord className="w-5 h-5" />, href: "https://discord.gg/iv7game", label: "Discord Server", color: "hover:text-neon-cyan hover:shadow-[0_0_10px_#ff2d55]" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "https://twitter.com/iv7game", label: "Twitter Profile", color: "hover:text-neon-pink hover:shadow-[0_0_10px_#DF264D]" },
    { icon: <FaYoutube className="w-5 h-5" />, href: "https://youtube.com/iv7game", label: "YouTube Channel", color: "hover:text-neon-cyan hover:shadow-[0_0_10px_#ff2d55]" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "https://instagram.com/iv7game", label: "Instagram Account", color: "hover:text-neon-pink hover:shadow-[0_0_10px_#DF264D]" },
  ];

  return (
    <footer className="relative bg-[#020205] border-t border-cyber-border/40 pt-20 pb-12 overflow-hidden">
      {/* Background neon strip */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-cyber-border/20">
          
          {/* Column 1: Game Pitch & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="#home" className="inline-block relative h-10 w-36">
              <Image
                src="/logo.png"
                alt="IV7.COM Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Boots up on the global arena networks. Dominate the tactical hacking and combat grids of Neon City. Download and customize your neural network now.
            </p>
            {/* Social Icons row */}
            <div className="flex gap-4">
              {socialLinks.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className={`p-3 bg-cyber-card border border-cyber-border rounded text-gray-400 transition-all duration-300 ${soc.color} hover:-translate-y-1 cursor-pointer`}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-white">The Grid</h4>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <a href="#home" className="text-gray-400 hover:text-neon-cyan transition-colors">Home Matrix</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-neon-cyan transition-colors">Upgrades</a>
              </li>
              <li>
                <a href="#gameplay" className="text-gray-400 hover:text-neon-cyan transition-colors">Sectors</a>
              </li>
              <li>
                <a href="#rewards" className="text-gray-400 hover:text-neon-cyan transition-colors">Loot Deck</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-white">Neural Newsletter</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Inject news, game updates, patch logs, and tournament details straight to your inbox.
            </p>
            {/* Input field */}
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter neural email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-cyber-dark border border-cyber-border rounded px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan transition-colors font-mono"
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-2 p-2 text-neon-cyan hover:text-white transition-colors cursor-pointer"
                >
                  <SendHorizontal className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <span className="font-mono text-[10px] text-neon-cyan tracking-wider uppercase mt-1">
                  ✓ Neural node connected!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} IV7 Gaming. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#download" className="hover:text-neon-pink transition-colors">Privacy Policy</a>
            <a href="#download" className="hover:text-neon-pink transition-colors">Terms of Service</a>
            <a href="#download" className="hover:text-neon-pink transition-colors">EULA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
