import React from "react";

export default function CollectionOfInformation() {
   return (
      <div className="pt-14">
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-[32px] font-bold 3md:w-[500px]"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            COLLECTION OF INFORMATION
         </div>
         <div className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pt-2">
            Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan nec
            at non ac. Tempor aliquet scelerisque diam ultrices nec aliquam
            penatibus lectus nibh. Quis quam sed nunc vel amet elit aliquet
            sodales libero.
         </div>
         <div className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pt-5">
            Cursus faucibus libero augue vitae quam sit ligula nunc. Sed donec
            quam sed ac in habitasse. Duis sed egestas egestas ac placerat
            tempus gravida lacus tristique. Lorem nibh eget nisl sed mi non
            mattis. Pretium aliquam ut integer quam accumsan ridiculus
            pellentesque varius.
         </div>
         <ul className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal ps-10 pt-12 pb-10">
            <li className="list-disc">
               Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan
               nec at non ac. Tempor aliquet scelerisque diam ultrices nec
               aliquam penatibus lectus nibh. Quis quam sed nunc vel amet elit
               aliquet sodales libero.
            </li>
            <li className="list-disc pt-7">
               Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan
               nec at non ac.
            </li>
            <li className="list-disc pt-7">
               Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="list-disc pt-7">
               Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan
               nec at non ac. Tempor aliquet scelerisque diam ultrices nec
               aliquam penatibus lectus nibh.
            </li>
            <li className="list-disc pt-7">
               Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan
               nec at non ac.
            </li>
         </ul>
      </div>
   );
}
