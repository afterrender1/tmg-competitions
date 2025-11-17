"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart, User, ChevronDown, Flame, Trophy, List, CheckSquare, HelpCircle } from "lucide-react";
import { Nova_Flat } from "next/font/google";

const novaFlat = Nova_Flat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

const navLinks = [
  {
    icon: <Flame />,
    name: "Competitions",
    dropdown: true,
    items: [
      { name: "All Competitions", href: "/competitions" },
      { name: "Car & Bike Competitions", href: "/competitions/cars-bikes" },
      { name: "Cash Competitions", href: "/competitions/cash" },
      { name: "Instant Win Competitions", href: "/competitions/instant-win" },
    ],
  },
  { icon: <Trophy />, color: "#ffd900", name: "Winners", href: "/winners" },
  { icon: <List />, color: "#4a86ff", name: "Entry List", href: "/entry-list" },
  { icon: <CheckSquare />, color: "#009c0a", name: "Results", href: "/results" },
  { icon: <HelpCircle />, color: "#ce2be3", name: "FAQs", href: "/faqs" },
];

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-5 left-0 right-0 mx-10 z-50">
        <div className="bg-black/50 text-white rounded-full shadow-2xl  backdrop-blur-md">
          <div className="flex items-center justify-between h-16 p-5 md:p-10">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-18">
                <Image
                  src="/logos/tmglogo2.png"
                  alt="TMG Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center gap-8 text-lg font-semibold uppercase ${novaFlat.className}`}>
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <button className="flex items-center gap-1 hover:text-gray-300 transition">
                       <span className="text-red-700">
                         {link.icon}
                       </span>
                      {link.name}
                      <ChevronDown size={16} className={`mt-0.5 transition ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-5 py-3 text-black hover:bg-black hover:text-white transition"
                          >
                            
                          {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-gray-300 transition flex justify-center items-center gap-2"
                  >
                    <span style={{color : `${link.color}`}}>
                        {link.icon}
                    </span>
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <button className="relative p-2.5 bg-white text-black rounded-full hover:bg-gray-200 transition">
                <ShoppingCart size={18} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              <button className="p-2.5 bg-white text-black rounded-full hover:bg-gray-200 transition">
                <User size={18} />
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white p-2"
              >
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 pt-24 px-6 lg:hidden">
          <div className="flex flex-col gap-6 text-lg font-medium">
            {/* Mobile Competitions Dropdown */}
            <div>
              <button
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className="flex items-center justify-between w-full py-3 text-white border-b border-gray-800"
              >
                Competitions
                <ChevronDown
                  size={20}
                  className={`transition ${mobileDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {mobileDropdown && (
                <div className="py-4 pl-4 space-y-3 border-b border-gray-800">
                  {navLinks[0].items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileDropdown(false);
                      }}
                      className="block text-gray-300 hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            {navLinks.filter(l => !l.dropdown).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-white hover:text-gray-300 transition border-b border-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
