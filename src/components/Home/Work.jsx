import React, { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Work = () => {
  const [curr, setCurr] = useState(0);

  const data = [
    "/cloudsparrow-all-img/bottomTab.png",
    "/cloudsparrow-all-img/discussion.png",
    "/cloudsparrow-all-img/meating.png",
  ];

  const prev = () => {
    curr == 0 ? setCurr(data.length - 1) : setCurr(curr - 1);
  };

  const next = () => {
    curr == data.length - 1 ? setCurr(0) : setCurr(curr + 1);
  };

  return (
    <div className="hidden lg:block mt-10">
      <div className="w-full relative">
        <img
          className="h-80 w-full absolute"
          src="/cloudsparrow-all-img/work1.png"
          alt=""
        />
        <img
          className="h-80 w-full absolute top-0"
          src="/cloudsparrow-all-img/work2.png"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-12 items-center justify-center w-full px-8 pt-66">
        <Link
          to={"/portfolio"}
          className="z-10 text-sm font-bold px-4 py-2 bg-[#2A6BFD] text-white rounded-md"
        >
          Explore Our Work
        </Link>
        <div className="flex items-center justify-evenly bg-[url('/cloudsparrow-all-img/Rectangle24.png')] h-[80vh] w-full px-40">
          <div className="flex flex-col justify-between items-center w-[25%] h-full">
            <div className="flex items-center justify-center h-[40%]">
              <img
                className="w-36"
                src="/cloudsparrow-all-img/peakStudio.png"
                alt=""
              />
            </div>
            <div className="bottom-0 rounded-t-md overflow-hidden border border-l-3 ">
              <img
                className="w-36 h-80"
                src="/cloudsparrow-all-img/phoneimg.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center w-[54%] gap-18">
            <div className="relative rounded-xl overflow-hidden border-4 h-72 w-[540px]">
              <img className="w-full h-full" src={data[curr]} alt="" />
            </div>
            <div className="hidden justify-between items-center w-full text-white">
              <IoIosArrowDropleftCircle
                onClick={prev}
                className="rounded-full border border-white size-8"
              />
              <button className="font-bold text-sm">CHECK VIEW PROJECT</button>
              <IoIosArrowDroprightCircle
                onClick={next}
                className="rounded-full border border-white size-8 "
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-20 items-center w-[25%] h-full">
            <div className="flex items-center justify-center">
              <Link
                to={"/portfolio"}
                className="rounded-sm font-bold text-xs border bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
              >
                Check Live Project
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden border-3 ">
              <img
                className="w-36 h-70"
                src="/cloudsparrow-all-img/phoneimg2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
