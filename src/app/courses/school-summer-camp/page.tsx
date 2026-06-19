"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SummerCampPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2018/04/C800.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Producer Summer Camp
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
                Producer Summer Camp
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>
                  If you’re looking for a fun and productive way to spend your summer holiday, join us at our music production summer camp, traditionally for younger producers. Learn to write and produce in the world’s boutique music production school, with class sizes of no more than six people.
                </p>
                <p>
                  Immerse yourself in 60 hours of lessons where you will learn the skills to write, record and engineer your music in both Ableton and Logic Pro X.
                </p>
                <p>
                  The course is delivered by active industry professionals, including Grammy-winners, who will guide and mentor you to craft your own music and release it to the world.
                </p>
                <p>
                  If your goal is to be a music production professional, then our summer camp is for you. Applications for the 2024 camp are open now.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Weekdays 10.30am – 3.15pm</li>
                  <li>5th – 16th August 2024</li>
                  <li>19th – 30th August 2024</li>
                </ul>
                <p>
                  Please see the sections below for more information and FAQs.
                </p>

                <p>
                  Discover the key concepts that Ableton Live offers, including the session and arrangement windows, clips, scenes, and warping. You’ll learn how to create tracks for your music, or make beats on the fly – it all becomes simple with our hands on instructor.
                </p>
                <p>
                  Learn how to make new and interesting sounds through subtractive, wavetable, granular, additive and frequency modulated synthesis. You will also cover sampling, resampling, glitch tips and more advanced beat-making techniques in this section, as you develop your sound.
                </p>
                <p>
                  All of this will contribute to having a much bigger and unique sound for your music. You will gain important skills such as microphone setups, managing sound levels, controlling inputs and outputs and an overview of the hardware that is on offer. The science behind audio engineering is key to unlocking the sonics of your music. With key skills and a good understanding of audio engineering, the mixing and mastering process will become much easier and will allow you to open up more possibilities. Learn how to balance the sounds that lie on your frequency spectrum, with the elements of your music flowing cohesively throughout the track. Reach new sonic heights by understanding EQ, compression, layering, effects, automation, panning, distortion and many more. Not only will this understanding assist you in making those sample packs sound huge, but it will also allow your music to reach a new professional level.
                </p>

                <ul className="list-disc pl-5 space-y-2 font-bold">
                  <li>Students are welcome to use Garnish iMacs for free, or bring their own laptop to work on.</li>
                  <li>Headphones are provided for all students.</li>
                  <li>Garnish Music London is a private organisation and cannot support with VISA applications. It is the responsibility of the student to ensure that they have a valid UK VISA in place for the duration of their course.</li>
                </ul>

                <p>
                  Use the ‘CONNECT’ button below to request schedule information for our classes. One of our placement experts will follow up within a business day. For one-to-one lessons, see <a href="/bespoke-private-tuition" className="text-[#E53E3E] hover:underline">Private Tuition</a>, and connect with a specialist on that page.
                </p>
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
