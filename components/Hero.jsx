"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Ticket, Globe, Gift, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Montserrat, Nova_Flat } from "next/font/google";

const novaFlat = Nova_Flat({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const float = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
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

      <div className="relative h-full grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT: Text + CTA */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-32 text-white z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >

            {/* Badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
                <Ticket className="w-4 h-4 text-[#ffd900]" />
                <span>Live Draws • Guaranteed Winners</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none ${novaFlat.className}`}
            >
              Win Your 
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block text-[#929292]"
              >
                Dream Car
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-4xl md:text-5xl lg:text-6xl font-light text-zinc-400"
              >
                Starting at Just £0.99
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className={`text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed ${montserrat.className}`}
            >
              Join over 2.3 million winners. Every ticket gives you a real chance to drive away in a luxury supercar — 
              Mercedes, Lamborghini, Porsche & more.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className={`flex flex-wrap items-center gap-4 ${montserrat.className}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 cursor-pointer bg-[#929292] text-white font-bold text-lg px-10 py-5 rounded-full shadow-sm hover:shadow-[#929292]/50 transition-all duration-300"
              >
                BUY TICKETS NOW
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
              </motion.button>

              <motion.button
                whileHover={{ x: 8 }}
                className="inline-flex items-center gap-3 text-white font-medium hover:text-[#FFD900] transition cursor-pointer"
              >
                View All Prizes
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Trust Section */}
            <motion.div variants={fadeUp} className={`flex items-center gap-6 ${montserrat.className}`}>

              {/* Avatars */}
              <motion.div
                variants={float}
                animate="animate"
                className="flex -space-x-3 items-center"
              >
                {["/images/user1.jpg", "/images/user2.jpg", "/images/user3.jpg", "/images/user4.jpg"].map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Image
                      src={src}
                      alt="Winner"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-black object-cover ring-1 ring-white/20"
                    />
                  </motion.div>
                ))}
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-yellow-600 to-yellow-600 flex items-center justify-center text-white font-bold text-sm border-2 border-black">
                  100+
                </div>
              </motion.div>

              {/* Stats */}
              <div className="flex gap-4">
                {[
                  { Icon: Globe, color: "text-blue-500", value: "300k+", label: "Followers" },
                  { Icon: Gift, color: "text-green-600", value: "100+", label: "Prizes" },
                  { Icon: Trophy, color: "text-yellow-300", value: "£10k+", label: "Won" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center px-3 py-2 bg-[#1f1f1f] rounded-xl border-[0.5px] border-gray-600"
                  >
                    <span className="font-bold text-lg flex justify-center items-center gap-2">
                      <stat.Icon className={stat.color} />
                      {stat.value}
                    </span>
                    <p className="text-xs text-zinc-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* RIGHT: Prize Images */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative hidden lg:flex lg:flex-col lg:gap-8 justify-end px-10"
        >
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-black/20 to-black/80" />

          <div className="relative z-10 space-y-4 mb-3">
            {/* First Image */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/bg2.png"
                alt="Current Prize Car"
                height={200}
                width={850}
                className="object-contain rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white p-4"
              >
                <h3 className={`text-xl font-extrabold uppercase ${montserrat.className}`}>Competition coming soon</h3>
                <p className={`text-sm mt-2 ${montserrat.className}`}>Some details about this prize.</p>
                <button className={`mt-4 px-4 py-2 bg-[#929292] hover:bg-[#a0a0a0] transition-colors duration-300 rounded-full cursor-pointer ${montserrat.className}`}>
                  View Details
                </button>
              </motion.div>
            </motion.div>

            {/* Second Image */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/bg.png"
                alt="Second Prize Car"
                height={200}
                width={850}
                className="object-contain rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white p-4"
              >
                <h3 className={`text-xl font-bold uppercase ${montserrat.className}`}>Competition coming soon</h3>
                <p className="text-sm mt-2">Some details about this prize.</p>
                <button className={`mt-4 px-4 py-2 bg-[#929292] hover:bg-[#a0a0a0] transition-colors duration-300 rounded-full cursor-pointer ${montserrat.className}`}>
                  View Details
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Teaser */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="lg:hidden absolute bottom-0 left-0 right-0 p-6"
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
          <p className="text-orange-400 text-sm font-bold">CURRENT PRIZE</p>
          <h3 className="text-2xl font-black">Porsche 911 Turbo S</h3>
          <p className="text-lg font-bold mt-2">£24.99 per ticket • 82% sold</p>
        </div>
      </motion.div>
    </section>
  );
}