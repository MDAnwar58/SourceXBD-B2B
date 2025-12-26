"use client";
import React from "react";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import("@admin/components/grid"));
const PrograssBar = dynamic(() => import("@admin/components/PrograssBar"));

type Props = {
   star?: number | undefined;
   views?: number | string | undefined;
};

export default function StartPrograssAndViews({ star = 0, views = 0 }: Props) {
   return (
      <Grid cols={12} className=" items-center mb-5">
         <div className="col-span-1 text-[#2f2f2f] text-end font-['Arial-Regular',_sans-serif] text-[8px] font-normal flex">
            {star} star
         </div>
         <div className="col-span-10">
            <PrograssBar prograss={100 / star} />
         </div>
         <div className="col-span-1 text-[#2f2f2f] text-end font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
            {views} Views
         </div>
      </Grid>
   );
}
