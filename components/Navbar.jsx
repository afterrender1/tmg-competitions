// components/Navbar.jsx
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Montserrat, Nova_Flat } from "next/font/google";
const novaFlat = Nova_Flat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  
  // Desktop dropdown state + hover delay
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const navLinks = [
    {
      name: "Competitions",
      dropdown: true,
      items: [
        { name: "All Competitions", href: "/competitions" },
        { name: "Car & Bike Competitions", href: "/competitions/cars-bikes" },
        { name: "Cash Competitions", href: "/competitions/cash" },
        { name: "Instant Win Competitions", href: "/competitions/instant-win" },
      ],
    },
    { name: "Winners", href: "/winners" },
    { name: "Entry List", href: "/entry-list" },
    { name: "Results", href: "/results" },
    { name: "FAQs", href: "/faqs" },
  ];

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-5 left-0 right-0 mx-10  z-50">
        <div className="bg-black text-white rounded-full shadow-2xl border border-gray-800">
          <div className="flex items-center justify-between h-16 p-10">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-18">
                <Image
                  src="/logos/tmglogo.png"
                  alt="TMG Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center gap-8 text-lg font-semibold ${novaFlat.className}`}>
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    {/* Trigger */}
                    <button className="flex items-center gap-1 hover:text-gray-300 transition">
                      {link.name}
                      <ChevronDown size={16} className={`mt-0.5 transition ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-black border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-5 py-3 text-gray-300 hover:bg-white hover:text-black transition"
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
                    className="hover:text-gray-300 transition"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              {/* Cart */}
              <button className="relative p-2.5 bg-white text-black rounded-full hover:bg-gray-200 transition">
                <ShoppingCart size={18} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* User */}
              <button className="p-2.5 bg-white text-black rounded-full hover:bg-gray-200 transition">
                <User size={18} />
              </button>

              {/* Mobile Toggle */}
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

      {/* Spacer */}
      <div className="h-24" />
    </>
  );
}