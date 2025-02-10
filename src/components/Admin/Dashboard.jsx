import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const cards = [
    {
      text: "Manage Jobs",
      color: "#499DFF",
      image: "/cloudsparrow-all-img/boytab.png",
      icon: "/cloudsparrow-all-img/service_card_1_icon.png",
      path: "/dashboard/jobs",
    },
    {
      text: "Manage Users",
      color: "#FDE284",
      image: "/cloudsparrow-all-img/girlgallery.png",
      icon: "/cloudsparrow-all-img/service_card_2_icon.png",
      path: "/dashboard/users",
    },
    {
      text: "Manage Enquiries",
      color: "#FF9559",
      image: "/cloudsparrow-all-img/girlwithphone.png",
      icon: "/cloudsparrow-all-img/service_card_3_icon.png",
      path: "/dashboard/enquiry",
    },
    {
      text: "Manage UI",
      color: "#00CA8E",
      image: "/cloudsparrow-all-img/girlvideocall.png",
      icon: "/cloudsparrow-all-img/service_card_4_icon.png",
      path: "/dashboard/uidashboard",
    },
  ];

  return (
    <div className="py-16 px-24 min-h-screen bg-gray-200">
      <h1 className="text-5xl py-4">Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-7 lg:justify-end">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ icon, text, image, color, path }) => (
  <div style={{ backgroundColor: color }} className="lg:w-[36%] rounded-lg p-4 text-xl">
    <Link to={path}>
      <div className="flex justify-end">
        <img src={icon} alt="icon" className="size-9" />
      </div>
      <h3 className="my-4 text-start font-medium">
        <span className="font-bold">{text.charAt(0)}</span>
        {text.slice(1)}
      </h3>
      <div className="flex justify-center items-center size-32 mt-10 mx-auto">
        <img src={image} alt="" className="size-full" />
      </div>
    </Link>
  </div>
);

export default Dashboard;