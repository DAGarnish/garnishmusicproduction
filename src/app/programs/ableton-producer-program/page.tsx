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

export default function AbletonProducerProgramPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2020/02/Garnish26.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[13px] font-bold tracking-[2px] uppercase py-2 px-4 inline-block mb-4">
            Comprehensive Programs
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[750px]">
            
            <h2 className="text-[22px] font-bold text-[#333] mb-4">Why choose Garnish?</h2>
            <p className="text-[15px] text-[#666] leading-[1.8] mb-8">
              At Garnish, our primary emphasis is on equipping you with the essential skills and hands-on experience necessary for a successful career in music production. As a boutique school, we differentiate ourselves by providing intimate learning environments where you can directly engage with industry experts in small, personalised groups. Our unique approach fosters a culture of mentorship, allowing you to tap into <a href="/instructors/" className="text-[#E53E3E] hover:text-[#333] transition-colors">our instructors’</a> wealth of experiences and receive constructive feedback on your music.
            </p>

            <h2 className="text-[22px] font-bold text-[#333] mb-4">Course Structure.</h2>
            <p className="text-[15px] text-[#666] leading-[1.8] mb-4">
              The Electronic Producer Program offers you a total of 120 hours of learning time and access to the Garnish studio when you’re not in class. Class time will be hands on and the syllabus is comprised of modules in the following subjects…
            </p>
            <ul className="list-disc pl-5 mb-8 text-[15px] text-[#666] leading-[1.8] space-y-1">
              <li>Ableton Live</li>
              <li>Sound Design & Synthesis</li>
              <li>Music Foundations</li>
              <li>Mixing & Mastering</li>
            </ul>

            <h2 className="text-[22px] font-bold text-[#333] mb-4">Make the music you love.</h2>
            <p className="text-[15px] text-[#666] leading-[1.8] mb-12">
              Throughout the course you will be encouraged and supported to write your own music as a priority. Our instructors’ tastes and experience are varied, so they are able to support in a number of electronic genres. Classes are held at our East London studio, which has a range of hardware and software for you to use.
            </p>

            {/* Red Divider line */}
            <div className="w-12 h-[3px] bg-[#E53E3E] mb-12"></div>

            <h2 className="text-[22px] font-bold text-[#333] mb-6">Additional Information:</h2>
            
            <div className="border-t border-gray-200">
              <AccordionItem title="Course Fees" defaultOpen={true}>
                <p className="mb-4">
                  To secure a place on the course you will need to pay a registration fee of £500. Please note this fee is non-refundable.
                </p>
                <p className="mb-4">
                  The balance of £2999 can either be paid in full before the start of the course, or in instalments for an additional 10% administration fee.
                </p>
                <p>
                  <strong>Please get in touch if you would like to know more about how our instalment option works.</strong>
                </p>
              </AccordionItem>

              <AccordionItem title="Entry Criteria">
                <p className="mb-4">
                  Garnish Music London does not have formal entry criteria. We understand that people differ in how they begin their musical journey and we want to support that.
                </p>
                <p>
                  In order to participate in the course, we would expect you to have a basic idea of music production. If you’ve played around with a DAW, you’ll know enough; if you’re an instrumentalist, that’s also sufficient – we’re here to teach you the rest! As part of the application process, we will conduct an interview with you to determine that you’re a good fit and on the same page as your fellow learners!
                </p>
              </AccordionItem>

              <AccordionItem title="Equipment">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Controller keyboards, and headphones are provided for all students.</li>
                  <li>You’re welcome to use one of our iMacs, or bring your own laptop.</li>
                  <li>We have a range of software, hardware and instruments.</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Exclusive Discounts">
                <p>
                  Limited discounts on plugins from FabFilter, SoundToys and much more!
                </p>
              </AccordionItem>

              <AccordionItem title="Free Sounds">
                <ul className="list-disc pl-5 space-y-2">
                  <li>We have our very own boutique sample label Lazerdisk Sound. Garnish students get all of our packs (mostly written and produced by Garnish instructors) for free, and an exclusive pack just for Garnish students not sold on the site! It’s recorded individual keys from Mark Ronson’s Mellotron M4000D, which our label chief Zack Johnson meticulously recorded in Mark’s studio in Hollywood. Thank you Zack and Mark!</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="VISAs">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Garnish is not an accredited higher education institution and we are unable to support with VISA applications. It is therefore your responsibility to ensure you have an appropriate VISA in place for the duration of your course.</li>
                </ul>
              </AccordionItem>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
