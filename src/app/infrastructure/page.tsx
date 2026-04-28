import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { TrainFront, Plane, Anchor, Road, HardHat, CheckCircle2, Clock, MapPin } from "lucide-react";

export default function InfrastructureHub() {
  const projects = [
    { 
      name: "Navi Mumbai International Airport (NMIA)", 
      status: "Under Construction", 
      progress: 85, 
      category: "Aviation", 
      icon: Plane,
      img: "https://picsum.photos/seed/mmr3/1200/800"
    },
    { 
      name: "Coastal Road Project Phase 2", 
      status: "Advanced Stages", 
      progress: 72, 
      category: "Roads", 
      icon: Road,
      img: "https://picsum.photos/seed/mmr4/1200/800"
    },
    { 
      name: "Mumbai Metro Line 3 (Aqua Line)", 
      status: "Trials Ongoing", 
      progress: 98, 
      category: "Metro", 
      icon: TrainFront,
      img: "https://picsum.photos/seed/mmr5/1200/800"
    },
    { 
      name: "Atal Setu (MTHL) Maintenance Facility", 
      status: "Operational", 
      progress: 100, 
      category: "Bridges", 
      icon: Anchor,
      img: "https://picsum.photos/seed/mmr6/1200/800"
    }
  ];

  return (
    <main className="bg-neutral-light min-h-screen">
      <Navbar />
      
      {/* Intro Header */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container">
          <SectionHeader 
            title="Infrastructure Tracker" 
            subtitle="Real-time monitoring of mega-projects reshaping the metropolitan landscape."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {projects.map((project, i) => (
                <div key={i} className="bg-white border border-border rounded-3xl overflow-hidden hover:shadow-premium transition-all group flex flex-col md:flex-row">
                  <div className="md:w-2/5 aspect-video md:aspect-auto relative overflow-hidden">
                    <img src={project.img} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest flex items-center">
                      <project.icon className="h-3 w-3 mr-2 text-accent" />
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.name}</h3>
                      <span className={cn(
                        "text-[10px] font-black uppercase px-2 py-0.5 rounded",
                        project.status === "Operational" ? "bg-green-100 text-green-700" : "bg-accent/10 text-accent"
                      )}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-bold text-neutral-dark/50">
                        <span>Overall Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-neutral-light rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-accent transition-all duration-1000" 
                          style={{ width: `${project.progress}%` }} 
                        />
                      </div>
                      <div className="flex items-center gap-6 pt-4 text-xs font-bold text-neutral-dark/70">
                        <div className="flex items-center"><MapPin className="h-3.5 w-3.5 mr-1.5 text-accent" /> MMR Global</div>
                        <div className="flex items-center"><Clock className="h-3.5 w-3.5 mr-1.5 text-accent" /> Est. Q4 2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Infrastructure Sidebar */}
            <div className="space-y-8">
              <div className="bg-primary rounded-3xl p-8 text-white">
                <HardHat className="h-10 w-10 text-accent mb-6" />
                <h4 className="text-2xl font-bold mb-4">Development Insights</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  MMR's infrastructure pipeline exceeds ₹2.5 Lakh Crores. We track every major move from tunneling to bridge-decking.
                </p>
                <button className="w-full btn-accent py-4">Request Project Report</button>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-border">
                <h4 className="font-bold mb-6">Upcoming Milestones</h4>
                <div className="space-y-6">
                  {[
                    "Metro Line 4 Girder Launching",
                    "BKC Bullet Train Station Excavation",
                    "Navi Mumbai Water Taxi Expansion",
                    "Thane-Borivali Tunnel Tender"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 shrink-0" />
                      <span className="text-sm font-medium leading-snug">{item}</span>
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

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(" ");
