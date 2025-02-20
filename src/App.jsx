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
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Register/Signup";
import UpdateUser from "./components/Auth/Update/UpdateUser";
import ForgotPassword from "./components/Auth/Recover/ForgotPassword";
import Dashboard from "./components/Admin/Dashboard";
import EnquiryDash from "./components/Admin/EnquiryDash";
import JobDash from "./components/Admin/JobDashBoard/JobDash";
import UsersDash from "./components/Admin/UsersDash";
import AdminLayout from "./components/Admin/AdminLayout";
import AuthLayout from "./components/Auth/AuthLayout";
import { ToastContainer } from "react-toastify";
import UpdatePassword from "./components/Auth/Recover/UpdatePassword";
import NotFound from "./components/Error/NotFound";
import NotFoundAdmin from "./components/Error/NotFoundAdmin";

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
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="passwordrecovery" element={<ForgotPassword />} />
        <Route path="updatepassword" element={<UpdatePassword />} />
        <Route path="*" element={<NotFound />} />
        {/* protected routes logged in only */}
        <Route
          path="login"
          element={
            <AuthLayout authentication={false}>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="signup"
          element={
            <AuthLayout authentication={false}>
              <Signup />
            </AuthLayout>
          }
        />
        <Route
          path="updateuser/:id"
          element={
            <AuthLayout>
              <UpdateUser />
            </AuthLayout>
          }
        />
        {/* protected routes admin only */}
        <Route path="/notadmin" element={<NotFoundAdmin />} />
        <Route
          path="/dashboard"
          element={
            <AuthLayout>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </AuthLayout>
          }
        />
        <Route
          path="/dashboard/enquiry"
          element={
            <AuthLayout>
              <AdminLayout>
                <EnquiryDash />
              </AdminLayout>
            </AuthLayout>
          }
        />
        <Route
          path="/dashboard/jobs"
          element={
            <AuthLayout>
              <AdminLayout>
                <JobDash />
              </AdminLayout>
            </AuthLayout>
          }
        />
        <Route
          path="/dashboard/users"
          element={
            <AuthLayout>
              <AdminLayout>
                <UsersDash />
              </AdminLayout>
            </AuthLayout>
          }
        />
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
