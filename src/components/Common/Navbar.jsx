// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex justify-between h-[80px] w-full text-white'>
//         <nav className='flex  items-center top-[30px] pl-[30px]'>
//         <div className='flex h-[80px] w-[80px] items-center pr-3 pt-3'>
//             <img src="/cloudsparrow-all-img/logo.png" alt="NoImage" srcset="" />
//         </div>
//         <div className='flex h-[10px] w-[480] gap-12 ml-[30px] mb-[20px]'>
//             <a href="/" className='font-[Fivo Sans Modern] font-medium '>Home</a>
//             <a href="/" className='font-[Fivo Sans Modern] font-medium '>About</a>
//             <a href="/" className='font-[Fivo Sans Modern] font-medium '>Services</a>
//             <a href="/" className='font-[Fivo Sans Modern] font-medium '>Portfolio</a>
//             <a href="/" className='font-[Fivo Sans Modern] font-medium '>Careers</a>
//             <a href="/" className='font-[Fivo Sans Modern] font-medium '>Contact</a>
//         </div>
//     </nav>
//     <div className='flex pr-[30px] items-center top-[30px]'>
//         <button className=' h-[40px] w-[150px] font-[Fivo Sans Modern] text-[14px] bg-[#2A6BFD] font-semibold rounded-xl'>Work With Us</button>
//     </div>
//     </div>
//   )
// }

// export default Navbar
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between sm:items-center h-20 w-full px-4 md:px-8 lg:px-12 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/cloudsparrow-all-img/logo.png"
          alt="NoImage"
          className="h-12 w-12"
        />
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden lg:flex gap-8">
        {["Home", "About", "Services", "Portfolio", "Careers", "Contact"].map(
          (item) => (
            <a
              key={item}
              href="/"
              className="font-medium hover:text-blue-400 transition"
            >
              {item}
            </a>
          )
        )}
      </nav>

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
        <div className="absolute top-20 left-0 w-full bg-[#232322] py-4 flex flex-col items-center lg:hidden">
          {["Home", "About", "Services", "Portfolio", "Careers", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="/"
                className="py-2 text-lg font-medium hover:text-blue-400 transition"
              >
                {item}
              </a>
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
