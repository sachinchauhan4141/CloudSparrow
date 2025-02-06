import React from "react";
import CraftProduct from "../Common/CraftProduct";

const About = () => {
  return (
    <>
      <div className="text-center py-48 px-60 bg-[radial-gradient(circle_at_bottom,#FDE7E1_20%,#FFF9EC_30%,#FFFFFF_60%)]">
        <h1 className="text-7xl font-bold leading-20">
          GOOD THINGS HAPPEN <br /> WHEN YOU SAY
          <p className="text-[#407BFF]">“Hello”</p>
        </h1>
      </div>
      <CraftProduct />
    </>
  );
};

export default About;
