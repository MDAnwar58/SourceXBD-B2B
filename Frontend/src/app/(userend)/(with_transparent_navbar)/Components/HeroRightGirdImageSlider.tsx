import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const HeroBannerSlider = dynamic(() => import("./HeroBannerSlider"), {
   ssr: false,
});

export default function HeroRightGirdImageSlider() {
   return (
      <div className="flex xl:justify-end justify-center xl:pt-0 pt-11 w-full">
         <div className="4xs:w-[600px] w-full relative">
            <div className=" static 3sm:block hidden">
               <div
                  className="bg-[rgba(172,224,255,0.30)] rounded-full w-[303.43px] h-[303.43px] shadow-2xl absolute left-[31%] top-[.7rem] origin-top-left rotate-[45deg] scale-[1]"
                  style={{ transform: "translateX(-50%)" }}
               ></div>
               <div
                  className="bg-[rgba(27,93,204,0.30)] rounded-full w-[303.43px] h-[303.43px] shadow-2xl absolute left-[65%] top-[8rem] origin-top-left rotate-[45deg] scale-[1]"
                  style={{ transform: "translateX(-50%)" }}
               ></div>
            </div>

            <div className="hero-banner-slider">
               <HeroBannerSlider />
            </div>
         </div>
      </div>
   );
}
