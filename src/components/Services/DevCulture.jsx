import React from "react";

const data = [
  "Healthcare",
  "Cloud Solutions",
  "e-Commerce",
  "Sports",
  "Gaming",
  "Travel",
  "Insurance",
  "Real Estate",
  "Marketing & Advertisement",
  "Automobile",
  "Logistics",
  "Education & Non Profit",
  "Manufacturing",
  "Media & Entertainment",
  "Technology & Consulting",
];

const DevCulture = () => {
  return (
    <div className={"py-24 px-30 gap-16 text-center text-[#1F252B]"}>
      <div className="my-4">
        <h1 className="text-6xl font-medium">
          Create the culture of <br />{" "}
          <span className="text-[#EC4918]">development by</span> Industry.
        </h1>
      </div>
      <div className="my-10 w-fit mx-auto p-2">
        <h3 className="text-sm font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem <br /> Ipsum has been the industry's standard dummy
          text ever since the 1500s
        </h3>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center px-14">
        {data.map((data) => (
          <p
            key={data}
            className="py-2 px-9 border border-dashed text-2xl w-fit rounded-md"
          >
            {data}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DevCulture;
