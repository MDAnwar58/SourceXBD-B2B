import dynamic from "next/dynamic";
import React from "react";
const Img = dynamic(() => import("@/components/Image"));

export default function MeetOurForceSection() {
   return (
      <div className="container pt-24">
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-5xl font-bold xs:w-96 w-full mx-auto text-center"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Meet Our Force
         </div>

         <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 lg:gap-y-0 xs5:gap-y-64 gap-y-9 xl:px-11 xs5:pt-72 pt-11 pb-24">
            <div
               className="rounded-[10px] relative xs5:pt-14 pt-5 xs5:px-3 px-5 pb-5 "
               style={{
                  background:
                     "linear-gradient(90deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 58.99999737739563%,rgba(208, 214, 255, 0.5) 100%)",
                  boxShadow:
                     "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <Img
                  src="/assets/images/force1.png"
                  alt="our story main image"
                  width={700}
                  height={600}
                  className="h-[254px] sm:w-[75%] 6xs:w-[45%] 3xs:w-[55%] xs:w-[65%] xs4:w-[75%] xs5:w-[85%] w-full rounded-[10px] xs5:absolute xs5:-top-52 xs5:left-[50%] transform-translate-xs5-middle"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                     objectFit: "cover",
                  }}
               />

               <div
                  className="text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold xs:w-28 w-full text-center mx-auto xs5:mt-0 mt-3"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Akbar Ali
               </div>
               <div className="text-[#555555] text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pb-2">
                  Founder &amp; Chairman
               </div>
               <div className="text-center font-['Arial-Regular',_sans-serif] text-sm font-normal">
                  Lorem ipsum dolor sit amet consectetur.
               </div>
            </div>
            <div
               className="rounded-[10px] relative xs5:pt-14 pt-5 xs5:px-3 px-5 pb-5 "
               style={{
                  background:
                     "linear-gradient(90deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 58.99999737739563%,rgba(208, 214, 255, 0.5) 100%)",
                  boxShadow:
                     "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <Img
                  src="/assets/images/force2.png"
                  alt="our story main image"
                  width={700}
                  height={600}
                  className="h-[254px] sm:w-[75%] 6xs:w-[45%] 3xs:w-[55%] xs:w-[65%] xs4:w-[75%] xs5:w-[85%] w-full rounded-[10px] xs5:absolute xs5:-top-52 xs5:left-[50%] transform-translate-xs5-middle"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                     objectFit: "cover",
                  }}
               />

               <div
                  className="text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold xs:w-28 w-full text-center mx-auto xs5:mt-0 mt-3"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Akbar Ali
               </div>
               <div className="text-[#555555] text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pb-2">
                  Founder &amp; Chairman
               </div>
               <div className="text-center font-['Arial-Regular',_sans-serif] text-sm font-normal">
                  Lorem ipsum dolor sit amet consectetur.
               </div>
            </div>
            <div
               className="rounded-[10px] relative xs5:pt-14 pt-5 xs5:px-3 px-5 pb-5 "
               style={{
                  background:
                     "linear-gradient(90deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 58.99999737739563%,rgba(208, 214, 255, 0.5) 100%)",
                  boxShadow:
                     "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <Img
                  src="/assets/images/force3.png"
                  alt="our story main image"
                  width={700}
                  height={600}
                  className="h-[254px] sm:w-[75%] 6xs:w-[45%] 3xs:w-[55%] xs:w-[65%] xs4:w-[75%] xs5:w-[85%] w-full rounded-[10px] xs5:absolute xs5:-top-52 xs5:left-[50%] transform-translate-xs5-middle"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                     objectFit: "cover",
                  }}
               />

               <div
                  className="text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold xs:w-28 w-full text-center mx-auto xs5:mt-0 mt-3"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Akbar Ali
               </div>
               <div className="text-[#555555] text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pb-2">
                  Founder &amp; Chairman
               </div>
               <div className="text-center font-['Arial-Regular',_sans-serif] text-sm font-normal">
                  Lorem ipsum dolor sit amet consectetur.
               </div>
            </div>
         </div>
      </div>
   );
}
