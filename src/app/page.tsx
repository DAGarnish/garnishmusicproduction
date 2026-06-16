"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, Award, BookOpen, ChevronRight, ChevronLeft,
  PlayCircle, Star, Music, Headset, CheckCircle2, 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export default function Home() {
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
      <Header />

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

      <Footer />
    </div>
  );
}
