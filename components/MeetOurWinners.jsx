"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

// Winner Data
const winners = [
  {
    id: 1,
    title: "TMG VIRTUAL Cockpit!",
    winner: "Ben / Barrow In Furness",
    ticket: "399",
    date: "August 7, 2025",
    time: "7 PM",
    image: "/images/winner1.png",
  },
  {
    id: 2,
    title: "TMG Virtual Cockpit Round 2",
    winner: "Connor / Weymouth",
    ticket: "592",
    date: "August 7, 2025",
    time: "7 PM",
    image: "/images/winner1.png",
  },
  {
    id: 3,
    title: "£100 Bonus Competition",
    winner: "Adam / Salisbury",
    ticket: "795",
    date: "August 7, 2025",
    time: "7 PM",
    image: "/images/winner2.png",
  },
  {
    id: 4,
    title: "TMG Virtual Cockpit Round 3",
    winner: "David / Workington",
    ticket: "183",
    date: "August 8, 2025",
    time: "7 PM",
    image: "/images/winner1.png",
  },
];

export default function MeetOurWinners() {
  return (
    <div className={`w-full py-24 bg-white text-black ${poppins.className}`}>
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          OUR LATEST <span className="text-black">WINNERS</span>
        </h1>

        {/* underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "30%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-1 bg-black rounded-full mx-auto mt-4"
        />

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Real players. Real prizes. Every week our lucky winners take home amazing rewards!
        </p>
      </div>

      {/* Winner Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 select-none">
        {winners.map((w, i) => (
          <motion.div
            key={w.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-70">
              <Image
                src={w.image}
                alt={w.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-7 space-y-4">
              {/* Title */}
              <h3 className={`text-xl font-bold text-black leading-snug ${montserrat.className}`}>
                {w.title}
              </h3>

              {/* Winner Name */}
              <p className="text-base font-semibold text-gray-800">
                {w.winner}
              </p>

              {/* Ticket Number */}
              <p className="text-sm text-gray-600">
                <strong>Ticket Number:</strong> {w.ticket}
              </p>

              {/* Date + Time */}
              <p className="text-sm text-gray-600">
                <strong>Drawn:</strong> {w.date} — {w.time}
              </p>
            </div>
          </motion.div>
        ))}


      </div>
<div className="flex justify-center mt-12 ">
  <button className="px-8 py-3 border-2 uppercase border-black text-black rounded-full text-lg font-semibold cursor-pointer duration-300 tracking-wide hover:bg-black hover:text-white transition-all">
    See All Winners
  </button>
</div>

    </div>
  );
}
