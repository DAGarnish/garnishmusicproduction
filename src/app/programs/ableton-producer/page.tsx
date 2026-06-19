"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AbletonProducerPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2021/10/Ableton-Live-10-typewriter-scaled.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Electronic Music Producer
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-[28px] font-bold text-[#333] mb-4 leading-tight">
                Electronic Music Producer Certificate Program | Online
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
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
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8 border border-gray-100 mb-8">
                <h3 className="text-[18px] font-bold text-[#333] mb-6 uppercase border-b border-gray-200 pb-2">Program Details</h3>
                <ul className="text-[#666] text-[14px] space-y-4">
                  <li><strong>Format:</strong> 120 hours or 70 hours 1:1</li>
                  <li><strong>USA:</strong> $4,999 + $100 registration fee</li>
                  <li><strong>EU:</strong> €4,499 + €100 registration fee</li>
                  <li><strong>UK:</strong> £3,999 + £100 registration fee</li>
                </ul>
                <div className="mt-8">
                  <a href="/connect" className="block text-center bg-[#E53E3E] text-white font-bold py-3 px-4 uppercase tracking-[2px] text-[13px] hover:bg-[#333] transition-colors">
                    Connect
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
