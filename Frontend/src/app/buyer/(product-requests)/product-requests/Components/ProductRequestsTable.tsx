"use client";
import React, { Fragment, useCallback, useEffect } from "react";
import { DDeleteSvgIcon, EEyeSvgIcon } from "@/buyer/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { BuyerState } from "@/app/buyer/store";
import { AppDispatch } from "@/buyer/store";
import { delete_product_requests } from "@/buyer/product-requests/features/ProductRequestAction";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const Button = dynamic(() => import("@/components/Button"));
const BuyerTableHeader = dynamic(
   () => import("@/buyer/components/TableHeader")
);
const BuyerPagination = dynamic(
   () => import("@/app/buyer/components/Pagination")
);

type Category = {
   category_type_id: number;
   desc: any;
   id: number;
   name: string;
   slug: string;
   status: string;
};

type Data = {
   category: Category;
   category_id: number;
   created_at: string;
   desc: any;
   id: number;
   updated_at: string;
   user_id: number;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type ProductRequest = {
   current_page: number;
   data: Data[];
   first_page_url: string;
   from: number;
   last_page: number;
   last_page_url: string;
   links: Link[];
   next_page_url: string | null;
   path: string;
   per_page: number;
   prev_page_url: string | null;
   to: number;
   total: number;
};

type Props = {
   setPage: React.Dispatch<React.SetStateAction<number>>;
   getProductRequests: any;
   page: number;
   limit: number;
   search: string;
   onHandleResetTable: (page: number, limit: number, search: string) => void;
};

export default function ProductRequestsTable({
   setPage,
   getProductRequests,
   page,
   limit,
   search,
   onHandleResetTable,
}: Props) {
   const dispatch = useDispatch<AppDispatch>();
   const { product_request_datas } = useSelector(
      (state: BuyerState) => state.buyer.productRequest
   );
   const productRequestDatas: ProductRequest = product_request_datas;
   const { data, links, current_page, last_page, from, to } =
      productRequestDatas;
   const productRequests: Data[] = data;

   const onHandlePagination = useCallback(
      (page: number): void => {
         setPage(page);
         getProductRequests(page, limit, search);
      },
      [limit, search]
   );

   const onDeleteHandle = useCallback(
      (id: number) => {
         dispatch(delete_product_requests({ id, page, limit, search }));
      },
      [dispatch, page, limit, search]
   );

   useEffect(() => {
      if (current_page !== last_page && from === null && to === null) {
         setPage(last_page);
         getProductRequests(last_page, limit, search);
      }
   }, [current_page, last_page, from, to, limit, search]);

   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card mb-7">
            <BuyerTableHeader
               link="/buyer/product-request"
               linkName="Product Request"
               onHandleResetTable={onHandleResetTable}
               resetBtn
            />

            <div className=" overflow-x-auto mb-7">
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
                           Category
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Discription
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th-r text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        ></th>
                     </tr>
                  </thead>
                  <tbody>
                     {productRequests && productRequests.length > 0
                        ? productRequests.map(
                             (productRequest: Data, index: number) => (
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
                                      {productRequest?.category?.name}
                                   </td>
                                   <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                                      <div
                                         dangerouslySetInnerHTML={{
                                            __html: productRequest?.desc,
                                         }}
                                      />
                                   </td>
                                   <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                      <div className="flex flex-wrap gap-x-2">
                                         <div className="bg-[#e6e6e6] rounded w-[30px] h-[22px] flex items-center justify-center">
                                            <div className="w-4 h-4 text-[#2F2F2F]">
                                               <EEyeSvgIcon />
                                            </div>
                                         </div>

                                         <div className="bg-[#e6e6e6] rounded w-[22px] h-[22px] flex items-center justify-center">
                                            <Button
                                               type="button"
                                               className="w-[13.33px] h-[12.26px] text-[#2F2F2F]"
                                               onClick={() =>
                                                  onDeleteHandle(
                                                     productRequest?.id
                                                  )
                                               }
                                            >
                                               <DDeleteSvgIcon />
                                            </Button>
                                         </div>
                                      </div>
                                   </td>
                                </tr>
                             )
                          )
                        : null}
                  </tbody>
               </table>
            </div>
         </div>
         <BuyerPagination
            links={links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
         />
      </Fragment>
   );
}
