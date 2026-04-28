import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactHub() {
  return (
    <main className="bg-neutral-light min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <SectionHeader 
            title="Connect with MMR" 
            subtitle="Queries, tips, advertising, or listing requests — we're here to help."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-[3rem] border border-border shadow-soft">
              <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-neutral-dark/50">Full Name</label>
                    <input type="text" className="w-full bg-neutral-light border border-transparent focus:border-accent rounded-xl px-5 py-3 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-neutral-dark/50">Email Address</label>
                    <input type="email" className="w-full bg-neutral-light border border-transparent focus:border-accent rounded-xl px-5 py-3 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-dark/50">Subject</label>
                  <select className="w-full bg-neutral-light border border-transparent focus:border-accent rounded-xl px-5 py-3 outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Advertise with us</option>
                    <option>Submit a News Tip</option>
                    <option>Real Estate Consultation</option>
                    <option>Business Listing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-dark/50">Details</label>
                  <textarea rows={5} className="w-full bg-neutral-light border border-transparent focus:border-accent rounded-xl px-5 py-3 outline-none transition-all resize-none"></textarea>
                </div>
                <button className="btn-primary w-full py-4 flex items-center justify-center space-x-3">
                  <Send className="h-4 w-4" />
                  <span>Send Intelligence Request</span>
                </button>
              </form>
            </div>

            {/* Contact Details & Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Office Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-border text-accent shadow-sm">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">MMR Media Tower</p>
                      <p className="text-sm text-neutral-dark/70 leading-relaxed">Level 12, G-Block, Bandra Kurla Complex (BKC),<br />Mumbai, Maharashtra 400051</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-border text-accent shadow-sm">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">+91 22 4500 0000</p>
                      <p className="text-xs text-neutral-dark/50 font-bold uppercase tracking-widest">Connect with Support</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-border text-accent shadow-sm">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">contact@mumbaimetropolitan.com</p>
                      <p className="text-xs text-neutral-dark/50 font-bold uppercase tracking-widest">Editorial & Advertising</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <h4 className="text-xl font-bold mb-4">Are you a Developer?</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Get your projects featured in our infrastructure tracker and reach ultra-targeted MMR home-buyers.
                </p>
                <button className="btn-accent px-8">Media Kit 2026</button>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 skew-x-12 -mr-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
