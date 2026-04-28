import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Search, MapPin, Phone, Globe, Star, Users, Building2, GraduationCap, HeartPulse } from "lucide-react";

export default function DirectoryPage() {
  const categories = [
    { name: "Real Estate Agents", icon: Users },
    { name: "Builders", icon: Building2 },
    { name: "Schools", icon: GraduationCap },
    { name: "Hospitals", icon: HeartPulse }
  ];

  return (
    <main className="bg-neutral-light min-h-screen">
      <Navbar />
      
      {/* Search Header */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container">
          <SectionHeader 
            title="MMR Business Directory" 
            subtitle="Connect with certified service providers and local businesses across the region."
            light
          />
          
          <div className="bg-white p-2 rounded-2xl flex flex-col md:flex-row gap-2 max-w-4xl">
            <div className="flex-1 flex items-center px-4 h-12 border-b md:border-b-0 md:border-r border-border">
              <Search className="h-5 w-5 text-neutral-dark mr-3" />
              <input type="text" placeholder="What are you looking for?" className="bg-transparent border-none outline-none w-full text-primary font-medium" />
            </div>
            <div className="flex-1 flex items-center px-4 h-12">
              <MapPin className="h-5 w-5 text-neutral-dark mr-3" />
              <input type="text" placeholder="Location (e.g. Thane, Kharghar)" className="bg-transparent border-none outline-none w-full text-primary font-medium" />
            </div>
            <button className="btn-accent px-8 h-12">Search Directory</button>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map(cat => (
              <button key={cat.name} className="flex items-center space-x-2 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-bold transition-all">
                <cat.icon className="h-4 w-4 text-accent" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Shree Ganesh Realty", category: "Real Estate Agent", area: "Kharghar, Navi Mumbai", rating: 4.8, reviews: 156 },
              { name: "Wisdom World School", category: "Education", area: "Pimple Nilakh (MMR Belt)", rating: 4.9, reviews: 340 },
              { name: "Hiranandani Developers", category: "Builder", area: "Powai & Thane", rating: 4.7, reviews: 1200 },
              { name: "Fortis Hiranandani", category: "Healthcare", area: "Vashi", rating: 4.6, reviews: 890 },
              { name: "Lodha Group", category: "Builder", area: "Upper Thane", rating: 4.5, reviews: 2500 },
              { name: "Ryan International", category: "Education", area: "Sanpada & Kharghar", rating: 4.4, reviews: 420 },
            ].map((biz, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-border hover:border-accent hover:shadow-premium transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-neutral-light rounded-2xl flex items-center justify-center border border-border group-hover:bg-accent/5 transition-colors">
                    <Building2 className="h-8 w-8 text-neutral-dark/30 group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex items-center bg-accent/5 px-2 py-1 rounded text-accent font-black text-[10px]">
                    <Star className="h-3 w-3 fill-current mr-1" />
                    {biz.rating}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{biz.name}</h3>
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4">{biz.category}</p>
                <div className="flex items-center text-sm text-neutral-dark/70 mb-8 font-medium">
                  <MapPin className="h-4 w-4 mr-2 text-neutral-dark/30" />
                  {biz.area}
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <button className="flex items-center justify-center space-x-2 py-2.5 bg-neutral-light text-primary font-bold text-xs rounded-lg hover:bg-primary hover:text-white transition-all">
                    <Phone className="h-3.5 w-3.5" />
                    <span>Contact</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 py-2.5 border border-border text-primary font-bold text-xs rounded-lg hover:border-accent hover:text-accent transition-all">
                    <Globe className="h-3.5 w-3.5" />
                    <span>Website</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-10 rounded-3xl border border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-2xl font-bold mb-2">Want to list your business?</h4>
              <p className="text-neutral-dark/70 font-medium">Reach over 100,000 monthly visitors actively looking for services in the Mumbai Metropolitan Region.</p>
            </div>
            <button className="btn-primary px-8 py-4 whitespace-nowrap">
              Submit Your Listing
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
