import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Footer from "./components/Common/Footer";
import Careers from "./components/Careers/Careers";
import Navbar from "./components/Common/Navbar";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import { IoIosArrowDropup } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import EnquiryDash from "./components/Admin/EnquiryDash";
import JobDash from "./components/Admin/JobDashBoard/JobDash";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authSlice.userData);

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
    authService
      .getCurrUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((e) => {
        console.log(e);
      });
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
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* protected routes admin only */}
        {user && <Route path="/dashboard/enquiry" element={<EnquiryDash />} />}
        {user && <Route path="/dashboard/jobs" element={<JobDash />} />}
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
