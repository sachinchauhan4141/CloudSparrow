import React, { useRef } from "react";

const CraftProduct = () => {
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
    <div className={"py-2 gap-16 text-[#1F252B]"}>
      <div className="flex px-30">
        <div className="w-[40%]">
          <h1 className="text-6xl font-medium">
            We share how <br /> to craft{" "}
            <span className="text-[#EC4918]">products</span>
          </h1>
        </div>
        <div className="flex justify-center items-end w-[40%]">
          <p className="text-sm font-medium">
            Lorem Ipsum is simply dummy text of the printing and --- <br />
            industry site Ipsum has been the site
          </p>
        </div>
        <div className="flex justify-center items-end gap-4 w-[20%]">
          <button
            onClick={() => scroll("left")}
            className="border border-[#9CA7AA] rounded-4xl px-6 py-1 font-bold text-3xl"
          >
            &larr;
          </button>
          <button
            onClick={() => scroll("right")}
            className="border border-[#9CA7AA] rounded-4xl px-6 py-1 font-bold text-3xl"
          >
            &rarr;
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="px-8 my-14 flex gap-8 overflow-x-scroll no-scrollbar"
      >
        <div className="relative min-w-[40vw] h-[60vh] rounded-2xl overflow-hidden">
          <img
            src={"/cloudsparrow-all-img/car.png"}
            alt=""
            className="size-full"
          />
          <div className="absolute top-0 left-0 flex flex-col justify-between items-start w-full h-full px-4 py-6">
            <div className="border size-16">
              <img src="" alt="" />
            </div>
            <div className="">
              <button className="bg-[#F48B3A] rounded-4xl px-8 py-4 text-xs font-medium cursor-pointer">
                PROJECT 01
              </button>
            </div>
          </div>
        </div>
        <div className="relative min-w-[22vw] h-[60vh] rounded-2xl overflow-hidden">
          <img
            src={"/cloudsparrow-all-img/man.png"}
            alt=""
            className="size-full"
          />
          <div className="absolute top-0 left-0 flex flex-col justify-between items-start w-full h-full px-4 py-6">
            <div className="border size-16">
              <img src="" alt="" />
            </div>
            <div className="">
              <button className="bg-[#F48B3A] rounded-4xl px-8 py-4 text-xs font-medium cursor-pointer">
                PROJECT 02
              </button>
            </div>
          </div>
        </div>
        <div className=" relative min-w-[22vw] h-[60vh] rounded-2xl overflow-hidden">
          <img
            src={"/cloudsparrow-all-img/children.png"}
            alt=""
            className="size-full"
          />
          <div className="absolute top-0 left-0 flex flex-col justify-between items-start w-full h-full px-4 py-6">
            <div className="border size-16">
              <img src="" alt="" />
            </div>
            <div className="">
              <button className="bg-[#F48B3A] rounded-4xl px-8 py-4 text-xs font-medium cursor-pointer">
                PROJECT 03
              </button>
            </div>
          </div>
        </div>
        <div className="relative min-w-[22vw] h-[60vh] rounded-2xl overflow-hidden">
          <img
            src={"/cloudsparrow-all-img/model.png"}
            alt=""
            className="size-full"
          />
          <div className="absolute top-0 left-0 flex flex-col justify-between items-start w-full h-full px-4 py-6">
            <div className="border size-16">
              <img src="" alt="" />
            </div>
            <div className="">
              <button className="bg-[#F48B3A] rounded-4xl px-8 py-4 text-xs font-medium cursor-pointer">
                PROJECT 04
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftProduct;
