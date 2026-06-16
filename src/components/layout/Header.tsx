"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DropdownLink = ({ href = "#", children }: { href?: string, children: React.ReactNode }) => (
  <a href={href} className="group/link text-[#999999] hover:text-[#E53E3E] transition-colors text-[13.5px] font-normal flex items-center relative pl-[14px] -ml-[14px]">
    <span className="text-[#E53E3E] text-[18px] leading-[0] absolute left-0 opacity-0 group-hover/link:opacity-100 transition-opacity mb-[3px]">•</span>
    <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">{children}</span>
  </a>
);


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // HARDCODED FOR VERCEL TESTING
  const domain = "garnishmusicproduction.vercel.app";
  const protocol = "https://";

  const getSubdomainUrl = (sub: string, defaultProdUrl: string) => {
    // Vercel DNS Workaround: If we are testing on a .vercel.app domain, we MUST use 
    // path-based routing (/sites/bh) because Vercel blocks .vercel.app subdomains.
    if (domain.includes("vercel.app")) {
      return `${protocol}${domain}/sites/${sub}`;
    }
    // Otherwise, use standard subdomain routing (e.g., bh.localhost:3000 or bh.garnishmusicproduction.com)
    return `${protocol}${sub}.${domain}`;
  };

  // HARDCODED root URL for testing
  const rootUrl = `${protocol}${domain}`;

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[88px] items-center">
            {/* Logo */}
            <div className="flex-1 flex items-center h-full">
              <a href={rootUrl} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="https://www.garnishmusicproduction.com/wp-content/uploads/2024/05/edu-logo.gif" alt="Garnish Music Production" className="h-12 object-contain" />
              </a>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex flex-[2] justify-center items-center gap-10 text-[13px] font-bold text-[#333333] uppercase tracking-wide h-full">
              
              {/* About Mega Menu */}
              <div className="group cursor-pointer flex items-center h-full relative">
                <span className="group-hover:text-[#E53E3E] transition-colors flex items-center h-full">
                  ABOUT
                </span>
                
                {/* Mega Dropdown Container */}
                <div className="absolute top-full left-1/2 -translate-x-[20%] w-[800px] bg-[#222222] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t border-[#E53E3E]">
                  <div className="grid grid-cols-3 gap-8 p-10 text-left">
                    
                    {/* Column 1: Information */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Information</h3>
                      <DropdownLink href="https://www.garnishmusicproduction.com">Home</DropdownLink>
                      <DropdownLink href="https://edu.garnishmusicproduction.com/music/dave-garnish/">Dave Garnish</DropdownLink>
                      <DropdownLink href="https://www.garnishmusicproduction.com/terms/">Terms</DropdownLink>
                      <DropdownLink href="https://www.garnishmusicproduction.com/privacy-policy/">Privacy Policy</DropdownLink>
                    </div>
                    
                    {/* Column 2: Locations */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Locations</h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <DropdownLink href="https://edu.garnishmusicproduction.com/">World Home</DropdownLink>
                        <DropdownLink href="https://bcn.garnishmusicproduction.com/">BCN</DropdownLink>
                        <DropdownLink href={getSubdomainUrl("bh", "https://bh.garnishmusicproduction.com/")}>BH</DropdownLink>
                        <DropdownLink href="https://ber.garnishmusicproduction.com/">BER</DropdownLink>
                        <DropdownLink href="https://garnishmusicproduction.com/">LDN</DropdownLink>
                        <DropdownLink href="https://lis.garnishmusicproduction.com/">LIS</DropdownLink>
                        <DropdownLink href="https://hk.garnishmusicproduction.com/">HK</DropdownLink>
                        <DropdownLink href="https://tyo.garnishmusicproduction.com/">TYO</DropdownLink>
                        <DropdownLink href="https://la.garnishmusicproduction.com/">LA</DropdownLink>
                        <DropdownLink href="http://mia.garnishmusicproduction.com/">MIA</DropdownLink>
                        <DropdownLink href="https://ny.garnishmusicproduction.com/">NY</DropdownLink>
                        <DropdownLink href="https://nsh.garnishmusicproduction.com/">NSH</DropdownLink>
                        <DropdownLink href="https://sea.garnishmusicproduction.com/">SEA</DropdownLink>
                        <DropdownLink href="https://sf.garnishmusicproduction.com/">SF</DropdownLink>
                      </div>
                    </div>
                    
                    {/* Column 3: Other */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Other</h3>
                      <DropdownLink href="https://www.garnishmusicproduction.com/bespoke-private-tuition/">Private/Bespoke</DropdownLink>
                      <DropdownLink href="https://garn.link/discord">Online Community</DropdownLink>
                      <DropdownLink href="https://merch.garnishmusicproduction.com/">Merch</DropdownLink>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Music Production Programs */}
              <div className="group cursor-pointer flex items-center h-full relative">
                <span className="group-hover:text-[#E53E3E] transition-colors flex items-center h-full">
                  MUSIC PRODUCTION PROGRAMS
                </span>
                
                {/* Mega Dropdown Container */}
                <div className="absolute top-full left-1/2 -translate-x-[40%] w-[1150px] bg-[#222222] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t border-[#E53E3E]">
                  <div className="grid grid-cols-4 p-8 text-left">
                    
                    {/* Column 1: Accredited */}
                    <div className="flex flex-col gap-3 px-6 border-r border-[#333333]">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Accredited</h3>
                      <DropdownLink href="https://la.garnishmusicproduction.com/undergraduate-business-and-music/">F1 USA Visa Eligible (LA)</DropdownLink>
                      <DropdownLink href="https://www.garnishmusicproduction.com/ba-pathway-courses/">BA (Hons) Pathways (BCN)</DropdownLink>
                    </div>
                    
                    {/* Column 2: Comprehensive Programs */}
                    <div className="flex flex-col gap-3 px-6 border-r border-[#333333]">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Comprehensive Programs</h3>
                      <DropdownLink>360° Garnish Music Academy</DropdownLink>
                      <DropdownLink href="https://www.garnishmusicproduction.com/programs/ableton-producer-program/">Electronic Music Producer Program</DropdownLink>
                      <DropdownLink>Pop Music Producer Program</DropdownLink>
                    </div>

                    {/* Column 3: Express Classes */}
                    <div className="flex flex-col gap-3 px-6 border-r border-[#333333]">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Express Classes</h3>
                      <DropdownLink href="https://www.garnishmusicproduction.com/courses/ableton-live-course-london/">Ableton Live</DropdownLink>
                      <DropdownLink href="https://www.garnishmusicproduction.com/courses/logic-pro-x-course-london/">Logic Pro</DropdownLink>
                      <DropdownLink href="https://www.musicgurus.com/learn/garnish-music-production-online-courses/">Logic Pro Self Paced</DropdownLink>
                      <DropdownLink>FL Studio</DropdownLink>
                      <DropdownLink>Pro Tools</DropdownLink>
                      <DropdownLink href="https://www.garnishmusicproduction.com/courses/mixing-and-mastering-course-london/">Mixing/Mixdown</DropdownLink>
                      <DropdownLink>Mastering</DropdownLink>
                      <DropdownLink href="https://www.garnishmusicproduction.com/courses/songwriting-course-london/">Hit Songwriting Course</DropdownLink>
                      <DropdownLink href="https://www.garnishmusicproduction.com/courses/vocal-production/">Vocal Production</DropdownLink>
                      <DropdownLink href="https://www.garnishmusicproduction.com/courses/composition/">Composition</DropdownLink>
                      <DropdownLink>Ableton Live for DJs</DropdownLink>
                      <DropdownLink>Sound Design & Synthesis in Ableton Live</DropdownLink>
                      <DropdownLink>Rekordbox</DropdownLink>
                      <DropdownLink>Electronic Sound Art with Arturia</DropdownLink>
                      <DropdownLink href="https://www.garnishmusicproduction.com/courses/rhythm-section-programming/">Rhythm Section Programming</DropdownLink>
                      <DropdownLink>Radio & Podcast</DropdownLink>
                    </div>
                    
                    {/* Column 4: Others */}
                    <div className="flex flex-col gap-3 px-6">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Others</h3>
                      <DropdownLink href="https://www.garnishmusicproduction.com/bespoke-private-tuition/">Private Instruction & Tuition</DropdownLink>
                      <DropdownLink>Electronic Music DJ Course</DropdownLink>
                      <DropdownLink>Post Production – Mixing and Sound Design for Film and TV</DropdownLink>
                      <DropdownLink>K-pop Hit Songwriting & Music Production</DropdownLink>
                    </div>

                  </div>
                </div>
              </div>

              <Link href="https://www.garnishmusicproduction.com/contact-map/" className="hover:text-[#E53E3E] transition-colors flex items-center h-full">CONTACT</Link>
            </div>

            {/* Right Group (Cart) */}
            <div className="flex-1 flex items-center justify-end h-full">
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#E53E3E] transition-colors pl-6 h-[40%] border-l border-gray-300 group">
                <ShoppingBag className="w-5 h-5 text-[#333333] group-hover:text-[#E53E3E] transition-colors" />
                <span className="text-[11px] font-bold w-[18px] h-[18px] rounded-full bg-[#333333] group-hover:bg-[#E53E3E] text-white flex items-center justify-center transition-colors">0</span>
              </div>
            </div>

            {/* Mobile Nav Toggle */}
            <button 
              className="md:hidden text-gray-800 hover:text-black cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-200 absolute w-full shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col text-black font-semibold">
              <Link href="#" className="py-3 border-b border-gray-100 uppercase text-sm">About</Link>
              <Link href="#" className="py-3 border-b border-gray-100 uppercase text-sm">Music Production Programs</Link>
              <Link href="#" className="py-3 border-b border-gray-100 uppercase text-sm">Contact</Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
