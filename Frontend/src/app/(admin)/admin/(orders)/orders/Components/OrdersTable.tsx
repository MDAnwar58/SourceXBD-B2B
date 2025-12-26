"use client";
import React from "react";
import { LocalUrl } from "@/components/react/localhost";
import { EyeSvgIcon, MoneySvgIcon } from "@admin/components/SvgIcons";
import {
   useDateToDateMonthFormat,
   useDateWithMonthFormatExtra,
} from "@/components/react/date";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const Img = dynamic(() => import("@/components/Image"));
const TableDropdownBtn = dynamic(
   () => import("@admin/components/TableDropdownBtn")
);
const NavLink = dynamic(() => import("@/components/NavLink"));

type Product = {
   category: string;
   discount_price: number;
   image: string;
   name: string;
   price: number;
};

type Seller = { name: string; image: string | null };
type User = { name: string; image: string | null };

type Order = {
   address: string;
   amount: string;
   company: string;
   created_at: string;
   id: number;
   location_name: string;
   pay_status: string;
   product: Product;
   qty: number;
   seller: Seller;
   status: string;
   transaction_id: string;
   user: User;
};

type Props = {
   orders: Order[];
};

export default function OrdersTable({ orders }: Props) {
   const localUrl: string = LocalUrl();
   console.log(orders);
   return (
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
                     Order ID
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
                     const date = useDateToDateMonthFormat(order?.created_at);
                     let sellerImage: string = "";
                     let buyerImage: string = "";
                     if (order?.seller?.image) {
                        const forwardSlash = "/";
                        const storeFilePath = order?.seller?.image.toString();
                        const imagePath = forwardSlash.concat(storeFilePath);
                        sellerImage = localUrl.concat(imagePath);
                     }
                     if (order?.user?.image) {
                        const forwardSlash = "/";
                        const storeFilePath = order?.user?.image.toString();
                        const imagePath = forwardSlash.concat(storeFilePath);
                        buyerImage = localUrl.concat(imagePath);
                     }
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
                              #{order?.transaction_id}
                           </td>
                           <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                              <div className=" flex items-center gap-x-2">
                                 {order?.seller?.image ? (
                                    <Img
                                       src={sellerImage}
                                       alt="seller avatar"
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
                                 <div>{order?.seller?.name}</div>
                              </div>
                           </td>
                           <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                              <div className=" flex items-center gap-x-2">
                                 {order?.user?.image ? (
                                    <Img
                                       src={buyerImage}
                                       alt="..."
                                       width={70}
                                       height={70}
                                       className="rounded-full w-7 h-7"
                                    />
                                 ) : (
                                    <Img
                                       src="/assets/images/user-demo-avatar.png"
                                       alt="Buyer avatar"
                                       width={70}
                                       height={70}
                                       className="rounded-full w-7 h-7"
                                    />
                                 )}
                                 <div>{order?.user?.name}</div>
                              </div>
                           </td>
                           <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                              {date}
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
                                       {order?.amount}
                                    </div>
                                 </Button>
                              </div>
                           </td>
                           <td className="px-6 py-4 table-body-td  text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                              <div
                                 className={`${order?.pay_status === "Pending" ? "bg-[rgba(254,245,14,0.60)] text-gray-700" : order?.pay_status === "On The Way" ? "bg-[rgba(84,56,255,0.60)] text-[#ffffff]" : order?.pay_status === "Complete" ? "bg-[#39a85b] text-[#ffffff]" : "bg-[#e24b4b] text-[#ffffff]"} rounded w-[94px] h-6 flex items-center justify-center`}
                              >
                                 {order?.pay_status}
                              </div>
                           </td>
                           <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                              {/* <TableDropdownBtn /> */}
                              <NavLink href={`/admin/order/${order?.id}`}>
                                 <div className="bg-gray-50 shadow-admin-card flex items-center justify-center h-5 w-6 rounded-md">
                                    <div className="w-4 h-4 text-gray-600">
                                       <EyeSvgIcon />
                                    </div>
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
                        className="px-6 py-4 table-body-td text-[#2f2f2f] text-center font-['Arial-Bold',_sans-serif] text-xs font-bold"
                     >
                        Data not found
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
}
