import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

const BannerFooter = () => {
  return (
    <div className="flex flex-col w-full h-full border bg-[#0C0C0C] p-4 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-10 md:mt-16 px-4 md:px-20">
        <p className="font-[Fivo Sans Modern] font-bold text-white text-5xl text-left">
          DIGITAL PRODUCTS <br /> EXPERIENCES
        </p>
        <img
          className="h-24"
          src="/cloudsparrow-all-img/secondPage.png"
          alt=""
        />
      </div>

      {/* Middle Section */}
      <div className="flex flex-row items-center justify-between w-full px-16">
        <img
          className="w-3xl"
          src="/cloudsparrow-all-img/ThirdPageCircle.png"
          alt=""
        />
        <div className="text-white font-[Fivo Sans Modern] text-left">
          <div>
            <p className="text-9xl font-semibold">4.0x</p>
          </div>
          <div className="my-2 bg-gradient-to-r from-black via-white to-black h-1 w-full" ></div>
          <div className="flex gap-8 justify-center items-center">
            <p className="text-sm md:text-base">
              Use our most popular Brand & <br /> web design resources to <br />
              jumpstart your latest project.
            </p>
            <FaCirclePlus className="rounded-full border border-white size-12 text-[#2A6BFD] bg-white"/>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="flex flex-wrap justify-evenly items-center mt-10 pb-6">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <img
            key={num}
            className="h-16 md:h-20 object-contain"
            src={`/cloudsparrow-all-img/image${num}.png`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default BannerFooter;
