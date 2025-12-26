import React from "react";

export default function Questions() {
   return (
      <div className="pb-12">
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-[32px] font-bold xs:w-[193px]"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            QUESTIONS
         </div>
         <div className="text-left font-['Arial-Regular',_sans-serif] text-base font-normal md:w-[65%] sm:w-[85%]">
            Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan nec
            at non ac. Tempor aliquet scelerisque diam ultrices nec aliquam
            penatibus lectus nibh. Quis quam sed nunc vel amet elit aliquet
            sodales libero.Please email us at
            <b className="text-[#90a8e7] ps-1">naimul46823@gmail.com</b>
         </div>
      </div>
   );
}
