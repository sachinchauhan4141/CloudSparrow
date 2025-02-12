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
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import userService from "./appwrite/user";
import { login, logout } from "./store/authSlice";
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
import jobService from "./appwrite/job";
import { setAllJobs } from "./store/jobSlice";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

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

  const getUser = async () => {
    try {
      const response = await authService.getCurrUser();
      const userData = await userService.getUserById(response.$id);
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllJobs = async () => {
    const jobData = await jobService.getAllJobs();
    if (jobData) {
      dispatch(setAllJobs({ jobsData: jobData.documents }));
    }
  };

  useEffect(() => {
    getUser();
    getAllJobs();
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
