"use client";
import React from "react";
import dynamic from "next/dynamic";
const HeroInputSearch = dynamic(() => import("./HeroInputSearch"), {
   ssr: false,
});

export default function HeroLeftGrid() {
   return (
      <div className="w-full pt-44">
         <div className="xl:text-left text-center font-['Raleway-ExtraBold',_sans-serif] sm:text-[3.45rem] 6xs:text-6xl xs:text-5xl text-4xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-[#4285F4] to-[#264D8E]">
            Discover, Buy,
            <br /> and Sell
         </div>
         <p
            className="text-[#2f2f2f] xl:text-left text-center font-['Arial-Regular',_sans-serif] 6xs:text-xl xs:text-md text-sm font-normal sm:w-[565px] w-full pt-5 xl:mx-0 mx-auto"
            // style={{ wordSpacing: "7px" }}
         >
            New and Pre-owned Textile and Garment Machinery Alongside Spare
            Parts.
         </p>

         <div className="xl:hidden">
            <HeroInputSearch />
         </div>
      </div>
   );
}
