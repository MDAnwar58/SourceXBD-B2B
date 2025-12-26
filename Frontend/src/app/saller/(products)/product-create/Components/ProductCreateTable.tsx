"use client";
import React from "react";
import { ImageInsertSvgIcon } from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"));

export default function ProductEditTable() {
   return (
      <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-7">
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
               <tr>
                  <th scope="col" className="px-6 py-3 table-head-th-l">
                     <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                  </th>
                  <th
                     scope="col"
                     className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                  >
                     Image / Product Name
                  </th>
                  <th
                     scope="col"
                     className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                  >
                     Price
                  </th>
                  <th
                     scope="col"
                     className="px-6 py-3 table-head-th-r text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                  >
                     Available
                  </th>
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
                     <div className="flex items-center gap-x-2">
                        <div className="bg-[#f0f0f0] rounded-md w-[50px] h-[50px] flex items-center justify-center">
                           <div className="w-3.5 h-3.5 text-[#4285F4]">
                              <ImageInsertSvgIcon />
                           </div>
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                           Lorem Ipsum
                        </div>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                     <div>
                        <button
                           type="button"
                           className=" cursor-none bg-[#f0f0f0] text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold rounded px-3 py-1 flex items-center justify-center"
                        >
                           TK{"  "}000000
                        </button>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div>
                        <button
                           type="button"
                           className=" cursor-none bg-[#f0f0f0] text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold rounded px-5 py-1 flex items-center justify-center"
                        >
                           120
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                  <th
                     scope="row"
                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                  >
                     <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                  </th>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="flex items-center gap-x-2">
                        <div className="bg-[#f0f0f0] rounded-md w-[50px] h-[50px] flex items-center justify-center">
                           <div className="w-3.5 h-3.5 text-[#4285F4]">
                              <ImageInsertSvgIcon />
                           </div>
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                           Lorem Ipsum
                        </div>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                     <div>
                        <button
                           type="button"
                           className=" cursor-none bg-[#f0f0f0] text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold rounded px-3 py-1 flex items-center justify-center"
                        >
                           TK{"  "}000000
                        </button>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div>
                        <button
                           type="button"
                           className=" cursor-none bg-[#f0f0f0] text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold rounded px-5 py-1 flex items-center justify-center"
                        >
                           120
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                  <th
                     scope="row"
                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                  >
                     <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                  </th>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="flex items-center gap-x-2">
                        <div className="bg-[#f0f0f0] rounded-md w-[50px] h-[50px] flex items-center justify-center">
                           <div className="w-3.5 h-3.5 text-[#4285F4]">
                              <ImageInsertSvgIcon />
                           </div>
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                           Lorem Ipsum
                        </div>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                     <div>
                        <button
                           type="button"
                           className=" cursor-none bg-[#f0f0f0] text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold rounded px-3 py-1 flex items-center justify-center"
                        >
                           TK{"  "}000000
                        </button>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div>
                        <button
                           type="button"
                           className=" cursor-none bg-[#f0f0f0] text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold rounded px-5 py-1 flex items-center justify-center"
                        >
                           120
                        </button>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}
