"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Partners from "@/components/Partners";
import { Send } from "lucide-react";

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] font-sans selection:bg-purple-500/30">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-88px)] w-full flex items-center justify-center overflow-hidden bg-black mt-[88px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: 'url("https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2021/10/Ableton-Live-10-typewriter-scaled.jpg")' }}
        />
        
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="bg-[#E53E3E] text-white px-10 py-8 shadow-2xl rounded-sm transform -rotate-1">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider leading-tight">
              Hello!
            </h1>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-sm">
            
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-[#333333] mb-4 uppercase tracking-widest">Connect With Us</h2>
              <p className="text-gray-600 text-sm">Please fill out the form below to get in touch with our admissions team. Let's get your music moving.</p>
            </div>

            <form className="space-y-6 flex flex-col">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-[#333333] uppercase">First Name *</label>
                  <input type="text" className="w-full border border-gray-300 p-3 bg-[#fdfdfd] focus:border-[#E53E3E] focus:outline-none transition-colors" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-[#333333] uppercase">Last Name *</label>
                  <input type="text" className="w-full border border-gray-300 p-3 bg-[#fdfdfd] focus:border-[#E53E3E] focus:outline-none transition-colors" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-[#333333] uppercase">Email *</label>
                  <input type="email" className="w-full border border-gray-300 p-3 bg-[#fdfdfd] focus:border-[#E53E3E] focus:outline-none transition-colors" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-[#333333] uppercase">Phone *</label>
                  <input type="tel" className="w-full border border-gray-300 p-3 bg-[#fdfdfd] focus:border-[#E53E3E] focus:outline-none transition-colors" required />
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <label className="text-[13px] font-bold text-[#333333] uppercase">Connect Location *</label>
                <select className="w-full border border-gray-300 p-3 bg-[#fdfdfd] focus:border-[#E53E3E] focus:outline-none transition-colors" required>
                  <option value="">Select a location</option>
                  <option value="london">London</option>
                  <option value="la">Los Angeles</option>
                  <option value="ny">New York</option>
                  <option value="mia">Miami</option>
                  <option value="bcn">Barcelona</option>
                  <option value="ber">Berlin</option>
                  <option value="hk">Hong Kong</option>
                  <option value="lis">Lisbon</option>
                  <option value="sf">San Francisco</option>
                  <option value="online">Online / World Home</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#333333] uppercase">I'm most interested in...</label>
                <select className="w-full border border-gray-300 p-3 bg-[#fdfdfd] focus:border-[#E53E3E] focus:outline-none transition-colors">
                  <option value="">Please select</option>
                  <option value="ba">BA (Hons) Degree Pathway</option>
                  <option value="diploma">Industry Diploma</option>
                  <option value="emp">Electronic Music Producer Program</option>
                  <option value="short">Short Courses (Ableton, Logic, Mixing)</option>
                  <option value="private">Private Tuition</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#333333] uppercase">DAW Preference</label>
                <select className="w-full border border-gray-300 p-3 bg-[#fdfdfd] focus:border-[#E53E3E] focus:outline-none transition-colors">
                  <option value="">Please select</option>
                  <option value="ableton">Ableton Live</option>
                  <option value="logic">Logic Pro</option>
                  <option value="fl">FL Studio</option>
                  <option value="protools">Pro Tools</option>
                  <option value="other">Other / Not sure</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#333333] uppercase">I prefer to learn</label>
                <select className="w-full border border-gray-300 p-3 bg-[#fdfdfd] focus:border-[#E53E3E] focus:outline-none transition-colors">
                  <option value="">Please select</option>
                  <option value="inperson">In Person</option>
                  <option value="online">Online Interactive</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#333333] uppercase">How did you hear about us?</label>
                <select className="w-full border border-gray-300 p-3 bg-[#fdfdfd] focus:border-[#E53E3E] focus:outline-none transition-colors">
                  <option value="">Please select</option>
                  <option value="google">Google Search</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="youtube">YouTube</option>
                  <option value="friend">Word of Mouth / Friend</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <label className="text-[13px] font-bold text-[#333333] uppercase">Message / Questions</label>
                <textarea rows={5} className="w-full border border-gray-300 p-3 bg-[#fdfdfd] focus:border-[#E53E3E] focus:outline-none transition-colors" placeholder="Tell us a bit about your musical background and what you want to achieve..."></textarea>
              </div>

              <div className="pt-6">
                <button type="button" className="w-full bg-[#E53E3E] hover:bg-[#c53030] transition-colors text-white text-[15px] font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 rounded-sm shadow-md">
                  Submit <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      <Footer />
    </div>
  );
}
