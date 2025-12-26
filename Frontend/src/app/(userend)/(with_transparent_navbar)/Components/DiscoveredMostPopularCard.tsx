"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import dynamic from "next/dynamic";
const DiscoveredMostEmblaCarosal = dynamic(
   () => import("./DiscoveredMostEmblaCarosal"),
   {
      ssr: false,
   }
);

type Product = {
   id: string;
   name: string;
   slug: string;
   image: string;
};

export default function DiscoveredMostPopularCard() {
   const { most_popular_products = [] } = useSelector(
      (state: RootState) => state.userend.home
   );
   const MostPopularProducts: Product[] = most_popular_products;
   const MostPopularProductSliders = MostPopularProducts.map(
      (product: Product) => ({
         name: product.name,
         slug: product.slug,
         image: product.image ? product.image : "",
      })
   ) as Product[];

   return (
      <div className="xl:col-span-4 sm:col-span-6 col-span-12 z-10 relative">
         <div
            className="bg-[rgba(255,255,255,0.60)] rounded-[30px] pt-5 pb-12 xs:px-8 px-7 3xs:mb-0 mb-7"
            style={{
               boxShadow:
                  "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className=" text-[#4285f4] text-left font-['Raleway-ExtraBold',_sans-serif] text-xl font-extrabold relative">
               Most popular
            </div>
            <div className="text-[#838383] text-left font-['Heebo-Regular',_sans-serif] text-xs font-normal relative pb-3">
               Lorem ipsum dolor sit amet consectetur
            </div>
            <DiscoveredMostEmblaCarosal
               slides={MostPopularProductSliders}
               options={{}}
            />
         </div>
      </div>
   );
}
