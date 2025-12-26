"use client";
import { SingleUserSvgIcon } from "@admin/components/SvgIcons";
import { AdminState } from "@admin/store";
import { useSelector } from "react-redux";
import { usePhoneNumberFormat } from "@/components/react/truncate-text";
import React from "react";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));
const Grid = dynamic(() => import("@admin/components/grid"));
const Img = dynamic(() => import("@/components/Image"));
const Textarea = dynamic(() => import("@/components/Textarea"));

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type User = {
   created_at: string;
   email: string;
   id: number;
   image: Image[];
   name: string;
   phone: string;
   role: string;
   status: string;
};

type Product = {
   user: User;
};

type Order = {
   address: string;
   amount: string;
   author: string;
   created_at: string;
   email: string;
   id: number;
   order_items: any[];
   location_name: string;
   pay_status: string;
   payment_method: string;
   phone: string;
   product: Product;
   product_id: number;
   qty: number;
   status: string;
   transaction_id: string;
   updated_at: string;
   user: User;
   user_id: number;
};

export default function OrderInformation() {
   const { order = {} } = useSelector((state: AdminState) => state.admin.order);
   const Order = order as Order;

   let orderCreateDate = "";
   if (Order?.created_at) {
      const date = new Date(Order?.created_at);
      const formattedDate = date.toLocaleDateString("en-US", {
         weekday: "short",
         month: "short",
         day: "numeric",
         year: "numeric",
      });
      orderCreateDate = formattedDate;
   }
   const customerPhoneNumber = usePhoneNumberFormat(Order?.phone);

   let seller = {
      name: "",
      phone: "",
   };
   if (Order?.order_items?.length > 0) {
      seller = {
         name:
            Order?.order_items[0]?.product?.user?.name !== undefined
               ? Order?.order_items[0]?.product?.user?.name
               : "",
         phone:
            Order?.order_items[0]?.product?.user?.phone !== undefined
               ? usePhoneNumberFormat(
                    Order?.order_items[0]?.product?.user?.phone
                 )
               : "",
      };
   }

   return (
      <AdminCard>
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold pb-1">
            Order ID: #{Order?.id}
         </div>
         <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pb-5">
            {orderCreateDate}
         </div>
         <Grid cols={2} gap={5}>
            <div className="4md:col-span-1 md:col-span-2 4xs:col-span-1 col-span-2 3xs:mb-0 mb-5 flex gap-x-2">
               <div>
                  <div className=" relative">
                     <Img
                        src="/assets/images/overview-gird-image.png"
                        alt="image overview"
                        width={100}
                        height={100}
                        className="w-[30px] h-[30px]"
                     />
                     <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="w-3 h-3 text-white">
                           <SingleUserSvgIcon />
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold pb-[.05rem]">
                     Customer
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pb-[.15rem]">
                     Name: {Order?.user?.name}
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pb-[.15rem]">
                     Email: {Order?.email}
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                     Phone: +880 {customerPhoneNumber}
                  </div>
               </div>
            </div>

            <div className="4md:col-span-1 md:col-span-2 4xs:col-span-1 col-span-2 3xs:mb-0 mb-5 flex gap-x-2">
               <div>
                  <div className=" relative">
                     <Img
                        src="/assets/images/overview-gird-image.png"
                        alt="image overview"
                        width={100}
                        height={100}
                        className="w-[30px] h-[30px]"
                     />
                     <div className=" absolute top-0 left-0 flex justify-center items-center w-full h-full">
                        <div className="w-3 h-3 text-white">
                           <SingleUserSvgIcon />
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold  pb-[.05rem]">
                     Seller Info
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pb-[.15rem]">
                     Name: {seller?.name}
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                     Phone: +880 {seller?.phone}
                  </div>
               </div>
            </div>

            <div className="3lg:col-span-1 col-span-2 flex gap-x-2">
               <div>
                  <div className=" relative">
                     <Img
                        src="/assets/images/overview-gird-image.png"
                        alt="image overview"
                        width={100}
                        height={100}
                        className="w-[30px] h-[30px]"
                     />
                     <div className=" absolute top-0 left-0 flex justify-center items-center w-full h-full">
                        <div className="w-3 h-3 text-white">
                           <SingleUserSvgIcon />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full">
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold  pb-2">
                     Notes
                  </div>
                  <div className=" relative">
                     <Textarea
                        className="bg-[#ffffff] text-[#b2b2b2] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal rounded-[10px] border-solid border-gray-300 focus:ring-0 focus:border-gray-300 border-[0.5px] w-full h-20"
                        placeholder="Type Here"
                     />
                     <div className="bg-[#98b0ee] rounded-md w-12 h-5 text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold flex justify-center items-center absolute bottom-3 right-2">
                        Save
                     </div>
                  </div>
               </div>
            </div>
         </Grid>
      </AdminCard>
   );
}
