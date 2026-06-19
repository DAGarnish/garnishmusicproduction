"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function UndergraduatePage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans text-[#222]">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[350px] md:h-[450px] mt-[88px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2021/10/Ableton-Live-10-typewriter-scaled.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-[90%] md:w-[65%] text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white bg-[#E53E3E] py-4 px-6 uppercase tracking-wider shadow-lg">
            UNDERGRADUATE BUSINESS AND MUSIC
          </h1>
        </div>
      </section>

      {/* Enrollment Banner */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex items-center justify-center gap-2 text-[#E53E3E] text-2xl mb-2">
            <span role="img" aria-label="bell">🔔</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Enroll Now: Spring Semester March 2, 2026</h2>
          <p className="text-[#E53E3E] font-bold text-lg mb-1">Spots Limited!</p>
          <p className="text-gray-600 mb-2">F1 International Students Apply by Jan 16, 2026</p>
          <Link href="/connect" className="text-[#E53E3E] hover:underline font-semibold">
            Contact us with any questions
          </Link>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full">
        
        {/* Overview Card */}
        <div 
          className="w-full bg-cover bg-center bg-no-repeat py-20 px-4 relative"
        >
          <div className="absolute inset-0 bg-[#f7f7f7]"></div>
          <div className="relative w-[90%] md:w-[70%] mx-auto bg-white/90 backdrop-blur-sm rounded-[24px] shadow-xl p-8 md:p-14 border border-[#e5e5e5]">
            <div className="text-center mb-10">
              <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] leading-tight mb-2">
                Undergraduate Business and Music
              </h2>
              <h3 className="text-xl text-[#555] font-semibold mb-1">Los Angeles & Live Online</h3>
              <p className="text-[#E53E3E] font-bold">International Students Study in Los Angeles on F1 Visa through IAULA</p>
            </div>
            
            <div className="text-[16px] text-[#222] text-center leading-[1.8] space-y-6">
              <p>
                Garnish Music Production School has partnered with the International American University (IAU) to offer an incredible pathway. You can earn an accredited Associate of Science in Business Administration (ASBA) or Bachelor of Business Administration (BBA) with a specialization in Music Production, all while building an industry-ready portfolio.
              </p>
              
              <div className="text-left mt-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h4 className="font-bold text-lg mb-4">Who is this course for?</h4>
                <ul className="list-disc pl-6 space-y-2 text-[#444]">
                  <li>Artists, songwriters, and producers aiming for commercial success.</li>
                  <li>DJs looking to produce their own original tracks and remixes.</li>
                  <li>International students wanting to study music in Los Angeles on an F1 Visa.</li>
                  <li>Anyone looking to combine a respected business degree with elite music production skills.</li>
                </ul>
              </div>

              <blockquote className="italic text-lg text-gray-600 border-l-4 border-[#E53E3E] pl-6 my-8 text-left">
                “I needed to brush up on something, so I called Garnish, as they have the best instructors” – <a href="https://soundcloud.com/jamie-jones" target="_blank" rel="noreferrer" className="text-[#E53E3E] hover:underline font-bold">Jamie Jones</a>
              </blockquote>

              <div className="mt-10">
                <Link href="/connect" className="inline-block bg-gradient-to-r from-[#E53E3E] to-[#cf4a30] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ASBA & BBA Columns Section */}
        <div className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            
            {/* ASBA Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#222]">Associate of Science (ASBA)</h2>
                <p className="text-gray-500 mt-2">Program Highlights & Prerequisites</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-[#E53E3E]">Program Highlights</h3>
                  <ul className="space-y-3 text-[#444] list-disc pl-5">
                    <li><strong>Duration:</strong> 2.5 years (F1 Visa Eligible)</li>
                    <li>Master industry-standard DAWs: Ableton Live, Logic Pro, Pro Tools.</li>
                    <li>Core music theory, sound design, and arrangement.</li>
                    <li>Essential music business and marketing strategies.</li>
                    <li>Earn a fully accredited ASBA Degree.</li>
                    <li>Includes a 50% discount on Ableton Live and Arturia plugins.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-[#E53E3E]">Prerequisites</h3>
                  <ul className="space-y-3 text-[#444] list-disc pl-5">
                    <li>High School Diploma or equivalent.</li>
                    <li>English proficiency (for international students).</li>
                    <li>Basic studio gear: Laptop (Mac/PC) and professional headphones.</li>
                  </ul>
                  <p className="mt-6 text-sm text-gray-500 italic">
                    Contact our admissions team to verify your international credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* BBA Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#222]">Bachelor of Business Administration (BBA)</h2>
                <p className="text-gray-500 mt-2">Program Highlights & Prerequisites</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-[#E53E3E]">Program Highlights</h3>
                  <ul className="space-y-3 text-[#444] list-disc pl-5">
                    <li><strong>Duration:</strong> 5 years (F1 Visa Eligible)</li>
                    <li>Advanced mixing and mastering techniques.</li>
                    <li>Specialized electives: Hip-hop, K-Pop, Film Scoring.</li>
                    <li>Global market strategy and entertainment law.</li>
                    <li>Graduate with a BBA Degree and a professional EP portfolio.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-[#E53E3E]">Prerequisites</h3>
                  <ul className="space-y-3 text-[#444] list-disc pl-5">
                    <li>High School Diploma or equivalent.</li>
                    <li>English proficiency (for international students).</li>
                    <li>Basic studio gear: Laptop (Mac/PC) and professional headphones.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Value Proposition & Fees */}
        <div 
          className="w-full bg-cover bg-center py-20 px-4 relative"
          style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/image-scaled.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
          
          <div className="relative max-w-[1000px] mx-auto">
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl text-white mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#E53E3E]">Why Choose Us?</h2>
              <ul className="space-y-6 text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-[#E53E3E] text-2xl">✓</span>
                  <div><strong>Epic Production Skills:</strong> Learn from working professionals in a real Hollywood environment.</div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#E53E3E] text-2xl">✓</span>
                  <div><strong>Business Mastery:</strong> Don't just make music; learn how to monetize it and build a career.</div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#E53E3E] text-2xl">✓</span>
                  <div><strong>Unmatched Affordability:</strong> Under $31,000 for an ASBA compared to over $100,000 at traditional music colleges.</div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#E53E3E] text-2xl">✓</span>
                  <div><strong>F1 Visa Ready:</strong> Fully accredited pathways to live and study in Los Angeles.</div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 text-center text-[#222]">
              <h2 className="text-3xl font-bold mb-6">Program Fees & Intake</h2>
              <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
                <div className="p-6 bg-gray-50 rounded-xl w-full md:w-1/2 border border-gray-100">
                  <div className="text-xl font-bold mb-2">ASBA Program</div>
                  <div className="text-3xl font-black text-[#E53E3E]">$30,450</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl w-full md:w-1/2 border border-gray-100">
                  <div className="text-xl font-bold mb-2">BBA Program</div>
                  <div className="text-3xl font-black text-[#E53E3E]">$63,390</div>
                </div>
              </div>
              <p className="text-lg mb-2 font-bold">Upcoming Classes:</p>
              <p className="text-gray-600 mb-8">March 2, 2026 | May 4, 2026 | June 29, 2026</p>
              
              <Link href="/connect" className="inline-block bg-gradient-to-r from-[#E53E3E] to-[#cf4a30] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Apply for ASBA / BBA
              </Link>
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
