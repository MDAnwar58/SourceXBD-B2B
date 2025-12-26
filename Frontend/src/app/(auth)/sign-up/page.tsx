import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import("@/components/grid"), { ssr: false });
const SignUnPageLeftSide = dynamic(
   () => import("./Components/SignUnPageLeftSide"),
   {
      ssr: false,
   }
);
const SignUpFormCard = dynamic(() => import("./Components/SignUpFormCard"), {
   ssr: false,
});
const SignUpFormPolygon = dynamic(
   () => import("./Components/SignUpFormPolygon"),
   {
      ssr: false,
   }
);

export const metadata: Metadata = {
   title: "Sign Up",
};

export default function SignUpPage() {
   return (
      <Fragment>
         <Grid cols={12} gap={5}>
            <div className="1xl2:col-span-6 col-span-12 md:block hidden">
               <SignUnPageLeftSide />
            </div>
            <div className="1xl2:col-span-6 col-span-12">
               <div className=" 2md:relative md:flex 1xl2:justify-end justify-center w-full">
                  <SignUpFormCard />
                  {/* polygon start */}
                  <SignUpFormPolygon />
                  {/* polygon end */}
               </div>
            </div>
         </Grid>
      </Fragment>
   );
}
