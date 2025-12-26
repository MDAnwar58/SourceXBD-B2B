"use client";
import React from "react";
import { SvgDiscoveredRectangularIcon } from "@/components/SvgIcons";

export default function DiscoveredBackgroundPolygon() {
   return (
      <div className="xl:flex hidden justify-center w-[57%] h-[90%] absolute top-[50%] left-[50%] transform-translate-middle">
         <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-[404.23px] relative rotate-[34deg]">
               <div className="bg-[rgba(172,224,255,0.20)] rounded-[50%] w-[376.07px] h-[376.07px] shadow-2xl  absolute left-0 top-0" />
               <div className=" rotate-[85deg] mt-[7.5rem]">
                  <SvgDiscoveredRectangularIcon width={527} height={505} />
               </div>
               <div className="bg-[rgba(27,93,204,0.20)] rounded-[50%] w-[376.07px] h-[376.07px]  shadow-2xl  absolute right-0 bottom-0" />
            </div>
         </div>
      </div>
   );
}
