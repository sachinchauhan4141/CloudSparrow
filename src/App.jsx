import HomePage from "./components/Home/HomePage";
import Footer from "./components/Common/Footer";
import { Route, Routes } from "react-router-dom";
import Careers from "./components/Careers/Careers";
import Navbar from "./components/Common/Navbar";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="font-[Fivo Sans Modern]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="services" element={<Services />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
