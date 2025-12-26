"use client";
import React, { useEffect, useState } from "react";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));

export default function ReadyToGetStartSection() {
   const [isAuth, setIsAuth] = useState<boolean>(false);

   const { auth } = useSelector((state: RootState) => state.userend.common);

   useEffect(() => {
      if (auth === true) {
         setIsAuth(auth);
      } else {
         setIsAuth(auth);
      }
   }, [auth]);

   return (
      isAuth !== true && (
         <div className="ready-to-get-start-section container py-20 relative">
            {/* <Image
            src="/assets/images/ready-section.png"
            alt="..."
            width={1350}
            height={600}
            className=" absolute -top-[20.5rem] left-[50%] transform-translate-x-middle w-[87.5%] h-[1150px] lg:block hidden"
         /> */}
            <div className=" relative">
               <div className="sm:w-[585px] w-full sm:h-[110px] sm:static hidden">
                  <div
                     className="bg-[#c4caf0] rounded-[50%] sm:w-[394px] w-full h-[110px] absolute left-[calc(50%_-_292.5px)] top-[15px]"
                     style={{ filter: "blur(94.75px)" }}
                  />
                  <div
                     className="bg-[#d0d5ff] rounded-[50%] sm:w-[394px] w-full h-[110px] absolute left-[calc(50%_-_101.5px)] top-[15px]"
                     style={{ filter: "blur(94.75px)" }}
                  />
               </div>
               <div className="flex justify-center">
                  <div className="text-center">
                     <div
                        className=" font-['Raleway-ExtraBold',_sans-serif] xs3:text-5xl text-4xl font-extrabold relative sm:h-[63px] xs3:h-[100px] h-[83px] mb-1"
                        style={{
                           background:
                              "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        Ready to get started?
                     </div>
                     <div className="text-[#2f2f2f] font-['Arial-Regular',_sans-serif] xs3:text-base text-xs font-normal mb-9">
                        Explore millions of products from trusted suppliers by
                        signing up today!
                     </div>
                     <div className="mx-auto w-[132px] h-[47px]">
                        <NavLink href={`/sign-up`}>
                           <div
                              className="rounded-[20px] w-[132px] h-[47px] flex justify-center items-center"
                              style={{
                                 background:
                                    "linear-gradient(180deg,rgba(66, 133, 244, 1) 5.000000074505806%,rgba(38, 77, 142, 1) 83.99999737739563%)",
                              }}
                           >
                              <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Sing Up
                              </div>
                           </div>
                        </NavLink>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   );
}
