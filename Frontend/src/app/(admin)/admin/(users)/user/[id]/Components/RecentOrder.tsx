"use client";
import {
   CalenderDateSvgIcon,
   DashboardThreeDotsSvgIcon,
} from "@admin/components/SvgIcons";
import React from "react";
import { useDateWithMonthFormat } from "@/components/react/date";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const CheckBox = dynamic(() => import("@/components/Checkbox"), { ssr: false });
const Img = dynamic(() => import("@/components/Image"), { ssr: false });

type UserInf = {
   image: string | null;
   name: string;
};

type Product = {
   name: string;
};

type Order = {
   created_at: string;
   id: number;
   product: Product;
   user: UserInf;
   transaction_id: any;
};

type Props = {
   order: Order;
   index: number;
};

export default function RecentOrder({ order, index }: Props) {
   const localUrl: string = LocalUrl();
   let date: string = "";
   if (order?.created_at !== undefined) {
      date = useDateWithMonthFormat(order?.created_at);
   }
   let imageUrl = "";
   if (order?.user?.image !== null) {
      const forwardSlash = "/";
      const imagePath = forwardSlash.concat(order?.user?.image);
      imageUrl = localUrl.concat(imagePath);
   }

   return (
      <div className="bg-[#f5f5f5] rounded-[13px] flex items-center gap-x-3 mb-3 p-3">
         <div className="xs:hidden block text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
            #{index + 1}
            {/* <CheckBox className="bg-[#f5f5f5] text-[#515151] border-solid border-[#515151] border focus:ring-[#515151] rounded-sm w-3 h-3 " /> */}
         </div>
         <div className="xs:flex items-center justify-between w-full">
            <div className="flex items-center gap-x-3">
               <div className="xs:block hidden text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                  {index + 1}
                  {/* <CheckBox className="bg-[#f5f5f5] text-[#515151] border-solid border-[#515151] border focus:ring-[#515151] rounded-sm w-3 h-3 " /> */}
               </div>

               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal md:block hidden">
                  #{order?.transaction_id}
               </div>

               <div className="flex items-center w-full md:hidden">
                  {order?.user?.image ? (
                     <Img
                        src={imageUrl}
                        alt="recent order user avatar"
                        width={100}
                        height={100}
                        className="w-[22px] h-[22px] rounded-full"
                     />
                  ) : (
                     <Img
                        src="/assets/images/user-demo-avatar.png"
                        alt="recent order user avatar"
                        width={100}
                        height={100}
                        className="w-[22px] h-[22px] rounded-full"
                     />
                  )}
                  <div className="flex items-center gap-x-2 xs:ms-3 ms-2">
                     <div className="w-4 h-4 text-gray-700">
                        <CalenderDateSvgIcon />
                     </div>
                     <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                        {date}
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex xs:justify-start justify-between xs:mt-0 mt-1">
               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal md:hidden block">
                  {order?.product?.name}
               </div>
               <div className="md:flex items-center gap-x-2 me-3 hidden">
                  <div className="w-4 h-4 text-gray-700">
                     <CalenderDateSvgIcon />
                  </div>
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                     {date}
                  </div>
               </div>
               {order?.user?.image ? (
                  <Img
                     src={imageUrl}
                     alt="recent order user avatar"
                     width={100}
                     height={100}
                     className="w-[22px] h-[22px] rounded-full md:block hidden"
                  />
               ) : (
                  <Img
                     src="/assets/images/user-demo-avatar.png"
                     alt="recent order user avatar"
                     width={100}
                     height={100}
                     className="w-[22px] h-[22px] rounded-full md:block hidden"
                  />
               )}
               <Button type="button" className="ms-4 xs:block hidden">
                  <div className="w-4 h-4 ">
                     <DashboardThreeDotsSvgIcon />
                  </div>
               </Button>
            </div>
         </div>

         <Button type="button" className="xs:ms-4 ms-0 xs:hidden">
            <div className="w-4 h-4 ">
               <DashboardThreeDotsSvgIcon />
            </div>
         </Button>
      </div>
   );
}
