"use client";
import React from "react";
import { SvgTriangleIcon } from "@/components/SvgIcons";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));
const RequirementSectionBackgroundSymbol = dynamic(
   () => import("./RequirementSectionBackgroundSymbol"),
   {
      ssr: false,
   }
);

export default function RequirementImageArea() {
   return (
      <div className=" relative lg:hidden flex justify-center items-center h-[85%] mt-16 mb-20">
         <div
            className="rounded-[50%] border-solid border-[#ffffff] border-2 4xs:w-[310px] xs:w-[271px] w-[201px] 4xs:h-[310px] xs:h-[271px] h-[201px] relative"
            style={{
               boxShadow:
                  "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            {/* TODO: requirement right side part's background symbol start */}
            <div
               className="bg-[rgba(172,224,255,0.10)] rounded-[50%] shadow-2xl w-[91.38px] h-[91.38px] absolute top-0 left-7 lg:block hidden"
               style={{
                  transformOrigin: "0 0",
                  transform: "rotate(-32.832deg) scale(-1, 1)",
               }}
            ></div>
            <div className=" absolute -top-[4.5rem] -right-10 -rotate-12 lg:block hidden">
               <SvgTriangleIcon width={203} height={212} />
            </div>
            <div className=" absolute -bottom-[6.9rem] left-10 -rotate-[17deg] lg:block hidden">
               <SvgTriangleIcon width={203} height={212} />
            </div>
            {/* TODO: requirement right side part's background symbol end */}
            <div
               className="bg-[#2f2f2f] rounded-[50%] w-[50%] h-[50%] absolute top-[50%] left-[50%] transform-translate-middle"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            ></div>

            <div
               className="bg-[rgba(27,93,204,0.30)] rounded-[50%] w-[85%] h-[85%] absolute top-[50%] left-[50%] transform-translate-middle relative"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               {/* TODO: background symbol start */}
               <RequirementSectionBackgroundSymbol />
               {/* TODO: background symbol end */}
               <div
                  className="bg-[rgba(172,224,255,0.50)] rounded-[50%] w-[80%] h-[80%] absolute top-[50%] left-[50%] transform-translate-middle relative"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <div
                     className="4xs:w-[155px] xs:w-[131px] w-[99px] 4xs:h-[198.09px] xs:h-[173.7px] h-[131.81px] aspect-[3/4] absolute -top-4 left-[50%] transform-translate-x-middle overflow-hidden z-10"
                     style={{
                        borderRadius: "100% / 125% 125% 80% 80%",
                     }}
                  >
                     <Img
                        src="/assets/images/requirement-men.png"
                        alt="men"
                        width={200}
                        height={200}
                        className="rounded-full w-full h-full absolute -bottom-7 left-0 -z-0"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
