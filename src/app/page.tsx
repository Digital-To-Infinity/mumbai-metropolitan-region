import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import NewsTicker from "@/components/home/NewsTicker";
import SectionHeader from "@/components/shared/SectionHeader";
import NewsCard from "@/components/shared/NewsCard";
import AreaCard from "@/components/shared/AreaCard";
import { ArrowRight, TrendingUp, Building2, TrainFront, Users, Map } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-[88px] lg:pt-[104px]">

        <NewsTicker />
        <Hero />
        
        {/* Featured Stories Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <SectionHeader 
              title="Featured Intelligence" 
              subtitle="Deep dives into the movements shaping the Mumbai Metropolitan Region."
              linkText="View All Stories"
              linkHref="/news"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Featured */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                  <div className="absolute inset-0 bg-neutral-dark/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src="https://picsum.photos/seed/mmr8/1200/800" 
                    alt="Infrastructure" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-accent text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded shadow-lg">
                      Exclusive Report
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-accent text-xs font-bold uppercase tracking-wider">
                    <TrendingUp className="h-3 w-3 mr-2" />
                    Real Estate & Infrastructure
                  </div>
                  <h3 className="text-3xl font-display font-bold group-hover:text-accent transition-colors leading-tight">
                    The Atal Setu Ripple Effect: How MTHL is Redefining Real Estate Values in Ulwe and Dronagiri
                  </h3>
                  <p className="text-neutral-dark/70 leading-relaxed">
                    A comprehensive analysis of land price appreciation, upcoming residential launches, and the strategic importance of Navi Mumbai's southern growth corridor.
                  </p>
                </div>
              </div>

              {/* Side Featured */}
              <div className="flex flex-col gap-8">
                {[
                  {
                    tag: "Infrastructure",
                    title: "Mumbai Metro Line 3 Update: Tunneling Phase 1 Completion and What it Means for South Mumbai Commuters",
                    img: "https://picsum.photos/seed/mmr9/1200/800"
                  },
                  {
                    tag: "Development",
                    title: "Third Mumbai: The Massive Urban Expansion Plan Behind the Navi Mumbai Airport Belt",
                    img: "https://picsum.photos/seed/mmr10/1200/800"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 group cursor-pointer">
                    <div className="md:w-2/5 aspect-[4/3] relative overflow-hidden rounded-xl shrink-0">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center space-y-2">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.tag}</span>
                      <h4 className="text-xl font-bold group-hover:text-accent transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Pulse Section */}
        <section className="py-16 bg-neutral-light overflow-hidden">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-display font-black text-primary mb-4 leading-tight">
                  Regional <span className="text-accent underline decoration-accent/20 underline-offset-8">Pulse</span>
                </h2>
                <p className="text-neutral-dark/70 font-medium">
                  Hyper-local updates from every corner of the Mumbai Metropolitan Region.
                </p>
              </div>
              <div className="flex gap-2">
                {["Mumbai", "Navi Mumbai", "Thane", "Extended MMR"].map((tab, i) => (
                  <button key={tab} className={cn(
                    "px-6 py-2 rounded-full text-xs font-bold transition-all border",
                    i === 0 ? "bg-primary text-white border-primary shadow-lg" : "bg-white text-primary border-border hover:border-accent"
                  )}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Civic", title: "BMC Budget 2026: Focus on Coastal Road Phase 3 and Sewage Treatment", date: "2 Hours Ago", area: "Mumbai City" },
                { category: "Housing", title: "CIDCO Regularizes 1,500 Houses in Navi Mumbai under PM-AY Scheme", date: "4 Hours Ago", area: "Navi Mumbai" },
                { category: "Transport", title: "Thane-Bhiwandi-Kalyan Metro Line 5 construction picks up pace", date: "6 Hours Ago", area: "Thane Region" },
                { category: "News", title: "New Flyover at Shil Phata to Ease Traffic for Kalyan-Dombivli Commuters", date: "8 Hours Ago", area: "Kalyan" },
              ].map((news, i) => (
                <NewsCard key={news.title} {...news} />
              ))}
            </div>
          </div>
        </section>

        {/* MMR Authority Hubs */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionHeader 
                title="Knowledge Hubs" 
                subtitle="Your authoritative resources for navigating life, business, and investments in MMR."
                centered
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Building2, 
                  title: "Real Estate Hub", 
                  desc: "Market trends, price trackers, and investment guides for 50+ growth corridors.",
                  color: "bg-blue-50 border-blue-100 text-blue-600",
                  links: ["Price Heatmaps", "New Launches", "Investment Outlook", "Rental Yield Stacks"]
                },
                { 
                  icon: TrainFront, 
                  title: "Infrastructure Tracker", 
                  desc: "Live status of Metro projects, Highways, Airports, and Smart City initiatives.",
                  color: "bg-red-50 border-red-100 text-red-600",
                  links: ["Metro Status", "Road Projects", "Aviation Hubs", "Bridge Tracker"]
                },
                { 
                  icon: Map, 
                  title: "Area Guide Authority", 
                  desc: "Exhaustive guides for every node from South Mumbai to the deepest MMR pockets.",
                  color: "bg-orange-50 border-orange-100 text-orange-600",
                  links: ["City Overviews", "Transit Scores", "Lifestyle Index", "School & Medical Directories"]
                }
              ].map((hub, i) => (
                <div key={hub.title} className="glass-card p-8 border hover:border-accent transition-all group">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6", hub.color)}>
                    <hub.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{hub.title}</h3>
                  <p className="text-neutral-dark/70 mb-8 leading-relaxed">
                    {hub.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {hub.links.map(link => (
                      <li key={link} className="flex items-center text-sm font-semibold text-primary/80 hover:text-accent cursor-pointer transition-colors group/link">
                        <ArrowRight className="h-4 w-4 mr-2 group-hover/link:translate-x-1 transition-transform" />
                        {link}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-neutral-light hover:bg-primary hover:text-white rounded-xl font-bold transition-all text-primary border border-border">
                    Explore Hub
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Corridors (Area Guides Preview) */}
        <section className="py-20 bg-primary text-white">
          <div className="container">
            <SectionHeader 
              title="Growth Corridors" 
              subtitle="The next-gen living and business destinations across the metropolitan map."
              linkText="See All Area Guides"
              linkHref="/area-guides"
              light
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Kharghar", info: "The Educational Hub", price: "₹12K - 18K/sq.ft", img: "https://picsum.photos/seed/mmr11/1200/800" },
                { name: "Panvel", info: "Gateway to the Airport", price: "₹8K - 14K/sq.ft", img: "https://picsum.photos/seed/mmr12/1200/800" },
                { name: "Ulwe", info: "Coastal Connectivity Node", price: "₹9K - 13K/sq.ft", img: "https://picsum.photos/seed/mmr13/1200/800" },
                { name: "Mira Road", info: "Suburban Residential Hub", price: "₹14K - 22K/sq.ft", img: "https://picsum.photos/seed/mmr14/1200/800" },
              ].map(area => (
                <AreaCard key={area.name} {...area} />
              ))}
            </div>
          </div>
        </section>

        {/* Directory & Tools Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-accent font-black uppercase tracking-widest text-[10px]">Ecosystem Resources</span>
                <h2 className="text-4xl md:text-5xl font-display font-black my-6 leading-tight">
                  Everything you need to <span className="text-accent">Navigate</span> the City.
                </h2>
                <p className="text-neutral-dark/70 text-lg mb-8 leading-relaxed">
                  Access professional directories, financial calculators, and transit planners designed specifically for the MMR lifestyle.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Schools Directory", icon: Users },
                    { label: "Hospital Tracker", icon: TrendingUp },
                    { label: "Stamp Duty Calc", icon: Building2 },
                    { label: "Metro Route Finder", icon: TrainFront },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-neutral-light rounded-2xl border border-border hover:border-accent transition-all cursor-pointer">
                      <item.icon className="h-5 w-5 text-accent" />
                      <span className="font-bold text-sm tracking-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-10 btn-primary px-8">
                  View Full Directory
                </button>
              </div>
              <div className="relative">
                <div className="aspect-square bg-neutral-light rounded-3xl overflow-hidden relative border-8 border-white shadow-premium">
                  <img src="https://picsum.photos/seed/mmr15/1200/800" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl space-y-4 max-w-sm">
                      <div className="w-12 h-1 bg-accent rounded-full" />
                      <h4 className="text-2xl font-bold">Price Prediction Engine</h4>
                      <p className="text-sm text-neutral-dark/70">Our AI identifies high-growth zones in MMR based on infrastructure proximity and historic trends.</p>
                      <button className="text-accent font-extrabold text-sm flex items-center gap-2 group">
                        Try Predictor <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full flex flex-col items-center justify-center text-white text-center p-4 shadow-2xl rotate-12 blur-none">
                  <span className="text-xs font-black uppercase leading-none mb-1">Coming Soon</span>
                  <span className="text-[10px] font-bold leading-tight opacity-80">Advanced Property Tools</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-20 bg-neutral-light border-y border-border">
          <div className="container">
            <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden text-center md:text-left">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
                    Join 50K+ Residents & Investors in the MMR Network.
                  </h2>
                  <p className="text-neutral-light/60 text-lg">
                    Stay ahead with premium insights, breaking infrastructure news, and exclusive area reports.
                  </p>
                </div>
                <div>
                  <form className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white outline-none focus:border-accent flex-1 font-medium"
                    />
                    <button className="btn-accent px-8 py-4">
                      Join The Inner Circle
                    </button>
                  </form>
                  <p className="mt-4 text-xs text-white/40">We respect your privacy. Unsubscribe anytime.</p>
                </div>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
