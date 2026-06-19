"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function OnlineMusicProductionPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[650px] md:h-[750px] bg-[#111111] pt-[88px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://ny.garnishmusicproduction.com/wp-content/uploads/sites/9/2020/02/GMPNYHQ.gif')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="bg-[#E53E3E] text-white text-[15px] font-bold tracking-[2px] uppercase py-3 px-6 inline-block">
            Live Online
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
                Do What You Love. Remotely.
              </h1>

              <div className="text-[15px] text-[#666] leading-[1.8] mb-8 space-y-4">
                <p>
                  Every creator needs an outlet. Now more than ever. With you in mind, we are offering an exciting series of workshops.
                </p>
                <p>
                  Get the personal attention you deserve. We’ll give you the same, award-winning, in-person experience you get in our physical classrooms — all from home. Ask questions, practice, get feedback, share your screen, and get help. Everything is live. We are here to teach you and motivate you. LIVE online. See how our classes worked when we were forced online in the pandemic in the examples video below. Now our classes are either online only, or hybrid, so you are virtually in a class with an instructor and students, who are physically in our studios, using our cutting-edge swiveling camera and microphone system.
                </p>
                <p>
                  So tune in. Participate. Train with us. Join our community and let’s make something amazing together!
                </p>

                <blockquote className="border-l-4 border-[#E53E3E] pl-4 italic my-6 text-gray-500">
                  “This is a perfect and truly important time to stay connected and growing together in art. The online classes are going beautifully. Although it’s always ideal and amazing to be together in person, there really are many benefits in learning from home — and this is from someone who typically says no to technology connection and prefers notebooks to screens. I just had a lesson that was extremely productive and helpful, and now I am already home, with my gear to apply what we have gone over. Amazing.
                  <br /><br />
                  Also, it’s been very nice getting to meet other instructors from different Garnish offices. I feel grateful to have this music community during these times. Thank you Garnish.”
                  <br />
                  – <a href="https://www.instagram.com/mariemessenger/" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:underline font-bold not-italic">Lauren Marie</a>
                </blockquote>

                <blockquote className="border-l-4 border-[#E53E3E] pl-4 italic my-6 text-gray-500">
                  “To say that I enjoyed this class would be an understatement. Reflecting on the past few months at Garnish, I thought about what makes this class so special. The structure of the class, the people, and the teacher, were three main factors contributing to the overall awesome environment of the class. The class is set up in a way that encourages everyone to share their work and not feel ashamed or embarrassed, which is something I really value. I think with something like music production which in itself is difficult, and then on top of that for someone who is new to it, having a supportive and welcoming team makes participating and sharing work that much more exciting. I would highly recommend this to any aspiring producer or anyone just trying to get a feel for the music industry as a whole. While the class is focused mainly on the production of music, it also covers an array of other important topics that I feel like I will use for the rest of my life. Thank you Garnish!”
                  <br />
                  – <a href="https://www.instagram.com/rubymalamed/" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:underline font-bold not-italic">Ruby Malamed</a>
                </blockquote>

                <blockquote className="border-l-4 border-[#E53E3E] pl-4 italic my-6 text-gray-500">
                  “The instructors are amazing!! Everyone was super nice, very helpful, and fun to have as instructors. Really felt like a family. and i’m not sure if this is just because of Covid but the fact that the classes are smaller compared to what you’d get at a bigger institution or university is a huge plus in my opinion. I find real value in not just the great teaching style of this school but also how inviting everyone is. Writing this on the last day of the program and i’m already gonna miss everyone.
                  <br /><br />
                  I really appreciate everything the instructors did and you as well Dave. I know it was hard to organize everything during these crazy times. Im gonna miss the people at Garnish. I learned a lot and i’m super excited to see where i can go with what i’ve learned. Ill stay in touch. 😀”
                  <br />
                  – <a href="https://www.instagram.com/elijahsmthh/" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:underline font-bold not-italic">Elijah Smith</a>
                </blockquote>

                <blockquote className="border-l-4 border-[#E53E3E] pl-4 italic my-6 text-gray-500">
                  “The course was a wealth of information and well organized; I learned so much each week and actually felt comfortable with the material. I don’t currently have any plans to go into the industry or the like, as I took the course primarily for self improvement, but with what I’ve learned I feel as though I could definitely get started in the industry at some point in the future. I had a lovely teacher and he made everything clear at each step of the way. I’ve actually already recommended the course and all of Garnish to my friends and family who are interested in music!”
                  <br />
                  – <a href="https://twitter.com/ynoart" target="_blank" rel="noopener noreferrer" className="text-[#E53E3E] hover:underline font-bold not-italic">Yanick-Noelle Aigbedion</a>
                </blockquote>
              </div>

              {/* Connect Button */}
              <div className="text-[15px] text-[#666] leading-[1.8] space-y-4">
                <div className="mt-8">
                  <a href="https://edu.garnishmusicproduction.com/connect" className="inline-block bg-[#E53E3E] text-white px-8 py-3 font-bold tracking-widest uppercase hover:bg-black transition-colors duration-300">
                    CONNECT
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8 border border-gray-100 mb-8">
                <h3 className="text-[18px] font-bold text-[#333] mb-4 uppercase">Stay Connected</h3>
                <p className="text-[14px] text-[#666] mb-4">We will not share your information</p>
                <div className="bg-[#f2dede] border border-[#ebccd1] text-[#a94442] p-4 text-[14px] rounded">
                  Error: Contact form not found.
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
