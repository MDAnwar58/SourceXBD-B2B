"use client";
import React, { useState } from "react";
import {
   DashboardEditSvgIcon,
   DeleteSvgIcon,
} from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"), { ssr: false });
const ToggleSwitch = dynamic(() => import("@admin/components/ToggleSwitch"), {
   ssr: false,
});

export default function CategoryTable() {
   const [toggleSwitch, setToggleSwitch] = useState(true);

   return (
      <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-20">
         <div className=" overflow-x-auto w-full">
            <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3 table-head-th-l">
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Name
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Category
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Sub Category
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Status
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Discount
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th-r text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     ></th>
                  </tr>
               </thead>
               <tbody>
                  <tr className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Lorem Ipsum
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Lorem Ipsum
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Lorem Ipsum
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div>
                           <ToggleSwitch
                              onChange={(value) => {
                                 console.log(value);
                              }}
                           />
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        00%
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div className="flex items-center gap-2">
                           <div className="bg-[#e6e6e6] text-gray-700 rounded w-[22px] h-[22px] flex items-center justify-center">
                              <div className="w-4 h-4">
                                 <DashboardEditSvgIcon />
                              </div>
                           </div>
                           <div className="bg-[#e6e6e6] text-gray-700 rounded w-[22px] h-[22px] flex items-center justify-center">
                              <div className="w-4 h-4">
                                 <DeleteSvgIcon />
                              </div>
                           </div>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}
