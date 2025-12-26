"use client";
import React from "react";
import { DashboardEditSvgIcon } from "@admin/components/SvgIcons";
import { useTruncateText } from "@/components/react/truncate-text";
import { useScreenMediaQuery } from "@/components/react/media-query";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});
const Product = dynamic(() => import("@/components/Product"), {
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
   product: Product;
};

export default function SallingProduct({ product }: Props) {
   const localUrl: string = LocalUrl();
   const { xsScreen4, xsScreen6 } = useScreenMediaQuery();
   const wordlimit = xsScreen4 ? 5 : xsScreen6 ? 4 : 3;
   const topRatingProductText = useTruncateText({
      text: "Lorem ipsum dolor sit amitLorem ipsum dolor sit amit",
      wordLimit: wordlimit,
   });
   const imageUrl = localUrl.concat(product?.image);
   return (
      <div
         className="bg-[#92aae9] rounded-[14px] w-full p-3 3xs:flex mb-3"
         style={{
            boxShadow:
               "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
         }}
      >
         {product?.image ? (
            <Img
               src={imageUrl}
               alt="Salling Product"
               width={200}
               height={200}
               className="3xs:rounded-[10px] rounded-xl 3xs:w-[78px] w-full 3xs:h-[78px] xs3:h-[201px] xs6:h-[145px] h-[105px] "
            />
         ) : null}
         <div className="w-full px-2 3xs:pt-0 pt-2">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] 3xs:text-[8px] text-[11px] font-bold">
               {product?.category}
            </div>
            <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
               {product?.name}
            </div>
            <div className="flex items-center justify-between pt-1">
               <div className="text-[#3d3d3d] text-left font-['Arial-Regular',_sans-serif] 3xs:text-[8px] text-[10px] font-normal">
                  Units: {product?.total_sold_units}
               </div>
               <div className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] 3xs:text-[6px] text-[7px] font-normal ">
                  <div
                     className="rounded-lg px-3 py-1 text-[#ffffff] flex items-center gap-x-1"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                        boxShadow:
                           "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                     }}
                  >
                     {product?.order_count}
                  </div>
               </div>
            </div>
            <div className="flex items-center justify-between pt-2">
               <div className="text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold ">
                  BDT: {product?.price}
               </div>
            </div>
         </div>
      </div>
   );
}
