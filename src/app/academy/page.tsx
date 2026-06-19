"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2020/12/Online-Music-Production-Courses.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Comprehensive Programs
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-[28px] font-bold text-[#333] mb-4 leading-tight">
                World-class, 360° Music Production Program | Online
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>
                  We teach the skills necessary to hone the art of music production. Students should leave with their own project, curated sound library, and the tools to succeed. This boutique-style program in classes of no more than ten serves as a comprehensive and hands-on experience. Gain invaluable tips and techniques from our superior roster of instructors, who are invested in your progress.
                </p>
                <p>
                  With strategically placed group mentoring sessions, and one to one mentoring sessions in our professional studio, with a mentor of their choice, students have the opportunity to write, produce, engineer, mix, master their very own EP.
                </p>
                <p>
                  Thanks to some innovative scheduling functions, Garnish students can choose from Ableton Live, FL Studio or Logic Pro X as their software path in the Academy. If you’re not sure, we will advise!
                </p>
                <p>
                  Garnish was the first music production school in the UK to offer the Music Grades System for music production, and all music production Academy learners, worldwide take a Grade 6, 7 or 8 examination.
                </p>

                <h3 className="text-[18px] font-bold text-[#333] mt-8 mb-2 uppercase">Beats & Pieces</h3>
                <p>Within weeks into class, you will be working your way around your DAW, as it serves you long-term as one of your most essential creative tools. Through a practical hands-on teaching style. You will explore key concepts, such as MIDI programming, sampling, audio manipulation and arranging.</p>

                <h3 className="text-[18px] font-bold text-[#333] mt-8 mb-2 uppercase">Music Composition</h3>
                <p>You will learn the fundamentals of music composition, making you a more efficient producer. Learn and program chords which work well together, discover catchy lead lines, and bass lines that groove. Classically trained students who have taken this course repeatedly tell us how this part of the program has given them new tools and techniques.</p>

                <h3 className="text-[18px] font-bold text-[#333] mt-8 mb-2 uppercase">Audio Engineering</h3>
                <p>Become grounded in audio engineering and recording with essential techniques and tricks of the trade. This part of the course emphasizes correct recording practices, and vocal production. Even though music producers are not expected to be singers too, the more we understand about vocal production and recording, the better the final product!</p>

                <h3 className="text-[18px] font-bold text-[#333] mt-8 mb-2 uppercase">Mixing & Mastering</h3>
                <p>Know your space; learn the fundamentals behind acoustics and how to correctly stage your studio for cleaner and better sound. Then get your hands dirty with dynamic controllers, in-depth EQ, making the most of the frequency spectrum, mixing vocals, expanding song elements, creating cohesive sound, and awesome professional plugins.</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8 border border-gray-100 mb-8">
                <h3 className="text-[18px] font-bold text-[#333] mb-6 uppercase border-b border-gray-200 pb-2">Program Details</h3>
                <ul className="text-[#666] text-[14px] space-y-4">
                  <li><strong>Format:</strong> 360 hours or 200 hours 1:1</li>
                  <li><strong>USA:</strong> $14,999 + $500 registration fee ($200 if 14 days before start)</li>
                  <li><strong>EU:</strong> €12,999 + €500 registration fee (€200 if 14 days before start)</li>
                  <li><strong>UK:</strong> £10,999 + £500 registration fee (£200 if 14 days before start)</li>
                </ul>
                <div className="mt-8">
                  <a href="/connect" className="block text-center bg-[#E53E3E] text-white font-bold py-3 px-4 uppercase tracking-[2px] text-[13px] hover:bg-[#333] transition-colors">
                    Connect
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
