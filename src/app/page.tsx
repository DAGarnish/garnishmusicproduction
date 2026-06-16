"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, X, MapPin, Award, BookOpen, ChevronRight, ChevronLeft,
  PlayCircle, Star, Music, Headset, CheckCircle2, ShoppingBag
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DropdownLink = ({ href = "#", children }: { href?: string, children: React.ReactNode }) => (
  <a href={href} className="group/link text-[#999999] hover:text-[#E53E3E] transition-colors text-[13.5px] font-normal flex items-center relative pl-[14px] -ml-[14px]">
    <span className="text-[#E53E3E] text-[18px] leading-[0] absolute left-0 opacity-0 group-hover/link:opacity-100 transition-opacity mb-[3px]">•</span>
    <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">{children}</span>
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
      name: "Dafni Piffer",
      text: "I learned a lot thanks to a very qualified and professional instructor, who enriched the theory with useful practical tips and tricks that really helped improve my work"
    },
    {
      name: "Lorrin Pearce",
      text: "My time at Garnish London's year long Electronic Music Production course has been invaluable. Being able to learn from industry professionals who are at the top of their game just goes to show what is possible. It has made such a big difference to my musical journey learning production, first hand in a small focused environment with other musicians, instead of trying to learn it all online by myself. This course has covered all of the fundamentals of music production in a comprehensive, practical and hands-on way, and I really couldn't have asked for a better experience. It also helps that the teachers have been patient, enthusiastic and friendly. Thanks for the experience and I can't wait to see what the future holds for me."
    },
    {
      name: "Dewi Williams",
      text: "A great way to improve your knowledge of Logic. It summarised the information provided extremely well to ensure it covered enough of everything. Some of the things included would even touch on expert knowledge, providing us with particularly useful little tricks to give you that little edge over other users who haven't taken such a course."
    }
  ];

  const heroSlides = [
    {
      image: "https://www.garnishmusicproduction.com/wp-content/uploads/2022/06/Worlds-boutique-Music-Production-School-scaled.jpg",
      text: <>The World's Boutique<br/> Music Production School</>
    },
    {
      image: "https://www.garnishmusicproduction.com/wp-content/uploads/2020/02/Garnish5.jpg",
      text: <>Certified & Critically <br/> Acclaimed Music<br/> Production Courses<br/>Since 2009</>
    },
    {
      image: "https://www.garnishmusicproduction.com/wp-content/uploads/2018/03/Garnish24.jpg",
      text: "Studio Mentor Sessions"
    },
    {
      image: "https://www.garnishmusicproduction.com/wp-content/uploads/2023/06/Tower-Bridge.png",
      text: "In London"
    },
    {
      image: "https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/20130809-DSC_9526-garnish@me.com_.jpg",
      text: null
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    const heroTimer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => {
      clearInterval(testimonialTimer);
      clearInterval(heroTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[88px] items-center">
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
                        <DropdownLink href="https://bh.garnishmusicproduction.com/">BH</DropdownLink>
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

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[80vh] min-h-[400px] lg:min-h-[650px] overflow-hidden mt-[88px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence initial={false}>
            <motion.img 
              key={currentHeroImage}
              src={heroSlides[currentHeroImage].image}
              alt={`Studio`} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="relative z-10 px-4 text-center">
          <AnimatePresence mode="wait">
            {heroSlides[currentHeroImage].text && (
              <motion.h1 
                key={currentHeroImage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="bg-[#E53E3E] text-white px-6 md:px-10 py-4 md:py-6 text-2xl md:text-4xl lg:text-[42px] font-bold uppercase tracking-wider text-center leading-[1.3] inline-block"
              >
                {heroSlides[currentHeroImage].text}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* World-class Music Production Courses Section */}
      <section className="py-24 bg-white text-[#333]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Intro Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative h-[400px] md:h-[600px] w-full">
              <img 
                src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/20130809-DSC_9526-garnish@me.com_.jpg" 
                alt="Studio" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-4 md:px-12">
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#222] mb-6 leading-tight">
                World-class Music Production Courses in London
              </h2>
              <h3 className="text-xl font-semibold text-[#E53E3E] mb-6 uppercase tracking-wider">
                BA (Hons) Pathways | Music Production
              </h3>
              <p className="text-[#666] text-lg leading-relaxed mb-8">
                Launch your music journey with us — with our Level 4 and Level 5 BA (Hons) pathway courses. 
                Choose from Music Production & Sound Engineering, Songwriting & Production, or Electronic Music Production — 
                all awarded in London, one of the world's most iconic music and cultural hubs. You'll dive deep into recording, 
                songwriting, vocal production, mixing, mastering, sound design, and advanced DAW workflows, while sharpening 
                your branding and career strategies. Through real-world projects and peer collaboration, you'll graduate with 
                a professional portfolio — and the skills to back it up.
              </p>
              <div>
                <a href="#" className="inline-block bg-[#E53E3E] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#333] transition-colors">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Shorter Courses Grid */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#222] mb-4">Shorter Music Production Courses</h2>
            <div className="w-16 h-1 bg-[#E53E3E] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Ableton Live Music Production & Performance",
                category: "Production Courses",
                image: "https://www.garnishmusicproduction.com/wp-content/uploads/2018/03/ableton_live.jpg"
              },
              {
                title: "Logic Pro",
                category: "Production Courses",
                image: "https://www.garnishmusicproduction.com/wp-content/uploads/2018/03/L800.jpg"
              },
              {
                title: "Mixing & Mastering",
                category: "Production Courses",
                image: "https://www.garnishmusicproduction.com/wp-content/uploads/2000/09/AAMIR-SSL-800.jpg"
              },
              {
                title: "Hit Songwriting | London, Online, Blended",
                category: "Production Courses",
                image: "https://www.garnishmusicproduction.com/wp-content/uploads/2018/04/Hit-Songwriting-Course-London-800.jpg"
              }
            ].map((course, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-[300px] overflow-hidden mb-6">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <div className="text-center px-4">
                  <h4 className="text-[#999] text-[13px] font-semibold uppercase tracking-widest mb-3">{course.category}</h4>
                  <h3 className="text-[#222] text-[18px] font-bold leading-snug group-hover:text-[#E53E3E] transition-colors">{course.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white lg:py-32 overflow-hidden border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-[#222222] font-bold text-2xl lg:text-3xl uppercase tracking-[0.2em] mb-4">Testimonials</h2>
          <p className="text-[#999999] text-sm md:text-base mb-12">Hear what our previous students have to say about us!</p>
          
          <div className="relative min-h-[350px] md:min-h-[280px] lg:min-h-[220px] flex items-center justify-center">
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} 
              className="absolute left-0 md:-left-8 lg:-left-16 z-20 p-2 text-gray-400 hover:text-[#E53E3E] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentTestimonial === idx ? 1 : 0, 
                  pointerEvents: currentTestimonial === idx ? 'auto' : 'none',
                  zIndex: currentTestimonial === idx ? 10 : 0
                }}
                transition={{ duration: 0.8 }}
                className="absolute w-full px-12 md:px-20 flex flex-col items-center justify-center"
              >
                <h2 className="text-[16px] md:text-xl lg:text-[22px] leading-snug md:leading-relaxed font-normal text-[#222222] mb-8 max-w-4xl">
                  {t.text}
                </h2>
                <h5 className="text-[#999999] font-semibold text-[15px] uppercase tracking-wider">
                  - <span className="text-[#333333]">{t.name}</span>
                </h5>
              </motion.div>
            ))}

            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)} 
              className="absolute right-0 md:-right-8 lg:-right-16 z-20 p-2 text-gray-400 hover:text-[#E53E3E] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 mt-12 relative z-20">
            {testimonials.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${currentTestimonial === idx ? 'bg-[#E53E3E]' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-[#E53E3E] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-white font-bold text-2xl lg:text-3xl uppercase tracking-[0.2em] mb-16 text-center">Some of our partners</h2>
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center opacity-100">
            <a href="https://www.ableton.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/1.png" alt="Ableton" className="h-[30px] w-auto max-w-full object-contain" /></a>
            <a href="https://izotope.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/2-copy-1.png" alt="iZotope" className="h-[37px] w-auto max-w-full object-contain" /></a>
            <a href="https://www.beatport.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/3.png" alt="beatport" className="h-[24px] w-auto max-w-full object-contain" /></a>
            <a href="https://www.arturia.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/4-1.png" alt="ARTURIA" className="h-[67px] w-auto max-w-full object-contain" /></a>
            <a href="https://www.pioneerdj.com/en-gb/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/svgexport-1-1.png" alt="Pioneer DJ" className="h-[28px] w-auto max-w-full object-contain" /></a>
            <a href="https://alphatheta.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/AlphaTheta-1.png" alt="AlphaTheta" className="h-[29px] w-auto max-w-full object-contain" /></a>
            <a href="https://www.soundtoys.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/logo-1.png" alt="soundtoys" className="h-[45px] w-auto max-w-full object-contain" /></a>
            <a href="https://www.antarestech.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/Auto-Tune_white_logo_with_green_A_wave-1.png" alt="AUTO-TUNE" className="h-[54px] w-auto max-w-full object-contain" /></a>
            <a href="https://www.image-line.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/Image-Line.png" alt="FL STUDIO" className="h-[38px] w-auto max-w-full object-contain" /></a>
            <a href="https://www.pitchinnovations.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/logo-2.png" alt="PITCH INNOVATIONS" className="h-[71px] w-auto max-w-full object-contain" /></a>
            <a href="https://www.native-instruments.com/en/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/Native_Instruments_logo_2023.svg_-1.png" alt="NATIVE INSTRUMENTS" className="h-[25px] w-auto max-w-full object-contain" /></a>
            <a href="https://music.apple.com/us/new" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/apple.png" alt="Apple" className="h-[125px] w-auto max-w-full object-contain" /></a>
          </div>
        </div>
      </section>

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
                {[
                  "Music Production School, Los Angeles",
                  "Music Production School, Miami",
                  "Music Production School, Nashville",
                  "Music Production School, New York",
                  "Music Production School, San Francisco",
                  "Music Production School, Seattle"
                ].map((location, i) => (
                  <a key={i} href="#" className="py-3.5 border-b border-white/5 text-gray-300 hover:text-[#E53E3E] transition-colors text-[12px] font-semibold uppercase tracking-wider">
                    {location}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Rest of World */}
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-[16px] uppercase tracking-[0.15em] mb-4">Rest of World</h3>
              <div className="w-full h-[1px] bg-white/10 mb-2"></div>
              
              <div className="flex flex-col">
                {[
                  "Global Hub",
                  "Music Production School, Barcelona",
                  "Music Production School, Bournemouth",
                  "Music Production School, Berlin",
                  "Music Production School, Hong Kong",
                  "Music Production School, Lisbon",
                  "Music Production School, London",
                  "Music Production School, Marbella",
                  "Music Production School, Sydney",
                  "Music Production School, Tokyo"
                ].map((location, i) => (
                  <a key={i} href="#" className="py-3.5 border-b border-white/5 text-gray-300 hover:text-[#E53E3E] transition-colors text-[12px] font-semibold uppercase tracking-wider">
                    {location}
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
    </div>
  );
}
