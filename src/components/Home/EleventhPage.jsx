import React from "react";

const EleventhPage = () => {
  return (
    <>
      <div className="flex flex-col bg-blue-500 py-8 h-[410px] lg:h-[692px] md:h-[548px] ">
        <div className="flex flex-wrap items-center justify-center">
          <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
          <p className="font-[Fivo Sans Modern] text-[12px] sm:text-[14px] text-white font-bold ml-4">
            AVAILABLE FOR PROJECTS
          </p>
          <img
            className="ml-5"
            src="/cloudsparrow-all-img/FourthPage.png"
            alt="No"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-4">
          <p className="font-[Fivo Sans Modern] text-[30px] sm:text-[50px] text-white font-bold">
            LET'S BUILD YOUR
          </p>
          <p className="font-[Fivo Sans Modern] text-[30px] sm:text-[50px] text-white font-bold">
            PRODUCT TOGETHER
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-2">
          <p className="font-[Fivo Sans Modern] text-[14px] text-white font-bold">
            Partner with us for a digital journey that transforms your business
            ideas
          </p>
          <p className="font-[Fivo Sans Modern] text-[14px] text-white font-bold">
            into successful, cutting-edge solutions.
          </p>
          <button className="h-[30px] w-[100px] mt-4 font-[Fivo Sans Modern] text-[12px] text-[#2A6BFD] bg-white font-semibold rounded-[4px] hover:cursor-pointer">
            Let's Start
          </button>
        </div>

        <div className="flex justify-center w-full items-center relative mt-10">
          <img
            src="/cloudsparrow-all-img/FooterImage.png"
            alt="UI Design"
            className="absolute w-full shadow-lg rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default EleventhPage;

// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <div className=" flex flex-col bg-blue-500 py-8 min-h-screen ">
//         <div className="flex items-center justify-center">
//           <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
//           <p className="font-[Fivo Sans Modern] text-[12px] text-white font-bold ml-4">
//             AVAILABLE FOR PROJECTS
//           </p>
//           <img
//             className="ml-5"
//             src="/cloudsparrow-all-img/FourthPage.png"
//             alt="No"
//           />
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-4">
//           <p className="font-[Fivo Sans Modern] text-[60px] text-white font-bold">
//             LET'S BUILD YOUR
//           </p>
//           <p className="font-[Fivo Sans Modern] text-[60px] text-white font-bold">
//             PRODUCT TOGETHER
//           </p>
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-2">
//           <p className="font-[Fivo Sans Modern] text-[14px] text-white font-bold">
//             Partner with us for a digital journey that transforms your business
//             ideas
//           </p>
//           <p className="font-[Fivo Sans Modern] text-[14px] text-white font-bold">
//             into successful, cutting-edge solutions.
//           </p>
//           <button className="h-[30px] w-[100px] mt-4 font-[Fivo Sans Modern] text-[12px] text-[#2A6BFD] bg-white font-semibold rounded-[4px] hover:cursor-pointer">
//             Let's Start
//           </button>
//         </div>

//         <div className="flex justify-center w-full items-center">
//           <img
//             src="/cloudsparrow-all-img/FooterImage.png"
//             alt="UI Design"
//             className="absolute w-full shadow-lg rounded-lg"
//           />
//         </div>
//       </div>
//       <BottomFooter />
//     </>
//   );
// };

// const BottomFooter = () => {
//   return (
//     <>
//       <div className="bg-black text-white py-10">
//         {/* Top Section */}
//         <div className="container mx-auto px-6 border-b border-gray-600 pb-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left relative">
//             {/* Left: Logo */}
//             <div className="flex flex-col items-center relative">
//               <img
//                 src="/cloudsparrow-all-img/logo.png"
//                 alt="Cloud Sparrow"
//                 className="w-16 mb-4"
//               />
//             </div>

//             {/* Center: Tagline */}
//             <div className="flex flex-col items-center relative">
//               <p className="font-bold text-lg">WE'LL DELIVER RESULTS</p>
//               <p className="font-bold text-lg">THAT DRIVE GROWTH.</p>
//               <p className="font-bold text-lg">CHEAPER. FASTER.</p>
//             </div>

//             {/* Right: Social Media Icons */}
//             <div className="flex justify-center items-center space-x-4 text-[40px]">
//               <a href="#">
//                 <CiFacebook />
//               </a>
//               <a href="#">
//                 <FaInstagram />
//               </a>
//               <a href="#">
//                 <CiLinkedin />
//               </a>
//               <a href="#">
//                 <FaYoutube />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-center border-b border-gray-600 pb-6">
//           {/* Call Section */}
//           <div className="flex flex-col items-center relative">
//             <div className="bg-blue-600 p-3 rounded-full">
//               <FaPhoneAlt />
//             </div>
//             <p className="mt-2 font-bold">CALL NOW:</p>
//             <p className="text-gray-300">+91 704 266 2801</p>
//           </div>

//           {/* Address Section */}
//           <div className="flex flex-col items-center relative">
//             <div className="bg-blue-600 p-3 rounded-full">
//               <CiLocationOn />
//             </div>
//             <p className="mt-2 font-bold">1125, NE 125TH ST</p>
//             <p className="text-gray-300">NORTH MIAMI FL 33161</p>
//           </div>

//           {/* Email Section */}
//           <div className="flex flex-col items-center">
//             <div className="bg-blue-600 p-3 rounded-full">
//               <CiMail />
//             </div>
//             <p className="mt-2 font-bold">EMAIL US:</p>
//             <p className="text-gray-300">info@CloudSparrow.com</p>
//           </div>
//         </div>

//         {/* Bottom Section: Navigation Links */}
//         <div className="flex justify-center space-x-6 mt-10 border-b border-gray-600 pb-6">
//           <a href="#" className="text-gray-400 hover:text-white">
//             HOME
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             ABOUT
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             SERVICES
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             PORTFOLIO
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             BLOG
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             CONTACT
//           </a>
//         </div>

//         {/* Copyright */}
//         <p className="text-center text-gray-500 mt-6">
//           2025 © Cloud Sparrow Technology LLP All Rights Reserved
//         </p>
//       </div>
//     </>
//   );
// };

// export default Footer;
