import React from "react";

export default function GrievanceOfficer() {
   return (
      <div className="pb-20">
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-[32px] font-bold xs:w-[339px]"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            GRIEVANCE OFFICER
         </div>
         <div className="text-left font-['-',_sans-serif] text-base font-normal  md:w-[65%] sm:w-[85%]">
            <span>
               <span className="lorem-ipsum-dolor-sit-amet-consectetur-elementum-massa-accumsan-nec-at-non-ac-tempor-aliquet-scelerisque-diam-ultrices-nec-aliquam-penatibus-lectus-nibh-quis-quam-sed-nunc-vel-amet-elit-aliquet-sodales-libero-email-address-naimul-46823-gmail-com-span">
                  Lorem ipsum dolor sit amet consectetur. Elementum massa
                  accumsan nec at non ac. Tempor aliquet scelerisque diam
                  ultrices nec aliquam penatibus lectus nibh. Quis quam sed nunc
                  vel amet elit aliquet sodales libero.
                  <br />
                  <br />
               </span>
               <span className="text-blue-700">Email address:</span>
               <span className="text-[#90a8e7] ps-2">
                  naimul46823@gmail.com
               </span>
            </span>
         </div>
      </div>
   );
}
