import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Alex Von Soos - Garnish Music Production School",
  description: "Alex Von Soos is a hugely experienced hit songwriter and producer.",
};

export default function AlexVonSoosPage() {
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
          <h1 className="text-4xl font-bold mb-10 text-[#222222]">Alex Von Soos</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://www.garnishmusicproduction.com/wp-content/uploads/2015/04/AlexVonSoosGMPPic2018.jpg" 
                alt="Alex Von Soos" 
                className="w-full object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 text-[15px] leading-relaxed text-justify">
              <p>
                Alex Von Soos is a hugely experienced hit songwriter and producer. He is a trained classical pianist and has spent many years analysing the theory behind hit songs. His own successes include a UK No.1 Hit with the All Saints (Black Coffee), a recent K-Pop No.1 (XIA) and cuts by Atomic Kitten and many other artists worldwide, selling more than 6 million records in the process. 
              </p>
              <p>
                Alex has worked with-and learned from-some of the most prolific hit writers and producers in the business including Narada Michael Walden (Whitney Houston, Mariah Carey), Cathy Dennis (Britney Spears, Katy Perry), Wayne Hector (One Direction, Westlife) and Cameron Blackwood (George Ezra, London Grammar). His songwriting trips have taken him to Nashville, LA, New York, Berlin and Stockholm. He has been signed to major record (Warners) and publishing (Universal) deals and more than 100 of his songs are currently generating royalties which is proof that the system he teaches works! 
              </p>
              <p>
                Watch a taster video on Alex’s unique top-line writing methods <a href="https://www.youtube.com/watch?v=x0OVHIpyfX0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HERE</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
