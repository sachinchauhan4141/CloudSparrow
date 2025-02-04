import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex absolute justify-between items-center h-20 w-full px-8 text-white">
      {/* Logo */}
      <div className="flex gap-8 items-center">
        <img
          src="/cloudsparrow-all-img/logo.png"
          alt="NoImage"
          className="size-16"
        />
        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex gap-12">
          {["Home", "About", "Services", "Portfolio", "Careers", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={item === "Careers" ? "/careers" : "/"}
                className="font-medium hover:text-blue-400 transition text-xs"
              >
                {item}
              </Link>
            )
          )}
        </nav>
      </div>
      {/* Work With Us Button */}
      <button className="hidden lg:block h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition">
        Work With Us
      </button>

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
        <div className="absolute top-20 left-0 w-full bg-[url('./assets/BackGroundImage.png')] py-4 flex flex-col items-center lg:hidden">
          {["Home", "About", "Services", "Portfolio", "Careers", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={item === "Careers" ? "/careers" : "/"}
                className="py-2 text-lg font-medium hover:text-blue-400 transition"
              >
                {item}
              </Link>
            )
          )}
          <button className="mt-4 h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition">
            Work With Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
