import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Anthony Traynor - Garnish Music Production School",
  description: "Anthony Traynor is a celebrated and multifaceted creative, with a proven track record of high-level commercial success in diverse fields.",
};

export default function AnthonyTraynorPage() {
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
          <h1 className="text-4xl font-bold mb-10 text-[#222222]">Anthony Traynor</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://www.garnishmusicproduction.com/wp-content/uploads/2015/04/Tony-Deathless.jpg" 
                alt="Anthony Traynor" 
                className="w-full object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 text-[15px] leading-relaxed text-justify">
              <p>
                Anthony Traynor is a celebrated and multifaceted creative, with a proven track record of high-level commercial success in diverse fields. An experienced lecturer and facilitator, with entrepreneurial drive, and a deep calling to create. He lectured on Ableton music production in Vancouver, Canada at some of Vancouvers leading music institutions. Most notably he co-wrote the Ableton Live EMP course currently being implemented at SAE Vancouver. He also created and hosted a series of courses on Ableton at Whistler Arts Council, Whistler BC and appeared as a visiting lecturer at SAE Australia, when touring through the southern hemisphere.
              </p>
              <p>
                Anthony has been a leading producer in the International Electronic Dance Music Community for over 12 years, and the majority of his experience has been accumulated “In the field”, on the road playing festivals, and in the studio, mastering high-end, industry standard music production techniques. In that time Anthony has had a slew of releases under various monikers (Break Beat Buddha, <a href="https://www.youtube.com/watch?v=wukb3HLrX8c" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Propa Tingz</a> and now TONY DEATHLESS, on renowned labels including Play Me, Fabric Live, BOKA, Black Acre, Z Audio, as well as pushing his own True Movement imprint.
              </p>
              <p>
                Anthony has toured throughout the US, Canada, EU and Australia, and has remixed/collaborated with leading lights in the worldwide electronic music scene such as Bassnectar, 16 Bit, The Funk Huntersand, Freq Nasty. Anthony’s productions have also earned commercial success through TV placements (most notably The CW Network, “Americas Next Top Model” and MTV) and enjoyed support from BBC1 DJs Annie Nightingale, Kissy Sell Out, and Mista Jam.
              </p>
              <p>
                Available for <a href="https://www.garnishmusicproduction.com/private-tuition/" className="text-blue-600 hover:underline">Private Tuition</a> online & in person. Anthony specialises in: Ableton Live and Sound Design.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
