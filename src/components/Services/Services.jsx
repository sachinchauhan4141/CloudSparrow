import React from "react";
import ServiceSection from "./ServiceSection";
import DevCulture from "./DevCulture";
import CraftProduct from "../Common/CraftProduct";

const Services = () => {
  return (
    <>
      <div className="flex text-center py-48 px-50 gap-16 text-[#1F252B]">
        <div className="w-[40%]">
          <div className="">
            <p className="py-2 px-9 border border-[#9CA7AA] border-dashed text-2xl w-fit rounded-md">
              Our Services <span>*</span>
            </p>
          </div>
          <div className="my-10">
            <h1 className="lg:text-7xl text-5xl font-bold text-start">
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
            <Card
              text="Marketing that sells"
              color="#499DFF"
              image={"/cloudsparrow-all-img/boytab.png"}
            />
            <Card
              text="Designs that tell stories"
              color="#FDE284"
              image={"/cloudsparrow-all-img/girlgallery.png"}
            />
          </div>
          <div className="flex gap-7 mt-8">
            <Card
              text="Apps that compel"
              color="#FF9559"
              image={"/cloudsparrow-all-img/girlwithphone.png"}
            />
            <Card
              text="Development that propels growth"
              color="#00CA8E"
              image={"/cloudsparrow-all-img/girlvideocall.png"}
            />
          </div>
        </div>
      </div>
      <ServiceSection
        title="Website Development"
        bgcolor="#1D1D1D"
        color="#FFFFFF"
        btcolor="#F48B3A"
        pcolor="#ABABAB"
      />
      <ServiceSection
        title="Product Development"
        bgcolor="#FDE284"
        color="#1F252B"
        btcolor="#1F252B"
        pcolor="#1F252B"
      />
      <ServiceSection
        title="App Development"
        bgcolor="#FF9559"
        color="#1F252B"
        btcolor="#1F252B"
        pcolor="#1F252B"
      />
      <ServiceSection
        title="Digital Marketing & SEO
"
        bgcolor="#00CA8E"
        color="#1F252B"
        btcolor="#1F252B"
        pcolor="#1F252B"
      />
      <ServiceSection
        title="UI/UX Designing"
        bgcolor="#C1EBFF"
        color="#1F252B"
        btcolor="#1F252B"
        pcolor="#1F252B"
      />
      <ServiceSection
        title="Quality Assurance"
        bgcolor="#FFDFFA"
        color="#1F252B"
        btcolor="#1F252B"
        pcolor="#1F252B"
      />
      <ServiceSection
        title="Consulting & Assurance"
        bgcolor="#FDE6AE"
        color="#1F252B"
        btcolor="#1F252B"
        pcolor="#1F252B"
      />
      <ServiceSection
        title="Content Writing"
        bgcolor="#64E9A5"
        color="#1F252B"
        btcolor="#1F252B"
        pcolor="#1F252B"
      />
      <ServiceSection
        title="Logo Designing & Branding"
        bgcolor="#985DF6"
        color="#1F252B"
        btcolor="#1F252B"
        pcolor="#1F252B"
      />
      <DevCulture />
      <CraftProduct />
    </>
  );
};

export const Card = ({ icon, text, image, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-[36%] rounded-lg p-4 text-xl"
    >
      <div className="flex justify-end">
        <img src={icon} alt="" className="border size-9" />
      </div>
      <div className="my-4 text-start">
        <h3 className="font-medium">
          <span className="font-bold">{text?.substring(0, 1)}</span>
          {text?.substring(1)}
        </h3>
      </div>
      <div className="flex justify-center items-center size-32 mt-4 mx-auto">
        <img src={image} alt="" className="size-full" />
      </div>
    </div>
  );
};

export default Services;
