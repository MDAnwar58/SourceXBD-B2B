import {
   SvgRetangularPolygon,
   Union2Polygon,
   UnionPolygon,
} from "@/components/SvgPolygon";
import React, { Fragment } from "react";

export default function ChoochPasswordFormPolygon() {
   return (
      <div className=" md:block hidden">
         <div
            className="polygon bg-[rgba(172,224,255,0.40)] rounded-[50%] w-[206.48px] h-[206.48px] absolute -top-40 left-[0%] transform-translate-x-middle"
            style={{
               transformOrigin: "0 0",
               transform: "rotate(45deg) scale(1, 1)",
            }}
         />
         <div className="text-[#1B5DCC]  w-[94.09px] h-[32.08px] absolute top-[50%] -left-14 transform-translate-y-middle">
            <UnionPolygon />
         </div>
         <div className="text-[#1B5DCC]  w-[199.56px] h-[199.56px] absolute -bottom-28 -left-5 transform-translate-x-middle">
            <SvgRetangularPolygon />
         </div>
         <div className="text-[#1B5DCC]  w-[134.73px] h-[50.46px] absolute -top-5 left-[99%]  transform-translate-x-middle">
            <Union2Polygon />
         </div>
         <div
            className="bg-[rgba(27,93,204,0.20)] rounded-[50%] w-[185.79px] h-[185.79px]  absolute -bottom-[3.9rem] left-[97%]  transform-translate-x-middle"
            style={{
               transformOrigin: "0 0",
               transform: "rotate(45deg) scale(1, 1)",
            }}
         />
      </div>
   );
}
