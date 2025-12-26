"use client";
import React from "react";
import { CompaniesUpSvgIcon } from "../SvgIcons";
import { useParamLength, useParamsGenerator } from "@/components/react/params";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type Props = {
   pathname?: any | undefined;
   param?: any | undefined;
};

export default function CompaniesItem({ pathname, param }: Props) {
   const params = useParamsGenerator();
   const slug = useParamLength(params, 2);
   return (
      <li>
         <NavLink
            href="/admin/companies"
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl w-[299px] h-[42px] 
                ${
                   pathname === "/admin/companies" ||
                   pathname === `/admin/company/${param}` ||
                   pathname === `/admin/company/${slug}/company-trust-point`
                      ? "bg-gradient-sider-item shadow-sider-item text-white"
                      : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
                } 
                 text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-6 h-6">
                  <CompaniesUpSvgIcon />
               </div>
               <div>Companies</div>
            </div>
            {/* {active === "Companies" ? (
          <ItemArrowUpSvgIcon width={24} height={24} />
        ) : (
          <ItemArrowRightSvgIcon width={24} height={24} />
        )} */}
         </NavLink>
      </li>
   );
}
