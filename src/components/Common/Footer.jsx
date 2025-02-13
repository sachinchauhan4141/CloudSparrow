import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaYoutube, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin, CiLocationOn, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-between bg-[#181818] text-white px-2 lg:px-24 lg:h-[70vh] lg:pt-0 pt-10">
        <div className="flex flex-col lg:flex-row justify-evenly items-center h-[40%]">
          <div className="flex lg:flex-col items-center justify-center h-full w-full">
            <img
              src="/cloudsparrow-all-img/logo.png"
              alt="Cloud Sparrow"
              className="w-16 mb-4"
            />
          </div>
          <div className="block lg:hidden w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
          <div className="hidden lg:block h-full border-dotted bg-gradient-to-b w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
            .
          </div>
          <div className="my-4 lg:my-0 flex flex-col items-center justify-center h-full w-full text-[#FFFFFF]">
            <p className="font-medium lg:text-lg">WE'LL DELIVER RESULTS</p>
            <p className="font-medium lg:text-lg">THAT DRIVE GROWTH.</p>
            <p className="font-medium lg:text-lg">CHEAPER. FASTER.</p>
          </div>
          <div className="block lg:hidden w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
          <div className="hidden lg:block h-full border-dotted bg-gradient-to-b w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
            .
          </div>
          <div className="my-4 lg:my-0 flex justify-center items-center space-x-4 text-[40px] h-full w-full">
            <a href="https://www.facebook.com/profile.php?id=61571866867135" target="_blank">
              <CiFacebook />
            </a>
            <a href="https://www.instagram.com/cloudsparrowtech" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/cloud-sparrow-aa6b48346/" target="_blank">
              <CiLinkedin />
            </a>
            <a href="https://wa.me/917838393552" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
        <div className="lg:my-0 my-4 flex flex-col lg:flex-row lg:gap-0 gap-4 justify-evenly items-center h-[40%]">
          <div className="flex flex-col gap-1 items-center justify-center h-full w-full">
            <div className="bg-blue-600 p-3 rounded-full text-xl">
              <FaPhoneAlt />
            </div>
            <p className="text-gray-300 mt-2">CALL NOW:</p>
            <p className="font-medium">+917838393552</p>
          </div>
          <div className="block lg:hidden w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
          <div className="hidden lg:block h-full border-dotted bg-gradient-to-t w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
            .
          </div>
          <div className="flex flex-col items-center gap-1 justify-center h-full w-full">
            <div className="bg-blue-600 p-3 rounded-full text-xl">
              <CiLocationOn />
            </div>
            <p className="mt-2 text-[#FFFBF0] font-medium">C26 Block Sector 65,</p>
            <p className="text-[#FFFBF0] font-medium">Noida, Uttar Pradesh</p>
          </div>
          <div className="block lg:hidden w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
          <div className="hidden lg:block h-full border-dotted bg-gradient-to-t w-[1px] from-[#55555500] via-gray-600 to-gray-600 text-transparent">
            .
          </div>
          <div className="flex flex-col items-center gap-1 justify-center h-full w-full">
            <div className="bg-blue-600 p-3 rounded-full text-xl">
              <CiMail />
            </div>
            <p className="text-gray-300 mt-2">EMAIL US:</p>
            <p className="font-medium">cloudsparrow938@gmail.com</p>
          </div>
        </div>
        <div className="w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
        <div className="lg:my-0 my-4 flex flex-col justify-center items-center h-[20%]">
          <div className="hidden lg:flex text-[#FFFFFF] items-center justify-evenly gap-14 text-xs font-medium h-full">
            <Link className="cursor-pointer" to={"/"}>
              HOME
            </Link>
            <Link className="cursor-pointer" to={"/about"}>
              ABOUT
            </Link>
            <Link className="cursor-pointer" to={"/services"}>
              SERVICES
            </Link>
            <Link className="cursor-pointer" to={"/portfolio"}>
              PORTFOLIO
            </Link>
            <Link className="cursor-pointer" to={"/careers"}>
              CAREERS
            </Link>
            <Link className="cursor-pointer" to={"/contact"}>
              CONTACT
            </Link>
          </div>
          <div className="hidden lg:block w-full border-dotted bg-gradient-to-r h-[1px] from-[#55555500] via-gray-600 to-[#55555500]" />
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
