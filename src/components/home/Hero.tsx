"use client";

import React from "react";
import Image from "next/image";
import { Search, MapPin, TrendingUp, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-primary pt-16">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/mmrhero/1920/1080" 
          alt="Mumbai Skyline"
          fill
          className="object-cover opacity-60 scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest animate-fade-in">
              <Zap className="h-3.5 w-3.5 text-accent mr-2 fill-accent" />
              The MMR Authority
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] animate-slide-up">
              Complete Guide to <span className="text-accent">Mumbai</span> & The Metropolitan Region
            </h1>
            <p className="text-lg md:text-xl text-neutral-light/90 max-w-2xl leading-relaxed animate-slide-up [animation-delay:200ms]">
              From infrastructure trackers to real estate trends, discover everything about the world's most dynamic urban growth belt.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-2xl shadow-premium max-w-3xl flex flex-col md:flex-row items-center gap-2 animate-slide-up [animation-delay:400ms]">
            <div className="flex items-center flex-1 w-full px-4 border-b md:border-b-0 md:border-r border-border h-12">
              <Search className="h-5 w-5 text-neutral-dark mr-3" />
              <input 
                type="text" 
                placeholder="Search for areas, news, projects..."
                className="bg-transparent border-none outline-none w-full font-medium"
              />
            </div>
            <div className="flex items-center flex-1 w-full px-4 h-12">
              <MapPin className="h-5 w-5 text-neutral-dark mr-3" />
              <select className="bg-transparent border-none outline-none w-full font-medium text-neutral-dark appearance-none">
                <option>All of MMR</option>
                <option>Mumbai City</option>
                <option>Navi Mumbai</option>
                <option>Thane</option>
                <option>Panvel</option>
                <option>Kharghar</option>
              </select>
            </div>
            <button className="w-full md:w-auto btn-accent px-10 py-3 h-12 flex items-center justify-center">
              Explore Guide
            </button>
          </div>

          {/* Stats / Quick Links */}
          <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-in [animation-delay:600ms]">
            <div className="flex items-center space-x-3 text-white/80">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold">Real Estate Trends</span>
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden md:block" />
            <div className="flex flex-wrap gap-3">
              {["Atal Setu", "Coastal Road", "Navi Mumbai Airport", "Metro 3"].map(tag => (
                <span key={tag} className="text-xs font-bold text-white/60 hover:text-white transition-colors cursor-pointer border border-white/10 px-3 py-1 rounded-full bg-white/5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-neutral-light fill-current">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,104.5,24.34,55.51,24.64,111.3,47.8,172.93,42.49,69.13-5.93,124.66-41.52,185.17-67.34,52.45-22.37,108.32-35.15,166.45-21.84V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
