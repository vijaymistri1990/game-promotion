"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Features", href: "/#features" },
    { name: "Gameplay", href: "/#gameplay" },
    { name: "Rewards", href: "/#rewards" },
    { name: "Download", href: "/#download" },
    { name: "Reviews", href: "/#reviews" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cyber-dark/80 backdrop-blur-md border-b border-neon-cyan/20 py-4 shadow-lg shadow-neon-cyan/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/#home" className="flex items-center gap-2 group">
            <div className="relative h-10 w-36">
              <Image
                src="/logo.png"
                alt="IV7.COM Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-sm uppercase text-gray-300 hover:text-neon-cyan tracking-wider transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/#download"
              className="relative px-6 py-2.5 font-mono text-sm uppercase font-semibold text-black overflow-hidden group rounded-sm"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300 group-hover:opacity-90" />
              <span className="absolute inset-0 w-full h-full bg-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">PLAY NOW</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-neon-cyan transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-cyber-dark/95 backdrop-blur-xl border-t border-neon-cyan/20 z-40 md:hidden flex flex-col justify-between p-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-mono text-xl uppercase font-semibold text-gray-200 hover:text-neon-cyan tracking-wider py-2 border-b border-gray-800"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <Link
                href="/#download"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 font-mono uppercase font-bold text-black bg-gradient-to-r from-neon-cyan to-neon-pink rounded"
              >
                DOWNLOAD NOW
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
