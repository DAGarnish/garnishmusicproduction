"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const curriculum = [
  { title: "1. Introduction to Rekordbox", items: ["Interface overview and library navigation", "Understanding the Rekordbox workflow vs other DJ software"] },
  { title: "2. Music Analysis and Preparation", items: ["Importing your music library", "Setting cue points, loops, and memory cues", "Correcting beat grids for accurate BPM analysis"] },
  { title: "3. Performance Mode", items: ["Using Rekordbox Performance Mode", "Hot cues, loops, and live set preparation", "Setting up for CDJ and XDJ integration"] },
  { title: "4. Advanced Mixing Techniques", items: ["Harmonic mixing and key syncing", "Using the sampler and effects rack", "Creative beat juggling and transitions"] },
  { title: "5. Integration with Pioneer DJ Hardware", items: ["Integrating CDJs/XDJs and DDJ controllers", "Exporting sets to USB for club CDJ use", "Troubleshooting hardware connections"] },
  { title: "6. Recording and Exporting Sets", items: ["Recording live mixes within Rekordbox", "Exporting and sharing your sets", "Post-recording editing and mastering basics"] },
  { title: "7. Troubleshooting and Optimization", items: ["Common technical issues and fixes", "Optimizing performance settings", "Maintaining your library for peak performance"] },
];

const testimonials = [
  { text: "After this course I finally feel like I'm getting the most out of my CDJ setup. The transition to Rekordbox was seamless.", author: "Paris Hilton" },
  { text: "I've been DJing for years but never fully understood Rekordbox until this course. A game changer.", author: "Patrick Lewey" },
  { text: "The instructor broke everything down so well. I went from confused to confident in just a few sessions.", author: "Michelle Tsukamoto" },
];

export default function RekordboxPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({});
  const toggle = (idx: number) => setOpenAccordions(prev => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <Header />
      <section className="relative w-full h-[250px] mt-[88px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-9_15_5_37.png')` }}>
        <div className="relative z-10 w-[90%] md:w-[65%] text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg inline-block">Mastering Pioneer's Rekordbox</h1>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-16 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-9_15_5_37.png')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12">
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] text-center mb-6">Mastering Pioneer's Rekordbox Software</h2>
          <div className="w-16 h-[2px] bg-[#E53E3E] mx-auto mb-8"></div>
          <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-5">
            <p>DJ at your full potential with our specialist course on Pioneer's Rekordbox software. Written for the more experienced DJ aiming to enhance their performance in Rekordbox, this course is designed to make the switch with the minimum of fuss!</p>
            <p>By the end of this course, you'll have the knowledge and skills to confidently navigate Pioneer's Rekordbox software. This is an intermediate class, for people who have DJ experience, and specializes in Rekordbox. If you're a beginner looking to start your DJ journey, we recommend our comprehensive DJ courses.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-12 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/01/Music-Production-Midtown.png')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto space-y-3">
          {curriculum.map((section, idx) => (
            <div key={idx} className="bg-[#F7F7F7]/90 border border-[#B7B7B7] p-5">
              <button className="w-full flex justify-between items-center text-left" onClick={() => toggle(idx)}>
                <span className="font-bold text-[16px] text-[#222] uppercase tracking-wide">{section.title}</span>
                <span className="text-[#E53E3E] text-xl font-bold">{openAccordions[idx] ? "−" : "+"}</span>
              </button>
              {openAccordions[idx] && (
                <ul className="mt-4 space-y-2">{section.items.map((item, i) => <li key={i} className="flex items-start gap-2 text-[15px] text-[#444]"><span className="text-[#E53E3E] font-bold mt-0.5">›</span><span>{item}</span></li>)}</ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-20 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/4.jpg')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12 text-center">
          <p className="font-bold text-lg mb-4">18 hours or 11 hours 1:1</p>
          <p>USA: $799 + $100 Registration if booked 14 days before start or $999 + $200 Registration</p>
          <p>EU: €599 + €100 Registration if booked 14 days before start or €699 + €200 Registration</p>
          <p>UK: £549 + £100 Registration if booked 14 days before start or £649 + £200 Registration</p>
          <div className="mt-8"><Link href="/connect" className="inline-block transition-transform hover:scale-105"><Image src="https://la.garnishmusicproduction.com/wp-content/uploads/sites/7/2021/09/connect-button.png" alt="CONNECT" width={256} height={107} unoptimized className="mx-auto" /></Link></div>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-20 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-9_15_5_37.png')` }}>
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
