import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "BA (Hons) in Music Production & Sound Engineering | Garnish",
  description: "Master music & audio production, mixing, and sound design for music, film, and live events. BA (Hons) Degree Pathway courses available."
};

export default function BaPathwayCoursesPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#333333] font-sans selection:bg-[#E53E3E]/20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#111111] pt-[88px] text-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider leading-tight mb-8">
            BA (Hons) in Music Production & Sound Engineering
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Choose from Music Production & Sound Engineering, Electronic Music Production, or Songwriting & Production.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-lg text-[#555555] max-w-none mb-16">
            <p className="text-lg leading-relaxed">
              Complete all academic learning remotely with our UK-based expert module leads. Then, tap into your local Garnish student hub for everything else — collaborate in person, connect with like-minded peers, get help on your modules from our in-house team, and be part of our global creative community. You'll be working towards your qualification, delivered in English and recognized worldwide. For your final year, choose from our network of university partners to complete your BA (Hons) degree in person or online.
            </p>
          </div>

          {/* Levels Section */}
          <div className="space-y-16">
            
            {/* Level 4 */}
            <div className="bg-white p-8 border-l-4 border-[#E53E3E] shadow-sm">
              <h2 className="text-2xl font-bold text-black uppercase tracking-wide mb-4">Level 4: Extended Diploma in Music Production</h2>
              <p className="text-sm text-[#E53E3E] font-bold tracking-widest mb-4">120 CREDITS</p>
              <p className="text-[#666666] leading-relaxed">
                Provides a comprehensive foundation in recording, mixing, mastering, and creative composition. Learners develop technical proficiency in DAWs, sound design, MIDI programming, and studio production while exploring different genres and production techniques. They critically assess their strengths and artistic identity, refine their workflow, and analyze industry trends. The course includes hands-on projects, commercial music production, and monetization strategies, preparing learners for real-world industry demands. Business and branding modules equip them with marketing and self-promotion skills, culminating in a professional showcase, ensuring they are industry-ready for careers in music production and audio engineering.
              </p>
            </div>

            {/* Level 5 */}
            <div className="bg-white p-8 border-l-4 border-[#E53E3E] shadow-sm">
              <h2 className="text-2xl font-bold text-black uppercase tracking-wide mb-4">Level 5: Extended Diploma in Music Production</h2>
              <p className="text-sm text-[#E53E3E] font-bold tracking-widest mb-4">120 CREDITS</p>
              <p className="text-[#666666] leading-relaxed">
                Refines advanced recording, mixing, mastering, and sound design techniques, preparing learners for professional roles in the music industry. They develop expertise in vocal production, innovative production workflows, including MIDI programming tools to sound like live instruments, while exploring business strategies for monetizing their work. Collaborative projects, live showcases, and industry placements provide hands-on experience in studio production, commercial music, and artist development. Learners also focus on branding, marketing, and entrepreneurship, ensuring career sustainability. The program emphasizes self-care, financial planning, and industry adaptability, equipping graduates with the skills to excel in a competitive global music market.
              </p>
            </div>

            {/* Level 6 */}
            <div className="bg-white p-8 border-l-4 border-[#E53E3E] shadow-sm">
              <h2 className="text-2xl font-bold text-black uppercase tracking-wide mb-4">Level 6: BA (Hons) Top-up</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Level 6 BA (Hons) Top-up in Music Production & Sound Engineering, with one of our UK University partners most suitable for you. There are several pathways available, with a choice of validating universities, depending on your specific skills, needs and goals.
              </p>
              <p className="text-[#666666] leading-relaxed">
                Apply to study at a University in the UK for a year to complete the BA top-up. Tuition fees may be higher, and you will need a student visa.
              </p>
            </div>
            
          </div>
          
          <div className="mt-20 border-t border-gray-200 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Tuition Fees */}
            <div>
              <h3 className="text-xl font-bold text-black uppercase tracking-wide mb-4">Tuition Fees</h3>
              <p className="text-[#666666] leading-relaxed">
                £9,535 / $12,000 (USD) / €11,500 per part x 3 – aligned with UK university fees. Payment plans are available, but financial aid or student visas are not.
              </p>
            </div>

            {/* Schedule */}
            <div>
              <h3 className="text-xl font-bold text-black uppercase tracking-wide mb-4">Schedule</h3>
              <p className="text-[#666666] leading-relaxed">
                Two semesters, starting in September. Sessions run three days a week, 3 hours per day, with breaks for holidays.
              </p>
            </div>

            {/* Prerequisites */}
            <div>
              <h3 className="text-xl font-bold text-black uppercase tracking-wide mb-4">No Academic Prerequisites</h3>
              <p className="text-[#666666] leading-relaxed">
                No formal education is required, but you'll need an intermediate level of knowledge in your chosen field. All applicants must complete a phone interview.
              </p>
            </div>

            {/* International */}
            <div>
              <h3 className="text-xl font-bold text-black uppercase tracking-wide mb-4">International Students</h3>
              <p className="text-[#666666] leading-relaxed">
                Student visas are not available for this programme. However, it's designed to be flexible: up to 80% can be completed in person within 180 days, with the remaining 20% delivered online. This structure allows many students to attend via two 90-day visits on a tourist visa.
              </p>
            </div>

          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-black uppercase tracking-wide mb-6">Take the Next Step</h2>
            <p className="text-[#666666] mb-8 max-w-2xl mx-auto">
              This is your opportunity to fast-track your music journey on a pathway to a globally recognized Bachelor's Degree!
            </p>
            <a href="https://edu.garnishmusicproduction.com/ba" className="inline-block bg-[#E53E3E] text-white px-10 py-4 font-bold tracking-widest uppercase hover:bg-black transition-colors duration-300">
              CONNECT
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
