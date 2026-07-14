import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white">

      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      <About />

      {/* <Achievements /> */}

      {/* <Gallery /> */}

      <HowItWorks />

      <Contact />

      <Footer />

    </div>
  );
}