import React from "react";
import { ArrowUpRight } from "lucide-react";

interface AreaCardProps {
  name: string;
  info: string;
  price: string;
  img: string;
}

export default function AreaCard({ name, info, price, img }: AreaCardProps) {
  return (
    <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-lg">
      <img 
        src={img} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="space-y-1 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h4 className="text-2xl font-display font-black text-white">{name}</h4>
          <p className="text-white/70 text-xs font-medium uppercase tracking-widest">{info}</p>
        </div>
        
        <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-xs font-bold px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20">
            {price}
          </div>
          <div className="p-2 bg-accent text-white rounded-full">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Gloss Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}
