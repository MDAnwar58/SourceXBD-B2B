"use client";
import React, { Fragment, useCallback } from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import { Dropdown } from "flowbite-react";
import dynamic from "next/dynamic";
const AdminPagination = dynamic(() => import("@admin/components/Pagination"));
const TableDropdownBtn = dynamic(
   () => import("@admin/components/TableDropdownBtn")
);
const NavLink = dynamic(() => import("@/components/NavLink"));
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const Img = dynamic(() => import("@/components/Image"));
const TableHeader = dynamic(() => import("@admin/components/TableHeader"));

const itemClass =
   "!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white rounded-lg py-1 px-3 transition-colors w-full flex justify-center mb-2";

type Admin = {
   created_at: string;
   email: string;
   email_verified_at: string | null;
   id: number;
   name: string;
   phone: string;
   role: string;
   roles: any[];
   status: string;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type AdminData = {
   current_page: number;
   data: Admin[];
   from: number;
   last_page: number;
   links: Link[];
   to: number;
   total: number;
};

type Props = {
   onHandleChangeAdminStatus: (id: string) => void;
   onHandlePagination: (page: number) => void;
   onHandleResetTable: (page: number, perPage: number, search: string) => void;
};

export default function AccessControlTable({
   onHandleChangeAdminStatus,
   onHandlePagination,
   onHandleResetTable,
}: Props) {
   const { admins_data = {} } = useSelector(
      (state: AdminState) => state.admin.accessControl
   );
   const AdminData = admins_data as AdminData;
   const {
      current_page,
      data = [],
      from,
      last_page,
      links = [],
      to,
      total,
   } = AdminData;
   const admins = data as Admin[];
   const Links = links as Link[];

   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card  mb-7">
            <TableHeader
               listLabel="Access Control List"
               link="/admin/security-settings/access-control/create"
               onHandleResetTable={onHandleResetTable}
            />
            <div className="overflow-x-auto">
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
                           Name
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
                           Email
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Id Number
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
                     {admins?.length > 0
                        ? admins.map((admin, i) => {
                             const buttons = [
                                {
                                   button:
                                      admin.status === "active" ? (
                                         <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                            <div
                                               className={itemClass}
                                               onClick={() =>
                                                  onHandleChangeAdminStatus(
                                                     String(admin?.id)
                                                  )
                                               }
                                            >
                                               Inactive
                                            </div>
                                         </Dropdown.Item>
                                      ) : (
                                         <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                            <div
                                               className={itemClass}
                                               onClick={() =>
                                                  onHandleChangeAdminStatus(
                                                     String(admin?.id)
                                                  )
                                               }
                                            >
                                               Acitve
                                            </div>
                                         </Dropdown.Item>
                                      ),
                                },
                                {
                                   button: (
                                      <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                         <NavLink
                                            href={`/admin/security-settings/access-control/edit/${admin?.id}`}
                                            className={itemClass}
                                         >
                                            Edit
                                         </NavLink>
                                      </Dropdown.Item>
                                   ),
                                },
                                {
                                   button: (
                                      <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                         <div
                                            className={itemClass}
                                            onClick={() => {}}
                                         >
                                            Delete
                                         </div>
                                      </Dropdown.Item>
                                   ),
                                },
                             ];
                             return (
                                <tr
                                   key={i + 1}
                                   className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700"
                                >
                                   <th
                                      scope="row"
                                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                                   >
                                      {i + 1}
                                      {/* <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" /> */}
                                   </th>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div className=" flex items-center gap-x-2 w-28">
                                         <Img
                                            src="/assets/images/user-details.png"
                                            alt="..."
                                            width={70}
                                            height={70}
                                            className="rounded-full w-7 h-7"
                                         />
                                         <div>{admin?.name}</div>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      {admin?.role}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div className="w-32">{admin?.email}</div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div className="w-7">12-A</div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div
                                         className={`capitalize ${
                                            admin?.status === "active"
                                               ? "bg-[#90ff38]"
                                               : "bg-[#ff3838]"
                                         } text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded w-[61px] h-6 flex justify-center items-center`}
                                      >
                                         {admin?.status}
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <TableDropdownBtn buttons={buttons} />
                                   </td>
                                </tr>
                             );
                          })
                        : null}
                     {/* <tr className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                        <th
                           scope="row"
                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                        >
                           <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                        </th>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
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
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                           Seller
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="w-32">info1120@gmail.com</div>
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="w-7">12-A</div>
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="bg-[#dcdcdc] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded  w-[79px] h-6  flex justify-center items-center">
                              Non-login
                           </div>
                        </td>
                        <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="flex items-center gap-x-1">
                              <DownloadBtn />
                              <DeleteBtn />
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
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                           Seller
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="w-32">info1120@gmail.com</div>
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="w-7">12-A</div>
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="bg-[#ff8059]  text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded  w-[94px] h-6  flex justify-center items-center">
                              Unconfrimed
                           </div>
                        </td>
                        <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="flex items-center gap-x-1">
                              <DownloadBtn />
                              <DeleteBtn />
                           </div>
                        </td>
                     </tr> */}
                  </tbody>
               </table>
            </div>
         </div>
         <AdminPagination
            links={Links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
         />
      </Fragment>
   );
}
