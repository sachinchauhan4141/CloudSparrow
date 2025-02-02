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
    <div className="bg-[url('./assets/BackGroundImage.png')] bg-cover bg-center w-full h-full min-h-screen">
      {/* Main Content Section */}
      <div className="flex pt-8 flex-row items-start justify-center w-full px-16 gap-40">
        {/* Left Section */}
        <div className="w-[40%]">
          <p className="text-white text-5xl font-bold">
            HIGHLY BESPOKE WEBSITES AND DIGITAL EXPERIENCES FOR AMBITIOUS{" "}
            <span className="text-[#15bcd9]">BRANDS</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start max-w-md text-center md:text-left">
          <img
            className="w-24 h-24"
            src="/cloudsparrow-all-img/CallUs.png"
            alt="Call Us"
          />
          <p className="text-gray-300 text-base mt-6 px-4 md:px-0">
            Why stress over design and development? <br /> Or hire different agencies
            to do branding and marketing? <br /> We are your one-stop shop for all your
            design, development, and marketing needs.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex items-center justify-center mt-8">
        <img
          className="max-w-full"
          src="/cloudsparrow-all-img/home.png"
          alt="Home"
        />
        <div className="absolute flex items-center justify-center w-full h-[76%] gap-28 top-0">
          <IoIosArrowDropleftCircle
            className="text-4xl text-[black] border border-black rounded-full"
            onClick={prev}
          />
          <div className="w-[870px] h-[600px] overflow-hidden rounded-2xl">
            <img className="w-full h-full" src={data[curr]} alt="Decoration" />
          </div>
          <IoIosArrowDroprightCircle
            className="text-4xl text-[black] border border-black rounded-full"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
