// import React from 'react'
// import { FaPlus } from "react-icons/fa";

// const TenthPage = () => {
//   return (
//     <>
//       <div className="flex items-center justify-center pt-[50px]">
//         <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
//         <p className="font-[Fivo Sans Modern] text-[12px] text-[#2A6BFD] font-bold ml-4">
//           FAQ
//         </p>
//         <img className="ml-5" src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
//       </div>
//       <div className="flex flex-col items-center justify-center mt-[30px]">
//         <p className='font-[Fivo Sans Modern] text-[50px] font-bold'>WHAT PROBLEM ARE</p>
//         <p className='font-[Fivo Sans Modern] text-[50px] font-bold'>YOU TRYING TO SOLVE?</p>
//       </div>
//       <div className='flex flex-wrap gap-[8px] items-center justify-center mb-[150px]'>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//       </div>
//     </>
//   )
// }

// const Card = () =>{
//     return (
//         <div className='flex items-center justify-between w-[600px] p-3 mt-5 border'>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             <FaPlus className='text-[#2A6BFD]' />
//         </div>
//     )
// }
// export default TenthPage

import React from 'react'
import { FaPlus } from "react-icons/fa";

const TenthPage = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[50px] flex-wrap">
        <img src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
        <p className="font-[Fivo Sans Modern] text-[10px] sm:text-[12px] text-[#2A6BFD] font-bold ml-4">
          FAQ
        </p>
        <img className="ml-5" src="/cloudsparrow-all-img/FourthPage.png" alt="No" />
      </div>
      <div className="flex flex-col items-center justify-center mt-[30px]">
        <p className='font-[Fivo Sans Modern] text-[30px] sm:text-[50px] font-bold text-center'>
          WHAT PROBLEM ARE
        </p>
        <p className='font-[Fivo Sans Modern] text-[30px] sm:text-[50px] font-bold text-center'>
          YOU TRYING TO SOLVE?
        </p>
      </div>
      <div className='flex flex-wrap gap-[8px] items-center justify-center mb-[50px]  '>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

const Card = () => {
  return (
    <div className='flex items-center justify-between w-[100%] sm:w-[600px] p-3 mt-5 border sm:mx-10 md:mx-10 mx-2'>
      <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <FaPlus className='text-[#2A6BFD] text-xl' />
    </div>
  )
}

export default TenthPage;