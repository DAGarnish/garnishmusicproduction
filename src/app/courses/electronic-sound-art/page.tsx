"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  { text: "The Arturia tools unlocked a whole new dimension in my sound design. I can now create exactly the sounds I hear in my head.", author: "Christy Thompson" },
  { text: "World-class instruction in a genuinely inspiring environment. The free Arturia license was a huge bonus too!", author: "Kristina Bialkowski" },
  { text: "I came to this course already producing, but it completely changed how I approach synthesis. Highly recommend.", author: "Abraham Perrotta" },
  { text: "The instructors have a depth of knowledge that is rare to find. My tracks have leveled up significantly since taking this course.", author: "Daniel Cobos" },
];

export default function ElectronicSoundArtPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <Header />
      <section className="relative w-full h-[250px] mt-[88px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-8_9_47_49.png')` }}>
        <div className="relative z-10 w-[90%] md:w-[65%] text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg inline-block">Electronic Sound Art with Arturia</h1>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-16 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/image-scaled.jpg')` }}>
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12">
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] text-center mb-6">Electronic Sound Art with Arturia</h2>
          <div className="w-16 h-[2px] bg-[#E53E3E] mx-auto mb-8"></div>
          <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-5">
            <p>Why settle for ordinary when you can create extraordinary? Crafting your sonic masterpiece has never been more exhilarating! Dive into the world of electronic music and bend instruments to your will with the powerful and versatile software from Arturia. Whether you're a seasoned pro or have just mastered the basics, this course is designed to amplify your creative potential.</p>
            <p>Picture this: You're in your favorite digital audio workstation (DAW), armed with Arturia's innovative tools. The possibilities are endless as you embark on a journey through the vast landscape of House, Techno, Tech-House, EDM, and Bass. Unleash your creativity and let your imagination run wild.</p>
            <p>Arturia's software empowers you to sculpt your music in ways you never thought possible. The intuitive interface and plethora of features make it a playground for sound design enthusiasts. From tweaking synth parameters to crafting intricate beats, every aspect of your production is under your control.</p>
            <p>What sets Arturia apart is its commitment to providing a comprehensive experience. Dive deep into sound design, experiment with various textures, and watch your ideas come to life. The seamless integration with your DAW ensures a smooth workflow, allowing you to focus on what truly matters – your music.</p>
            <p><strong>Students receive a free one-year Arturia software license</strong> to use throughout the course and beyond.</p>
          </div>
        </div>
      </section>

      {/* Arturia Genres Section */}
      <section className="w-full bg-cover bg-center py-16 px-4" style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-8_9_47_49.png')` }}>
        <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {["House", "Techno", "Tech-House", "EDM", "Bass", "Experimental"].map(genre => (
            <div key={genre} className="bg-[#E53E3E] text-white font-bold text-center py-6 px-4 text-lg shadow-lg">
              {genre}
            </div>
          ))}
        </div>
      </section>

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
