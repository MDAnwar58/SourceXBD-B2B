import React from "react";
import SallerGrid from "@/saller/auth/components/saller-grid";
import Img from "@/components/Image";
import {
   FaceBookSvgIcon,
   InstaSvgIcon,
   TwitterSvgIcon,
} from "@/saller/auth/components/SvgIcons";

export default function VerifyBecomeASallerRightSide() {
   return (
      <div className="w-full">
         <div
            className="rounded-[20px] relative overflow-hidden"
            style={{
               background:
                  "linear-gradient(134.36deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
            }}
         >
            {/* TODO: background symbols start */}
            <div
               className="bg-[rgba(152,176,238,0.24)] rounded-[50%] w-[258.67px] h-[258.67px] absolute left-[574.91px] top-[314px]"
               style={{
                  transformOrigin: "0 0",
                  transform: "rotate(45deg) scale(1, 1)",
               }}
            />
            <div
               className="bg-[rgba(152,176,238,0.25)] rounded-[50%] w-[303.43px] h-[303.43px] absolute left-[113.56px] top-[-96px]"
               style={{
                  transformOrigin: "0 0",
                  transform: "rotate(45deg) scale(1, 1)",
               }}
            />
            <div
               className="bg-[rgba(172,224,255,0.20)] rounded-[50%] w-[191.54px] h-[191.54px] absolute left-[417.44px] top-[446.13px]"
               style={{
                  transformOrigin: "0 0",
                  transform: "rotate(45deg) scale(1, 1)",
               }}
            />
            <div
               className="bg-[rgba(172,224,255,0.20)] rounded-[50%] w-[191.54px] h-[191.54px] absolute left-[599.44px] top-[-135px]"
               style={{
                  transformOrigin: "0 0",
                  transform: "rotate(45deg) scale(1, 1)",
               }}
            />
            {/* TODO: background symbols end */}
            <div className=" relative z-10 3xs:p-20 p-11">
               <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xl leading-[117.46%] font-bold 4xs:w-[334px] w-full">
                  “In just 1 year, LTA International generated 14 new customers
                  with new sales growth totaling
               </div>
               <div className="text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-base leading-[115.05%] font-bold mt-3">
                  $1.5 million.”
               </div>

               <SallerGrid
                  gridOne={true}
                  className="3xs:!grid 7xs:grid-cols-3 3xs:grid-cols-2 xl:gap-x-1 3md:gap-x-20 2md:gap-x-16 md:gap-x-14 sm:gap-x-7 gap-x-3 gap-y-7 py-11"
               >
                  <div className="text-center">
                     <div className="text-[#ffffff] font-['Raleway-SemiBold',_sans-serif] text-base leading-[117.46%] font-semibold pb-2">
                        Guest
                     </div>
                     <Img
                        src="/assets/images/guest.png"
                        alt="guest avatar"
                        width={150}
                        height={150}
                        className="rounded-[50%] w-[102px] h-[102px] mx-auto"
                        style={{ objectFit: "cover" }}
                     />
                     <div className="text-[#ffffff] font-['Raleway-Medium',_sans-serif] text-sm leading-[117.46%] font-medium pt-2 pb-1">
                        Lorem Ipsum
                     </div>

                     <div className="text-[#ffffff] text-center font-['Arial-Regular',_sans-serif] text-[8px] font-normal h-[18px]">
                        Lorem ipsum dolor sit amet consectetur. Elementum massa
                        accumsan nec at non ac.
                     </div>
                  </div>
                  <div className="text-center">
                     <div className="text-[#ffffff] font-['Raleway-SemiBold',_sans-serif] text-base leading-[117.46%] font-semibold pb-2">
                        Buyer
                     </div>
                     <Img
                        src="/assets/images/buyer.png"
                        alt="buyer avatar"
                        width={150}
                        height={150}
                        className="rounded-[50%] w-[102px] h-[102px] mx-auto"
                        style={{ objectFit: "cover" }}
                     />
                     <div className="text-[#ffffff] font-['Raleway-Medium',_sans-serif] text-sm leading-[117.46%] font-medium  pt-2 pb-1">
                        Lorem Ipsum
                     </div>

                     <div className="text-[#ffffff] text-center font-['Arial-Regular',_sans-serif] text-[8px] font-normal h-[18px]">
                        Lorem ipsum dolor sit amet consectetur. Elementum massa
                        accumsan nec at non ac.
                     </div>
                  </div>
                  <div className="text-center">
                     <div className="text-[#ffffff] font-['Raleway-SemiBold',_sans-serif] text-base leading-[117.46%] font-semibold pb-2">
                        Seller
                     </div>

                     <Img
                        src="/assets/images/seller.png"
                        alt="saller avatar"
                        width={150}
                        height={150}
                        className="rounded-[50%] w-[102px] h-[102px] mx-auto"
                        style={{ objectFit: "cover" }}
                     />
                     <div className="text-[#ffffff] font-['Raleway-Medium',_sans-serif] text-sm leading-[117.46%] font-medium pt-2 pb-1">
                        Lorem Ipsum
                     </div>

                     <div className="text-[#ffffff] text-center font-['Arial-Regular',_sans-serif] text-[8px] font-normal h-[18px]">
                        Lorem ipsum dolor sit amet consectetur. Elementum massa
                        accumsan nec at non ac.
                     </div>
                  </div>
               </SallerGrid>
               <div>
                  <div className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-base leading-[117.46%] font-medium">
                     Shear
                  </div>
                  <div className="flex flex-row gap-3 mt-3">
                     <div className="w-4 h-4 overflow-visible text-white">
                        <TwitterSvgIcon />
                     </div>
                     <div className="w-4 h-4 overflow-visible text-white">
                        <FaceBookSvgIcon />
                     </div>
                     <div className="w-4 h-4 overflow-visible text-white">
                        <InstaSvgIcon />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
