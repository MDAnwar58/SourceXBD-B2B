"use client";
import { CircleTimeSvgIcon } from "@admin/components/SvgIcons";
import Img from "@/components/Image";
import Textarea from "@/components/Textarea";
import AdminCard from "@admin/components/card";
import React from "react";
import { LocalUrl } from "@/components/react/localhost";
import {
   getLocalTime,
   getTime,
   useDateWithMonthFormatExtra,
} from "@/components/react/date";
import TextArea from "@/components/react/textarea";

type complainDetails = {
   reportId: number | string;
   userName: string;
   desc: string;
   complainDate: string;
   image: string;
};

type Props = {
   complainDetails: complainDetails;
};

export default function ComplainDetails({ complainDetails }: Props) {
   const localUrl: string = LocalUrl();
   let imageUrl: string = "";
   if (complainDetails?.image) {
      const storeFilePath = complainDetails?.image;
      const forwardSlash = "/";
      const imagePath = forwardSlash.concat(storeFilePath);
      imageUrl = localUrl.concat(imagePath);
   }
   let date = "";
   if (complainDetails?.complainDate) {
      date = useDateWithMonthFormatExtra(complainDetails?.complainDate);
   }
   let time = "";
   if (complainDetails?.complainDate) {
      time = getLocalTime(complainDetails?.complainDate);
   }
   //    console.log(complainDetails?.complainDate);
   return (
      <div className="3xl:col-span-9 6lg:col-span-8 lg:col-span-7 col-span-12">
         <AdminCard className="!bg-[#ffffff] !rounded-[20px]">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative">
               Complain Details
            </div>

            <div className=" flex items-center justify-between  pt-2 pb-3">
               <div className="flex items-center gap-x-2 ">
                  <div className=" relative">
                     {complainDetails?.image ? (
                        <Img
                           src={imageUrl}
                           alt="Complaint Buyer avatar"
                           width={50}
                           height={50}
                           className="rounded-full w-[34px] h-[34px]"
                        />
                     ) : (
                        <Img
                           src="/assets/images/user-demo-avatar.png"
                           alt="Complaint Buyer avatar"
                           width={50}
                           height={50}
                           className="rounded-full w-[34px] h-[34px]"
                        />
                     )}
                     <div className="bg-[#90ff38] rounded-[50%] w-2 h-2 absolute right-[.15rem] bottom-0"></div>
                  </div>
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium relative">
                     {complainDetails?.userName}
                  </div>
               </div>

               <div>
                  <div className="flex items-center gap-x-[.1rem]">
                     <div className="w-3.5 h-3.5 text-[#4285F4]">
                        <CircleTimeSvgIcon />
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                        {time}
                        {/* 11:00 */}
                     </div>
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     {date}
                  </div>
               </div>
            </div>

            {/* <div className=" mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold mb-1">
                  Complain Subject
               </div>
               <div
                  className="bg-[rgba(152,176,238,0.05)] rounded-[10px] h-[34px] flex items-center gap-2 px-2"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
               >
                  <div className="bg-[rgba(66,133,244,0.40)] text-[#ffffff] text-left font-['Raleway-SemiBold',_sans-serif] text-[8px] font-semibold rounded-lg w-[73px] h-6 flex items-center justify-center">
                     Lorem Ipsum
                  </div>
                  <div className="bg-[rgba(66,133,244,0.40)] text-[#ffffff] text-left font-['Raleway-SemiBold',_sans-serif] text-[8px] font-semibold rounded-lg w-[73px] h-6 flex items-center justify-center">
                     Lorem Ipsum
                  </div>
               </div>
            </div> */}

            <div>
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold mb-1">
                  Complain Description
               </div>

               <TextArea
                  className="!bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs leading-[15px] font-normal rounded-[10px] h-[135px] border-none focus:ring-0 w-full p-3"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  placeholder=""
                  defaultValue={complainDetails?.desc}
                  disabled
               />
            </div>
         </AdminCard>
      </div>
   );
}
