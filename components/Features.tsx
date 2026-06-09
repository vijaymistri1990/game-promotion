"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Cpu, 
  Crosshair, 
  Globe, 
  Sliders, 
  Users 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  neonColor: "cyan" | "pink";
}

function FeatureCard({ icon, title, description, neonColor }: FeatureCardProps) {
  const isCyan = neonColor === "cyan";
  const glowClass = isCyan ? "group-hover:border-neon-cyan/50" : "group-hover:border-neon-pink/50";
  const shadowClass = isCyan ? "group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]" : "group-hover:shadow-[0_0_20px_rgba(255,0,127,0.15)]";
  const textGlowClass = isCyan ? "text-neon-cyan filter drop-shadow-[0_0_5px_rgba(0,240,255,0.4)]" : "text-neon-pink filter drop-shadow-[0_0_5px_rgba(255,0,127,0.4)]";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group relative p-8 rounded-lg glass-panel transition-all duration-300 ${glowClass} ${shadowClass} hover:-translate-y-2 cursor-default overflow-hidden`}
    >
      {/* Background neon grid animation inside cards */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyber-dark -z-10" />
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] -z-10 transition-opacity duration-300 opacity-20 group-hover:opacity-40 ${isCyan ? "bg-neon-cyan" : "bg-neon-pink"}`} />

      {/* Feature Icon */}
      <div className={`mb-6 p-4 w-fit rounded bg-[#111122]/80 border ${isCyan ? "border-neon-cyan/20" : "border-neon-pink/20"} transition-all duration-300 group-hover:scale-110`}>
        <div className={textGlowClass}>
          {icon}
        </div>
      </div>

      {/* Feature Title */}
      <h3 className="text-xl font-bold font-mono tracking-wider text-white mb-3 uppercase group-hover:text-white transition-colors">
        {title}
      </h3>

      {/* Feature Description */}
      <p className="text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const featureList = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ray-Traced Visuals",
      description: "Experience the dystopian underbelly in photorealistic detail. Powered by advanced Unreal Engine global illumination and real-time reflections.",
      neonColor: "cyan" as const,
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Neural Implants",
      description: "Customize your playstyle by injecting state-of-the-art cybernetic mods. Increase reflex speeds, trigger energy shields, or hack hostile systems.",
      neonColor: "pink" as const,
    },
    {
      icon: <Crosshair className="w-8 h-8" />,
      title: "Tactical Gunplay",
      description: "Engage in lethal, precision shooter mechanics. Choose from plasma rifles, smart bullets, and melee energy katanas with tactile feedbacks.",
      neonColor: "cyan" as const,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Real-Time PVP Lobbies",
      description: "Fight alongside corporate Syndicates in global multiplayer matchmaking. Fast servers and sub-10ms netcode guarantee zero delays.",
      neonColor: "pink" as const,
    },
    {
      icon: <Sliders className="w-8 h-8" />,
      title: "Deep Armory Customizer",
      description: "Fine-tune over 80 stats on your weapons. Attach scope holograms, adjust recoil stabilizers, or customize skin neon frequencies.",
      neonColor: "cyan" as const,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Syndicate Faction Wars",
      description: "Pledge allegiance to either high-tech megacorporations or decentralized hacker rebellions to dominate territorial map resources.",
      neonColor: "pink" as const,
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-cyber-dark/50 grid-bg">
      <div className="absolute inset-0 bg-[#030308]/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-[0.3em] text-neon-pink mb-3"
          >
            Tactical Enhancements
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold uppercase font-mono tracking-tight text-white"
          >
            UPGRADE YOUR <span className="text-neon-cyan">GAMEPLAY</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-neon-cyan mt-4 rounded"
          />
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureList.map((feat, index) => (
            <FeatureCard
              key={index}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              neonColor={feat.neonColor}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
