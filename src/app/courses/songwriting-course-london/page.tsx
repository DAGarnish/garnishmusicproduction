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

export default function SongwritingCourseLondonPage() {
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
        style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2018/04/Songwriting-courses.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Hit Songwriting | London, Online, Blended
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
                Hit Songwriting Super-course
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>
                  Our comprehensive songwriting courses comprise an exciting programme that will transform the way you write, record, produce, perform-and even sell-your music. Much of the material presented here is simply not available anywhere else, because it is based on our own obsessive research into what makes a great song great!
                </p>
                <p>
                  Allow us to take a guess: many of you will have experienced the painful reality of being turned away by industry gatekeepers, or struggling to build a fanbase. Help is at hand! Have a look at the exciting topics we will be covering in these courses:
                </p>
              </div>

              {/* Accordions */}
              <div className="mb-12">
                <AccordionItem title="Hit Songwriting 101: The 3 Traditional Pillars of Songwriting: Lyrics, Melody & Chords" isOpen={openAccordion === 0} onClick={() => toggleAccordion(0)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Is there a formula for writing a hit song without sounding formulaic? There is!</li>
                    <li>Melodies that move people-how to write from the heart whilst knowing exactly what you’re doing as you learn how every note has its own distinct emotional value</li>
                    <li>Lyrics that tell a story or describe a special moment in time-no more generic filler or embarrassing rhymes!</li>
                    <li>Start writing your own lyric from scratch and rewrite and polish it with the help of the tutor and the whole group.</li>
                    <li>Chords that build the emotional foundation for the song – no more head-scratching or relying on clinical chord writing apps.</li>
                    <li>Melodic Rhythm-a hugely underrated skill that will make a big difference to your songwriting if you master it.</li>
                    <li>Chorus development and insider hook writing tricks that you’ll wish you’d heard about sooner.</li>
                    <li>Song structure and melodic development to keep your listener captivated throughout the whole song.</li>
                    <li>Many unique concepts and practical exercises that are far removed from boring music lessons: The Zookeeper, The Assassin, The Brainwash.</li>
                    <li>Advanced melody, harmony and lyrics concepts including in-depth analysis of a massive hit song with the help of a unique, high-tech songwriting “dashboard”.</li>
                    <li>Finish the song you started on day one and walk home with a polished professional lyric you can use for your own songwriting career.</li>
                    <li>Bring in your own material (optional) and have it optimised by our instructor Alex Von Soos, which will be like a mini co-writing session with a No.1 writer without having to give up any of your publishing share!</li>
                    <li>“Career Advice”: a personalised training plan (focusing on “pure” songwriting) for the time after the course so you can get to where you want to get without too many detours!</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Hit Songwriting 201 : The 21st Century 4th Pillar: Song Arrangement & Production" isOpen={openAccordion === 1} onClick={() => toggleAccordion(1)}>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>How to listen to music-really listen-to reveal the beauty of modern songwriting and production and how you can use examples from the best craftspeople in the business to polish your own songs to a higher degree than ever before.</li>
                    <li>The importance of rhythm and groove how to build exciting drum tracks.</li>
                    <li>The value of determining your bass line and sound early on in the writing process.</li>
                    <li>How to quickly research any genre to make sure your take on it sounds legit rather than like a karaoke version.</li>
                    <li>Assemble a professional sound palette to supercharge your songwriting-you will be amazed at how much more inspiration you’ll get from using pro sounds rather than what is built into Garageband or smartphone/tablet apps! Some of these sounds and effects are free or very cheap-but you need to know where the pros look!</li>
                    <li>The multi-dimensional “axes” of sound that allow you to paint a picture with your music.</li>
                    <li>How to produce singers like a pro-the mysteries of vocal technique, recording, editing and mixing revealed, including the all-important psychology of singing!</li>
                    <li>Bring in your own productions (optional) and have them critiqued by our instructor Alex Von Soos which will be like a mini co-producing session with a No.1 writer/producer!</li>
                    <li>“Career Advice”: a personalised training plan (focusing on arrangement/production) for the time after the course so you can get to where you want to get without too many detours!</li>
                    <li>“Path To Success”: how every choice you make in songwriting and production filters through to what friends, fans, consumers, tastemakers and industry gatekeepers will eventually like-or skip! Shorten the odds in your favour by seeing the whole picture in this exciting and brand-new module!</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="More Information" isOpen={openAccordion === 2} onClick={() => toggleAccordion(2)}>
                  <p className="mb-4">
                    You may well be proficient in one area (i.e. lyrics, programming, singing), but in today’s music business you really need to understand how the many different facets of modern music creation are brought together and have a good grasp of all the skills involved, even if you don’t do everything yourself and end up collaborating with someone who complements your strengths, which is something we recommend anyway. You might even find a great collaborator during our courses-and afterwards you will be able to “talk shop” in every department. This is so much better than not being able to get your ideas across and then being frustrated after having spent a lot of time (and sometimes a lot of money too) on a production that doesn’t sound like you!
                  </p>
                  <p className="mb-4">
                    You will learn a complete, totally integrated system for coming up with beautiful music that moves people. You will appreciate music, including your own, like never before. Whether you want to become a professional songwriter yourself one day, or simply write your best songs ever, you will find all the secrets revealed in these courses. Just bring your own talent and luck!
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4 font-bold text-[#333]">
                    <li>Bronze: Full Hit Songwriting course online, with three 1-2-1 lessons (1hr in-person or Zoom) | £899</li>
                    <li>Silver: Full Hit Songwriting course online, with seven 1-2-1 lessons (1hr in-person or Zoom) | £1299</li>
                    <li>Gold: Full Hit Songwriting course online, with twelve 1-2-1 lessons, co-writing and a full commercial production of one song | £9950</li>
                  </ul>
                  <p>
                    Use the ‘CONNECT’ button below to request schedule information for our classes. One of our placement experts will follow up within a business day. For one-to-one lessons, see <a href="https://www.garnishmusicproduction.com/bespoke-private-tuition/" className="text-[#E53E3E] hover:underline">Hit Songwriting Private Tuition</a>, and connect with a specialist on that page.
                  </p>
                </AccordionItem>
              </div>

              {/* Video Embed */}
              <div className="mb-8 relative w-full pb-[56.25%] overflow-hidden rounded-md shadow-lg">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/zH01o5qBikA?rel=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              {/* Pricing & Connect Button */}
              <div className="text-[15px] text-[#666] leading-[1.8] space-y-4">
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
                <div className="space-y-8">
                  
                  <div className="text-center">
                    <p className="text-[14px] text-[#666] italic leading-relaxed mb-4">
                      "Many thanks for a brilliant course! You've really pulled back the curtain on songwriting and I can't wait to start applying it all to my own songs - it's great! Thanks 🙂"
                    </p>
                    <h5 className="font-bold text-[#333] text-[13px] uppercase">Mike Campbell</h5>
                    <div className="w-8 h-[2px] bg-[#E53E3E] mx-auto mt-4"></div>
                  </div>

                  <div className="text-center">
                    <p className="text-[14px] text-[#666] italic leading-relaxed mb-4">
                      "I really enjoyed every second of the course and will try to take every new tool and tip on board. Already listening completely differently to songs on the radio."
                    </p>
                    <h5 className="font-bold text-[#333] text-[13px] uppercase">Ruud Boon</h5>
                    <div className="w-8 h-[2px] bg-[#E53E3E] mx-auto mt-4"></div>
                  </div>

                  <div className="text-center">
                    <p className="text-[14px] text-[#666] italic leading-relaxed mb-4">
                      "I just wanted to let you know that I got my first release as a songwriter here in Korea and to say thanks! All those principles we learnt on the course are definitely coming in handy-it's crazy, I had no idea I'd end up doing songwriting as a career!"
                    </p>
                    <h5 className="font-bold text-[#333] text-[13px] uppercase">Su Jung Pae</h5>
                    <div className="w-8 h-[2px] bg-[#E53E3E] mx-auto mt-4"></div>
                  </div>

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
