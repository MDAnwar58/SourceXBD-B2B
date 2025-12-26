import React from "react";
import dynamic from "next/dynamic";
const ReviewMessage = dynamic(() => import("./ReviewMessage"));
const YourReviewMessage = dynamic(() => import("./YourReviewMessage"));

export default function UpdateContactDetailsContent() {
   return (
      <div
         className="bg-[rgba(255,255,255,0.05)] rounded-[20px] h-[609px] p-5"
         style={{
            boxShadow:
               "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
         }}
      >
         <ReviewMessage />
         <YourReviewMessage />
      </div>
   );
}
