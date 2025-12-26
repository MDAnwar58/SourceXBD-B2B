"use client";
import React, { Fragment, useEffect, useState } from "react";
import {
   DashboardEditSvgIcon,
   DeleteSvgIcon,
} from "@admin/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import {
   changeStatusCategoryType,
   deleteCategoryType,
   getCategoryTypes,
} from "../../featrues/CategoryTypeAcion";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"), { ssr: false });
const TableHeader = dynamic(() => import("@admin/components/TableHeader"), {
   ssr: false,
});
const TableHead = dynamic(() => import("./TableHead"), { ssr: false });
const Link = dynamic(() => import("next/link"), { ssr: false });
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const ToggleSwitch = dynamic(() => import("@admin/components/ToggleSwitch"), {
   ssr: false,
});
const AdminPagination = dynamic(() => import("@admin/components/Pagination"), {
   ssr: false,
});

type CategoryType = {
   id: number;
   name: string;
   status: string;
};

type Link = {
   url?: string;
   label?: string;
   active?: boolean;
};

interface CategoryTypeData {
   data?: CategoryType[];
   current_page?: number;
   from?: number;
   links?: Link[];
   last_page?: number;
   path?: string;
   per_page?: number;
   to?: number;
   total?: number;
}

export default function CategoryTypesTable() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [toggleSwitch, setToggleSwitch] = useState<Boolean>(true);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getCategoryTypes({ page, perPage }));
   }, [dispatch, page, perPage]);

   const onDeleteHandle = (id: number) => {
      dispatch(deleteCategoryType({ id, page, perPage }));
   };

   const getStatusValue = (status: string) => {
      const statusValue = status === "active" ? true : false;
      return statusValue;
   };

   const onHandleStatus = (id: number, status: any) => {
      dispatch(changeStatusCategoryType({ id, page, perPage }));
   };

   const onHandlePagination = (page: any) => {
      setPage(page);
      dispatch(getCategoryTypes({ page, perPage }));
   };

   const { category_types, tableLoading } = useSelector(
      (state: AdminState) => state.admin.categoryType
   );
   const categoryTypes = category_types as CategoryTypeData | undefined;
   const links = categoryTypes?.links;
   const lastPage = categoryTypes?.last_page;
   const from = categoryTypes?.from;
   const to = categoryTypes?.to;
   // console.log(categoryTypes);
   useEffect(() => {
      if (lastPage === 1 && from === null && to === null) {
         const page = lastPage;
         dispatch(getCategoryTypes({ page, perPage }));
      }
   }, [dispatch, lastPage, from, to, perPage]);
   return (
      <Fragment>
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card mb-7">
            <TableHeader
               listLabel="Category Types"
               link="/admin/category-type-create"
            />
            <div className=" overflow-x-auto w-full">
               <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <TableHead />
                  <tbody>
                     {Array.isArray(categoryTypes?.data) &&
                     categoryTypes?.data.length > 0 ? (
                        categoryTypes?.data?.map(
                           (category_type: CategoryType, index: number) => (
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
                                    {category_type?.name}
                                 </td>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <ToggleSwitch
                                       checked={getStatusValue(
                                          category_type?.status
                                       )}
                                       onChange={(value) =>
                                          onHandleStatus(
                                             category_type?.id,
                                             value
                                          )
                                       }
                                    />
                                 </td>
                                 <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <div className="flex items-center gap-2">
                                       <Link
                                          href={`/admin/category-type/${category_type.id}`}
                                          className="bg-[#e6e6e6] text-gray-700 rounded w-[22px] h-[22px] flex items-center justify-center"
                                       >
                                          <div className="w-4 h-4">
                                             <DashboardEditSvgIcon />
                                          </div>
                                       </Link>
                                       <Button
                                          type="button"
                                          className="bg-[#e6e6e6] text-gray-700 rounded w-[22px] h-[22px] flex items-center justify-center"
                                          onClick={() =>
                                             onDeleteHandle(category_type.id)
                                          }
                                       >
                                          <div className="w-4 h-4">
                                             <DeleteSvgIcon />
                                          </div>
                                       </Button>
                                    </div>
                                 </td>
                              </tr>
                           )
                        )
                     ) : (
                        <tr className="text-center">
                           <td
                              colSpan={4}
                              className=" py-3 text-lg font-semibold"
                           >
                              Data not found
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </div>

         <AdminPagination
            links={links}
            onHandlePagination={onHandlePagination}
            lastPage={lastPage}
         />
      </Fragment>
   );
}
