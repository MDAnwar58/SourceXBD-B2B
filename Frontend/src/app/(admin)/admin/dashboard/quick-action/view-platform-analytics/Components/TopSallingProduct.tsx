"use client";
import { DownArrowSvgIcon } from "@/app/(admin)/admin/components/SvgIcons";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const SallingProduct = dynamic(() => import("./SallingProduct"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type Product = {
   id: number;
   name: string;
   category: string;
   image: string;
   order_count: number;
   price: number;
   total_sold_units: string;
};

type Props = {
   limit: number;
   onLoadMore: (limit: number) => void;
};

export default function TopSallingProduct({ limit, onLoadMore }: Props) {
   const { top_selling_products = [], top_selling_products_total_length } =
      useSelector((state: AdminState) => state.admin.dashboard);
   const TopSellingProducts: Product[] = top_selling_products;
   return (
      <div className=" bg-[rgba(255,255,255,0.40)] rounded-[20px] shadow-admin-card w-full h-full pt-5 pb-7 relative">
         <span
            className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold px-7"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Top selling Products
         </span>

         <div
            className="pt-4  px-7 h-60 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
         >
            {TopSellingProducts?.length > 0
               ? TopSellingProducts.map((product, i) => (
                    <Fragment key={i}>
                       <SallingProduct product={product} />
                    </Fragment>
                 ))
               : null}
         </div>

         {TopSellingProducts?.length !== top_selling_products_total_length && (
            <Button
               type="button"
               className="rounded-[50%] bg-blue-gradient w-8 h-8 flex justify-center items-center absolute bottom-5 left-[50%] transform-translate-x-middle"
               onClick={() => onLoadMore(limit + 2)}
            >
               <div className="w-[20.21px] h-[20.21px] text-white">
                  <DownArrowSvgIcon />
               </div>
            </Button>
         )}
      </div>
   );
}
