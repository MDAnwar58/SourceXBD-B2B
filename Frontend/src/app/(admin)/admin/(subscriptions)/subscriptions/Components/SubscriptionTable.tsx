"use client";
import React from "react";
import { MoneySvgIcon } from "@admin/components/SvgIcons";
import { AdminState } from "@admin/store";
import { useSelector } from "react-redux";
import { useDateformat } from "@/components/react/date";

type Subscription = {
   id: number;
   name: string;
   title: string;
   package: string;
   duration: string;
   product_limit: number;
   amount: number | any;
   is_free: any;
   contents: any;
};

type User = {
   email: string;
   id: number;
   name: string;
   phone: string;
   role: string;
   status: string;
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
   user: User;
   user_id: number;
};

type SubscriptionHistoryData = {
   data: SubscriptionHistory[];
};

export default function SubscriptionTable() {
   const { subscription_histories_data = {} } = useSelector(
      (state: AdminState) => state.admin.subscription
   );
   const SubscriptionHistoryData =
      subscription_histories_data as SubscriptionHistoryData;
   const { data = [] } = SubscriptionHistoryData;
   const SubscriptionHistory = data as SubscriptionHistory[];

   return (
      <div className="col-span-12">
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card mb-20">
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-2">
               Recent Subscription Plan Sells List
            </div>

            <div className=" overflow-x-auto w-full">
               <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className=" text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                     <tr>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th-l text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           S. No
                           {/* <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" /> */}
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Subscription ID
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
                           Plan Name
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Package
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
                           End Date
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Price
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Product limit
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th-r text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        ></th>
                     </tr>
                  </thead>
                  <tbody>
                     {SubscriptionHistory.length > 0
                        ? SubscriptionHistory.map((history, index: number) => {
                             const startDate = useDateformat(
                                history?.start_date
                             );
                             const endDate = useDateformat(history?.end_date);
                             return (
                                <tr
                                   key={index + 1}
                                   className="bg-white border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700"
                                >
                                   <th
                                      scope="row"
                                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                                   >
                                      {index + 1}
                                      {/* <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" /> */}
                                   </th>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      #{history?.subscription?.id}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      {history?.user?.name}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      {history?.subscription?.name}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      {history?.subscription?.package}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      {startDate}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      {endDate}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div>
                                         <span className=" rounded h-6 flex items-center ps-1 pe-3">
                                            <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                               <div className=" w-2 h-2">
                                                  <MoneySvgIcon />
                                               </div>
                                            </div>
                                            <div className=" text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                               {history?.subscription?.is_free
                                                  ? "Free"
                                                  : history?.subscription
                                                       ?.amount}
                                            </div>
                                         </span>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                      <div className="w-32">
                                         <span className="w-auto bg-blue-500 px-3 py-1 rounded-lg text-white">
                                            {
                                               history?.subscription
                                                  ?.product_limit
                                            }
                                         </span>
                                      </div>
                                   </td>
                                   <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      {/* <TableDropdownBtn /> */}
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
                           Basic
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                           Monthly
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div>
                              <span className=" rounded h-6 flex items-center ps-1 pe-3">
                                 <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                    <div className=" w-2 h-2">
                                       <MoneySvgIcon />
                                    </div>
                                 </div>
                                 <div className=" text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                    Free
                                 </div>
                              </span>
                           </div>
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="bg-[#98b0ee] text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-sm font-bold rounded w-[94px] h-[23px] flex items-center gap-x-1 px-2">
                              <div className="w-4 h-4">
                                 <UserManSvgIcon />
                              </div>
                              <div className="">000000</div>
                           </div>
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="bg-[rgba(66,133,244,0.60)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded w-[94px] h-6 flex justify-center items-center">
                              <div>Normal</div>
                           </div>
                        </td>
                        <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <TableDropdownBtn />
                        </td>
                     </tr> */}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
}
