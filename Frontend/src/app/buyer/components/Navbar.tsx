"use client";
import React, { useEffect, useState } from "react";
import { NotificationFillSvgIcon } from "./SvgIcons";
import { useSelector } from "react-redux";
import { BuyerState } from "@/buyer/store";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const Img = dynamic(() => import("@/components/Image"), { ssr: false });
const NavLink = dynamic(() => import("@/components/NavLink"), { ssr: false });
const BuyerEPManuBtn = dynamic(() => import("./EPManuBtn"), { ssr: false });
// const Button = dynamic(() => import("@/components/Button"));
// const Img = dynamic(() => import("@/components/Image"));
// const NavLink = dynamic(() => import("@/components/NavLink"), { ssr: false });
// const BuyerEPManuBtn = dynamic(() => import("./EPManuBtn"));

type Props = {
   sidebar?: boolean | undefined;
   setSidebar?: any | undefined;
};

export default function Navbar({ setSidebar, sidebar }: Props) {
   const [isAuth, setIsAuth] = useState<boolean>(false);
   const { auth, user } = useSelector(
      (state: BuyerState) => state.buyer.common
   );

   useEffect(() => {
      if (auth) setIsAuth(true);
      else setIsAuth(false);
   }, [auth]);

   return (
      <nav className="fixed top-0 z-50 w-full bg-[#f0f2ff] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
         <div className="px-3 py-3 lg:px-20 flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
               <Button
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  onClick={() => setSidebar(!sidebar)}
               >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                     className="w-6 h-6"
                     aria-hidden="true"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                     />
                  </svg>
               </Button>
               <NavLink href="/" className="flex">
                  <Img
                     src="/assets/images/logo.png"
                     alt=""
                     width={150}
                     height={45}
                     className="w-[157.08px] h-auto"
                  />
               </NavLink>
            </div>
            <div className="flex items-center">
               <div className="md:flex hidden items-center ms-3">
                  <div className="flex items-center">
                     <Button
                        type="button"
                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                     >
                        <span className="sr-only">Open user menu</span>
                        <Img
                           src="/assets/images/admin-user-avatar.png"
                           alt="user photo"
                           width={200}
                           height={200}
                           className="w-[44px] h-[44px] rounded-full border-1 border-solid border-[#4285f4] border"
                        />
                     </Button>
                     {isAuth ? (
                        <div className="ps-3 text-[#000000] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative">
                           {user?.name || ""}
                        </div>
                     ) : null}
                  </div>
               </div>
               <div className="md:block hidden pe-5 ps-7">
                  <NotificationFillSvgIcon
                     width={30}
                     height={30}
                     color="#4285F4"
                  />
               </div>
               {isAuth ? (
                  <div className="">
                     <BuyerEPManuBtn user={user} />
                  </div>
               ) : null}
            </div>
         </div>
      </nav>
   );
}
