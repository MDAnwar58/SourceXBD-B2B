"use client";
import React from "react";
import Img from "@/components/Image";
import RatingStar from "@admin/components/RatingStar";
import { LocalUrl } from "@/components/react/localhost";

type Props = {
   companyInfo: {
      companyName: string;
      companyLogo: string;
      review: string;
      points: string;
      desc: any;
   };
};

export default function CompanyInfo({ companyInfo }: Props) {
   const localUrl: string = LocalUrl();
   let image = "";
   if (companyInfo?.companyLogo) {
      const storeFilePath = companyInfo?.companyLogo;
      image = localUrl.concat(storeFilePath);
   }
   return (
      <div className=" border-b-2 border-solid border-gray-300 pb-5">
         {companyInfo?.companyLogo ? (
            <Img
               src={image}
               alt="Company User Aavatar"
               width={300}
               height={300}
               className="rounded-[14px] w-full 23xl:h-[355px] 18xl:h-[315px] 16xl:h-[275px] 10xl:h-[255px] 7xl:h-[225px] 5xl:h-[205px] 3xl:h-[185px] xl:h-[195px] 6lg:h-[175px] 4lg:h-[215px] 2lg:h-[185px] lg:h-[155px] 4md:h-[355px] 2md:h-[305px] md:h-[255px] sm:h-[475px] 6xs:h-[405px] 4xs:h-[355px] 3xs:h-[315px] xs:h-[285px] xs3:h-[255px] xs4:h-[225px] xs5:h-[215px] xs6:h-[205px] h-[175px]"
            />
         ) : (
            <Img
               src="/assets/images/demo.png"
               alt="Company Aavatar"
               width={300}
               height={300}
               className="rounded-[14px] w-full 23xl:h-[355px] 18xl:h-[315px] 16xl:h-[275px] 10xl:h-[255px] 7xl:h-[225px] 5xl:h-[205px] 3xl:h-[185px] xl:h-[195px] 6lg:h-[175px] 4lg:h-[215px] 2lg:h-[185px] lg:h-[155px] 4md:h-[355px] 2md:h-[305px] md:h-[255px] sm:h-[475px] 6xs:h-[405px] 4xs:h-[355px] 3xs:h-[315px] xs:h-[285px] xs3:h-[255px] xs4:h-[225px] xs5:h-[215px] xs6:h-[205px] h-[175px]"
            />
         )}
         <div className="px-1">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold mt-5">
               {companyInfo?.companyName}
            </div>

            <div className="flex gap-x-2 mt-2">
               <RatingStar rating={companyInfo?.points} />
               <div className="text-[#4285f4] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal relative">
                  {companyInfo?.points}/ 5
               </div>
            </div>

            <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pt-1">
               &amp; {companyInfo?.review}+ Reviews
            </div>

            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pt-5 pb-2">
               Description
            </div>

            <div
               className="bg-[rgba(152,176,238,0.05)] text-[#4d4d4d] shadow-admin-card font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal rounded-[14px] w-full py-3 px-4"
               dangerouslySetInnerHTML={{ __html: companyInfo.desc }}
            ></div>
         </div>
      </div>
   );
}
