"use client";
import React, { Fragment, useCallback } from "react";
import CheckBox from "@/components/Checkbox";
import Img from "@/components/Image";
import TableDropdownBtn from "@/saller/components/TableDropdownBtn";
import { Dropdown } from "flowbite-react";
import NavLink from "@/components/NavLink";
import { SallerState } from "@/saller/store";
import { useSelector } from "react-redux";
import { LocalUrl } from "@/components/react/localhost";
import SallerPagination from "@/saller/components/Pagination";
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
   category: string;
};

type Data = {
   address: string;
   amount: string;
   company: string;
   created_at: string;
   id: number;
   product: Product;
   selller: Seller;
   status: string;
   pay_status: string;
   transaction_id: any;
   qty: number;
   user: User;
};

type OrderDatas = {
   data: Array<Data[]>;
   meta: Meta;
};

type Props = {
   setPage: React.Dispatch<React.SetStateAction<number>>;
   perPage: number;
   search: string;
   getInventories: (page: number, perPage: number, search: string) => void;
};

export default function InventoryTable({
   setPage,
   perPage,
   search,
   getInventories,
}: Props) {
   const localUrl = LocalUrl();

   const onHandlePagination = useCallback(
      (page: number): void => {
         setPage(page);
         getInventories(page, perPage, search);
      },
      [perPage, search]
   );

   const { orders_data } = useSelector(
      (state: SallerState) => state.saller.inventory
   );
   const OrderDatas: OrderDatas | {} = orders_data;
   const { data = [], meta = {} } = OrderDatas as OrderDatas;
   const Meta = meta as Meta;
   const { links = [], last_page } = Meta;
   const orders = data as Data[] | [];

   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card mb-7">
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
                           Product Name
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Buyer
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Location
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Quantity
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Delivery Status
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
                     {orders.length > 0 ? (
                        orders.map((order, index: number) => {
                           const buttons = [
                              {
                                 button: (
                                    <Dropdown.Item
                                       className="!p-0 !bg-transparent hover:!bg-transparent"
                                       onClick={() => console.log("edit")}
                                    >
                                       <NavLink href="" className={itemClass}>
                                          Invoice
                                       </NavLink>
                                    </Dropdown.Item>
                                 ),
                              },
                           ];

                           const imagePath = localUrl + order?.product?.image;
                           return (
                              <tr
                                 key={index}
                                 className="group bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700"
                              >
                                 <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                                 >
                                    <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                                 </th>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <div className=" flex items-center w-[201px]">
                                       <Img
                                          src={imagePath.toString()}
                                          alt="image"
                                          width={100}
                                          height={100}
                                          className="rounded w-[38px] h-[38px] "
                                       />
                                       <div className="ps-2">
                                          <div>{order?.product?.name}</div>
                                          <div className="text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                                             ({order?.product?.category})
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                    {order?.user && (
                                       <div className=" flex items-center gap-x-2 w-[131px]">
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
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                    <div className="w-[151px]">
                                       {order?.address}
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <div
                                       className="bg-[#98b0ee] rounded w-14 h-[26px] text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold flex justify-center items-center"
                                       style={{ opacity: "0.8" }}
                                    >
                                       {order?.qty}
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <div className="w-[150px]">
                                       <span
                                          className={`${order?.pay_status === "Pending" ? "bg-yellow-400 group-hover:bg-[#DDBA7A]" : order?.pay_status === "On The Way" ? "bg-[#1873A2]" : order?.pay_status === "Cancled" ? "bg-[#B8401C]" : "bg-[rgba(57,168,91,0.80)]"} text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1`}
                                       >
                                          {order?.pay_status}
                                       </span>
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <span
                                       className={`${order?.status === "Paid" ? "bg-[rgba(57,168,91,0.80)]" : "bg-[#fbbc05]"} text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1`}
                                    >
                                       {order?.status}
                                    </span>
                                 </td>
                                 <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <TableDropdownBtn buttons={buttons} />
                                 </td>
                              </tr>
                           );
                        })
                     ) : (
                        <tr className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                           <td
                              colSpan={9}
                              className="px-6 py-4 table-body-td text-[#2f2f2f] text-center font-['Arial-Bold',_sans-serif] text-xs font-bold"
                           >
                              Data not found
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </div>

         <SallerPagination
            links={links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
         />
      </Fragment>
   );
}
