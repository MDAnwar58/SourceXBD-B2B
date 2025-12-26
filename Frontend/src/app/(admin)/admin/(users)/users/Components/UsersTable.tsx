"use client";
import React from "react";
import { EyeSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const CheckBox = dynamic(() => import("@/components/Checkbox"), { ssr: false });
const Img = dynamic(() => import("@/components/Image"), { ssr: false });
const TableDropdownBtn = dynamic(
   () => import("@admin/components/TableDropdownBtn"),
   { ssr: false }
);
const NavLink = dynamic(() => import("@/components/NavLink"), { ssr: false });

type User = {
   company: string | null;
   created_at: string;
   email: string;
   id: number;
   image: any[];
   name: string;
   phone: string | null;
   role: string;
   status: string;
};

type UsersTableProps = {
   users: User[];
};

export default function UsersTable({ users }: UsersTableProps) {
   return (
      <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-7">
         <div className=" overflow-x-auto w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3 table-head-th-l">
                        {/* <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" /> */}
                        S. No
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
                  {users && users.length > 0 ? (
                     users?.map((user, index: number) => {
                        return (
                           <tr
                              key={index + 1}
                              className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700"
                           >
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                              >
                                 {index + 1}
                                 {/* <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" /> */}
                              </th>
                              <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 #{user?.id}
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
                                    <span className="ps-2">{user?.name}</span>
                                 </div>
                              </td>
                              <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 {user?.email}
                              </td>
                              <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 <span className="bg-[rgba(47,47,47,0.80)] group-hover:bg-[#e5e1e1] text-[#ffffff] group-hover:text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-[1.15rem] py-1">
                                    {user?.role}
                                 </span>
                              </td>
                              <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 {user?.status === "active" ? (
                                    <Button
                                       type="button"
                                       className="bg-[rgba(57,168,91,0.80)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                                    >
                                       Active
                                    </Button>
                                 ) : (
                                    <Button
                                       type="button"
                                       className="bg-[rgba(255,0,0,0.90)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1"
                                    >
                                       Inactive
                                    </Button>
                                 )}
                              </td>
                              <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 <NavLink
                                    href={`/admin/user/${user?.id}`}
                                    className=""
                                 >
                                    <div className="w-5 h-5 text-gray-600">
                                       <EyeSvgIcon />
                                    </div>
                                 </NavLink>
                              </td>
                           </tr>
                        );
                     })
                  ) : (
                     <tr>
                        <td
                           colSpan={7}
                           className="px-6 py-4 table-body-td-r text-center font-['Arial-Bold',_sans-serif] text-md font-bold"
                        >
                           Data not found
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
}
