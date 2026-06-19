"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function GiftCertificatePage() {
  const [amount, setAmount] = useState<string>("");

  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-[#E53E3E]/20 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="w-full pt-[88px]"
      >
        <div 
          className="w-full h-[450px] md:h-[550px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2022/12/Mike_Denta-1.png')` }}
        ></div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 flex-grow">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-[#666] leading-[1.8] text-[15px]">
            <p className="mb-8 max-w-3xl">
              For Gift Certificates, just let us know the name of the lucky recipient, the value you wish to put on the certificate, the email address of the recipient, and your message. We’ll do the rest!
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <label htmlFor="amount" className="font-bold text-[#333]">Amount</label>
                <select 
                  id="amount" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="border border-gray-300 px-4 py-2 bg-white text-[#333] focus:outline-none focus:border-[#E53E3E] transition-colors min-w-[150px]"
                >
                  <option value="">Choose an option</option>
                  <option value="250">250</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                  <option value="1500">1500</option>
                  <option value="2000">2000</option>
                  <option value="2500">2500</option>
                  <option value="5000">5000</option>
                  <option value="7500">7500</option>
                  <option value="10000">10000</option>
                </select>
              </div>

              <button 
                className={`px-8 py-3 font-bold tracking-widest uppercase transition-colors duration-300 ${
                  amount 
                    ? "bg-[#E53E3E] text-white hover:bg-black" 
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!amount}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
