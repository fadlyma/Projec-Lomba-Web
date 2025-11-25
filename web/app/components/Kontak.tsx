"use client";
import Image from "next/image";
import { useState } from "react";

export default function CeritaPage() {
  const [rating, setRating] = useState(0);

  return (
    <section
      id="kontak"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden pb-24"
    >
      {/* Background gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#bde0f8]"></div>

      {/* Tekstur garis */}
      <div className="absolute inset-0 opacity-3">
        <Image
          src="/images/peta.svg"
          alt="Tekstur garis"
          fill
          className="object-cover"
        />
      </div>

      {/* Judul */}
      <div className="relative z-10 text-center mb-8 px-6 pt-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Hubungi Kami
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Hubungi kami untuk informasi lebih lanjut atau kebutuhan, kami siap
          membantu.
        </p>
      </div>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-20 gap-10 md:gap-16">

        {/* FORM */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Nama"
              className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Status"
              className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Komentar"
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Kirim
            </button>
          </form>
        </div>

        {/* GAMBAR */}
        <div className="w-full md:w-1/2 flex justify-center relative">
        
          <Image
            src="/images/34.png"
            alt="Traveler"
            width={520}   // 🔥 Diperkecil agar lebih clean
            height={520}
            className="object-contain drop-shadow-md"
          />
        </div>
      </div>

     {/* MAPS */}
<div className="relative z-10 w-full flex flex-col items-center mt-14 px-6 md:px-20">

  {/* TITLE */}
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
    Alamat
  </h2>

  {/* MAPS CONTAINER */}
  <div className="w-full max-w-4xl h-[300px] md:h-[420px] rounded-xl overflow-hidden shadow-lg border border-gray-300">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5980876523966!2d105.25872!3d-5.387658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db9d86d86f0b%3A0xbab8afcdb7a3a!2sLokasi%20Anda!5e0!3m2!1sid!2sid!4v1732171200000!5m2!1sid!2sid"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


</div>

    </section>
  );
}
