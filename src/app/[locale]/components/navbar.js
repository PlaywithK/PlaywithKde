"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const navItems = [
    { label: "Startseite", href: "/" },
    { label: "Projekte", href: "/projekte" },
    { label: "PWK Entertainment", href: "/pwkentertainment" },
    { label: "FAQ", href: "/faq" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-gray-900 bg-opacity-90 flex justify-between items-center px-6 py-4 border-b border-gray-700">
      <div className="text-2xl font-bold text-white">PlaywithK.de</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 list-none">
        {navItems.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="relative text-gray-100 hover:text-teal-400 transition-colors duration-300 group"
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button
        className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-full bg-white rounded transition-transform duration-300 origin-left ${
            menuOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        />
        <span
          className={`block h-1 w-full bg-white rounded transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-1 w-full bg-white rounded transition-transform duration-300 origin-left ${
            menuOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg border border-gray-700 flex flex-col list-none z-50">
          {navItems.map(({ label, href }) => (
            <li key={label} className="border-b last:border-b-0 border-gray-700">
              <Link
                href={href}
                className="block px-4 py-3 text-gray-100 hover:bg-teal-600 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}