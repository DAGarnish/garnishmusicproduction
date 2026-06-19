"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function AbletonProducerPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#E53E3E]/20 text-[#222]">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[250px] mt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2021/10/Ableton-Live-10-typewriter-scaled.jpg')` }}
      >
        <div className="relative z-10 w-[65%] text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg">
            Certified Electronic Music Producer Program
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full">
        
        {/* First Block - Description */}
        <div 
          className="w-full bg-cover bg-center bg-no-repeat py-20 px-4"
          style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/image-scaled.jpg')` }}
        >
          <div className="w-[90%] md:w-[70%] mx-auto bg-white/90 backdrop-blur-sm rounded-[24px] shadow-2xl p-8 md:p-14">
            <div className="text-center mb-8">
              <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] leading-tight">
                Certified Ableton Music Producer Program
              </h2>
            </div>
            
            <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-6">
              <p>
                If you’re ready to take your music seriously and want to master one of the world’s most powerful DAWs, this is where your journey begins. Whether you’re starting from scratch or you’ve been self-teaching and want to fill in workflow gaps, our 120-hour Music Producer Program in Ableton Live Suite is built to help you produce high-quality, release-ready tracks while earning a certificate that proves your skills.
              </p>
              <p>
                Designed for the next generation of artists and producers, this immersive course is hands-on, practical, and focused on results. You’ll work directly on your own music, receiving detailed feedback and guidance tailored to your goals and your genre.
              </p>
              <p>
                You’ll dive deep into Ableton Live Suite, learning how to use it as a creative weapon. From sampling and sound design to audio manipulation and live performance techniques, this course covers the entire spectrum of music production. We’ll also show you how to seamlessly integrate hardware, turning your workflow into a fast, expressive, hands-on experience.
              </p>
              <p>
                Sound design is a big focus too—you’ll explore the best of Max4Live devices and get under the hood with Serum, the only third-party plugin featured in the course, to create truly unique sounds.
              </p>
              <p>
                Our class sizes are intentionally small—no more than 10 students per class—so you can learn in a relaxed, collaborative environment. Our purpose-built labs encourage experimentation, creativity, and even the occasional class jam. Because learning to produce the music you love should be inspiring, not overwhelming.
              </p>
              <p>
                And the perks? Yeah, we’ve got those: Thanks to our exclusive licensing partnerships, you’ll get access to a suite of premium synths, samples, and effects—worth thousands. Many are yours to keep. Others are free to use during the course, with exclusive discounts available if you want to upgrade later.
              </p>
              <p>
                And there’s more: as a Garnish student, you’ll receive our full boutique sample library—created by Garnish instructors and producers—for free. Plus, you’ll get an exclusive student-only pack featuring individually sampled keys from Mark Ronson’s Mellotron M4000D, lovingly recorded in Mark’s Hollywood studio by our own Zack Johnson. Huge thanks to Mark and Zack for making this one-of-a-kind resource available to our students.
              </p>
              <p>
                Whether you want to make club bangers, cinematic soundscapes, or experimental grooves, this program gives you the tools, knowledge, and mentorship to make it happen.
              </p>
            </div>
          </div>
        </div>

        {/* Second Block - Tuition and CTA */}
        <div 
          className="w-full bg-cover bg-center bg-no-repeat py-20 px-4"
          style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/3.jpg')` }}
        >
          <div className="w-[90%] md:w-[70%] mx-auto bg-white/90 backdrop-blur-sm rounded-[24px] shadow-2xl p-8 md:p-14 text-center">
            
            <h3 className="text-xl md:text-[22px] font-bold text-[#222] mb-6 leading-relaxed">
              Ableton certified; Apple authorized; world-class facilities; superior roster of instructors.
            </h3>
            
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
