import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconBrandLinkedin } from "@tabler/icons-react";


export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-display font-bold leading-none tracking-tight">
                MUMBAI<span className="text-accent">METROPOLITAN</span>
              </span>
              <span className="text-xs font-semibold text-neutral-light/60 tracking-[0.2em] uppercase">
                The Definitive MMR Guide
              </span>
            </Link>
            <p className="text-neutral-light/70 text-sm leading-relaxed">
              Mumbai Metropolitan Region (MMR) is the world's most dynamic growth belt. We provide the most comprehensive authority on real estate, infrastructure, news, and lifestyle across the entire metropolitan area.
            </p>
            <div className="flex space-x-4">
              {[IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandYoutube, IconBrandLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Navigation</h3>
            <ul className="space-y-3">
              {["Mumbai Guide", "Navi Mumbai Updates", "Thane Region", "MMR News", "Infrastructure Tracker", "Real Estate Trends", "Transport Guide"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-light/70 hover:text-white transition-colors text-sm flex items-center">
                    <span className="w-1 h-1 bg-accent mr-2 rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Areas */}
          <div>
            <h3 className="text-lg font-bold mb-6">Regional Hubs</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {["Panvel", "Kharghar", "Ulwe", "Dronagiri", "Kalyan", "Mira Road", "Vasai", "Virar", "Badlapur", "Karjat"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-light/70 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-neutral-light/70 text-sm">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>BKC, Mumbai, Maharashtra 400051</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-light/70 text-sm">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 22 4500 0000</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-light/70 text-sm">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>contact@mumbaimetropolitan.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-y border-white/10 py-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold">Subscribe to MMR Insights</h4>
            <p className="text-neutral-light/60 text-sm">Get weekly updates on real estate, infrastructure, and city news.</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 outline-none focus:border-accent w-full"
            />
            <button className="bg-accent text-white px-6 py-3 rounded-r-lg font-bold hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-light/50 border-t border-white/5 pt-8">
          <p>© 2026 Mumbai Metropolitan Region. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
