import React from "react";
import { JobPage } from "./JobPage";

const Careers = () => {
  return (
    <>
      <div className="bg-[url('./assets/careerimg.png')] bg-cover bg-center min-h-[500px] text-white">
        <div className="font-[Fivo Sans Modern] pl-28 w-[1600px] min-h-[500px] bg-gradient-to-r from-[#080808B8] via-transparent to-transparent flex flex-col items-start justify-center">
          <div>
            <p className="font-extrabold text-[14px]">
              HOME / <span className="text-[#0F75BC]">CAREERS</span>
            </p>
          </div>
          <h1 className="font-bold text-[74px]">Join the Cloud-Sparrow</h1>
          <p className="font-bold text-[20px]">
            At Cloud-Sparrow, we are on a mission to revolutionize the way{" "}
            <br /> businesses approach Hyperautomation & digital transformation.
          </p>
        </div>
      </div>
      <div className="p-12 flex mx-20">
        <div className="w-1/2">
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
        <div className="w-1/2 mt-12 ml-18">
          <h1 className="font-[Fivo Sans Modern] font-bold text-[48px] text-[#080808] leading-[1.1]">
            Doers. Hackers.
            <br /> Thinkers.
          </h1>
          <p className="font-[Fivo Sans Modern] text-[16px] my-6 font-medium text-[#080808]">
            Cloud-Sparrow is a product engineering company working with
            innovative <br /> startups and enterprises. We have provided core
            product development <br /> for 110+ startups across the globe
            building products in the cloud-
            <br />
            native, data engineering, B2B SaaS & Machine Learning space. Our{" "}
            <br /> team of 350+ elite software engineers solve hard technical
            problems <br /> while transforming customer ideas into successful
            products.
          </p>
          <button className="bg-[#0F75BC] py-2 px-6 rounded-sm text-white text-[15px]">
            See Open Positions
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="font-[Fivo Sans Modern] text-center font-bold text-[64px] text-[#080808] w-1/2 leading-[1.1]">
          Career growth
          <br />
          is always in sight.
        </h1>
        <p className="font-[Fivo Sans Modern] text-[16px] my-6 font-medium text-[#080808] w-1/2 text-center">
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
