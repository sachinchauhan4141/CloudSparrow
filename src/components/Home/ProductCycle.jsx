import React from "react";
import { FaPlus } from "react-icons/fa";

const ProductCycle = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-[#2A6BFD] to-[#14b4f4] relative">
      <div className="bg-gradient-to-b from-gray-300 via-white to-white h-full rounded-b-4xl py-28 px-20">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-6 flex flex-row items-start">
            <div className="w-3xl text-left">
              <div className="flex gap-4 w-full mb-4">
                <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
                <p className="text-[12px] text-[#2A6BFD] font-bold">
                  OUR PRODUCT DEVELOPMENT CYCLE
                </p>
              </div>
              <p className=" text-6xl font-bold leading-16">
                DISCOVER HOW OUR SOFTWARE HOUSE DEVELOPS HIGH-QUALITY WEB AND
                MOBILE APPS
              </p>
              <button className="h-10 w-36 mt-7  text-sm text-white bg-[#2A6BFD] font-semibold rounded-[4px]">
                Let's Start
              </button>
            </div>
            <div className="mt-5">
              <img
                className="h-80 w-80 object-cover"
                src="/cloudsparrow-all-img/ninth.jpeg"
                alt="No"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center pt-12 flex-wrap">
            <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
            <p className=" text-[10px] sm:text-[12px] text-[#2A6BFD] font-bold ml-4">
              FAQ
            </p>
            <img
              className="ml-5"
              src="/cloudsparrow-all-img/FourthPage.png"
              alt="No"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-7 leading-16">
            <p className=" text-6xl font-bold text-center">WHAT PROBLEM ARE</p>
            <p className=" text-6xl font-bold text-center">
              YOU TRYING TO SOLVE?
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6 items-center justify-center">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-24 min-h-[90vh]">
        <div className="flex flex-wrap items-center justify-center">
          <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
          <p className=" text-[12px] sm:text-[14px] text-white font-bold ml-4">
            AVAILABLE FOR PROJECTS
          </p>
          <img
            className="ml-5"
            src="/cloudsparrow-all-img/FourthPage.png"
            alt="No"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center my-4">
          <p className=" text-6xl text-white font-bold">LET'S BUILD YOUR</p>
          <p className=" text-6xl text-white font-bold">PRODUCT TOGETHER</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-2">
          <p className=" text-sm text-white font-bold">
            Partner with us for a digital journey that transforms your business
            ideas
          </p>
          <p className=" text-sm text-white font-bold">
            into successful, cutting-edge solutions.
          </p>
          <button className="h-8 w-24 mt-4  text-[12px] text-[#2A6BFD] bg-white font-semibold rounded-[4px] hover:cursor-pointer">
            Let's Start
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full items-center mt-5">
        <img
          src="/cloudsparrow-all-img/FooterImage.png"
          alt="UI Design"
          className="absolute w-full shadow-lg rounded-lg bottom-0"
        />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex items-center justify-between w-lg py-4 px-6 mt-2 border rounded-md border-[#0C0C0C33]">
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <FaPlus className="text-[#2A6BFD] text-xl" />
    </div>
  );
};

export default ProductCycle;
