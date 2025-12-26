"use client";
import React from "react";
import {
   SvgOurClientPolygonRectangleIcon,
   SvgStarBoldIcon,
} from "@/components/SvgIcons";
import OurClientSlider from "./OurClientSlider";
import Img from "@/components/Image";

const SLIDES = [
   {
      id: 1,
      item: (
         <div
            className="rounded-[40px] 5md:h-[275px] h-auto !w-full flex 5md:flex-row flex-col items-center 5md:!mt-9 5md:!mb-9 xs:p-9 p-5"
            style={{
               background:
                  "linear-gradient(90.01deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 52.23138928413391%,rgba(208, 214, 255, 0.5) 100%)",
               boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="5md:w-[50%] relative">
               <Img
                  src="/assets/images/client-image1.png"
                  alt="..."
                  width={369}
                  height={369}
                  className="5md:rounded-[40px] rounded-full 5md:h-[405px] h-28 5md:w-[369px] w-28 5md:absolute top-[50%] left-[50%] our-client-slider-transform-translate-middle 5md:mx-0 mx-auto"
               />
            </div>
            <div className="5md:w-[50%] sm:w-[75%]">
               <div className="text-[#4285f4] 5md:text-left text-center font-['Inter-Bold',_sans-serif] text-2xl font-bold mt-7">
                  John Smith
               </div>
               <div className="text-[#ffffff] 5md:text-left text-center font-['Inter-Regular',_sans-serif] text-xl font-normal mt-5">
                  Owner of Textile Innovations Inc
               </div>
               <div className="text-[#2f2f2f] 5md:text-left text-center font-['Arial-Regular',_sans-serif] text-xs font-normal 5md:mt-10 mt-2">
                  As the owner of a bustling textile manufacturing company, the
                  efficiency and reliability of our machinery
               </div>
               <div className="flex flex-row gap-1 5md:justify-start justify-center items-center pt-5 5md:pb-5">
                  <span>
                     <SvgStarBoldIcon width={24} height={24} color="#F4ED42" />
                  </span>
                  <span className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-sm font-bold relative">
                     4.9
                  </span>
               </div>
            </div>
         </div>
      ),
   },
   {
      id: 1,
      item: (
         <div
            className="rounded-[40px] 5md:h-[275px] h-auto !w-full flex 5md:flex-row flex-col items-center 5md:!mt-9 5md:!mb-9 xs:p-9 p-5"
            style={{
               background:
                  "linear-gradient(90.01deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 52.23138928413391%,rgba(208, 214, 255, 0.5) 100%)",
               boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="5md:w-[50%] relative">
               <Img
                  src="/assets/images/client-image1.png"
                  alt="..."
                  width={369}
                  height={369}
                  className="5md:rounded-[40px] rounded-full 5md:h-[405px] h-28 5md:w-[369px] w-28 5md:absolute top-[50%] left-[50%] our-client-slider-transform-translate-middle 5md:mx-0 mx-auto"
               />
            </div>
            <div className="5md:w-[50%] sm:w-[75%]">
               <div className="text-[#4285f4] 5md:text-left text-center font-['Inter-Bold',_sans-serif] text-2xl font-bold mt-7">
                  John Smith
               </div>
               <div className="text-[#ffffff] 5md:text-left text-center font-['Inter-Regular',_sans-serif] text-xl font-normal mt-5">
                  Owner of Textile Innovations Inc
               </div>
               <div className="text-[#2f2f2f] 5md:text-left text-center font-['Arial-Regular',_sans-serif] text-xs font-normal 5md:mt-10 mt-2">
                  As the owner of a bustling textile manufacturing company, the
                  efficiency and reliability of our machinery
               </div>
               <div className="flex flex-row gap-1 5md:justify-start justify-center items-center pt-5 5md:pb-5">
                  <span>
                     <SvgStarBoldIcon width={24} height={24} color="#F4ED42" />
                  </span>
                  <span className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-sm font-bold relative">
                     4.9
                  </span>
               </div>
            </div>
         </div>
      ),
   },
   {
      id: 1,
      item: (
         <div
            className="rounded-[40px] 5md:h-[275px] h-auto !w-full flex 5md:flex-row flex-col items-center 5md:!mt-9 5md:!mb-9 xs:p-9 p-5"
            style={{
               background:
                  "linear-gradient(90.01deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 52.23138928413391%,rgba(208, 214, 255, 0.5) 100%)",
               boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="5md:w-[50%] relative">
               <Img
                  src="/assets/images/client-image1.png"
                  alt="..."
                  width={369}
                  height={369}
                  className="5md:rounded-[40px] rounded-full 5md:h-[405px] h-28 5md:w-[369px] w-28 5md:absolute top-[50%] left-[50%] our-client-slider-transform-translate-middle 5md:mx-0 mx-auto"
               />
            </div>
            <div className="5md:w-[50%] sm:w-[75%]">
               <div className="text-[#4285f4] 5md:text-left text-center font-['Inter-Bold',_sans-serif] text-2xl font-bold mt-7">
                  John Smith
               </div>
               <div className="text-[#ffffff] 5md:text-left text-center font-['Inter-Regular',_sans-serif] text-xl font-normal mt-5">
                  Owner of Textile Innovations Inc
               </div>
               <div className="text-[#2f2f2f] 5md:text-left text-center font-['Arial-Regular',_sans-serif] text-xs font-normal 5md:mt-10 mt-2">
                  As the owner of a bustling textile manufacturing company, the
                  efficiency and reliability of our machinery
               </div>
               <div className="flex flex-row gap-1 5md:justify-start justify-center items-center pt-5 5md:pb-5">
                  <span>
                     <SvgStarBoldIcon width={24} height={24} color="#F4ED42" />
                  </span>
                  <span className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-sm font-bold relative">
                     4.9
                  </span>
               </div>
            </div>
         </div>
      ),
   },
   {
      id: 1,
      item: (
         <div
            className="rounded-[40px] 5md:h-[275px] h-auto !w-full flex 5md:flex-row flex-col items-center 5md:!mt-9 5md:!mb-9 xs:p-9 p-5"
            style={{
               background:
                  "linear-gradient(90.01deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 52.23138928413391%,rgba(208, 214, 255, 0.5) 100%)",
               boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="5md:w-[50%] relative">
               <Img
                  src="/assets/images/client-image1.png"
                  alt="..."
                  width={369}
                  height={369}
                  className="5md:rounded-[40px] rounded-full 5md:h-[405px] h-28 5md:w-[369px] w-28 5md:absolute top-[50%] left-[50%] our-client-slider-transform-translate-middle 5md:mx-0 mx-auto"
               />
            </div>
            <div className="5md:w-[50%] sm:w-[75%]">
               <div className="text-[#4285f4] 5md:text-left text-center font-['Inter-Bold',_sans-serif] text-2xl font-bold mt-7">
                  John Smith
               </div>
               <div className="text-[#ffffff] 5md:text-left text-center font-['Inter-Regular',_sans-serif] text-xl font-normal mt-5">
                  Owner of Textile Innovations Inc
               </div>
               <div className="text-[#2f2f2f] 5md:text-left text-center font-['Arial-Regular',_sans-serif] text-xs font-normal 5md:mt-10 mt-2">
                  As the owner of a bustling textile manufacturing company, the
                  efficiency and reliability of our machinery
               </div>
               <div className="flex flex-row gap-1 5md:justify-start justify-center items-center pt-5 5md:pb-5">
                  <span>
                     <SvgStarBoldIcon width={24} height={24} color="#F4ED42" />
                  </span>
                  <span className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-sm font-bold relative">
                     4.9
                  </span>
               </div>
            </div>
         </div>
      ),
   },
   {
      id: 1,
      item: (
         <div
            className="rounded-[40px] 5md:h-[275px] h-auto !w-full flex 5md:flex-row flex-col items-center 5md:!mt-9 5md:!mb-9 xs:p-9 p-5"
            style={{
               background:
                  "linear-gradient(90.01deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 52.23138928413391%,rgba(208, 214, 255, 0.5) 100%)",
               boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="5md:w-[50%] relative">
               <Img
                  src="/assets/images/client-image1.png"
                  alt="..."
                  width={369}
                  height={369}
                  className="5md:rounded-[40px] rounded-full 5md:h-[405px] h-28 5md:w-[369px] w-28 5md:absolute top-[50%] left-[50%] our-client-slider-transform-translate-middle 5md:mx-0 mx-auto"
               />
            </div>
            <div className="5md:w-[50%] sm:w-[75%]">
               <div className="text-[#4285f4] 5md:text-left text-center font-['Inter-Bold',_sans-serif] text-2xl font-bold mt-7">
                  John Smith
               </div>
               <div className="text-[#ffffff] 5md:text-left text-center font-['Inter-Regular',_sans-serif] text-xl font-normal mt-5">
                  Owner of Textile Innovations Inc
               </div>
               <div className="text-[#2f2f2f] 5md:text-left text-center font-['Arial-Regular',_sans-serif] text-xs font-normal 5md:mt-10 mt-2">
                  As the owner of a bustling textile manufacturing company, the
                  efficiency and reliability of our machinery
               </div>
               <div className="flex flex-row gap-1 5md:justify-start justify-center items-center pt-5 5md:pb-5">
                  <span>
                     <SvgStarBoldIcon width={24} height={24} color="#F4ED42" />
                  </span>
                  <span className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-sm font-bold relative">
                     4.9
                  </span>
               </div>
            </div>
         </div>
      ),
   },
   {
      id: 1,
      item: (
         <div
            className="rounded-[40px] 5md:h-[275px] h-auto !w-full flex 5md:flex-row flex-col items-center 5md:!mt-9 5md:!mb-9 xs:p-9 p-5"
            style={{
               background:
                  "linear-gradient(90.01deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 52.23138928413391%,rgba(208, 214, 255, 0.5) 100%)",
               boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="5md:w-[50%] relative">
               <Img
                  src="/assets/images/client-image1.png"
                  alt="..."
                  width={369}
                  height={369}
                  className="5md:rounded-[40px] rounded-full 5md:h-[405px] h-28 5md:w-[369px] w-28 5md:absolute top-[50%] left-[50%] our-client-slider-transform-translate-middle 5md:mx-0 mx-auto"
               />
            </div>
            <div className="5md:w-[50%] sm:w-[75%]">
               <div className="text-[#4285f4] 5md:text-left text-center font-['Inter-Bold',_sans-serif] text-2xl font-bold mt-7">
                  John Smith
               </div>
               <div className="text-[#ffffff] 5md:text-left text-center font-['Inter-Regular',_sans-serif] text-xl font-normal mt-5">
                  Owner of Textile Innovations Inc
               </div>
               <div className="text-[#2f2f2f] 5md:text-left text-center font-['Arial-Regular',_sans-serif] text-xs font-normal 5md:mt-10 mt-2">
                  As the owner of a bustling textile manufacturing company, the
                  efficiency and reliability of our machinery
               </div>
               <div className="flex flex-row gap-1 5md:justify-start justify-center items-center pt-5 5md:pb-5">
                  <span>
                     <SvgStarBoldIcon width={24} height={24} color="#F4ED42" />
                  </span>
                  <span className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-sm font-bold relative">
                     4.9
                  </span>
               </div>
            </div>
         </div>
      ),
   },
];

export default function OurClientSection() {
   return (
      <div className="our-client-section  bg-[#f0f2ff] 2sm:h-[621px] 3xs:h-[651px] xs:h-[671px] xs3:h-[651px] xs6:h-[691px] h-[711px] relative">
         <div className=" container">
            {/* TODO: our client section background polygon start */}
            <div className="5md:block hidden">
               <div className="bg-[rgba(172,224,255,0.10)] rounded-[100%] w-[361.5px] h-[361.5px] shadow-2xl absolute top-[50%] left-[55.5%] transform-translate-middle" />
               <div className=" overflow-visible absolute top-[50%] left-[43.5%] transform-translate-middle">
                  <SvgOurClientPolygonRectangleIcon width={471} height={515} />
               </div>
            </div>
            {/* TODO: our client section background polygon end */}
            <div className=" relative">
               <div className=" pt-14 2sm:pb-5 pb-16">
                  <div
                     className="2sm:text-left text-center font-['Raleway-Bold',_sans-serif] text-3xl font-bold"
                     style={{
                        background:
                           "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                     }}
                  >
                     Our Clients Beautiful Words
                  </div>
               </div>
               <div className="our-client-slider-area">
                  <OurClientSlider slides={SLIDES} />
               </div>
            </div>
         </div>
      </div>
   );
}
