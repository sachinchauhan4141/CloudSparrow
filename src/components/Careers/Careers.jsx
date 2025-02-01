import React, { useState } from "react";
import { IoIosArrowDropdownCircle,IoIosArrowDroprightCircle } from "react-icons/io";

const Careers = () => {
  return (
    <>
      <div className="bg-[url('./assets/careerimg.png')] bg-cover bg-center min-h-[500px] text-white flex flex-col items-start justify-center bg-linear-to-r from-black to-white">
        <div>
          <h1 className="font-[Fivo Sans Modern] font-bold text-[64px] ml-12">
            Join the Cloud-Sparrow
          </h1>
          <p className="font-[Fivo Sans Modern] font-bold text-[20px] ml-12">
            At Cloud-Sparrow, we are on a mission to revolutionize the way{" "}
            <br /> businesses approach Hyperautomation & digital transformation.
          </p>
        </div>
      </div>
      <div className="p-12 flex mx-20">
        <div className="w-1/2 ">
          <img
            className="w-[500px] h-[540px] absolute"
            src="/cloudsparrow-all-img/careerimg2.png"
            alt=""
            srcset=""
          />
          <div className="w-[500px] h-[540px] relative flex">
            <div className="w-1/3 border-2 border-black min-h-full rounded-3xl"></div>
            <div className="w-1/3 border-2 border-red-500 h-[500px] rounded-3xl mx-1 mt-[40px]"></div>
            <div className="w-1/3 border-2 border-green-500 h-[420px] mt-[40px] rounded-3xl"></div>
          </div>
        </div>
        <div className="w-1/2 mt-12">
          <h1 className="font-[Fivo Sans Modern] font-bold text-[42px] text-[#080808] leading-[1.1]">
            Doers. Hackers.
            <br /> Thinkers.
          </h1>
          <p className="font-[Fivo Sans Modern] text-[16px] my-6 font-medium text-[#080808]">
            Cloud-Sparrow is a product engineering company working with
            innovative <br /> startups and enterprises. We have provided core
            product development <br /> for 110+ startups across the globe
            building products in the cloud-
            <br />
            native, data engineering, B2B SaaS & Machine Learning space. Our{" "}
            <br /> team of 350+ elite software engineers solve hard technical
            problems <br /> while transforming customer ideas into successful
            products.
          </p>
          <button className="bg-[#0F75BC] py-2 px-6 rounded-sm text-white text-[14px]">
            See Open Positions
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-[Fivo Sans Modern] text-center font-bold text-[58px] text-[#080808] w-1/2 leading-[1.1]">
          Career growth
          <br />
          is always in sight.
        </h1>
        <p className="font-[Fivo Sans Modern] text-[16px] my-6 font-medium text-[#080808] w-1/2 text-center">
          We see the career path as a sequence of careful choices, decisions &
          experiences that <br /> define you as a person & a professional.
          That’s why we ask you to share your career goals <br /> once you join
          us, so we can envision a future path tailor-made for you.
        </p>
      </div>
      <JobPage />
    </>
  );
};

const JobPage = () => {
  const jobDetailsData = [{
    jobDescription: {
      jobTitle: "Senior SAP FICO Consultant",
      location: "Coimbatore",
      terms: "Full Time",
      expirence: "10 years",
      remuneration: "Market Standard",
    },
    aboutUs:
      "Hub-AI is an SAP S/4HANA consulting company, fast-growing with over 150+ consultants, and has 100% YOY growth. Our vibrant and diverse culture builds an environment where collaboration and innovation thrive. We prioritize providing plenty of opportunities for learning and professional development, ensuring every team member can plan their path to success along with the company's progressive growth. This unique blend of growth, culture, and career development makes us a top choice in the SAP consulting field.",
    aboutTheRole:
      "The Consultant facilitates the implementation and support of SAP Finance and controlling to enhance the client's business functionality and overall performance while maintaining a high degree of customer satisfaction.",
    responsibilities: [
      "Candidate should know SAP implementation methodology i.e. ASAP and Active Methodology.",
      "Design, configuration, and testing of core FI/CO modules (GL, New GL functionality, AP, AR).",
      "Design, configuration, and testing of Asset Management.",
      "Design, configuration, and testing of Consolidations.",
      "Design, configuration, and testing of CO-PA.",
      "Design, configuration, and testing of Cost center accounting.",
      "Design, configuration, and testing of Profit center accounting.",
      "Design, configuration, and testing of Product costing.",
      "Design, configuration, and testing of the Material ledger.",
      "Experience and knowledge of key integration points with FI/CO modules.",
      "Ability to configure FICO processes in S/4HANA and should have knowledge of simplification in the FICO module.",
      "Deep knowledge of FICO Enterprise structure, Business partner, FSCM, New GL functionality, Material ledger, Taxation, Banking automation, Logistics integrated accounting entries.",
    ],
    candidateRequirements: [
      "Bachelor's Degree (Preferably in Finance / Accounting).",
      "Minimum 10 years of SAP FI/CO configuration experience.",
      "Should have four full lifecycle SAP implementation experiences (Project Preparation through Go-Live and Hyper care) and at least 2 full lifecycle S/4HANA greenfield implementations.",
      "Strong knowledge of Taxation, P&L, and Balance sheet.",
      "Business knowledge and process design skills.",
      "Ability to analyze problems and provide clear recommendations.",
      "Strong organizational skills.",
      "Able to collaborate with clients and have a strong desire to excel.",
      "Excellent communication skills, written and verbal.",
      "Good interpersonal skills.",
      "Must be able to work independently as well as a team player and can manage own workload.",
    ],
  },{
    jobDescription: {
      jobTitle: "Senior SAP FICO Consultant",
      location: "Coimbatore",
      terms: "Full Time",
      expirence: "10 years",
      remuneration: "Market Standard",
    },
    aboutUs:
      "Hub-AI is an SAP S/4HANA consulting company, fast-growing with over 150+ consultants, and has 100% YOY growth. Our vibrant and diverse culture builds an environment where collaboration and innovation thrive. We prioritize providing plenty of opportunities for learning and professional development, ensuring every team member can plan their path to success along with the company's progressive growth. This unique blend of growth, culture, and career development makes us a top choice in the SAP consulting field.",
    aboutTheRole:
      "The Consultant facilitates the implementation and support of SAP Finance and controlling to enhance the client's business functionality and overall performance while maintaining a high degree of customer satisfaction.",
    responsibilities: [
      "Candidate should know SAP implementation methodology i.e. ASAP and Active Methodology.",
      "Design, configuration, and testing of core FI/CO modules (GL, New GL functionality, AP, AR).",
      "Design, configuration, and testing of Asset Management.",
      "Design, configuration, and testing of Consolidations.",
      "Design, configuration, and testing of CO-PA.",
      "Design, configuration, and testing of Cost center accounting.",
      "Design, configuration, and testing of Profit center accounting.",
      "Design, configuration, and testing of Product costing.",
      "Design, configuration, and testing of the Material ledger.",
      "Experience and knowledge of key integration points with FI/CO modules.",
      "Ability to configure FICO processes in S/4HANA and should have knowledge of simplification in the FICO module.",
      "Deep knowledge of FICO Enterprise structure, Business partner, FSCM, New GL functionality, Material ledger, Taxation, Banking automation, Logistics integrated accounting entries.",
    ],
    candidateRequirements: [
      "Bachelor's Degree (Preferably in Finance / Accounting).",
      "Minimum 10 years of SAP FI/CO configuration experience.",
      "Should have four full lifecycle SAP implementation experiences (Project Preparation through Go-Live and Hyper care) and at least 2 full lifecycle S/4HANA greenfield implementations.",
      "Strong knowledge of Taxation, P&L, and Balance sheet.",
      "Business knowledge and process design skills.",
      "Ability to analyze problems and provide clear recommendations.",
      "Strong organizational skills.",
      "Able to collaborate with clients and have a strong desire to excel.",
      "Excellent communication skills, written and verbal.",
      "Good interpersonal skills.",
      "Must be able to work independently as well as a team player and can manage own workload.",
    ],
  },{
    jobDescription: {
      jobTitle: "Senior SAP FICO Consultant",
      location: "Coimbatore",
      terms: "Full Time",
      expirence: "10 years",
      remuneration: "Market Standard",
    },
    aboutUs:
      "Hub-AI is an SAP S/4HANA consulting company, fast-growing with over 150+ consultants, and has 100% YOY growth. Our vibrant and diverse culture builds an environment where collaboration and innovation thrive. We prioritize providing plenty of opportunities for learning and professional development, ensuring every team member can plan their path to success along with the company's progressive growth. This unique blend of growth, culture, and career development makes us a top choice in the SAP consulting field.",
    aboutTheRole:
      "The Consultant facilitates the implementation and support of SAP Finance and controlling to enhance the client's business functionality and overall performance while maintaining a high degree of customer satisfaction.",
    responsibilities: [
      "Candidate should know SAP implementation methodology i.e. ASAP and Active Methodology.",
      "Design, configuration, and testing of core FI/CO modules (GL, New GL functionality, AP, AR).",
      "Design, configuration, and testing of Asset Management.",
      "Design, configuration, and testing of Consolidations.",
      "Design, configuration, and testing of CO-PA.",
      "Design, configuration, and testing of Cost center accounting.",
      "Design, configuration, and testing of Profit center accounting.",
      "Design, configuration, and testing of Product costing.",
      "Design, configuration, and testing of the Material ledger.",
      "Experience and knowledge of key integration points with FI/CO modules.",
      "Ability to configure FICO processes in S/4HANA and should have knowledge of simplification in the FICO module.",
      "Deep knowledge of FICO Enterprise structure, Business partner, FSCM, New GL functionality, Material ledger, Taxation, Banking automation, Logistics integrated accounting entries.",
    ],
    candidateRequirements: [
      "Bachelor's Degree (Preferably in Finance / Accounting).",
      "Minimum 10 years of SAP FI/CO configuration experience.",
      "Should have four full lifecycle SAP implementation experiences (Project Preparation through Go-Live and Hyper care) and at least 2 full lifecycle S/4HANA greenfield implementations.",
      "Strong knowledge of Taxation, P&L, and Balance sheet.",
      "Business knowledge and process design skills.",
      "Ability to analyze problems and provide clear recommendations.",
      "Strong organizational skills.",
      "Able to collaborate with clients and have a strong desire to excel.",
      "Excellent communication skills, written and verbal.",
      "Good interpersonal skills.",
      "Must be able to work independently as well as a team player and can manage own workload.",
    ],
  }];
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleCollapse = (index) => {
    console.log(index);
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <>
      <div className="bg-gray-200 mx-16 px-8  py-12 mb-12">
        {jobDetailsData.map((data,index)=>{
          return(<JobDescriptionPoint jobDetails={data} toggleCollapse={toggleCollapse} index={index}  activeIndex={activeIndex} key={index}/>)  
        })}
      </div>
    </>
  );
};

const JobDescriptionPoint = ({ jobDetails,toggleCollapse,index,activeIndex }) => {
  
  return (
    <>
      <div className="flex border-t-2 p-2 mx-8 justify-between">
        <div>
          <h3 className="font-[Fivo Sans Modern] text-[22px] text-[#0F75BC] font-semibold">
            Senior SAP FICO Consultant
          </h3>
        </div>
        <div className="flex gap-2">
          <p className="bg-white text-[14px] font-medium font-[Fivo Sans Modern] px-4 py-2 rounded-3xl text-[#0F75BC]">
            2 jobs
          </p>
          <button onClick={()=>toggleCollapse(index)}>
            {activeIndex === index ?<IoIosArrowDropdownCircle className="text-4xl text-[#0F75BC]" /> :<IoIosArrowDroprightCircle className="text-4xl"/>}
          </button>
        </div>
      </div>
      {activeIndex === index && <div className="flex flex-col mx-8">
        <JobDescriptionCard JobDetails={jobDetails} />
      </div>}
    </>
  );
};

const JobDescriptionCard = ({ JobDetails }) => {
  return (
    <div className="bg-white p-8 my-2 flex flex-col ">
      <div>
        <p className="font-[Fivo Sans Modern] text-[18px] font-semibold ">
          Job Description:
        </p>
        <div className="my-2">
          <p className="font-[Fivo Sans Modern] text-[16px] font-semibold">
            Job title:{" "}
            <span className="font-[Fivo Sans Modern] text-[16px] font-extralight">
              {JobDetails.jobDescription.jobTitle}
            </span>
          </p>
          <p className="font-[Fivo Sans Modern] text-[16px] font-semibold">
            Location:{" "}
            <span className="font-[Fivo Sans Modern] text-[16px] font-extralight">
              {JobDetails.jobDescription.location}
            </span>
          </p>
          <p className="font-[Fivo Sans Modern] text-[16px] font-semibold">
            Terms:{" "}
            <span className="font-[Fivo Sans Modern] text-[16px] font-extralight">
              {JobDetails.jobDescription.terms}
            </span>
          </p>
          <p className="font-[Fivo Sans Modern] text-[16px] font-semibold">
            Expirence:{" "}
            <span className="font-[Fivo Sans Modern] text-[16px] font-extralight">
              {JobDetails.jobDescription.expirence}
            </span>
          </p>
          <p className="font-[Fivo Sans Modern] text-[16px] font-semibold">
            Remuneration:{" "}
            <span className="font-[Fivo Sans Modern] text-[16px] font-extralight">
              {JobDetails.jobDescription.remuneration}
            </span>
          </p>
        </div>
      </div>
      <div className="my-4">
        <p className="font-[Fivo Sans Modern] text-[18px] font-semibold ">
          About us:
        </p>
        <p className="font-[Fivo Sans Modern] text-[16px] font-light mt-2">
          {JobDetails.aboutUs}
        </p>
      </div>
      <div className="my-4">
        <p className="font-[Fivo Sans Modern] text-[18px] font-semibold ">
          About the role:
        </p>
        <p className="font-[Fivo Sans Modern] text-[16px] font-light mt-2">
          {JobDetails.aboutTheRole}
        </p>
      </div>
      <div className="my-4">
        <p className="font-[Fivo Sans Modern] text-[18px] font-semibold ">
          Responsibilities:
        </p>
        <ul className="list-disc ml-5">
          {JobDetails.responsibilities.map((res, index) => {
            return (
              <li
                key={index}
                className="font-[Fivo Sans Modern] text-[16px] font-light"
              >
                {res}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-4">
        <p className="font-[Fivo Sans Modern] text-[18px] font-semibold ">
          Candidate requirements:
        </p>
        <ul className="list-disc ml-5">
          {JobDetails.candidateRequirements.map((res, index) => {
            return (
              <li
                key={index}
                className="font-[Fivo Sans Modern] text-[16px] font-light"
              >
                {res}
              </li>
            );
          })}
        </ul>
      </div>
      <button className="bg-[#0F75BC] py-2 px-6 rounded-sm text-white text-[16px] w-48">
        Apply for this Job
      </button>
    </div>
  );
};
export default Careers;
