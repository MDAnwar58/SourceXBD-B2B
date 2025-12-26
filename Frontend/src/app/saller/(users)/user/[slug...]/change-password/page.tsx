import Grid from "@/app/(admin)/admin/components/grid";
import { PlusSvgIcon } from "@/app/(admin)/admin/components/SvgIcons";
import Img from "@/components/Image";
import AdminCard from "@admin/components/card";
import React, { Fragment } from "react";
import PasswordChangeInput from "./Components/PasswordChangeInput";

export default function ChangeUserPassword() {
   return (
      <Fragment>
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

         <div className="flex justify-between items-center py-16">
            <Img
               src="/assets/images/Line1.png"
               alt="Change Password Line 1"
               width={531}
               height={1}
               className="h-[0.17rem] w-[591px]"
            />
            <div className="text-[#2f2f2f] text-left font-['Raleway-Regular',_sans-serif] text-5xl font-normal relative">
               or
            </div>

            <Img
               src="/assets/images/Line1.png"
               alt="Change Password Line 1"
               width={531}
               height={1}
               className="h-[0.17rem] w-[591px]"
            />
         </div>

         <div className="w-[60%] mx-auto">
            <Grid cols={2} gap={5}>
               <div className="col-span-1">
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal mb-1">
                     New Password
                  </div>
                  <div>
                     <PasswordChangeInput placeholder="Password" />
                  </div>
               </div>
               <div className="col-span-1">
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal  mb-1">
                     New Password
                  </div>
                  <div>
                     <PasswordChangeInput placeholder="Confirm Password" />
                  </div>
               </div>
            </Grid>
         </div>

         <div
            className="cursor-pointer text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold rounded-[14px] h-[58px] w-[492px] mx-auto flex justify-center items-center mt-10 mb-20"
            style={{
               background:
                  "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
            }}
         >
            Change Password
         </div>
      </Fragment>
   );
}
