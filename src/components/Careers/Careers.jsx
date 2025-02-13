import React from "react";
import { JobPage } from "./JobPage";

const Careers = () => {
  return (
    <>
      <div className="bg-[url('./assets/careerimg.png')] bg-cover bg-center lg:min-h-[500px] text-white">
        <div className="px-4 pt-26 pb-10 lg:px-0 lg:pt-0 lg:pb-0 lg:pl-28 lg:w-full lg:min-h-[500px] bg-gradient-to-r from-[#080808B8] via-transparent to-transparent flex flex-col items-start justify-center">
          <div>
            <p className="font-bold text-xs">
              HOME / <span className="text-[#0F75BC]">CAREERS</span>
            </p>
          </div>
          <h1 className="font-bold text-3xl my-4 lg:my-0 lg:text-[74px]">
            Join the Cloud-Sparrow
          </h1>
          <p className="font-bold text-sm lg:text-[20px]">
          At Cloud-Sparrow,<br className="hidden lg:block" /> we are on a mission to transform how businesses leverage <br className="hidden lg:block" /> digital marketing, web development, and design to achieve success.
            
          </p>
        </div>
      </div>
      <div className="p-4 lg:p-12 flex lg:mx-20 gap-20">
        <div className="hidden lg:block w-1/2">
          <div className="w-[610px] h-[546px] flex">
            <div className="overflow-hidden w-1/3 rounded-3xl">
              <img src="/cloudsparrow-all-img/girl1.jpeg" alt="" />
            </div>
            <div className="overflow-hidden w-1/3 h-[500px] rounded-3xl mx-1 mt-[40px]">
              <img src="/cloudsparrow-all-img/girl2.jpeg" alt="" />
            </div>
            <div className="overflow-hidden w-1/3 h-[420px] mt-[40px] rounded-3xl">
              <img src="/cloudsparrow-all-img/girl3.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:mt-12 lg:ml-18">
          <h1 className=" font-bold text-[48px] text-[#080808] leading-[1.1]">
            Innovators. Builders. <br /> Visionaries.
          </h1>
          <p className="text-[16px] my-6 font-medium text-[#080808]">
            At Cloud-Sparrow, we craft cutting-edge digital experiences that
            drive brand growth and engagement.
            <br className="hidden lg:block" /> From high-performance websites to
            seamless mobile apps, compelling marketing strategies, and visually
            stunning designs—we bring ideas to life.
            <br className="hidden lg:block" /> Our team of experts specializes
            in web and app development, UI/UX design, branding, and digital
            marketing to help businesses thrive in a competitive digital
            landscape.
          </p>
          <button className="bg-[#0F75BC] py-2 px-6 rounded-sm text-white text-[15px]">
            See Open Positions
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:items-center lg:justify-center lg:mb-12 mx-4 lg:mx-0 lg:text-center">
        <h1 className="font-bold text-4xl lg:text-[64px] text-[#080808] lg:w-1/2 lg:leading-[1.1]">
          Career growth
          <br />
          is always in sight.
        </h1>
        <p className="text-[16px] my-6 font-medium text-[#080808] lg:w-1/2">
          We see the career path as a sequence of careful choices, decisions &
          experiences that <br /> define you as a person & a professional.
          That’s why we ask you to share your career goals <br /> once you join
          us, so we can envision a future path tailor-made for you.
        </p>
      </div>
      <JobPage />
    </>
  );
};

export default Careers;
