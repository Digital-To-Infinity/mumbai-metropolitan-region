import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  linkText, 
  linkHref, 
  centered = false,
  light = false 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6",
      centered && "text-center md:items-center md:justify-center"
    )}>
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        <h2 className={cn(
          "text-3xl md:text-5xl font-display font-black leading-tight",
          light ? "text-white" : "text-primary"
        )}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn(
            "mt-4 font-medium text-lg",
            light ? "text-white/60" : "text-neutral-dark/70"
          )}>
            {subtitle}
          </p>
        )}
      </div>
      {linkText && linkHref && (
        <Link 
          href={linkHref} 
          className={cn(
            "group flex items-center font-bold text-sm uppercase tracking-widest",
            light ? "text-white hover:text-accent" : "text-primary hover:text-accent"
          )}
        >
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
}
