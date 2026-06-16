import React from "react";

export default function Partners() {
  return (
    <section className="w-full bg-[#E53E3E] py-12 lg:py-16 mb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-white font-bold text-2xl lg:text-3xl uppercase tracking-[0.2em] mb-10 text-center">Some of our partners</h2>
        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-12 gap-y-10 items-center justify-items-center opacity-100">
          <a href="https://www.ableton.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/1.png" alt="Ableton" className="h-[30px] w-auto max-w-full object-contain" /></a>
          <a href="https://izotope.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/2-copy-1.png" alt="iZotope" className="h-[37px] w-auto max-w-full object-contain" /></a>
          <a href="https://www.beatport.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/3.png" alt="beatport" className="h-[24px] w-auto max-w-full object-contain" /></a>
          <a href="https://www.arturia.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/4-1.png" alt="ARTURIA" className="h-[67px] w-auto max-w-full object-contain" /></a>
          <a href="https://www.pioneerdj.com/en-gb/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/svgexport-1-1.png" alt="Pioneer DJ" className="h-[28px] w-auto max-w-full object-contain" /></a>
          <a href="https://alphatheta.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/AlphaTheta-1.png" alt="AlphaTheta" className="h-[29px] w-auto max-w-full object-contain" /></a>
          <a href="https://www.soundtoys.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/logo-1.png" alt="soundtoys" className="h-[45px] w-auto max-w-full object-contain" /></a>
          <a href="https://www.antarestech.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/Auto-Tune_white_logo_with_green_A_wave-1.png" alt="AUTO-TUNE" className="h-[54px] w-auto max-w-full object-contain" /></a>
          <a href="https://www.image-line.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/Image-Line.png" alt="FL STUDIO" className="h-[38px] w-auto max-w-full object-contain" /></a>
          <a href="https://www.pitchinnovations.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/logo-2.png" alt="PITCH INNOVATIONS" className="h-[71px] w-auto max-w-full object-contain" /></a>
          <a href="https://www.native-instruments.com/en/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/Native_Instruments_logo_2023.svg_-1.png" alt="NATIVE INSTRUMENTS" className="h-[25px] w-auto max-w-full object-contain" /></a>
          <a href="https://music.apple.com/us/new" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform"><img src="https://www.garnishmusicproduction.com/wp-content/uploads/2025/02/apple.png" alt="Apple" className="h-[125px] w-auto max-w-full object-contain" /></a>
        </div>
      </div>
    </section>
  );
}
