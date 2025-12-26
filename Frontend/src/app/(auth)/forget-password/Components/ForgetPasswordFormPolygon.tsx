import {
   SvgRetangularPolygon,
   Union2Polygon,
   UnionPolygon,
} from "@/components/SvgPolygon";
import React, { Fragment } from "react";

export default function ForgetPasswordFormPolygon() {
   return (
      <div className="2md:block hidden">
         <div
            className="polygon bg-[rgba(172,224,255,0.40)] rounded-[50%] w-[181.48px] h-[181.48px] absolute -top-36 left-0 transform-translate-x-middle"
            style={{
               transformOrigin: "0 0",
               transform: "rotate(45deg) scale(1, 1)",
            }}
         />
         <div className="text-[#1B5DCC]  w-[199.56px] h-[199.56px] absolute -bottom-32 -left-10 transform-translate-x-middle">
            <SvgRetangularPolygon />
         </div>
         <div className="text-[#1B5DCC]  w-[134.73px] h-[50.46px] absolute -top-5 left-[99%]  transform-translate-x-middle">
            <Union2Polygon />
         </div>
         <div
            className="3xl:block 1xl2:hidden bg-[rgba(27,93,204,0.20)] rounded-[50%] 4xl:w-[185.79px] w-[165.79px] 4xl:h-[185.79px] h-[165.79px]  absolute -bottom-16 left-[100%]  transform-translate-x-middle"
            style={{
               transformOrigin: "0 0",
               transform: "rotate(45deg) scale(1, 1)",
            }}
         />
      </div>
   );
}
