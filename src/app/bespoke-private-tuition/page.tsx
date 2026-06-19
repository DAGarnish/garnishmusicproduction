"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivateTuitionPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2020/02/Garnish22.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Private Tuition
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column - Main Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-[28px] font-bold text-[#333] mb-4 leading-tight">
                Private Tuition
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>
                  For specific schedules and learning needs, we offer private one-to-one (or two, three…) lessons for most classes, including Electronic Music DJ, Ableton Live, Logic Pro, Pro Tools, Mixing & Mastering, Sound Design, Songwriting, and much more, for people who want to take our classes, but are unable to commit to our schedule, want a bespoke experience, or want to train in a private and discrete setting in one of our labs, studios, or elite facilities. We can even come to you! NDA? No problem. Our nationwide network of industry professionals now include London, Manchester, Bristol, Margate, Brighton and Portsmouth.
                </p>
                
                <h3 className="text-[18px] font-bold text-[#333] mt-8 mb-2">Private Tuition</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>24-hour package: £1300. Excludes studio fees if a studio is required</li>
                  <li>Add 50% for each additional person</li>
                </ul>

                <h3 className="text-[18px] font-bold text-[#333] mt-8 mb-2">Where?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>In a studio lab: Add £360</li>
                  <li>In elite facilities: Add £1080</li>
                  <li>At your home/studio/hotel/online: No additional fee, but reasonable travel costs may be added</li>
                </ul>
              </div>

              {/* Connect Button */}
              <div className="text-[15px] text-[#666] leading-[1.8] space-y-4">
                <div className="mt-8">
                  <a href="https://edu.garnishmusicproduction.com/connect" className="inline-block bg-[#E53E3E] text-white px-8 py-3 font-bold tracking-widest uppercase hover:bg-black transition-colors duration-300">
                    CONNECT
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8 border border-gray-100 mb-8">
                <h3 className="text-[18px] font-bold text-[#333] mb-4 uppercase">Stay Connected</h3>
                <p className="text-[14px] text-[#666] mb-4">We will not share your information</p>
                <div className="bg-[#f2dede] border border-[#ebccd1] text-[#a94442] p-4 text-[14px] rounded">
                  Error: Contact form not found.
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
