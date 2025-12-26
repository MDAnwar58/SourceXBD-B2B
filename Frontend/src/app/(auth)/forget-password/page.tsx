import React, { Fragment } from "react";
import Grid from "@/components/grid";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
   title: "Forget Password",
};

export default function ForgetPassword() {
   const ForgetPasswordPageLeftSide = dynamic(
      () => import("./Components/ForgetPasswordPageLeftSide")
   );
   const ForgetPasswordFormCard = dynamic(
      () => import("./Components/ForgetPasswordFormCard")
   );
   const ForgetPasswordFormPolygon = dynamic(
      () => import("./Components/ForgetPasswordFormPolygon")
   );
   return (
      <Fragment>
         <Grid cols={12} gap={5}>
            <div className="1xl2:col-span-6 col-span-12 md:block hidden">
               <ForgetPasswordPageLeftSide />
            </div>
            <div className="1xl2:col-span-6 col-span-12 1xl2:pt-0 pt-16 1xl2:pb-0 pb-9">
               <div className="md:flex 1xl2:justify-end justify-center items-center h-full">
                  <div className=" relative 3xl:w-[67%] 1xl2:w-[67%] 6lg:w-[37%] 2lg:w-[43%] 5md:w-[53%] 3md:w-[55%] md:w-[65%] w-full">
                     <ForgetPasswordFormCard />
                     {/* polygon start */}
                     <ForgetPasswordFormPolygon />
                     {/* polygon end */}
                  </div>
               </div>
            </div>
         </Grid>
      </Fragment>
   );
}
