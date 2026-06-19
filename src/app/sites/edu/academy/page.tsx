"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://ny.garnishmusicproduction.com/wp-content/uploads/sites/9/2020/02/GMPNYHQ.gif')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block mb-6">
            Comprehensive Program
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            World-class, 360° Music Production Program
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master music production from every angle—create your own project, build a pro sound library, and gain the tools to launch your music journey, online.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column - Main Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-[32px] font-bold text-[#333] mb-8 leading-tight">
                Hone the Art of Music Production
              </h2>

              <div className="text-[16px] text-[#555] leading-[1.8] space-y-6 mb-12">
                <p>
                  We teach the skills necessary to hone the art of music production. Students should leave with their own project, curated sound library, and the tools to succeed. This boutique-style program in classes of no more than ten serves as a comprehensive and hands-on experience. Gain invaluable tips and techniques from our superior roster of instructors, who are invested in your progress.
                </p>
                <p>
                  With strategically placed group mentoring sessions, and one to one mentoring sessions in our professional studio, with a mentor of their choice, students have the opportunity to write, produce, engineer, mix, master their very own EP.
                </p>
                <p>
                  Thanks to some innovative scheduling functions, Garnish students can choose from Ableton Live, FL Studio or Logic Pro X as their software path in the Academy. If you’re not sure, we will advise!
                </p>
                <p>
                  At Garnish, we don’t just teach software—we teach the art of music production. This boutique-style program is designed for aspiring producers who want to take their music seriously and come away with more than just knowledge. By the end, students leave with their own completed project, a curated personal sound library, and the professional skillset to build a career in music production.
                </p>
              </div>

              {/* Modules */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-[#333] mb-4 border-l-4 border-[#E53E3E] pl-4">Beats & Pieces</h3>
                  <p className="text-[#555] leading-relaxed">
                    Within weeks into class, you will be working your way around your DAW, as it serves you long-term as one of your most essential creative tools. Through a practical hands-on teaching style. You will explore key concepts, such as MIDI programming, sampling, audio manipulation and arranging.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#333] mb-4 border-l-4 border-[#E53E3E] pl-4">Music Composition</h3>
                  <p className="text-[#555] leading-relaxed">
                    You will learn the fundamentals of music composition, making you a more efficient producer. Learn and program chords which work well together, discover catchy lead lines, and bass lines that groove. Classically trained students who have taken this course repeatedly tell us how this part of the program has given them new tools and techniques.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#333] mb-4 border-l-4 border-[#E53E3E] pl-4">Audio Engineering</h3>
                  <p className="text-[#555] leading-relaxed">
                    Become grounded in audio engineering and recording with essential techniques and tricks of the trade. This part of the course emphasizes correct recording practices, and vocal production. Even though music producers are not expected to be singers too, the more we understand about vocal production and recording, the better the final product!
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#333] mb-4 border-l-4 border-[#E53E3E] pl-4">Mixing & Mastering</h3>
                  <p className="text-[#555] leading-relaxed">
                    Know your space; learn the fundamentals behind acoustics and how to correctly stage your studio for cleaner and better sound. Then get your hands dirty with dynamic controllers, in-depth EQ, making the most of the frequency spectrum, mixing vocals, expanding song elements, creating cohesive sound, and awesome professional plugins.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#333] mb-4 border-l-4 border-[#E53E3E] pl-4">Electronic Sound Design</h3>
                  <p className="text-[#555] leading-relaxed">
                    While even many pro electronic producers stick with only subtractive synthesis during their career, you will go beyond by exploring subtractive, granular, additive, wavetable, and frequency modulated synthesis. This section also covers sampling, glitch, resampling, and additional beat-making techniques to broaden your sound.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-[#111] text-white p-8 mb-8">
                <h3 className="text-[20px] font-bold mb-6 uppercase tracking-wider">Program Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Duration</div>
                    <div className="text-lg font-bold">360 hours or 200 hours 1:1</div>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-6">
                    <div className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Tuition</div>
                    <ul className="space-y-3 font-semibold">
                      <li className="flex justify-between">
                        <span>USA</span>
                        <span className="text-[#E53E3E]">$14,999</span>
                      </li>
                      <li className="flex justify-between">
                        <span>EU</span>
                        <span className="text-[#E53E3E]">€12,999</span>
                      </li>
                      <li className="flex justify-between">
                        <span>UK</span>
                        <span className="text-[#E53E3E]">£10,999</span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                      + registration fee ($500/€500/£500, or $200/€200/£200 if 14 days before start). Schedule skips major holidays.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="https://edu.garnishmusicproduction.com/connect" className="block text-center bg-[#E53E3E] text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
                    Get Info & Apply
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-[18px] font-bold text-[#333] mb-4 uppercase">More Free Stuff!</h3>
                <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                  Thanks to our exclusive licensing partnerships, we have assembled a range of specialized assets: synthesizers, effects, and samples for Garnish Academy students. 
                </p>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  We have our very own boutique sample label. Garnish students get all of our packs for free!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
