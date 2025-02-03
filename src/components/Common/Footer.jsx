import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { CiLinkedin, CiLocationOn, CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-between bg-[#181818] text-white px-24 h-[70vh]">
        <div className="flex justify-evenly items-center h-[40%]">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src="/cloudsparrow-all-img/logo.png"
              alt="Cloud Sparrow"
              className="w-16 mb-4"
            />
          </div>
          <div className="h-full border-dotted bg-gradient-to-b w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
            .
          </div>
          <div className="flex flex-col items-center justify-center h-full w-full text-[#FFFFFF]">
            <p className="font-medium text-lg">WE'LL DELIVER RESULTS</p>
            <p className="font-medium text-lg">THAT DRIVE GROWTH.</p>
            <p className="font-medium text-lg">CHEAPER. FASTER.</p>
          </div>
          <div className="h-full border-dotted bg-gradient-to-b w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
            .
          </div>
          <div className="flex justify-center items-center space-x-4 text-[40px] h-full w-full">
            <a divef="#">
              <CiFacebook />
            </a>
            <a divef="#">
              <FaInstagram />
            </a>
            <a divef="#">
              <CiLinkedin />
            </a>
            <a divef="#">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
        <div className="flex justify-evenly items-center h-[40%]">
          <div className="flex flex-col gap-1 items-center justify-center h-full w-full">
            <div className="bg-blue-600 p-3 rounded-full text-xl">
              <FaPhoneAlt />
            </div>
            <p className="text-gray-300 mt-2">CALL NOW:</p>
            <p className="font-medium">+91 704 266 2801</p>
          </div>
          <div className="h-full border-dotted bg-gradient-to-t w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
            .
          </div>
          <div className="flex flex-col items-center gap-1 justify-center h-full w-full">
            <div className="bg-blue-600 p-3 rounded-full text-xl">
              <CiLocationOn />
            </div>
            <p className="mt-2 text-[#FFFBF0] font-medium">1125, NE 125TH ST</p>
            <p className="text-[#FFFBF0] font-medium">NORTH MIAMI FL 33161</p>
          </div>
          <div className="h-full border-dotted bg-gradient-to-t w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
            .
          </div>
          <div className="flex flex-col items-center gap-1 justify-center h-full w-full">
            <div className="bg-blue-600 p-3 rounded-full text-xl">
              <CiMail />
            </div>
            <p className="text-gray-300 mt-2">EMAIL US:</p>
            <p className="font-medium">info@CloudSparrow.com</p>
          </div>
        </div>
        <div className="w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
        <div className="flex flex-col justify-center items-center h-[20%]">
          <div className="flex text-[#FFFFFF] items-center justify-evenly gap-14 text-xs font-medium h-full">
            <p className="cursor-pointer">HOME</p>
            <p className="cursor-pointer">ABOUT</p>
            <p className="cursor-pointer">SERVICES</p>
            <p className="cursor-pointer">PORTFOLIO</p>
            <p className="cursor-pointer">CAREERS</p>
            <p className="cursor-pointer">CONTACT</p>
          </div>
          <div className="w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
          <div className="h-full flex items-center justify-center">
            <div className="text-xs">
              <p>2025 © Cloud Sparrow Technology LLP All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
