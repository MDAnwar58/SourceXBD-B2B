import React from "react";

export default function DisclosureOfInformation() {
   return (
      <div>
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-[32px] font-bold 3md:w-[650px]"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            DISCLOSURE OF INFORMATION
         </div>
         <div className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pt-4">
            Cursus faucibus libero augue vitae quam sit ligula nunc. Sed donec
            quam sed ac in habitasse. Duis sed egestas egestas ac placerat
            tempus gravida lacus tristique. Lorem nibh eget nisl sed mi non
            mattis. Pretium aliquam ut integer quam accumsan ridiculus
            pellentesque varius.
         </div>
         <ul className="text-[#90a8e7] text-left font-['Raleway-Regular',_sans-serif] text-base font-normal ps-10 pt-12 pb-7 md:w-[63%]">
            <li className="list-disc">
               Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan
               nec at non ac.
            </li>
            <li className="list-disc pt-5">
               Lorem ipsum dolor sit amet consectetur. Elementum massa.
            </li>
            <li className="list-disc pt-5">
               Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan
               nec at non ac. Tempor aliquet scelerisque diam ultrices.
            </li>
            <li className="list-disc pt-5">
               Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan
               nec at non ac. Tempor aliquet scelerisque diam ultrices nec
               aliquam penatibus lectus nibh. Quis quam sed nunc vel amet elit
               aliquet sodales libero.
            </li>
         </ul>
      </div>
   );
}
