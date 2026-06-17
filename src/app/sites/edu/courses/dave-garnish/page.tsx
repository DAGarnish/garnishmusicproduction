import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Dave Garnish - Garnish Music Production School",
  description: "About Dave Garnish",
};

export default function DaveGarnishPage() {
  return (
    <>
      <Header />
      <div className="pt-[88px] min-h-screen bg-white">
        {/* Top Hero Image */}
        <div 
          className="w-full h-[500px] md:h-[650px] bg-cover bg-center"
          style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2016/09/Dave-Air-Teenager-Calc-Test-1.jpeg')` }}
        />

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-[#333333] pb-24 pt-16">
          <h1 className="text-4xl font-bold mb-10 text-[#222222]">Dave Garnish</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2016/09/DG-800.jpg" 
                alt="Dave Garnish" 
                className="w-full object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 text-[15px] leading-relaxed text-justify">
              <p>
                Dave Garnish gained admission to the <a href="https://en.wikipedia.org/wiki/BRIT_School" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BRIT School</a> via audition on guitar. At that time he was also at the forefront of the London&apos;s pirate radio scene. Most notably, <a href="https://en.wikipedia.org/wiki/Don_FM" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Don FM</a>. In 1995, he established Blah Parties in a joiner&apos;s factory on Pitfield Street, playing a pivotal role in shaping the cultural scene of Shoreditch, London. His journey into the world of sound engineering commenced when <a href="https://en.wikipedia.org/wiki/George_Martin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sir George Martin</a> recruited him to work at <a href="http://www.airstudios.com/the-studios/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Air Lyndhurst Hall</a>. Progressing through the ranks, he transitioned to the EMI Studios Group, comprising <a href="https://en.wikipedia.org/wiki/Townhouse_Studios" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Townhouse</a>, Abbey Road, and <a href="https://en.wikipedia.org/wiki/Olympic_Studios" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Olympic Studios</a>, where he worked with artists such as Janet Jackson, Madonna, Bjork, All Saints, and Massive Attack. His work extended to collaborating with producers ranging from Andrew Lloyd Webber to Nellee Hooper. In 2001, Dave signed a songwriting publishing deal with Universal Music UK.
              </p>
              
              <blockquote className="border-l-4 border-[#E53E3E] pl-6 mt-10 mb-8 italic text-gray-700 bg-gray-50 py-4 pr-4">
                &quot;Dave Garnish was our in-house engineer, producer, then writer at Universal for a number of years. The quality of his work was always outstanding. He&apos;s smart, with an extensive knowledge of different types of music, and I&apos;m sure this will rub off on his education project&quot;
                <footer className="mt-2 font-semibold text-gray-900 not-italic">
                  — <a href="https://www.google.com/search?q=Mike+McCormack+Universal+Music&sxsrf=ALiCzsZVDwU9ioP3GLLLtHaluLMHgT3QTQ%3A1663532865788&ei=QX8nY6PTL5Kz5NoPjMSBoA8&ved=0ahUKEwjj96Xslp_6AhWSGVkFHQxiAPQQ4dUDCA4&uact=5&oq=Mike+McCormack+Universal+Music&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6CggAEEcQ1gQQsAM6BwgjELACECdKBAhBGABKBAhGGABQnQlYglVgjGtoAnABeACAAXeIAYYIkgEEMTAuNJgBAKABAcgBAsABAQ&sclient=gws-wiz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mike McCormack</a> – MD/President Universal Music UK
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
