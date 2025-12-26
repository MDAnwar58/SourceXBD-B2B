"use client";
import { RootState } from "@/app/store";
import { SvgViewMoreArrowIcon } from "@/components/SvgIcons";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const UpComingProduct = dynamic(() => import("./UpComingProduct"), {
   ssr: false,
});

type Product = {
   id: string;
   name: string;
   slug: string;
   category: string;
   company: string;
   contact: string;
   price: string;
   image: any;
   time_ago: string;
};

export default function UpComingProducts() {
   const { upcoming_products } = useSelector(
      (state: RootState) => state.userend.product
   );
   const products: Product[] = upcoming_products;
   return (
      <div className="pb-20">
         <div className="flex justify-between items-center">
            <div className="text-[#4285f4] text-left font-['Inter-Bold',_sans-serif] text-[32px] font-bold pt-10 pb-9">
               Upcoming Products
            </div>
            <a href="" className="3xs:block hidden">
               <div className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold flex items-center gap-x-2">
                  <span className=" capitalize">view more</span>
                  <span className="w-6 h-6">
                     <SvgViewMoreArrowIcon />
                  </span>
               </div>
            </a>
         </div>

         <div className="grid xl:grid-cols-4 md:grid-cols-3 3xs:grid-cols-2 grid-cols-1 gap-7">
            {products &&
               products.length > 0 &&
               products.map((product: Product, index: number) => (
                  <Fragment key={index}>
                     <UpComingProduct product={product} />
                  </Fragment>
               ))}
         </div>

         <div className="3xs:hidden flex justify-center pt-5">
            <a href="">
               <span className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold flex items-end">
                  <span className=" capitalize">view more</span>
                  <span className="w-6 h-6 ps-3">
                     <SvgViewMoreArrowIcon />
                  </span>
               </span>
            </a>
         </div>
      </div>
   );
}
