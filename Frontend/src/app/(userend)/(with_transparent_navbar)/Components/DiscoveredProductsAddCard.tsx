"use client";
import { RootState } from "@/app/store";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
import React from "react";
import { useSelector } from "react-redux";
const Img = dynamic(() => import("@/components/Image"));

type Product = {
   id: string;
   slug: string;
   image: any;
};

export default function DiscoveredProductsAddCard() {
   const localUrl = LocalUrl();
   const { weekly_products, today_add_products } = useSelector(
      (state: RootState) => state.userend.home
   );
   const weeklyProducts: Product[] = weekly_products;
   const todayAddProducts: Product[] = today_add_products;

   return (
      <div className="xl:col-span-4 sm:col-span-6 col-span-12 z-10 relative">
         <div className="flex flex-col md:gap-7 sm:gap-3 3xs:gap-10 gap-7 h-full">
            <div
               className="bg-[rgba(255,255,255,0.60)] rounded-[30px] p-7"
               style={{
                  boxShadow:
                     "2px 2px 10px 0px rgba(0, 0, 0, 0.35),-2px -2px 10px 0px rgba(101, 101, 101, 0.25)",
               }}
            >
               <div className="text-[#4285f4] text-left font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold relative mb-3">
                  {todayAddProducts && todayAddProducts.length > 0
                     ? `${todayAddProducts.length}+`
                     : 0}{" "}
                  products added today
               </div>
               <div className=" grid grid-cols-2 gap-5">
                  {todayAddProducts && todayAddProducts.length > 0 ? (
                     todayAddProducts.map((product: Product, index: number) => (
                        <Img
                           key={index}
                           src="/assets/images/discovered-product-image1.png"
                           alt={product?.slug}
                           width={150}
                           height={200}
                           className="rounded-[20px] w-full h-auto "
                        />
                     ))
                  ) : (
                     <div className="text-center col-span-2 text-lg font-semibold text-[#838383] w-full">
                        Data not found
                     </div>
                  )}
               </div>
            </div>
            {weeklyProducts && weeklyProducts.length > 0 ? (
               weeklyProducts.map((product: Product, index: number) => {
                  const imageUrl = localUrl.concat(product?.image);
                  return (
                     <div
                        key={index}
                        className="bg-[rgba(255,255,255,0.60)] rounded-[30px] md:p-6 sm:p-3 p-6 flex items-center 3xs:mb-0 mb-7"
                     >
                        <Img
                           src={
                              imageUrl?.toString() || "/assets/images/demo.png"
                           }
                           alt="weekly product image"
                           width={100}
                           height={100}
                           className="rounded-[20px] w-[104px] h-auto"
                        />
                        <div className="3md:ps-7 ps-3">
                           <div className="text-[#4285f4] text-left font-['Raleway-ExtraBold',_sans-serif] 3md:text-xl 2md:text-lg text-md font-extrabold relative">
                              New In This Week
                           </div>
                           <div className="text-[#838383] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
                              Lorem ipsum dolor sit amet consectetur
                           </div>
                        </div>
                     </div>
                  );
               })
            ) : (
               <div className="bg-[rgba(255,255,255,0.60)] text-[#838383] text-center font-['Arial-Regular',_sans-serif] text-lg font-semibold rounded-[30px] p-7 3xs:mb-0 mb-7">
                  <div className="text-[#4285f4] text-left font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold relative mb-3">
                     Weekly New Product
                  </div>
                  <div>Data not found</div>
               </div>
            )}
         </div>
      </div>
   );
}
