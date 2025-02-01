import React from "react";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import SixthPage from "./SixthPage";
import SeventhPage from "./SeventhPage";
import EightPage from "./EightPage";
import NinthPage from "./NinthPage";
import TenthPage from "./TenthPage";
import EleventhPage from "./EleventhPage";

const HomePage = () => {
  return (
    <div>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EightPage />
      <NinthPage />
      <TenthPage />
      <EleventhPage />
    </div>
  );
};

const FirstPage = () => {
  return (
    <div className="bg-[url('./assets/BackGroundImage.png')] bg-cover bg-center w-full h-full min-h-screen">
      {/* Main Content Section */}
      <div className="flex flex-col pt-2 md:flex-row items-center md:items-start justify-center w-full px-6 md:px-16  md: gap-8">
        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-white text-3xl md:text-5xl font-bold leading-tight">
            HIGHLY BESPOKE WEBSITES AND DIGITAL EXPERIENCES FOR AMBITIOUS{" "}
            <span className="text-[#15bcd9]">BRANDS</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start max-w-md text-center md:text-left">
          <img
            className="w-24 h-24"
            src="/cloudsparrow-all-img/CallUs.png"
            alt="Call Us"
          />
          <p className="text-gray-300 text-base mt-6 px-4 md:px-0">
            Why stress over design and development? Or hire different agencies
            to do branding and marketing? We are your one-stop shop for all your
            design, development, and marketing needs.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex items-center justify-center mt-16">
        <img
          className="max-w-full"
          src="/cloudsparrow-all-img/home.png"
          alt="Home"
        />
        <img
          className="absolute -bottom-10 mb-[125px] sm:mb-[350px] md:-bottom-20  mr-[10px]  lg:w-[860px] sm:w-[300px] md:w-[500px] w-[280px] "
          src="/cloudsparrow-all-img/Rectangle1.png"
          alt="Decoration"
        />
      </div>

      {/* <div className="flex flex-col md:flex-row items-center justify-between max-w-xl mx-auto bg-gray-800 text-white py-4 px-6 rounded-md mt-16 md:mt-10">
   <p className="text-center md:text-left text-sm font-semibold">
     Creative web company specializing in WordPress, eCommerce, and
     Contentful.
   </p>
   <button className="mt-3 md:mt-0 border-2 border-gray-400 rounded-md py-2 px-4 text-sm font-semibold hover:bg-gray-700 transition">
     Book a Call
   </button>
 </div> */}
    </div>
  );
};

export default HomePage;













// import React from "react";
// import Navbar from "./Navbar";

// const HomePage = () => {
//   return (
//     <div className=" bg-[url('./assets/BackGroundImage.png')] bg-cover bg-center w-full  h-full">
//       <Navbar />
//       <div className="flex w-full h-full">
//         <div className="flex w-[400px] h-[300px]  mt-[50px]   ml-[110px]  ">
//           <p className="font-[Fivo Sans Modern] font-bold text-[35px] h-[220px] w-[963px] text-white ">
//             HIGHLY BESPOKE WEBSITES AND DIGITAL EXPERIENCES FOR AMBITIOUS{" "}
//             <span className="text-[#15bcd9]">BRANDS</span>
//           </p>
//         </div>
//         <div className="flex flex-col   h-[300px] w-[400px]  mt-[50px]   ml-[300px]   ">
//           <img
//             className="w-[100px] h-[100px]"
//             src="/cloudsparrow-all-img/CallUs.png"
//             alt=""
//             srcset=""
//           />
//           <div>
//             <p className="font-[Public Sans] text-[14px] mt-10">
//               Why stress over design, and development? Or hire different
//               agencies to do branding and marketing? We are your one-s mt-shop
//               for all your design, development, and marketing needs.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center w-full">
//         <img
//           className=" "
//           src="/cloudsparrow-all-img/home.png"
//           alt=""
//           srcset=""
//         />
//         <img
//           className="absolute items-center justify-center mb-[200px] mr-[10px]"
//           src="/cloudsparrow-all-img/Rectangle1.png"
//           alt=""
//           srcset=""
//         />
//         <div className="flex mt-[700px] absolute items-center w-[400px] mx-auto border-gray-300 border-2 p-2 rounded-md">
//         <p className="font-[Public Sans] w-[280px] font-semibold text-[12px]">
//           Creative web company specialising in WordPress, eCommerce and
//           Contentful
//         </p>
//         <button className="w-[100px] border-gray-400 border-2 rounded-md py-2 px-1 font-[Public Sans]">Book a Call</button>
//       </div>
//       </div>

//     </div>
//   );
// };

// export default HomePage;