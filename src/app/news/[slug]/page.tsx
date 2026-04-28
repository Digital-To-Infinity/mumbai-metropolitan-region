import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, User, Calendar, Share2, MessageSquare, Bookmark } from "lucide-react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconBrandLinkedin } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Demo data for an infrastructure update
  const article = {
    title: "Navi Mumbai International Airport (NMIA) Terminal 1 Construction Enters Final Stretch; Operational Trials Scheduled for Early 2026",
    category: "Infrastructure",
    author: "Rahul Sharma",
    publishedDate: "Oct 15, 2025",
    updatedDate: "Oct 18, 2025",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/mmr7/1200/800",
    excerpt: "The much-awaited Navi Mumbai International Airport is nearing its first major milestone as terminal construction reaches 85% completion. Here is everything you need to know about the current status and impacts.",
    keyFacts: [
      "Target Date: December 2026",
      "Capacity: 20 Million Passengers (Phase 1)",
      "Developer: Adani Airports",
      "Location: Panvel-Ulwe Belt"
    ]
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs & Category */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-accent text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded">
                {article.category}
              </span>
              <span className="text-[10px] font-bold text-neutral-dark/50 uppercase tracking-widest">
                Exclusive Content
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-display font-black leading-tight text-primary mb-8">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-border mb-10">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-light overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=0f172a&color=fff" alt="Author" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">{article.author}</p>
                    <p className="text-[10px] text-neutral-dark/50 font-bold uppercase">Senior Correspondent</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center space-x-4 text-xs font-bold text-neutral-dark/50 border-l border-border pl-6">
                  <div className="flex items-center"><Calendar className="h-3.5 w-3.5 mr-1.5" /> {article.publishedDate}</div>
                  <div className="flex items-center"><Clock className="h-3.5 w-3.5 mr-1.5" /> {article.readTime}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {[IconBrandTwitter, IconBrandFacebook, IconBrandLinkedin, Bookmark].map((Icon, i) => (
                  <button key={i} className="p-2.5 rounded-full bg-neutral-light hover:bg-accent hover:text-white transition-all">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Sidebar - Table of Contents */}
              <div className="lg:col-span-3 hidden lg:block">
                <div className="sticky top-24">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4 border-b border-accent w-fit pb-1">Contents</h4>
                  <ul className="space-y-4">
                    {["Current Status", "Infrastructure Highlights", "Economic Impact", "Future Timeline"].map((item, i) => (
                      <li key={i} className="text-sm font-bold text-neutral-dark/60 hover:text-accent cursor-pointer transition-colors leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-12 p-6 bg-neutral-light rounded-2xl border border-border">
                    <h5 className="text-xs font-black uppercase mb-4">Ad Advertisement</h5>
                    <div className="aspect-[4/5] bg-border rounded flex items-center justify-center text-[10px] font-bold text-neutral-dark/30">
                      300x250 Ad Space
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Article Body */}
              <div className="lg:col-span-9">
                <div className="prose prose-lg max-w-none prose-slate prose-headings:font-display prose-headings:font-black prose-a:text-accent">
                  <p className="lead text-xl text-neutral-dark/80 font-medium leading-relaxed italic mb-10">
                    {article.excerpt}
                  </p>

                  <div className="bg-primary text-white p-8 rounded-3xl mb-12 relative overflow-hidden">
                    <h4 className="text-white text-xl font-bold mb-6">Key Facts at a Glance</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {article.keyFacts.map((fact, i) => (
                        <div key={i} className="flex items-center space-x-3 text-sm font-medium">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span>{fact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl font-black mb-6">Major Milestones Achieved</h2>
                  <p>
                    The Navi Mumbai International Airport (NMIA) project is no longer just a blueprint on a map; it is a sprawling reality taking shape in the Panvel-Ulwe belt. According to the latest project report from CIDCO and Adani Airports, the primary runway construction is complete, and the focus has now shifted to the architectural finishing of Terminal 1.
                  </p>
                  
                  <blockquote>
                    "NMIA is set to be the primary engine for the 'Third Mumbai' vision. It will not just serve as an aviation hub but as a multi-modal transit center connecting the metro, highways, and the future high-speed rail corridor."
                  </blockquote>

                  <p>
                    Infrastructure analysts suggest that the operationalization of the airport will trigger a massive surge in commercial office space demand in Navi Mumbai, particularly in the Kharghar Corporate Park area.
                  </p>

                  <div className="my-12 p-10 bg-accent/5 rounded-3xl border-l-[6px] border-accent">
                    <h3 className="text-2xl font-black mb-4">Impact on Real Estate</h3>
                    <p className="text-neutral-dark/80">
                      Areas like Ulwe and Dronagiri, which were once considered remote, are now witnessing price levels comparable to established pockets of Thane. Investment in residential projects around the airport belt has increased by 40% year-over-year.
                    </p>
                  </div>
                </div>

                {/* Tags & Sharing */}
                <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
                  <div className="flex gap-2">
                    {["Airport", "Infrastructure", "Navi Mumbai", "Development"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-neutral-light rounded-full text-[10px] font-bold text-neutral-dark hover:bg-accent hover:text-white transition-all cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-bold text-neutral-dark/50 uppercase">Share Article</span>
                    <button className="text-primary hover:text-accent transition-colors"><Share2 className="h-5 w-5" /></button>
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-12 p-8 bg-neutral-light rounded-3xl flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg overflow-hidden shrink-0">
                    <img src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=0f172a&color=fff" className="w-full h-full object-cover" alt="Author" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold mb-2">Rahul Sharma</h4>
                    <p className="text-sm text-neutral-dark/70 leading-relaxed mb-4">
                      Rahul is a veteran infrastructure journalist with over 12 years of experience covering major urban development projects in the MMR. He specializes in multi-modal transit and urban planning.
                    </p>
                    <button className="text-accent text-sm font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                      View All Articles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}
