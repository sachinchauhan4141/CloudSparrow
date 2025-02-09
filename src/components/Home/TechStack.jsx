import React from "react";
import { Link } from "react-router-dom";

const TechStack = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center">
      {/* top section */}
      <div className="border-y-2 border-[#0C0C0C] w-full text-center py-5">
        <img src="" alt="" />
        <p className="uppercase text-[#2A6BFD] text-sm font-bold">
          Technology stack we use for
        </p>
        <img src="" alt="" />
      </div>
      {/* mid section */}
      <div className="bg-[url('./assets/brandsBg.png')] flex flex-col gap-6 justify-center items-center w-[80vw] border-x-2 ">
        {/* mid top section */}
        <div className="pt-14 px-60 text-center">
          <h1 className="uppercase font-bold text-6xl">
            The Technology <br /> we use and abuse
          </h1>
        </div>
        {/* middle section */}
        <div className="">
          <button className="text-sm font-bold px-8 py-3 bg-[#2A6BFD] text-white rounded-md">
            <Link to={"/contact"}>Work With Us</Link>
          </button>
        </div>
        {/* mid bottom section */}
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center">
            <div className="grid grid-cols-4 grid-rows-3">
              <div className="size-16 text-transparent">1</div>
              <div className="size-16 text-transparent">2</div>
              <div className="size-16 text-transparent">3</div>
              <div className="size-16 border-2 border-r-0 flex items-center justify-center">
                <img src="/cloudsparrow-all-img/react.png" alt="" />
              </div>
              <div className="size-16 text-transparent">5</div>
              <div className="size-16 text-transparent">6</div>
              <div className="size-16 border-2 flex items-center justify-center">
                <img src="/cloudsparrow-all-img/js.png" alt="" />
              </div>
              <div className="size-16 text-transparent">8</div>
              <div className="size-16 text-transparent">9</div>
              <div className="size-16 border-2 border-b-0 flex items-center justify-center">
                <img src="/cloudsparrow-all-img/react.png" alt="" />
              </div>
              <div className="size-16 text-transparent">11</div>
              <div className="size-16 text-transparent">12</div>
            </div>
            <div className="grid grid-cols-4 grid-rows-3">
              <div className="size-16 border-2 flex items-center justify-center">
                <img src="/cloudsparrow-all-img/red.png" alt="" />
              </div>
              <div className="size-16 text-transparent">2</div>
              <div className="size-16 text-transparent">3</div>
              <div className="size-16 text-transparent">4</div>
              <div className="size-16 text-transparent">5</div>
              <div className="size-16 border-2 flex items-center justify-center">
                <img src="/cloudsparrow-all-img/php.png" alt="" />
              </div>
              <div className="size-16 text-transparent">7</div>
              <div className="size-16 text-transparent">8</div>
              <div className="size-16 text-transparent">9</div>
              <div className="size-16 text-transparent">10</div>
              <div className="size-16 border-2 border-b-0 flex items-center justify-center">
                <img src="/cloudsparrow-all-img/kotlin.png" alt="" />
              </div>
              <div className="size-16 text-transparent">12</div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div></div>
            <div className="grid grid-cols-4 grid-rows-3">
              <div className="size-16 border-2 flex items-center justify-center">
                <img src="/cloudsparrow-all-img/wordpress.png" alt="" />
              </div>
              <div className="size-16 text-transparent">2</div>
              <div className="size-16 text-transparent">3</div>
              <div className="size-16 text-transparent">4</div>
              <div className="size-16 text-transparent">5</div>
              <div className="size-16 border-2 flex items-center justify-center">
                <img src="/cloudsparrow-all-img/woo.png" alt="" />
              </div>
              <div className="size-16 text-transparent">7</div>
              <div className="size-16 text-transparent">8</div>
              <div className="size-16 text-transparent">9</div>
              <div className="size-16 text-transparent">10</div>
              <div className="size-16 border-2 border-b-0 flex items-center justify-center">
                <img src="/cloudsparrow-all-img/shopify.png" alt="" />
              </div>
              <div className="size-16 text-transparent">12</div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="border-y-2 border-[#0C0C0C] w-full text-center flex justify-center items-center">
        <div className="flex w-[80vw] border-x-1">
          <div className="size-16 border-r-2 border-l-1 flex items-center justify-center">
            <img src="/cloudsparrow-all-img/angular.png" alt="" />
          </div>
          <div className="h-16 w-96 text-center flex items-center justify-center">
            <p className="uppercase text-[#000000] text-lg font-medium">
              Now Booking New Projects
            </p>
          </div>
          <div className="size-16 border-x-2 flex items-center justify-center">
            <img src="/cloudsparrow-all-img/swift.png" alt="" />
          </div>
          <div className="h-16 w-[652px] text-center flex justify-between items-center">
            <div className="w-[80%]">
              <p className="uppercase text-[#323232] text-sm text-left pl-4">
                Get an on-demand, full-service creative partner—today.
              </p>
            </div>
            <div className="w-[20%]">
              <button className="text-sm font-bold px-4 py-2 border text-[#0C0C0C] rounded-md">
                Book a Call
              </button>
            </div>
          </div>
          <div className="size-16 border-l-2 border-r-1 flex items-center justify-center">
            <img src="/cloudsparrow-all-img/adobe.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
