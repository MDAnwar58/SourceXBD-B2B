"use client";
import React, { useEffect } from "react";
import { SvgViewMoreArrowIcon } from "@/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import {
   getMostPopularProducts,
   getOneMostPopularProduct,
   getTodayAddProducts,
   getRecentWeeklyProduct,
   getBestSaller,
} from "../features/HomeAction";
import dynamic from "next/dynamic";
const DiscoveredSectionHeader = dynamic(
   () => import("./DiscoveredSectionHeader"),
   {
      ssr: false,
   }
);
const DiscoveredBackgroundPolygon = dynamic(
   () => import("./DiscoveredBackgroundPolygon"),
   {
      ssr: false,
   }
);
const DiscoveredMostPopularCard = dynamic(
   () => import("./DiscoveredMostPopularCard"),
   {
      ssr: false,
   }
);
const DiscoveredProductsAddCard = dynamic(
   () => import("./DiscoveredProductsAddCard"),
   {
      ssr: false,
   }
);
const DiscoveredMostPopularAndDealsOnBestSallerCard = dynamic(
   () => import("./DiscoveredMostPopularAndDealsOnBestSallerCard"),
   {
      ssr: false,
   }
);

export default function DiscoveredSection() {
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getMostPopularProducts());
      dispatch(getTodayAddProducts());
      dispatch(getRecentWeeklyProduct());
      dispatch(getOneMostPopularProduct());
      dispatch(getBestSaller());
   }, [dispatch]);
   return (
      <div className="discovered  relative 2xl:max-w-[1355px] 1xl2:max-w-[1305px] w-full mx-auto">
         <div
            className="1xl2:rounded-[40px] rounded-none relative"
            style={{
               background:
                  "linear-gradient(90.53deg,rgba(221, 223, 246, 1) 0%,rgba(192, 198, 240, 1) 49.000000953674316%,rgba(208, 214, 255, 1) 84.50000286102295%)",
            }}
         >
            <DiscoveredBackgroundPolygon />

            <div className="container ">
               <DiscoveredSectionHeader />

               <div className="py-16 3xs:grid grid-cols-12 md:gap-10 sm:gap-5  gap-10">
                  <DiscoveredMostPopularCard />

                  <DiscoveredProductsAddCard />

                  <div className="col-span-3 xl:hidden md:block hidden"></div>
                  <DiscoveredMostPopularAndDealsOnBestSallerCard />
                  <div className="col-span-3 xl:hidden md:block hidden"></div>
               </div>
               <div className="lg:hidden flex justify-center pb-14">
                  <a href="">
                     <span className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold flex items-center gap-x-2">
                        <span className=" capitalize">view more</span>
                        <span className="w-6 h-6">
                           <SvgViewMoreArrowIcon />
                        </span>
                     </span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
