import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Partners from "@/components/Partners";

export const metadata = {
  title: "World-class Music Production School in Barcelona | NOW OPEN",
  description:
    "Garnish Music Production School is now open in Barcelona. Learn music production, sound engineering & DJ courses in English in the heart of Europe.",
};

const programs = [
  {
    title: "UK A-level/Level 3 | Music Production",
    description:
      "Are you passionate about music production and want to be or stay in the UK education system? Look no further because we have an incredible opportunity for you! Introducing our exclusive program designed specifically for, who want to study music production in English and earn A-level/BTEC equivalent qualifications, globally recognised and regulated by Ofqual. This is your chance to combine your love for music with high-quality UK education.",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2025/05/Music-production-classes-1.jpg",
    link: "https://bcn.garnishmusicproduction.com/uk-a-level-3-course/",
    imageLeft: true,
  },
  {
    title: "360° Music Production Academy – Graded in London",
    description:
      "Our most comprehensive music production course available. Over the duration of the program you will study every aspect of modern music production — from sound design and synthesis to mixing, mastering, arrangement and beyond. All graded and validated by our London headquarters.",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2025/02/Calmtree-Music-Studio-A-Control-Room-3-scaled.jpeg",
    link: "https://bcn.garnishmusicproduction.com/academy/",
    imageLeft: false,
  },
  {
    title: "Ableton Music Producer Program",
    description:
      "This comprehensive Ableton Live Producer Program is perfect for those who want to learn music production from scratch or take their existing skills to the next level. You will learn everything from the basics of Ableton Live through to advanced production, sound design and mixing techniques.",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2018/02/Ableton-Live-10-production-course.jpg",
    link: "https://bcn.garnishmusicproduction.com/programs/ableton-producer/",
    imageLeft: true,
  },
  {
    title: "Logic Pro Music Producer Program",
    description:
      "Our Logic Pro Music Producer Program is ideal for Mac users who want to harness the power of Apple's industry-leading DAW. Through this comprehensive course you will cover everything from getting started in Logic Pro through to advanced music production, mixing and sound design.",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2018/03/Logic-Producer-Program.png",
    link: "https://bcn.garnishmusicproduction.com/programs/logic-producer/",
    imageLeft: false,
  },
];

const shortCourses = [
  {
    name: "Ableton Live Production",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2017/07/Ableton-Live-11.jpg",
    link: "https://bcn.garnishmusicproduction.com/courses/ableton-live-course/",
  },
  {
    name: "Pro Tools",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2017/07/otto-pro.jpg",
    link: "https://bcn.garnishmusicproduction.com/courses/pro-tools101-course/",
  },
  {
    name: "The Art of Mixing & Mastering",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2017/07/Mixing.jpg",
    link: "https://bcn.garnishmusicproduction.com/courses/mixing-mastering-course/",
  },
  {
    name: "Electronic Music Production",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2017/07/sound-design-short.jpg",
    link: "https://bcn.garnishmusicproduction.com/courses/electronic-music-emp/",
  },
  {
    name: "Hip Hop Production Course",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2018/06/Hip-Hop-Production-Course.jpg",
    link: "https://bcn.garnishmusicproduction.com/courses/hip-hop-course/",
  },
  {
    name: "Ibiza DJ Bootcamp",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2025/06/Ibiza-Boot-camp.jpg",
    link: "https://bcn.garnishmusicproduction.com/courses/ibiza-dj-bootcamp/",
  },
  {
    name: "Hit Songwriting",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2017/07/Ableton-Live-11.jpg",
    link: "https://bcn.garnishmusicproduction.com/courses/songwriting/",
  },
  {
    name: "Composition",
    image:
      "https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2017/07/sound-design-short.jpg",
    link: "https://bcn.garnishmusicproduction.com/courses/composition/",
  },
];

export default function BcnHomePage() {
  return (
    <>
      <Header />
      <div className="pt-[88px] min-h-screen bg-white">

        {/* Hero Section */}
        <section
          className="relative w-full h-[420px] md:h-[520px] bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "url('https://bcn.garnishmusicproduction.com/wp-content/uploads/sites/30/2025/08/fotor_2023-6-7_15_51_12-scaled.png')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
            <div className="bg-[#E53E3E] inline-block px-6 py-4 mb-4">
              <h1 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wider leading-tight">
                Learn To Produce The Music You Love in English
              </h1>
            </div>
            <p className="text-white text-lg md:text-xl font-semibold tracking-widest uppercase mt-4">
              The World&apos;s Boutique Music Production School | Barcelona
            </p>
          </div>
        </section>

        {/* Programs Section */}
        {programs.map((program, idx) => (
          <section key={idx} className="w-full">
            <div className={`grid grid-cols-1 md:grid-cols-2 ${!program.imageLeft ? "md:[&>*:first-child]:order-2" : ""}`}>
              {/* Image */}
              <div className="relative min-h-[300px] md:min-h-[400px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text */}
              <div className="bg-[#f4f4f4] flex flex-col justify-center p-10 md:p-14">
                <h2 className="text-xl md:text-2xl font-bold text-[#222222] mb-5 leading-tight">
                  {program.title}
                </h2>
                <p className="text-[15px] text-[#555555] leading-relaxed mb-8">
                  {program.description}
                </p>
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200 self-start"
                >
                  See More
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* Short Courses Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center uppercase tracking-widest text-[#222] mb-12">
              Shorter Music Production, DJ &amp; Sound Engineering Courses
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {shortCourses.map((course) => (
                <a
                  key={course.name}
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  </div>
                  <p className="text-[14px] font-bold uppercase tracking-wide text-[#222] group-hover:text-[#E53E3E] transition-colors duration-200">
                    {course.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* BA Hons Pathway Banner */}
        <section className="w-full bg-[#222222] py-16 px-6 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6">
            BA (Hons) Pathway Courses
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-[15px] leading-relaxed mb-8">
            Launch your music journey with our Level 4 and Level 5 BA (Hons) pathway courses. Choose from Music Production &amp; Sound Engineering, Songwriting &amp; Production, or Electronic Music Production — all awarded in London.
          </p>
          <a
            href="https://bcn.garnishmusicproduction.com/ba-pathway-courses/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold uppercase tracking-widest text-sm px-10 py-4 transition-colors duration-200"
          >
            Learn More
          </a>
        </section>

        {/* Partners Section */}
        <Partners />

      </div>
      <Footer />
    </>
  );
}
