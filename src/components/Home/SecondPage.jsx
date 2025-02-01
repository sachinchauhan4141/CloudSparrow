// import React from "react";

// const SecondPage = () => {
//   return (
//     <div className="flex flex-col w-full h-full border bg-[#0C0C0C]">
//       <div className="flex h-[120px] w-full justify-between items-center px-[140px] mt-[40px]">
//         <p className="font-[Fivo Sans Modern] font-bold text-[40px] text-[#FFFFFF] mt-[50px]">
//           DIGITAL PRODUCTS <br/> EXPERIENCES
//         </p>
//         <img className="h-[120px] mt-[40px]" src="/cloudsparrow-all-img/secondPage.png" alt="" srcset="" />
//       </div>
//       <div className="flex h-[300px] w-[1100px] mt-[50px] ml-[140px]">
//         <div>
//           <img
//             className="w-[850px]"
//             src="/cloudsparrow-all-img/ThirdPageCircle.png"
//             alt=""
//           />
//         </div>
//         <div className="text-white font-[Fivo Sans Modern] ml-[50px]">
//           <p className="text-[100px]">4.0x</p>
//           <p className="text-[14px]">
//             Use our most popular Brand & <br /> web design resources to <br />
//             jumpstart your latest project.
//           </p>
//         </div>
//       </div>
//       <div className="flex justify-between h-[100px] w-[1100px] mt-[10px] pb-[20px] m-auto ">
//         <img src="/cloudsparrow-all-img/image1.png" alt="" />
//         <img src="/cloudsparrow-all-img/image2.png" alt="" />
//         <img src="/cloudsparrow-all-img/image3.png" alt="" />
//         <img src="/cloudsparrow-all-img/image4.png" alt="" />
//         <img src="/cloudsparrow-all-img/image5.png" alt="" />
//         <img src="/cloudsparrow-all-img/image6.png" alt="" />
//         <img src="/cloudsparrow-all-img/image7.png" alt="" />
//       </div>
//     </div>
//   );
// };

// export default SecondPage;

import React from "react";

const SecondPage = () => {
  return (
    <div className="flex flex-col w-full h-full border bg-[#0C0C0C] p-4 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-10 md:mt-16 px-4 md:px-20">
        <p className="font-[Fivo Sans Modern] font-bold text-white text-3xl md:text-5xl text-center md:text-left leading-tight">
          DIGITAL PRODUCTS <br /> EXPERIENCES
        </p>
        <img
          className="h-20 md:h-28 mt-6 md:mt-0"
          src="/cloudsparrow-all-img/secondPage.png"
          alt=""
        />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto mt-10 md:mt-12">
        <img
          className="w-full md:w-3/4"
          src="/cloudsparrow-all-img/ThirdPageCircle.png"
          alt=""
        />
        <div className="text-white font-[Fivo Sans Modern] mt-6 md:mt-0 md:ml-6 text-center md:text-left">
          <p className="text-5xl md:text-7xl font-bold">4.0x</p>
          <p className="text-sm md:text-base mt-2">
            Use our most popular Brand & <br /> web design resources to <br />
            jumpstart your latest project.
          </p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl mx-auto mt-6 md:mt-10 pb-6">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <img
            key={num}
            className="h-16 md:h-20 object-contain"
            src={`/cloudsparrow-all-img/image${num}.png`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
