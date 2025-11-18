"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram, TikTok } from "lucide-react";
import { Montserrat, Nova_Flat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });
const novaFlat = Nova_Flat({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <footer className={`bg-black/80 backdrop-blur-lg text-white py-12 px-6 md:px-12 rounded-2xl mx-4 mb-4 shadow-lg border border-white/20 ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo */}
        <div className="flex flex-col items-start">
          <Image
            src="/logos/tmglogo2.png"
            alt="TMG Competitions Logo"
            width={160}
            height={60}
            className="mb-4"
          />
          <p className="text-white/70 text-sm">
            © 2025 TMG Competitions – Company No: 11767558
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className={`text-white font-semibold mb-4 ${novaFlat.className}`}>FOLLOW US ON</h3>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-orange-400 transition">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-orange-400 transition">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-orange-400 transition">
              {/* <TikTok size={24} /> */}
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className={`text-white font-semibold mb-4 ${novaFlat.className}`}>PAYMENT METHODS</h3>
          <div className="">
            <Image src="/images/pm.png" alt="Visa" width={250} height={40} />
        
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className={`text-white font-semibold mb-4 ${novaFlat.className}`}>CONTACT US</h3>
          <p className="text-white/70 text-sm">hello@tmgcompetitions.co.uk</p>
          <p className="text-white/70 text-sm mt-1">0330 043 5998</p>

          <div className="mt-6 flex flex-col gap-2 text-white/70 text-sm">
            <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-orange-400 transition">About Us</a>
          </div>
        </div>

      </div>

      {/* Bottom Divider */}
      <div className="mt-8 border-t border-white/20 pt-4 text-white/60 text-xs text-center">
        Designed & Built by AfterRender
      </div>
    </footer>
  );
}
