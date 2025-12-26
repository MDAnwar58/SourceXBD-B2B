"use client";
import React, { Fragment } from "react";
import { MoneySvgIcon } from "@admin/components/SvgIcons";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});

type Product = {
   category: string;
   company: string;
   contact: string | null;
   discount_price: string | null;
   id: number;
   image: string;
   is_wish_active: boolean;
   is_approve: number;
   min_order: number | null;
   name: string;
   order_qty_sum: number;
   price: number;
   s_desc: string | null;
   seller: string;
   seller_id: number;
   slug: string;
   spacification: string | null;
   status: string;
   time_ago: string;
};

type Props = {
   product: Product;
   onHandleApproveBtn: (id: number) => void;
   onHandleDeclineBtn: (id: number) => void;
};

export default function PenddingProduct({
   product,
   onHandleApproveBtn,
   onHandleDeclineBtn,
}: Props) {
   const localUrl = LocalUrl();
   const imageUrl = localUrl.concat(product?.image);
   return (
      <div className="bg-[rgba(240,242,255,0.50)] rounded-[14px] shadow-admin-sub-card mb-3 xs3:grid xs:grid-cols-3 grid-cols-1 items-center py-3 w-full px-3 relative">
         <div className="col-span-1 flex items-center">
            {product?.image ? (
               <Img
                  src={imageUrl}
                  alt="product image"
                  width={100}
                  height={100}
                  className="rounded-[10px] w-full lg:h-[115px] 4md:h-[145px] sm:h-[125px] 4xs:h-[145px] 3xs:h-[135px] xs:h-[125px] xs3:h-[195px] xs6:h-[155px] h-[125px]"
                  style={{
                     boxShadow:
                        "-1px -1px 6px 0px rgba(101, 101, 101, 0.2),1px 1px 6px 0px rgba(0, 0, 0, 0.2)",
                  }}
               />
            ) : (
               <Img
                  src="/assets/images/demo.png"
                  alt="product image"
                  width={100}
                  height={100}
                  className="rounded-[10px] w-full lg:h-[115px] 4md:h-[145px] sm:h-[125px] 4xs:h-[145px] 3xs:h-[135px] xs:h-[125px] xs3:h-[195px] xs6:h-[155px] h-[125px]"
                  style={{
                     boxShadow:
                        "-1px -1px 6px 0px rgba(101, 101, 101, 0.2),1px 1px 6px 0px rgba(0, 0, 0, 0.2)",
                  }}
               />
            )}
         </div>
         <div className="col-span-2 ps-3  xs3:pe-0 pe-3 xs:pt-0 pt-2">
            <div className="grid grid-cols-2 gap-[.1rem]">
               <div>
                  <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal">
                     Product Name
                  </div>

                  <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold">
                     {product?.name}
                  </div>
               </div>
               <div>
                  <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal">
                     Company name
                  </div>

                  <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold">
                     {product?.company}
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-[.1rem] mt-3">
               <div>
                  <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                     Category
                  </div>
                  <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                     {product?.category}
                  </div>
               </div>
               <div>
                  <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                     price
                  </div>
                  <Button
                     type="button"
                     className="bg-[#f0f2ff] text-gray-900 rounded px-[.20rem] py-[.15rem] flex items-center "
                  >
                     <span className="p-[0.15rem] bg-blue-500 text-white rounded-sm">
                        <div className="w-[6.67px] h-2">
                           <MoneySvgIcon />
                        </div>
                     </span>
                     {product?.discount_price ? (
                        <Fragment>
                           <div className=" text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[7px] font-normal ps-1 flex items-center">
                              {Number(product?.price) -
                                 Number(product?.discount_price)}
                           </div>

                           <div className="line-through text-[#919191] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1 flex items-center">
                              {product?.price}
                           </div>
                        </Fragment>
                     ) : (
                        <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1 flex items-center">
                           {product?.price}
                        </div>
                     )}
                  </Button>
               </div>
            </div>

            <div className="flex mt-3  xs3:gap-x-0 gap-x-1">
               <Button
                  type="button"
                  className=" xs3:pe-2 pe-0 w-full"
                  onClick={() => onHandleDeclineBtn?.(product?.id)}
               >
                  <div className="bg-[#eaeaea] text-[#979797] hover:text-red-500 text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-full py-1 flex justify-center">
                     Decline
                  </div>
               </Button>
               <Button
                  type="button"
                  className="rounded-lg w-full py-1 flex justify-center"
                  style={{
                     background:
                        "linear-gradient(184.31deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                  }}
                  onClick={() => onHandleApproveBtn?.(product?.id)}
               >
                  <div className="text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                     Approve
                  </div>
               </Button>
            </div>
         </div>

         {product?.is_approve === 1 ? (
            <div className=" absolute top-1 right-1 bg-green-300/50 text-gray-700 text-[9px] rounded-xl px-2 py-[.1rem] flex flex-row items-center gap-[.15rem]">
               <div className="bg-[#90cb42] w-1 h-1 rounded-full" />
               <div>Approved</div>
            </div>
         ) : null}
      </div>
   );
}
