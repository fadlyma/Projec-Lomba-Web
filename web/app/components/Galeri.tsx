"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/Piala1.jpg",
  "/images/Piala2.jpg",
  "/images/Piala3.jpg",
  "/images/Piala4.jpg",
  "/images/Piala5.jpg",
  "/images/Piala6.jpg",
  "/images/Piala7.jpg",
  "/images/Piala8.jpg",
  "/images/Piala9.jpg",
  "/images/Piala10.jpg",
  "/images/Piala11.jpg",
  "/images/Piala4.jpg",
];

export default function GaleriPage() {
  const [slide, setSlide] = useState(0);
  const totalSlides = Math.ceil(images.length / 3);

  const nextSlide = () => setSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const displayedImages = images.slice(slide * 3, slide * 3 + 3);

  return (
    <section
      id="galeri"
      className="w-full flex flex-col items-center bg-white px-6 md:px-12 pt-24 pb-8"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        Galeri
      </h1>

      {/* Wrapper slide */}
      <div className="relative w-full max-w-5xl overflow-hidden flex flex-col items-center">
        {/* Tombol kiri */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-20"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Tombol kanan */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-20"
        >
          <ChevronRight size={28} />
        </button>

        {/* Foto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-6">
          {displayedImages.map((src, index) => (
            <div
              key={index}
              className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-gray-100 hover:shadow-xl transition-all duration-300 mx-auto"
            >
              <Image
                src={src}
                alt={`Galeri ${index}`}
                width={400}
                height={500}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicator bulatan */}
      <div className="flex gap-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            onClick={() => setSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              slide === index ? "bg-gray-900 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

