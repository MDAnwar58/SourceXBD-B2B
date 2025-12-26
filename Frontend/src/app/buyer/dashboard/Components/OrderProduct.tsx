"use client";
import React from "react";
import {
   CarvePenddingSvgIcon,
   CnacleSvgIcon,
   DeliveryCompleteSvgIcon,
   FluentDeleteSvgIcon,
   PicUpTruckSvgIcon,
} from "@/buyer/components/SvgIcons";
import { useDateFormatAndLastTimeCancel } from "@/components/react/date";
import dynamic from "next/dynamic";
import { LocalUrl } from "@/components/react/localhost";
import NavLink from "@/components/NavLink";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type Product = {
   category: string;
   image: string;
   name: string;
};

type Seller = {
   image: string | null;
   name: string;
   company: string;
};
type User = {
   image: string | null;
   name: string;
};

type Order = {
   address: string;
   created_at: string;
   amount: string;
   company: string;
   id: number;
   location_name: string;
   pay_status: string;
   product: Product;
   qty: number;
   seller: Seller;
   status: string;
   transaction_id: string;
   user: User;
};

type Props = {
   order: Order;
   onCancleOrder: (orderId: number) => void;
};

export default function OrderProduct({ order, onCancleOrder }: Props) {
   const date = useDateFormatAndLastTimeCancel({
      dateAndTime: String(order?.created_at),
   });
   // console.log(order);
   return (
      <div className="bg-[rgba(152,176,238,0.05)]  shadow-buyer-card rounded-[14px] flex 3md:flex-row md:flex-col 3xs:flex-row flex-col gap-2 p-3">
         <div className=" w-full">
            <div className="flex xs2:flex-row flex-col justify-between items-center xs3:gap-2 border-b border-[#98B0EE] xs3:pb-0 1xl2:pb-1">
               <div className="pb-1">
                  <NavLink href={`/buyer/order/${order?.id}`}>
                     <span
                        className="xs2:text-left text-center font-['Raleway-Bold',_sans-serif] text-base font-bold"
                        style={{
                           background:
                              "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        #{order?.transaction_id}
                     </span>
                  </NavLink>
                  <div className="text-[#2f2f2f] xs2:text-left text-center font-['Raleway-Medium',_sans-serif] text-xs font-medium">
                     {order?.seller?.company}(
                     <span className="text-[#2f2f2f] xs2:text-left text-center font-['Raleway-Medium',_sans-serif] text-[9px] font-extralight">
                        Company
                     </span>
                     )
                  </div>
               </div>
               <div className="pb-2">
                  {order?.status === "Pending" ? (
                     <div className="bg-[#fff973] rounded-lg w-[59px] h-6 flex flex-row justify-center items-center gap-[.1rem]">
                        <div className="w-4 h-4 text-[#2F2F2F]">
                           <CarvePenddingSvgIcon />
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                           Pending
                        </div>
                     </div>
                  ) : order?.status === "On The Way" ? (
                     <div className="bg-[#86FF73] rounded-lg w-[59px] h-6 flex flex-row justify-center items-center gap-[.1rem]">
                        <div className="w-4 h-4 text-[#2F2F2F]">
                           <PicUpTruckSvgIcon />
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                           On Way
                        </div>
                     </div>
                  ) : order?.status === "Cancled" ? (
                     <div className="bg-[#b53f00] rounded-lg w-[59px] h-6 flex flex-row justify-center items-center gap-[.1rem]">
                        <div className="w-4 h-4 text-[#ffffff]">
                           <CnacleSvgIcon />
                        </div>
                        <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                           Cancled
                        </div>
                     </div>
                  ) : (
                     <div className="bg-[#00b548] rounded-lg w-[65px] h-6 flex flex-row justify-center items-center gap-[.1rem]">
                        <div className="w-4 h-4 text-[#2F2F2F]">
                           <DeliveryCompleteSvgIcon />
                        </div>
                        <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                           Complete
                        </div>
                     </div>
                  )}
               </div>
            </div>

            <div className="flex xs3:flex-row flex-col justify-between xs3:items-center pt-2">
               <div className="">
                  <div className="flex xs3:flex-row flex-col xs3:gap-3 xs3:items-center">
                     <div className=" space-x-1">
                        <span className="text-[#2f2f2f] text-xs font-bold font-['Raleway']">
                           Price :
                        </span>
                        <span className="text-[#8b8b8b] text-[10px] font-normal font-['Arial']">
                           {order?.amount}
                        </span>
                     </div>
                     <div className=" space-x-1">
                        <span className="text-[#2f2f2f] text-xs font-bold font-['Raleway']">
                           Date :
                        </span>
                        <span className="text-[#8b8b8b] text-[10px] font-normal font-['Arial']">
                           {date !== null ? date : ""}
                        </span>
                     </div>
                  </div>

                  <div>
                     <span className="text-[#2f2f2f] text-xs font-bold font-['Raleway']">
                        Quantity:{" "}
                     </span>
                     <span className="text-[#8b8b8b] text-[10px] font-normal font-['Arial'] w-[99px]">
                        {order?.qty}x
                     </span>
                  </div>
               </div>

               <div className="flex flex-row items-center xs3:justify-end justify-center">
                  {order?.status === "Cancled" ? (
                     <span className="bg-[#e34141] rounded-lg w-[52px] h-[23px] flex flex-row justify-center items-center gap-[.15rem] xs3:mt-0 mt-1">
                        <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                           {order?.status}
                        </div>
                     </span>
                  ) : order?.status === "Complete" ? (
                     <span className="bg-[#8de341] rounded-lg w-[52px] h-[23px] flex flex-row justify-center items-center gap-[.15rem] xs3:mt-0 mt-1">
                        <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                           {order?.status}
                        </div>
                     </span>
                  ) : order?.status === "Pending" ? (
                     <Button
                        type="button"
                        className="bg-[#e34141] rounded-lg w-[52px] h-[23px] flex flex-row justify-center items-center gap-[.15rem] xs3:mt-0 mt-1"
                        onClick={() => onCancleOrder(order?.id)}
                     >
                        <div className="w-3 h-3 text-[#ffffff]">
                           <FluentDeleteSvgIcon />
                        </div>
                        <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                           Cancle
                        </div>
                     </Button>
                  ) : null}
               </div>
            </div>
         </div>
      </div>
   );
}
