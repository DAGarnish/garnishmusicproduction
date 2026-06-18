import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Music Production Courses Berlin | Garnish",
  description: "Learn music production, DJing & songwriting in Berlin. Join expert-led courses & take your skills to the next level."
};

export default function BerHomePage() {
  const locationTitle = "Music Production Courses Berlin";
  const subdomain = "ber";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black pt-[88px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url("https://www.garnishmusicproduction.com/wp-content/uploads/2022/06/Worlds-boutique-Music-Production-School-scaled.jpg")' }}
        />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-[1200px] px-4 text-center">
          <div className="bg-[#E53E3E] text-white px-8 py-6 mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider leading-tight">
              {locationTitle}
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl text-gray-200 font-bold tracking-widest uppercase">
            The World's Boutique Music Production School
          </h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest">Coming Soon to {subdomain.toUpperCase()}</h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-lg leading-relaxed">
            We are actively expanding our curriculum to this location. Please check back later for our complete list of BA (Hons) Pathways and shorter tactical courses in this area.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
