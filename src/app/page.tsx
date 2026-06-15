"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, X, MapPin, Award, BookOpen, ChevronRight, 
  PlayCircle, Star, Music, Headset, CheckCircle2, ShoppingBag
} from "lucide-react";
import { motion } from "framer-motion";

const DropdownLink = ({ href = "#", children }: { href?: string, children: React.ReactNode }) => (
  <a href={href} className="group/link text-[#999999] hover:text-[#E53E3E] transition-colors text-[13.5px] font-normal flex items-center relative pl-[14px] -ml-[14px]">
    <span className="text-[#E53E3E] text-[18px] leading-[0] absolute left-0 opacity-0 group-hover/link:opacity-100 transition-opacity mb-[3px]">•</span>
    <span>{children}</span>
  </a>
);

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const courses = [
    {
      category: "Accredited",
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      items: [
        { name: "F1 USA Visa Eligible (LA)", link: "#" },
        { name: "BA (Hons) Pathways (BCN)", link: "#" },
      ]
    },
    {
      category: "Certified",
      icon: <CheckCircle2 className="w-6 h-6 text-green-400" />,
      items: [
        { name: "Garnish Industry Diploma", link: "#" },
        { name: "Electronic Music Producer", link: "#" },
        { name: "International Academy", link: "#" },
      ]
    },
    {
      category: "Shorter Tactical",
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      items: [
        { name: "Ableton Live", link: "#" },
        { name: "Hit Songwriting", link: "#" },
        { name: "Logic Pro", link: "#" },
        { name: "Mixing & Mastering", link: "#" },
        { name: "Composition", link: "#" },
        { name: "Vocal Production", link: "#" },
      ]
    }
  ];

  const testimonials = [
    {
      name: "Lorrin Pearce",
      text: "My time at Garnish London's year long Electronic Music Production course has been invaluable. Being able to learn from industry professionals who are at the top of their game just goes to show what is possible."
    },
    {
      name: "Natasha Bedingfield",
      text: "Being from a songwriting and artist background, I was keen to learn the production side. The instructors were amazing, and I felt they explained things in a language I could understand."
    },
    {
      name: "Aluna Francis (Aluna George)",
      text: "I decided I wanted to go to the next level with production, I love learning in an intimate focused environment from dedicated teachers and Garnish had everything I needed."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Logo */}
            <div className="flex-1 flex items-center h-full">
              <div className="flex items-center gap-3">
                <img src="https://www.garnishmusicproduction.com/wp-content/uploads/2024/05/edu-logo.gif" alt="Garnish Music Production" className="h-12 object-contain" />
              </div>
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
                      <DropdownLink>Home</DropdownLink>
                      <DropdownLink>Dave Garnish</DropdownLink>
                      <DropdownLink>Terms</DropdownLink>
                      <DropdownLink>Privacy Policy</DropdownLink>
                    </div>
                    
                    {/* Column 2: Locations */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Locations</h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <DropdownLink href="https://edu.garnishmusicproduction.com/">World Home</DropdownLink>
                        <DropdownLink href="https://bcn.garnishmusicproduction.com/">BCN</DropdownLink>
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
                      <DropdownLink>Private/Bespoke</DropdownLink>
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
                      <DropdownLink>F1 USA Visa Eligible (LA)</DropdownLink>
                      <DropdownLink>BA (Hons) Pathways (BCN)</DropdownLink>
                    </div>
                    
                    {/* Column 2: Comprehensive Programs */}
                    <div className="flex flex-col gap-3 px-6 border-r border-[#333333]">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Comprehensive Programs</h3>
                      <DropdownLink>360° Garnish Music Academy</DropdownLink>
                      <DropdownLink>Electronic Music Producer Program</DropdownLink>
                      <DropdownLink>Pop Music Producer Program</DropdownLink>
                    </div>

                    {/* Column 3: Express Classes */}
                    <div className="flex flex-col gap-3 px-6 border-r border-[#333333]">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Express Classes</h3>
                      <DropdownLink>Ableton Live</DropdownLink>
                      <DropdownLink>Logic Pro</DropdownLink>
                      <DropdownLink>Logic Pro Self Paced</DropdownLink>
                      <DropdownLink>FL Studio</DropdownLink>
                      <DropdownLink>Pro Tools</DropdownLink>
                      <DropdownLink>Mixing/Mixdown</DropdownLink>
                      <DropdownLink>Mastering</DropdownLink>
                      <DropdownLink>Hit Songwriting Course</DropdownLink>
                      <DropdownLink>Vocal Production</DropdownLink>
                      <DropdownLink>Composition</DropdownLink>
                      <DropdownLink>Ableton Live for DJs</DropdownLink>
                      <DropdownLink>Sound Design & Synthesis in Ableton Live</DropdownLink>
                      <DropdownLink>Rekordbox</DropdownLink>
                      <DropdownLink>Electronic Sound Art with Arturia</DropdownLink>
                      <DropdownLink>Rhythm Section Programming</DropdownLink>
                      <DropdownLink>Radio & Podcast</DropdownLink>
                    </div>
                    
                    {/* Column 4: Others */}
                    <div className="flex flex-col gap-3 px-6">
                      <h3 className="text-white font-bold text-[15px] mb-2 uppercase tracking-wider">Others</h3>
                      <DropdownLink>Private Instruction & Tuition</DropdownLink>
                      <DropdownLink>Electronic Music DJ Course</DropdownLink>
                      <DropdownLink>Post Production – Mixing and Sound Design for Film and TV</DropdownLink>
                      <DropdownLink>K-pop Hit Songwriting & Music Production</DropdownLink>
                    </div>

                  </div>
                </div>
              </div>

              <Link href="#" className="hover:text-[#E53E3E] transition-colors flex items-center h-full">CONTACT</Link>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Music Studio" 
            fill 
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-gray-300 mb-6">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Approved by 3 DAWs</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              The World's Boutique <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Music Production</span> School
            </h1>
            <p className="text-lg lg:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Launch your music journey with us — with our Level 4 and Level 5 BA (Hons) pathway courses. 
              Choose from Music Production & Sound Engineering, Songwriting & Production, or Electronic Music Production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:shadow-[0_0_60px_rgba(147,51,234,0.5)] cursor-pointer">
                Explore Courses <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 backdrop-blur-sm transition-all cursor-pointer">
                <PlayCircle className="w-5 h-5" /> Watch Trailer
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From short tactical courses to fully accredited BA (Hons) pathways.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-purple-500/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6">{course.category}</h3>
                <ul className="space-y-3">
                  {course.items.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link} className="text-gray-400 hover:text-white flex items-center gap-2 group/link">
                        <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all text-purple-400" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Hear from our students</h2>
            <Link href="#" className="text-purple-400 hover:text-purple-300 font-medium hidden md:flex items-center gap-1">
              Read all testimonials <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/10"
              >
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-500">Garnish Graduate</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="https://www.garnishmusicproduction.com/wp-content/uploads/2024/05/edu-logo.gif" alt="Garnish Music Production" className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-white">Locations</Link>
              <Link href="#" className="hover:text-white">Tutors</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Garnish Music Production.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
