"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const curriculum = [
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/Session-Musician-scaled.jpg",
    left: { title: "Analog Heaven", items: ["Subtractive Synthesis using Ableton's Analog", "Oscillators, filters, envelopes and LFOs", "Creating classic synth sounds from scratch"] },
    right: { title: "Smooth Operator", items: ["FM Synthesis for deep basslines and gritty timbres", "Ableton's Operator in depth", "Carrier and modulator relationships"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/3.jpg",
    left: { title: "Wavetable", items: ["Using Ableton's Wavetable for complex, evolving sounds", "Wavetable scanning and morphing", "Unison, voice stacking and detuning techniques"] },
    right: { title: "Physical Modeling", items: ["Exploring Corpus, Tension, and Electric", "Acoustic resonance simulation", "Designing realistic and hybrid instrument sounds"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/image-scaled.jpg",
    left: { title: "Simpler and Simpler", items: ["Sample-based sound design with Simpler", "Granular synthesis techniques", "Pitch, warp, and slice modes in depth"] },
    right: { title: "Creative Effects", items: ["Spacial Echo and Spectral Time", "Resonators and Frequency Shifter", "Max for Live devices for sound design", "Grain Scanner and convolution reverbs"] },
  },
];

const testimonials = [
  { text: "An incredible deep dive into Ableton's synthesis capabilities. I went from clicking through presets to designing everything from scratch.", author: "DJ WIED" },
  { text: "The instructors have a genuine passion for sound design that is absolutely contagious. My productions have improved dramatically.", author: "Daniel Tran" },
  { text: "I've taken many courses and this stands out. The curriculum is brilliantly structured and the teaching is world-class.", author: "Austen Greene" },
];

export default function SoundDesignPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <Header />
      <section className="relative w-full h-[250px] mt-[88px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/Session-Musician-scaled.jpg')` }}>
        <div className="relative z-10 w-[90%] md:w-[65%] text-center">
          <h1 className="text-xl md:text-2xl lg:text-[34px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg inline-block">Sampling, Sound Design & Synthesis in Ableton</h1>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-16 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/Session-Musician-scaled.jpg')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#222] text-center mb-6">Sound Design & Synthesis in Ableton Live</h2>
          <div className="w-16 h-[2px] bg-[#E53E3E] mx-auto mb-8"></div>
          <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-5">
            <p><strong>Sound Design & Synthesis in Ableton Live – Create the Sounds in Your Head</strong></p>
            <p>If you're ready to take a major step toward producing the kind of top-tier electronic music you love, our Sound Design & Synthesis in Ableton Live course is your launchpad. Pulled from our flagship Ableton Producer Program, this 36-hour course is packed with practical tools and deep creative insight.</p>
            <p>Still flicking through presets hoping to land on something "good enough"? Got half-finished loops stuck on your hard drive? Whether you're a beginner stuck at the sound design stage or an experienced producer ready to go deeper, this course will give you the techniques, structure, and momentum to break through.</p>
            <p>All classes are live and interactive, either in-person or online, with the chance to ask questions and get feedback the moment inspiration—or confusion—strikes.</p>
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

      <section className="w-full bg-cover bg-center py-20 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/3.jpg')` }}>
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
