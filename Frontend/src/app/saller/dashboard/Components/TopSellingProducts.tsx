"use client";
import React from "react";
import { useSelector } from "react-redux";
import { SallerState } from "@/saller/store";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));

type TopSellingProduct = {
   category: string;
   company: string;
   contact: string | null;
   discount_price: number | null;
   id: number;
   image: string;
   is_wish_active: boolean;
   min_order: string | null;
   name: string;
   price: number;
   s_desc: string | null;
   seller: string;
   seller_id: number;
   slug: string;
   spacification: string;
   status: string;
   time_ago: string;
   order_qty_sum: string;
   totalSaleItems: number;
};

export default function TopSellingProducts() {
   const localUrl = LocalUrl();
   const { top_selling_products } = useSelector(
      (state: SallerState) => state.saller.dashboard
   );
   const products: Array<TopSellingProduct[]> = top_selling_products;

   return (
      <div
         className="bg-[#ffffff] rounded-[20px] h-[378px] p-5 overflow-y-auto"
         style={{
            boxShadow:
               "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            scrollbarWidth: "none",
         }}
      >
         <div className="flex justify-between items-center">
            <div
               className="text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium relative w-auto"
               style={{
                  background:
                     "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
               }}
            >
               Top selling Products
            </div>
            {/* <div className="bg-[#e9e9e9] rounded-lg w-[95px] flex justify-center items-center h-7">
               <button
                  type="button"
                  className="dropdown-toggle flex gap-2 text-xs font-bold text-[#515151] "
               >
                  <svg
                     width={16}
                     height={16}
                     viewBox="0 0 16 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <g clipPath="url(#clip0_1_1220)">
                        <path
                           d="M13.3333 7.5555H8.44444V2.66661C8.44444 2.54874 8.39761 2.43569 8.31426 2.35234C8.23091 2.26899 8.11787 2.22217 7.99999 2.22217C7.88212 2.22217 7.76907 2.26899 7.68572 2.35234C7.60237 2.43569 7.55555 2.54874 7.55555 2.66661V7.5555H2.66666C2.54879 7.5555 2.43574 7.60233 2.35239 7.68568C2.26904 7.76903 2.22222 7.88207 2.22222 7.99995C2.22002 8.05771 2.23024 8.11527 2.25217 8.16875C2.2741 8.22223 2.30724 8.27039 2.34936 8.30998C2.39148 8.34957 2.44159 8.37967 2.49633 8.39826C2.55106 8.41684 2.60914 8.42348 2.66666 8.41772H7.55555V13.3333C7.55555 13.4512 7.60237 13.5642 7.68572 13.6475C7.76907 13.7309 7.88212 13.7777 7.99999 13.7777C8.11787 13.7777 8.23091 13.7309 8.31426 13.6475C8.39761 13.5642 8.44444 13.4512 8.44444 13.3333V8.44439H13.3333C13.4512 8.44439 13.5642 8.39757 13.6476 8.31422C13.7309 8.23087 13.7778 8.11782 13.7778 7.99995C13.7778 7.88207 13.7309 7.76903 13.6476 7.68568C13.5642 7.60233 13.4512 7.5555 13.3333 7.5555Z"
                           fill="#515151"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_1_1220">
                           <rect width={16} height={16} fill="white" />
                        </clipPath>
                     </defs>
                  </svg>{" "}
                  Add New
               </button>
            </div> */}
         </div>
         <div className="mt-3 space-y-2">
            {products.length > 0 ? (
               products.map(
                  (product: TopSellingProduct | any, index: number) => {
                     const imageUrl = localUrl.concat(product?.image);

                     return (
                        <div
                           key={index}
                           className="mt-3 bg-[rgba(152,176,238,0.05)] rounded-[14px] shadow  "
                        >
                           <div className="flex items-center justify-between gap-1 p-2">
                              <div className=" rounded-[10px] flex flex-row gap-2">
                                 <div className="w-[90px] h-[4.7rem]">
                                    {imageUrl ? (
                                       <Img
                                          src={imageUrl.toString()}
                                          alt=""
                                          width={30}
                                          height={30}
                                          className="w-full h-full rounded-xl"
                                       />
                                    ) : null}
                                 </div>

                                 <div className="flex-shrink-0">
                                    <p className="text-[#2f2f2f] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                                       {product?.category}
                                    </p>
                                    <p className="text-[#2f2f2f] pb-1 text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium relative">
                                       {product?.name}
                                    </p>
                                    <h3 className="text-[#2f2f2f] mt-1 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                                       BDT:{" "}
                                       {product?.discount_price
                                          ? product?.price -
                                            product?.discount_price
                                          : product?.price}
                                    </h3>
                                 </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                 <button
                                    className="rounded-[50%] w-4 h-4 flex items-center justify-center text-[#ffffff]  font-['Arial-Bold',_sans-serif] text-[8px] font-bold"
                                    style={{
                                       background:
                                          "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                                    }}
                                 >
                                    {product?.totalSaleItems}
                                 </button>
                                 {/* <button
                                    className=" rounded-lg w-[56.22px] h-[23px] text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-[8px] font-bold flex gap-2 items-center justify-center"
                                    style={{
                                       background:
                                          "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                                       boxShadow:
                                          "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                                    }}
                                 >
                                    <svg
                                       width={12}
                                       height={12}
                                       viewBox="0 0 12 12"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M10.2907 11.96H1.70805C1.26602 11.96 0.842098 11.7844 0.529537 11.4719C0.216977 11.1593 0.0413818 10.7354 0.0413818 10.2933V1.71134C0.0413818 1.26932 0.216977 0.845394 0.529537 0.532833C0.842098 0.220272 1.26602 0.0446777 1.70805 0.0446777H10.2907C10.7327 0.0446777 11.1567 0.220272 11.4692 0.532833C11.7818 0.845394 11.9574 1.26932 11.9574 1.71134V10.2933C11.9574 10.7354 11.7818 11.1593 11.4692 11.4719C11.1567 11.7844 10.7327 11.96 10.2907 11.96ZM1.70805 0.711344C1.44283 0.711344 1.18848 0.816701 1.00094 1.00424C0.813405 1.19177 0.708048 1.44613 0.708048 1.71134V10.2933C0.708048 10.5586 0.813405 10.8129 1.00094 11.0005C1.18848 11.188 1.44283 11.2933 1.70805 11.2933H10.2907C10.5559 11.2933 10.8103 11.188 10.9978 11.0005C11.1854 10.8129 11.2907 10.5586 11.2907 10.2933V1.71134C11.2907 1.44613 11.1854 1.19177 10.9978 1.00424C10.8103 0.816701 10.5559 0.711344 10.2907 0.711344H1.70805Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M2.36275 3.52458C2.27435 3.52458 2.18956 3.48946 2.12705 3.42695C2.06454 3.36443 2.02942 3.27965 2.02942 3.19124C2.02942 3.10284 2.06454 3.01805 2.12705 2.95554C2.18956 2.89303 2.27435 2.85791 2.36275 2.85791H6.00009C6.08849 2.85791 6.17328 2.89303 6.23579 2.95554C6.2983 3.01805 6.33342 3.10284 6.33342 3.19124C6.33342 3.27965 6.2983 3.36443 6.23579 3.42695C6.17328 3.48946 6.08849 3.52458 6.00009 3.52458H2.36275Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M4.18075 6.33341C4.09234 6.33341 4.00756 6.2983 3.94504 6.23578C3.88253 6.17327 3.84741 6.08849 3.84741 6.00008C3.84741 5.91168 3.88253 5.82689 3.94504 5.76438C4.00756 5.70187 4.09234 5.66675 4.18075 5.66675H7.81675C7.90515 5.66675 7.98994 5.70187 8.05245 5.76438C8.11496 5.82689 8.15008 5.91168 8.15008 6.00008C8.15008 6.08849 8.11496 6.17327 8.05245 6.23578C7.98994 6.2983 7.90515 6.33341 7.81675 6.33341H4.18075Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M6.00008 9.14933C5.91168 9.14933 5.82689 9.11421 5.76438 9.0517C5.70187 8.98919 5.66675 8.90441 5.66675 8.816C5.66675 8.72759 5.70187 8.64281 5.76438 8.5803C5.82689 8.51778 5.91168 8.48267 6.00008 8.48267H9.63675C9.72515 8.48267 9.80994 8.51778 9.87245 8.5803C9.93496 8.64281 9.97008 8.72759 9.97008 8.816C9.97008 8.90441 9.93496 8.98919 9.87245 9.0517C9.80994 9.11421 9.72515 9.14933 9.63675 9.14933H6.00008Z"
                                          fill="white"
                                       />
                                    </svg>
                                    View
                                 </button> */}
                              </div>
                           </div>
                        </div>
                     );
                  }
               )
            ) : (
               <div className=" text-center text-md text-gray-600">
                  Data not found
               </div>
            )}
         </div>
      </div>
   );
}
