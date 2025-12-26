"use client";
import React from "react";
import { CheckSvgIcon, MoneySvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const Img = dynamic(() => import("@/components/Image"));

export default function SupportsTable() {
   return (
      <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-20">
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
                     Request ID
                  </th>
                  <th
                     scope="col"
                     className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                  >
                     User
                  </th>
                  <th
                     scope="col"
                     className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                  >
                     Subject
                  </th>
                  <th
                     scope="col"
                     className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                  >
                     Date
                  </th>
                  <th
                     scope="col"
                     className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                  >
                     Status
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
                     <div className="w-20">Lorem Ispum</div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                     <div className=" flex items-center gap-x-2 w-28">
                        <Img
                           src="/assets/images/user-details.png"
                           alt="..."
                           width={70}
                           height={70}
                           className="rounded-full w-7 h-7"
                        />
                        <div>Rofiqul Islam</div>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="w-52">
                        Lorem ipsum dolor sit amet consectetur.
                        Elementum.........
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="w-20">09 - 08 - 2024</div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="bg-[#90ff38] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded w-16 h-6 flex items-center justify-center gap-x-1">
                        <div className="w-4 h-4">
                           <CheckSvgIcon />
                        </div>
                        <span>Done</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     {/* <TableDropdownBtn /> */}
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
                     Lorem Ispum
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                     <div className=" flex items-center gap-x-2">
                        <Img
                           src="/assets/images/user-details.png"
                           alt="..."
                           width={70}
                           height={70}
                           className="rounded-full w-7 h-7"
                        />
                        <div>Rofiqul Islam</div>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="w-52">
                        Lorem ipsum dolor sit amet consectetur.
                        Elementum.........
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     09 - 08 - 2024
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="bg-[#90ff38] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded w-16 h-6 flex items-center justify-center gap-x-1">
                        <div className="w-4 h-4">
                           <CheckSvgIcon />
                        </div>
                        <span>Done</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     {/* <TableDropdownBtn /> */}
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
                     Lorem Ispum
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                     <div className=" flex items-center gap-x-2">
                        <Img
                           src="/assets/images/user-details.png"
                           alt="..."
                           width={70}
                           height={70}
                           className="rounded-full w-7 h-7"
                        />
                        <div>Rofiqul Islam</div>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="w-52">
                        Lorem ipsum dolor sit amet consectetur.
                        Elementum.........
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     09 - 08 - 2024
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="bg-[#90ff38] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded w-16 h-6 flex items-center justify-center gap-x-1">
                        <div className="w-4 h-4">
                           <CheckSvgIcon />
                        </div>
                        <span>Done</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     {/* <TableDropdownBtn /> */}
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
                     Lorem Ispum
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                     <div className=" flex items-center gap-x-2">
                        <Img
                           src="/assets/images/user-details.png"
                           alt="..."
                           width={70}
                           height={70}
                           className="rounded-full w-7 h-7"
                        />
                        <div>Rofiqul Islam</div>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="w-52">
                        Lorem ipsum dolor sit amet consectetur.
                        Elementum.........
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     09 - 08 - 2024
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="bg-[#90ff38] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded w-16 h-6 flex items-center justify-center gap-x-1">
                        <div className="w-4 h-4">
                           <CheckSvgIcon />
                        </div>
                        <span>Done</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     {/* <TableDropdownBtn /> */}
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
                     Lorem Ispum
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                     <div className=" flex items-center gap-x-2">
                        <Img
                           src="/assets/images/user-details.png"
                           alt="..."
                           width={70}
                           height={70}
                           className="rounded-full w-7 h-7"
                        />
                        <div>Rofiqul Islam</div>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="w-52">
                        Lorem ipsum dolor sit amet consectetur.
                        Elementum.........
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     09 - 08 - 2024
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="bg-[#90ff38] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded w-16 h-6 flex items-center justify-center gap-x-1">
                        <div className="w-4 h-4">
                           <CheckSvgIcon />
                        </div>
                        <span>Done</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     {/* <TableDropdownBtn /> */}
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
                     Lorem Ispum
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                     <div className=" flex items-center gap-x-2">
                        <Img
                           src="/assets/images/user-details.png"
                           alt="..."
                           width={70}
                           height={70}
                           className="rounded-full w-7 h-7"
                        />
                        <div>Rofiqul Islam</div>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="w-52">
                        Lorem ipsum dolor sit amet consectetur.
                        Elementum.........
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     09 - 08 - 2024
                  </td>
                  <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     <div className="bg-[#90ff38] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded w-16 h-6 flex items-center justify-center gap-x-1">
                        <div className="w-4 h-4">
                           <CheckSvgIcon />
                        </div>
                        <span>Done</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                     {/* <TableDropdownBtn /> */}
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}
