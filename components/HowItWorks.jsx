"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Ticket, HelpCircle, PlayCircle } from "lucide-react";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const steps = [
  {
    id: 1,
    title: "ONGOING COMPETITIONS",
    desc: "Browse our competitions and decide which reward excites you most. Check what’s available today and start entering now.",
    icon: <CheckCircle size={34} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: "PICK YOUR TICKETS",
    desc: "Select how many tickets you’d like to buy. More tickets = higher winning chances!",
    icon: <Ticket size={34} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: "ANSWER THE QUESTION",
    desc: "Answer the qualifying question. A correct answer secures your entry instantly!",
    icon: <HelpCircle size={34} strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: "WATCH THE LIVE DRAW",
    desc: "Follow us on TikTok, Instagram, or Facebook. Stay connected and watch winners announced live!",
    icon: <PlayCircle size={34} strokeWidth={1.5} />,
  },
];

export default function HowItWorks() {
  return (
    <div className={`w-full py-20 bg-white text-black ${poppins.className}`}>
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          HOW IT <span className="text-black">WORKS</span>
        </h1>

        {/* underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "40%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-1 bg-black rounded-full mx-auto mt-4"
        />

        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Entering competitions has never been easier — follow these simple steps!
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-white border border-gray-300 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-2xl mb-5">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className={`text-xl font-bold mb-3 ${montserrat.className}`}>
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
