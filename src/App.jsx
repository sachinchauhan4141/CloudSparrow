import HomePage from "./components/Home/HomePage";
import Footer from "./components/Common/Footer";
import { Route, Routes } from "react-router-dom";
import Careers from "./components/Careers/Careers";
import Navbar from "./components/Common/Navbar";

function App() {
  return (
    <div className="font-[Fivo Sans Modern]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="careers" element={<Careers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
