"use client";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
const Img = dynamic(() => import("@/components/Image"));

type Category = {
   name: string;
};

type Product = {
   name: string;
   category: Category;
   images: any[];
};

type OrderItem = {
   amount: string;
   id: number;
   order_id: number;
   product: Product;
   qty: number;
};

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

type Order = {
   address: string;
   amount: string;
   author: string;
   created_at: string;
   email: string;
   id: number;
   location_name: string;
   order_items: OrderItem[];
   pay_status: string;
   payment_method: string;
   phone: string;
   product_id: string | null;
   qty: number;
   status: string;
   transaction_id: string;
   user: User;
};

type Props = {
   order: Order | any;
};

export default function OrderItems({ order }: Props) {
   const localUrl: string = LocalUrl();
   return (
      <Fragment>
         <div className="text-[#2f2f2f] pb-3 text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium ">
            Items ({order?.order_items?.length})
         </div>
         <div
            className=" space-y-3 h-52 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
         >
            {order?.order_items?.length > 0
               ? order?.order_items.map(
                    (orderItem: OrderItem, index: number) => {
                       const imagePath =
                          orderItem?.product?.images[0].file_path;
                       const imageUrl = localUrl.concat(imagePath);
                       return (
                          <div
                             key={index + 1}
                             className="bg-[#f0f0f0] rounded-[10px]  p-2 "
                          >
                             <div className="flex xs3:flex-row flex-col justify-between xs3:items-center">
                                <div className="flex gap-2 items-center">
                                   <div className=" w-14 h-14">
                                      {orderItem?.product?.images?.length >
                                      0 ? (
                                         <Img
                                            src={imageUrl.toString()}
                                            alt="product image"
                                            width={40}
                                            height={40}
                                            className="rounded-md w-full h-full"
                                         />
                                      ) : null}
                                   </div>
                                   <div>
                                      <h4 className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium">
                                         {orderItem?.product?.name}
                                      </h4>
                                      <h6 className="text-[#515151] xs3:pt-1 text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium">
                                         {orderItem?.product?.category?.name}
                                      </h6>

                                      <p className="3xs:hidden block text-[#2f2f2f] text-left xs3:pr-2 font-['Arial-Regular',_sans-serif] text-xs font-normal">
                                         BDT {orderItem?.amount}
                                      </p>
                                      <p className="3xs:hidden block  text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                                         {orderItem?.qty} Psc
                                      </p>
                                   </div>
                                </div>
                                <p className="3xs:block hidden text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
                                   {orderItem?.qty} Psc
                                </p>
                                <p className="3xs:block hidden text-[#2f2f2f] text-left pr-2 font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
                                   BDT {orderItem?.amount}
                                </p>
                             </div>
                          </div>
                       );
                    }
                 )
               : null}
         </div>
      </Fragment>
   );
}
