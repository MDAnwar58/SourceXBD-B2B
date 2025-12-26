"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const HeroLeftGrid = dynamic(() => import("./HeroLeftGrid"), {
   ssr: false,
});
const HeroRightGirdImageSlider = dynamic(
   () => import("./HeroRightGirdImageSlider"),
   {
      ssr: false,
   }
);
const HeroInputSearch = dynamic(() => import("./HeroInputSearch"), {
   ssr: false,
});
const HeroCardSlider = dynamic(() => import("./HeroCardSlider"), {
   ssr: false,
});
const HeroCards = dynamic(() => import("./HeroCards"), {
   ssr: false,
});

export default function HeroSectionContent() {
   return (
      <div className="xl:h-[678px] 3sm:h-[73.5em] sm:h-[60em] 6xs:h-[59.3em] 3xs:h-[56.6em] xs:h-[60.3em] xs4:h-[56.3em] xs6:h-[58.9em] h-[60.1em] w-full hero-section -z-10 pt-12 px-5">
         <div className="container">
            <div className="xl:grid grid-cols-2">
               <HeroLeftGrid />
               <HeroRightGirdImageSlider />
            </div>

            <div className="xl:block hidden">
               <HeroInputSearch />
            </div>
            <HeroCards />
         </div>
      </div>
   );
}
