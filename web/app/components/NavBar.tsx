"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Beranda");

  const handleClick = (label: string, href: string) => {
    setActive(label);
    setOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

        {/* Logo */}
        <div className="text-xl font-bold text-black cursor-pointer">
          LOGO TOKO
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.label, item.href)}
              className={`transition-all duration-200 ${
                active === item.label
                  ? "font-bold text-black"
                  : "font-normal text-black/70"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white shadow-md">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.label, item.href)}
              className={`text-left transition-all duration-200 ${
                active === item.label
                  ? "font-bold text-black"
                  : "font-normal text-black/70"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
