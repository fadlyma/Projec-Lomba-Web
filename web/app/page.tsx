import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
// import SearchCard from "./components/SearchCard";
import Footer from "./components/Footer";
import About from "./components/About";
import Galeri from "./components/Galeri";
import Kontak from "./components/Kontak";

export default function Home() {
  
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-black">
    { /* Navbar */ }
      <NavBar />


      {/* Hero Section */}
      <section>
        <Hero />
      </section>

       <section>
        <About />
      </section>

  <section>
        <Galeri/>
      </section>

      <section>
        <Kontak/>
      </section>  
    {/* footer */}
    <Footer />

    </main>
  );
}