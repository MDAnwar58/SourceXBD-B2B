"use client";
import React from "react";
import {
   DashboardThreeDotsSvgIcon,
   DownArrowSvgIcon,
} from "@admin/components/SvgIcons";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
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
   loadMorePendingProducts: (limit: number) => void;
   limit: number;
};

export default function PendingApprovalsProducts({
   loadMorePendingProducts,
   limit,
}: Props) {
   const localUrl = LocalUrl();

   const { peding_products = [], productsLength } = useSelector(
      (state: AdminState) => state.admin.dashboard
   );

   const products: Product[] = peding_products;

   return (
      <div className="xl:col-span-7 col-span-12 ">
         <div className="bg-[rgba(66,133,244,0.05)] rounded-[20px] shadow-admin-card px-5 pt-4 pb-7 relative">
            <div className=" flex items-center justify-between mb-3 px-2">
               <div className="flex items-center gap-x-3">
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative">
                     Pending Approvals
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
                     (Products)
                  </div>
               </div>
               <div className="bg-[#ff7070] rounded-[50%] w-6 h-6 flex items-center justify-center">
                  <div className="text-[#ffffff] font-['Arial-Bold',_sans-serif] text-[10px] font-bold">
                     {products.length}
                  </div>
               </div>
            </div>

            <div
               className=" space-y-3 h-[17rem] overflow-y-auto px-2 pt-1 pb-2"
               style={{ scrollbarWidth: "none" }}
            >
               {products?.length > 0
                  ? products.map((product, index: number) => {
                       const imageUrl = localUrl.concat(product?.image);
                       return (
                          <div
                             key={index + 1}
                             className="bg-[rgba(240,242,255,0.50)] rounded-[14px] shadow-admin-sub-card flex items-center justify-between px-4 py-3 w-full"
                          >
                             <div className="flex items-center">
                                {product?.image ? (
                                   <Img
                                      src={imageUrl}
                                      alt="..."
                                      width={100}
                                      height={100}
                                      className="rounded-lg w-[82px] h-14"
                                      style={{
                                         boxShadow:
                                            "-1px -1px 6px 0px rgba(101, 101, 101, 0.2),1px 1px 6px 0px rgba(0, 0, 0, 0.2)",
                                      }}
                                   />
                                ) : (
                                   <Img
                                      src="/assets/images/demo.png"
                                      alt="..."
                                      width={100}
                                      height={100}
                                      className="rounded-lg w-[82px] h-14"
                                      style={{
                                         boxShadow:
                                            "-1px -1px 6px 0px rgba(101, 101, 101, 0.2),1px 1px 6px 0px rgba(0, 0, 0, 0.2)",
                                      }}
                                   />
                                )}
                                <div className="ps-4">
                                   <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                                      {product?.name}
                                   </div>

                                   <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                                      {product?.price}tk
                                   </div>
                                </div>
                             </div>
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
                                   Company name
                                </div>
                                <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                                   {product?.company}
                                </div>
                             </div>

                             <div>
                                <div className="bg-[#f4f4f4] rounded-[50%] p-2 relative">
                                   <div className="w-3.5 h-3.5">
                                      <DashboardThreeDotsSvgIcon />
                                   </div>
                                </div>
                             </div>
                          </div>
                       );
                    })
                  : null}
            </div>

            {products?.length !== productsLength ? (
               <Button
                  type="button"
                  className=" absolute bottom-1 right-1 flex justify-center items-center bg-blue-gradient text-white rounded-full"
                  onClick={() => loadMorePendingProducts(limit + 3)}
               >
                  <div className="w-9 h-9">
                     <DownArrowSvgIcon />
                  </div>
               </Button>
            ) : null}
         </div>
      </div>
   );
}
