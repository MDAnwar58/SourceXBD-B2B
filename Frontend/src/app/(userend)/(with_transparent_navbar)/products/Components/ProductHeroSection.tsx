"use client";
import dynamic from "next/dynamic";
import React from "react";
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});

export default function ProductHeroSection() {
   return (
      <div
         className=" pb-10"
         style={{
            background:
               "linear-gradient(90deg,rgba(221, 223, 246, 1) 0%,rgba(192, 198, 240, 1) 55.02025485038757%,rgba(208, 214, 255, 1) 100%)",
         }}
      >
         <div className="container lg:pt-[7.5rem] pt-[11.5rem]">
            <div className="grid lg:grid-cols-2 grid-cols-1">
               <div className="flex items-end">
                  <div className="pb-0">
                     <div
                        className="3xs:text-left text-center font-['Raleway-Bold',_sans-serif] 3lg:text-5xl text-4xl font-bold pb-3 3lg:w-[520px] lg:w-full sm:w-[520px] w-full"
                        style={{
                           background:
                              "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        Top Ranking Products
                     </div>

                     <div className="text-[#2f2f2f] 3xs:text-left text-center font-['Arial-Regular',_sans-serif] text-xl font-normal pt-3">
                        Lorem ipsum dolor sit amet consectetur. Leo habitant
                        nisi rhoncus massa gravida netus ullamcorper ligula. Dis
                        blandit tristique volutpat quis.
                     </div>

                     <ul className="flex 3xs:flex-row flex-col items-center gap-x-16 3xs:gap-y-0 gap-y-3 ps-5 pt-5 text-[#515151] font-['Heebo-Bold',_sans-serif] text-2xl font-bold 3xs:text-left">
                        <li className=" list-disc">Lorem ipsum</li>
                        <li className=" list-disc">Lorem ipsum</li>
                     </ul>
                  </div>
               </div>
               <div className=" relative lg:mt-0 md:mt-20 mt-11 lg:mb-0 mb-11">
                  {/* TODO: background polygon start */}
                  <div className="w-full h-full absolute left-0 top-0 md:flex hidden lg:justify-end  justify-center">
                     <div className="relative lg:w-full  4xs:w-[530px] w-full h-full">
                        <div className="bg-[rgba(27,93,204,0.30)] rounded-[50%] w-[191.88px] h-[191.88px] shadow-2xl absolute lg:left-[4.5rem] -left-10 top-[79%] transform-translate-y-middle" />
                        <div className="bg-[rgba(172,224,255,0.40)] rounded-[50%] w-[191.88px] h-[191.88px] shadow-2xl absolute lg:left-[61%] left-[51%] -top-[2.5rem] transform-translate-x-middle" />
                        <div className="bg-[rgba(172,224,255,0.30)] rounded-[50%] w-[102.19px] h-[102.19px] shadow-xl absolute lg:-right-7 -right-5 -bottom-2" />
                     </div>
                  </div>
                  {/* TODO: background polygon end */}

                  <div className="w-full h-full relative flex lg:justify-end justify-center">
                     <Img
                        src="/assets/images/top-product-hero-image.png"
                        alt="about page image"
                        width={600}
                        height={600}
                        className="lg:w-[78.5%] 3xs:w-[508px] xl:h-[296px] 3lg:h-[256px] lg:h-[236px] xs:h-[266px] xs3:h-[236px] xs5:h-[206px] h-[176px] md:me-5"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
