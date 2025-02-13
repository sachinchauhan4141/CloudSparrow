import React from "react";
import { Link } from "react-router-dom";
import ServiceSection from "./ServiceSection";
import DevCulture from "./DevCulture";
import CraftProduct from "../Common/CraftProduct";
import { SERVICES } from "../../utils/dummyData";
import { CARDS } from "../../utils/dummyData";

const Services = () => {
  return (
    <>
      <div className="px-6 lg:flex text-center pt-24 pb-10 lg:pt-48 lg:pb-20 lg:px-50 lg:gap-16 text-[#1F252B]">
        <div className="lg:w-[40%]">
          <p className="py-2 px-2 lg:px-9 border border-[#9CA7AA] border-dashed text-xl lg:text-2xl w-fit rounded-md">
            Our Services <span>*</span>
          </p>
          <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-start lg:my-10 my-4">
            We dazzle your clients
          </h1>
          <h3 className="text-start">
          We’re here to bring your vision to life.
            </h3>
          <div className="flex justify-start my-8">
            <button className="uppercase py-3 px-10 bg-[#F48B3A] rounded-md text-xs font-medium text-white">
              <Link to="/contact">Get Started Now!</Link>
            </button>
          </div>
        </div>
        <div className="lg:w-[60%] w-full">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-7 lg:justify-end">
            <Card
              {...CARDS[0]}
            />
            <Card
              {...CARDS[1]}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-7 lg:mt-8 mt-2">
          <Card
              {...CARDS[2]}
            />
            <Card
              {...CARDS[3]}
            />
          </div>
        </div>
      </div>
      {SERVICES.map((service, index) => (
        <ServiceSection key={index} {...service} />
      ))}
      <DevCulture />
      <CraftProduct />
    </>
  );
};

const Card = ({ icon, text, image, color }) => {
  return (
    <div style={{ backgroundColor: color }} className="lg:w-[36%] rounded-lg p-4 text-xl">
      <div className="flex justify-end">
        <img src={icon} alt="" className="size-9" />
      </div>
      <h3 className="my-4 text-start font-medium">
        <span className="font-bold">{text[0]}</span>
        {text.slice(1)}
      </h3>
      <div className="flex justify-center items-center size-32 mt-10 mx-auto">
        <img src={image} alt="" className="size-full" />
      </div>
    </div>
  );
};

export default Services;
