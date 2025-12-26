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
   changeStatusSubCategory,
   deleteSubCategory,
   getSubCategories,
} from "@/admin/sub_categories/featrues/SubCategoryAcion";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const ToggleSwitch = dynamic(() => import("@admin/components/ToggleSwitch"));
const TableHeader = dynamic(() => import("@admin/components/TableHeader"));
const AdminPagination = dynamic(() => import("@admin/components/Pagination"));
const NavLink = dynamic(() => import("@/components/NavLink"));
const Button = dynamic(() => import("@/components/Button"));
const PageHeader = dynamic(() => import("../../../components/PageHeader"));
const TableHead = dynamic(() => import("./TableHead"));

type SubCategory = {
   id: number;
   category: string;
   name: string;
   slug: string;
   desc: string;
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

interface SubCategoryData {
   data?: SubCategory[];
   meta?: Meta;
}

const icon = (
   <div className="w-6 h-6">
      <CategoriesSvgIcon />
   </div>
);

export default function SubCategoriesTable() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const searchRef = useRef<HTMLInputElement | null>(null);
   const [toggleSwitch, setToggleSwitch] = useState<Boolean>(true);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getSubCategories({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const onDeleteHandle = (id: number) => {
      dispatch(deleteSubCategory({ id, page, perPage, search }));
   };

   const getStatusValue = (status: string) => {
      const statusValue = status === "active" ? true : false;
      return statusValue;
   };

   const onHandleStatus = (id: number, status: any) => {
      dispatch(changeStatusSubCategory({ id, page, perPage, search }));
   };

   const onHandlePagination = (page: any) => {
      setPage(page);
      dispatch(getSubCategories({ page, perPage, search }));
   };

   const onHandleFilterbtn = (search: string) => {
      setSearch(search);
      dispatch(getSubCategories({ page, perPage, search }));
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
      dispatch(getSubCategories({ page, perPage, search }));
   };

   const { sub_categories, tableLoading } = useSelector(
      (state: AdminState) => state.admin.sub_category
   );
   const subCategories = sub_categories as SubCategoryData | undefined;
   const links = subCategories?.meta?.links as Link | undefined;
   const lastPage = subCategories?.meta?.last_page;
   const from = subCategories?.meta?.from;
   const to = subCategories?.meta?.to;

   useEffect(() => {
      if (lastPage === 1 && from === null && to === null) {
         const page = lastPage;
         dispatch(getSubCategories({ page, perPage, search }));
      }
   }, [dispatch, lastPage, from, to, perPage]);

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Sub Categories"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />

         <div className="bg-white p-5 rounded-[20px] shadow-admin-card mb-7">
            <TableHeader
               listLabel="Sub Categories"
               link="/admin/sub_category-create"
               onHandleResetTable={onHandleResetTable}
            />
            <div className=" overflow-x-auto w-full">
               <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <TableHead />
                  <tbody>
                     {Array.isArray(subCategories?.data) &&
                     subCategories?.data.length > 0 ? (
                        subCategories?.data?.map(
                           (sub_category: SubCategory, index: number) => (
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
                                    {sub_category.name}
                                 </td>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                    {sub_category.slug}
                                 </td>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    {sub_category.category}
                                 </td>
                                 <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <ToggleSwitch
                                       checked={getStatusValue(
                                          sub_category?.status
                                       )}
                                       onChange={(value) =>
                                          onHandleStatus(
                                             sub_category?.id,
                                             value
                                          )
                                       }
                                    />
                                 </td>
                                 <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <div className="flex items-center gap-2">
                                       <NavLink
                                          href={`/admin/sub_category/${sub_category.id}`}
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
                                             onDeleteHandle(sub_category.id)
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

         {Array.isArray(subCategories?.data) &&
            subCategories?.data.length > 0 && (
               <AdminPagination
                  links={links}
                  onHandlePagination={onHandlePagination}
                  lastPage={lastPage}
               />
            )}
      </Fragment>
   );
}
