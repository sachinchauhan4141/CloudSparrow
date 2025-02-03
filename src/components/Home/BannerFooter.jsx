import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

const BannerFooter = () => {
  return (
    <div className="flex flex-col w-full border bg-[#0C0C0C] px-8 py-9">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between w-full px-20">
        <p className="font-bold text-white text-6xl text-left leading-16">
          DIGITAL PRODUCTS <br /> EXPERIENCES
        </p>
        <img
          className="h-30"
          src="/cloudsparrow-all-img/secondPage.png"
          alt=""
        />
      </div>

      {/* Middle Section */}
      <div className="flex flex-row items-center justify-between w-full px-16">
        <div className="flex ml-8">
          <div className="size-64 p-4">
            <img
              className=""
              src="/cloudsparrow-all-img/webDesign.png"
              alt=""
            />
          </div>
          <div className="size-64 p-4">
            <img src="/cloudsparrow-all-img/mobileApp.png" alt="" />
          </div>
          <div className="size-64 p-4">
            <img src="/cloudsparrow-all-img/seo.png" alt="" />
          </div>
        </div>
        {/* right section */}
        <div className="text-white  text-left mx-auto pb-20">
          <div>
            <p className="text-[160px] font-semibold">4.0x</p>
          </div>
          <div className="my-2 bg-gradient-to-r from-black via-white to-black h-1 w-full"></div>
          <div className="flex gap-8 justify-center items-center">
            <p className="text-sm md:text-base">
              Use our most popular Brand & <br /> web design resources to <br />
              jumpstart your latest project.
            </p>
            <FaCirclePlus className="rounded-full border border-white size-12 text-[#2A6BFD] bg-white" />
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="flex flex-wrap justify-evenly items-center">
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
