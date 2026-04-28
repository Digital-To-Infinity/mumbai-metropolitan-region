import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Search, Filter, MapPin, Building2, TrendingUp, Info } from "lucide-react";

export default function RealEstateHub() {
  const categories = [
    { name: "New Launches", count: 124, icon: Building2 },
    { name: "Investment Zones", count: 42, icon: TrendingUp },
    { name: "Rental Markets", count: 215, icon: MapPin },
    { name: "Builder Profiles", count: 86, icon: Info }
  ];

  return (
    <main className="bg-neutral-light min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-white border-b border-border">
        <div className="container">
          <SectionHeader 
            title="Real Estate Knowledge Hub" 
            subtitle="The authoritative intelligence center for MMR's property markets."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => (
              <div key={cat.name} className="bg-neutral-light p-6 rounded-2xl border border-transparent hover:border-accent hover:bg-white hover:shadow-premium transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-accent mb-4 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-primary">{cat.name}</h3>
                <p className="text-xs text-neutral-dark/50 font-bold uppercase tracking-widest mt-1">{cat.count} Resources</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Filters Sidebar */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 rounded-2xl border border-border sticky top-24 space-y-8">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold">Filters</h4>
                  <button className="text-[10px] font-black uppercase text-accent">Reset</button>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest opacity-50">Region</p>
                  {["Mumbai City", "Navi Mumbai", "Thane", "Extended MMR"].map(region => (
                    <label key={region} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border-2 border-border rounded group-hover:border-accent" />
                      <span className="text-sm font-medium">{region}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest opacity-50">Property Type</p>
                  {["Residential", "Commercial", "Industrial", "Plots"].map(type => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border-2 border-border rounded group-hover:border-accent" />
                      <span className="text-sm font-medium">{type}</span>
                    </label>
                  ))}
                </div>

                <div className="pt-6">
                  <button className="w-full btn-primary py-3">Apply Filters</button>
                </div>
              </div>
            </div>

            {/* Content List */}
            <div className="lg:col-span-9">
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm font-bold text-neutral-dark/50 italic">Showing 42 Investment Guides</p>
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-bold uppercase tracking-widest">Sort By:</span>
                  <select className="bg-transparent border-none font-bold text-sm text-accent focus:ring-0 outline-none">
                    <option>Latest Updates</option>
                    <option>High Growth Potential</option>
                    <option>Infrastructure Proximity</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Panvel Real Estate Outlook 2026: The Airport Impact Analysis",
                    date: "Oct 20, 2025",
                    author: "MMR Analysts",
                    img: "https://picsum.photos/seed/mmr16/1200/800",
                    desc: "An in-depth study of price trends in Panvel following the terminal construction milestone of the Navi Mumbai Airport."
                  },
                  {
                    title: "Why Multi-Modal Transit Centers in Thane are Driving Commercial Values",
                    date: "Oct 18, 2025",
                    author: "Development Desk",
                    img: "https://picsum.photos/seed/mmr17/1200/800",
                    desc: "Understanding the shift of Mumbai's BFSI sector hubs towards the Thane growth corridor."
                  },
                  {
                    title: "Ulwe vs Kharghar: Which Navi Mumbai node is better for 2026 ROI?",
                    date: "Oct 15, 2025",
                    author: "Investment Team",
                    img: "https://picsum.photos/seed/mmr18/1200/800",
                    desc: "A direct comparison of rental yields and capital appreciation potential between two powerhouses of Navi Mumbai."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-border rounded-3xl overflow-hidden hover:shadow-premium transition-all group flex flex-col md:flex-row cursor-pointer">
                    <div className="md:w-1/3 aspect-video md:aspect-auto relative overflow-hidden">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-3 text-xs font-bold text-neutral-dark/50 uppercase tracking-widest">
                          <span>{item.date}</span>
                          <span className="w-1 h-1 bg-accent rounded-full" />
                          <span className="text-accent">{item.author}</span>
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors leading-snug mb-3">
                          {item.title}
                        </h3>
                        <p className="text-neutral-dark/70 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center text-xs font-black uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors">
                        Read Full Guide <ArrowRight className="ml-2 h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <button className="px-12 py-4 border-2 border-primary text-primary font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all text-sm">
                  Load More Intelligence
                </button>
              </div>
            </div>
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
