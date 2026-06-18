"use client";

import React from "react";
import { PlayCircle, Star, Award, ChevronRight } from "lucide-react";

export default function Footer() {
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000";
  const isDev = rootDomain.includes("localhost");
  const protocol = isDev ? "http://" : "https://";

  const getSubdomainUrl = (sub: string) => `${protocol}${sub}.${rootDomain}/`;
  const rootUrl = `${protocol}${rootDomain}/`;

  const usaLocations = [
    { name: "Music Production School, Los Angeles", href: getSubdomainUrl("la") },
    { name: "Music Production School, Miami", href: getSubdomainUrl("mia") },
    { name: "Music Production School, Nashville", href: getSubdomainUrl("nsh") },
    { name: "Music Production School, New York", href: getSubdomainUrl("ny") },
    { name: "Music Production School, San Francisco", href: getSubdomainUrl("sf") },
    { name: "Music Production School, Seattle", href: getSubdomainUrl("sea") }
  ];

  const rowLocations = [
    { name: "Global Hub", href: getSubdomainUrl("edu") },
    { name: "Music Production School, Barcelona", href: getSubdomainUrl("bcn") },
    { name: "Music Production School, Bournemouth", href: getSubdomainUrl("bh") },
    { name: "Music Production School, Berlin", href: getSubdomainUrl("ber") },
    { name: "Music Production School, Hong Kong", href: getSubdomainUrl("hk") },
    { name: "Music Production School, Lisbon", href: getSubdomainUrl("lis") },
    { name: "Music Production School, London", href: rootUrl },
    { name: "Music Production School, Marbella", href: getSubdomainUrl("mar") },
    { name: "Music Production School, Sydney", href: getSubdomainUrl("syd") },
    { name: "Music Production School, Tokyo", href: getSubdomainUrl("tyo") }
  ];

  return (
    <>
      {/* Main Footer */}
      <footer className="w-full bg-[#222222] pt-20 pb-16 relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            
            {/* Column 1: Info & Socials */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="mb-12 flex items-center gap-3">
                  <span className="text-white font-bold text-2xl tracking-tighter">Ableton</span>
                  <div className="flex flex-col leading-[1.1]">
                    <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Certified</span>
                    <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Training Center</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <a href="#" className="w-10 h-10 rounded-full border border-[#444444] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                    <PlayCircle className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#444444] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                    <Star className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#444444] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                    <Award className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="text-[#666666] text-[11px] uppercase tracking-wider mt-16 font-semibold">
                Copyright © Garnish Music Production School. All rights reserved
              </div>
            </div>

            {/* Column 2: USA */}
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-[16px] uppercase tracking-[0.15em] mb-4">USA</h3>
              <div className="w-full h-[1px] bg-white/10 mb-2"></div>
              
              <div className="flex flex-col">
                {usaLocations.map((loc, i) => (
                  <a key={i} href={loc.href} className="py-3.5 border-b border-white/5 text-gray-300 hover:text-[#E53E3E] transition-colors text-[12px] font-semibold uppercase tracking-wider">
                    {loc.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Rest of World */}
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-[16px] uppercase tracking-[0.15em] mb-4">Rest of World</h3>
              <div className="w-full h-[1px] bg-white/10 mb-2"></div>
              
              <div className="flex flex-col">
                {rowLocations.map((loc, i) => (
                  <a key={i} href={loc.href} className="py-3.5 border-b border-white/5 text-gray-300 hover:text-[#E53E3E] transition-colors text-[12px] font-semibold uppercase tracking-wider">
                    {loc.name}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
        
        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-0 right-0 w-[50px] h-[50px] bg-[#E53E3E] flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-white -rotate-90" />
        </button>
      </footer>
    </>
  );
}
