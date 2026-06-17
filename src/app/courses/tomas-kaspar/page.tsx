import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Tomáš Kašpar - Garnish Music Production School",
  description: "Tomáš spent several years as a guitarist and musician in bands Junk Son & Laucan.",
};

export default function TomasKasparPage() {
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
            Tomáš Kašpar
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-[#333333] pb-24 pt-16">
          <h1 className="text-4xl font-bold mb-10 text-[#222222]">Tomáš Kašpar</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://www.garnishmusicproduction.com/wp-content/uploads/2020/12/TK.jpg" 
                alt="Tomáš Kašpar" 
                className="w-full object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 text-[15px] leading-relaxed text-justify">
              <p>
                Tomáš spent several years as a guitarist and musician in bands Junk Son & Laucan, which saw UK & EU support tours with artists including Ghostpoet, Maribou State & Sam Amidon. Since 2017 his love for the studio has focussed his time on engineering and production, working as an Engineer at Goldsmiths Music Studios. During this time, he has worked with artists including Leifur James (Night Time Stories), Arlo Day (Domino) and Don’t Forget the Driver (BBC2). Tomáš is involved in running regular recording sessions and teaching students Ableton, Logic and studio engineering practice alongside his role as workshop leader with Lewisham-based youth music project Alchemy.
              </p>
              <p>
                Having worked with Ableton for years both in the studio and on stage, Tomáš is passionate about its endless possibilities for creativity, performance and production. As an electronic musician and producer, Tomáš works with hardware synths, drum machines, sampling, beatmaking and is a believer in how we can express and develop our creative voices and identities with these tools.
              </p>
              <p>
                Available for <a href="https://www.garnishmusicproduction.com/private-tuition/" className="text-blue-600 hover:underline">Private Tuition</a> online & in person. Tomáš specialises in: Ableton, Sound Design, Production and Sound Engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
