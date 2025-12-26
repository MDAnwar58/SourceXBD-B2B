"use client";
import { PlusSvgIcon } from "@admin/components/SvgIcons";
import React from "react";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));
const AdminCard = dynamic(() => import("@admin/components/card"));
const Grid = dynamic(() => import("@/components/grid"));

export default function AddAccessCard() {
   return (
      <AdminCard className="!p-10 !pb-16">
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-5xl font-bold w-[421px] h-14"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Change Password
         </div>
         <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal pt-2">
            This access just for profile creator &amp; admin
         </div>
         <div className="px-3 pt-7">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative">
               Add Access
            </div>

            <Grid cols={12} gap={5} className="mt-3">
               <div className="col-span-2">
                  <AdminCard className="!bg-[rgba(152,176,238,0.05)] !rounded-[14px] !w-full !py-9 flex justify-center items-center">
                     <div>
                        <Img
                           src="/assets/images/access-user.png"
                           alt="access user avatar"
                           width={100}
                           height={100}
                           className="rounded-full w-[72px] h-[72px]"
                        />
                        <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold mt-3">
                           Rofiqul Islam
                        </div>
                     </div>
                  </AdminCard>
               </div>
               <div className="col-span-2">
                  <AdminCard className="!bg-[rgba(152,176,238,0.05)] !rounded-[14px] !h-full !shadow-none flex justify-center items-center">
                     <div>
                        <div className="bg-[rgba(102,145,255,0.10)] rounded-[50%] w-[72px] h-[72px] flex justify-center items-center">
                           <div className="w-12 h-12 text-[#B2B2B2]">
                              <PlusSvgIcon />
                           </div>
                        </div>
                        <div className="text-[#2f2f2f] text-center font-['Raleway-Bold',_sans-serif] text-xs font-bold mt-3">
                           Add New
                        </div>
                     </div>
                  </AdminCard>
               </div>
            </Grid>
         </div>
      </AdminCard>
   );
}
