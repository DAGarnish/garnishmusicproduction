"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function LogicProducerPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#E53E3E]/20 text-[#222]">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[250px] mt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('http://la.garnishmusicproduction.com/wp-content/uploads/sites/7/2018/03/Logic-Producer-Program.png')` }}
      >
        <div className="relative z-10 w-[90%] md:w-[65%] text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg">
            Certified Pop Music Producer Program
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full">
        
        {/* First Block - Description */}
        <div 
          className="w-full bg-cover bg-center bg-no-repeat py-20 px-4"
          style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-7_16_50_38.png')` }}
        >
          <div className="w-[90%] md:w-[70%] mx-auto bg-white/90 backdrop-blur-sm rounded-[24px] shadow-2xl p-8 md:p-14 border border-[#B7B7B7]">
            <div className="text-center mb-8">
              <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] leading-tight">
                Certified Pop Music Producer Program
              </h2>
            </div>
            
            <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-6">
              <p>
                If you’re a passionate songwriter or producer ready to level up, it’s time to ditch GarageBand and start creating tracks that <em>actually</em> sound radio-ready. Whether you’re starting from scratch or have some experience but need to tighten up your workflow, our 120-hour Music Producer Program in Logic Pro is built to get real results—with hands-on learning and practical mentoring every step of the way.
              </p>
              <p>
                This isn’t just another course. You’ll work one-on-one for six hours of personal mentoring with an expert of your choice from our top-tier roster—including Apple-certified T3 trainers—in our professional studio. It’s about <em>your</em> music, <em>your</em> goals, and <em>your</em> sound.
              </p>
              <p>
                You’ll master Logic Pro (yes, the full, pro version), plus all the amazing built-in instruments, effects, and add-ons. We’ll show you how to use every tool with purpose and efficiency, so you can produce top-quality tracks in the genre you love.
              </p>
              <p>
                Small classes, big results. We keep our class sizes intentionally small to create a relaxed, focused learning environment surrounded by like-minded creatives. Producing music should feel exciting—not overwhelming.
              </p>
              <p>
                <strong>Serious perks for serious producers:</strong> Thanks to our exclusive licensing deals, you’ll get access to premium synths, effects, and samples worth thousands of dollars—some yours to keep, others free while you learn, with massive discounts if you choose to upgrade later.
              </p>
              <p>
                Oh, and did we mention we have our own boutique sample label? Garnish students get full access to our exclusive packs—most of them created by our own instructors—including one you won’t find anywhere else: individually recorded samples from Mark Ronson’s Mellotron M4000D, captured by our label chief Zack Pop right in Mark’s Hollywood studio. Massive thanks to Zack and Mark!
              </p>
            </div>
          </div>
        </div>

        {/* Second Block - Tuition and CTA */}
        <div 
          className="w-full bg-cover bg-center bg-no-repeat py-20 px-4"
          style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/01/fotor_2023-6-7_15_3_16.png')` }}
        >
          <div className="w-[90%] md:w-[70%] mx-auto bg-white/90 backdrop-blur-sm rounded-[24px] shadow-2xl p-8 md:p-14 text-center border border-[#B7B7B7]">
            
            <div className="space-y-4 text-[16px] text-[#222] font-semibold leading-relaxed mb-10">
              <p className="font-bold">120 hours or 70 hours 1:1</p>
              <p>USA: $4999 + $100 registration fee</p>
              <p>EU: €4499 + €100 registration fee</p>
              <p>UK: £3999 + £100 registration fee</p>
              <p className="max-w-3xl mx-auto mt-6 font-normal">
                Use the ‘CONNECT’ button below to request more info on our upcoming planned schedules for <a href="https://la.garnishmusicproduction.com/classes/" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] font-semibold hover:underline">LA in PT</a> and <a href="https://ny.garnishmusicproduction.com/classes/" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] font-semibold hover:underline">NYC in ET</a>. One of our placement experts will follow up with information and find a time for an assessment call to get you in to the most suitable program we have for you.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/connect" className="inline-block transition-transform hover:scale-105">
                <Image 
                  src="https://la.garnishmusicproduction.com/wp-content/uploads/sites/7/2021/09/connect-button.png" 
                  alt="CONNECT" 
                  width={256} 
                  height={107} 
                  className="mx-auto"
                  unoptimized
                />
              </Link>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
