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

export default function InternationalAcademyPage() {
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[500px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2021/11/Berlin-Music-School.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            360° International Garnish Music Academy
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column - Main Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-[28px] font-bold text-[#333] mb-2 leading-tight">
                360° International Garnish Music Academy
              </h1>
              <p className="text-[15px] font-bold text-[#333] mb-6">
                12 weeks in Barcelona, 12 weeks in London, and 12 weeks in New York!
              </p>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>Designed for students who wish to broaden their horizons in more ways than one!</p>
                <p>
                  We teach the skills necessary to hone the art of music production. Students should leave with their own project, curated sound library, and the tools to succeed. This boutique-style program in classes of no more than ten serves as a comprehensive and hands-on experience. Gain invaluable tips and techniques from our superior roster of instructors, who are invested in your progress.
                </p>
                <p>
                  With strategically placed group mentoring sessions, and one to one mentoring sessions in our professional studio, with a mentor of their choice, students have the opportunity to write, produce, engineer, mix, master their very own EP.
                </p>
                <p>
                  Thanks to some innovative scheduling functions, Garnish students can choose from Ableton Live, FL Studio or Logic Pro X as their software path in the Academy. If you’re not sure, we will advise!
                </p>
                <p>
                  Garnish was the first music production school in the UK to offer the Music Grades System for music production, and all music production Academy learners, worldwide take a Grade 6, 7 or 8 examination. More on music production grades on our London website <a href="https://www.garnishmusicproduction.com/grades/" className="text-[#E53E3E] hover:underline">here</a>. If UK music production qualifications do not obviously pertain to our students’ goals, they (and perhaps more so their parents) can be rest assured that our music production program meets a national standard of accreditation.
                </p>
              </div>

              {/* Accordions */}
              <div className="mb-12">
                <AccordionItem title="Beats & Pieces" isOpen={openAccordion === 0} onClick={() => toggleAccordion(0)}>
                  <p className="mb-4">
                    Within weeks into class, you will be working your way around your DAW, as it serves you long-term as one of your most essential creative tools. Through a practical hands-on teaching style. You will explore key concepts, such as MIDI programming, sampling, audio manipulation and arranging.
                  </p>
                  <p className="mb-4">
                    If you do not know which DAW to choose, fear not, as we have experts who can advise you, once we know a bit more about you.
                  </p>
                  <p className="italic border-l-2 border-[#E53E3E] pl-4">
                    “I switched to Ableton from Logic many years ago, but recently I’ve been missing Logic, so I decided to brush up to get the best of both worlds. I called Garnish, of course and the guys were great and got me back up to speed in no time” <a href="https://soundcloud.com/jamie-jones" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:underline">Jamie Jones</a>
                  </p>
                </AccordionItem>

                <AccordionItem title="Music Composition" isOpen={openAccordion === 1} onClick={() => toggleAccordion(1)}>
                  <p>
                    You will learn the fundamentals of music composition, making you a more efficient producer. Learn and program chords which work well together, discover catchy lead lines, and bass lines that groove. Classically trained students who have taken this course repeatedly tell us how this part of the program has given them new tools and techniques.
                  </p>
                </AccordionItem>

                <AccordionItem title="Audio Engineering" isOpen={openAccordion === 2} onClick={() => toggleAccordion(2)}>
                  <p>
                    Become grounded in audio engineering and recording with essential techniques and tricks of the trade. This part of the course emphasizes correct recording practices, and vocal production. Even though music producers are not expected to be singers too, the more we understand about vocal production and recording, the better the final product! This includes knowing how to motivate, coach, and produce our artists. Singing is not mandatory during these sessions – we understand! Feel free to just listen.
                  </p>
                </AccordionItem>

                <AccordionItem title="Mixing & Mastering" isOpen={openAccordion === 3} onClick={() => toggleAccordion(3)}>
                  <p>
                    Know your space; learn the fundamentals behind acoustics and how to correctly stage your studio for cleaner and better sound. Then get your hands dirty with dynamic controllers, in-depth EQ, making the most of the frequency spectrum, mixing vocals, expanding song elements, creating cohesive sound, and awesome professional plugins, including our software partners, <a href="http://www.fabfilter.com/" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:underline">FabFilter</a>.
                  </p>
                </AccordionItem>

                <AccordionItem title="Electronic Sound Design" isOpen={openAccordion === 4} onClick={() => toggleAccordion(4)}>
                  <p>
                    While even many pro electronic producers stick with only subtractive synthesis during their career, you will go beyond by exploring subtractive, granular, additive, wavetable, and frequency modulated synthesis. This section also covers sampling, glitch, resampling, and additional beat-making techniques to broaden your sound.
                  </p>
                </AccordionItem>

                <AccordionItem title="Marketing & Artist Development" isOpen={openAccordion === 5} onClick={() => toggleAccordion(5)}>
                  <p>
                    Take advantage of our small class sizes and hand-tailored advice from your instructors during this module, focused on finishing and refining your projects and what to do next!
                  </p>
                </AccordionItem>

                <AccordionItem title="Top-Line" isOpen={openAccordion === 6} onClick={() => toggleAccordion(6)}>
                  <p>
                    Struggling to write songs that contend with the hits? Reading songwriting books and watching endless hours of Youtube tutorials don’t seem to be making a difference? Our Top-Line Songwriting module advances your songwriting abilities with a direct approach and advice that other sources neglect to share, bringing the hit songwriter out in you!
                  </p>
                </AccordionItem>

                <AccordionItem title="Build Beats Better" isOpen={openAccordion === 7} onClick={() => toggleAccordion(7)}>
                  <p className="mb-4">Our entire Build Beats Better program is included in our Academy. It consists of:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><a href="https://edu.garnishmusicproduction.com/music/rhythm-section-programming/" className="text-[#E53E3E] hover:underline">Rhythm Section Programming</a> – Think like a drummer or a strummer: Program beats, riffs, and fills that sound like… well… beats, riffs, and fills.</li>
                    <li><a href="https://edu.garnishmusicproduction.com/music/composition/" className="text-[#E53E3E] hover:underline">Composition</a> – You should really have a good idea of production AND music if you wish to take giant leaps in the direction of producing the music you love. And music is what this unit is all about.</li>
                    <li><a href="https://edu.garnishmusicproduction.com/music/vocal-production/" className="text-[#E53E3E] hover:underline">Vocal Production</a> – Record, produce, and mix a quality vocal — mic technique, editing mastery, tuning & mixing vocals and a virtual studio visit with a vocalist at work.</li>
                    <li><a href="https://edu.garnishmusicproduction.com/music/sound-art/" className="text-[#E53E3E] hover:underline">Electronic Sound Art</a> – Bend electronic instruments to your will: Create groundbreaking dance music in any DAW. Advanced Sound Design covers the foundations of House, Techno, Tech-House, EDM and Bass.</li>
                    <li><a href="https://edu.garnishmusicproduction.com/music/hip-hop-course/" className="text-[#E53E3E] hover:underline">Hip Hop Production</a> – Learn how to record, write, collaborate, and produce Hip Hop! Styles include Boom Bap, East Coast, West Coast, Southern, and Trap. Explore and craft the skills to make your drums knock and your 808s rumble.</li>
                    <li><a href="https://edu.garnishmusicproduction.com/music/release-party/" className="text-[#E53E3E] hover:underline">Mastering Release Party</a> – Put that final polish on your mix. Learn the art of mastering, meta-tags and album art, and then get it to land safely in all the right places.</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Three Free VIP Short Course Membership, Worldwide" isOpen={openAccordion === 8} onClick={() => toggleAccordion(8)}>
                  <p>
                    Want to learn FL Studio, or brush up on Sound Design again in the future? No problem, because on completion, all Academy learners at Garnish will get a free VIP membership for our shorter music production courses, worldwide. This means that you can take up to three music production courses, with just the registration fee to pay at any of our participating locations (London, Miami, New York, Los Angeles, San Francisco, and Online), subject to availability, with no cap on when you’d like to take each course. Our offer is valid as long as there is availability at your chosen participating school.
                  </p>
                </AccordionItem>

                <AccordionItem title="More Free Stuff!" isOpen={openAccordion === 9} onClick={() => toggleAccordion(9)}>
                  <p className="mb-4">
                    Thanks to our exclusive licensing partnerships, we have assembled a range of specialized assets: synthesizers, effects, and samples for Garnish Academy students. These instruments and sounds allow us to teach producers, side by side, using the same sets of expanded resources. Our constantly evolving license-partners and content producers add thousands of dollars to the value of our Producer and Academy courses. Many of these products are yours to keep. Others are free to use while you learn and are then eligible for exclusive upgrades at a fraction of their regular price.
                  </p>
                  <p>
                    We have our very own boutique sample label <a href="https://lazerdisksound.com" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:underline">Lazerdisk Sound</a>. Garnish students get all of our packs (mostly written and produced by Garnish instructors) for free, and an exclusive pack just for Garnish students not sold on the site! It’s recorded individual keys from Mark Ronson’s Mellotron M4000D, which our label chief Zack Johnson meticulously recorded in Mark’s studio in Hollywood. Thank you Zack and Mark!
                  </p>
                </AccordionItem>
              </div>

              {/* Schedule and Pricing */}
              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>Mondays/Wednesdays/Fridays 12h – 16h local time | Barcelona – Sept 11th; London – Jan 8th; NYC – April 22nd</p>
                <p>$9999 + $500 registration fee (£ and € also accepted, with no exchange fees) | <a href="https://edu.garnishmusicproduction.com/product/academy-payments/" className="text-[#E53E3E] hover:underline">Payment Info</a></p>
                <p>Use the ‘CONNECT’ button below to request more info on our upcoming planned schedules. One of our placement experts will follow up with information and find a time for an assessment call to get you in to the most suitable program we have for you.</p>
                <p>To be in the loop when we release more dates, sign up to our newsletter towards the top right of this page. We don’t send many, you can easily unsubscribe, and we never share our data with anyone.</p>
                <p className="italic text-gray-400">I am text block. Click edit button to change this text...</p>
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

              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <h3 className="text-[18px] font-bold text-[#333] mb-6 uppercase text-center">Testimonials</h3>
                <div className="text-center">
                  <p className="text-[15px] text-[#666] italic leading-relaxed mb-6">
                    "The course does a good job of expressing the importance of all aspects of music. Art of flow, synthesis, business, and marketing/branding are all building blocks of the aspiring musician pyramid. Armed with knowledge from each category (and of course good work ethic), anyone can navigate the long, crazy road to becoming a successful and happy musician."
                  </p>
                  <div className="w-12 h-[2px] bg-[#E53E3E] mx-auto"></div>
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
