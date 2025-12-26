"use client";
import PageHeader from "@/app/saller/components/PageHeader";
import { OrderListSvgIcon } from "@/app/saller/components/SvgIcons";
import { AppDispatch } from "@/app/store";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderInvoice } from "@/app/invoice-print/features/PrintAction";
import { RootState } from "@/app/store";

const icon = (
   <div className="w-6 h-6">
      <OrderListSvgIcon />
   </div>
);

const products = [
   {
      id: 1,
      name: "Lorem Ipsum 1",
      price: 1000,
      discount_price: null,
      qty: 1,
   },
   {
      id: 2,
      name: "Lorem Ipsum 2",
      price: 2000, // every time change price
      discount_price: 50, // and discount price too
      qty: 3, // and qty too
   },
   {
      id: 3,
      name: "Lorem Ipsum 3",
      price: 3000,
      discount_price: 200,
      qty: 5,
   },
   {
      id: 4,
      name: "Lorem Ipsum 4",
      price: 4000,
      discount_price: 300,
      qty: 7,
   },
   {
      id: 5,
      name: "Lorem Ipsum 5",
      price: 5000,
      discount_price: 400,
      qty: 9,
   },
];

type City = {
   country_id: number;
   desc: string;
   id: number;
   map: string | any;
   name: string;
   slug: string;
};

type Country = {
   id: number;
   iso: string;
   iso3: string;
   name: string;
   nicename: string;
   numcode: number;
   phonecode: string;
};

type Profile = {
   address: string | null;
   country: Country;
   country_code_1: string | null;
   country_code_2: string | null;
   country_id: number;
   created_at: string;
   email_2: string | null;
   first_name: string | null;
   gpo: any;
   id: number;
   last_name: string | null;
   middle_name: string | null;
   phone_1: string;
   phone_2: string | null;
   photo: string | null;
   state: string;
   user_id: number;
};

type Company = {
   address: string;
   city_id: string;
   contact: string;
   country: Country;
   city: City;
   created_at: string;
   desc: string;
   id: number;
   industry: string;
   logo: string;
   name: string;
   points: number;
   review: number;
   status: string;
   trust_point: number;
   type: string;
   u_id: number;
};

type User = {
   id: number;
   name: string;
   image: any;
   email: string;
   phone: string;
   profile: Profile;
   role: string;
   status: string;
   company: Company;
};

type Product = {
   category_id: number;
   contact: string;
   created_at: string;
   desc: string;
   discount_price: number;
   id: number;
   images: any[];
   is_approve: number;
   is_show: number;
   min_order: number;
   name: string;
   price: number;
   publish: string;
   rating_point: number;
   s_desc: string | null;
   section: string | null;
   slug: string;
   spacification: string;
   status: string;
   stock: number;
   sub_category_id: number;
   tags: string;
   title: string | null;
   type: string;
   user: User;
};

type OrderItem = {
   amount: string;
   id: number;
   order_id: number;
   product: Product;
   product_id: number;
   qty: number;
};

type Order = {
   address: string;
   amount: string;
   author: string;
   created_at: string;
   email: string;
   id: number;
   location_name: string;
   pay_status: string;
   payment_method: string;
   phone: string;
   order_items: OrderItem[];
   product_id: number;
   qty: number;
   status: string;
   transaction_id: string;
   user: User;
};

type Props = {
   params: {
      id: number;
   };
};

