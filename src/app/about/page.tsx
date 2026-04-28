import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Award, Eye, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-neutral-light relative overflow-hidden">
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">The Mission</span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-primary leading-tight mb-8">
            The Digital Authority for the World's Most <span className="text-accent">Dynamic</span> Region.
          </h1>
          <p className="text-lg md:text-xl text-neutral-dark/70 font-medium leading-relaxed">
            Mumbai Metropolitan Region is more than just a city; it's an economic powerhouse. We are here to document its transformation with precision, authority, and depth.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Precision", icon: Eye, desc: "Accurate, data-driven updates on infrastructure and real estate." },
              { title: "Trust", icon: ShieldCheck, desc: "The go-to resource for developers, residents, and investors." },
              { title: "Impact", icon: Award, desc: "A media platform that shapes the regional narrative." },
              { title: "Community", icon: Users, desc: "Connecting 25 million residents with local intelligence." }
            ].map(val => (
              <div key={val.title} className="p-8 rounded-3xl border border-border hover:border-accent transition-all text-center">
                <div className="w-16 h-16 bg-neutral-light rounded-2xl flex items-center justify-center text-accent mb-6 mx-auto">
                  <val.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-sm text-neutral-dark/60 leading-relaxed font-medium">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-black leading-tight">Beyond Geography, <span className="text-accent">Connectivity</span>.</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Founded in 2024, Mumbai Metropolitan Region (MMR) Guide was born from a simple realization: while Mumbai has many news sites, it lacks a dedicated, data-rich architectural authority for the entire Metropolitan area.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                From the historic streets of SoBo to the rising skylines of Ulwe and Dronagiri, we provide the lens required to see the big picture. We track the metros, the coastal roads, and the real estate shifts that define our collective future.
              </p>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden">
              <img src="https://picsum.photos/seed/mmr1/1200/800" className="w-full h-full object-cover opacity-80" alt="Culture" />
              <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-20" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
