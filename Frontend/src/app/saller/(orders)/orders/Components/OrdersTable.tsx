"use client";
import React, { Fragment, useCallback, useEffect } from "react";
import { MoneySvgIcon } from "@admin/components/SvgIcons";
import { Dropdown } from "flowbite-react";
import { SallerState } from "@/app/saller/store";
import { useSelector } from "react-redux";
import { useDateWithMonthFormat } from "@/components/react/date";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const Img = dynamic(() => import("@/components/Image"));
const SallerPagination = dynamic(
   () => import("@/saller/components/Pagination")
);
const TableDropdownBtn = dynamic(
   () => import("@/app/saller/components/TableDropdownBtn")
);
const NavLink = dynamic(() => import("@/components/NavLink"));

const itemClass =
   "!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white rounded-lg py-1 px-3 transition-colors w-full flex justify-center mb-2";

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type Meta = {
   current_page: number;
   from: number;
   last_page: number;
   links: Array<Link[]>;
   path: string;
   per_page: number;
   to: number;
   total: number;
};

type User = { image: string | null; name: string };
type Seller = { image: string | null; name: string };

type Product = {
   image: string;
   name: string;
};

type Data = {
   amount: string;
   company: string;
   created_at: string;
   id: number;
   product: Product;
   selller: Seller;
   status: string;
   pay_status: string;
   transaction_id: any;
   user: User;
};

type OrderDatas = {
   data: Array<Data[]>;
   meta: Meta;
};

type Props = {
   getOrders: (page: number, perPage: number, search: string) => void;
   page: number;
   setPage: any;
   perPage: number;
   search: string;
   onDeleteHandle: (
      id: number,
      page: number,
      perPage: number,
      search: string
   ) => void;
};

export default function OrdersTable({
   getOrders,
   page,
   setPage,
   perPage,
   search,
   onDeleteHandle,
}: Props) {
   const onHandlePagination = useCallback(
      (page: number): void => {
         setPage(page);
         getOrders(page, perPage, search);
      },
      [perPage, search]
   );

   const { orders_data } = useSelector(
      (state: SallerState) => state.saller.orders
   );
   const OrderDatas: OrderDatas | {} = orders_data;
   const { data = [], meta = {} } = OrderDatas as OrderDatas;
   const Meta = meta as Meta;
   const { links, to, from, current_page, last_page } = Meta;
   const orders = data as Data[] | [];

   useEffect(() => {
      if (current_page !== last_page && from === null && to === null) {
         getOrders(Number(last_page), perPage, search);
      }
   }, [last_page, from, to, perPage, search]);

   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-7">
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
                        Order ID
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Buyer name
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Order Date
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Total Amount
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Pay Status
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
                  {orders.length > 0
                     ? orders.map((order: Data, index: number) => {
                          const date = useDateWithMonthFormat(
                             order?.created_at
                          );

                          const buttons = [
                             {
                                button: (
                                   <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                      <NavLink
                                         href={`/saller/invoice/${order?.id}`}
                                         className={itemClass}
                                      >
                                         Invoice
                                      </NavLink>
                                   </Dropdown.Item>
                                ),
                             },
                             {
                                button: (
                                   <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                      <NavLink
                                         href={`/saller/order-edit/${order?.id}`}
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
                                         onClick={() =>
                                            onDeleteHandle(
                                               order?.id,
                                               page,
                                               perPage,
                                               search
                                            )
                                         }
                                      >
                                         Delete
                                      </div>
                                   </Dropdown.Item>
                                ),
                             },
                          ];

                          return (
                             <tr
                                key={index}
                                className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700"
                             >
                                <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                                >
                                   <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                                </th>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   #{order?.transaction_id}
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                   {order?.user && (
                                      <div className=" flex items-center gap-x-2">
                                         <Img
                                            src="/assets/images/user.png"
                                            alt="..."
                                            width={70}
                                            height={70}
                                            className="rounded-full w-7 h-7"
                                         />
                                         <div>{order?.user?.name}</div>
                                      </div>
                                   )}
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   {date}
                                </td>
                                <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   {order?.amount && (
                                      <div>
                                         <span className=" rounded h-6 flex items-center ps-1 pe-3">
                                            <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                               <div className=" w-2 h-2">
                                                  <MoneySvgIcon />
                                               </div>
                                            </div>
                                            <div className=" text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                               {order?.amount}
                                            </div>
                                         </span>
                                      </div>
                                   )}
                                </td>

                                <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   <div className="w-[150px]">
                                      <span
                                         className={`${order?.pay_status === "Unpaid" ? "bg-[rgba(254,245,14,0.60)] text-[#2f2f2f]" : " bg-[#39a85b]"} text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1`}
                                      >
                                         {order?.pay_status}
                                      </span>
                                   </div>
                                </td>

                                <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                   <div
                                      className={`${
                                         order?.status === "Pending"
                                            ? "bg-yellow-400 group-hover:bg-[#DDBA7A]"
                                            : order?.status === "On The Way"
                                              ? "bg-[#1873A2]"
                                              : order?.status === "Cancled"
                                                ? "bg-[#B8401C]"
                                                : "bg-[rgba(57,168,91,0.80)]"
                                      } rounded w-[94px] h-6 flex items-center justify-center`}
                                   >
                                      {order?.status}
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
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center gap-x-2">
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
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        July 20, 2024
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div>
                           <Button
                              type="button"
                              className=" rounded h-6 flex items-center ps-1 pe-3"
                           >
                              <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                 <div className=" w-2 h-2">
                                    <MoneySvgIcon />
                                 </div>
                              </div>
                              <div className=" text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                 000000
                              </div>
                           </Button>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-gray-700 text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div className="bg-[rgba(254,245,14,0.60)] text-[#2f2f2f] rounded w-[94px] h-6 flex items-center justify-center">
                           Shipped
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <TableDropdownBtn buttons={buttons} />
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
                        12503-55802
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                        <div className=" flex items-center gap-x-2">
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
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        July 20, 2024
                     </td>
                     <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div>
                           <Button
                              type="button"
                              className=" rounded h-6 flex items-center ps-1 pe-3"
                           >
                              <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                 <div className=" w-2 h-2">
                                    <MoneySvgIcon />
                                 </div>
                              </div>
                              <div className=" text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                 000000
                              </div>
                           </Button>
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td text-white text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <div className="bg-[rgba(84,56,255,0.60)] rounded w-[94px] h-6 flex items-center justify-center">
                           Pending
                        </div>
                     </td>
                     <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                        <TableDropdownBtn buttons={buttons} />
                     </td>
                  </tr> */}
               </tbody>
            </table>
         </div>

         <SallerPagination
            links={links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
         />
      </Fragment>
   );
}
