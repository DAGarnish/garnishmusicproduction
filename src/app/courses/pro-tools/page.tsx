"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const curriculum = [
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/Session-Musician-scaled.jpg",
    left: { title: "Getting Started", items: ["Software installation", "iLoks", "Launching sessions", "File format", "Edit & mix windows"] },
    right: { title: "Workflow", items: ["Edit window orientation", "Importing audio", "Edit modes (Slip, Spot, Shuffle, Grid)", "Multi-tool", "Transport", "Grid/nudge values"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/01/Mixing-Board-scaled.jpg",
    left: { title: "Recording Techniques", items: ["Art of mixing", "Routing", "Sound waves", "Recording patch", "Gain structure", "EQ/compression", "Foldback"] },
    right: { title: "Advanced Editing Techniques", items: ["Clip-based gain/automation", "Pencil tool", "TCE", "Strip silence", "Tab to transient", "Repeating clips", "Panning"] },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-9_15_5_37.png",
    left: { title: "Samples & Loops", items: ["Creating loops", "MIDI controllers/editing", "Printing software instruments", "Beat Detective", "Exporting"] },
    right: { title: "The Final Product", items: ["Session preparation for mix-down", "Consolidating audio", "Exporting MP3s", "Metadata", "Digital clipping"] },
  },
];

const testimonials = [
  { text: "The instructor was great. He was extremely good at explaining things and always gave us enough time to put what we were learning into practice. Most importantly, he is passionate about music and actually enjoys teaching which really makes the whole experience very enjoyable.", author: "Reggie Chelsom" },
  { text: "It's a great school and have great teachers. Some schools care only about fancy gear in the classroom and forget about the essential: the teachers!", author: "João Gama" },
  { text: "Sharing and learning from a legendary Producer/Engineer is priceless and incredible.", author: "Pablo Toscano" },
  { text: "Affordable classes with a lot of knowledgeable teachers that are down to earth and easy going... amazing teachers.", author: "Anthony C" },
  { text: "The course is very friendly and engaging. Any and all questions will be asked with no hesitation or frustration, and it helps everyone else in the class.", author: "Ryan Conway" },
];

export default function ProToolsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <Header />
      <section className="relative w-full h-[250px] mt-[88px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/Session-Musician-scaled.jpg')` }}>
        <div className="relative z-10 w-[90%] md:w-[65%] text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg inline-block">Pro Tools</h1>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-16 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/Session-Musician-scaled.jpg')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12">
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] text-center mb-6">Pro Tools Course</h2>
          <div className="w-16 h-[2px] bg-[#E53E3E] mx-auto mb-8"></div>
          <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-5">
            <p>In-depth training for recording and producing music in the industry standard DAW, Pro Tools. Suitable for all genres, covering production and engineering skills with real-world tips.</p>
            <p>Many learners prefer to use their own laptops on our courses—you get help customizing your setup, and you have your project exactly as you left it to work on at home. We also offer a $75 supplement for learners who wish to hire an iMac loaded with Pro Tools. Total class time is 36 hours.</p>
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
          <p className="font-bold text-lg mb-4">36 hours or 20 hours 1:1</p>
          <p>USA: $1499 + $100 Registration if booked 14 days before start or $1799 + $200 Registration</p>
          <p>EU: €1299 + €100 Registration if booked 14 days before start or €1499 + €200 Registration</p>
          <p>UK: £1099 + £100 Registration if booked 14 days before start or £1299 + £200 Registration</p>
          <p className="max-w-2xl mx-auto mt-6 text-[15px]">For one-to-one lessons, see Pro Tools Private Instruction, and connect with a specialist below.</p>
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
