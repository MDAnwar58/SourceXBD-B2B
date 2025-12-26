"use client";
import Img from "@/components/Image";
import { LocalUrl } from "@/components/react/localhost";
import React from "react";

type File = {
   fileable_id: number;
   id: number;
   path: string;
   type: string;
};

type Product = {
   id: number;
   name: string;
   slug: string;
   price: number;
   contact: string | number | null;
   discount_price: string | null;
   min_order: number;
   rating_point: number;
   stock: number;
   type: string;
   created_at: string;
};

type MessageProduct = {
   id: number;
   massage_id: number;
   product: Product;
   qty: number;
   created_at: string;
};

type Message = {
   created_at: string;
   files: File[];
   formatted_date: string;
   from_id: number;
   id: number;
   is_pin: number;
   is_read: number;
   massage: string;
   massage_product: MessageProduct[];
   reply_id: string | null;
   to_id: number;
};

type Props = {
   chat?: Message | undefined;
};

export default function ChatRightMessage({ chat }: Props) {
   const localUrl: string = LocalUrl();
   // console.log(chat);
   return (
      <div className="message outgoing">
         {chat?.massage_product && chat?.massage_product?.length > 0 && (
            <div
               className={`grid ${
                  chat?.massage_product?.length > 1
                     ? "5md:grid-cols-2 md:grid-cols-1 4xs:grid-cols-2 grid-cols-1"
                     : chat?.massage_product?.length > 0 &&
                       "3md:w-[201px] md:w-auto 3xs:w-[201px] w-auto"
               } gap-3 mb-1`}
            >
               {chat?.massage_product?.length > 0 &&
                  chat?.massage_product.map(
                     (message_product: Product | any, index: number) => {
                        const imageUrl = localUrl.concat(
                           message_product?.product?.image
                        );
                        return (
                           <div key={index}>
                              <div className=" rounded-2xl bg-white shadow-admin-card p-3">
                                 {message_product?.product?.image ? (
                                    <Img
                                       src={imageUrl}
                                       alt="product image"
                                       width={150}
                                       height={150}
                                       className="rounded-xl w-full h-auto"
                                    />
                                 ) : null}
                                 <div className="px-1 pt-2">
                                    <div className="text-xs font-bold text-gray-700">
                                       {message_product?.product?.name}
                                    </div>
                                    <div className="flex flex-row items-center gap-[.2rem] text-md font-medium text-gray-600 pt-1">
                                       <div>
                                          BDT{" "}
                                          {message_product?.product
                                             ?.discount_price
                                             ? message_product?.product?.price -
                                               message_product?.product
                                                  ?.discount_price
                                             : message_product?.product?.price}
                                       </div>
                                       <div className=" text-gray-500 line-through text-xs">
                                          {message_product?.product
                                             ?.discount_price &&
                                             message_product?.product?.price}
                                       </div>
                                    </div>

                                    <div className="text-xs font-medium text-gray-600">
                                       Order Units: {message_product?.qty}
                                       <small>X</small>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        );
                     }
                  )}
            </div>
         )}
         {chat?.files && (
            <div
               className={`grid ${chat?.files?.length > 1 ? "5md:grid-cols-2 md:grid-cols-1 4xs:grid-cols-2 grid-cols-1" : "grid-cols-1"} justify-end gap-3 mb-1`}
            >
               {chat?.files?.length > 0 &&
                  chat?.files.map((file: File, index: number) => {
                     const fileUrl = localUrl.concat(file?.path);
                     return (
                        <div key={index}>
                           {file?.type === "image" ? (
                              file?.path ? (
                                 <Img
                                    src={fileUrl}
                                    alt="product image"
                                    width={150}
                                    height={150}
                                    className="rounded-xl w-full h-auto"
                                 />
                              ) : null
                           ) : (
                              <a href={fileUrl} target="_blank">
                                 <Img
                                    src="/assets/images/document.png"
                                    alt="product image"
                                    width={150}
                                    height={150}
                                    className="rounded-xl w-[100px] h-auto"
                                 />
                              </a>
                           )}
                        </div>
                     );
                  })}
            </div>
         )}
         <p>{chat?.massage}</p>
      </div>
   );
}
