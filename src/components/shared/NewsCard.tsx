import React from "react";
import { Clock, MapPin } from "lucide-react";

interface NewsCardProps {
  category: string;
  title: string;
  date: string;
  area: string;
}

export default function NewsCard({ category, title, date, area }: NewsCardProps) {
  return (
    <div className="bg-white border border-border p-6 rounded-2xl shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 px-2 py-0.5 rounded">
          {category}
        </span>
        <div className="flex items-center text-[10px] text-neutral-dark/50 font-bold">
          <Clock className="h-3 w-3 mr-1" />
          {date}
        </div>
      </div>
      <h4 className="text-lg font-bold text-primary mb-6 group-hover:text-accent transition-colors leading-snug flex-1">
        {title}
      </h4>
      <div className="pt-4 border-t border-border flex items-center text-xs font-bold text-neutral-dark/70">
        <MapPin className="h-3.5 w-3.5 mr-1.5 text-accent" />
        {area}
      </div>
    </div>
  );
}
