"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivateInstructionPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2020/12/Music-Production-Studio.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Bespoke Private Instruction
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column - Main Content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-[28px] font-bold text-[#333] mb-4 leading-tight">
                Bespoke Music Production Private Instruction, LIVE Online or in Person
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>
                  Take your music production skills to the next level with our bespoke private instruction. Whether you prefer one-to-one guidance or small group sessions, our personalized approach gives you complete flexibility—perfect if you can’t commit to a fixed schedule or want a tailored learning experience.
                </p>
                <p>
                  Private lessons are streamlined to help you achieve results faster than traditional group classes, with a curriculum shaped entirely around your goals. You’ll enjoy focused attention from world-class instructors who adapt each session to your unique style and creative vision.
                </p>

                <h3 className="text-[18px] font-bold text-[#333] mt-8 mb-2 uppercase">Learn Where It Suits You</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Your home studio:</strong> Learn in the comfort of your own setup.</li>
                  <li><strong>Instructor’s studio:</strong> Get hands-on guidance in your instructor’s creative space.</li>
                  <li><strong>Professional studio:</strong> Step into one of our state-of-the-art acoustically treated studios at a Garnish facility for the ultimate learning environment.</li>
                  <li><strong>Online:</strong> Connect from anywhere in the world with the same expert instruction over our specialist conferencing software, with studio quality sound, live and interactive.</li>
                </ul>

                <p className="mt-6">
                  As the only Apple and Ableton-endorsed music production school, with certified trainers and Grammy Award-winning instructors, we provide the perfect platform for you to unlock your full potential as a producer.
                </p>

                <div className="mt-8 flex gap-4">
                  <a href="/private-instruction/" className="text-[#E53E3E] hover:underline font-bold">More information</a>
                  <span className="text-gray-400">or</span>
                  <a href="/pi" className="text-[#E53E3E] hover:underline font-bold">Send us a message!</a>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8 border border-gray-100 mb-8">
                <h3 className="text-[18px] font-bold text-[#333] mb-6 uppercase border-b border-gray-200 pb-2">Testimonials</h3>
                
                <div className="space-y-6">
                  <blockquote className="text-[#666] italic text-[14px]">
                    "I wouldn't change a thing about this course. It was ten times better than I expected it to be. The instructor was incredibly informative and kept things fun. I've played with software for a couple of years and thought I got most of the basics down but I definitely was wrong. Great course! I would definitely recommend this course to anybody wanting to learn the production side of music. It was incredibly helpful and left me inspired to make tracks 24/7."
                    <footer className="mt-2 text-[#333] font-bold not-italic">- Kristina Bialkowski</footer>
                  </blockquote>

                  <blockquote className="text-[#666] italic text-[14px]">
                    "I went from knowing pretty much nothing about Logic to knowing how to built loops, work with midi, mix, and actually be able to record the music I write and and arrange on the computer. I'm really excited because Logic Pro X has opened up a new world for me as a singer songwriter!"
                    <footer className="mt-2 text-[#333] font-bold not-italic">- Dawn Red Sun</footer>
                  </blockquote>

                  <blockquote className="text-[#666] italic text-[14px]">
                    "I am a lot better off than I was months ago blindly watching Youtube tutorials and not knowing what I was doing. The teacher was a great, very patient and understanding, with all skill levels in the room."
                    <footer className="mt-2 text-[#333] font-bold not-italic">- Abraham Perrotta</footer>
                  </blockquote>

                  <blockquote className="text-[#666] italic text-[14px]">
                    "The small class size allowed the instructor time to give us individual attention/feedback. The teaching style was easily adjusted according to the levels in the class. As a very new producer, I never felt left behind. I never would have thought I could make this much progress in just 6 weeks!"
                    <footer className="mt-2 text-[#333] font-bold not-italic">- Andie Arbogast</footer>
                  </blockquote>
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
