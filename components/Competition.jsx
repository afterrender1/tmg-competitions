"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat, Nova_Flat, Poppins } from "next/font/google";

const novaFlat = Nova_Flat({
    subsets: ["latin"],
    weight: ["400"],
});
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["500"],
});
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400"],
});

const competitions = [
  {
    id: 1,
    type: "cars-bikes",
    name: "TMG MK4 CADDY DSG KOMBI HIGHLINE",
    prize: "£1.97",
    altPrize: "£18,000 CASH ALTERNATIVE",
    progress: 25.19,
    drawDate: new Date("2025-12-01T12:00:00"),
    drawDay: "MON 1ST DEC",
    image: "/images/bg2.png",
  },
  {
    id: 2,
    type: "cash",
    name: "£25,000 TAX-FREE CASH",
    prize: "£5.00",
    altPrize: "INSTANT £25K WIN",
    progress: 68.4,
    drawDate: new Date("2025-11-25T20:00:00"),
    drawDay: "TUE 25TH NOV",
    image: "/images/poundcash.png",
  },
  {
    id: 3,
    type: "instant-win",
    name: "£10,000 INSTANT WIN JACKPOT",
    prize: "£2.00",
    altPrize: "1000+ INSTANT PRIZES",
    progress: 42.7,
    drawDate: new Date("2025-11-30T18:00:00"),
    drawDay: "SUN 30TH NOV",
    image: "/images/bg3p.png",
  },
];

const tabs = [
  { name: "All Competitions", type: "all" },
  { name: "Cars & Bikes", type: "cars-bikes" },
  { name: "Cash", type: "cash" },
  { name: "Instant Wins", type: "instant-win" },
];

export default function Competition() {
  const [activeTab, setActiveTab] = useState("all");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredCompetitions =
    activeTab === "all"
      ? competitions
      : competitions.filter((c) => c.type === activeTab);

  const getTimeRemaining = (endDate) => {
    const total = endDate.getTime() - now.getTime();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  return (
    <>
      {/* Header Section */}
      <div className={`w-full py-12 sm:py-16 md:py-20 bg-white text-gray-900 ${poppins.className}`}>
        <div className="relative text-center px-4">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="bg-black bg-clip-text text-transparent">
              ONGOING COMPETITIONS
            </span>
          </h1>

          {/* Underline */}
          <div className="mt-4 flex justify-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "min(45%, 400px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-1 bg-black rounded-full"
            />
          </div>

          {/* Tagline */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-600 tracking-wide">
            Live Draws • Real Winners • Every Week
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.type}
                onClick={() => setActiveTab(tab.type)}
                className={`px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 border border-black/10 hover:border-black/90 whitespace-nowrap
                  ${
                    activeTab === tab.type
                      ? "bg-black text-white shadow-xl"
                      : "bg-white text-black hover:bg-gray-50"
                  } ${montserrat.className}`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCompetitions.map((c, i) => {
              const time = getTimeRemaining(c.drawDate);

              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-60 sm:h-56 lg:h-70 w-full overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={i < 3}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold border border-zinc-700">
                    DRAW {c.drawDay}
                  </div>
                  </div>

                  <div className={`p-5 sm:p-6 space-y-4 ${montserrat.className}`}>
                    {/* Countdown */}
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { value: time.days, label: "Days" },
                        { value: time.hours, label: "Hrs" },
                        { value: time.minutes, label: "Mins" },
                        { value: time.seconds, label: "Secs" },
                      ].map((t, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-zinc-800 rounded-lg px-2 py-2.5">
                          <span className="text-base sm:text-lg font-bold text-white">
                            {t.value.toString().padStart(2, "0")}
                          </span>
                          <span className="text-xs text-zinc-400">{t.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Prize */}
                    <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                      {c.prize}
                      <span className="text-sm text-zinc-500 ml-2">per ticket</span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-base sm:text-lg font-semibold line-clamp-2 text-black leading-tight ${novaFlat.className}`}>
                      {c.name}
                    </h3>

                    {/* Alt Prize */}
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">{c.altPrize}</p>

                    {/* Progress Bar */}
                    <div>
                      <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${c.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, ease: "easeOut" }}
                          className="h-full bg-linear-to-r from-orange-500 to-red-600"
                        />
                      </div>
                      <p className="text-xs text-zinc-500 text-right mt-1">{c.progress}% Entered</p>
                    </div>

                    {/* Enter Button */}
                    <button className="w-full py-3.5 bg-black text-white rounded-lg font-bold hover:bg-zinc-900 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
                      ENTER NOW
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}