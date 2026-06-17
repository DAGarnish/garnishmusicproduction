import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Music Production Instructors in London",
  description: "Meet our top Music Production Instructors with real industry experience. Learn from the best and take your music skills to the next level!",
};

const instructors = [
  {
    name: "Aamir Yaqub",
    image: "https://www.garnishmusicproduction.com/wp-content/uploads/2000/09/AAMIR-SSL-800.jpg",
    tags: ["Logic", "Maschine", "Mixing/Mixdown"],
    link: "/courses/aamir-yaqub",
  },
  {
    name: "Russ Yallop",
    image: "https://www.garnishmusicproduction.com/wp-content/uploads/2000/09/Russ-Yallop-800.jpg",
    tags: ["Ableton", "DJ", "Mixing/Mixdown"],
    link: "/courses/russ-yallop",
  },
  {
    name: "Alex Von Soos",
    image: "https://www.garnishmusicproduction.com/wp-content/uploads/2015/04/AlexVonSoosGMPPic2018.jpg",
    tags: ["Songwriting"],
    link: "/courses/alex-von-soos",
  },
  {
    name: "Anthony Traynor",
    image: "https://www.garnishmusicproduction.com/wp-content/uploads/2015/04/Tony-Deathless.jpg",
    tags: ["Ableton", "Sound Design"],
    link: "/courses/anthony-traynor",
  },
  {
    name: "Flaminia Agrimi",
    image: "https://www.garnishmusicproduction.com/wp-content/uploads/2020/07/Flaminia-Agrimi.png",
    tags: ["Ableton", "Sound Design"],
    link: "/courses/flaminia-agrimi",
  },
  {
    name: "Tomáš Kašpar",
    image: "https://www.garnishmusicproduction.com/wp-content/uploads/2020/12/TK.jpg",
    tags: ["Ableton", "Instructor", "Sound Design"],
    link: "/courses/tomas-kaspar",
  }
];

export default function InstructorsPage() {
  return (
    <>
      <Header />
      <div className="pt-[88px] min-h-screen bg-white">
        {/* Hero Section */}
        <div 
          className="w-full h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center relative mb-12"
          style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2016/09/music-icons10.jpg')` }}
        >
          {/* Optional dark overlay if needed for contrast, but keeping it simple first */}
          <div className="bg-[#E53E3E] py-4 px-8 md:py-5 md:px-10 text-center inline-block -translate-y-[30px]">
            <h1 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-widest">
              Award-winning Tutors!
            </h1>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-[#333333] pb-24">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <p className="text-[16px] leading-relaxed text-gray-700">
              We want you to learn from the best musicians and studio professionals London has to offer. Our roster are all active in the music industry, and have a wide range of skills to cover all aspects of music production. Our lead tutor Aamir Yaqub is a Grammy-award winner!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {instructors.map((instructor, idx) => (
              <a key={idx} href={instructor.link} className="group block text-center">
                <div className="relative mb-6 overflow-hidden rounded-lg aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#222222] mb-3 group-hover:text-[#E53E3E] transition-colors">
                  {instructor.name}
                </h3>
                <div className="flex flex-col gap-1 items-center">
                  {instructor.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
