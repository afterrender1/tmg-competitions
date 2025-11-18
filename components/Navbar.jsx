"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  ChevronDown,
  Flame,
  Trophy,
  List,
  CheckSquare,
  HelpCircle,
  ShoppingBag
} from "lucide-react";
import { Montserrat, Nova_Flat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const novaFlat = Nova_Flat({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const mobileMenuRef = useRef(null);

  // nav links data
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

  useEffect(() => {
    // close mobile menu on escape
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMobileDropdown(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // close dropdown with slight delay so mouse can move into it
  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  // ensure body scroll lock when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      {/* NAV WRAPPER */}
      <nav
        className="
          fixed top-4 left-1/2 -translate-x-1/2 w-full
          max-w-[1500px]
          px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12
          z-50 pointer-events-none"
        aria-label="Main navigation container"
      >
        <div className="pointer-events-auto">
          {/* GLASSY NAV BAR */}
          <div
            className="
              bg-black/50 backdrop-blur-md text-white rounded-full shadow-2xl
              py-2 sm:py-2.5
            "
            role="navigation"
          >
            <div
              className="
                flex items-center justify-between
                h-14 sm:h-16
                px-2 sm:px-4 md:px-6 lg:px-8
              "
            >
              {/* LEFT: LOGO */}
              <div className="flex items-center shrink-0">
                <Link href="/" className="flex items-center">
                  <div
                    className="
                      relative
                      w-28 h-10
                      sm:w-32 sm:h-12
                      md:w-36 md:h-14
                      lg:w-40 lg:h-16
                      xl:w-44 xl:h-18
                    "
                    aria-hidden
                  >
                    <Image
                      src="/logos/tmglogo2.png"
                      alt="TMG Competitions"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>
              </div>

              {/* CENTER: NAV LINKS (hidden on small screens) */}
              <div
                className={`
                  hidden lg:flex items-center
                  gap-5 xl:gap-7 2xl:gap-9
                  text-sm md:text-base lg:text-lg xl:text-xl
                  font-semibold uppercase ${novaFlat.className}
                `}
              >
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                      onFocus={openDropdown}
                    >
                      <button
                        aria-haspopup="true"
                        aria-expanded={dropdownOpen}
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 transition"
                      >
                        <span style={{ color: "#ff6b35" /* small accent color for flame */ }}>
                          {link.icon}
                        </span>
                        <span>{link.name}</span>
                        <ChevronDown
                          size={14}
                          className={`mt-0.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* DROPDOWN */}
                      {dropdownOpen && (
                        <div
                          onMouseEnter={openDropdown}
                          onMouseLeave={closeDropdown}
                          role="menu"
                          className="
                            absolute left-1/2 -translate-x-1/2 mt-3 w-72 lg:w-80
                            bg-white text-black rounded-xl border border-gray-700 shadow-2xl overflow-hidden
                          "
                        >
                          {link.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="block px-5 py-3 text-sm lg:text-base hover:bg-black hover:text-white transition"
                              role="menuitem"
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
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 transition"
                    >
                      <span style={{ color: `${link.color || "currentColor"}` }}>{link.icon}</span>
                      <span className="hidden xl:inline">{link.name}</span>
                      <span className="xl:hidden">{link.name}</span>
                    </Link>
                  )
                )}
              </div>

              {/* RIGHT: ACTIONS */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                {/* CART */}
                <button
                  aria-label="Cart"
                  className="relative p-3 sm:p-3.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/20 hover:border-white/20 transition-all duration-300 shadow"
                >
                  <ShoppingBag className="w-5 h-5 text-white" strokeWidth={2.2} />
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 bg-linear-to-br from-red-500 to-rose-600 text-white text-xs font-bold rounded-full shadow-lg ring-1 ring-black/50">
                    0
                  </span>
                </button>

                {/* LOGIN (hidden on very small screens) */}
                <button
                  className={`hidden lg:flex items-center justify-center px-5 py-2.5 font-bold text-black bg-white rounded-full hover:scale-105 transition-all duration-200 tracking-wide ${montserrat.className}`}
                >
                  Login
                </button>

                {/* PROFILE ICON (small screens) */}
                <button
                  aria-label="Profile"
                  className="p-2.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/20 transition"
                >
                  <User className="w-5 h-5 text-white" />
                </button>

                {/* MOBILE TOGGLE */}
                <button
                  onClick={() => setMobileOpen((s) => !s)}
                  aria-expanded={mobileOpen}
                  aria-label="Toggle menu"
                  className="p-2.5  bg-white/10 lg:hidden backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/20 transition"
                >
                  {mobileOpen ? (
                    <X className="w-6 h-6 text-white" />
                  ) : (
                    <Menu className="w-6 h-6  text-white " />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU (full-screen drawer) */}
      <div
        ref={mobileMenuRef}
        className={`
          fixed inset-0 z-40 transform transition-all duration-300
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`
            absolute inset-0 bg-black/80 backdrop-blur-lg transition-opacity
            ${mobileOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => {
            setMobileOpen(false);
            setMobileDropdown(false);
          }}
        />

        <aside
          className={`
            fixed right-0 top-0 h-full w-full sm:w-[540px] max-w-[80%]
            bg-linear-to-b from-black/95 to-black/90 text-white p-6
            shadow-2xl overflow-y-auto
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          `}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
              <div className="relative w-36 h-12">
                <Image src="/logos/tmglogo2.png" alt="TMG" fill className="object-contain" />
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2.5 bg-white/10 rounded-full border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-1 text-lg font-medium">
            {/* Competitions with accordion */}
            <div>
              <button
                onClick={() => setMobileDropdown((s) => !s)}
                className="w-full flex items-center justify-between py-4 text-white border-b border-white/10"
                aria-expanded={mobileDropdown}
                aria-controls="mobile-competitions"
              >
                <span className="flex items-center gap-3">
                  <Flame className="text-red-500" />
                  Competitions
                </span>
                <ChevronDown className={`transition-transform ${mobileDropdown ? "rotate-180" : ""}`} />
              </button>

              {mobileDropdown && (
                <div id="mobile-competitions" className="py-3 pl-6 space-y-2 border-b border-white/10">
                  {navLinks[0].items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-200 hover:text-white py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            <div className="py-4">
              {navLinks.filter((l) => !l.dropdown).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-3 text-white hover:text-gray-200 border-b border-white/10"
                >
                  <span style={{ color: link.color }}>{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-4">
              <button className={`w-full py-3 font-bold bg-white text-black rounded-full ${montserrat.className}`} onClick={() => setMobileOpen(false)}>
                Login
              </button>
            </div>

            <div className="mt-6 text-sm text-white/70">
              <p>hello@tmgcompetitions.co.uk</p>
              <p className="mt-1">0330 043 5998</p>
            </div>
          </nav>

          {/* bottom spacing */}
          <div className="mt-8 text-xs text-white/60">
            © 2025 TMG Competitions – Company No: 11767558
          </div>
        </aside>
      </div>
    </>
  );
}
