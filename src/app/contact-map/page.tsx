"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin } from "lucide-react";

export default function ContactMapPage() {
  // Use relative path so it automatically stays on the current subdomain 
  // (e.g. if on bh.domain, it goes to bh.domain/connect/)
  const eduConnectUrl = "/connect/";

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Full-width Google Map — sits under the fixed header */}
      <section className="w-full" style={{ height: "500px", marginTop: "88px" }}>
        <iframe
          title="Garnish Music Production – London"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5!2d-0.0658!3d51.5289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cbdc5b87c5b%3A0x1a58c8a5d2d5e3b0!2s1%20Emma%20St%2C%20London%20E2%209FP%2C%20UK!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Content Section */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Left Column — Info */}
            <div className="flex flex-col gap-6 text-[#444444] text-[15px] leading-relaxed">
              <p>
                Please note, our BA (Hons) degree pathways are our only courses available in-person.
                You can view them on our{" "}
                <a
                  href="https://www.garnishmusicproduction.com"
                  className="text-[#E53E3E] underline hover:opacity-80 transition-opacity"
                >
                  homepage
                </a>
                .
              </p>
              <p>
                All other courses are now delivered online or one-to-one at one of our UK satellite
                locations, including London, Manchester, Cardiff, Margate, Brighton, and many more.
                Get in touch via this page to find out more.
              </p>
              <div className="flex items-start gap-3 mt-2">
                <MapPin className="text-[#E53E3E] mt-1 flex-shrink-0" size={20} />
                <p className="font-semibold text-[#333333]">
                  Garnish Music Production, 1 Emma Street, E2 9FP
                </p>
              </div>
            </div>

            {/* Right Column — CTA */}
            <div className="flex items-center justify-center md:justify-end">
              <a
                href={eduConnectUrl}
                className="bg-[#E53E3E] hover:bg-[#c53030] transition-colors text-white text-[16px] font-bold uppercase tracking-widest rounded-full px-10 py-5 shadow-lg"
              >
                Send Us A Message!
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Free Consultation floating widget */}
      <div className="fixed bottom-6 right-6 z-50 max-w-[280px] bg-white border border-gray-200 shadow-2xl rounded-lg overflow-hidden">
        <div className="bg-[#E53E3E] text-white text-center py-3 px-4">
          <p className="text-[13px] font-bold uppercase tracking-widest">
            FREE 15-Minute Consultation
          </p>
        </div>
        <div className="px-4 py-4">
          <p className="text-[12px] text-[#555555] leading-snug mb-4">
            Book a free 15-minute one-to-one phone consultation, with one of our friendly admissions
            specialists. Let&apos;s get your music moving!
          </p>
          <a
            href={eduConnectUrl}
            className="block text-center bg-[#E53E3E] hover:bg-[#c53030] text-white text-[12px] font-bold uppercase tracking-widest py-3 rounded transition-colors"
          >
            CLICK HERE
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
