import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Banner = () => {
  const [curr, setCurr] = useState(0);

  const data = [
    "/cloudsparrow-all-img/Rectangle1.png",
    "/cloudsparrow-all-img/Card1Image.png",
    "/cloudsparrow-all-img/Card2Image.png",
  ];

  const prev = () => {
    curr == 0 ? setCurr(data.length - 1) : setCurr(curr - 1);
  };

  const next = () => {
    curr == data.length - 1 ? setCurr(0) : setCurr(curr + 1);
  };

  return (
    <div className="bg-[url('./assets/BackGroundImage.png')] bg-cover bg-center w-full h-full min-h-screen pt-20">
      {/* Main Content Section */}
      <div className="flex pt-8 flex-row items-start justify-center w-full px-12 gap-40">
        {/* Left Section */}
        <div className="w-[60%] pl-20">
          <p className="text-white text-6xl font-bold mx-auto">
            HIGHLY BESPOKE WEBSITES AND DIGITAL EXPERIENCES FOR AMBITIOUS{" "}
            <span className="bg-gradient-to-r from-[#2A6BFD] to-[#11CED2] inline-block text-transparent bg-clip-text">BRANDS</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start max-w-md text-center md:text-left">
          <img
            className="size-36"
            src="/cloudsparrow-all-img/CallUs.png"
            alt="Call Us"
          />
          <p className="text-gray-300 text-base mt-6 px-4 md:px-0">
            Why stress over design and development? Or hire different agencies
            to do branding and marketing? We are your one-stop shop for all your
            design, development, and marketing needs.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex items-center justify-center mt-8">
        <img
          className="w-[65%]"
          src="/cloudsparrow-all-img/home.png"
          alt="Home"
        />
        <div className="absolute flex flex-col gap-28 justify-center items-center top-6">
          <div className="flex items-center justify-center w-full h-[76%] gap-28 overflow-hidden">
            <IoIosArrowDropleftCircle
              className="text-4xl text-[black] border border-black rounded-full"
              onClick={prev}
            />
            <div className="w-[70%] h-[480px] overflow-hidden rounded-2xl">
              <img
                className="w-full h-full"
                src={data[curr]}
                alt="Decoration"
              />
            </div>
            <IoIosArrowDroprightCircle
              className="text-4xl text-[black] border border-black rounded-full"
              onClick={next}
            />
          </div>
          <div className="flex justify-between items-center bg-[#D4D4D8] border border-[#0C0C0C33] text-[#0C0C0C] font-medium rounded-md max-w-[30%] p-2 text-[10px] leading-3">
            <div className="w-[70%] px-2">
              <p>
                Creative web company specialising in WordPress, eCommerce and
                Contentful
              </p>
            </div>
            <div className="border border-[#0C0C0C33] rounded-md px-2 py-1">
              <button className=" ">Book a Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
