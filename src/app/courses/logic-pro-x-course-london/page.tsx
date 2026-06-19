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

export default function LogicProXCourseLondonPage() {
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
        style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2018/03/L800.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Logic Pro
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
                Logic Pro
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>
                  Learn to produce in Logic Pro in the world’s boutique music production school, with class sizes of no more than six people, now with the option to pay in interest free installments.
                </p>
                <p>
                  As well as being a music production course for beginners, our lessons are suitable for intermediate self-taught users. This course is perfect for producers and singer songwriters who want to expand their ability to create and finish tracks.
                </p>
                <p>
                  You will learn how to build a great workflow, use shortcuts and arrange your music with our team of active industry instructors, led by Grammy-winning Logic user and director of Garnish, London – Aamir Yaqub.
                </p>
                <p>
                  Click on the drop down boxes below to view more about course content and FAQs. To secure your place, click the ‘Enrol Now’ button, or <a href="https://edu.garnishmusicproduction.com/connect" className="text-[#E53E3E] hover:underline">Contact Us</a>.
                </p>
              </div>

              {/* Accordions */}
              <div className="mb-12">
                <AccordionItem title="The Basics" isOpen={openAccordion === 0} onClick={() => toggleAccordion(0)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Setting up Logic and overview of the interface</li>
                    <li>Workflow and file management</li>
                    <li>Introducing the EXS24 Sampler & Ultrabeat</li>
                    <li>How to program MIDI and make beats</li>
                    <li>Quantizing and groove manipulation</li>
                    <li>Apple loops</li>
                    <li>Automation</li>
                    <li>Logic’s mixer</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Instruments & FX" isOpen={openAccordion === 1} onClick={() => toggleAccordion(1)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Logic’s virtual instruments</li>
                    <li>Channel strips</li>
                    <li>Logic’s FX and MIDI FX</li>
                    <li>Using MIDI controllers</li>
                    <li>Vocoding</li>
                    <li>Advanced automation</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Sampling" isOpen={openAccordion === 2} onClick={() => toggleAccordion(2)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Where to find samples and sampling law</li>
                    <li>Mapping drums, tuning and manipulation</li>
                    <li>Chopping up loops</li>
                    <li>Getting samples in time</li>
                    <li>Filtering and manipulating samples</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="MIDI & Virtual Instruments" isOpen={openAccordion === 3} onClick={() => toggleAccordion(3)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Understanding virtual instruments</li>
                    <li>Setting up a MIDI keyboard or drum pad controllers</li>
                    <li>Sampling with MIDI</li>
                    <li>Making beats with drum rack</li>
                    <li>Grooves + groove extraction</li>
                    <li>Getting creative with MIDI effects</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Sound Engineering & Recording" isOpen={openAccordion === 4} onClick={() => toggleAccordion(4)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Sound waves, frequency, and amplitude</li>
                    <li>Signal path and gain structure</li>
                    <li>Foldback, headphone mixes, and latency</li>
                    <li>Different types and applications of microphones</li>
                    <li>Compiling audio takes</li>
                    <li>Stereo recording techniques</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Advanced Logic Pro" isOpen={openAccordion === 5} onClick={() => toggleAccordion(5)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Key command customisation</li>
                    <li>Advance MIDI editing and hyper editing</li>
                    <li>Arrangement tools, folders, and global tracks</li>
                    <li>Flex Pitch and Flex Time</li>
                    <li>Manipulating tempo, time stretching</li>
                    <li>Busses & Routing</li>
                    <li>Creating a monitor mix</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Music for Media" isOpen={openAccordion === 6} onClick={() => toggleAccordion(6)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Importing and working with video</li>
                    <li>Working to a brief</li>
                    <li>Tempo mapping and time codes</li>
                    <li>Sound design and music for video games</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Additional Information" isOpen={openAccordion === 7} onClick={() => toggleAccordion(7)}>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Use your own laptop, or use our iMacs free of charge.</li>
                    <li>Headphones and controllers are available to use.</li>
                  </ul>
                  <p>
                    We’re currently only offering our short courses via private tuition — available in London, Cardiff, Manchester, Margate, Brighton, other select locations, and online. For details, visit our <a href="https://www.garnishmusicproduction.com/bespoke-private-tuition/" className="text-[#E53E3E] hover:underline">Private Tuition page</a>. information.
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
