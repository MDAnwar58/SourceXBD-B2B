import React, { Fragment } from "react";
import Grid from "@/components/grid";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ResetPasswordPageLeftSide = dynamic(
   () => import("./Components/ResetPasswordPageLeftSide")
);
const ResetPasswordFormCard = dynamic(
   () => import("./Components/ResetPasswordFormCard")
);
const ResetPasswordFormPolygon = dynamic(
   () => import("./Components/ResetPasswordFormPolygon")
);

export const metadata: Metadata = {
   title: "Reset Password",
};

export default function SignUp() {
   return (
      <Fragment>
         <Grid cols={12} gap={5}>
            <div className="1xl2:col-span-6 col-span-12 md:block hidden">
               <ResetPasswordPageLeftSide />
            </div>
            <div className="1xl2:col-span-6 col-span-12 1xl2:pt-0 pt-24">
               <div className="md:flex 1xl2:justify-end justify-center w-full">
                  <div className=" 2md:relative 1xl2:w-[67%] 6lg:w-[37%] 2lg:w-[43%] 5md:w-[53%] 3md:w-[55%] md:w-[65%] w-full">
                     <ResetPasswordFormCard />
                     {/* polygon start */}
                     <ResetPasswordFormPolygon />
                     {/* polygon end */}
                  </div>
               </div>
            </div>
         </Grid>
      </Fragment>
   );
}
