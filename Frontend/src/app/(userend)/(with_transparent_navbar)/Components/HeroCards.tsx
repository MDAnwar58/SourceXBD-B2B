"use client";
import React from "react";
import dynamic from "next/dynamic";

const HeroCardSlider = dynamic(() => import("./HeroCardSlider"), {
   ssr: false,
});

export default function HeroCards() {
   return (
      <div className=" xl:mt-10 3sm:mt-[30.9rem] mt-[2.5rem]">
         <HeroCardSlider />
      </div>
   );
}
