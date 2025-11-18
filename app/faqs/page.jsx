"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Montserrat, Nova_Flat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const novaFlat = Nova_Flat({
  subsets: ["latin"],
  weight: ["400"],
});

const faqs = [
  {
    q: "How do I enter a competition?",
    a: "Create a free account on tmgcompetitions.co.uk. Choose a competition, answer the skill-based question, select your tickets, and complete checkout. You’ll receive an email confirmation and ticket numbers will appear in your account.",
  },
  {
    q: "Is there a free entry option?",
    a: "Yes. Every competition includes a free postal entry route to comply with UK law. Full details are available in our Terms & Conditions.",
  },
  {
    q: "How are winners chosen?",
    a: "Winners are chosen at random using an independently verified random number generator. All draws are streamed live on our social channels.",
  },
  {
    q: "What happens if a competition doesn’t sell out?",
    a: "We may extend the draw date up to 3 times. If still not sold out, we may offer a cash alternative based on the percentage of tickets sold after admin/advertising deductions.",
  },
  {
    q: "How will I know if I’ve won?",
    a: "Winners are contacted within 24 hours by email (and phone when possible). Results are announced live and published on our site/socials.",
  },
  {
    q: "Do I need ID to claim a prize?",
    a: "Yes. Winners must be 18+, UK residents, and may be required to provide valid photo ID and proof of address.",
  },
  {
    q: "How do I collect my prize?",
    a: "Vehicles can be collected or sometimes delivered. Cash prizes are paid to a UK bank account. Other prizes are shipped to your registered UK address.",
  },
  {
    q: "What kinds of prizes do you offer?",
    a: "Performance vehicles, modified cars, cash prizes, automotive tech, limited items, and exclusive experiences.",
  },
  {
    q: "Are competitions fair?",
    a: "Yes. Ticket numbers are limited, a free entry route is available, and all draws are conducted live.",
  },
  {
    q: "Are you licensed?",
    a: "A gambling license is not required because these are skill-based prize draws with a free entry route, compliant under the Gambling Act 2005.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-white text-gray-900 px-6 py-30 lg:py-30 ${montserrat.className}`}>
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 ${novaFlat.className}`}>
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Everything you need to know about entering and winning with TMG Competitions
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto  space-y-5">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden  cursor-pointer hover:border-gray-300 transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-6 md:px-8 md:py-7  cursor-pointer flex items-center justify-between text-left group transition-all"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors pr-8">
                {item.q}
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-gray-600" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 md:px-8 pb-7 pt-2">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-600">
          Still have questions?{" "}
          <a href="/contact" className="text-black font-medium hover:text-gray-700 underline transition">
            Contact our team
          </a>
        </p>
      </div>
    </div>
  );
}