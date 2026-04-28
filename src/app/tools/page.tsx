import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Calculator, TrainFront, Home, Map, TrendingUp, Info } from "lucide-react";

export default function ToolsPage() {
  const tools = [
    { name: "Property Price Calculator", icon: Home, desc: "Estimate the market value of your property based on area and amenities." },
    { name: "Stamp Duty & Registration", icon: TrendingUp, desc: "Calculate the total legal costs for property transactions in Maharashtra." },
    { name: "MMR Transit Planner", icon: TrainFront, desc: "Find the fastest route using Local, Metro, Bus, and Water Taxi." },
    { name: "Cost of Living Index", icon: Info, desc: "Compare living expenses across different nodes like Thane vs Navi Mumbai." },
    { name: "Commute Time Predictor", icon: Map, desc: "Estimate travel times considering current traffic and infrastructure status." },
    { name: "Investment ROI Tool", icon: TrendingUp, desc: "Predict future appreciation based on proximity to upcoming infra projects." }
  ];

  return (
    <main className="bg-neutral-light min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <SectionHeader 
            title="MMR Toolkit" 
            subtitle="Advanced calculators and utilities designed for the modern metropolitan citizen."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <div key={i} className="glass-card p-10 group relative overflow-hidden">
                <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <tool.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{tool.name}</h3>
                <p className="text-neutral-dark/70 text-sm leading-relaxed mb-8">
                  {tool.desc}
                </p>
                <button className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-accent hover:translate-x-2 transition-transform">
                  <span>Open Tool</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                
                {/* Decorative Pattern */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent opacity-[0.03] rounded-full blur-2xl group-hover:opacity-[0.08] transition-opacity" />
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-12 bg-primary rounded-[3rem] text-white overflow-hidden relative">
            <div className="max-w-2xl relative z-10">
              <h4 className="text-3xl font-display font-black mb-6">Need a custom tool?</h4>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                If you are a builder or a developer looking to integrate our calculators into your project website, get in touch for API access.
              </p>
              <button className="btn-accent px-10 py-4">Contact Developer Team</button>
            </div>
            
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 -mr-20 pointer-events-none" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
