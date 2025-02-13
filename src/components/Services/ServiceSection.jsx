import React from "react";

const ServiceSection = ({ title, bgcolor, color, btcolor, pcolor, content , features }) => {
  return (
    <div style={{ color, backgroundColor: bgcolor }} className="skew-y-1 lg:skew-y-2">
      <div className="relative flex py-10 lg:px-30 gap-16 text-start -skew-y-1 lg:-skew-y-2">
        <div className="lg:w-[60%] py-2 px-10 lg:px-20 lg:py-10">
          <div>
            <p className="uppercase font-medium">Un-Put-Downable</p>
          </div>
          <div className="my-4">
            <h1 className="lg:text-5xl text-3xl font-medium">{title}</h1>
          </div>
          <div className="my-8">
            <p className="text-xs font-medium" style={{ color: pcolor }}>
              {content}
            </p>
          </div>
          <div className="my-8">
            <ol className="my-2 px-4 list-disc font-medium text-sm">
              {features.map((feature)=>{
                return <li key={feature} className="my-2">{feature}</li>
              })}
            </ol>
          </div>
          <div>
            <button
              style={{ color: btcolor }}
              className="uppercase py-3 px-10 border rounded-md text-xs font-medium"
            >
              View More
            </button>
          </div>
        </div>
        <div className="hidden lg:flex justify-center w-[40%]">
          <div className="border-x-1 mt-10">
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6">
              <img
                src={"/cloudsparrow-all-img/angular.png"}
                alt=""
                className="size-20"
              />
              <p>Angular</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6 border-y-1">
              <img
                src={"/cloudsparrow-all-img/ionic.png"}
                alt=""
                className="size-20"
              />
              <p>Ionic</p>
            </div>
          </div>
          <div className="mt-30">
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6 border-t-1">
              <img
                src={"/cloudsparrow-all-img/node.png"}
                alt=""
                className="size-20"
              />
              <p>Node.js</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6 border-y-1">
              <img
                src={"/cloudsparrow-all-img/react.png"}
                alt=""
                className="size-20"
              />
              <p>React</p>
            </div>
          </div>
          <div className="border-x-1">
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6">
              <img
                src={"/cloudsparrow-all-img/kotlin.png"}
                alt=""
                className="size-20"
              />
              <p>Kotlin</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6 border-y-1">
              <img
                src={"/cloudsparrow-all-img/flutter.png"}
                alt=""
                className="size-20"
              />
              <p>Flutter</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center px-10 py-6 border-b-1">
              <img
                src={"/cloudsparrow-all-img/swift.png"}
                alt=""
                className="size-20"
              />
              <p>Swift</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
