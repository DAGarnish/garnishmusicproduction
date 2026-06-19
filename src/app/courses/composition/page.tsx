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

export default function CompositionPage() {
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
        style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2022/05/Music-Theory-Class-cubed.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Composition
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
                Composition
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>
                  It’s all very well knowing how to make a synth sound great, but most musicians would argue that the notes you send to it are much more important. It’s not a competition, but you should really have a good idea of both if you wish to take giant leaps in the direction of producing the music you love.
                </p>
              </div>

              {/* Accordions */}
              <div className="mb-12">
                <AccordionItem title="Composition" isOpen={openAccordion === 0} onClick={() => toggleAccordion(0)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Music Theory</li>
                    <li>Arranging</li>
                    <li>Chords</li>
                    <li>Leads</li>
                    <li>Keys</li>
                    <li>Structure</li>
                    <li>Mixing Considerations</li>
                  </ul>
                  <p className="mt-4">
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
