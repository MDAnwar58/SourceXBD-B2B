"use client";
import React, { useEffect, useRef, useState } from "react";
import { SvgEPManuIcon, SvgRightExtraWithBorderArrowIcon } from "./SvgIcons";
import { RightArrowSvgIcon } from "@admin/components/SvgIcons";
import { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/app/(userend)/features/CommonAction";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { RegCircleUser } from "./Icons";
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type Props = {
   isAuth?: boolean | undefined;
   user?: any | undefined;
};

export default function HeaderDropdownManuBtn({ isAuth, user }: Props) {
   const [dropdownManus, setDropdownManus] = useState<boolean>(false);
   const dropdownManusRef = useRef<HTMLDivElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            dropdownManusRef.current &&
            !dropdownManusRef.current.contains(event.target as Node)
         ) {
            setDropdownManus(false);
         }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   const onHandleLogout = () => {
      dispatch(logoutUser({ router }));
   };

   return (
      <div ref={dropdownManusRef} className="flex items-center relative z-30">
         <button
            type="button"
            className=" hover:border-[#4285F4]"
            onClick={() => setDropdownManus(!dropdownManus)}
         >
            <SvgEPManuIcon width={24} height={24} color="#4285F4" />
         </button>
         {dropdownManus === true ? (
            <div
               className="bg-[#f0f2ff] p-5 rounded-[20px] absolute top-12 right-0"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className=" space-y-1">
                  {isAuth && (
                     <NavLink
                        href={
                           user?.role === "seller"
                              ? "/saller/dashboard"
                              : user?.role === "admin"
                                ? "/admin/dashboard"
                                : "/buyer/dashboard"
                        }
                     >
                        <div className="text-[#2f2f2f] hover:text-[#ffffff] hover:bg-blue-gradient transition-all duration-150 ease-linear text-left font-['Raleway-Bold',_sans-serif] text-sm font-normal hover:font-bold rounded-[10px] w-[269px] h-[33px] flex flex-row justify-between items-center ps-3 pe-1">
                           <div>Dashboard</div>
                           <div className="w-6 h-6">
                              <RightArrowSvgIcon />
                           </div>
                        </div>
                     </NavLink>
                  )}
                  <NavLink href={"become-a-supplier"}>
                     <div className="text-[#2f2f2f] hover:text-[#ffffff] hover:bg-blue-gradient transition-all duration-150 ease-linear text-left font-['Raleway-Regular',_sans-serif] text-sm font-normal hover:font-bold rounded-[10px] w-[269px] h-[33px] flex flex-row justify-between items-center ps-3 pe-1">
                        <div>Become A supplier</div>
                        <div className="w-6 h-6">
                           <RightArrowSvgIcon />
                        </div>
                     </div>
                  </NavLink>
                  <div className="text-[#2f2f2f] hover:text-[#ffffff] hover:bg-blue-gradient transition-all duration-150 ease-linear text-left font-['Raleway-Regular',_sans-serif] text-sm font-normal hover:font-bold rounded-[10px] w-[269px] h-[33px] flex flex-row justify-between items-center ps-3 pe-1">
                     <div>Settings</div>
                     <div className="w-6 h-6">
                        <RightArrowSvgIcon />
                     </div>
                  </div>
               </div>

               <div
                  className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold mt-3"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  OUR SURVICES
               </div>

               <div className="ps-3 pt-2">
                  <div
                     className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold mb-2"
                     style={{
                        background:
                           "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                     }}
                  >
                     Logistics
                  </div>
                  <div className="flex flex-row flex-wrap gap-5">
                     <div
                        className="rounded-[14px] w-[68px] h-[68px] flex flex-col justify-center items-center"
                        style={{
                           background:
                              "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        <Img
                           src="/assets/images/logistics.png"
                           alt="Logistics"
                           width={24}
                           height={24}
                           className="w-6 h-6 object-cover"
                        />
                        <div className="text-[#ffffff] text-center font-['Raleway-Bold',_sans-serif] text-[6px] font-bold w-[35px] mt-1">
                           Shipping Information
                        </div>
                     </div>

                     <div
                        className="bg-[#ffffff] rounded-[14px] w-[68px] h-[68px] flex flex-col justify-center items-center"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        <Img
                           src="/assets/images/logistics.png"
                           alt="Logistics"
                           width={24}
                           height={24}
                           className="w-6 h-6 object-cover"
                        />
                        <div
                           className="text-center font-['Raleway-Bold',_sans-serif] text-[6px] font-bold w-[35px] mt-1"
                           style={{
                              background:
                                 "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                           }}
                        >
                           Traking Orders
                        </div>
                     </div>
                  </div>

                  <div
                     className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold mt-3 mb-2"
                     style={{
                        background:
                           "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                     }}
                  >
                     Payment Solution
                  </div>
                  <div
                     className="bg-[#ffffff] rounded-[14px] w-[150px] h-[68px] flex flex-col items-center justify-center"
                     style={{
                        boxShadow:
                           "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                     }}
                  >
                     <Img
                        src="/assets/images/payment-method-solution.png"
                        alt="Payment Method Solution"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-cover"
                     />
                     <div
                        className="text-center font-['Raleway-Bold',_sans-serif] text-[8px] font-bold relative w-[65px]"
                        style={{
                           background:
                              "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backgroundClip: "text",
                           WebkitBackgroundClip: "text",
                           WebkitTextFillColor: "transparent",
                        }}
                     >
                        Secure Payment Method
                     </div>
                  </div>

                  <div
                     className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold  mt-3 mb-2"
                     style={{
                        background:
                           "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                     }}
                  >
                     customer Support
                  </div>
                  <div className="flex flex-row flex-wrap gap-5">
                     <div
                        className="bg-[#ffffff] rounded-[14px] w-[68px] h-[68px] flex flex-col items-center justify-center"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        <Img
                           src="/assets/images/customer-support.png"
                           alt="Customer Support"
                           width={24}
                           height={24}
                           className="w-6 h-6 object-cover"
                        />
                        <div
                           className="text-center font-['Raleway-Bold',_sans-serif] text-[6px] font-bold mt-1 w-[35px]"
                           style={{
                              background:
                                 "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                           }}
                        >
                           Help Center
                        </div>
                     </div>
                     <NavLink
                        href="/contact"
                        className="bg-[#ffffff] rounded-[14px] w-[68px] h-[68px] flex flex-col items-center justify-center"
                        style={{
                           boxShadow:
                              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        <Img
                           src="/assets/images/customer-support2.png"
                           alt="Customer Support"
                           width={24}
                           height={24}
                           className="w-6 h-6 object-cover"
                        />
                        <div
                           className="text-center font-['Raleway-Bold',_sans-serif] text-[6px] font-bold pt-1 w-[35px]"
                           style={{
                              background:
                                 "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                           }}
                        >
                           Contact Us
                        </div>
                     </NavLink>
                  </div>
               </div>

               {isAuth ? (
                  <Button
                     type="button"
                     className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[20px] w-[269px] h-12 flex flex-row items-center justify-center gap-2 mt-5"
                     style={{
                        background:
                           "linear-gradient(193.88deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                     }}
                     onClick={() => onHandleLogout()}
                  >
                     <div>LOG OUT</div>
                     <div className="w-6 h-6">
                        <SvgRightExtraWithBorderArrowIcon />
                     </div>
                  </Button>
               ) : (
                  <div className="6xs:hidden flex flex-col items-center gap-3 mt-5">
                     <div className="flex justify-center text-[#4285f4] w-full">
                        <NavLink
                           href="/sign-in"
                           className="flex items-center gap-3"
                        >
                           <span className=" text-2xl">
                              <RegCircleUser />
                           </span>
                           <span className=" capitalize text-lg font-medium">
                              Sign In
                           </span>
                        </NavLink>
                     </div>
                     <NavLink
                        href="/sign-up"
                        className="flex justify-center items-center capitalize rounded-2xl w-full h-10 bg-gradient-to-b from-blue-500/[0.8] via-blue-700/[0.8] to-blue-900/[0.8] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.25),-2px_-2px_10px_0px_rgba(101,101,101,0.25)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold"
                     >
                        Sign Up
                     </NavLink>
                  </div>
               )}
            </div>
         ) : null}
      </div>
   );
}
