"use client";
import React, { useEffect } from "react";
import { MoneySvgIcon } from "@admin/components/SvgIcons";
import { Dropdown } from "flowbite-react";
import ProductContext from "../../featrues/ProductContext";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"), { ssr: false });
const NavLink = dynamic(() => import("@/components/NavLink"), { ssr: false });
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const TableDropdownBtn = dynamic(
   () => import("@admin/components/TableDropdownBtn"),
   { ssr: false }
);

const itemClass =
   "!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white rounded-lg py-1 px-3 transition-colors w-full flex justify-center mb-2";

type Product = {
   id: string;
   name: string;
   slug: string;
   category: string;
   company: string;
   sub_category: string;
   price: string | number;
   status: string;
   seller: string;
   is_approve: number;
};

type Props = {
   products?: Product[];
   getProducts?: any;
   page?: number;
   perPage?: number;
   search?: string;
   tableTab?: string;
   lastPage?: number;
   form?: number;
   to?: number;
   onChangeApprove: (productId: number) => void;
   onChangeReject: (productId: number) => void;
};

export default function AllProducts({
   products,
   getProducts,
   page,
   perPage,
   search,
   tableTab,
   lastPage,
   form,
   to,
   onChangeApprove,
   onChangeReject,
}: Props) {
   const {
      onDeleteHandle,
      onRestoreProductHandle,
      onForceDeleteProductHandle,
   } = ProductContext();

   useEffect(() => {
      if (lastPage === 1 && form === null && to === null) {
         getProducts(Number(lastPage), perPage, search, tableTab);
      }
   }, [lastPage, form, to, perPage, search, tableTab]);

   return (
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
                  Product ID
               </th>
               <th
                  scope="col"
                  className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
               >
                  Product name
               </th>
               <th
                  scope="col"
                  className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
               >
                  Slug
               </th>
               <th
                  scope="col"
                  className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
               >
                  Category
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
                  Status
               </th>
               {tableTab !== "Active" && (
                  <th
                     scope="col"
                     className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                  >
                     Approval
                  </th>
               )}
               <th
                  scope="col"
                  className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
               >
                  Saller
               </th>
               <th
                  scope="col"
                  className="px-6 py-3 table-head-th-r text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
               ></th>
            </tr>
         </thead>
         <tbody>
            {products && products?.length > 0 ? (
               products?.map((product: Product, index) => {
                  const buttons =
                     tableTab === "Draft"
                        ? [
                             {
                                button: (
                                   <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                      <div
                                         className={itemClass}
                                         onClick={() =>
                                            onRestoreProductHandle(
                                               Number(product?.id),
                                               Number(page),
                                               Number(perPage),
                                               String(search),
                                               String(tableTab)
                                            )
                                         }
                                      >
                                         Restore
                                      </div>
                                   </Dropdown.Item>
                                ),
                             },
                             {
                                button: (
                                   <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                      <div
                                         className={itemClass}
                                         onClick={() =>
                                            onForceDeleteProductHandle(
                                               Number(product?.id),
                                               Number(page),
                                               Number(perPage),
                                               String(search),
                                               String(tableTab)
                                            )
                                         }
                                      >
                                         P Delete
                                      </div>
                                   </Dropdown.Item>
                                ),
                             },
                          ]
                        : [
                             {
                                button: (
                                   <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                      <NavLink
                                         href={`/admin/product/${product?.slug}`}
                                         className={itemClass}
                                      >
                                         View
                                      </NavLink>
                                   </Dropdown.Item>
                                ),
                             },
                             {
                                button: (
                                   <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                      <NavLink
                                         href={`/admin/product-edit/${product.id}`}
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
                                               Number(product?.id),
                                               Number(page),
                                               String(search),
                                               String(tableTab)
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
                        key={index + 1}
                        className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700"
                     >
                        <th
                           scope="row"
                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white table-body-td-l"
                        >
                           <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                        </th>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           #{product?.id}
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                           {product?.name}
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           {product?.slug}
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           {product?.category}
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
                                    {product?.price}
                                 </div>
                              </span>
                           </div>
                        </td>
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <span
                              className={`${product?.status === "active" ? "bg-[#39A85B]" : product?.status === "upcomming" ? "bg-[#ebcb57]" : "bg-[#f46842]"} text-white text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-3 h-6 flex justify-center items-center`}
                           >
                              {product?.status}
                           </span>
                        </td>
                        {tableTab !== "Active" && (
                           <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                              {product?.is_approve === 0 ? (
                                 <Button
                                    type="button"
                                    className={`bg-[#79c34f] text-white text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-3 h-6 flex justify-center items-center`}
                                    onClick={() => {
                                       onChangeApprove(Number(product?.id));
                                    }}
                                 >
                                    Approve
                                 </Button>
                              ) : (
                                 <Button
                                    type="button"
                                    className={`bg-[#c34f4f] text-white text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-3 h-6 flex justify-center items-center`}
                                    onClick={() =>
                                       onChangeReject(Number(product?.id))
                                    }
                                 >
                                    Reject
                                 </Button>
                              )}
                           </td>
                        )}
                        <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                              {product?.seller}
                           </div>
                           <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                              ({product?.company})
                           </div>
                        </td>
                        <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                           <TableDropdownBtn buttons={buttons} />
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
   );
}
