"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import {
   CategoriesSvgIcon,
   DashboardEditSvgIcon,
   DeleteSvgIcon,
} from "@admin/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import {
   changeStatusCategory,
   deleteCategory,
   getCategories,
} from "@admin/categories/featrues/CategoryAcion";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"), { ssr: false });
const ToggleSwitch = dynamic(() => import("@admin/components/ToggleSwitch"), {
   ssr: false,
});
const TableHeader = dynamic(() => import("@admin/components/TableHeader"), {
   ssr: false,
});
const AdminPagination = dynamic(() => import("@admin/components/Pagination"), {
   ssr: false,
});
const NavLink = dynamic(() => import("@/components/NavLink"), { ssr: false });
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const Img = dynamic(() => import("@/components/Image"), { ssr: false });
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});

type Category = {
   id: number;
   type: string;
   name: string;
   slug: string;
   desc: string;
   images: any;
   status: string;
};

type Link = {
   url?: string;
   label?: string;
   active?: boolean;
};

type Meta = {
   current_page?: number;
   from?: number;
   last_page?: number;
   links?: Link[];
   path?: string;
   per_page?: number;
   to?: number;
   total?: number;
};

interface CategoryData {
   data?: Category[];
   meta?: Meta;
}

const icon = (
   <div className="w-6 h-6">
      <CategoriesSvgIcon />
   </div>
);

export default function CategoriesTable() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const searchRef = useRef<HTMLInputElement | null>(null);
   const [toggleSwitch, setToggleSwitch] = useState<Boolean>(true);
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getCategories({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const getStatusValue = (status: string) => {
      const statusValue = status === "active" ? true : false;
      return statusValue;
   };

   const onHandleStatus = (id: number, status: any) => {
      dispatch(changeStatusCategory({ id, page, perPage, search }));
   };

   const onHandlePagination = (page: any) => {
      setPage(page);
      dispatch(getCategories({ page, perPage, search }));
   };

   const onHandleFilterbtn = (search: string) => {
      setSearch(search);
      dispatch(getCategories({ page, perPage, search }));
   };

   const onHandleResetTable = (
      page: number,
      perPage: number,
      search: string
   ) => {
      setPage(page);
      setPerPage(perPage);
      setSearch(search);
      if (searchRef.current) {
         searchRef.current.value = "";
      }
      dispatch(getCategories({ page, perPage, search }));
   };

   const { categories, tableLoading } = useSelector(
      (state: AdminState) => state.admin.category
   );
   const Categories = categories as CategoryData | undefined;
   const links = Categories?.meta?.links as Link | undefined;
   const currentPage = Categories?.meta?.current_page;
   const lastPage = Categories?.meta?.last_page;
   const from = Categories?.meta?.from;
   const to = Categories?.meta?.to;

   const onDeleteHandle = (id: number) => {
      console.log(lastPage);
      dispatch(deleteCategory({ id, page, perPage, search }));
   };

   useEffect(() => {
      if (currentPage !== lastPage && from === null && to === null) {
         const page = lastPage as number;
         dispatch(getCategories({ page, perPage, search }));
      }
   }, [dispatch, currentPage, lastPage, from, to, perPage]);

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Categories"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />

         <div className="bg-white p-5 rounded-[20px] shadow-admin-card mb-7">
            <TableHeader
               listLabel="Categories"
               link="/admin/category-create"
               onHandleResetTable={onHandleResetTable}
            />
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
                           Category
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
                           Category Type
                        </th>
                        <th
                           scope="col"
                           className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Image
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
                     {Array.isArray(Categories?.data) &&
                     Categories?.data.length > 0 ? (
                        Categories?.data?.map(
                           (category: Category, index: number) => {
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
                                       {category.name}
                                    </td>
                                    <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                       {category.slug}
                                    </td>
                                    <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                       {category.type}
                                    </td>
                                    <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                       {category?.images?.length > 0 && (
                                          <Img
                                             src={
                                                localUrl +
                                                "/" +
                                                category.images.join()
                                             }
                                             alt="category-image"
                                             width={71}
                                             height={71}
                                             className="w-14 h-14 ronded-md"
                                          />
                                       )}
                                    </td>
                                    <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                       <ToggleSwitch
                                          checked={getStatusValue(
                                             category?.status
                                          )}
                                          onChange={(value) =>
                                             onHandleStatus(category?.id, value)
                                          }
                                       />
                                    </td>
                                    <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                       <div className="flex items-center gap-2">
                                          <NavLink
                                             href={`/admin/category/${category.id}`}
                                             className="bg-[#e6e6e6] text-gray-700 rounded w-[22px] h-[22px] flex items-center justify-center"
                                          >
                                             <div className="w-4 h-4">
                                                <DashboardEditSvgIcon />
                                             </div>
                                          </NavLink>
                                          <Button
                                             type="button"
                                             className="bg-[#e6e6e6] text-gray-700 rounded w-[22px] h-[22px] flex items-center justify-center"
                                             onClick={() =>
                                                onDeleteHandle(category.id)
                                             }
                                          >
                                             <div className="w-4 h-4">
                                                <DeleteSvgIcon />
                                             </div>
                                          </Button>
                                       </div>
                                    </td>
                                 </tr>
                              );
                           }
                        )
                     ) : (
                        <tr className="text-center">
                           <td
                              colSpan={6}
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

         {Array.isArray(Categories?.data) && Categories?.data.length > 0 && (
            <AdminPagination
               links={links}
               onHandlePagination={onHandlePagination}
               lastPage={lastPage}
            />
         )}
      </Fragment>
   );
}
