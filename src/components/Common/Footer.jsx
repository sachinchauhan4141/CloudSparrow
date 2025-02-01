import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { CiLinkedin, CiLocationOn, CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <>
          <div className="bg-black text-white py-10">
            {/* Top Section */}
            <div className="container mx-auto px-6 border-b border-gray-600 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left relative">
                {/* Left: Logo */}
                <div className="flex flex-col items-center relative">
                  <img
                    src="/cloudsparrow-all-img/logo.png"
                    alt="Cloud Sparrow"
                    className="w-16 mb-4"
                  />
                </div>
    
                {/* Center: Tagline */}
                <div className="flex flex-col items-center relative">
                  <p className="font-bold text-lg">WE'LL DELIVER RESULTS</p>
                  <p className="font-bold text-lg">THAT DRIVE GROWTH.</p>
                  <p className="font-bold text-lg">CHEAPER. FASTER.</p>
                </div>
    
                {/* Right: Social Media Icons */}
                <div className="flex justify-center items-center space-x-4 text-[30px] sm:text-[40px]">
                  <a href="#">
                    <CiFacebook />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <CiLinkedin />
                  </a>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-center border-b border-gray-600 pb-6">
              {/* Call Section */}
              <div className="flex flex-col items-center relative">
                <div className="bg-blue-600 p-3 rounded-full text-xl">
                  <FaPhoneAlt />
                </div>
                <p className="mt-2 font-bold">CALL NOW:</p>
                <p className="text-gray-300">+91 704 266 2801</p>
              </div>
    
              {/* Address Section */}
              <div className="flex flex-col items-center relative">
                <div className="bg-blue-600 p-3 rounded-full text-xl">
                  <CiLocationOn />
                </div>
                <p className="mt-2 font-bold">1125, NE 125TH ST</p>
                <p className="text-gray-300">NORTH MIAMI FL 33161</p>
              </div>
    
              {/* Email Section */}
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 p-3 rounded-full text-xl">
                  <CiMail />
                </div>
                <p className="mt-2 font-bold">EMAIL US:</p>
                <p className="text-gray-300">info@CloudSparrow.com</p>
              </div>
            </div>
    
            {/* Copyright */}
            <p className="text-center text-gray-500 mt-6">
              2025 © Cloud Sparrow Technology LLP All Rights Reserved
            </p>
          </div>
        </>
      );
}

export default Footer
