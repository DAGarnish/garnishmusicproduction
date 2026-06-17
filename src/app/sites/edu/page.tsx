import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Partners from "@/components/Partners";

export const metadata = {
  title: "World-class Music Production, Sound Engineering & DJ School",
  description: "We're proud to present to you the world's boutique music production, sound engineering & electronic music DJ school in 8 locations, worldwide",
};

const locations = [
  {
    name: "San Francisco",
    href: "https://sf.garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2016/09/sf.jpg",
  },
  {
    name: "Los Angeles",
    href: "https://la.garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2016/09/la.jpg",
  },
  {
    name: "Nashville",
    href: "https://nsh.garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2016/09/nsh.jpg",
  },
  {
    name: "Miami",
    href: "https://mia.garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2016/09/Miami.jpg",
  },
  {
    name: "New York",
    href: "https://ny.garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2016/09/ny.jpg",
  },
  {
    name: "London",
    href: "https://garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2016/09/ldn.jpg",
  },
  {
    name: "Hong Kong",
    href: "https://hk.garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2016/10/hk.jpg",
  },
  {
    name: "Sydney",
    href: "https://syd.garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2023/02/Sydney-Opera-House-Garnish.jpeg",
  },
  {
    name: "Barcelona",
    href: "https://bcn.garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/Garnish-Music-Barcelona-scaled-e1741980124915.jpeg",
  },
  {
    name: "Lisbon",
    href: "https://lis.garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/lisbon-music-school-e1741980186682.png",
  },
  {
    name: "Houston",
    href: "https://edu.garnishmusicproduction.com/courses/houston/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/Houston-Music-School-scaled-e1741980289286.jpg",
  },
  {
    name: "Tokyo",
    href: "https://tyo.garnishmusicproduction.com/",
    image: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/03/Tokyo-Music-Production-School-scaled-e1741980342606.jpg",
  },
];



export default function EduHomePage() {
  return (
    <>
      <Header />
      <div className="pt-[88px] min-h-screen bg-white">

        {/* Location Grid */}
        <section className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {locations.map((loc) => (
              <a
                key={loc.name}
                href={loc.href}
                className="group relative block overflow-hidden aspect-square"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                {/* City Name Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-4 px-4">
                  <p className="text-white font-bold text-lg uppercase tracking-wider group-hover:text-[#E53E3E] transition-colors duration-300">
                    {loc.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* BA Hons Pathway Section */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Studio Image */}
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2025/05/Music-production-classes.jpg"
                alt="BA Hons Pathway Music Production"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right: Text Content */}
            <div className="bg-[#f4f4f4] flex flex-col justify-center p-10 md:p-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-6 leading-tight">
                BA (Hons) Pathway | Music Production
              </h2>
              <p className="text-[15px] text-[#555555] leading-relaxed mb-8">
                Launch your music journey with us — with our Level 4 and Level 5 BA (Hons) pathway courses. Choose from Music Production &amp; Sound Engineering, Songwriting &amp; Production, or Electronic Music Production — all awarded in London, one of the world&apos;s most iconic music and cultural hubs. You&apos;ll dive deep into recording, songwriting, vocal production, mixing, mastering, sound design, and advanced DAW workflows, while sharpening your branding and career strategies. Through real-world projects and peer collaboration, you&apos;ll graduate with a professional portfolio — and the skills to back it up.
              </p>
              <a
                href="https://bcn.garnishmusicproduction.com/ba-pathway-courses/"
                className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200 self-start"
              >
                See More
              </a>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <Partners />

      </div>
      <Footer />
    </>
  );
}
