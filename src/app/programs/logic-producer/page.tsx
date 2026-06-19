"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LogicProducerPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2018/02/20130809-DSC_9518.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Pop Music Producer
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
                World-class Pop Music Producer Program | Online
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>
                  If you’re a passionate songwriter or producer ready to level up, it’s time to ditch GarageBand and start creating tracks that actually sound radio-ready. Whether you’re starting from scratch or have some experience but need to tighten up your workflow, our 120-hour Music Producer Program in Logic Pro is built to get real results—with hands-on learning and practical mentoring every step of the way.
                </p>
                <p>
                  This isn’t just another course. You’ll work one-on-one for six hours of personal mentoring with an expert of your choice from our top-tier roster—including Apple-certified T3 trainers—in our professional studio. It’s about your music, your goals, and your sound.
                </p>
                <p>
                  You’ll master Logic Pro (yes, the full, pro version), plus all the amazing built-in instruments, effects, and add-ons. We’ll show you how to use every tool with purpose and efficiency, so you can produce top-quality tracks in the genre you love.
                </p>
                <p>
                  Small classes, big results. We keep our class sizes intentionally small to create a relaxed, focused learning environment surrounded by like-minded creatives. Producing music should feel exciting—not overwhelming.
                </p>
                <p>
                  Serious perks for serious producers: Thanks to our exclusive licensing deals, you’ll get access to premium synths, effects, and samples worth thousands of dollars—some yours to keep, others free while you learn, with massive discounts if you choose to upgrade later.
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
