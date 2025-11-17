"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Ticket, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Montserrat, Nova_Flat } from "next/font/google";
const novaFlat = Nova_Flat({
  subsets: ["latin"],
  weight: ["400"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});


export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image + Dark Luxury Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/ticketbg2.jpg"
          alt="Lottery Background"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Main Content Grid */}
      <div className="relative h-full grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT: Text + CTA */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-32 text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit">
              <Ticket className="w-4 h-4 text-[#ffd900]" />
              <span>Live Draws • Guaranteed Winners</span>
            </div>

            {/* Main Title */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none ${novaFlat.className}`}>
              Win Your 
              <span className="block text-[#929292]">Dream Car</span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-zinc-400">
                Starting at Just £0.99
              </span>
            </h1>

            <p className={`mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed ${montserrat.className}` }>
              Join over 2.3 million winners. Every ticket gives you a real chance to drive away in a luxury supercar — 
              Mercedes, Lamborghini, Porsche & more.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap items-center gap-4 mt-10 ${montserrat.className}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-[#929292] text-white font-bold text-lg px-10 py-5 rounded-full shadow-lg cursor-pointer hover:shadow-blue-500/40 transition-all"
              >
                BUY TICKETS NOW
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
              </motion.button>

              <button className="inline-flex items-center gap-3 text-white font-medium hover:text-orange-400 transition">
                View All Prizes
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Section */}
            <div className={`flex items-center gap-6 mt-12 ${montserrat.className}` }>
              <div className="flex -space-x-3">
                {["/images/user1.jpg", "/images/user2.jpg", "/images/user3.jpg", "/images/user4.jpg"].map((src, i) => (
                  <div key={i} className="relative">
                    <Image
                      src={src}
                      alt="Winner"
                      width={56}
                      height={56}
                      className="rounded-full border-4 border-black object-cover ring-2 ring-white/20"
                    />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg border-4 border-black">
                  +2M
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-400" />
                  <span className="font-bold text-xl">2.3M+</span>
                </div>
                <p className="text-sm text-zinc-400">Happy Winners Worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Featured Prize Car */}
    <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
  className="relative hidden lg:flex lg:flex-col lg:gap-4" // flex column
>
  <div className="absolute inset-0 bg-linear-to-l from-transparent via-black/20 to-black/80" />

  {/* Images container */}
<div className="flex flex-col lg:flex-col gap-4 relative z-10 cursor-pointer">
  {/* First Image */}
  <div className="relative group rounded-2xl overflow-hidden">
    <Image
      src="/images/bg2.png"
      alt="Current Prize Car"
      height={200}
      width={1400}
      className="object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
    />
    {/* Overlay on hover */}
    <div className="absolute inset-0 bg-[#929292]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white p-4">
      <h3 className="text-xl font-bold">Prize Name 1</h3>
      <p className="text-sm mt-2">Some details about this prize.</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        View Details
      </button>
    </div>
  </div>

  {/* Second Image */}
  <div className="relative group rounded-2xl overflow-hidden">
    <Image
      src="/images/bg.png"
      alt="Second Prize Car"
      height={200}
      width={1400}
      className="object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
    />
    {/* Overlay on hover */}
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white p-4">
      <h3 className="text-xl font-bold">Prize Name 2</h3>
      <p className="text-sm mt-2">Some details about this prize.</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        View Details
      </button>
    </div>
  </div>
</div>


  {/* Floating Prize Card */}
</motion.div>

      </div>

      {/* Mobile Prize Teaser */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 p-6">
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
          <p className="text-orange-400 text-sm font-bold">CURRENT PRIZE</p>
          <h3 className="text-2xl font-black">Porsche 911 Turbo S</h3>
          <p className="text-lg font-bold mt-2">£24.99 per ticket • 82% sold</p>
        </div>
      </div>
    </section>
  );
}