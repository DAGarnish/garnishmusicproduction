"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const curriculum = [
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/01/Mixing-Board-scaled.jpg",
    left: { title: "Introduction & Mixing Recap", items: ["Reference tracks", "Speakers", "Dynamic processing", "Critical listening"] },
    right: { title: "Metering and Rendering", items: ["Gain staging", "Meters", "Mixing groups", "Rendering premasters"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/Session-Musician-scaled.jpg",
    left: { title: "Introduction to Mastering", items: ["History of mastering", "Setting up sessions", "Ozone walkthrough", "FabFilter Pro-Q walkthrough"] },
    right: { title: "Mid/Side", items: ["What is Mid/Side", "History of Mid/Side", "Mid/Side techniques"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-9_15_5_37.png",
    left: { title: "Maximizers", items: ["What is a Maximizer", "Ozone Maximizer & FabFilter Pro-L – walk-through every function", "Practical use"] },
    right: { title: "Creating A Mastering Chain", items: ["Signal flow", "Signal chain building"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/image-scaled.jpg",
    left: { title: "Metering / Phase / Dithering & Stem Mastering", items: ["Meters used in mastering", "Phase & dithering", "Stem mastering"] },
    right: { title: "Advanced Mastering", items: ["Virtual-analog processors", "Expanding the mastering chain"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/3.jpg",
    left: { title: "Mastering for Streaming & Broadcasting", items: ["History of loudness", "Modern application and LUFS standards"] },
    right: { title: "Referencing, Finalizing, Exporting", items: ["Referencing your master", "Final export settings", "Critique and feedback"] },
  },
];

const testimonials = [
  { text: "The course was incredibly insightful. I learned so much about the mastering process that I couldn't find anywhere else.", author: "Jeremy Wells" },
  { text: "A truly professional experience. The instructor knew the subject matter deeply and was very patient.", author: "Bernardo Passarinho" },
  { text: "I came in knowing nothing about mastering and left with a complete understanding of the process. Highly recommend!", author: "Raymond Medina" },
  { text: "The techniques I learned here completely transformed my mixes. Worth every penny.", author: "Sep" },
  { text: "Absolutely phenomenal course. The instructor's passion and depth of knowledge is unmatched.", author: "Biren M Patel" },
];

export default function MasteringPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <Header />
      <section className="relative w-full h-[250px] mt-[88px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/01/Mixing-Board-scaled.jpg')` }}>
        <div className="relative z-10 w-[90%] md:w-[65%] text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg inline-block">Mastering</h1>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-16 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/01/Mixing-Board-scaled.jpg')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12">
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] text-center mb-6">Audio Mastering Course</h2>
          <div className="w-16 h-[2px] bg-[#E53E3E] mx-auto mb-8"></div>
          <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-5">
            <p>Designed for today's multi-genre modern engineer, this mastering course focuses on "in-the-box" mastering while covering analog circuits and analog effect processors. The techniques can be applied within any digital audio workstation, which learners are required to bring with them.</p>
            <p>Classes are available in-person or LIVE Online. Our mastering instructors have worked on commercial releases and will share the exact signal chain and decision-making process used in professional mastering facilities.</p>
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

      <section className="w-full bg-cover bg-center py-20 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-7_16_50_38.png')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12 text-center">
          <p className="font-bold text-lg mb-4">36 hours or 20 hours 1:1</p>
          <p>USA: $1499 + $100 Registration if booked 14 days before start or $1799 + $200 Registration</p>
          <p>EU: €1299 + €100 Registration if booked 14 days before start or €1499 + €200 Registration</p>
          <p>UK: £1099 + £100 Registration if booked 14 days before start or £1299 + £200 Registration</p>
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
