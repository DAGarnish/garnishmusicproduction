"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const curriculumSections = [
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/IMG_7473-1-scaled.jpg",
    left: {
      title: "Main Menu Bar",
      items: ["File Menu", "Edit Menu", "Add Menu", "Patterns Menu", "View Menu", "Options Menu", "Tools Menu", "Help Menu"],
    },
    right: {
      title: "Toolbar",
      items: ["Editing the Toolbar", "Main Menu", "Title & Hint Panel", "Transport Panel", "CPU & Memory Panel", "Global Snap Panel", "Output Panel", "Online Panel", "Pattern Panel", "Shortcut Icons", "Time Panel", "Multilink Controllers Icon", "Main Volume & Pitch Panel", "Window Controls"],
    },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/IMG_7473-1-scaled.jpg",
    left: {
      title: "File Browser",
      items: ["Plugin Database", "Project Browser", "Advanced folder stuff"],
    },
    right: {
      title: "Channel Rack & Step Sequencer",
      items: ["Channel Button Menu"],
    },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/01/Mixing-Board-scaled.jpg",
    left: {
      title: "Channel Settings",
      items: ["Main Control", "Sampler Setting", "Instrument Setting", "Miscellaneous Setting", "Automation Clip Setting", "Layer Setting", "Plugin Window Setting"],
    },
    right: {
      title: "Piano Roll",
      items: ["Piano Roll Arpeggiator", "Piano Roll Articulator", "Piano Roll Chopper", "Piano Roll Claw Machine", "Piano Roll Flam Tool", "Piano Roll Flip Tool", "Piano Roll LFO Tool", "Piano Roll Key Limiter Tool", "Piano Roll Menu", "Import MIDI Data Dialog", "Piano Roll Quantizer", "Piano Roll Randomizer", "Riff Machine", "Piano Roll Scale Level Tool", "Piano Roll Strum Tool"],
    },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-9_15_5_37.png",
    left: {
      title: "Playlist",
      items: ["Patterns", "Audio Clips", "Automation Clips", "Performance Mode"],
    },
    right: {
      title: "Instrument / Generator Plugins",
      items: ["We explore all the instruments FL Studio has to offer, which are too many to list here!"],
    },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/Session-Musician-scaled.jpg",
    left: {
      title: "Mixer & Mixing",
      items: ["We dive deep into the vast mixing tools that come with FL Studio, which are too many to list here!"],
    },
    right: {
      title: "Installing & Using VST / AU Plugins",
      items: [],
    },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/3.jpg",
    left: {
      title: "Recording: Audio, Notes & Automation",
      items: ["Audio Recording", "Audio Interfaces (USB Microphones)", "Note Recording", "Note Step Entry", "Automation Recording", "Linking USB/MIDI Controllers", "MIDI Scripting", "Preconfigured Controllers (USB/MIDI)", "Linking Internal Controller Plugins", "Mapping Formula", "Automation Clips", "Automation Event Editor", "LFO Tool", "Scale Levels Tool", "Import MIDI Data Tool"],
    },
    right: {
      title: "Edison Wave Editor & Recorder",
      items: ["Edison: Sample Properties", "Edison: Amp Tool", "Edison: Blur Tool", "Edison: Convolution / Reverb Tool", "Edison: Claw Machine Tool", "Edison: Drum Tool", "Edison: Equalize Tool", "Noise Removal Tool", "Script Tool", "Time Stretch / Pitch Shift Tool", "Tune Loop Tool"],
    },
  },
  {
    bg: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/01/Music-Production-Midtown.png",
    left: {
      title: "ReWire Support",
      items: ["Client Mode", "Host Mode"],
    },
    right: {
      title: "Installing & Using VST / AU Plugins",
      items: ["FL Studio as a Plugin (VST / AU)"],
    },
  },
];

const testimonials = [
  { text: "Sharing and learning from a legendary Producer/Engineer is priceless and incredible.", author: "Pablo Toscano" },
  { text: "The course is very friendly and engaging. Any and all questions will be asked with no hesitation or frustration, and it helps everyone else in the class that might have the same question in mind.", author: "Ryan Conway" },
  { text: "It's a great school and have great teachers. Some schools care only about fancy gear in the classroom and forget about the essential: the teachers!", author: "João Gama" },
  { text: "The instructor was great. He was extremely good at explaining things and always gave us enough time to put what we were learning into practice. Most importantly, he is passionate about music and actually enjoys teaching which really makes the whole experience very enjoyable.", author: "Reggie Chelsom" },
  { text: "Affordable classes with a lot of knowledgeable teachers that are down to earth and easy going... amazing teachers.", author: "Anthony C" },
];

