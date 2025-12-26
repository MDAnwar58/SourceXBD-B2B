"use client";
import React, { Fragment, useCallback } from "react";
import { MoneySvgIcon, ReloadSvgIcon } from "@/saller/components/SvgIcons";
import { Dropdown } from "flowbite-react";
import { SallerState } from "@/app/saller/store";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { LocalUrl } from "@/components/react/localhost";
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const SallerPagination = dynamic(
   () => import("@/app/saller/components/Pagination")
);
const NavLink = dynamic(() => import("@/components/NavLink"));

const itemClass =
   "!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white rounded-lg py-1 px-3 transition-colors w-full flex justify-center mb-2";

const buttons = [
   {
      button: (
         <Dropdown.Item
            className="!p-0 !bg-transparent hover:!bg-transparent"
            onClick={() => console.log("edit")}
         >
            <NavLink href="" className={itemClass}>
               Edit
            </NavLink>
         </Dropdown.Item>
      ),
   },
   {
      button: (
         <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
            <div className={itemClass}>Delete</div>
         </Dropdown.Item>
      ),
   },
];

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type User = {
   email: string;
   id: number;
   name: string;
   phone: number;
   role: string;
   status: string;
};

type Product = {
   category: string;
   category_id: number;
   contact: number | string | null;
   desc: string;
   discount_price: number | null;
   id: number;
   is_show: number;
   min_order: number | null;
   name: string;
   price: number;
   rating_point: number;
   s_desc: string | null;
   slug: string;
   spacification: string | null;
   status: string;
   stock: number;
   sub_category_id: number;
   tags: string;
   title: string;
   type: string;
   user_id: number;
   image: string;
};

type Data = {
   address: string;
   amount: number;
   author: number;
   email: string;
   id: number;
   location_name: string;
   pay_status: string;
   payment_method: string;
   phone: string;
   product: Product;
   product_id: number;
   qty: number;
   status: string;
   transaction_id: string;
   user: User;
   user_id: number;
};

type Meta = {
   links: Link[];
   to: number;
   from: number;
   current_page: number;
   last_page: number;
};

type OrderItemsData = {
   data: Data[];
   meta: Meta;
};

type Props = {
   getOrderItems: (page: number, perPage: number, search: string) => void;
   perPage: number;
   search: string;
   setPage: React.Dispatch<React.SetStateAction<number>>;
   onHandleResetTable?: (
      page: number,
      perPage: number,
      search: string
   ) => void | undefined;
};

export default function OrderItemsTable({
   getOrderItems,
   perPage,
   search,
   setPage,
   onHandleResetTable,
}: Props) {
   const localUrl = LocalUrl();
   const onHandlePagination = useCallback(
      (page: number): void => {
         setPage(page);
         getOrderItems(page, perPage, search);
      },
      [perPage, search]
   );

   const { order_items } = useSelector(
      (state: SallerState) => state.saller.orders
   );
   const OrderData = order_items as OrderItemsData;
   const { data = [], meta = {} } = OrderData;
   const Orders = data as Data[];
   const Meta = meta as Meta;
   const { links, last_page } = Meta;

   const Links = links as Link[];
   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card mb-7">
            <div className="table-header flex justify-between items-center pb-2">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-lg font-semibold">
                  Order Items
               </div>
               <Button
                  type="button"
                  className="bg-[#e9e9e9] text-gray-700 w-7 h-7 rounded-lg flex justify-center items-center"
                  onClick={() => onHandleResetTable?.(1, 5, "")}
               >
                  <div className="w-4 h-4">
                     <ReloadSvgIcon />
                  </div>
               </Button>
            </div>
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
                           Price
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th-r text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Quantity
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {Orders.length > 0 ? (
                        Orders.map((order: Data, index: number) => {
                           let imageUrl: string = "";
                           if (order?.product?.image) {
                              imageUrl = localUrl.concat(order?.product?.image);
                           }
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
                                    <div className=" flex items-center w-auto">
                                       <Img
                                          src={imageUrl}
                                          alt={"Product Image"}
                                          width={100}
                                          height={100}
                                          className="rounded w-[38px] h-[38px] "
                                       />
                                       <div className="ps-2">
                                          <div>{order?.product?.name}</div>
                                          <div className="text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                                             ({order?.product?.category})
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                    {order?.user?.name}
                                 </td>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <div>
                                       <span className=" rounded h-6 flex items-center ps-1 pe-3">
                                          <div className="bg-[#98b0ee] text-white w-4 h-4 rounded flex justify-center items-center">
                                             <div className=" w-2 h-2">
                                                <MoneySvgIcon />
                                             </div>
                                          </div>
                                          <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ps-1">
                                             {order?.amount}
                                          </div>
                                       </span>
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
                              </tr>
                           );
                        })
                     ) : (
                        <tr className="bg-[white] border-b dark:bg-gray-800 dark:border-gray-700">
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
            links={Links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
         />
      </Fragment>
   );
}
