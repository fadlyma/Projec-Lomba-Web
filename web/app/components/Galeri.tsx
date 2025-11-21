"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/galeri1.jpg",
  "/images/galeri2.jpg",
  "/images/galeri3.jpg",
];

export default function GaleriPage() {
  const [current, setCurrent] = useState(0);

  // Auto slide setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section
      id="galeri"
      className="w-full min-h-screen flex flex-col items-center bg-white px-6 md:px-12 py-16"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        Galeri
      </h1>

      <div className="relative w-full max-w-4xl h-[280px] md:h-[420px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">

        {/* Tombol Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-20"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Tombol Next */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-20"
        >
          <ChevronRight size={28} />
        </button>

        {/* Slider */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={images[current]}
                alt={`Galeri ${current + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicator Bulatan */}
      <div className="flex gap-2 mt-6">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === index ? "bg-gray-900" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
