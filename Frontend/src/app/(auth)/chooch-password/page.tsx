import React from "react";
import Grid from "@/components/grid";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ChoochPasswordFormPolygon = dynamic(
   () => import("./Components/ChoochPasswordFormPolygon")
);
const ChoochPasswordFormCard = dynamic(
   () => import("./Components/ChoochPasswordFormCard")
);
const ChoochPasswordPageLeftSide = dynamic(
   () => import("./Components/ChoochPasswordPageLeftSide")
);

export const metadata: Metadata = {
   title: "Chooch Password",
};

export default function ChoochPassword() {
   return (
      <div className="pt-14">
         <Grid cols={12} gap={5}>
            <div className="1xl2:col-span-6 col-span-12 md:block hidden">
               <ChoochPasswordPageLeftSide />
            </div>
            <div className="1xl2:col-span-6 col-span-12">
               <div
                  className=" relative  3xl:w-[67%] 1xl2:w-[77%] 6lg:w-[37%] 2lg:w-[43%] 5md:w-[53%] 3md:w-[55%] md:w-[65%] w-full  
               1xl2:ms-auto mx-auto"
               >
                  <ChoochPasswordFormCard />
                  {/* polygon start */}
                  <ChoochPasswordFormPolygon />
                  {/* polygon end */}
               </div>
            </div>
         </Grid>
      </div>
   );
}
