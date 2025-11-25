"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section id="tentang"className="w-full min-h-screen px-0 py-24 bg-gradient-to-b from-[#bde0f8] to-white">

      <h1 className="text-center text-3xl md:text-4xl font-bold mb-14 text-gray-800">
        Tentang Kami
      </h1>

      {/* FULL WIDTH GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full px-6 md:px-16">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start w-full">
          <Image
            src="/images/33.png"
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
            <h2 className="text-2xl font-bold">SmallBee Trophie Lampung</h2>
            <p className="text-gray-600 mt-1">Toko sembako kami menyediakan kebutuhan pokok harian dengan harga terjangkau dan kualitas terjamin. Kami melayani pelanggan dengan cepat, ramah, dan selalu menjaga ketersediaan barang.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Visi</h3>
            <div className="bg-[#d2f7ff] rounded-xl shadow-md p-5">
              <p className="text-gray-700 leading-relaxed">
                Menjadi toko sembako terpercaya yang memberikan kemudahan dan kenyamanan bagi masyarakat dalam memenuhi kebutuhan sehari-hari.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Misi</h3>
            <div className="bg-[#d2f7ff] rounded-xl shadow-md p-5 space-y-3">
              <p>Menyediakan produk berkualitas, menjaga harga tetap bersahabat, serta memberikan pelayanan yang baik dan responsif kepada setiap pelanggan.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
