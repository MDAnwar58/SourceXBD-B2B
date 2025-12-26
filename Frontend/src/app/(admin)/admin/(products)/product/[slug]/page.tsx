import React, { Fragment } from "react";
import MoreDropdownBtn from "./Components/MoreDropdownBtn";
import Img from "@/components/Image";
import {
   AllProductsSvgIcon,
   DownArrowSvgIcon,
   EmailSvgIcon,
   LocationSvgIcon,
   MoneySvgIcon,
   PhoneSvgIcon,
} from "../../../components/SvgIcons";
import RatingStar from "../../../components/RatingStar";
import PageHeader from "../../../components/PageHeader";

const icon = (
   <span className="w-6 h-6">
      <AllProductsSvgIcon />
   </span>
);

export default function ProductInformation() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Product Details" searchBox={false} />

         <div className=" xs:grid grid-cols-12 gap-7">
            <div className=" 5xl:col-span-9 xl:col-span-8 col-span-12  xs:mb-0 mb-7">
               <div className="bg-[#ffffff] rounded-[20px] shadow-admin-card pt-3 pb-5 px-5">
                  <div className=" xs:flex justify-between items-center">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative">
                        Product Information
                     </div>

                     <div className=" flex items-center xs:justify-start justify-between gap-x-2">
                        <div className="bg-[#ffc524] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded w-[94px] h-6 flex justify-center items-center">
                           Approved
                        </div>

                        <MoreDropdownBtn />
                     </div>
                  </div>

                  <div className=" grid grid-cols-12 gap-x-3 pt-2">
                     <div className="10xl:col-span-3 5xl:col-span-4 2xl:col-span-5 xl:col-span-6 col-span-12 ">
                        <Img
                           src="/assets/images/product-info.png"
                           alt="product information image"
                           width={400}
                           height={400}
                           className="rounded-[20px] w-full 16xl:h-[275px] 10xl:h-[250px] 6xl:h-[270px] 5xl:h-[250px] 2xl:h-[265px] xl:h-[290px] lg:h-[400px] md:h-[290px] sm:h-[450px] 6xs:h-[400px] 3xs:h-[350px] xs:h-[300px] xs4:h-[250px] h-[200px]"
                        />
                     </div>
                     <div className="10xl:col-span-9 5xl:col-span-8 2xl:col-span-7 xl:col-span-6 col-span-12 ">
                        <div className="flex items-center gap-x-1 pt-2">
                           <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold">
                              Lorem Ipsum
                           </div>
                           <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pt-[.4rem]">
                              / (Category)
                           </div>
                        </div>

                        <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pt-2">
                           Lorem ipsum dolor sit amet consectetur. Adipiscing
                           fames diam elementum purus mi leo elementum. Senectus
                           vel dui pretium sagittis commodo donec commodo lectus
                           quis.
                        </div>

                        <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pt-5">
                           Price
                        </div>

                        <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] w-[169px] h-9 flex items-center pt-[.10rem]">
                           <div className="bg-[#98b0ee] rounded-tl-[14px] rounded-bl-[14px] w-[40%] h-full flex items-center justify-center gap-x-1">
                              <div
                                 className="rounded-lg w-[25px] h-[22px] text-white flex justify-center items-center"
                                 style={{
                                    background:
                                       "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                                 }}
                              >
                                 <div className="w-5 h-5">
                                    <DownArrowSvgIcon />
                                 </div>
                              </div>
                              <div className=" bg-gray-700 text-white rounded w-5 h-5 flex items-center justify-center">
                                 <div className="w-3 h-3">
                                    <MoneySvgIcon />
                                 </div>
                              </div>
                           </div>
                           <div className="text-[#515151] text-center w-[60%] font-['Arial-Bold',_sans-serif] text-sm font-bold">
                              00000000
                           </div>
                        </div>

                        <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pt-5 pb-[.4rem]">
                           Reviews and Ratings
                        </div>

                        <div className="flex items-center gap-x-3">
                           <div>
                              <RatingStar rating={4} />
                           </div>
                           <div className="text-[#4285f4] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                              / 4.0
                           </div>
                        </div>

                        <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
                           &amp; 250+ Reviews
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className=" 5xl:col-span-3 xl:col-span-4 2lg:col-span-5 6md:col-span-7 3md:col-span-9 col-span-12">
               <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card">
                  <div className=" p-5 pb-3 border-b border-gray-300">
                     <div className="flex items-center justify-between">
                        <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold relative">
                           Seller Information
                        </div>
                        <div className="bg-[#ffc524] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold rounded w-14 h-[18px] flex items-center justify-center">
                           Active
                        </div>
                     </div>

                     <div className="flex items-center gap-x-3 pt-3">
                        <Img
                           src="/assets/images/product-saller.png"
                           alt="product saller avatar"
                           width={150}
                           height={150}
                           className="rounded-full w-20 h-20"
                        />
                        <div className="w-full">
                           <div className="text-[#515151] text-left font-['Raleway-SemiBold',_sans-serif] text-[10px] font-semibold">
                              User ID: 123456-78910
                           </div>
                           <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold">
                              Rofiqul ISlam
                           </div>
                           <div className="flex justify-between items-center pt-1">
                              <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                                 Full Verifide
                              </div>
                              <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                                 100%
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="px-5 py-4 border-b border-gray-300">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-1">
                        Contact Information
                     </div>

                     <div className="flex items-center gap-x-2 pb-1">
                        <div className="w-4 h-4 text-[#98B0EE]">
                           <EmailSvgIcon />
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           naimul46823@gmail.com
                        </div>
                     </div>

                     <div className="flex items-center gap-x-2 pb-1">
                        <div className="w-4 h-4 text-[#98B0EE]">
                           <EmailSvgIcon />
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           naimul46823@gmail.com
                        </div>
                     </div>

                     <div className="flex items-center gap-x-2">
                        <div className="w-4 h-4 text-[#98B0EE]">
                           <PhoneSvgIcon />
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           +880 1953683518
                        </div>
                     </div>
                  </div>

                  <div className="px-5 pt-3 pb-5">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-1">
                        Location
                     </div>
                     <div className="flex items-center gap-x-2">
                        <div className="w-4 h-4  text-[#98B0EE]">
                           <LocationSvgIcon />
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           daulotpur, Khulna, Bangladesh
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
}
