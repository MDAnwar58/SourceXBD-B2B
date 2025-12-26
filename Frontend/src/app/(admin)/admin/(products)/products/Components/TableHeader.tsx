"use client";
import React, { Fragment, SetStateAction } from "react";
import { ReloadSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const DropdownItem = dynamic(() => import("@/components/DropdownItem"), {
   ssr: false,
});
const DropdownBtn = dynamic(() => import("@/components/DropdownBtn"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const NavLink = dynamic(() => import("@/components/NavLink"), { ssr: false });
const ReactTabs = dynamic(() => import("@/components/tabs"), { ssr: false });

type Props = {
   tabs?: string[] | undefined;
   onTabHandler: (tag: string) => void | undefined;
   tableTab: SetStateAction<string> | undefined;
   TableUpDropdown: any | undefined;
   onHandleResetTable: (
      page: number,
      perPage: number,
      search: string
   ) => void | undefined;
};

export default function TableHeader({
   tabs,
   onTabHandler,
   tableTab,
   TableUpDropdown,
   onHandleResetTable,
}: Props) {
   return (
      <Fragment>
         <div className=" 2md:flex md:block xs:flex items-center justify-between pb-5">
            <div className="text-[#2f2f2f] 2md:text-left md:text-center xs:text-left text-center font-['Raleway-Bold',_sans-serif] text-xl font-bold 2md:mb-0 mb-2">
               Product List
            </div>

            <div className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-[206px] h-9 shadow-admin-card flex justify-center items-center gap-2 2md:mx-0 md:mx-auto xs:mx-0 mx-auto">
               <Button
                  type="button"
                  className="bg-[#dfdfdf] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-md w-[51px] h-[23px] flex justify-center items-center"
               >
                  Export
               </Button>

               <Button
                  type="button"
                  className="bg-[#dfdfdf] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-md w-[55px] h-[23px] flex justify-center items-center"
               >
                  Import
               </Button>

               <NavLink href="/admin/product-create">
                  <div
                     className="rounded-md w-16 h-[19px] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold flex justify-center items-center"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                     }}
                  >
                     Add Product
                  </div>
               </NavLink>
            </div>
         </div>

         <div className="xs4:flex items-center justify-between pb-3">
            <div className="bg-[rgba(152,176,238,0.05)] rounded-[10px] p-2 shadow-admin-card xs4:mb-0 mb-3">
               <ReactTabs
                  tabs={tabs}
                  onTabHandler={onTabHandler}
                  tableTab={tableTab}
               />
            </div>
            <div className="flex flex-row gap-3 items-center">
               <Button
                  type="button"
                  className="bg-[rgba(255,255,255,0.60)] shadow-admin-card text-gray-700 w-9 h-9 rounded-lg flex justify-center items-center"
                  onClick={() => onHandleResetTable?.(1, 5, "")}
               >
                  <div className="w-5 h-5">
                     <ReloadSvgIcon />
                  </div>
               </Button>
               <DropdownBtn
                  label={TableUpDropdown}
                  inline
                  arrowIcon={false}
                  placement="bottom-start"
                  className="bg-[rgba(255,255,255,0.60)] rounded-[10px] shadow-admin-card border-none px-3 !pt-0"
               >
                  <span className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold">
                     Short by
                  </span>

                  <DropdownItem className="!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[143px] h-7 transition-colors flex items-center mb-2 !mt-[.05rem]">
                     Product Title
                  </DropdownItem>
                  <DropdownItem className="!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[143px] h-7 transition-colors flex items-center mb-2 !mt-[.05rem]">
                     Update
                  </DropdownItem>
                  <DropdownItem className="!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[143px] h-7 transition-colors flex items-center mb-2 !mt-[.05rem]">
                     Inventory
                  </DropdownItem>
                  <DropdownItem className="!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[143px] h-7 transition-colors flex items-center mb-2 !mt-[.05rem]">
                     publishing error
                  </DropdownItem>
               </DropdownBtn>
            </div>
         </div>
      </Fragment>
   );
}
