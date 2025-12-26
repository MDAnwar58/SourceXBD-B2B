import dynamic from "next/dynamic";
import React from "react";
const Img = dynamic(() => import("@/components/Image"));

export default function OrganisationCardGrid() {
   return (
      <div className="grid 3sm:grid-cols-3 3xs:grid-cols-2 grid-cols-1 gap-5 mt-9 xl:w-[73%] 5lg:w-[83%] lg:w-[93%] w-full">
         <div className="bg-[rgba(152,176,238,0.05)] hover:bg-[#f0f2ff] rounded-[20px] w-full relative text-center px-5 pt-5 pb-9 hover:shadow-card transition-all duration-150 ease-linear">
            <div
               className="bg-[#92aae9] rounded-[50%] w-[60px] h-[60px] relative mx-auto"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <Img
                  src="/assets/images/organization-card-image1.png"
                  alt="organisation card image 1"
                  width={100}
                  height={100}
                  className="w-[38px] h-[38px] overflow-visible absolute top-[50%] left-[50%] transform-translate-middle"
               />
            </div>
            <div className="text-[#92aae8] font-['Raleway-Medium',_sans-serif] text-xl font-medium pt-1">
               Business Type
            </div>
            <div className="text-[#4d4d4d] font-['Arial-Regular',_sans-serif] text-sm font-normal pt-2">
               Lorem ipsum dolor sit amet consectetur
            </div>
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] hover:bg-[#f0f2ff] rounded-[20px] w-full relative text-center px-5 pt-5 pb-9 hover:shadow-card transition-all duration-150 ease-linear">
            <div
               className="bg-[#92aae9] rounded-[50%] w-[60px] h-[60px] relative mx-auto"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <Img
                  src="/assets/images/organization-card-image2.png"
                  alt="organisation card image 1"
                  width={100}
                  height={100}
                  className="w-[38px] h-[38px] overflow-visible absolute top-[50%] left-[50%] transform-translate-middle"
               />
            </div>
            <div className="text-[#92aae8] font-['Raleway-Medium',_sans-serif] text-xl font-medium pt-1">
               Employee Count
            </div>
            <div className="text-[#4d4d4d] font-['Arial-Regular',_sans-serif] text-sm font-normal pt-2">
               Lorem ipsum dolor sit amet consectetur
            </div>
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] hover:bg-[#f0f2ff] rounded-[20px] w-full relative text-center px-5 pt-5 pb-9 hover:shadow-card transition-all duration-150 ease-linear">
            <div
               className="bg-[#92aae9] rounded-[50%] w-[60px] h-[60px] relative mx-auto"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <Img
                  src="/assets/images/organization-card-image3.png"
                  alt="organisation card image 1"
                  width={100}
                  height={100}
                  className="w-[38px] h-[38px] overflow-visible absolute top-[50%] left-[50%] transform-translate-middle"
               />
            </div>
            <div className="text-[#92aae8] font-['Raleway-Medium',_sans-serif] text-xl font-medium pt-1">
               Establishment
            </div>
            <div className="text-[#4d4d4d] font-['Arial-Regular',_sans-serif] text-sm font-normal pt-2">
               Lorem ipsum dolor sit amet consectetur
            </div>
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] hover:bg-[#f0f2ff] rounded-[20px] w-full relative text-center px-5 pt-5 pb-9 hover:shadow-card transition-all duration-150 ease-linear">
            <div
               className="bg-[#92aae9] rounded-[50%] w-[60px] h-[60px] relative mx-auto"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <Img
                  src="/assets/images/organization-card-image4.png"
                  alt="organisation card image 1"
                  width={100}
                  height={100}
                  className="w-[38px] h-[38px] overflow-visible absolute top-[50%] left-[50%] transform-translate-middle"
               />
            </div>
            <div className="text-[#92aae8] font-['Raleway-Medium',_sans-serif] text-xl font-medium pt-1">
               Annual Turnover
            </div>
            <div className="text-[#4d4d4d] font-['Arial-Regular',_sans-serif] text-sm font-normal pt-2">
               Lorem ipsum dolor sit amet consectetur
            </div>
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] hover:bg-[#f0f2ff] rounded-[20px] w-full relative text-center px-5 pt-5 pb-9 hover:shadow-card transition-all duration-150 ease-linear">
            <div
               className="bg-[#92aae9] rounded-[50%] w-[60px] h-[60px] relative mx-auto"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <Img
                  src="/assets/images/organization-card-image5.png"
                  alt="organisation card image 1"
                  width={100}
                  height={100}
                  className="w-[38px] h-[38px] overflow-visible absolute top-[50%] left-[50%] transform-translate-middle"
               />
            </div>
            <div className="text-[#92aae8] font-['Raleway-Medium',_sans-serif] text-xl font-medium pt-1">
               Working Days
            </div>
            <div className="text-[#4d4d4d] font-['Arial-Regular',_sans-serif] text-sm font-normal pt-2">
               Lorem ipsum dolor sit amet consectetur
            </div>
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] hover:bg-[#f0f2ff] rounded-[20px] w-full relative text-center px-5 pt-5 pb-9 hover:shadow-card transition-all duration-150 ease-linear">
            <div
               className="bg-[#92aae9] rounded-[50%] w-[60px] h-[60px] relative mx-auto"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <Img
                  src="/assets/images/organization-card-image6.png"
                  alt="organisation card image 1"
                  width={100}
                  height={100}
                  className="w-[38px] h-[38px] overflow-visible absolute top-[50%] left-[50%] transform-translate-middle"
               />
            </div>
            <div className="text-[#92aae8] font-['Raleway-Medium',_sans-serif] text-xl font-medium pt-1">
               Payment Mode
            </div>
            <div className="text-[#4d4d4d] font-['Arial-Regular',_sans-serif] text-sm font-normal pt-2">
               Lorem ipsum dolor sit amet consectetur
            </div>
         </div>
      </div>
   );
}
