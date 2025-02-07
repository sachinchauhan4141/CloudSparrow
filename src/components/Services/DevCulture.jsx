import React from "react";

const data = [
  { title: "Healthcare", icon: "/cloudsparrow-all-img/heart.png" },
  { title: "Cloud Solutions", icon: "/cloudsparrow-all-img/cloudbulb.png" },
  { title: "e-Commerce", icon: "/cloudsparrow-all-img/bucket.png" },
  { title: "Sports", icon: "/cloudsparrow-all-img/balls.png" },
  { title: "Gaming", icon: "/cloudsparrow-all-img/controller.png" },
  { title: "Travel", icon: "/cloudsparrow-all-img/earth.png" },
  { title: "Insurance", icon: "/cloudsparrow-all-img/insurance.png" },
  { title: "Real Estate", icon: "/cloudsparrow-all-img/realestate.png" },
  {
    title: "Marketing & Advertisement",
    icon: "/cloudsparrow-all-img/marketing.png",
  },
  { title: "Automobile", icon: "/cloudsparrow-all-img/automobile.png" },
  { title: "Logistics", icon: "/cloudsparrow-all-img/logistics.png" },
  {
    title: "Education & Non Profit",
    icon: "/cloudsparrow-all-img/education.png",
  },
  { title: "Manufacturing", icon: "/cloudsparrow-all-img/manufacturing.png" },
  { title: "Media & Entertainment", icon: "/cloudsparrow-all-img/media.png" },
  {
    title: "Technology & Consulting",
    icon: "/cloudsparrow-all-img/technology.png",
  },
];

const DevCulture = () => {
  return (
    <div
      className={"p-4 lg:py-24 lg:px-30 gap-16 lg:text-center text-[#1F252B]"}
    >
      <div className="my-4">
        <h1 className="lg:text-6xl text-3xl font-medium">
          Create the culture of <br />{" "}
          <span className="text-[#EC4918]">development by</span> Industry.
        </h1>
      </div>
      <div className="my-4 lg:my-10 w-fit mx-auto p-2">
        <h3 className="text-sm font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem <br /> Ipsum has been the industry's standard dummy
          text ever since the 1500s
        </h3>
      </div>

      <div className="flex lg:flex-wrap gap-4 items-center justify-center lg:px-14 mx-4 lg:mx-0 overflow-scroll lg:overflow-visible">
        {data.map((data) => (
          <div
            key={data.title}
            className="border border-dashed border-[#9CA7AA] flex justify-center gap-4 items-center py-1 px-2 rounded-md"
          >
            <p className="text-sm w-fit font-medium">{data.title}</p>
            <div className="size-12 rounded-md overflow-hidden bg-[#FFEDC1] p-2">
              <img src={data.icon} alt={data.title} className="size-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevCulture;
