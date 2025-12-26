"use client";
import { RootState } from "@/app/store";
import NavLink from "@/components/NavLink";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Img = dynamic(() => import("@/components/Image"), { ssr: false });

type Product = {
   id: string;
   slug: string;
   image: string;
};

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type Seller = {
   id: string;
   name: string;
   image: Array<Image[]>;
};

export default function DiscoveredMostPopularAndDealsOnBestSallerCard() {
   const localUrl = LocalUrl();
   const [bestSallerImage, setBestSallerImage] = useState<string>("");
   const { most_popular_product = {}, best_saller = {} } = useSelector(
      (state: RootState) => state.userend.home
   );
   const MostPopularProudct = most_popular_product as Product | null;
   const bestSaller = best_saller as Seller;
   useEffect(() => {
      if (bestSaller && bestSaller.image !== undefined) {
         const storeUrlArray = bestSaller?.image.map((image: any) => {
            return image.image;
         });
         const storeUrl = storeUrlArray.toString();
         const forwardSlash = "/";
         const storeImageUrl = forwardSlash.concat(storeUrl);
         const imageUrl = localUrl.concat(storeImageUrl);
         setBestSallerImage(imageUrl);
      }
   }, [bestSaller]);

   let mostPopularImageUrl = "";
   if (MostPopularProudct && MostPopularProudct?.image) {
      mostPopularImageUrl = localUrl.concat(MostPopularProudct?.image);
   }

   return (
      <div className="xl:col-span-4 md:col-span-6 col-span-12 z-10 relative">
         {MostPopularProudct?.slug !== undefined ? (
            <NavLink href={`/product-sale/${MostPopularProudct?.slug}`}>
               <div
                  className="bg-[rgba(255,255,255,0.60)] rounded-[30px] p-6 flex items-center mb-8"
                  style={{
                     boxShadow:
                        "2px 2px 10px 0px rgba(0, 0, 0, 0.25),-2px -2px 10px 0px rgba(101, 101, 101, 0.25)",
                  }}
               >
                  {MostPopularProudct?.image ? (
                     <Img
                        src={mostPopularImageUrl}
                        alt={"Most Popular Image"}
                        width={100}
                        height={100}
                        className="rounded-[20px] w-[104px] xl:h-[104px] h-auto"
                     />
                  ) : (
                     <Img
                        src="/assets/images/demo.png"
                        alt={"Most Popular Image"}
                        width={100}
                        height={100}
                        className="rounded-[20px] w-[104px] xl:h-[104px] h-auto"
                     />
                  )}
                  <div className="3md:ps-5 ps-3">
                     <div className="text-[#4285f4] text-left font-['Raleway-ExtraBold',_sans-serif] text-xl font-extrabold relative">
                        Most popular
                     </div>
                  </div>
               </div>
            </NavLink>
         ) : (
            <div className="bg-[rgba(255,255,255,0.60)] text-[#838383] text-center font-['Arial-Regular',_sans-serif] text-lg font-semibold rounded-[30px]  p-7 3xs:mb-0 mb-7">
               <div className="text-[#4285f4] text-left font-['Raleway-ExtraBold',_sans-serif] text-sm font-extrabold relative mb-3">
                  Most Popular
               </div>
               <div>Data not found</div>
            </div>
         )}

         <div
            className="bg-[rgba(255,255,255,0.60)] rounded-[30px] p-6"
            style={{
               boxShadow: "5px 5px 5px 0px rgba(0, 0, 0, 0.35)",
            }}
         >
            <div className="text-[#4285f4] text-left font-['Raleway-ExtraBold',_sans-serif] text-xl font-extrabold mb-3">
               Deals on best seller
            </div>
            {bestSallerImage !== "" ? (
               <Img
                  src={bestSallerImage.toString()}
                  alt="best seller company image"
                  width={500}
                  height={400}
                  className="rounded-[30px] w-full lg:h-[323px] h-auto"
                  //
               />
            ) : (
               <div>Best seller not found</div>
            )}
         </div>
      </div>
   );
}
