"use client";
import React, { Fragment, useEffect } from "react";
import AdminCard from "@admin/components/card";
import {
   DownArrowSvgIcon,
   SecurityCheckSvgIcon,
   SettingsSvgIcon,
} from "@admin/components/SvgIcons";
import Grid from "@admin/components/grid";
import Img from "@/components/Image";
import Input from "@/components/Input";
import PageHeader from "@admin/components/PageHeader";
import { useRouter } from "next/navigation";

const icon = (
   <div className="w-6 h-6">
      <SettingsSvgIcon />
   </div>
);

export default function TwoFactor() {
   const router = useRouter();

   useEffect(() => {
      router.back();
   }, [router]);

   return (
      <Fragment>
         <PageHeader icon={icon} title="Two Factor" searchBox={false} />

         <AdminCard className="!py-12">
            <div className="5xl:w-[35%] 1xl2:w-[45%] 5lg:w-[55%] 2lg:w-[65%] 6md:w-[75%] 5md:w-[85%] w-[100%] mx-auto">
               <div className="bg-[rgba(144,255,56,0.20)] text-[#90FF38] rounded-xl w-[54px] h-[54px] flex justify-center items-center">
                  <div className="w-8 h-8">
                     <SecurityCheckSvgIcon />
                  </div>
               </div>
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold py-3">
                  Provide Your Phone Number
               </div>
               <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs leading-5 font-normal pb-4">
                  Please enter the phone number associated with your device.
                  we’ll send you a verification Code to your mobile phone when
                  you sign in.
               </div>

               <Grid cols={2} gap={5} className="pb-5">
                  <div className="4md:col-span-1 md:col-span-2 6xs:col-span-1 col-span-2">
                     <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1  3xs:mb-0 mb-3">
                        Country
                     </div>
                     <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] w-full h-[45px] shadow-admin-card flex justify-between items-center px-2">
                        <div className="flex items-center gap-x-1">
                           <Img
                              src="/assets/images/bangladesh-flag.png"
                              alt="bangladesh flag"
                              width={70}
                              height={70}
                              className="w-8 h-8 rounded-full"
                           />
                           <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold relative">
                              Bangladesh
                           </div>
                        </div>

                        <div className="rounded-lg w-[33px] h-[30px] bg-blue-gradient text-white flex justify-center items-center">
                           <div className="w-6 h-6">
                              <DownArrowSvgIcon />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="4md:col-span-1 md:col-span-2 6xs:col-span-1 col-span-2">
                     <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                        Phone Number
                     </div>
                     <Input
                        type="text"
                        className="bg-[rgba(152,176,238,0.05)] text-[#515151] shadow-admin-card border-none focus:ring-0 text-left font-['Arial-Bold',_sans-serif] text-sm font-bold rounded-[14px] w-full h-[45px] px-5"
                        placeholder="+880 | "
                     />
                  </div>
               </Grid>

               <div className="rounded-[20px] h-[50px] bg-blue-gradient text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold flex items-center justify-center">
                  send Code
               </div>
            </div>
         </AdminCard>
      </Fragment>
   );
}
