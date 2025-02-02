import React from "react";

const FourthPage = () => {
  return (
    <div className="px-12">
      {/* Section Header */}
      <div className="flex items-center mt-[20px] ml-24">
        <img
          src="/cloudsparrow-all-img/FourthPage.png"
          alt="No"
          className="w-[20px] md:w-auto"
        />
        <p className="ml-3 font-[Fivo Sans Modern] text-[#2A6BFD] font-bold text-[14px] md:text-[16px]">
          WHAT WE DO
        </p>
      </div>

      {/* Title */}
      <p className="mt-4 ml-24 font-[Fivo Sans Modern] max-w-[70%] text-[70px] font-bold leading-tight">
        WE AIM FOR 100% CUSTOMER SATISFACTION
      </p>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-2 mt-[40px]">
        <Card
          logo={"/cloudsparrow-all-img/Card1Logo.png"}
          img={"/cloudsparrow-all-img/Card1Image.png"}
          title={"Web Design/Development"}
          description={
            "The range of our web design services is quite extensive. From blogs and forums to multimedia galleries and complete online stores, our specialty is affordable designs for small and medium businesses."
          }
          tags={[
            "Website Design",
            "Website Development",
            "WordPress",
            "eCommerce Website",
            "Responsive Web Design",
            "Custom CMS",
          ]}
        />
        <Card
          logo={"/cloudsparrow-all-img/Card2Logo.png"}
          img={"/cloudsparrow-all-img/Card2Image.png"}
          title={"Mobile App Development"}
          description={
            "No matter how good a design looks, it cannot save a poorly functioning website. This is why Interlacing Technologies strive to provide the best web development services with our talented developers using cutting-edge technologies."
          }
          tags={[
            "Mobile App",
            "Android App",
            "IOS App",
            "Mobile Websites",
            "Hybrid Apps",
            "Native Applications",
          ]}
        />
        <Card
          logo={"/cloudsparrow-all-img/Card3Logo.png"}
          img={"/cloudsparrow-all-img/Card3Image.png"}
          title={"SEO Optimization"}
          description={
            "The final step of utilizing a website is enabling it to get as many visitors as possible. Our SEO services ensure a top spot for your website in search engines results thus maximizing the traffic."
          }
          tags={[
            "SEO Content Strategy",
            "SEO Writing",
            "Website SEO",
            "Reports",
            "Keyword Research",
            "On-Page Optimization",
            "Copywriting",
          ]}
        />
      </div>
    </div>
  );
};

const Card = ({ logo, img, title, description, tags }) => {
  return (
    <div className="flex flex-col bg-black w-[440px] h-auto p-8 rounded-lg shadow-lg text-white">
      {/* Card Header */}
      <div className="flex justify-between items-start">
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white">
          <img src={logo} alt="Logo" className="w-6 h-6" />
        </div>
        <img
          src={img}
          alt="N/A"
          className="rounded-md object-cover w-[240px] h-[150px]"
        />
      </div>

      {/* Card Content */}
      <h2 className="text-3xl font-bold uppercase mt-4">{title}</h2>
      <p className="text-sm mt-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#0f0f0f] text-[#00e6e6] px-3 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FourthPage;
