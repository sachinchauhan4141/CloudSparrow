import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Title Section */}
      <div className="w-[80%] text-left">
        <p className=" font-bold text-[58px] text-[#0C0C0C] mt-[50px] leading-14">
          WE REIMAGINE DIGITAL NARRATIVES, EMPOWERING BRANDS TO CONNECT WITH
          CONSUMERS IN <span className="bg-gradient-to-r from-[#2A6BFD] via-[#11CED2] to-[#11CED2] inline-block text-transparent bg-clip-text">MEANINGFUL WAYS</span>.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-row items-center w-full mt-[40px]">
        {/* Image Section */}
        <div className="w-[900px] h-[440px] mr-8">
          <img
            className="size-full"
            src="/cloudsparrow-all-img/ThirdPage.png"
            alt=""
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col w-[460px] h-[400px] ml-[60px] text-left">
          <div className="flex items-center justify-start">
            <img
              className="h-[35px] w-[35px]"
              src="/cloudsparrow-all-img/ThirdPage2.png"
              alt=""
            />
            <p className=" text-[30px] font-bold pl-[20px] max-w-96 leading-tight">
              A multi-disciplined creative company
            </p>
          </div>

          <div className="font-[Public Sans] mt-[20px]">
            <p className="text-[16px]">
              Under the name World Fax Services, Inc., our company has been
              successfully creating various projects in the fields of web
              development and other online services for 10 years.
            </p>
            <p className="text-[14px] md:text-[16px] mt-[20px]">
              Today Cloud Sparrow Technologies continues to be the online
              leading company where businesses can find each and every online
              service they may need.
            </p>

            <button className="flex items-center justify-center md:justify-evenly h-[35px] w-[130px] md:w-[100px]  text-[12px] text-white bg-[#2A6BFD] font-semibold rounded-[4px] mt-[20px] mx-auto md:mx-0">
              <BiMessageRoundedDetail className="text-lg md:text-xl" />
              Let's Talk
            </button>
          </div>
          <div className="font-[Public Sans] flex items-center justify-between mt-18">
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center overflow-hidden w-36">
                <img
                  className="absolute size-12"
                  src="/cloudsparrow-all-img/Ellipse 3.png"
                  alt=""
                />
                <img
                  className="absolute mx-8 size-12"
                  src="/cloudsparrow-all-img/Ellipse 4.png"
                  alt=""
                />
                <img
                  className="absolute mx-16 size-12"
                  src="/cloudsparrow-all-img/Ellipse 5.png"
                  alt=""
                />
                <FaCirclePlus className="absolute mx-24 mb-1 rounded-full border border-white size-10 text-[#2A6BFD] bg-white" />
              </div>
              <div className="text-[12px] max-w-32 font-medium text-[#0C0C0C]">
                <p>Meet our IT team of designers & developers</p>
              </div>
            </div>
            <div>
              <button className="text-[12px] px-6 py-2 border border-[#0374BB33] rounded-lg text-[#0C0C0C]">
                {"About Us >"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
