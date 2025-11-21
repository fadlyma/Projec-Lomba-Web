"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen px-0 py-16 bg-gradient-to-b from-[#eee5c7] to-white">

      <h1 className="text-center text-3xl md:text-4xl font-bold mb-14 text-gray-800">
        Tentang Kami
      </h1>

      {/* FULL WIDTH GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full px-6 md:px-16">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start w-full">
          <Image
            src="/images/30.png"
            alt="Toko Sembako"
            width={600}
            height={600}
            className="object-contain drop-shadow-md"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 text-gray-800 w-full">

          <div>
            <h2 className="text-2xl font-bold">Nama Toko Sembako</h2>
            <p className="text-gray-600 mt-1">Lorem Ipsum</p>
          </div>

          <p className="text-gray-600">Lorem Ipsum</p>

          <div>
            <h3 className="text-xl font-bold mb-2">Visi</h3>
            <div className="bg-[#e8d9c5] rounded-xl shadow-md p-5">
              <p className="text-gray-700 leading-relaxed">
                Menjadi platform wisata digital yang berperan aktif dalam membangun ekosistem
                pariwisata Lampung yang maju, inklusif, dan berkelanjutan.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Misi</h3>
            <div className="bg-[#e8d9c5] rounded-xl shadow-md p-5 space-y-3">
              <p>Mengembangkan teknologi yang memudahkan wisatawan menemukan dan menjelajahi destinasi di Lampung.</p>
              <p>Mendorong kolaborasi antara wisatawan, pelaku lokal, dan pemerintah daerah.</p>
              <p>Menyediakan layanan wisata yang aman, informatif, dan berorientasi pada kepuasan pengguna.</p>
              <p>Menumbuhkan kesadaran akan pentingnya pelestarian alam dan budaya lokal.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
