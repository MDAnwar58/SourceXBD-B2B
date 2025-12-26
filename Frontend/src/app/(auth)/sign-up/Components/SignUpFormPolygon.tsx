import {
   SvgRetangularPolygon,
   Union2Polygon,
   UnionPolygon,
} from "@/components/SvgPolygon";
import React, { Fragment } from "react";

export default function LoginFormPolygon() {
   return (
      <div className="2md:block hidden">
         <div className="polygon bg-[rgba(172,224,255,0.40)] rounded-[50%] w-[206.48px] h-[206.48px] absolute -top-36 3xl:left-[35%] 1xl2:left-[25%] 6lg:left-[31%] 2lg:left-[22.1%] 5md:left-[17.1%] 3md:left-[13.1%] left-[7.1%] transform-translate-x-middle origin-top-left scale-100 rotate-45" />
         <div className="text-[#1B5DCC]  w-[94.09px] h-[32.08px] absolute top-[50%] 1xl2:left-[24.5%] 6lg:left-[27.5%] 2lg:left-[15.5%] lg:left-[9.5%] 5md:left-[8.5%] 3md:left-[2.5%] -left-5 transform-translate-y-middle">
            <UnionPolygon />
         </div>
         <div className="text-[#1B5DCC]  w-[199.56px] h-[199.56px] absolute -bottom-9 3xl:left-[31.9%] 1xl2:left-[19.9%] 6lg:left-[29.9%] 2lg:left-[18.5%] 5md:left-[13.5%] 3md:left-[7.5%] left-[3.5%] transform-translate-x-middle">
            <SvgRetangularPolygon />
         </div>
         <div className="text-[#1B5DCC]  w-[134.73px] h-[50.46px] absolute -top-5 1xl2:left-[99%] 6lg:left-[68.5%] 2lg:left-[78.5%] 5md:left-[83.5%] 3md:left-[87.5%] left-[93.5%] transform-translate-x-middle">
            <Union2Polygon />
         </div>
         <div
            className="bg-[rgba(27,93,204,0.20)] rounded-[50%] w-[217.79px] h-[217.79px]  absolute bottom-[2.9rem] 1xl2:left-[95%] 6lg:left-[65%] 2lg:left-[75%] 5md:left-[80%] 3md:left-[85%] left-[89%] transform-translate-x-middle"
            style={{
               transformOrigin: "0 0",
               transform: "rotate(45deg) scale(1, 1)",
            }}
         />
      </div>
   );
}
