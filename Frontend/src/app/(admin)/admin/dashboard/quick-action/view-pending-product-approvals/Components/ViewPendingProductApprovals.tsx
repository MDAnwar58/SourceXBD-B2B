"use client";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import { ReloadSvgIcon } from "@/app/saller/components/SvgIcons";
import { SpinSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const PenddingProduct = dynamic(() => import("./PenddingProduct"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
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
   is_approve: number;
};

type Props = {
   limit: number;
   loadMorePendingProducts: (limit: number) => void;
   isLoading: boolean;
   onHandleResetTable: (limit: number, search: string) => void;
   onHandleApproveBtn: (id: number) => void;
   onHandleDeclineBtn: (id: number) => void;
};

export default function ViewPendingProductApprovals({
   limit,
   loadMorePendingProducts,
   isLoading,
   onHandleResetTable,
   onHandleApproveBtn,
   onHandleDeclineBtn,
}: Props) {
   const { peding_products = [], productsLength } = useSelector(
      (state: AdminState) => state.admin.dashboard
   );
   const Products: Product[] = peding_products;

   return (
      <Fragment>
         <div className=" bg-white rounded-[20px] shadow-admin-card px-7 py-4 mb-7">
            <div className=" pb-5 flex flex-row justify-between items-center">
               <div className="text-[#2f2f2f] text-left font-['Geist-Bold',_sans-serif] text-xl font-bold">
                  View Pending Product Approvals
               </div>

               <Button
                  type="button"
                  className="bg-[#e9e9e9] text-gray-700 w-7 h-7 rounded-lg flex justify-center items-center"
                  onClick={() => onHandleResetTable?.(15, "")}
               >
                  <div className="w-4 h-4">
                     <ReloadSvgIcon />
                  </div>
               </Button>
            </div>

            <div className="grid 6lg:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 3sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-2">
               {Products.length > 0
                  ? Products.map((product, index: number) => (
                       <Fragment key={index}>
                          <PenddingProduct
                             product={product}
                             onHandleApproveBtn={onHandleApproveBtn}
                             onHandleDeclineBtn={onHandleDeclineBtn}
                          />
                       </Fragment>
                    ))
                  : null}
            </div>
         </div>

         {Products?.length > 0 && Products?.length !== productsLength ? (
            <div>
               <Button
                  type="button"
                  className="mx-auto bg-blue-gradient text-white rounded-2xl px-5 py-2 flex justify-center items-center gap-2 capitalize"
                  onClick={() => loadMorePendingProducts(limit + 15)}
               >
                  <div>load more</div>
                  {isLoading === true && (
                     <div className="w-3.5 h-3.5">
                        <SpinSvgIcon />
                     </div>
                  )}
               </Button>
            </div>
         ) : null}
      </Fragment>
   );
}
