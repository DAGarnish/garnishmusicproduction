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

export default function ElectronicMusicProductionPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2020/02/Garnish21.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[13px] font-bold tracking-[2px] uppercase py-2 px-4 inline-block mb-4">
            Industry Diploma
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[750px]">
            
            <p className="text-[17px] text-[#666] leading-[1.8] mb-8 font-light">
              Learn to write and produce in the world's boutique music production school, with class sizes of no more than six people.
            </p>
            
            <h2 className="text-[22px] font-bold text-[#333] mb-4">Why choose Garnish?</h2>
            <p className="text-[15px] text-[#666] leading-[1.8] mb-8">
              Garnish's focus is on training you to develop the practical skills and experience you need to build a career in music production. We are a boutique school and you will learn from active <a href="/instructors/" className="text-[#E53E3E] hover:text-[#333] transition-colors">industry professionals</a> in small groups – giving you a personalised learning experience. We encourage a culture of mentoring, enabling you to draw on your instructors' experiences and get their feedback on your music.
            </p>

            <h2 className="text-[22px] font-bold text-[#333] mb-4">Course Structure</h2>
            <p className="text-[15px] text-[#666] leading-[1.8] mb-4">
              The Garnish Industry Diploma offers you a total of 360 hours of learning time and 24 hour access to the Garnish studio when you're not in class. Class time will be hands on and the syllabus is comprised of modules in the following subjects: –
            </p>
            <ul className="list-disc pl-5 mb-8 text-[15px] text-[#666] leading-[1.8] space-y-1">
              <li>Logic Pro X</li>
              <li>Ableton Live</li>
              <li>Sound Design & Synthesis</li>
              <li>Audio Engineering</li>
              <li>Music Theory</li>
              <li>Songwriting</li>
              <li>Mixing & Mastering</li>
              <li>Music Business</li>
            </ul>

            <h2 className="text-[22px] font-bold text-[#333] mb-4">Make the music you love</h2>
            <p className="text-[15px] text-[#666] leading-[1.8] mb-8">
              Throughout the course you will be encouraged and supported to write your own music as a priority. Our instructors' tastes and experience are varied, so they are able to support in a number of genres from EDM to singer/songwriter.
            </p>

            <h2 className="text-[22px] font-bold text-[#333] mb-4">Certified</h2>
            <p className="text-[15px] text-[#666] leading-[1.8] mb-12">
              Everyone who completes the course will receive a certificate of completion, however, students can also opt to take an RSL graded examination in music production. This is a great way to reinforce what you've learnt on the course, benchmark your skill level and gain some <a href="https://www.rslawards.com/about-us/ucas-points/" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:text-[#333] transition-colors">UCAS points</a>.
            </p>

            {/* Red Divider line */}
            <div className="w-12 h-[3px] bg-[#E53E3E] mb-12"></div>

            <h2 className="text-[22px] font-bold text-[#333] mb-6">Additional Information:</h2>
            
            <div className="border-t border-gray-200">
              <AccordionItem title="Course Fees" defaultOpen={true}>
                <p className="mb-4">
                  You will need to pay a registration fee of £500 to secure your place on the course. Please note this fee is non refundable.
                </p>
                <p className="mb-4">
                  The remaining balance of £6999 can either be paid in full before the start of the course. Alternatively, we have an instalment plan, though we do charge an additional 10% administration fee for this option.
                </p>
                <p>
                  <strong>Please get in touch for more details about your payment options.</strong>
                </p>
              </AccordionItem>

              <AccordionItem title="Entry Criteria">
                <p className="mb-4">
                  Garnish Music London does not have formal entry criteria. We understand that people begin their musical journeys in different ways and we want to support that.
                </p>
                <p>
                  In order to participate in the course, we would expect you to have a basic idea of music production. If you’ve played around with a DAW, you’ll know enough; if you’re an instrumentalist, that’s also sufficient – we’re here to teach you the rest. As part of the application process, we will conduct an interview with you to determine that you’re a good fit and on the same page as your fellow learners!
                </p>
              </AccordionItem>

              <AccordionItem title="Studio Time">
                <p className="mb-4">
                  As a Garnish Learner, you will be able to access the school in order to use the class space for your own sessions when you have been inducted and oriented.
                </p>
                <p>
                  The course includes two full days at <a href="https://www.gold.ac.uk/goldsmiths-music-studios/" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:underline">Goldsmith Music Studios</a>, where you will be guided by their engineers, gain experience with high-end vintage gear and have the opportunity to record what you’ve written in a professional environment.
                </p>
              </AccordionItem>

              <AccordionItem title="Equipment">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Controller keyboards, and headphones are provided for all students.</li>
                  <li>You’re welcome to use one of our iMacs, or bring your own laptop.</li>
                  <li>The school has a range of softwares, hardware and instruments.</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Exclusive Discounts">
                <ul className="list-disc pl-5 space-y-2">
                  <li>40% discount on Ableton Live</li>
                  <li>50% discount on Fab Filter</li>
                  <li>50% discount on iZotope.</li>
                  <li>50% discount on Soundtoys.</li>
                  <li>30% off Captain Plugins.</li>
                  <li>Discounts on SubPac, D16 Group, Sonalksis, Sylenth and more.</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Free Sounds">
                <p>
                  We have our very own boutique sample label Lazerdisk Sound. Garnish students get all of our packs (mostly written and produced by Garnish instructors) for free, and an exclusive pack just for Garnish students not sold on the site! It’s recorded individual keys from Mark Ronson’s Mellotron M4000D, which our label chief Zack Johnson meticulously recorded in Mark’s studio in Hollywood. Thank you Zack and Mark!
                </p>
              </AccordionItem>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
