"use client";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
const Img = dynamic(() => import("@/components/Image"), { ssr: false });

export default function SignUnPageLeftSide() {
   return (
      <Fragment>
         <div
            className="3md:w-[635px] w-full bg-clip-text 1xl2:text-left text-center font-['Raleway-Bold',_sans-serif] text-[40px] font-bold 1xl2:mx-0 mx-auto"
            style={{
               background:
                  "linear-gradient(91.45deg,rgba(66, 133, 244, 1) 0%,rgba(87, 150, 255, 1) 60.00000238418579%,rgba(38, 77, 142, 1) 100%)",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Get your right business and right place to apply now
         </div>
         <div className="text-[#2f2f2f] 1xl2:text-left text-center 1xl2:mx-0 mx-auto font-['Arial-Regular',_sans-serif] text-base font-normal pt-2 3md:w-[475px] w-full">
            Be among the first founders to experience the easiest way to start
            run a business
         </div>
         <div className="1xl2:w-[475px] w-full">
            <Img
               src="/assets/images/signup-banner.png"
               alt="Login page image"
               width={455}
               height={455}
               className="1xl2:w-[435px] 3md:w-[635px] w-[535px]  h-autoo 1xl2:ms-auto mx-auto relative z-30"
            />
         </div>
      </Fragment>
   );
}
