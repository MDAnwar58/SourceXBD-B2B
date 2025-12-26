"use client";
import React, { Fragment, useEffect } from "react";
import {
   CheckSvgIcon,
   DeleteSvgIcon,
   EyePSvgIcon,
} from "@admin/components/SvgIcons";
import CheckBox from "@/components/Checkbox";
import Img from "@/components/Image";
import TableDropdownBtn from "@admin/components/TableDropdownBtn";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import AdminPagination from "../../../components/Pagination";
import { LocalUrl } from "@/components/react/localhost";
import { useDateWithMonthFormatExtra } from "@/components/react/date";
import NavLink from "@/components/NavLink";
import Button from "@/components/Button";
import { getBuyerComplaints } from "@/admin/buyer-complaints/features/BuyerComplaintAction";

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type User = {
   id: number;
   image: Image[];
   name: string;
};

type BuyerComplaint = {
   created_at: string;
   desc: string;
   id: number;
   is_read: number;
   report_id: string;
   user: User;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type BuyerComplaintData = {
   current_page: number;
   data: BuyerComplaint[];
   from: number;
   last_page: number;
   links: Link[];
   to: number;
};

type Props = {
   onHandleResetTable: (page: number, perPage: number, search: string) => void;
   onHandlePagination: (page: any) => void;
   onDeleteHandle: (id: number) => void;
   perPage: number;
   search: string;
};

export default function BuyerComplaintsTable({
   onHandleResetTable,
   onHandlePagination,
   onDeleteHandle,
   perPage,
   search,
}: Props) {
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();

   const { buyerComplaints = {} } = useSelector(
      (state: AdminState) => state.admin.buyerComplaint
   );
   const BuyerComplaints = buyerComplaints as BuyerComplaintData;
   const {
      current_page,
      data = [],
      last_page,
      links = [],
      to,
      from,
   } = BuyerComplaints;
   const buyerComplains = data as BuyerComplaint[];
   const Links = links as Link[];

   useEffect(() => {
      if (current_page !== last_page && from === null && to === null) {
         const page = last_page as number;
         dispatch(getBuyerComplaints({ page, perPage, search }));
      }
   }, [dispatch, current_page, last_page, from, to, perPage, search]);

   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-7">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th-l text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold"
                     >
                        S. No
                        {/* <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" /> */}
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Complain ID
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
                  {buyerComplains?.length > 0
                     ? buyerComplains.map((buyerComplain, i: number) => {
                          let imageUrl: string = "";
                          const storeFilePath = buyerComplain?.user?.image.map(
                             (image) => image.image
                          );
                          const imagePath = storeFilePath.join(",");
                          const forwardSlash = "/";
                          const storeImageUrl = forwardSlash.concat(imagePath);
                          imageUrl = localUrl.concat(storeImageUrl);
                          let date = "";
                          if (buyerComplain?.created_at) {
                             date = useDateWithMonthFormatExtra(
                                buyerComplain?.created_at
                             );
                          }
                          return (
                             <tr
                                key={i + 1}
                                className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700"
                             >
                                <th
                                   scope="row"
                                   className="px-6 py-4 text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold whitespace-nowrap dark:text-white table-body-td-l"
                                >
                                   <div className="w-9">{i + 1}</div>
                                   {/* <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" /> */}
                                </th>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   <div className="w-24">
                                      #{buyerComplain?.report_id}
                                   </div>
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                   <div className=" flex items-center gap-x-2 w-36">
                                      {buyerComplain?.user?.image.length > 0 ? (
                                         <Img
                                            src={imageUrl}
                                            alt="user avatar"
                                            width={70}
                                            height={70}
                                            className="rounded-full w-7 h-7"
                                         />
                                      ) : (
                                         <Img
                                            src="/assets/images/user-demo-avatar.png"
                                            alt="..."
                                            width={70}
                                            height={70}
                                            className="rounded-full w-7 h-7"
                                         />
                                      )}
                                      <div>{buyerComplain?.user?.name}</div>
                                   </div>
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   <div className="w-96">
                                      {buyerComplain?.desc}
                                   </div>
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   <div className="w-20">{date}</div>
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   {buyerComplain?.is_read === 1 && (
                                      <div className="bg-[#90ff38] rounded w-16 h-6 flex items-center justify-center gap-x-[.20rem]">
                                         <span className="w-4 h-4">
                                            <CheckSvgIcon />
                                         </span>
                                         <span>Done</span>
                                      </div>
                                   )}
                                </td>
                                <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   <div className="flex flex-row gap-2">
                                      <NavLink
                                         href={`/admin/buyer-complain/${buyerComplain?.id}`}
                                      >
                                         <div className="bg-white text-gray-600 shadow-admin-card rounded-lg py-1 px-[.3rem]">
                                            <div className="w-5 h-5">
                                               <EyePSvgIcon />
                                            </div>
                                         </div>
                                      </NavLink>
                                      <Button
                                         type="button"
                                         onClick={() =>
                                            onDeleteHandle(buyerComplain?.id)
                                         }
                                      >
                                         <div className="bg-white text-gray-600 hover:text-red-500 transition-all duration-100 ease-linear shadow-admin-card rounded-lg py-1 px-[.3rem]">
                                            <div className="w-5 h-5">
                                               <DeleteSvgIcon />
                                            </div>
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
         <AdminPagination
            links={Links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
            resetBtn={true}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
