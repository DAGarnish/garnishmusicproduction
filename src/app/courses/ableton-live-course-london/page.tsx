"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

const AccordionItem = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
      >
        <span className="text-[17px] font-bold text-[#333] hover:text-[#E53E3E] transition-colors">{title}</span>
        <span className="text-xl text-[#333] ml-4">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-[#666] leading-[1.8] text-[15px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function AbletonLiveCourseLondonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[500px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2018/03/Garnish10.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[13px] font-bold tracking-[2px] uppercase py-2 px-4 inline-block mb-4">
            Ableton Live Music Production & Performance
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[750px]">
            
            <p className="text-[15px] text-[#666] leading-[1.8] mb-8">
              Learn to produce and perform using Ableton Live in the world’s boutique music production school, with class sizes of no more than eight people, now with the option to pay in interest-free installments.
            </p>
            <p className="text-[15px] text-[#666] leading-[1.8] mb-8">
              As well as being a perfect introduction for beginners, this course is suitable for intermediate self-taught Ableton users. You will learn how to improve your workflow, design sound and perform live with our team of active industry <a href="https://www.garnishmusicproduction.com/instructors/" className="text-[#E53E3E] hover:underline">instructors</a>.
            </p>
            <p className="text-[15px] text-[#666] leading-[1.8] mb-12 italic">
              “I needed to brush up on something, so I called Garnish, as they have the best instructors” – <a href="https://jamiejones.com/" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:underline">Jamie Jones</a>
            </p>

            {/* Red Divider line */}
            <div className="w-12 h-[3px] bg-[#E53E3E] mb-12"></div>
            
            <div className="border-t border-gray-200">
              <AccordionItem title="Getting Started" defaultOpen={true}>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Understanding your goals</li>
                  <li>Getting set up: audio and the preferences window</li>
                  <li>Session view vs. arrangement view: applications of each</li>
                  <li>Live concepts: clips / scenes / browser / library</li>
                  <li>Ableton’s unique warp engine</li>
                  <li>Launching clips</li>
                  <li>Intro to FX</li>
                  <li>Intro to instruments</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Creating with Audio & MIDI">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Warping in practice</li>
                  <li>Quantising audio</li>
                  <li>Clip view and clip properties</li>
                  <li>Making beats with drum racks and simpler sampling</li>
                  <li>Live’s effects</li>
                  <li>Basic routing and resampling</li>
                  <li>Creating dynamic changes in your arrangements</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Sound Engineering & Recording">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Group tracks and advanced uses of routing</li>
                  <li>Introduction to sound waves, frequency, and amplitude</li>
                  <li>The recording patch in detail, introduction to gain structure</li>
                  <li>EQ and compression for recording</li>
                  <li>Foldback, headphone mixes, and latency</li>
                  <li>Digital, analogue, sampling rate and bit-rate</li>
                  <li>Overview of microphones and stereo techniques</li>
                  <li>Recording specific aspects of Ableton</li>
                  <li>Brand new Live audio-to-midi features</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="MIDI & Virtual Instruments">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sampling using Simpler</li>
                  <li>Drum rack</li>
                  <li>Using and controlling third-party virtual instruments</li>
                  <li>Grooves + groove extraction</li>
                  <li>Setting up a MIDI keyboard or drum pad controllers</li>
                  <li>Getting creative with MIDI effects</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="DJ-ing & Live Performance">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Preparing (warping) whole tracks and harmonic mixing</li>
                  <li>DJ effects</li>
                  <li>Using MIDI controllers effectively</li>
                  <li>Push 2</li>
                  <li>Grouping tracks and basic routing</li>
                  <li>Structuring your sets and using loops</li>
                  <li>Recording your performance</li>
                  <li>Editing the arrangement view</li>
                  <li>Bouncing yours tracks</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Advanced Techniques">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Advanced warping</li>
                  <li>Multi-track warping</li>
                  <li>Clip envelopes</li>
                  <li>Using multiple automations</li>
                  <li>Intro to racks & chains</li>
                  <li>Mixing tips and techniques</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Additional Information">
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>This course supports Ableton for PC.</li>
                  <li>Use your own laptop, or use our iMacs free of charge.</li>
                  <li>Headphones, controllers and Ableton Push are available to use.</li>
                </ul>
                <p>
                  We’re currently only offering our short courses via private tuition — available in London, Cardiff, Manchester, Margate, Brighton, other select locations, and online. For details, visit our <a href="https://www.garnishmusicproduction.com/bespoke-private-tuition/" className="text-[#E53E3E] hover:underline">Private Tuition page</a>.
                </p>
              </AccordionItem>
            </div>

            <div className="mt-12">
              <a href="https://www.ableton.com/en/certified-training/garnish-music-production-school/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#333] hover:text-[#E53E3E] font-bold">
                <img 
                  src="https://www.garnishmusicproduction.com/wp-content/uploads/2018/03/actc_logo.png" 
                  alt="Ableton Certified Training Center" 
                  className="h-16 mr-4 opacity-50 hover:opacity-100 transition-opacity" 
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
                Ableton Certified Training Center
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
