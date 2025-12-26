"use client";
import React from "react";
import { MoneySvgIcon } from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const Button = dynamic(() => import("@/components/Button"));
const TransperentTableDropdownBtn = dynamic(
   () => import("@/saller/components/TransperentTableDropdownBtn")
);

export default function TopSalingProductsTable() {
   return (
      <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-10">
         <div className=" overflow-x-auto w-full">
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
                        Product Name
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Company Name
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
                        Price
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
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div>
                           <Button
                              type="button"
                              className="bg-[#f0f2ff] rounded h-6 flex items-center ps-1 pe-3"
                           >
                              <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                 <div className=" w-2 h-2">
                                    <MoneySvgIcon />
                                 </div>
                              </div>
                              <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                 000000
                              </div>
                           </Button>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <TransperentTableDropdownBtn />
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
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div>
                           <Button
                              type="button"
                              className="bg-[#f0f2ff] rounded h-6 flex items-center ps-1 pe-3"
                           >
                              <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                 <div className=" w-2 h-2">
                                    <MoneySvgIcon />
                                 </div>
                              </div>
                              <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                 000000
                              </div>
                           </Button>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <TransperentTableDropdownBtn />
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
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div>
                           <Button
                              type="button"
                              className="bg-[#f0f2ff] rounded h-6 flex items-center ps-1 pe-3"
                           >
                              <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                 <div className=" w-2 h-2">
                                    <MoneySvgIcon />
                                 </div>
                              </div>
                              <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                 000000
                              </div>
                           </Button>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <TransperentTableDropdownBtn />
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
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div>
                           <Button
                              type="button"
                              className="bg-[#f0f2ff] rounded h-6 flex items-center ps-1 pe-3"
                           >
                              <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                 <div className=" w-2 h-2">
                                    <MoneySvgIcon />
                                 </div>
                              </div>
                              <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                 000000
                              </div>
                           </Button>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <TransperentTableDropdownBtn />
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
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Lorem, ipsum.
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div>
                           <Button
                              type="button"
                              className="bg-[#f0f2ff] rounded h-6 flex items-center ps-1 pe-3"
                           >
                              <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                 <div className=" w-2 h-2">
                                    <MoneySvgIcon />
                                 </div>
                              </div>
                              <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                 000000
                              </div>
                           </Button>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <TransperentTableDropdownBtn />
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}
