import dynamic from "next/dynamic";
import React from "react";
const Img = dynamic(() => import("@/components/Image"));

export default function OurMissionAndVisionSection() {
   return (
      <div className="container pt-32">
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-11">
            <div>
               <div
                  className="text-left font-['Raleway-ExtraBold',_sans-serif] text-4xl font-extrabold 6xs:w-[455px] mb-5"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Our Mission and Vision
               </div>
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold pb-5">
                  Let’s enable 00+ SMEs to go digital
               </div>
               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xl font-normal">
                  Lorem ipsum dolor sit amet consectetur. Metus ultricies nunc
                  phasellus molestie. Vitae ultrices odio condimentum nisl
                  porttitor lacus eget. Nec leo quis ornare mauris arcu
                  bibendum. Pellentesque accumsan nec diam volutpat nunc augue
                  congue sodales. Viverra tristique facilisi tincidunt commodo
                  malesuada suspendisse vel rhoncus. Donec in amet augue
                  pharetra orci. Feugiat quisque eu morbi lorem pulvinar
                  pellentesque fringilla. Iaculis enim imperdiet suscipit vel.
                  Nullam leo vitae phasellus habitasse dictumst ipsum ut tempor
                  consequat.
               </div>
            </div>
            <div className="lg:pt-0 pt-7">
               <Img
                  src="/assets/images/our-mission-and-vision.png"
                  alt="our story main image"
                  width={700}
                  height={700}
                  className="h-auto w-full rounded-[30px]"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               />
            </div>
         </div>
      </div>
   );
}
