import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import jobService from "../../appwrite/job";
import authService from "../../appwrite/auth";
import userService from "../../appwrite/user";
import { setAllJobs } from "../../store/jobSlice";
import { login, logout } from "../../store/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const path = useResolvedPath();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, userData } = useSelector((state) => state.authSlice);

  const getUser = async () => {
    try {
      const response = await authService.getCurrUser();
      if (!response?.emailVerification) {
        await authService.sendVerifyEmail();
        toast("check your mail for verification link");
        await authService.logoutUser();
      }
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

  const handleLogout = () => {
    setIsOpen(!isOpen);
    authService.logoutUser().then(() => {
      dispatch(logout());
    });
    navigate("/login");
  };

  const navItems = [
    "Home",
    "Services",
    "Portfolio",
    "Team",
    "Careers",
    "About",
  ];

  useEffect(() => {
    getUser();
    getAllJobs();
  }, [status, navigate, dispatch, userData]);

  return (
    <div className="flex absolute justify-between items-center h-20 w-full px-4 text-black">
      {/* Logo */}
      <div className="flex gap-8 items-center">
        <img
          src="/cloudsparrow-all-img/logo.png"
          alt="NoImage"
          className="size-16"
        />
        {/* Navigation Links (Desktop) */}
        <nav
          className="hidden lg:flex gap-8"
          onClick={() => setDropDown(false)}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : item.toLowerCase()}
              className={
                "font-medium hover:text-blue-400 transition text-xs " +
                (path.pathname === "/" || path.pathname === "/careers"
                  ? " text-white "
                  : " ")
              }
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex gap-2 items-center">
        <div className="hidden lg:block py-2">
          <Link
            to={"/contact"}
            className=" px-4 py-2 text-sm text-white rounded-md bg-blue-700 hover:bg-blue-800"
          >
            Contact Us
          </Link>
        </div>
        {userData && (
          <div>
            <button
              className={
                "hidden lg:block font-medium hover:text-blue-400 transition text-xs " +
                (path.pathname === "/" || path.pathname === "/careers"
                  ? " text-white "
                  : " ")
              }
              type="button"
              onClick={() => setDropDown(!dropdown)}
            >
              {dropdown ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
            {dropdown && (
              <div
                onClick={() => setDropDown(false)}
                className="absolute hidden lg:block right-4 top-16 divide-y divide-black rounded-lg shadow-sm w-44 bg-white text-black"
              >
                <div className="px-4 py-3 text-sm">
                  <div>{userData.name}</div>
                  <div className="font-medium truncate">{userData.email}</div>
                </div>
                <ul className="py-2 text-sm">
                  {status && (
                    <>
                      {userData?.admin && (
                        <li>
                          <Link
                            to={"/dashboard"}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Dashboard
                          </Link>
                        </li>
                      )}
                      <li>
                        <Link
                          to={"/updateuser/" + userData?.$id}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Account
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute z-10 top-20 left-0 w-full bg-[url('./assets/BackGroundImage.png')] text-white py-4 flex flex-col items-center lg:hidden">
          {navItems.map((item) => (
            <Link
              onClick={() => setIsOpen(!isOpen)}
              key={item}
              to={item === "Home" ? "/" : item.toLowerCase()}
              className="py-2 text-lg font-medium hover:text-blue-400 transition"
            >
              {item}
            </Link>
          ))}
          {status && (
            <>
              <button
                onClick={handleLogout}
                className="mt-4 h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition text-white"
              >
                Logout
              </button>
              <button className="mt-4 h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition text-white">
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to={"/updateuser/" + userData?.$id}
                >
                  Account
                </Link>
              </button>
              {userData?.admin && (
                <button className="mt-4 h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition text-white">
                  <Link onClick={() => setIsOpen(!isOpen)} to={"/dashboard"}>
                    Dashboard
                  </Link>
                </button>
              )}
            </>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mt-4 h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition text-white"
          >
            <Link to={"/contact"}>Contact Us</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
