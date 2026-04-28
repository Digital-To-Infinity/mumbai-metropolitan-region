import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { 
  TrendingUp, 
  MapPin, 
  TrainFront, 
  Building2, 
  GraduationCap, 
  HeartPulse, 
  ShoppingBag,
  ArrowRight,
  Info,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AreaGuidePage({ params }: { params: { slug: string } }) {
  // Demo data for Kharghar (example)
  const area = {
    name: "Kharghar",
    tagline: "The Premier Educational & Residential Node of Navi Mumbai",
    overview: "Kharghar is a well-planned node of Navi Mumbai, developed by CIDCO. It is known for its wide roads, lush greenery (Central Park), and as a major educational hub with institutes like NIFT and TATA Memorial Center. It's one of the most sought-after residential destinations due to its upcoming Metro connectivity and proximity to the Navi Mumbai International Airport.",
    priceTrends: "₹11,500 - ₹18,500 per sq.ft",
    rentalDemand: "High (Driven by students and corporate professionals)",
    bestPockets: ["Sector 12", "Sector 35", "Sector 20", "Sector 10"],
    stats: [
      { label: "Transit Score", value: "8.5/10" },
      { label: "Lifestyle Index", value: "9.0/10" },
      { label: "Green Cover", value: "25%" },
      { label: "Growth Potential", value: "High" }
    ]
  };

  return (
    <main className="bg-neutral-light min-h-screen">
      <Navbar />
      
      {/* Area Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/mmr2/1200/800" 
            className="w-full h-full object-cover"
            alt="Area Background"
          />
        </div>
        <div className="container relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-bold text-white/50 mb-8 uppercase tracking-widest">
            <span>Area Guides</span>
            <span>/</span>
            <span>Navi Mumbai</span>
            <span>/</span>
            <span className="text-accent">{area.name}</span>
          </nav>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6">
              {area.name}<span className="text-accent underline decoration-accent/20 underline-offset-[12px]"> Guide</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed mb-10">
              {area.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-accent px-8">Check Property Prices</button>
              <button className="px-8 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg font-bold border border-white/20 transition-all">
                Download PDF Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Quick Stats */}
      <section className="-mt-12 mb-20 relative z-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass-card p-10 bg-white">
              <div className="flex items-center space-x-3 text-accent mb-6">
                <Info className="h-6 w-6" />
                <h2 className="text-2xl font-bold uppercase tracking-tight">Overview</h2>
              </div>
              <p className="text-neutral-dark/80 text-lg leading-relaxed mb-8">
                {area.overview}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
                {area.stats.map(stat => (
                  <div key={stat.label}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-dark/50 mb-1">{stat.label}</p>
                    <p className="text-xl font-display font-bold text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-accent rounded-3xl p-8 text-white shadow-2xl flex flex-col justify-between">
              <div>
                <TrendingUp className="h-10 w-10 mb-6" />
                <h3 className="text-2xl font-black mb-4">Investment Outlook</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  Kharghar is projected to see a 20-25% price appreciation over the next 3 years due to the Navi Mumbai Corporate Park and Metro expansion.
                </p>
              </div>
              <button className="mt-8 flex items-center justify-center space-x-2 bg-white text-accent font-black py-4 rounded-xl hover:bg-neutral-light transition-colors">
                <span>View Detailed Trends</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Sticky Navigation */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 space-y-2">
                {[
                  { label: "Location & Connectivity", icon: MapPin },
                  { label: "Real Estate Trends", icon: Building2 },
                  { label: "Education & Medical", icon: GraduationCap },
                  { label: "Lifestyle & Markets", icon: ShoppingBag },
                  { label: "Future Projects", icon: TrainFront },
                  { label: "FAQs", icon: Info },
                ].map((item, i) => (
                  <a key={i} href="#" className={cn(
                    "flex items-center space-x-3 p-4 rounded-xl font-bold text-sm transition-all border",
                    i === 0 ? "bg-primary text-white border-primary shadow-lg" : "bg-white text-neutral-dark border-transparent hover:border-border"
                  )}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-9 space-y-20">
              
              {/* Connectivity */}
              <div className="space-y-8">
                <SectionHeader title="Location & Connectivity" subtitle="Strategically positioned for seamless access across MMR." />
                <div className="bg-white rounded-3xl p-10 border border-border space-y-8">
                  <p className="text-neutral-dark/80 text-lg leading-relaxed">
                    Kharghar is ideally located on the Sion-Panvel Highway, making it a gateway between Mumbai and the upcoming international airport.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { title: "Railway", desc: "Kharghar Railway Station (Harbour Line) connects to CSMT and Thane." },
                      { title: "Road", desc: "Direct access to Sion-Panvel Highway and Mumbai-Pune Expressway." },
                      { title: "Metro", desc: "Line 1 Pendhar to Belapur passes directly through Kharghar." },
                      { title: "Airport", desc: "Just 15-20 minutes away from the upcoming NMIA." },
                    ].map(point => (
                      <div key={point.title} className="flex space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-neutral-light rounded-full flex items-center justify-center text-accent">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{point.title}</h4>
                          <p className="text-sm text-neutral-dark/70">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Real Estate Section */}
              <div className="space-y-8">
                <SectionHeader title="Real Estate & Residential" subtitle="Diverse housing options for every budget." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-border">
                    <h4 className="text-xl font-bold mb-4">Price Trends</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-neutral-dark/70 font-medium">Standard Apartment</span>
                        <span className="font-bold">₹12,000 / sq.ft</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-neutral-dark/70 font-medium">Luxury Projects</span>
                        <span className="font-bold">₹16,500+ / sq.ft</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-neutral-dark/70 font-medium">Rental (2 BHK)</span>
                        <span className="font-bold">₹25,000 - ₹35,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-border">
                    <h4 className="text-xl font-bold mb-4">Best Residential Pockets</h4>
                    <ul className="space-y-3">
                      {area.bestPockets.map(pocket => (
                        <li key={pocket} className="flex items-center space-x-3 text-sm font-bold text-primary">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span>{pocket} — Preferred by Families</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Schools & Hospitals */}
              <div className="space-y-8">
                <SectionHeader title="Essential Infrastructure" subtitle="World-class institutions and medical facilities." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="flex items-center text-lg font-bold">
                      <GraduationCap className="h-5 w-5 mr-3 text-accent" />
                      Schools & Colleges
                    </h4>
                    <ul className="bg-white p-6 rounded-2xl border border-border space-y-4 shadow-sm">
                      <li className="text-sm font-medium">Ryan International School</li>
                      <li className="text-sm font-medium">Vibgyor High</li>
                      <li className="text-sm font-medium">National Institute of Fashion Technology (NIFT)</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="flex items-center text-lg font-bold">
                      <HeartPulse className="h-5 w-5 mr-3 text-accent" />
                      Hospitals
                    </h4>
                    <ul className="bg-white p-6 rounded-2xl border border-border space-y-4 shadow-sm">
                      <li className="text-sm font-medium">TATA Memorial Center</li>
                      <li className="text-sm font-medium">MGM Hospital</li>
                      <li className="text-sm font-medium">Motherhood Hospital</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-8">
                <SectionHeader title="Frequently Asked Questions" />
                <div className="space-y-4">
                  {[
                    { q: "Is Kharghar good for real estate investment?", a: "Yes, Kharghar is considered a gold mine for long-term investment due to NMIA and BKC 2 project." },
                    { q: "How is the water supply in Kharghar?", a: "Most sectors have good water supply, although CIDCO manages it closely during summer months." },
                    { q: "Is Kharghar safe for families?", a: "Kharghar is one of the safest nodes in Navi Mumbai with broad streets and dedicated police patrolling." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-border">
                      <h5 className="font-bold text-lg mb-2">{faq.q}</h5>
                      <p className="text-neutral-dark/70 text-sm leading-relaxed">{faq.a}</p>
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
