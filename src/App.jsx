import HomePage from "./components/Home/HomePage";
import Footer from "./components/Common/Footer";
import { Route, Routes } from "react-router-dom";
import Careers from "./components/Careers/Careers";
import Navbar from "./components/Common/Navbar";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
      {isVisible && (
        <IoIosArrowDropup
          onClick={scrollToTop}
          className="fixed bottom-0 right-0 lg:m-6 m-4 size-10 rounded-full bg-blue-600 text-white border-0"
        >
          Back To Top
        </IoIosArrowDropup>
      )}
    </div>
  );
}

export default App;
