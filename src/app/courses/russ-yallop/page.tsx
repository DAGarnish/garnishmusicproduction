import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Russ Yallop - Garnish Music Production School",
  description: "Russ Yallop is a producer, DJ, remixer and audio engineer.",
};

export default function RussYallopPage() {
  return (
    <>
      <Header />
      <div className="pt-[88px] min-h-screen bg-white">
        {/* Top Hero Image */}
        <div 
          className="w-full h-[300px] md:h-[450px] bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.garnishmusicproduction.com/wp-content/uploads/2016/09/music-icons10.jpg')` }}
        />

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-[#333333] pb-24 pt-16">
          <h1 className="text-4xl font-bold mb-10 text-[#222222]">Russ Yallop</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://www.garnishmusicproduction.com/wp-content/uploads/2000/09/Russ-Yallop-800.jpg" 
                alt="Russ Yallop" 
                className="w-full object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 text-[15px] leading-relaxed text-justify">
              <p>
                Russ Yallop is a producer, DJ, remixer and audio engineer. He has over 1 million plays on Spotify and has released music on house labels such as <a href="http://hotcreations.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hot Creations</a>, Crosstown Rebels, Snatch!, and Avotre where he released an album to critical acclaim. He has been touring globally for over a decade with appearances at world famous elite venues such as London’s Fabric, Berlin’s Watergate and Tokyo’s Womb, with Ibiza residencies for Circo Loco, Paradise and Elrow, along with appearances at festivals such as Tomorrowland, Glastonbury and Creamfields. As an engineer he has well over 100 client releases on some of the biggest underground labels in the scene.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
