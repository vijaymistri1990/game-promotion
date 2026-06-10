"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Headset, 
  Lock, 
  Globe, 
  BarChart, 
  Gamepad2 
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
      icon: <Shield className="w-8 h-8" />,
      title: "Certified Fairness",
      description: "International certifications ensure a secure and fair gaming environment. Play with confidence.",
      neonColor: "cyan" as const,
    },
    {
      icon: <Headset className="w-8 h-8" />,
      title: "Professional Support",
      description: "Experience 365-day, 24/7 active monitoring and instant issue resolution by our dedicated team.",
      neonColor: "pink" as const,
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Advanced Anti-Cheat",
      description: "Secure client protection, comprehensive anti-hacking systems, and robust network stability.",
      neonColor: "cyan" as const,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Expanding rapidly across South Asia, Southeast Asia, South America, and beyond with localized player insights.",
      neonColor: "pink" as const,
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Big Data Analytics",
      description: "Regular player behavior analysis empowers us to provide optimized and personalized services.",
      neonColor: "cyan" as const,
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Self-Developed Games",
      description: "Over a dozen high-quality exclusive games, plus 1,000+ platform-integrated experiences for endless fun.",
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
            Brand Story
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold uppercase font-mono tracking-tight text-white"
          >
            WHY CHOOSE <span className="text-neon-cyan">IV7</span>
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
