import dynamic from "next/dynamic";
import React from "react";
const Img = dynamic(() => import("@/components/Image"));

export default function OurStorySection() {
   return (
      <div className="container">
         <div className=" grid lg:grid-cols-2 grid-cols-1 gap-x-11 lg:gap-y-0 gap-y-9 pt-32">
            <div>
               <Img
                  src="/assets/images/our-story-main.png"
                  alt="our story main image"
                  width={700}
                  height={700}
                  className="h-auto w-full rounded-[30px]"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               />
               <div className=" grid xs4:grid-cols-4 grid-cols-3 xs:gap-x-5 gap-x-3 pt-5">
                  <div>
                     <Img
                        src="/assets/images/our-story1.png"
                        alt="our story main image"
                        width={700}
                        height={600}
                        className="h-auto rounded-[10px]"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           objectFit: "cover",
                        }}
                     />
                  </div>
                  <div>
                     <Img
                        src="/assets/images/our-story1.png"
                        alt="our story main image"
                        width={700}
                        height={600}
                        className="h-auto rounded-[10px]"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           objectFit: "cover",
                        }}
                     />
                  </div>
                  <div>
                     <Img
                        src="/assets/images/our-story1.png"
                        alt="our story main image"
                        width={700}
                        height={600}
                        className="h-auto rounded-[10px]"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           objectFit: "cover",
                        }}
                     />
                  </div>
               </div>
            </div>
            <div>
               <div
                  className="text-left font-['Raleway-ExtraBold',_sans-serif] text-4xl font-extrabold xs3:w-[239px] mb-3"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  OUR STORY
               </div>
               <div className="pb-7">
                  <span className="text-[#4285f4] text-2xl font-bold font-['Arial'] pe-2">
                     Lorem ipsum dolor sit
                  </span>
                  <span className="text-[#2f2f2f] text-xl font-normal font-['Arial']">
                     amet consectetur. Metus ultricies nunc phasellus molestie.
                     Vitae ultrices odio condimentum nisl porttitor lacus eget.
                     Nec leo quis ornare mauris arcu bibendum. Pellentesque
                     accumsan nec diam volutpat nunc augue congue sodales.
                     Viverra tristique facilisi tincidunt commodo malesuada
                     suspendisse vel rhoncus. Donec in amet augue pharetra orci.
                     Feugiat quisque eu morbi lorem pulvinar pellentesque
                     fringilla. Iaculis enim imperdiet suscipit vel. Nullam leo
                     vitae phasellus habitasse dictumst ipsum ut tempor
                     consequat.
                  </span>
               </div>
               <div className="text-[#2f2f2f] text-xl font-normal font-['Arial']">
                  Lorem ipsum dolor sit amet consectetur. Metus ultricies nunc
                  phasellus molestie. Vitae ultrices odio condimentum nisl
                  porttitor lacus eget. Nec leo quis ornare mauris arcu
                  bibendum. Pellentesque accumsan nec diam volutpat nunc augue
                  congue sodales.{" "}
               </div>
            </div>
         </div>
      </div>
   );
}
