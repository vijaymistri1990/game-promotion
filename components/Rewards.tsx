"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Gift, Users, ArrowRight, Copy, Check } from "lucide-react";

export default function Rewards() {
  const [activeTab, setActiveTab] = useState<"referral" | "daily" | "tournament">("referral");
  const [referralCopied, setReferralCopied] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyReferral = (code: string) => {
    navigator.clipboard.writeText(code);
    setReferralCopied(true);
    setTimeout(() => setReferralCopied(false), 2000);
  };

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Tabs configurations
  const tabs = [
    { id: "referral", label: "Agent Rewards", icon: <Users className="w-5 h-5" /> },
    { id: "daily", label: "Daily Streaks", icon: <Gift className="w-5 h-5" /> },
    { id: "tournament", label: "IPL Benefits", icon: <Trophy className="w-5 h-5" /> },
  ];

  // Daily Rewards Day card layout
  const dailyStreak = [
    { day: "Day 1", reward: "500 Credits", claimed: true, glow: false },
    { day: "Day 2", reward: "1,200 Credits", claimed: true, glow: false },
    { day: "Day 3", reward: "Deposit Bonus", claimed: false, glow: false },
    { day: "Day 4", reward: "2,000 Credits", claimed: false, glow: false },
    { day: "Day 5", reward: "Cashback", claimed: false, glow: false },
    { day: "Day 6", reward: "5,000 Credits", claimed: false, glow: false },
    { day: "Day 7", reward: "Mega Bonus", claimed: false, glow: true },
  ];

  return (
    <section id="rewards" className="relative py-24 bg-cyber-dark/40 grid-bg">
      <div className="absolute inset-0 bg-[#030308]/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
            Agent Rewards
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase font-mono tracking-tight text-white">
            2026 AGENT <span className="text-neon-cyan">REWARDS</span>
          </h2>
          <div className="w-16 h-1 bg-neon-cyan mt-4 rounded" />
        </div>

        {/* Tab Buttons Container */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 font-mono font-bold uppercase text-sm border rounded-sm transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-black border-transparent shadow-lg shadow-neon-cyan/15"
                  : "bg-cyber-card border-cyber-border text-gray-400 hover:text-white hover:border-gray-700"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive content rendering with Framer Motion */}
        <div className="glass-panel p-8 md:p-12 rounded-lg relative overflow-hidden min-h-[380px]">
          {/* Neon inner borders */}
          <div className="absolute inset-0 neon-border-glow pointer-events-none" />

          <AnimatePresence mode="wait">
            {activeTab === "referral" && (
              <motion.div
                key="referral"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-extrabold font-mono text-white uppercase">
                    INVITE PLAYERS. EARN REWARDS.
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Invite your friends to download IV7. Over <span className="text-neon-cyan font-bold">$1,000,000,000</span> has been distributed in agent rewards! For every referral, you earn generous commissions and help grow our global community.
                  </p>

                  {/* Referral Code Copy Section */}
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md pt-2">
                    <div className="flex-1 bg-cyber-dark/80 border border-cyber-border rounded px-4 py-3 font-mono text-neon-cyan flex items-center justify-between select-all">
                      CYBER-RECKONING-777
                    </div>
                    <button
                      onClick={() => copyReferral("CYBER-RECKONING-777")}
                      className="px-6 py-3 font-mono font-bold uppercase text-black bg-neon-cyan hover:bg-[#00d8e6] transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {referralCopied ? (
                        <>
                          <Check className="w-5 h-5" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" /> Copy Code
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Referral tiers progress bars */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-gray-400">
                      <span>3 REFERRALS (BASIC AGENT)</span>
                      <span className="text-neon-cyan font-bold">COMPLETED</span>
                    </div>
                    <div className="h-2 w-full bg-cyber-dark rounded-full overflow-hidden border border-gray-800">
                      <div className="h-full bg-neon-cyan w-full rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-gray-400">
                      <span>50 REFERRALS (PRO AGENT)</span>
                      <span className="text-neon-pink font-bold">80%</span>
                    </div>
                    <div className="h-2 w-full bg-cyber-dark rounded-full overflow-hidden border border-gray-800">
                      <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink w-4/5 rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-gray-400">
                      <span>100+ REFERRALS (MASTER AGENT)</span>
                      <span className="text-gray-500 font-bold">40%</span>
                    </div>
                    <div className="h-2 w-full bg-cyber-dark rounded-full overflow-hidden border border-gray-800">
                      <div className="h-full bg-neon-purple w-2/5 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "daily" && (
              <motion.div
                key="daily"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center lg:text-left space-y-2">
                  <h3 className="text-2xl font-extrabold font-mono text-white uppercase">
                    DAILY PLATFORM BONUSES
                  </h3>
                  <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                    Log in every day to claim exclusive platform bonuses and rewards. Missing a single day resets your streak progress. Claim your rewards now!
                  </p>
                </div>

                {/* Day streak timeline */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 pt-4">
                  {dailyStreak.map((day, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded border flex flex-col items-center justify-between text-center min-h-[120px] transition-all relative ${
                        day.claimed
                          ? "bg-neon-cyan/5 border-neon-cyan/40"
                          : day.glow
                          ? "bg-neon-pink/10 border-neon-pink/60 animate-pulse"
                          : "bg-cyber-dark border-cyber-border"
                      }`}
                    >
                      <span className="text-xs font-mono text-gray-400 uppercase">{day.day}</span>
                      
                      <div className={`my-3 p-1.5 rounded-full ${day.claimed ? "bg-neon-cyan/20 text-neon-cyan" : "text-gray-600"}`}>
                        <Gift className="w-6 h-6" />
                      </div>

                      <span className={`text-[11px] font-mono font-bold tracking-wider ${day.claimed ? "text-neon-cyan" : day.glow ? "text-neon-pink" : "text-gray-500"}`}>
                        {day.claimed ? "CLAIMED" : day.reward}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "tournament" && (
              <motion.div
                key="tournament"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <div className="space-y-6 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold font-mono text-white uppercase">
                    EXCLUSIVE IPL BENEFITS
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    The league is igniting passion in India! Join now during breaks from watching the games, enjoy relaxing entertainment with millions of fans, and reap double the rewards.
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="https://share-rxapq9cajg.iv7.info/share/agent/AA6TPXPF?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
                      className="px-6 py-3 font-mono font-bold uppercase text-black bg-neon-pink hover:bg-[#ff0055] transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-neon-pink/15"
                    >
                      CLAIM BENEFITS
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Tournaments slots list */}
                  <div className="p-4 rounded bg-cyber-dark border border-cyber-border flex items-center justify-between hover:border-neon-cyan transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded bg-neon-cyan/15 text-neon-cyan">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-white text-sm uppercase">IPL FAN REWARD</h4>
                        <p className="text-xs text-gray-500">Prize Pool: 1,000,000+ Credits</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-neon-cyan font-bold bg-neon-cyan/10 border border-neon-cyan/20 px-2 py-1 rounded">
                      LIMITED TIME
                    </span>
                  </div>

                  <div className="p-4 rounded bg-cyber-dark border border-cyber-border flex items-center justify-between hover:border-neon-pink transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded bg-neon-pink/15 text-neon-pink">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-white text-sm uppercase">MATCH DAY BONUS</h4>
                        <p className="text-xs text-gray-500">Prize Pool: Double Deposit Bonus</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-neon-pink font-bold bg-neon-pink/10 border border-neon-pink/20 px-2 py-1 rounded">
                      STARTS IN 6D
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
