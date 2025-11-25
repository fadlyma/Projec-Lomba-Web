export default function Footer() {
return ( <footer
   id="contact"
   className="relative z-10 bg-[#0c1220] text-white pt-8 pb-8 overflow-hidden"
 >
{/* Background pattern */}
<div
className="absolute inset-0 z-0 opacity-10 pointer-events-none"
style={{
backgroundImage: "url('/images/footer-pattern.png')",
backgroundSize: "cover",
backgroundPosition: "center",
}}
/>

  {/* Konten Footer */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
    
    {/* Logo & Lokasi */}
    <div className="flex flex-col justify-start">
      <div className="flex items-center gap-0 -mt-4">
        <img
          src="/images/SmallBee.png"
          alt="Warung Logo"
          className="w-35 h-35 object-contain"
        />
      </div>
    </div>

    {/* Quick Links */}
    <div>
  <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
  <ul className="space-y-2 text-slate-300 text-sm">
    <li>
      <a href="#" className="hover:text-white">
        About SmallBee
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white">
        Location
      </a>
    </li>
  </ul>
</div>


    {/* Top Destination */}
    <div>
  <h3 className="font-semibold mb-4 text-white">Produc</h3>
  <ul className="space-y-2 text-slate-300 text-sm">
    <li>
      <a href="#tentang" className="hover:text-white">
        Trophie
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-white">
        Medal
      </a>
    </li>
  </ul>
</div>


    {/* Contact Info */}
    <div>
      <h3 className="font-semibold mb-4 text-white">Contact Info</h3>
      <ul className="space-y-3 text-slate-300 text-sm">
        <li className="flex items-start gap-3">
          <img
            src="/images/8.png"
            alt="WhatsApp"
            className="w-5 h-5 mt-0.5"
          />
          <div>
            <p>Whatsapp</p>
            <p className="font-semibold text-white">+62851 0088 9876</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  {/* Copyright */}
  <div className="relative z-10 border-t border-slate-800 mt-10 pt-4 text-center text-slate-400 text-sm">
    &copy; {new Date().getFullYear()} SamllBee Trophie Lampung
  </div>
</footer>
);
}
