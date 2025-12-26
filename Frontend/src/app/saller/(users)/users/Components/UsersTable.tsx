import React from "react";
import { DashboardThreeDotsSvgIcon } from "@/app/(admin)/admin/components/SvgIcons";
import Button from "@/components/Button";
import CheckBox from "@/components/Checkbox";
import Img from "@/components/Image";
import TableDropdownBtn from "../../../components/TableDropdownBtn";

export default function UsersTable() {
   return (
      <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-7">
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
                        User ID
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
                        Email
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Role
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
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff]  group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(255,0,0,0.90)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
                  <tr className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center">
                           <Img
                              src="/assets/images/user-list.png"
                              alt="image"
                              width={100}
                              height={100}
                              className="rounded-full w-7 h-7 "
                           />
                           <span className="ps-2">Rofiqul Islam</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        Info11223@gmail.com
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1"
                        >
                           Seller
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <Button
                           type="button"
                           className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                        >
                           Active
                        </Button>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        {/* <TableDropdownBtn /> */}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}