export default function FLStudioPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

  const toggleAccordion = (key: string) => {
    setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <Header />

      {/* Hero */}
      <section
        className="relative w-full h-[250px] mt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/IMG_7473-1-scaled.jpg')` }}
      >
        <div className="relative z-10 w-[90%] md:w-[65%] text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg inline-block">
            FL Studio
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section
        className="w-full bg-cover bg-center py-16 px-4"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/IMG_7473-1-scaled.jpg')` }}
      >
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12">
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] text-center mb-6">FL Studio Course</h2>
          <div className="w-16 h-[2px] bg-[#E53E3E] mx-auto mb-8"></div>
          <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-5">
            <p><strong>Build Beats. Shape Sound. Finish Tracks.</strong></p>
            <p>FL Studio has become a go-to DAW for electronic music producers and beat-makers around the world—but whatever your genre, if FL is your weapon of choice, and you want your name on this list of <a href="https://en.wikipedia.org/wiki/FL_Studio#Notable_users" className="text-[#E53E3E] hover:underline" target="_blank" rel="noreferrer">notable users</a>, this course will give you the tools and confidence to have the best chance.</p>
            <p>Whether you're a complete beginner or already making tracks in FL, this 36-hour course delivers deep, structured training in music production, beat-making, and engineering. We cover every major element in detail, packed with real-world tips and techniques that even experienced users find game-changing. You'll leave with a solid workflow, polished production skills, and a competitive edge over anyone stuck in YouTube rabbit holes.</p>
            <p>Classes are live and interactive—in-person or live online—so you can ask questions and get feedback in the moment when you're inspired… or confused. It's this kind of immediate, practical support that makes in-person learning so effective.</p>
          </div>
        </div>
      </section>

      {/* Curriculum Sections */}
      {curriculumSections.map((section, idx) => (
        <section
          key={idx}
          className="w-full bg-cover bg-center py-12 px-4"
          style={{ backgroundImage: `url('${section.bg}')` }}
        >
          <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left */}
            <div className="bg-[#F7F7F7]/90 border border-[#B7B7B7] p-6">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleAccordion(`${idx}-left`)}
              >
                <span className="font-bold text-[17px] text-[#222] uppercase tracking-wide">{section.left.title}</span>
                <span className="text-[#E53E3E] text-xl font-bold">{openAccordions[`${idx}-left`] ? "−" : "+"}</span>
              </button>
              {openAccordions[`${idx}-left`] && section.left.items.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {section.left.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-[#444]">
                      <span className="text-[#E53E3E] font-bold mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Right */}
            <div className="bg-[#F7F7F7]/90 border border-[#B7B7B7] p-6">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleAccordion(`${idx}-right`)}
              >
                <span className="font-bold text-[17px] text-[#222] uppercase tracking-wide">{section.right.title}</span>
                <span className="text-[#E53E3E] text-xl font-bold">{openAccordions[`${idx}-right`] ? "−" : "+"}</span>
              </button>
              {openAccordions[`${idx}-right`] && section.right.items.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {section.right.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-[#444]">
                      <span className="text-[#E53E3E] font-bold mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section
        className="w-full bg-cover bg-center py-20 px-4"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-9_15_5_37.png')` }}
      >
        <div className="w-[90%] md:w-[70%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12 text-center">
          <p className="font-bold text-lg mb-4">36 hours or 20 hours 1:1</p>
          <p className="mb-1">USA: $1499 + $100 Registration if booked 14 days before start or $1799 + $200 Registration</p>
          <p className="mb-1">EU: €1299 + €100 Registration if booked 14 days before start or €1499 + €200 Registration</p>
          <p className="mb-1">UK: £1099 + £100 Registration if booked 14 days before start or £1299 + £200 Registration</p>
          <p className="max-w-2xl mx-auto mt-6 text-[15px]">
            Use the 'CONNECT' button below to request schedule information for our classes. One of our placement experts will follow up within a business day. For one-to-one lessons, see <a href="https://ny.garnishmusicproduction.com/private-instruction/" target="_blank" rel="noreferrer" className="text-[#E53E3E] hover:underline">FL Studio Private Instruction</a>, and connect with a specialist on that page.
          </p>
          <div className="mt-8">
            <Link href="/connect" className="inline-block transition-transform hover:scale-105">
              <Image src="https://la.garnishmusicproduction.com/wp-content/uploads/sites/7/2021/09/connect-button.png" alt="CONNECT" width={256} height={107} unoptimized className="mx-auto" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="w-full bg-cover bg-center py-20 px-4"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/02/fotor_2023-6-8_9_47_49.png')` }}
      >
        <div className="w-[90%] md:w-[60%] mx-auto bg-[#F7F7F7]/90 border border-[#B7B7B7] p-8 md:p-12 text-center">
          <h2 className="text-[28px] font-bold mb-8 text-[#222]">Testimonials</h2>
          <div className="min-h-[120px]">
            <p className="text-[17px] italic text-[#444] leading-relaxed mb-4">"{testimonials[activeTestimonial].text}"</p>
            <p className="font-bold text-[#E53E3E]">— {testimonials[activeTestimonial].author}</p>
          </div>
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === activeTestimonial ? "bg-[#E53E3E]" : "bg-gray-300"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
