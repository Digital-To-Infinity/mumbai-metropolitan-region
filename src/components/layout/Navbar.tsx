"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Mumbai", href: "/mumbai" },
  { name: "Navi Mumbai", href: "/navi-mumbai" },
  { name: "Thane", href: "/thane" },
  { name: "MMR News", href: "/news" },
  { name: "Real Estate", href: "/real-estate" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Transport", href: "/transport" },
  { name: "Area Guides", href: "/area-guides" },
  { name: "Business", href: "/business" },
  { name: "Directory", href: "/directory" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-premium py-2" : "bg-white/90 backdrop-blur-md py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl md:text-2xl font-display font-bold text-primary leading-none tracking-tight">
            MUMBAI<span className="text-accent">METROPOLITAN</span>
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-neutral-dark tracking-[0.2em] uppercase">
            The Definitive MMR Guide
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1">
          {navLinks.slice(0, 8).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-[13px] font-semibold text-primary/80 hover:text-accent px-3 py-2 transition-colors rounded-md hover:bg-neutral-light"
            >

              {link.name}
            </Link>
          ))}
          <div className="relative group">
            <button className="whitespace-nowrap flex items-center text-[13px] font-semibold text-primary/80 hover:text-accent px-3 py-2 transition-colors rounded-md hover:bg-neutral-light">
              More <ChevronDown className="ml-1 h-3 w-3" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-white shadow-premium rounded-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {navLinks.slice(8).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-[13px] text-primary/80 hover:bg-neutral-light hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-primary/80 hover:bg-neutral-light rounded-full transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          
          <Link href="/advertise" className="hidden md:block btn-primary text-xs py-2">
            Advertise
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-primary/80 hover:bg-neutral-light rounded-full transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-border shadow-md py-4"
          >
            <div className="container">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for areas, news, projects, or businesses..."
                  className="w-full bg-neutral-light border-none rounded-xl px-12 py-3 focus:ring-2 focus:ring-accent outline-none font-medium"
                  autoFocus
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-dark" />
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-dark hover:text-accent"
                >
                  ESC
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[64px] bg-white z-40 xl:hidden overflow-y-auto"
          >
            <div className="container py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-primary border-b border-border pb-4 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-4">
                <Link href="/advertise" className="block btn-accent text-center py-3">
                  Advertise With Us
                </Link>
                <Link href="/submit-news" className="block btn-primary text-center py-3">
                  Submit Breaking News
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
