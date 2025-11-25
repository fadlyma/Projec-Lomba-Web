"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Beranda", id: "beranda" },
  { label: "Tentang Kami", id: "tentang" },
  { label: "Galeri", id: "galeri" },
  { label: "Kontak", id: "kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Beranda");

  const handleScroll = (label: string, id: string) => {
    setActive(label);
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-14 h-20">

        {/* LOGO */}
        <div className="cursor-pointer select-none">
          <Image
            src="/images/WARUNG.PNG"
            alt="Logo Warung"
            width={110}
            height={110}
            priority
            className="object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.label, item.id)}
              className={`text-[15px] transition-all duration-300 tracking-wide
                ${
                  active === item.label
                    ? "text-black font-semibold"
                    : "text-gray-600 hover:text-black"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="md:hidden transition-all duration-200 active:scale-90"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-md overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.label, item.id)}
              className={`block w-full text-left py-2 text-[15px] transition-all duration-300
                ${
                  active === item.label
                    ? "font-semibold text-black"
                    : "font-medium text-gray-600 hover:text-black"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
