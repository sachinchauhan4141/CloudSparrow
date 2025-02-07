import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

const BannerFooter = () => {
  return (
    <div className="flex flex-col w-full border bg-[#0C0C0C] lg:px-8 lg:py-9 py-4">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between w-full px-4 lg:px-20">
        <p className="font-bold text-white text-5xl lg:text-6xl text-left lg:leading-16">
          DIGITAL PRODUCTS <br /> EXPERIENCES
        </p>
        <img
          className="hidden lg:block h-30"
          src="/cloudsparrow-all-img/secondPage.png"
          alt=""
        />
      </div>

      {/* Middle Section */}
      <div className="flex lg:flex-row flex-col items-center justify-between w-full lg:px-16 my-4 lg:my-0">
        <div className="flex lg:ml-8">
          <div className="lg:size-60 p-4">
            <img
              className=""
              src="/cloudsparrow-all-img/webDesign.png"
              alt=""
            />
          </div>
          <div className="lg:size-60 p-4">
            <img src="/cloudsparrow-all-img/mobileApp.png" alt="" />
          </div>
          <div className="lg:size-60 p-4">
            <img src="/cloudsparrow-all-img/seo.png" alt="" />
          </div>
        </div>
        {/* right section */}
        <div className="text-white  text-left mx-auto lg:pb-20">
          <div>
            <p className="text-9xl font-semibold">4.0x</p>
          </div>
          <div className="my-2 bg-gradient-to-r from-black via-white to-black h-1 w-full"></div>
          <div className="flex gap-8 justify-center items-center">
            <p className="text-xs lg:text-sm md:text-base">
              Use our most popular Brand & <br /> web design resources to <br />
              jumpstart your latest project.
            </p>
            <FaCirclePlus className="rounded-full border border-white size-12 text-[#2A6BFD] bg-white" />
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="flex gap-4 lg:gap-0 lg:flex-wrap justify-evenly items-center overflow-scroll lg:overflow-visible no-scrollbar">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <img
            key={num}
            className="h-20 object-contain"
            src={`/cloudsparrow-all-img/image${num}.png`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default BannerFooter;
