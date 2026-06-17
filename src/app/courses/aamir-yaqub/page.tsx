import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Aamir Yaqub - Garnish Music Production School",
  description: "Aamir Yaqub is a London-based producer, GRAMMY® Award-winning engineer, and songwriter.",
};

export default function AamirYaqubPage() {
  return (
    <>
      <Header />
      <div className="pt-[88px] min-h-screen bg-white">
        {/* Top Hero Image */}
        <div 
          className="w-full h-[300px] md:h-[450px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2016/09/music-icons10.jpg')` }}
        >
          <div className="bg-[#E62020] text-white px-6 py-2 md:px-10 md:py-4 text-3xl md:text-5xl font-bold tracking-wider text-center max-w-[90%] -translate-y-[45px]">
            Aamir Yaqub
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-[#333333] pb-24 pt-16">
          <h1 className="text-4xl font-bold mb-10 text-[#222222]">Aamir Yaqub</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://www.garnishmusicproduction.com/wp-content/uploads/2000/09/AAMIR-SSL-800.jpg" 
                alt="Aamir Yaqub" 
                className="w-full object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 text-[15px] leading-relaxed text-justify">
              <p>
                Aamir Yaqub is a London-based producer, GRAMMY® Award-winning engineer, and songwriter. Aamir began his journey at Leeds College of Music where he received his BA and MA in Music Production. In 2012 Aamir began working at the prestigious <a href="https://www.thisismetropolis.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Metropolis Studios</a>, London, where he collaborated with a number of respected GRAMMY® Award-winning artists, producers and engineers including Rihanna, David Guetta, Ne-Yo, Will.I.Am and Sia, as well as with major labels, publishers and brands. He currently works freelance at studios around London, continuing his great work with both local and international music professionals.
              </p>
              <p>
                Available for <a href="https://www.garnishmusicproduction.com/private-tuition/" className="text-blue-600 hover:underline">Private Tuition</a> online & in person. Aamir specialises in: Mixing, Logic Pro X and Songwriting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
