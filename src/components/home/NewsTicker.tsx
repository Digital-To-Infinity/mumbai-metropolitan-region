"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const breakingNews = [
  "Navi Mumbai International Airport to begin operations in December 2026",
  "Mumbai Metro Line 3 phases set to open by end of year",
  "Property prices in Ulwe show 15% YoY growth",
  "Coastal Road Phase 2 construction ahead of schedule",
  "MMRDA announces new growth centres in Virar and Kalyan",
  "Atal Setu traffic volume exceeds initial projections",
];

export default function NewsTicker() {
  return (
    <div className="bg-primary border-b border-white/5 py-2 relative overflow-hidden hidden md:block">
      <div className="container flex items-center">
        <div className="flex items-center space-x-2 bg-accent text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-tighter shrink-0 z-10 shadow-lg">
          <Zap className="h-3 w-3 fill-current" />
          <span>Breaking Updates</span>
        </div>
        
        <div className="flex-1 overflow-hidden ml-6">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex space-x-12 whitespace-nowrap"
          >
            {[...breakingNews, ...breakingNews].map((item, i) => (
              <span key={i} className="text-neutral-light/80 text-[13px] font-medium flex items-center">
                <span className="w-1.5 h-1.5 bg-accent/50 rounded-full mr-3 shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Gloss Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary pointer-events-none w-full h-full z-0 opacity-50" />
    </div>
  );
}
