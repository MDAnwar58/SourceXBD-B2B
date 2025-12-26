import dynamic from "next/dynamic";
import React from "react";
const Img = dynamic(() => import("@/components/Image"));

export default function PrivacyPolicyHeroSection() {
   return (
      <div
         className=" pb-10 pt-[7.5rem]"
         style={{
            background:
               "linear-gradient(90deg,rgba(221, 223, 246, 1) 0%,rgba(192, 198, 240, 1) 55.02025485038757%,rgba(208, 214, 255, 1) 100%)",
         }}
      >
         <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1">
               <div className="flex items-end">
                  <div className="pb-10">
                     <div
                        className="text-left font-['Raleway-Bold',_sans-serif] text-5xl font-bold 3xs:w-96 pb-7"
                        style={{
                           background:
                              "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        Privacy Policy
                     </div>

                     <div className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-xl font-normal">
                        Lorem ipsum dolor sit amet consectetur. Leo habitant
                        nisi rhoncus massa gravida netus ullamcorper ligula. Dis
                        blandit tristique volutpat quis.
                     </div>
                  </div>
               </div>
               <div className=" relative lg:my-0 my-9">
                  {/* TODO: background polygon start */}
                  <div className="w-full h-full absolute left-0 top-0 md:flex hidden lg:justify-end  justify-center">
                     <div className="relative lg:w-full  4xs:w-[530px] w-full h-full">
                        <div className="bg-[rgba(27,93,204,0.30)] rounded-[50%] w-[191.88px] h-[191.88px] shadow-2xl absolute lg:left-[4.5rem] -left-10 top-[79%] transform-translate-y-middle" />
                        <div className="bg-[rgba(172,224,255,0.40)] rounded-[50%] w-[191.88px] h-[191.88px] shadow-2xl absolute lg:left-[61%] left-[51%] -top-[2.5rem] transform-translate-x-middle" />
                        <div className="bg-[rgba(172,224,255,0.30)] rounded-[50%] w-[102.19px] h-[102.19px] shadow-xl absolute lg:-right-7 -right-5 -bottom-2" />
                     </div>
                  </div>

                  {/* TODO: background polygon end */}

                  <div className="w-full h-full relative flex lg:justify-end justify-center">
                     <Img
                        src="/assets/images/privacy-policy-hero-image.png"
                        alt="about page image"
                        width={600}
                        height={600}
                        className="lg:w-[78.5%] 3xs:w-[508px] w-full xl:h-[296px] 3lg:h-[256px] lg:h-[236px] xs:h-[266px] xs3:h-[236px] xs5:h-[206px] h-[176px] md:me-5"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
