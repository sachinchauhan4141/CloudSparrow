import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const FirstPage = () => {
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
      <div className="flex flex-col pt-2 md:flex-row items-center md:items-start justify-center w-full px-6 md:px-16  md: gap-8">
        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-white text-3xl md:text-5xl font-bold leading-tight">
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
            Why stress over design and development? Or hire different agencies
            to do branding and marketing? We are your one-stop shop for all your
            design, development, and marketing needs.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex items-center justify-center mt-16">
        <img
          className="max-w-full"
          src="/cloudsparrow-all-img/home.png"
          alt="Home"
        />
        <div className="flex gap-20 items-center justify-center absolute -bottom-10 mb-[125px] sm:mb-[350px] md:-bottom-20  mr-[10px]">
          <IoIosArrowDropleftCircle className="text-4xl" onClick={prev} />
          <img
            className="overflow-hidden lg:w-[860px] sm:w-[300px] md:w-[500px] w-[280px] "
            src={data[curr]}
            alt="Decoration"
          />
          <IoIosArrowDroprightCircle className="text-4xl" onClick={next} />
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row items-center justify-between max-w-xl mx-auto bg-gray-800 text-white py-4 px-6 rounded-md mt-16 md:mt-10">
     <p className="text-center md:text-left text-sm font-semibold">
       Creative web company specializing in WordPress, eCommerce, and
       Contentful.
     </p>
     <button className="mt-3 md:mt-0 border-2 border-gray-400 rounded-md py-2 px-4 text-sm font-semibold hover:bg-gray-700 transition">
       Book a Call
     </button>
   </div> */}
    </div>
  );
};

export default FirstPage;
