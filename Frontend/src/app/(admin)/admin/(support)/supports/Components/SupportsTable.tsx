"use client";
import React, { Fragment } from "react";
import { CheckSvgIcon, EyeSvgIcon } from "@admin/components/SvgIcons";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import { useDateformat } from "@/components/react/date";
import { LocalUrl } from "@/components/react/localhost";
import { useShortenText } from "@/components/react/truncate-text";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));
const AdminPagination = dynamic(() => import("@admin/components/Pagination"));
const Img = dynamic(() => import("@/components/Image"));

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type User = {
   id: number;
   name: string;
   email: string;
   phone: string;
   role: string;
   status: string;
   image: Image[];
};

type SupportRequest = {
   answer: string | null;
   created_at: string;
   date: string;
   id: number;
   status: string;
   subject: string;
   user: User;
   user_id: number;
};

type SupportRequestData = {
   data: SupportRequest[];
   current_page: number;
   from: number;
   last_page: number;
   links: any[];
   to: number;
};

type Props = {
   onHandlePagination: (page: number) => void;
   onHandleResetTable: (page: number, perPage: number, search: string) => void;
};

export default function SupportsTable({
   onHandlePagination,
   onHandleResetTable,
}: Props) {
   const localUrl = LocalUrl();

   const { support_requests_data = {} } = useSelector(
      (state: AdminState) => state.admin.support
   );
   const SupportRequestsData = support_requests_data as SupportRequestData;
   const { data = [], links = [], last_page } = SupportRequestsData;
   const Supports = data as SupportRequest[];

   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-7">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3 table-head-th-l">
                        S. No
                        {/* <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" /> */}
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
                  {Supports.length > 0
                     ? Supports.map((support, index: number) => {
                          const date = useDateformat(support.created_at);
                          const Subject = useShortenText(support?.subject, 50);
                          const storeFileArray = support?.user?.image.map(
                             (user: Image) => {
                                const forwardSlash = "/";
                                const storeFilePath = forwardSlash.concat(
                                   user.image
                                );
                                const fileUrl = localUrl.concat(storeFilePath);
                                return fileUrl;
                             }
                          );
                          const imageUrl = storeFileArray.toString();

                          return (
                             <tr
                                key={index + 1}
                                className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700"
                             >
                                <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                                >
                                   {index + 1}
                                   {/* <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" /> */}
                                </th>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   <div className="w-20">#{support.id}</div>
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                   <div className=" flex items-center gap-x-2 w-28">
                                      {imageUrl ? (
                                         <Img
                                            src={imageUrl}
                                            alt="user avartar"
                                            width={70}
                                            height={70}
                                            className="rounded-full w-7 h-7"
                                         />
                                      ) : (
                                         <Img
                                            src="/assets/images/user-demo-avatar.png"
                                            alt="user avartar"
                                            width={70}
                                            height={70}
                                            className="rounded-full w-7 h-7"
                                         />
                                      )}
                                      <div>{support?.user?.name}</div>
                                   </div>
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   <div className="w-52">{Subject}</div>
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   <div className="w-20">{date}</div>
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   <div
                                      className={`${support?.status === "pending" ? "bg-[#ffd138]" : "bg-[#90ff38]"} text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded w-16 h-6 flex items-center justify-center gap-x-1`}
                                   >
                                      {support?.status !== "pending" ? (
                                         <div className="w-4 h-4">
                                            <CheckSvgIcon />
                                         </div>
                                      ) : null}
                                      <span>{support?.status}</span>
                                   </div>
                                </td>
                                <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   {/* <TableDropdownBtn /> */}
                                   <NavLink
                                      href={`/admin/support/${support?.id}`}
                                   >
                                      <div className="bg-white text-gray-500 hover:text-gray-900 shadow-admin-card rounded-md w-7 h-6 flex justify-center items-center">
                                         <div className="w-3.5 h-3.5">
                                            <EyeSvgIcon />
                                         </div>
                                      </div>
                                   </NavLink>
                                </td>
                             </tr>
                          );
                       })
                     : null}
               </tbody>
            </table>
         </div>

         <AdminPagination
            links={links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
            resetBtn={true}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
