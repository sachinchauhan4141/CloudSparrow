// import React from "react";
// import { BiMessageRoundedDetail } from "react-icons/bi";

// const ThirdPage = () => {
//   return (
//     <div className="flex flex-col w-full h-full ">
//       <div>
//         <p className="font-[Fivo Sans Modern] font-bold w-[950px] text-[44px] text-[#000000] mt-[50px] mx-auto">
//           WE REIMAGINE DIGITAL NARRATIVES, EMPOWERING BRANDS TO CONNECT <br/> WITH
//           CONSUMERS IN MEANINGFUL WAYS.
//         </p>
//       </div>
//       <div className="flex h-[450px] w-full mt-[40px] ">
//         <div className="flex h-[450px] p-2">
//           <img className="w-[800px]" src="/cloudsparrow-all-img/ThirdPage.png" alt="" srcset="" />
//         </div>
//         <div className="flex flex-col w-[400px] h-[400px] ml-[60px] ">
//           <div className="flex p-2">
//             <img
//               className="h-[35px] w-[30px] pt-2"
//               src="/cloudsparrow-all-img/ThirdPage2.png"
//               alt=""
//             />
//             <p className="font-[Fivo Sans Modern] text-[30px] font-extrabold pl-[20px] w-[300px]">
//               A multi-disciplined creative company 
//             </p>
//           </div>
//           <div className="mt-[20px]">
//           <p className="font-[Public Sans] text-[16px]">
//             Under the name World Fax Services, Inc., our company has been
//             successfully creating various projects in the fields of web
//             development and other online services for 10 years.
//           </p>
//           <p className="font-[Public Sans] text-[16px] mt-[20px]">
//             Today Cloud Sparrow Technologies continue to be the online leading
//             company where businesses can find each and every online service they
//             may need.
//           </p>

//           <button className="flex h-[35px] w-[100px] items-center justify-evenly  font-[Fivo Sans Modern] text-[12px] text-white bg-[#2A6BFD] font-semibold rounded-[4px] mt-[20px]">
//           <BiMessageRoundedDetail className="text-xl"/>Let's Talk
//          </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThirdPage;
import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";

const ThirdPage = () => {
  return (
    <div className="flex flex-col w-full h-full px-4 md:px-0">
      {/* Title Section */}
      <div className="w-full text-center md:text-left">
        <p className="font-[Fivo Sans Modern] font-bold text-[28px] md:text-[44px] text-[#000000] mt-[50px] mx-auto max-w-[90%] md:max-w-[950px] leading-tight">
          WE REIMAGINE DIGITAL NARRATIVES, EMPOWERING BRANDS TO CONNECT
          <br className="hidden md:block" /> WITH CONSUMERS IN MEANINGFUL WAYS.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center w-full mt-[40px]">
        {/* Image Section */}
        <div className="w-full md:w-[800px]">
          <img
            className="w-full md:w-[800px]"
            src="/cloudsparrow-all-img/ThirdPage.png"
            alt=""
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col w-full md:w-[400px] h-auto md:h-[400px] md:ml-[60px] mt-8 md:mt-0 px-4 md:px-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <img
              className="h-[30px] md:h-[35px] w-[25px] md:w-[30px]"
              src="/cloudsparrow-all-img/ThirdPage2.png"
              alt=""
            />
            <p className="font-[Fivo Sans Modern] text-[22px] md:text-[30px] font-extrabold pl-[10px] md:pl-[20px] w-auto md:w-[300px]">
              A multi-disciplined creative company 
            </p>
          </div>

          <div className="mt-[20px]">
            <p className="font-[Public Sans] text-[14px] md:text-[16px]">
              Under the name World Fax Services, Inc., our company has been
              successfully creating various projects in the fields of web
              development and other online services for 10 years.
            </p>
            <p className="font-[Public Sans] text-[14px] md:text-[16px] mt-[20px]">
              Today Cloud Sparrow Technologies continues to be the online leading
              company where businesses can find each and every online service they
              may need.
            </p>

            <button className="flex items-center justify-center md:justify-evenly h-[35px] w-[130px] md:w-[100px] font-[Fivo Sans Modern] text-[12px] text-white bg-[#2A6BFD] font-semibold rounded-[4px] mt-[20px] mx-auto md:mx-0">
              <BiMessageRoundedDetail className="text-lg md:text-xl" />
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;