export default function PrintContent({ params }: Props) {
   const dispatch = useDispatch<AppDispatch>();
   const invoiceArea = useRef<HTMLDivElement>(null);
   const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

   useEffect(() => {
      dispatch(getOrderInvoice({ id: params.id }));
      //       window.print();
   }, [dispatch, params]);

   const { order = {} } = useSelector((state: RootState) => state.sallerPrint);
   const Order = order as Order;

   const formatDate = (isoDateString: string): string => {
      const date = new Date(isoDateString);
      const day = String(date.getDate()).padStart(2, "0"); // Ensure 2-digit day
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const year = date.getFullYear();

      return `${day} / ${month} / ${year}`;
   };

   useEffect(() => {
      if (Order?.order_items !== undefined) {
         setOrderItems(Order?.order_items);
      }
   }, [Order?.order_items]);

   const totalPrice = orderItems.reduce((acc, orderItem) => {
      const effectivePrice = Number(orderItem?.amount);
      return acc + effectivePrice;
   }, 0);

   const issueDate = formatDate(Order?.created_at);

   const printInvoice = () => {
      window.print();
   };

   return (
      <div className="p-11">
         <div className="rounded-md lg:col-span-5" ref={invoiceArea}>
            <div
               className="bg-[#ffffff] rounded-[20px]   mt-1 p-5"
               style={{
                  boxShadow:
                     "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
               }}
            >
               <div>
                  <h1 className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold pb-1 ">
                     INVOICE
                  </h1>
                  <h6 className="text-[#4285f4] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     #{Order?.transaction_id}
                  </h6>
               </div>
               <div className="mt-4 mb-2 flex justify-between">
                  <div>
                     <h2 className=" uppercase text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold mb-1">
                        bill to
                     </h2>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        Company Name:{" "}
                        {Order?.order_items !== undefined &&
                           Order?.order_items[0]?.product?.user?.company?.name}
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        Industry:{" "}
                        {Order?.order_items !== undefined &&
                           Order?.order_items[0]?.product?.user?.company
                              ?.industry}
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        Phone:{" "}
                        {Order?.order_items !== undefined &&
                           Order?.order_items[0]?.product?.user?.company
                              ?.contact}
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        Email:{" "}
                        {Order?.order_items !== undefined &&
                           Order?.order_items[0]?.product?.user?.email}
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        Country:{" "}
                        {Order?.order_items !== undefined &&
                           Order?.order_items[0]?.product?.user?.company
                              ?.country?.nicename}
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        City:
                        {Order?.order_items !== undefined &&
                           Order?.order_items[0]?.product?.user?.company?.city
                              ?.name}
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        Address:
                        {Order?.order_items !== undefined &&
                           Order?.order_items[0]?.product?.user?.company
                              ?.address}
                     </div>
                  </div>
                  <div>
                     <h2 className="uppercase text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold ">
                        ship to
                     </h2>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        Client Name: {Order?.user?.name}
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        Phone: {Order?.user?.phone}
                     </div>
                     {Order?.user?.profile?.phone_1 ? (
                        <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                           Secondary Phone: {Order?.user?.profile?.phone_1}
                        </div>
                     ) : null}
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        Email: {Order?.user?.email}
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        Country: {Order?.user?.profile?.country?.nicename}
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal  w-auto">
                        State: {Order?.user?.profile?.state}
                     </div>
                  </div>
               </div>
               <div className="mt-5 w-full border border-b-gray-200"></div>
               {/* Table part start  */}
               <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] mt-4 border-solid border-[#b2b2b2] border-[0.5px]">
                  <div className="flex-auto block">
                     <div className="overflow-x-auto rounded-md">
                        <table className="min-w-full leading-normal ">
                           <thead>
                              <tr className=" rounded-[10px] h-8 text-[#2F2F2F] ">
                                 <th className="py-2 pl-3 pr-8 text-[#000000] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                                    Deliverable
                                 </th>
                                 <th className="py-2 px-3 text-[#000000] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                                    Rate
                                 </th>
                                 <th className="py-2 px-3 text-[#000000] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                                    Qty
                                 </th>
                                 <th className="py-2 px-3 text-[#000000] text-right font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                                    Amount
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              {orderItems?.length > 0
                                 ? orderItems.map(
                                      (orderItem, index: number) => (
                                         <tr
                                            key={index}
                                            className={`${index + 1 === orderItems.length ? "" : "h-8 border border-b-gray-100   "}   group rounded-[10px] text-[#2F2F2F]`}
                                         >
                                            <td className="pl-3 pr-8 py-1 ">
                                               <p className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                                                  {orderItem?.product?.name}
                                               </p>
                                            </td>
                                            <td className="px-1 py-1 flex items-end gap-1">
                                               <p className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                                                  BDT{" "}
                                                  {orderItem?.product
                                                     ?.discount_price
                                                     ? orderItem?.product
                                                          ?.price -
                                                       orderItem?.product
                                                          ?.discount_price
                                                     : orderItem?.product
                                                          ?.price}
                                               </p>
                                               <div className=" line-through text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[7px] font-normal">
                                                  {orderItem?.product
                                                     ?.discount_price
                                                     ? orderItem?.product?.price
                                                     : null}
                                               </div>
                                            </td>
                                            <td className="px-3 py-1 ">
                                               <p className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                                                  {orderItem?.qty}
                                               </p>
                                            </td>
                                            <td className="px-3 py-1 ">
                                               <p className="text-[#515151] text-right font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                                                  BDT {orderItem?.amount}
                                               </p>
                                            </td>
                                         </tr>
                                      )
                                   )
                                 : null}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
               <div></div>
               <div className="flex flex-col justify-end items-end mt-5">
                  <div className="xs6:w-[150px] w-full">
                     <div className="flex justify-between items-center gap-8 pb-2">
                        <h6 className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative">
                           Sub Total
                        </h6>
                        <h6 className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                           {totalPrice} BDT
                        </h6>
                     </div>
                     <div className="flex justify-between items-center pb-2">
                        <h6 className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative">
                           Tax
                        </h6>
                        <h6 className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                           500 BDT
                        </h6>
                     </div>
                     {/* <div className="flex justify-end gap-8 pb-2">
               <h6 className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative">
                  Discount
               </h6>
               <h6 className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                  BDT 000
               </h6>
            </div> */}
                     <div className="flex items-center justify-between pb-2">
                        <h6 className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative">
                           Shipping Fee
                        </h6>
                        <h6 className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                           100 BDT
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="mt-5">
                  <h4 className="text-[#515151] pb-1 text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium relative">
                     Note
                  </h4>
                  <p className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                     Pay Within 15 days, Thank You for your business
                  </p>
               </div>
            </div>

            <div className="rounded-md ">
               <div
                  className="bg-[#4285f4] rounded-[20px] w-full mt-5 h-auto p-4"
                  style={{
                     boxShadow:
                        "-1px -1px 5px 0px rgba(101, 101, 101, 0.25),1px 1px 5px 0px rgba(47, 47, 47, 0.25)",
                  }}
               >
                  <div className="flex xs6:flex-row flex-col xs6:justify-between">
                     <div>
                        <h6 className="text-[#ffffff] pb-3 text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold ">
                           Invoice Details:
                        </h6>
                        <p className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal ">
                           Date Issued: {issueDate}
                        </p>
                        <p className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal pt-1">
                           Due date: 01 / 01 / 2025
                        </p>
                     </div>
                     <div className="xs6:pt-0 pt-3">
                        <p className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-[10px] font-bold ">
                           Total Ammount
                        </p>
                        <h2 className="text-[#ffffff] font-['Arial-Bold',_sans-serif] text-xl font-bold xs6:pt-3">
                           BDT {totalPrice + 500 + 100}
                        </h2>
                     </div>
                  </div>
               </div>
               <div className="flex justify-end gap-4 lg:gap-9 mt-5 mb-5">
                  <button
                     className="rounded-[14px] w-[201px] h-[42px] text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-sm font-bold"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                     }}
                     onClick={() => printInvoice()}
                  >
                     Print
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
