import React from "react";

const ServiceSection = ({ title, bgcolor, color }) => {
  return (
    <>
      <div className={"flex py-20 px-30 border gap-16 text-start h-[96vh] "+" text-["+color+"] bg-["+bgcolor+"] "}>
        <div className="w-[60%] px-20 py-10">
          <div>
            <p className="uppercase font-medium">Un-Put-Downable</p>
          </div>
          <div className="my-4">
            <h1 className="text-5xl font-medium">{title}</h1>
          </div>
          <div className="my-8">
            <p className="text-sm text-[#ABABAB]">
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br />
              industry. Lorem Ipsum has been the industry's standard dummy text{" "}
              <br />
              ever since the 1500s, when an unknown printer took a galley of
              type <br /> and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="my-8">
            <ol className="my-2">
              <li className="my-2">Native Applications</li>
              <li className="my-2">Hybrid Apps</li>
              <li className="my-2">Frameworks and Libraries</li>
              <li className="my-2">Automated QA services</li>
            </ol>
          </div>
          <div>
            <button className="uppercase py-3 px-10 text-[#F48B3A] border rounded-md text-xs font-medium">
              View More
            </button>
          </div>
        </div>
        <div className="flex justify-center w-[40%]">
          <div className="border-x-1 mt-10">
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6">
              <img src="" alt="" className="size-20" />
              <p>Angular</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6 border-y-1">
              <img src="" alt="" className="size-20" />
              <p>Angular</p>
            </div>
          </div>
          <div className="mt-30">
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6 border-t-1">
              <img src="" alt="" className="size-20" />
              <p>Angular</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6 border-y-1">
              <img src="" alt="" className="size-20" />
              <p>Angular</p>
            </div>
          </div>
          <div className="border-x-1">
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6">
              <img src="" alt="" className="size-20" />
              <p>Angular</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6 border-y-1">
              <img src="" alt="" className="size-20" />
              <p>Angular</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6 border-b-1">
              <img src="" alt="" className="size-20" />
              <p>Angular</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
