"use client";
import React, { Fragment, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CitySvgIcon, EtUpArrowSvgIcon } from "@admin/components/SvgIcons";
import { AdminState, AppDispatch } from "@admin/store";
import { getCities } from "@/admin/cities/featrues/CityAcion";
import { Dropdown } from "flowbite-react";
import CityContext from "../../featrues/CityContext";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const TableDropdownBtn = dynamic(
   () => import("@admin/components/TableDropdownBtn")
);
const AdminPagination = dynamic(() => import("@admin/components/Pagination"));
const NavLink = dynamic(() => import("@/components/NavLink"));
const TableHeader = dynamic(() => import("@admin/components/TableHeader"));
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));

const itemClass =
   "!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white rounded-lg py-1 px-3 transition-colors w-full flex justify-center mb-2";

const icon = (
   <div className="w-6 h-6 text-[#2F2F2F]">
      <CitySvgIcon />
   </div>
);

interface Country {
   id: number;
   iso: string;
   name: string;
}

type City = {
   id: number | string;
   name: string;
   slug: string;
   country: Country;
   map: string;
   desc: any;
   status: string;
};

type Link = {
   url: string;
   label: string;
   active: boolean;
};

type CitiesData = {
   data: City[];
   links: Link[];
   last_page: number;
   from: number;
   to: number;
};

export default function CityTable() {
   const { page, perPage, search, setPage, setSearch, onDeleteHandle } =
      CityContext();
   const searchRef = useRef<HTMLInputElement | null>(null);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getCities({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const onHandleFilterbtn = useCallback((search: string) => {
      setSearch(search);
      dispatch(getCities({ page, perPage, search }));
   }, []);

   const onHandlePagination = useCallback(
      (page: any) => {
         setPage(page);
         dispatch(getCities({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandleResetTable = useCallback(() => {
      setPage(1);
      setSearch("");
      if (searchRef.current) {
         searchRef.current.value = "";
      }
      dispatch(getCities({ page: 1, perPage, search: "" }));
   }, [dispatch, page, perPage, search]);

   const { cities } = useSelector((state: AdminState) => state?.admin?.city);

   // Safely access the data with null-checks
   const Cities = cities as CitiesData | any | [];

   const links = Cities?.links as Link[] | [];
   const lastPage = Cities?.last_page as number;
   const from = Cities?.from as number;
   const to = Cities?.to as number;

   useEffect(() => {
      if (lastPage === 1 && from === null && to === null) {
         const page = lastPage;
         dispatch(getCities({ page, perPage, search }));
      }
   }, [dispatch, lastPage, from, to, perPage]);

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Cities"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />

         <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-7">
            <TableHeader
               listLabel="Cities"
               link="/admin/city-create"
               onHandleResetTable={onHandleResetTable}
            />
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
                        City ID
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        City name
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
                        Country
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Status
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     >
                        Rank
                     </th>
                     <th
                        scope="col"
                        className="px-6 py-3 table-head-th-r text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     ></th>
                  </tr>
               </thead>
               <tbody>
                  {Cities && Cities.data && Cities.data.length > 0 ? (
                     Cities.data.map((city: City, index: number) => {
                        const buttons = [
                           {
                              button: (
                                 <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                    <NavLink
                                       href={`/admin/city/${city?.slug}`}
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
                                       href={`/admin/city-edit/${city.id}`}
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
                                             Number(city?.id),
                                             Number(page),
                                             Number(perPage),
                                             String(search)
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
                                 <div className="w-20">#{city.id}</div>
                              </td>
                              <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 {city?.name}
                              </td>
                              <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 {city.slug}
                              </td>
                              <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 {city?.country?.name}
                              </td>
                              <td className="px-6 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 <span
                                    className={`${
                                       city?.status === "active"
                                          ? "bg-[#39A85B]"
                                          : "bg-[#f46842]"
                                    } text-white text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-3 h-6 flex justify-center items-center`}
                                 >
                                    {city?.status === "active"
                                       ? "Active"
                                       : "Inactive"}
                                 </span>
                              </td>
                              <td className="px-6 py-4 table-body-td text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 <div className="flex gap-x-1">
                                    <div className="text-[#52FF00] w-6 h-6">
                                       <EtUpArrowSvgIcon />
                                    </div>
                                    <div className="bg-[#98b0ee] text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold rounded-[50%] w-5 h-5 flex justify-center items-center">
                                       <div className="w-3">01</div>
                                    </div>
                                 </div>
                              </td>
                              <td className="px-6 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                 <TableDropdownBtn buttons={buttons} />
                              </td>
                           </tr>
                        );
                     })
                  ) : (
                     <tr className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                        <td
                           colSpan={8}
                           className="px-6 py-4 table-body-td text-[#2f2f2f] text-center font-['Arial-Bold',_sans-serif] text-xs font-bold"
                        >
                           <div>Data not found</div>
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
         <AdminPagination
            links={links}
            lastPage={lastPage}
            onHandlePagination={onHandlePagination}
         />
      </Fragment>
   );
}
