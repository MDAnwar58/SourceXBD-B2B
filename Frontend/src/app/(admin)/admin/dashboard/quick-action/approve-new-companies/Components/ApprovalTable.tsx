"use client";
import {
   CrosSvgIcon,
   DestorySvgIcon,
   DownloadSvgIcon,
   GreenApproveSvgIcon,
} from "@admin/components/SvgIcons";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import { LocalUrl } from "@/components/react/localhost";
import truncate from "html-truncate";
import dynamic from "next/dynamic";
const ApproveTableHeader = dynamic(() => import("./ApproveTableHeader"), {
   ssr: false,
});
const AdminPagination = dynamic(() => import("@admin/components/Pagination"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});

const formatDate = (isoString: string): string => {
   const date = new Date(isoString);
   const day = date.getDate().toString().padStart(2, "0"); // Ensure 2 digits for the day
   const month = date.toLocaleString("en-GB", { month: "short" }); // Get short month
   const year = date.getFullYear();
   return `${day} ${month}, ${year}`;
};

type Company = {
   date: string;
   desc: string;
   id: number;
   industry: string;
   logo: string;
   name: string;
   points: number;
   status: string;
   trust_point: number;
   u_id: number;
   user_email: string;
   user_image: string;
   user_name: string;
   user_phone: string;
};

type Image = {
   active: boolean;
   label: string;
   url: string | null;
};

type Meta = {
   current_page: number;
   from: number;
   last_page: number;
   links: Image[];
   path: string;
   per_page: number;
   to: number;
   total: number;
};

type ApproveCompanyData = {
   data: Company[];
   meta: Meta;
};

type Props = {
   onHandlePagination?: (page: any) => void | undefined;
   onHandleSearchbtn?: (search: string) => void | undefined;
   onHandleResetTable?: (
      page: number,
      perPage: number,
      search: string
   ) => void | undefined;
   searchApproveRef: any;
   onHandleDeclineBtn: (id: number) => void;
   onHandledeleteBtn: (id: number) => void;
};

export default function ApprovalTable({
   onHandlePagination,
   onHandleSearchbtn,
   onHandleResetTable,
   searchApproveRef,
   onHandleDeclineBtn,
   onHandledeleteBtn,
}: Props) {
   const localUrl = LocalUrl();
   const { approve_companies = {} } = useSelector(
      (state: AdminState) => state.admin.dashboard
   );
   const ApproveCompanyData = approve_companies as ApproveCompanyData;
   const { data = [], meta = {} } = ApproveCompanyData;
   const approveCompanies = data as Company[];
   const Meta = meta as Meta;
   const { links = [], last_page } = Meta;

   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card mb-5">
            <ApproveTableHeader
               listLabel="Approve Copmanies"
               onHandleSearchBtn={onHandleSearchbtn}
               searchRef={searchApproveRef}
            />
            <div className=" overflow-x-auto w-full">
               <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                     <tr>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th-l text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           S.No
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
                           Seller Name
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Discription
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           category
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
                           Date
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th-r text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        ></th>
                     </tr>
                  </thead>
                  <tbody>
                     {approveCompanies?.length > 0
                        ? approveCompanies.map((company, index: number) => {
                             const imageUrl = localUrl.concat(company?.logo);
                             let date: string = "";
                             if (company?.date !== undefined) {
                                date = formatDate(company?.date) as string;
                             }
                             const desc = truncate(company?.desc, 31);
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
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                                      #{company?.u_id}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div className=" flex items-center">
                                         {company?.logo ? (
                                            <Img
                                               src={imageUrl}
                                               alt="image"
                                               width={100}
                                               height={100}
                                               className="rounded-full w-7 h-7"
                                            />
                                         ) : (
                                            <Img
                                               src="/assets/images/approval.png"
                                               alt="image"
                                               width={100}
                                               height={100}
                                               className="rounded-full w-7 h-7"
                                            />
                                         )}
                                         <span className="ps-2">
                                            {company?.name}
                                         </span>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      {company?.user_name}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                                      <p
                                         dangerouslySetInnerHTML={{
                                            __html: desc,
                                         }}
                                      />
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      Lorem, ipsum.
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <Button
                                         type="button"
                                         className={`${company?.status === "active" ? "bg-[rgba(66,133,244,0.80)]" : "bg-red-400"} text-[#ffffff] rounded ps-2 pe-3 py-[.35rem] flex items-center gap-x-2`}
                                      >
                                         {company?.status === "active" ? (
                                            <div className="w-4 h-4">
                                               <GreenApproveSvgIcon />
                                            </div>
                                         ) : (
                                            <div className="bg-red-500 p-1 rounded-full">
                                               <div className="w-2.5 h-2.5">
                                                  <CrosSvgIcon />
                                               </div>
                                            </div>
                                         )}
                                         <span>
                                            {company?.status === "active"
                                               ? "Approved"
                                               : "Declined"}
                                         </span>
                                      </Button>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      {date}
                                   </td>
                                   <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div
                                         className={`flex ${company?.status !== "active" ? " justify-end" : ""} gap-3`}
                                      >
                                         {company?.status === "active" ? (
                                            <Button
                                               type="button"
                                               className="bg-[#e6e6e6] rounded w-[22px] h-[22px] flex justify-center items-center"
                                               onClick={() =>
                                                  onHandleDeclineBtn(
                                                     company?.id
                                                  )
                                               }
                                            >
                                               <div className="w-4 h-4">
                                                  <DownloadSvgIcon />
                                               </div>
                                            </Button>
                                         ) : null}
                                         <Button
                                            type="button"
                                            className="bg-[#e6e6e6] rounded w-[22px] h-[22px] flex justify-center items-center"
                                            onClick={() =>
                                               onHandledeleteBtn(company?.id)
                                            }
                                         >
                                            <div className="w-4 h-4">
                                               <DestorySvgIcon />
                                            </div>
                                         </Button>
                                      </div>
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
