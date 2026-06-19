"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

const AccordionItem = ({ 
  title, 
  children, 
  isOpen, 
  onClick 
}: { 
  title: string, 
  children: React.ReactNode, 
  isOpen: boolean, 
  onClick: () => void 
}) => {
  return (
    <div className="border border-gray-200 mb-2">
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none transition-colors ${isOpen ? 'bg-[#E53E3E] text-white' : 'bg-gray-50 text-[#333] hover:bg-gray-100'}`}
      >
        <span className="text-[15px] font-bold">{title}</span>
        <span className="text-xl ml-4">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isOpen ? "max-h-[1500px] opacity-100 p-5" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <div className="text-[#666] leading-[1.8] text-[14px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function MixingAndMasteringCoursePage() {
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2000/09/AAMIR-SSL-800.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Mixing & Mastering
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
                Mixing & Mastering
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>
                  Learn to mix and master in the world’s boutique music production school, with class sizes of no more than six people, now with the option to pay in interest free installments.
                </p>
                <p>
                  Bring clarity, depth, and punch to your mixes in any genre, in any DAW. Discover a range of classic and innovative mixing techniques shared by our instructors, including GRAMMY®-winning sound engineer, Aamir Yaqub.
                </p>
                <p>
                  We use <a href="http://www.fabfilter.com/" className="text-[#E53E3E] hover:underline">Fabfilter</a> third party software as part of the course, which will run in all popular DAWs. You do not need to own these plugins to take this course, however, all Garnish students qualify for a 50% discount at Fabfilter’s online store.
                </p>
                <p>
                  Click on the drop down boxes below to view more about course content and FAQs. To secure your place, click the ‘Enrol Now’ button, or <a href="https://edu.garnishmusicproduction.com/connect" className="text-[#E53E3E] hover:underline">Contact Us</a>.
                </p>
              </div>

              {/* Accordions */}
              <div className="mb-12">
                <AccordionItem title="EQ, Environment, Acoustics & Separation" isOpen={openAccordion === 0} onClick={() => toggleAccordion(0)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Studio monitor speaker design</li>
                    <li>The art of balancing and panning</li>
                    <li>Acoustics and acoustically treating your home studio</li>
                    <li>All about mono, stereo and 5.1 in your software DAW</li>
                    <li>EQ</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Dynamics" isOpen={openAccordion === 1} onClick={() => toggleAccordion(1)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>All about compression</li>
                    <li>In-depth with the parameters</li>
                    <li>Types of compression circuitry (optical, valve etc) and their digital emulations</li>
                    <li>Parallel dynamic processing</li>
                    <li>Gates and de-essers</li>
                    <li>Dynamics controller tips to achieve clarity in your mix</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Reverbs, Delays & Other FX" isOpen={openAccordion === 2} onClick={() => toggleAccordion(2)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Types of reverb and delay, where to use them</li>
                    <li>In-depth with all the parameters</li>
                    <li>Spatialisation with convolution reverbs and delays</li>
                    <li>Phaser, flanger, chorus, pitch shifters, harmonisers and creative FX</li>
                    <li>Tips on how to make your records come to life with FX</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Mixing Vocals" isOpen={openAccordion === 3} onClick={() => toggleAccordion(3)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Preparing vocals, vocal comping and tuning vocals</li>
                    <li>Getting separation between lead and BVs</li>
                    <li>Tips on automating levels (rides)</li>
                    <li>FX Chains for your vocal sound</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Creative Mixing" isOpen={openAccordion === 4} onClick={() => toggleAccordion(4)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Filtering and samples</li>
                    <li>Vocoder, Ring Modulators, Envelopers, Auto-panning, distortion and bit crushing</li>
                    <li>Sidechaining dynamic controllers and filters for FX</li>
                    <li>Getting creative with reverb and delay</li>
                    <li>Pitch shifters, harmonisers and creative FX</li>
                    <li>Saturation</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Mix Analysis" isOpen={openAccordion === 5} onClick={() => toggleAccordion(5)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Active listening and critiquing of released mixes</li>
                    <li>Analysis and critique of your mixes</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Mastering" isOpen={openAccordion === 6} onClick={() => toggleAccordion(6)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Using references to get your EQ and separation. A/Bing</li>
                    <li>EQ, brick wall limiting, levels, and phase</li>
                    <li>Which mastering plugins to use – dos and don’ts</li>
                    <li>Other useful metering tools</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Additional Information" isOpen={openAccordion === 7} onClick={() => toggleAccordion(7)}>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Use your own laptop, or use our iMacs free of charge.</li>
                    <li>Headphones, controllers and Ableton Push are available to use.</li>
                    <li>50% FabFilter discount available for all Garnish students.</li>
                  </ul>
                  <p>
                    We’re currently only offering our short courses via private tuition — available in London, Cardiff, Manchester, Margate, Brighton, other select locations, and online. For details, visit our <a href="https://www.garnishmusicproduction.com/bespoke-private-tuition/" className="text-[#E53E3E] hover:underline">Private Tuition page</a>.
                  </p>
                </AccordionItem>
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
