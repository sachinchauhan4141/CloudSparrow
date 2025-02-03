import {
  IoIosArrowDropdownCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { jobDetailsData } from "../../common/dummyData";
import { useState } from "react";

export const JobPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleCollapse = (index) => {
    console.log(index);
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-gray-200 mx-16 px-8 py-12 mb-12">
        {jobDetailsData.map((data, index) => {
          return (
            <JobDescriptionPoint
              jobDetails={data}
              toggleCollapse={toggleCollapse}
              index={index}
              activeIndex={activeIndex}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

const JobDescriptionPoint = ({
  jobDetails,
  toggleCollapse,
  index,
  activeIndex,
}) => {
  return (
    <>
      <div
        className={
          "flex border-t-2  p-2 mx-8 justify-between  " +
          (activeIndex !== index ? "border-[#5F5F61]" : "border-[#0F75BC]")
        }
      >
        <div>
          <h3
            className={
              "text-[28px] font-semibold " +
              (activeIndex !== index ? "text-[#080808]" : "text-[#0F75BC]")
            }
          >
            {jobDetails.jobDescription.jobTitle}
          </h3>
        </div>
        <div className="flex gap-2">
          <p
            className={
              "bg-white text-[15px] border  font-medium  px-4 py-2 rounded-3xl " +
              (activeIndex !== index
                ? "border-[#5F5F61] text-[#5F5F61]"
                : "border-[#0F75BC] text-[#0F75BC]")
            }
          >
            2 jobs
          </p>
          <button onClick={() => toggleCollapse(index)}>
            {activeIndex === index ? (
              <IoIosArrowDropdownCircle className="text-4xl text-[#0F75BC]" />
            ) : (
              <IoIosArrowDroprightCircle className="text-4xl bg-[#5F5F61] text-white rounded-full" />
            )}
          </button>
        </div>
      </div>
      {activeIndex === index && (
        <div className="flex flex-col mx-8">
          <JobDescriptionCard JobDetails={jobDetails} />
        </div>
      )}
    </>
  );
};

const JobDescriptionCard = ({ JobDetails }) => {
  return (
    <div className="bg-white p-8 my-2 flex flex-col ">
      <div>
        <p className=" text-[18px] font-bold ">Job Description:</p>
        <div className="text-[16px] my-2">
          <p className="font-bold">
            Job title:{" "}
            <span className="font-normal">
              {JobDetails.jobDescription.jobTitle}
            </span>
          </p>
          <p className="font-bold">
            Location:{" "}
            <span className="font-normal">
              {JobDetails.jobDescription.location}
            </span>
          </p>
          <p className="font-bold">
            Terms:{" "}
            <span className="font-normal">
              {JobDetails.jobDescription.terms}
            </span>
          </p>
          <p className="font-bold">
            Expirence:{" "}
            <span className="font-normal">
              {JobDetails.jobDescription.expirence}
            </span>
          </p>
          <p className="font-bold">
            Remuneration:{" "}
            <span className="font-normal">
              {JobDetails.jobDescription.remuneration}
            </span>
          </p>
        </div>
      </div>
      <div className="my-4">
        <p className=" text-[18px] font-bold ">About us:</p>
        <p className=" text-[16px]  mt-2">{JobDetails.aboutUs}</p>
      </div>
      <div className="my-4">
        <p className=" text-[18px] font-bold ">About the role:</p>
        <p className=" text-[16px]  mt-2">{JobDetails.aboutTheRole}</p>
      </div>
      <div className="my-4">
        <p className=" text-[18px] font-bold ">Responsibilities:</p>
        <ul className="list-disc ml-5">
          {JobDetails.responsibilities.map((res, index) => {
            return (
              <li key={index} className=" text-[16px] ">
                {res}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-4">
        <p className=" text-[18px] font-bold ">Candidate requirements:</p>
        <ul className="list-disc ml-5">
          {JobDetails.candidateRequirements.map((res, index) => {
            return (
              <li key={index} className=" text-[16px]">
                {res}
              </li>
            );
          })}
        </ul>
      </div>
      <button className="bg-[#0F75BC] py-2 px-6 rounded-sm text-white text-[15px] w-48">
        Apply for this Job
      </button>
    </div>
  );
};
