import React from "react";
import { EPManuSvgIcon, NotificationFillSvgIcon } from "./SvgIcons";
import Button from "@/components/Button";
import NavLink from "@/components/NavLink";
import Img from "@/components/Image";

type Props = {
   sidebar?: boolean | undefined;
   setSidebar?: any | undefined;
};

export default function Navbar({ setSidebar, sidebar }: Props) {
   return (
      <nav className="fixed top-0 z-50 w-full bg-[#f0f2ff] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
         <div className="5xl:max-w-[1421px] px-3 py-3 lg:px-20 5xl:px-0 flex items-center justify-between">
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
                     alt="SourceXBD Logo"
                     width={150}
                     height={45}
                     className="w-[157.08px] h-auto"
                  />
               </NavLink>
            </div>
            <div className="md:flex hidden items-center">
               <div className="">
                  <EPManuSvgIcon width={24} height={24} color="#4285F4" />
               </div>
            </div>
         </div>
      </nav>
   );
}
