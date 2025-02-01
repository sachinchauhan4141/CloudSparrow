// import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

// const SeventhPage = () => {
//   return (
//     <div className="flex flex-col w-full h-full py-10">
//       <div className="flex h-[20px] w-full ml-[120px] mt-[40px]">
//         <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
//         <p className="font-[Fivo Sans Modern] text-[#2A6BFD] font-bold ml-4">
//           TESTIMONIALS
//         </p>
//       </div>
//       <div className="flex w-full">
//         <div className="flex">
//           <div className="flex flex-col  ml-[120px] mt-[40px]">
//             <div className="w-[500px]">
//               <p className="font-[Fivo Sans Modern] font-bold text-[44px] ">
//                 WHAT OUR HAPPY CUSTOMERS SAY
//               </p>
//             </div>
//             <div className="w-[400px] mt-[20px]">
//               <p className="font-[Fivo Sans Modern] text-[16px]">
//                 Lorem ipsum dolor sit amet consectetur. Eu auctor faucibus nunc
//                 accumsan tristique augue sodales egestas orci.
//               </p>
//             </div>
//             <div className="flex  items-center mt-[30px]">
//               <button className=" h-[40px] w-[150px] font-[Fivo Sans Modern] text-[14px] bg-[#2A6BFD] font-semibold rounded-[6px]">
//                 Work With Us
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-scroll">
//           <Card />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = () => {
//   return (
//     <div className="border-[1px] border-[#E5E5E5] rounded-[6px] w-[400px] h-[350px] ml-[40px] mt-[40px] p-4">
//       <div className="flex items-center justify-between">
//         <FaQuoteLeft className="text-blue-500 text-2xl" />
//         <div className="flex gap-1">
//         {
//             [...Array(5)].map((_, index) => (
//                 <FaStar key={index} className="text-blue-500" />
//             ))
//         }
//         </div>
//       </div>
//       <div className="mt-12">
//         <p className="font-[Public Sans]  text-[16px] text[#0C0C0C]">
//         Lorem ipsum dolor sit amet consectetur. Elementum integer ipsum sed accumsan nunc morbi dapibus. Egestas interdum commodo ut egestas nec. Varius auctor elit elit gravida viverra nisl neque facilisis. Mauris malesuada neque tortor ac nibh risus turpis nulla. Cursus viverra quis urna vestibulum eu id sed bibendum etiam. 
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SeventhPage;

import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const SeventhPage = () => {
  return (
    <div className="flex flex-col w-full h-full py-10 px-4 md:px-12">
      {/* Header Section */}
      <div className="flex items-center mt-6">
        <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" className="w-5 md:w-auto" />
        <p className="font-[Fivo Sans Modern] text-[#2A6BFD] font-bold text-[14px] md:text-[16px] ml-3">
          TESTIMONIALS
        </p>
      </div>

      {/* Title and Description */}
      <div className="mt-6">
        <h2 className="font-[Fivo Sans Modern] text-[32px] md:text-[44px] font-bold leading-tight">
          WHAT OUR HAPPY CUSTOMERS SAY
        </h2>
        <p className="font-[Fivo Sans Modern] text-[14px] md:text-[16px] mt-4 w-full md:w-[400px]">
          Lorem ipsum dolor sit amet consectetur. Eu auctor faucibus nunc
          accumsan tristique augue sodales egestas orci.
        </p>
      </div>

      {/* CTA Button */}
      <button className="mt-6 h-[40px] w-[150px] font-[Fivo Sans Modern] text-[14px] bg-[#2A6BFD] text-white font-semibold rounded-[6px]">
        Work With Us
      </button>

      {/* Testimonial Cards - Horizontal Scroll */}
      <div className="mt-10 flex gap-6 overflow-x-auto scrollbar-hide">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="border border-[#E5E5E5] rounded-[6px] w-[300px] md:w-[400px] h-auto p-6 flex-shrink-0">
      {/* Quote and Stars */}
      <div className="flex items-center justify-between">
        <FaQuoteLeft className="text-blue-500 text-2xl" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-blue-500" />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="font-[Public Sans] text-[14px] md:text-[16px] text-[#0C0C0C] mt-6">
        Lorem ipsum dolor sit amet consectetur. Elementum integer ipsum sed accumsan nunc morbi dapibus. Egestas interdum commodo ut egestas nec. Varius auctor elit elit gravida viverra nisl neque facilisis.
      </p>
    </div>
  );
};

export default SeventhPage;
