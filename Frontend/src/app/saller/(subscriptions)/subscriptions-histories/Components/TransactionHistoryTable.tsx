"use client";
import React, { Fragment, useCallback } from "react";
import { DeleteSvgIcon } from "@admin/components/SvgIcons";
import { useSelector } from "react-redux";
import { SallerState } from "@/app/saller/store";
import { EyeIcon } from "@heroicons/react/20/solid";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));
const NavLink = dynamic(() => import("@/components/NavLink"));
const SallerPagination = dynamic(
   () => import("@/app/saller/components/Pagination")
);
const CheckBox = dynamic(() => import("@/components/Checkbox"));

type Subscription = {
   amount: number;
   created_at: string;
   desc: string | null;
   duration: number | null;
   id: number;
   is_active_for_user: boolean;
   is_free: boolean;
   name: string;
   package: string;
   product_limit: number;
   title: string;
   type: string | null;
};

type SubscriptionHistory = {
   created_at: string;
   end_date: string;
   id: number;
   is_active: number;
   remaining_products: number;
   start_date: string;
   subscription: Subscription;
   subscription_id: number;
   user_id: number;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type ObjectData = {
   current_page: number;
   data: SubscriptionHistory[];
   from: number;
   last_page: number;
   links: Link[];
   to: number;
};

type Props = {
   getSubscriptionPlansHistory: any;
   page: number;
   perPage: number;
   search: string;
   setPage: any;
};

export default function TransactionHistoryTable({
   getSubscriptionPlansHistory,
   page,
   perPage,
   search,
   setPage,
}: Props) {
   const onHandlePagination = useCallback(
      (page: number): void => {
         setPage(page);
         getSubscriptionPlansHistory(page, perPage, search);
      },
      [perPage, search]
   );

   const { subscription_histories } = useSelector(
      (state: SallerState) => state.saller.subscription
   );

   const ObjectData: ObjectData | {} | any = subscription_histories;
   const { data = [], links = [], last_page } = ObjectData;
   const subscriptionHistories = data as SubscriptionHistory[] | any;
   const Links = links as Link[];
   console.log(Links);
   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card mb-7">
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-2">
               Subscription Plan Popularity
            </div>

            <div className=" overflow-x-auto w-full">
               <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className=" text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
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
                           Subscribtion
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Start Date
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Expired Date
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
                     {subscriptionHistories.length > 0
                        ? subscriptionHistories.map(
                             (
                                subscription: SubscriptionHistory,
                                index: number
                             ) => (
                                <tr
                                   key={index}
                                   className="bg-white border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700"
                                >
                                   <th
                                      scope="row"
                                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                                   >
                                      <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                                   </th>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div className=" flex items-center w-[131px]">
                                         <Img
                                            src="/assets/images/inventory-table-image.png"
                                            alt={"Company image"}
                                            width={100}
                                            height={100}
                                            className="rounded w-[38px] h-[38px] "
                                         />
                                         <div className="ps-2">
                                            <div>Saller name</div>
                                            <div className="text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                                               (Company name)
                                            </div>
                                         </div>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      <div className="w-[171px]">
                                         <div
                                            className="bg-[#8aa6e6] rounded-lg px-3 h-7 flex justify-center items-center text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                                            style={{ opacity: "0.8" }}
                                         >
                                            {subscription?.subscription?.name}/
                                            {
                                               subscription?.subscription
                                                  ?.package
                                            }
                                         </div>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      <div
                                         className="bg-[#7a9efd] rounded-lg w-[103px] h-7 text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold flex justify-center items-center"
                                         style={{ opacity: "0.8" }}
                                      >
                                         <span>{subscription?.start_date}</span>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      <div
                                         className="bg-[#7a9efd] rounded-lg w-[103px] h-7 text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold flex justify-center items-center"
                                         style={{ opacity: "0.8" }}
                                      >
                                         <span>{subscription?.end_date}</span>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      {subscription?.is_active === 1 ? (
                                         <div className="bg-[#34a853] rounded w-[94px] h-6 flex justify-center items-center gap-2">
                                            <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold">
                                               Running
                                            </div>
                                            <div className="bg-[#78ff62] rounded-[50%] w-2 h-2" />
                                         </div>
                                      ) : (
                                         <div className="bg-[#e14949] rounded w-[94px] h-6 flex justify-center items-center gap-2">
                                            <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold">
                                               Deactive
                                            </div>
                                            <div className="bg-[#ff0000] rounded-[50%] w-2 h-2" />
                                         </div>
                                      )}
                                   </td>
                                   <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div className="flex gap-1">
                                         <NavLink
                                            href={`/saller/subscription-history/${subscription?.id}`}
                                         >
                                            <div className="bg-[#e6e6e6] text-gray-700 rounded w-[27px] h-[22px] flex justify-center items-center">
                                               <div className="w-4 h-4">
                                                  <EyeIcon />
                                               </div>
                                            </div>
                                         </NavLink>
                                         <div className="bg-[#e6e6e6] text-gray-700 rounded w-[22px] h-[22px] flex justify-center items-center">
                                            <div className="w-3.5 h-3.5">
                                               <DeleteSvgIcon />
                                            </div>
                                         </div>
                                      </div>
                                   </td>
                                </tr>
                             )
                          )
                        : null}
                     {/* <tr className="bg-white border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                     >
                        <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                     </th>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center w-[131px]">
                           <Img
                              src="/assets/images/inventory-table-image.png"
                              alt={"Company image"}
                              width={100}
                              height={100}
                              className="rounded w-[38px] h-[38px] "
                           />
                           <div className="ps-2">
                              <div>Saller name</div>
                              <div className="text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                                 (Company name)
                              </div>
                           </div>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div
                           className="bg-[#8aa6e6] rounded-lg w-[124px] h-7 flex justify-center items-center text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                           style={{ opacity: "0.8" }}
                        >
                           Professional/Monthly
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div
                           className="bg-[#7a9efd] rounded-lg w-[103px] h-7 text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold flex justify-center items-center"
                           style={{ opacity: "0.8" }}
                        >
                           <span>20 - 07 -2024</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div
                           className="bg-[#7a9efd] rounded-lg w-[103px] h-7 text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold flex justify-center items-center"
                           style={{ opacity: "0.8" }}
                        >
                           <span>20 - 07 -2024</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div className="bg-[#fe1a1a] rounded w-[73px] h-6 text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold flex items-center justify-center">
                           Expired
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div className="bg-[#e6e6e6] text-gray-700 rounded w-[22px] h-[22px] flex justify-center items-center">
                           <div className="w-4 h-4">
                              <DeleteSvgIcon />
                           </div>
                        </div>
                     </td>
                  </tr> */}
                  </tbody>
               </table>
            </div>
         </div>
         <SallerPagination
            links={Links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
         />
      </Fragment>
   );
}
