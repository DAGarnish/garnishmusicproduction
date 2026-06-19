"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const curriculum = [
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-8_9_47_49.png",
    left: { title: "Introduction to Ableton Live", items: ["Overview of Ableton Live interface and key functionalities", "Setting up your DJ rig within Ableton Live for optimal performance"] },
    right: { title: "Advanced Mixing Techniques", items: ["Smooth transitions using Ableton's audio effects", "Creative mixing techniques", "Integrating hardware with Ableton Live"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/fotor_2023-6-9_15_25_42.png",
    left: { title: "Recording and Editing", items: ["Recording live DJ sets in Ableton Live", "Editing and refining your mixes", "Utilizing effects and automation for dynamic performances"] },
    right: { title: "Crafting Custom Edits", items: ["Creating custom track edits tailored to your DJ style", "Using loops, samples, and acapellas to enhance your sets"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/Session-Musician-scaled.jpg",
    left: { title: "Workflow Optimization", items: ["Streamlining your performance workflow in Ableton Live", "Utilizing Session View for spontaneous and creative performances"] },
    right: { title: "Performance Enhancement", items: ["Utilizing Ableton's warping features for seamless playback", "Integrating live instruments and virtual instruments into your DJ sets"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/3.jpg",
    left: { title: "Remixing and Mashups", items: ["Dive into the world of remixing and creating unique mashups using Ableton Live", "Master the art of sampling and manipulating tracks on the fly"] },
    right: { title: "Final Project", items: ["Applying the skills learned throughout the course to create a personalized, polished DJ set", "Peer and instructor feedback for continuous improvement"] },
  },
];

const testimonials = [
  { text: "This course completely transformed how I DJ. I can now create seamless, unique sets that really stand out.", author: "Nikki Pennie" },
  { text: "The instructor's passion for Ableton and DJing is infectious. I learned more in these sessions than in years of self-teaching.", author: "Eugene Kirillov" },
  { text: "A must-do course for any DJ looking to take their performance to the next level with Ableton.", author: "Alan Guno" },
];

export default function AbletonDJsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <Header />
      <section className="relative w-full h-[250px] mt-[88px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-8_9_47_49.png')` }}>
        <div className="relative z-10 w-[90%] md:w-[65%] text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg inline-block">Ableton Live for DJs</h1>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-16 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-8_9_47_49.png')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12">
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] text-center mb-6">Ableton Live for DJs</h2>
          <div className="w-16 h-[2px] bg-[#E53E3E] mx-auto mb-8"></div>
          <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-5">
            <p>Specialized for DJs transitioning to production without needing immediate deep music theory or sound design knowledge. This course focuses on seamless mixes, custom edits, and performance enhancements that will set your sets apart.</p>
            <p>By the end of this course, you'll not only have a solid grasp of Ableton Live's advanced features but also the ability to seamlessly integrate them into your DJ sets, creating a unique and memorable experience for your audience. Whether you're an experienced DJ or just starting, this course will equip you with the skills to elevate your performances.</p>
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

      <section className="w-full bg-cover bg-center py-20 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/fotor_2023-6-9_15_25_42.png')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12 text-center">
          <p className="font-bold text-lg mb-4">18 hours or 11 hours 1:1</p>
          <p>USA: $799 + $100 Registration if booked 14 days before start or $999 + $200 Registration</p>
          <p>EU: €599 + €100 Registration if booked 14 days before start or €699 + €200 Registration</p>
          <p>UK: £549 + £100 Registration if booked 14 days before start or £649 + £200 Registration</p>
          <div className="mt-8"><Link href="/connect" className="inline-block transition-transform hover:scale-105"><Image src="https://la.garnishmusicproduction.com/wp-content/uploads/sites/7/2021/09/connect-button.png" alt="CONNECT" width={256} height={107} unoptimized className="mx-auto" /></Link></div>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-20 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-8_9_47_49.png')` }}>
        <div className="w-[90%] md:w-[60%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12 text-center">
          <h2 className="text-[28px] font-bold mb-8 text-[#222]">Testimonials</h2>
          <div className="min-h-[120px]">
            <p className="text-[17px] italic text-[#444] leading-relaxed mb-4">"{testimonials[activeTestimonial].text}"</p>
            <p className="font-bold text-[#E53E3E]">— {testimonials[activeTestimonial].author}</p>
          </div>
          <div className="flex justify-center gap-3 mt-6">{testimonials.map((_, i) => <button key={i} onClick={() => setActiveTestimonial(i)} className={`w-3 h-3 rounded-full transition-colors ${i === activeTestimonial ? "bg-[#E53E3E]" : "bg-gray-300"}`} />)}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
