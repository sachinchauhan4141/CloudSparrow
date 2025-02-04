import React, { useRef } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col h-full py-16 mx-30">
      {/* Header Section */}
      <div className="flex items-center mt-6">
        <img
          src="/cloudsparrow-all-img/FourthPage.png"
          alt="No"
          className="w-auto"
        />
        <p className=" text-[#2A6BFD] font-bold text-[16px] ml-3">
          TESTIMONIALS
        </p>
      </div>
      <div className="flex gap-20">
        <div>
          {/* Title and Description */}
          <div className="mt-8">
            <h2 className=" text-5xl font-bold leading-12">
              WHAT OUR HAPPY CUSTOMERS SAY
            </h2>
            <p className=" text-sm mt-4 w-sm">
              Lorem ipsum dolor sit amet consectetur. Eu auctor faucibus nunc
              accumsan tristique augue sodales egestas orci.
            </p>
          </div>

          {/* CTA Button */}
          <button className="mt-6 h-10 w-36  text-[14px] bg-[#2A6BFD] text-white font-semibold rounded-[6px]">
            Work With Us
          </button>
          <div className="font-[Public Sans] flex flex-col mt-12">
            <p className="mb-6">Satisfied customers! 😮</p>
            <div className="flex gap-2">
              <div className="flex items-center overflow-hidden w-36">
                <img
                  className="absolute size-10"
                  src="/cloudsparrow-all-img/Ellipse 3.png"
                  alt=""
                />
                <img
                  className="absolute mx-8 size-10"
                  src="/cloudsparrow-all-img/Ellipse 4.png"
                  alt=""
                />
                <img
                  className="absolute mx-16 size-10"
                  src="/cloudsparrow-all-img/Ellipse 5.png"
                  alt=""
                />
                <FaCirclePlus className="absolute mx-24 mb-1 rounded-full border border-white size-8 text-[#2A6BFD] bg-white" />
              </div>
              <div className="text-sm max-w-32 font-medium text-[#0C0C0C]">
                <p>Join them now</p>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial Cards - Horizontal Scroll */}
        <div className="flex justify-start items-center gap-4 overflow-hidden">
          <IoIosArrowDropleftCircle
            onClick={() => scroll("left")}
            className="rounded-full border border-white size-20"
          />
          <div
            ref={scrollRef}
            className="overflow-x-scroll no-scrollbar mt-10 flex gap-6"
          >
            <Card />
            <Card />
            <Card />
          </div>
          <IoIosArrowDroprightCircle
            onClick={() => scroll("right")}
            className="rounded-full border border-white size-20 "
          />
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex flex-col justify-between border border-[#E5E5E5] rounded-2xl w-sm h-auto p-6 flex-shrink-0">
      {/* Quote and Stars */}
      <div className="flex items-center justify-between">
        <FaQuoteLeft className="text-blue-500 text-2xl" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-blue-500" />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="font-[Public Sans] text-[16px] text-[#0C0C0C] mt-6">
        Lorem ipsum dolor sit amet consectetur. Elementum integer ipsum sed
        accumsan nunc morbi dapibus. Egestas interdum commodo ut egestas nec.
        Varius auctor elit elit gravida viverra nisl neque facilisis. Mauris
        malesuada neque tortor ac nibh risus turpis nulla. Cursus viverra quis
        urna vestibulum eu id sed bibendum etiam.
      </p>
      <div className="my-2 bg-gradient-to-r from-white via-black to-white h-1 w-full"></div>
      <div className="flex justify-between gap-4 items-center">
        <div className="flex gap-2">
          <div>
            <img
              src="/cloudsparrow-all-img/Ellipse 4.png"
              alt=""
              className="size-10"
            />
          </div>
          <div className="text-[#323232]">
            <h1 className="text-sm font-bold">Kavin Douglas</h1>
            <p className="text-sm">Giga Finance Group</p>
          </div>
        </div>
        <div>
          <img
            src="/cloudsparrow-all-img/megaFinance.png"
            alt=""
            className="h-7 w-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
