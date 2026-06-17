import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Flaminia Agrimi - Garnish Music Production School",
  description: "Originally from Rome, London-based artist Flaminia has built a style characterised by melancholic melodies and broken beats.",
};

export default function FlaminiaAgrimiPage() {
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
            Flaminia Agrimi
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-[#333333] pb-24 pt-16">
          <h1 className="text-4xl font-bold mb-10 text-[#222222]">Flaminia Agrimi</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://www.garnishmusicproduction.com/wp-content/uploads/2020/07/Flaminia-Agrimi.png" 
                alt="Flaminia Agrimi" 
                className="w-full object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 text-[15px] leading-relaxed text-justify">
              <p>
                Originally from Rome, London-based artist Flaminia has built a style characterised by melancholic melodies and broken beats, drawing out a sound that’s heavily inspired by her love for techno and experimental electronic. Merging the two genres together, she creates sonic worlds that allow you to get lost in strong distortions and haunting atmospheres. Her main focus is on performing live, using a variety of hardware drum machines, synths, her own voice and Ableton Live DAW.
              </p>
              <p>
                She plays regularly in London Printworks, Electrowerkz, Corsica Studios and she holds a residency at Village Underground’s in-house party, Superstition. Having also brought her live set in internationally recognised venues such as Tresor in Berlin, Astron Bar in Athens, Cafe-Gallery in Tbilisi and Ooze in New York, she shared decks with artists such as Tommy Four Seven, Surgeon, Regis, Phase Fatale, Shlømo, Rrose and Samuel Kerridge.
              </p>
              <p>
                In 2017, Flaminia launched Metempsychosis Records with <a href="https://www.facebook.com/thetrainmusic/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">End Train</a> creating a platform to support emerging artists as well as pushing her own productions. In the year of launch, the Label did its first showcase in Tresor Berlin, as part of the New Faces party. In 2019, she co-founded and launched <a href="https://www.instagram.com/home_of_sound/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Home of Sound</a>, a platform to support independent artists and labels through a series of workshops, podcasts and promo service.
              </p>
              <p>
                Flaminia’s first vinyl release came up last June featuring remixes from Headless Horseman and Ancestral Voices. Her first release of 2019 is part of Metempsychosis’ digital series THEOTHERSIDE and includes two of her original tracks plus two remixes by Kwartz and Sam KDC. Recently she got signed by VSK Series and released the track &quot;Shori&quot; part of the first Various Artists featuring Ansome, Kwartz, Michal Jablonski and VSK.
              </p>
              <p>
                Available for <a href="https://www.garnishmusicproduction.com/private-tuition/" className="text-blue-600 hover:underline">Private Tuition</a> online & in person. Flaminia specialises in: Ableton Live and Sound Design.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
