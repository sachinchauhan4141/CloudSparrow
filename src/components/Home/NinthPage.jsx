// import React from "react";

// const NinthPage = () => {
//   return (
//     <>
//     <div className=" bg-[#f1f1f1]">
//       <div className="flex ml-[220px] mt-[10px] pt-[50px]">
//         <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
//         <p className="font-[Fivo Sans Modern] text-[12px] text-[#2A6BFD] font-bold ml-4">
//           OUR PRODUCT DEVELOPMENT CYCLE
//         </p>
//       </div>
//       <div className="ml-[220px] mt-[30px] flex">
//         <div>
//         <p className="font-[Fivo Sans Modern] text-[50px] w-[700px] font-bold">
//           DISCOVER HOW OUR SOFTWARE HOUSE DEVELOPS HIGH-QUALITY WEB AND MOBILE
//           APPS
//         </p>
//         <button className=" h-[40px] w-[150px] font-[Fivo Sans Modern] text-[12px] text-white bg-[#2A6BFD] font-semibold rounded-[4px]">
//           Let's Start
//         </button>
//         </div>
//         <div className="">
//           <img className="h-[350px] w-[350px]" src="/cloudsparrow-all-img/ninth.jpeg" alt="No" /> 
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default NinthPage;

import React from "react";

const NinthPage = () => {
  return (
    <>
      <div className="bg-[#f1f1f1] ">
        <div className="flex ml-24 sm:ml-[20px] md:ml-[60px] mt-[10px] pt-[50px]">
          <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
          <p className="font-[Fivo Sans Modern] text-[10px] sm:text-[12px] text-[#2A6BFD] font-bold ml-4">
            OUR PRODUCT DEVELOPMENT CYCLE
          </p>
        </div>
        <div className="ml-0 sm:ml-[20px] md:ml-[60px] mt-[30px] flex flex-col sm:flex-row items-center sm:items-start">
          <div className="sm:w-[700px] w-full text-center sm:text-left">
            <p className="font-[Fivo Sans Modern] text-[30px] sm:text-[50px] font-bold">
              DISCOVER HOW OUR SOFTWARE HOUSE DEVELOPS HIGH-QUALITY WEB AND MOBILE
              APPS
            </p>
            <button className="h-[40px] w-[150px] mt-[20px] sm:mt-[30px] font-[Fivo Sans Modern] text-[12px] text-white bg-[#2A6BFD] font-semibold rounded-[4px]">
              Let's Start
            </button>
          </div>
          <div className="mt-[20px] sm:mt-0">
            <img className="h-[250px] sm:h-[350px] w-full sm:w-[350px] object-cover" src="/cloudsparrow-all-img/ninth.jpeg" alt="No" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NinthPage;

