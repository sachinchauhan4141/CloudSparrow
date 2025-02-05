import React from "react";

const CraftProduct = () => {
  return (
    <div className={"py-10 gap-16 text-[#1F252B]"}>
      <div className="flex px-30">
        <div className="w-[40%]">
          <h1 className="text-6xl font-medium">
            We share how <br /> to craft{" "}
            <span className="text-[#EC4918]">products</span>
          </h1>
        </div>
        <div className="flex justify-start items-end w-[40%]">
          <p>
            Lorem Ipsum is simply dummy text of the printing and --- <br />
            industry site Ipsum has been the site
          </p>
        </div>
        <div className="flex justify-start items-end gap-4 w-[20%]">
          <button className="border rounded-2xl px-4 py-2">{"<--"}</button>
          <button className="border rounded-2xl px-4 py-2">{"-->"}</button>
        </div>
      </div>
      <div className="px-8 my-10 flex gap-8 overflow-x-scroll no-scrollbar">
        <div className="min-w-[40vw] h-[60vh] rounded-2xl overflow-hidden">
          <img
            src={"/cloudsparrow-all-img/car.png"}
            alt=""
            className="size-full"
          />
        </div>
        <div className="min-w-[22vw] h-[60vh] rounded-2xl overflow-hidden">
          <img
            src={"/cloudsparrow-all-img/man.png"}
            alt=""
            className="size-full"
          />
        </div>
        <div className="min-w-[22vw] h-[60vh] rounded-2xl overflow-hidden">
          <img
            src={"/cloudsparrow-all-img/children.png"}
            alt=""
            className="size-full"
          />
        </div>
        <div className="min-w-[22vw] h-[60vh] rounded-2xl overflow-hidden">
          <img
            src={"/cloudsparrow-all-img/model.png"}
            alt=""
            className="size-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CraftProduct;
