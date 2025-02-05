import React from "react";
import ServiceSection from "./ServiceSection";
import DevCulture from "./DevCulture";
import CraftProduct from "./CraftProduct";

const Services = () => {
  return (
    <>
      <div className="flex text-center py-48 px-50 border gap-16 text-[#1F252B]">
        <div className="w-[40%]">
          <div className="">
            <p className="py-2 px-9 border border-dashed text-2xl w-fit rounded-md">
              Our Services <span>*</span>
            </p>
          </div>
          <div className="my-10">
            <h1 className="text-7xl font-bold text-start">
              We dazzle your clients
            </h1>
          </div>
          <div>
            <h3 className="text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h3>
          </div>
          <div className="flex justify-start my-8">
            <button
              type="submit"
              className="uppercase py-3 px-10 bg-[#F48B3A] rounded-md text-xs font-medium text-white"
            >
              Get Started Now!
            </button>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="flex gap-7 justify-end">
            <Card text="Marketing that sells" color="#499DFF" />
            <Card text="Designs that tell stories" color="#FDE284" />
          </div>
          <div className="flex gap-7 mt-8">
            <Card text="Apps that compel" color="#FF9559" />
            <Card text="Development that propels growth" color="#00CA8E" />
          </div>
        </div>
      </div>
      <ServiceSection
        title="Website Development"
        bgcolor="#1D1D1D"
        color="#FFFFFF"
      />
      <ServiceSection
        title="Product Development"
        bgcolor="#FDE284"
        color="#1F252B"
      />
      <ServiceSection
        title="App Development"
        bgcolor="#FF9559"
        color="#1F252B"
      />
      <ServiceSection
        title="Digital Marketing & SEO
"
        bgcolor="#00CA8E"
        color="#1F252B"
      />
      <ServiceSection
        title="UI/UX Designing"
        bgcolor="#C1EBFF"
        color="#1F252B"
      />
      <ServiceSection
        title="Quality Assurance"
        bgcolor="#FFDFFA"
        color="#1F252B"
      />
      <ServiceSection
        title="Consulting & Assurance"
        bgcolor="#FDE6AE"
        color="#1F252B"
      />
      <ServiceSection
        title="Content Writing"
        bgcolor="#64E9A5"
        color="#1F252B"
      />
      <ServiceSection
        title="Logo Designing & Branding"
        bgcolor="#985DF6"
        color="#1F252B"
      />
      <DevCulture />
      <CraftProduct />
    </>
  );
};

export const Card = ({ icon, text, image, color }) => {
  return (
    <div className={"w-[36%] rounded-lg p-4 text-xl bg-[" + color + "] "}>
      <div className="flex justify-end">
        <img src={icon} alt="" className="border size-9" />
      </div>
      <div className="my-4 text-start">
        <h3 className="font-medium">
          <span className="font-bold">{text?.substring(0, 1)}</span>
          {text?.substring(1)}
        </h3>
      </div>
      <div className="flex justify-center items-center size-32 mt-4">
        <img src={image} alt="" className="border" />
      </div>
    </div>
  );
};

export default Services;
