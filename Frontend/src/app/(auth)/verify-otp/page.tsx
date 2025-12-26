import React, { Fragment } from "react";
import Grid from "@/components/grid";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const VerifyOTPPageLeftSide = dynamic(
   () => import("./Components/VerifyOTPPageLeftSide")
);
const VerifyOTPFormCard = dynamic(
   () => import("./Components/VerifyOTPFormCard")
);
const VerifyOTPFormPolygon = dynamic(
   () => import("./Components/VerifyOTPFormPolygon")
);

export const metadata: Metadata = {
   title: "Sign Up",
};

export default function VerifyCode() {
   return (
      <Fragment>
         <Grid cols={12} gap={5}>
            <div className="1xl2:col-span-6 col-span-12 md:block hidden">
               <VerifyOTPPageLeftSide />
            </div>
            <div className="1xl2:col-span-6 col-span-12">
               <div className="md:flex 1xl2:justify-end justify-center items-center h-full 1xl2:pt-0 pt-20">
                  <div className=" relative 3xl:w-[67%] 1xl2:w-[77%] 6lg:w-[37%] 2lg:w-[43%] 5md:w-[53%] 3md:w-[55%] md:w-[65%] w-full">
                     <VerifyOTPFormCard />
                     {/* polygon start */}
                     <VerifyOTPFormPolygon />
                     {/* polygon end */}
                  </div>
               </div>
            </div>
         </Grid>
      </Fragment>
   );
}
