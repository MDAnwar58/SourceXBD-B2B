import { calculateTimeDifference } from "@/components/react/date";
import {
   SvgCdEmailIcon,
   SvgMapIcon,
   SvgOGCLocationIcon,
   SvgOGCMemberSinceIcon,
   SvgOGCUserIcon,
   SvgPhoneIcon,
} from "@/components/SvgIcons";
import React from "react";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));

type SallerDetails = {
   name: string;
   email: string;
   phone: string;
   yearOfJoining: string;
   location: string;
};

type Props = {
   saller: SallerDetails;
};

export default function OrganisationSallerDetails({ saller }: Props) {
   let date;
   if (saller?.yearOfJoining !== undefined) {
      const { days, months, years } = calculateTimeDifference(
         String(saller?.yearOfJoining)
      );
      date = months + " months" + ", " + years + " years";
   }
   return (
      <div
         className="bg-[#ffffff] rounded-[20px] w-full px-7 py-5"
         style={{
            boxShadow:
               "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
         }}
      >
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative">
            Seller Details
         </div>
         {saller?.name && (
            <div className="flex pt-3">
               <div>
                  <div className="bg-[#4285f4] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center">
                     <SvgOGCUserIcon width={16} height={16} color="white" />
                  </div>
               </div>
               <div className="pt-[.15rem] ps-2">
                  <div className="text-[#4285f4] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium">
                     Director
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal pt-1 break-words pe-5">
                     {saller?.name}
                  </div>
               </div>
            </div>
         )}
         {saller?.yearOfJoining && (
            <div className="flex pt-2">
               <div>
                  <div className="bg-[#4285f4] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center">
                     <SvgOGCMemberSinceIcon
                        width={16}
                        height={16}
                        color="white"
                     />
                  </div>
               </div>
               <div className="pt-[.15rem] ps-2">
                  <div className="text-[#4285f4] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium">
                     Member Since
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal pt-1  break-words pe-5">
                     {date}
                  </div>
               </div>
            </div>
         )}
         {saller?.phone && (
            <div className="flex pt-2">
               <div>
                  <div className="bg-[#4285f4] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center">
                     <div className="w-[1.1rem] h-[1.1rem] text-white">
                        <SvgPhoneIcon width="100%" height="100%" />
                     </div>
                  </div>
               </div>
               <div className="pt-[.15rem] ps-2">
                  <div className="text-[#4285f4] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium ">
                     Phone Number
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal pt-1 break-words pe-5">
                     {saller?.phone}
                  </div>
               </div>
            </div>
         )}
         {saller?.email && (
            <div className="flex pt-2">
               <div>
                  <div className="bg-[#4285f4] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center">
                     <div className="w-[1.1rem] h-[1.1rem] text-white">
                        <SvgCdEmailIcon width="100%" height="100%" />
                     </div>
                  </div>
               </div>
               <div className="pt-[.15rem] ps-2">
                  <div className="text-[#4285f4] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium">
                     Email
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal pt-1 break-words pr-5">
                     {saller?.email}
                  </div>
               </div>
            </div>
         )}
         {saller?.location && (
            <div className="flex pt-2 pb-5 w-full">
               <div>
                  <div className="bg-[#4285f4] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center">
                     <SvgOGCLocationIcon width={16} height={16} color="white" />
                  </div>
               </div>
               <div className="pt-[.15rem] ps-2 w-full">
                  <div className="flex flex-row gap-5 items-center">
                     <div className="text-[#4285f4] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium">
                        Location
                     </div>
                     <Button
                        type="button"
                        className="bg-[#4285f4] text-white font-['Raleway-Medium',_sans-serif] text-[10px] font-medium rounded-md w-[104px] h-7 flex flex-row items-center justify-center gap-x-1"
                     >
                        <div className="w-4 h-4">
                           <SvgMapIcon />
                        </div>
                        <div>View On Map</div>
                     </Button>
                  </div>
                  <div className="text-[#515151] text-left w-full font-['Arial-Regular',_sans-serif] text-sm font-normal pt-1 break-words pe-5">
                     {saller?.location}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
