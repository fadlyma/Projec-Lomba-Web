"use client";
import React, { useState } from "react";

export default function Kontak() {
  const [nama, setNama] = useState("");
  const [hp, setHp] = useState("");
  const [komentar, setKomentar] = useState("");

  const waUrl = `https://wa.me/9889987873918?text=Halo,%20saya%20${encodeURIComponent(
    nama
  )}%0ANo.HP:%20${encodeURIComponent(hp)}%0APesan:%20${encodeURIComponent(
    komentar
  )}`;

  return (
    <section className="w-full bg-gradient-to-b from-[#f3f1e3] to-[#f0ebd4] py-20 px-6 md:px-12 lg:px-20">
      <h1 className="text-center text-4xl font-bold mb-14">Kontak</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kiri */}
        <div className="flex flex-col gap-6 pl-10">
          <h2 className="text-3xl font-semibold">Hubungi Kami</h2>

          {/* Nomor Telepon */}
          <p className="text-lg text-gray-700 font-medium">9889987873918</p>

          {/* Illustration */}
          <img
            src="/mnt/data/Screenshot 2025-11-21 111354.png"
            alt="HP Ilustrasi"
            className="w-[400px] md:w-[450px] lg:w-[520px]"
          />
        </div>

          {/* Illustration */}
          <img
            src="/mnt/data/05133f89-0110-4007-a47d-2224b880a250.png"
            alt="HP Ilustrasi"
            className="w-[380px] md:w-[430px] lg:w-[500px] mx-auto"
          />
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <input
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-blue-500 text-black"
          />

          <input
            type="text"
            placeholder="No. Hp"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-blue-500 text-black"
          />

          <textarea
            placeholder="Komentar"
            rows={5}
            value={komentar}
            onChange={(e) => setKomentar(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-blue-500 text-black"
          ></textarea>

          <a
            href={waUrl}
            target="_blank"
            className="w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold text-center hover:bg-green-700 transition-all"
          >
            Kirim ke WhatsApp
          </a>
        </div>


      {/* Maps */}
      <div className="w-full mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127405.26588662892!2d105.199966!3d-5.364382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dbf3d9f72f3b%3A0x3039d80b220cc80!2sUniversitas%20Teknokrat%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000"
          className="w-full h-[420px] rounded-xl border-none"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
