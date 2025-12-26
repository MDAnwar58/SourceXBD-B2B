"use client";
import React, { Fragment, useCallback } from "react";
import { DashboardThreeDotsSvgIcon } from "@admin/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { LocalUrl } from "@/components/react/localhost";
import { Dropdown } from "flowbite-react";
import { AppDispatch } from "@admin/store";
import {
   approveCompany,
   declineCompany,
} from "@/admin/companies/features/CompanyAction";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});
const TableDropdownBtn = dynamic(
   () => import("@admin/components/TableDropdownBtn"),
   {
      ssr: false,
   }
);
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});
const AdminPagination = dynamic(() => import("@admin/components/Pagination"), {
   ssr: false,
});

const itemClass =
   "!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white rounded-lg py-1 px-3 transition-colors w-full flex justify-center mb-2";

type Company = {
   date: string;
   desc: string;
   id: number;
   user_image: string | null;
   name: string;
   user_email: string;
   user_name: string;
   user_phone: string;
   trust_point: number;
   status: string;
   points: number;
   u_id: number;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type Meta = {
   current_page: number;
   from: number;
   last_page: number;
   links: Link[];
   path: string;
   per_page: number;
   to: number;
   total: number;
};

type CompaniesData = {
   data: Company[];
   meta: Meta;
};

type Props = {
   onHandlePagination: (page: any) => void;
   onHandleResetTable?: (
      page: number,
      perPage: number,
      search: string
   ) => void | undefined;
   page: number;
   perPage: number;
   search: string;
};

export default function CompaniesTable({
   onHandlePagination,
   onHandleResetTable,
   page,
   perPage,
   search,
}: Props) {
   const localUrl: string = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();

   const onHandleApprove = useCallback(
      (companyId: number) => {
         dispatch(approveCompany({ id: companyId, page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );
   const onHandleDecline = useCallback(
      (companyId: number) => {
         dispatch(declineCompany({ id: companyId, page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const { companies_data } = useSelector((state: any) => state.admin.company);
   const CompaniesData = companies_data as CompaniesData;
   const { data = [], meta = {} } = CompaniesData;
   const Meta = meta as Meta;
   const { links = [], last_page } = Meta;
   const Companies: Company[] = data;

   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-7">
            <div className=" overflow-x-auto w-full">
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
                           Company ID
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
                           Seller name
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
                           Verification Status
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Trust Point
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
                     {Companies.length > 0
                        ? Companies.map((company, index: number) => {
                             let imageUrl: string = "";
                             const storeFileUrl: any =
                                company?.user_image?.toString();
                             const forwardSlash = "/";
                             const imagePath =
                                forwardSlash.concat(storeFileUrl);
                             imageUrl = localUrl.concat(imagePath);
                             //   console.log(company);
                             const buttons = [
                                {
                                   button: (
                                      <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                         <NavLink
                                            href={`/admin/company/${company?.id}`}
                                            className={itemClass}
                                         >
                                            View
                                         </NavLink>
                                      </Dropdown.Item>
                                   ),
                                },
                                {
                                   button:
                                      company?.status === "active" ? (
                                         <Dropdown.Item
                                            className="!p-0 !bg-transparent hover:!bg-transparent"
                                            onClick={() =>
                                               onHandleDecline(company?.id)
                                            }
                                         >
                                            <div className={itemClass}>
                                               Decline
                                            </div>
                                         </Dropdown.Item>
                                      ) : (
                                         <Dropdown.Item
                                            className="!p-0 !bg-transparent hover:!bg-transparent"
                                            onClick={() =>
                                               onHandleApprove(company?.id)
                                            }
                                         >
                                            <div className={itemClass}>
                                               Approve
                                            </div>
                                         </Dropdown.Item>
                                      ),
                                },
                             ];
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
                                      <div className="w-20">
                                         #{company?.u_id}
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div className="w-32">
                                         {company?.name}
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      <div className=" flex items-center w-24">
                                         {company?.user_image ? (
                                            <Img
                                               src={imageUrl}
                                               alt="image"
                                               width={100}
                                               height={100}
                                               className="rounded-full w-7 h-7 "
                                            />
                                         ) : null}
                                         <span className="ps-2">
                                            {company?.user_name}
                                         </span>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      {company?.user_email}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div className=" w-[140px]">
                                         <div className="flex justify-between">
                                            <div className="font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                                               Full Verifide
                                            </div>
                                            <div className="font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                                               {company?.points}%
                                            </div>
                                         </div>

                                         <div
                                            className="bg-[#d2d2d2] rounded w-[100%] h-1 relative"
                                            style={{
                                               boxShadow:
                                                  "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                                            }}
                                         >
                                            <div
                                               className="bg-[#90ff38] rounded h-1"
                                               style={{
                                                  boxShadow:
                                                     "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                                                  width: `${company?.points}%`,
                                               }}
                                            />
                                         </div>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div className=" w-[140px]">
                                         <div className="flex justify-between">
                                            <div className="font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                                               Score
                                            </div>
                                            <div className="font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                                               {company?.trust_point}%
                                            </div>
                                         </div>
                                         <div
                                            className="bg-[#d2d2d2] rounded w-[100%] h-1 relative"
                                            style={{
                                               boxShadow:
                                                  "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                                            }}
                                         >
                                            <div
                                               className="bg-[#4285f4] rounded h-1 w-[70%] relative"
                                               style={{
                                                  boxShadow:
                                                     "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                                                  width: `${company?.trust_point}%`,
                                               }}
                                            />
                                         </div>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <span
                                         className={`px-3 py-1 ${company?.status === "active" ? "bg-green-400" : "bg-red-400"} rounded text-white`}
                                      >
                                         {company?.status}
                                      </span>
                                   </td>
                                   <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <TableDropdownBtn buttons={buttons} />
                                   </td>
                                </tr>
                             );
                          })
                        : null}
                  </tbody>
               </table>
            </div>
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
