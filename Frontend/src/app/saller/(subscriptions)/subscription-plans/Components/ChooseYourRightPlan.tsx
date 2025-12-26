"use client";
import React, { Fragment } from "react";

export default function ChooseYourRightPlanHeader() {
   return (
      <Fragment>
         <span
            className="text-left font-['Raleway-Medium',_sans-serif] text-4xl font-medium"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Choose Your right plan!
         </span>
         <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal pt-2 pb-9">
            simple pricing, Advance features for ypor business
         </div>
      </Fragment>
   );
}
