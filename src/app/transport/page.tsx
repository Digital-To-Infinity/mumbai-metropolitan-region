import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { TrainFront, Bus, Car, Map, Navigation, ArrowRight, MapPin } from "lucide-react";

export default function TransportPage() {
  const modes = [
    { name: "Local Trains", icon: TrainFront, status: "Normal", color: "text-blue-600 bg-blue-50" },
    { name: "Mumbai Metro", icon: TrainFront, status: "Delayed", color: "text-orange-600 bg-orange-50" },
    { name: "BEST/NMMT Buses", icon: Bus, status: "Normal", color: "text-red-600 bg-red-50" },
    { name: "Auto & Taxis", icon: Car, status: "Normal", color: "text-yellow-600 bg-yellow-50" }
  ];

  return (
    <main className="bg-neutral-light min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <SectionHeader 
            title="MMR Transport Guide" 
            subtitle="Your comprehensive navigator for the world's most complex transit network."
          />
          
          {/* Live Status Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {modes.map(mode => (
              <div key={mode.name} className="bg-white p-4 rounded-xl border border-border flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${mode.color}`}>
                    <mode.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-primary">{mode.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${mode.status === 'Normal' ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`} />
                  <span className="text-[10px] font-black uppercase text-neutral-dark/50 tracking-widest">{mode.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Guide Sections */}
            <div className="space-y-6">
              {[
                { 
                  title: "Mumbai Local Train Guide", 
                  desc: "Timetables, Fare Calculators, and Map for Western, Central, and Harbour lines.",
                  img: "https://picsum.photos/seed/mmr19/1200/800"
                },
                { 
                  title: "Metro Expansion Tracker", 
                  desc: "New routes, operational maps, and smart card recharging information.",
                  img: "https://picsum.photos/seed/mmr20/1200/800"
                }
              ].map((guide, i) => (
                <div key={i} className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-border hover:border-accent transition-all">
                  <div className="h-48 relative">
                    <img src={guide.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h4 className="absolute bottom-6 left-8 text-2xl font-display font-black text-white">{guide.title}</h4>
                  </div>
                  <div className="p-8 flex items-center justify-between">
                    <p className="text-sm text-neutral-dark/70 font-medium">{guide.desc}</p>
                    <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Tools Preview */}
            <div className="space-y-8">
              <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden">
                <Navigation className="h-10 w-10 text-accent mb-6" />
                <h4 className="text-3xl font-display font-black mb-6 leading-tight">Multi-Modal Journey Planner</h4>
                <p className="text-white/60 mb-10 leading-relaxed">
                  Combine Local + Metro + Bus routes to find the most efficient way to cross the MMR.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-sm text-white/50">Start (e.g. Borivali)</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-sm text-white/50">End (e.g. Kharghar)</span>
                  </div>
                  <button className="w-full btn-accent py-4 mt-4">Plan My Journey</button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-border">
                <h4 className="font-bold mb-6">Regional Commute Highlights</h4>
                <div className="space-y-4">
                  {[
                    "New NMMT Electric Bus routes in Ulwe",
                    "AC Local train frequency increase",
                    "Ropeway status for Thane-Mumbai connectivity",
                    "Water Taxi schedules for South Mumbai - Belapur"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0 hover:bg-neutral-light transition-colors px-2 rounded cursor-pointer group">
                      <span className="text-sm font-medium">{item}</span>
                      <ArrowRight className="h-3 w-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
