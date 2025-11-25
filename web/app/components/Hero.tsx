"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/images/HeroUtama.png", "/images/HeroKedua.png"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="beranda"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`Hero ${current}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            {/* Gradient overlay lebih soft & clean */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          SmallBee Trophy Lampung
        </h1>



  {/* Subtitle */}
  <p className="mt-3 text-sm 2x1:text-base max-w-2x1 text-center text-white/90 drop-shadow-md">
    Penyedia beragam trophy, plakat, dan merchandise custom berkualitas untuk berbagai kebutuhan acara dan penghargaan.
  </p>

  {/* Indicator */}
  <div className="absolute bottom-10 flex gap-2">
    {images.map((_, index) => (
      <span
        key={index}
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
          current === index ? "bg-white" : "bg-white/40"
        }`}
      />
    ))}
  </div>
</div>

    </section>
  );
}
