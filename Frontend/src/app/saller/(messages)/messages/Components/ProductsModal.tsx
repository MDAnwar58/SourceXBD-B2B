"use client";
import { CheckSvgIcon } from "@/saller/components/SvgIcons";
import Button from "@/components/Button";
import Img from "@/components/Image";
import Input from "@/components/Input";
import React, { Fragment, useEffect, useState } from "react";
import { SallerState } from "@/saller/store";
import { useSelector } from "react-redux";
import { LocalUrl } from "@/components/react/localhost";
import { SpinSvgIcon } from "@admin/components/SvgIcons";

type Product = {
   id: number;
   discount_price: number | null;
   image: string;
   name: string;
   price: number;
   stock: number;
   min_order: number;
};

type Props = {
   productSelectionModal: boolean;
   setProductSelectionModal: React.Dispatch<React.SetStateAction<boolean>>;
   selectProducts: Array<Product[]>;
   setSelectProducts: React.Dispatch<React.SetStateAction<Product[]>>;
   onHandleSelectProducts: (id: number) => void;
   onHandleSearchProduct: (search: string) => void;
   limitProduct: number;
   onHandleProductsLimit: (limit: number) => void;
};

export default function ProductsModal({
   productSelectionModal,
   setProductSelectionModal,
   selectProducts,
   setSelectProducts,
   onHandleSelectProducts,
   onHandleSearchProduct,
   limitProduct,
   onHandleProductsLimit,
}: Props) {
   const localUrl: string = LocalUrl();
   const [selectProductIds, setSelectProductIds] = useState<any[]>([]);

   useEffect(() => {
      const productIds = selectProducts.map((product: any) => product.id);
      setSelectProductIds(productIds);
   }, [selectProducts]);

   const {
      products = [],
      totalProductsLength,
      loading,
   } = useSelector((state: SallerState) => state.saller.sellerMessage);
   const Products: Array<Product[]> = products;

   return (
      <Fragment>
         <div
            className={`${productSelectionModal === false ? "hidden" : ""} fixed overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-[60] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
         >
            <div className="relative p-4 w-full max-w-lg max-h-full  mx-auto">
               {/* Modal content */}
               <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* Modal header */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Select Products
                     </h3>
                     <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setProductSelectionModal(false)}
                     >
                        <svg
                           className="w-3 h-3"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 14 14"
                        >
                           <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                           />
                        </svg>
                        <span className="sr-only">Close modal</span>
                     </button>
                  </div>
                  {/* Modal body */}
                  <div className="p-4 md:p-5">
                     <Input
                        type="text"
                        className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] !h-10 w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[11px] font-normal"
                        style={{
                           boxShadow:
                              "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1),inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1)",
                        }}
                        placeholder="Search ..."
                        onChange={(e: any) =>
                           onHandleSearchProduct(e.target.value)
                        }
                     />
                     <ul
                        className="my-4 py-2 space-y-3 h-72 overflow-y-auto"
                        style={{
                           scrollbarWidth: "none",
                        }}
                     >
                        {Products?.length > 0 ? (
                           Products.map((product: any, index: number) => {
                              const imageUrl = localUrl.concat(product?.image);
                              return (
                                 <li
                                    key={index + 1}
                                    onClick={() =>
                                       onHandleSelectProducts(product)
                                    }
                                 >
                                    <div
                                       className={`flex p-3 text-base font-bold text-gray-900 rounded-3xl ${selectProductIds.includes(product?.id) ? "bg-gray-100 shadow" : "bg-gray-50 hover:bg-gray-100 hover:shadow"}  group dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white`}
                                    >
                                       {product?.image ? (
                                          <Img
                                             src={imageUrl}
                                             alt="product image"
                                             width={100}
                                             height={100}
                                             className="rounded-2xl 3md:w-[103px] md:w-full 3xs:w-[163px] w-full 3md:h-[90px] md:h-[250px] 3xs:h-[90px] xs3:h-[250px] h-auto overflow-visible"
                                          />
                                       ) : null}
                                       <div className="flex-1 ms-3 whitespace-nowrap">
                                          <span className="">
                                             {product?.name}
                                          </span>
                                          <div className="text-base font-medium text-gray-600">
                                             <span className="me-1">
                                                {product?.discount_price
                                                   ? product?.price -
                                                     product?.discount_price
                                                   : product?.price}
                                                BDT
                                             </span>
                                             {product?.discount_price ? (
                                                <span className=" line-through text-gray-400 text-xs">
                                                   {product?.price}BDT
                                                </span>
                                             ) : null}
                                          </div>
                                          <div className="text-sm font-medium text-gray-600">
                                             Units: {product?.stock}x
                                          </div>
                                          {product?.min_order && (
                                             <div className="text-xs font-light text-gray-600">
                                                Min. Order: {product?.min_order}
                                                x
                                             </div>
                                          )}
                                       </div>
                                       <div className="flex items-center">
                                          <Button
                                             type="button"
                                             className={`${selectProductIds.includes(product?.id) ? "text-white bg-blue-400" : "text-gray-500  bg-gray-200 hover:text-white hover:bg-blue-400"} inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium  rounded dark:bg-gray-700 dark:text-gray-400`}
                                          >
                                             <div className="w-3 h-[1.15rem]">
                                                <CheckSvgIcon />
                                             </div>
                                          </Button>
                                       </div>
                                    </div>
                                 </li>
                              );
                           })
                        ) : (
                           <li>
                              <div
                                 className={`text-center p-3 text-base font-bold text-gray-900 rounded-3xl bg-gray-100 shadow  group dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white`}
                              >
                                 Products not found
                              </div>
                           </li>
                        )}
                        {Products?.length > 0 &&
                        Products?.length !== totalProductsLength ? (
                           <li className="py-3 ">
                              <Button
                                 type="button"
                                 className={`flex items-center mx-auto capitalize ${loading === true ? " bg-blue-gradient-disable gap-1" : "bg-blue-gradient"} text-white px-5 py-2 rounded-2xl`}
                                 onClick={() =>
                                    onHandleProductsLimit(limitProduct + 5)
                                 }
                              >
                                 <div>more</div>
                                 {loading === true ? (
                                    <div className="w-3.5 h-3.5">
                                       <SpinSvgIcon />
                                    </div>
                                 ) : null}
                              </Button>
                           </li>
                        ) : null}
                     </ul>
                     <div>
                        <a
                           href="#"
                           className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                        >
                           <svg
                              className="w-3 h-3 me-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                           >
                              <path
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                           </svg>
                           Why do I need to connect with my wallet?
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {productSelectionModal !== false ? (
            <div
               className="bg-gray-900/50 dark:bg-gray-900/80 w-full h-full fixed inset-0 z-50"
               // onClick={() => alert("clicked")}
            ></div>
         ) : null}
      </Fragment>
   );
}
