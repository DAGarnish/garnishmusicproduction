"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const curriculum = [
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-7_16_50_38.png",
    left: { title: "Introduction and Equipment", items: ["Differences between radio shows, podcasts, and DJ mixes", "History of radio and podcasting", "Copyright basics and music licensing for broadcasts"] },
    right: { title: "Building Your Show", items: ["Creating your show outline and format", "Topic selection and content planning", "Voice-over techniques", "Conducting and editing interviews"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/01/Mixing-Board-scaled.jpg",
    left: { title: "DJ Skills", items: ["Music transitions and mixing for radio", "Creating playlists and cue points", "DJ tags and jingles", "Using DJ software in a broadcast context"] },
    right: { title: "Production Skills", items: ["Recording and setting mixing levels on a DAW", "Producing professional show intros and outros", "Audio branding and sound identity", "Noise reduction and audio cleanup"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-9_15_5_37.png",
    left: { title: "The Art of Talking into the Microphone", items: ["Microphone selection and settings", "Techniques for natural, engaging delivery", "Breathing, pacing, and diction", "Overcoming mic fright"] },
    right: { title: "Your First Show", items: ["Recording your pilot show", "Post-production and edits", "Mastering for broadcast", "Getting feedback and iterating"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/Session-Musician-scaled.jpg",
    left: { title: "Sell Yourself", items: ["Naming your show for discoverability", "Choosing the right platforms (Spotify, Apple Podcasts, etc.)", "SEO for podcasts", "Building an audience and monetization strategies"] },
    right: { title: "Bonus: Wild1 Radio Guest Spot", items: ["Students have the opportunity to host a guest spot on Wild1 Radio", "Live broadcast experience", "Building your portfolio with a real broadcast credit"] },
  },
];

export default function RadioPodcastPage() {
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <Header />
      <section className="relative w-full h-[250px] mt-[88px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-7_16_50_38.png')` }}>
        <div className="relative z-10 w-[90%] md:w-[65%] text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg inline-block">Radio & Podcast Course</h1>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-16 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-7_16_50_38.png')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12">
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] text-center mb-6">Radio & Podcast Course</h2>
          <div className="w-16 h-[2px] bg-[#E53E3E] mx-auto mb-8"></div>
          <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-5">
            <p>With the emergence of online radio stations and music platforms, modern day technology allows people to host their own radio show or podcast from the comfort of their home. So whether you're a DJ, a producer or even a complete beginner, this course has everything you need to produce and sell your own show.</p>
            <p>Students also have the incredible opportunity to host a <strong>guest spot on Wild1 Radio</strong>—giving you real broadcast experience and a credit for your portfolio from day one.</p>
          </div>
        </div>
      </section>

      {curriculum.map((section, idx) => (
        <section key={idx} className="w-full bg-cover bg-center py-12 px-4" style={{ backgroundImage: `url('${section.bg}')` }}>
          <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[section.left, section.right].map((col, ci) => (
              <div key={ci} className="bg-[#F7F7F7]/90 border border-[#B7B7B7] p-6">
                <button className="w-full flex justify-between items-center text-left" onClick={() => toggle(`${idx}-${ci}`)}>
                  <span className="font-bold text-[17px] text-[#222] uppercase tracking-wide">{col.title}</span>
                  <span className="text-[#E53E3E] text-xl font-bold">{openAccordions[`${idx}-${ci}`] ? "−" : "+"}</span>
                </button>
                {openAccordions[`${idx}-${ci}`] && (
                  <ul className="mt-4 space-y-2">{col.items.map((item, i) => <li key={i} className="flex items-start gap-2 text-[15px] text-[#444]"><span className="text-[#E53E3E] font-bold mt-0.5">›</span><span>{item}</span></li>)}</ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="w-full bg-cover bg-center py-20 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/01/Mixing-Board-scaled.jpg')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12 text-center">
          <p className="font-bold text-lg mb-4">18 hours or 11 hours 1:1</p>
          <p>USA: $799 + $100 Registration if booked 14 days before start or $999 + $200 Registration</p>
          <p>EU: €599 + €100 Registration if booked 14 days before start or €699 + €200 Registration</p>
          <p>UK: £549 + £100 Registration if booked 14 days before start or £649 + £200 Registration</p>
          <div className="mt-8"><Link href="/connect" className="inline-block transition-transform hover:scale-105"><Image src="https://la.garnishmusicproduction.com/wp-content/uploads/sites/7/2021/09/connect-button.png" alt="CONNECT" width={256} height={107} unoptimized className="mx-auto" /></Link></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
