import {
   SvgRetangularPolygon,
   Union2Polygon,
   UnionPolygon,
} from "@/components/SvgPolygon";
import React, { Fragment } from "react";

export default function ResetPasswordFormPolygon() {
   return (
      <div className="2md:block hidden">
         <div className="polygon bg-[rgba(172,224,255,0.40)] rounded-[50%] w-[206.48px] h-[206.48px] absolute -top-36  lef-0 transform-translate-x-middle origin-top-left scale-100 rotate-45" />
         <div className="text-[#1B5DCC]  w-[94.09px] h-[32.08px] absolute top-[50%] 1xl2:left-[24.5%] 6lg:left-[20.5%] 2lg:left-[15.5%] lg:left-[9.5%] 5md:left-[8.5%] 3md:left-[2.5%] -left-5 transform-translate-y-middle">
            <UnionPolygon />
         </div>
         <div className="text-[#1B5DCC]  w-[199.56px] h-[199.56px] absolute -bottom-9 left-[3.5%] transform-translate-x-middle">
            <SvgRetangularPolygon />
         </div>
         <div className="text-[#1B5DCC]  w-[134.73px] h-[50.46px] absolute -top-5 left-[99%] transform-translate-x-middle">
            <Union2Polygon />
         </div>
         <div
            className=" 4xl:block 1xl2:hidden bg-[rgba(27,93,204,0.20)] rounded-[50%] w-[217.79px] h-[217.79px]  absolute bottom-[2.9rem] left-[95%] transform-translate-x-middle"
            style={{
               transformOrigin: "0 0",
               transform: "rotate(45deg) scale(1, 1)",
            }}
         />
      </div>
   );
}
