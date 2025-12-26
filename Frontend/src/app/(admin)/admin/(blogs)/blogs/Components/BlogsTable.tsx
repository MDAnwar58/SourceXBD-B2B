"use client";
import React, { Fragment, useCallback, useEffect, useRef } from "react";
import { AdminState, AppDispatch } from "@admin/store";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "@/admin/blogs/featrues/BlogAction";
import { BuyerComplaintsSvgIcon } from "@admin/components/SvgIcons";
import { LocalUrl } from "@/components/react/localhost";
import { useDateformat } from "@/components/react/date";
import { Dropdown } from "flowbite-react";
import BlogContext from "@/admin/blogs/featrues/BlogContext";
import dynamic from "next/dynamic";
const CheckBox = dynamic(() => import("@/components/Checkbox"));
const Img = dynamic(() => import("@/components/Image"));
const TableHeader = dynamic(() => import("@admin/components/TableHeader"));
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const TableDropdownBtn = dynamic(
   () => import("../../../components/TableDropdownBtn")
);
const NavLink = dynamic(() => import("@/components/NavLink"));
const AdminPagination = dynamic(() => import("../../../components/Pagination"));

const itemClass =
   "!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white rounded-lg py-1 px-3 transition-colors w-full flex justify-center mb-2";

type Tag = {
   id: string;
   text: string;
};

type Link = {
   url: string;
   label: string;
   active: boolean;
};

type Meta = {
   current_page: number;
   from: number;
   last_page: number;
   links: Link[];
   per_page: number;
   to: number;
   total: number;
};

type Blog = {
   id: string;
   title: string;
   slug: string;
   sub_title: string;
   type: string;
   desc: string;
   tags: Tag[];
   status: string;
   images: any;
   created_at: any;
};

type BlogData = {
   data: Blog[];
   meta: Meta[];
};

const icon = (
   <div className="w-6 h-6">
      <BuyerComplaintsSvgIcon />
   </div>
);

export default function BlogsTable() {
   const {
      page,
      perPage,
      search,
      setPage,
      setPerPage,
      setSearch,
      onDeleteHandle,
   } = BlogContext();
   const searchRef = useRef<HTMLInputElement | null>(null);
   const dispatch = useDispatch<AppDispatch>();
   const localUrl = LocalUrl();

   useEffect(() => {
      dispatch(getBlogs({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getBlogs({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandleResetTable = useCallback(
      (page: number, perPage: number, search: string) => {
         setPage(page);
         setPerPage(perPage);
         setSearch(search);
         if (searchRef.current) {
            searchRef.current.value = "";
         }
         dispatch(getBlogs({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandlePagination = useCallback(
      (page: any) => {
         setPage(page);
         dispatch(getBlogs({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const { blogs } = useSelector((state: AdminState) => state.admin.blog);
   const Blogs = blogs as BlogData[] | any;
   const { data, meta } = Blogs;
   const links = meta?.links;
   const last_page = meta?.last_page;

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Blogs"
            searchRef={searchRef}
            onHandleFilterbtn={onHandleFilterbtn}
         />
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card mb-7">
            <TableHeader
               listLabel="Blogs List"
               link="/admin/blog-create"
               onHandleResetTable={onHandleResetTable}
            />
            <div className="w-full overflow-x-auto">
               <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                     <tr>
                        <th scope="col" className="px-6 py-3 table-head-th-l">
                           <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
                        </th>
                        <th
                           scope="col"
                           className="p-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           blog title
                        </th>
                        <th
                           scope="col"
                           className="p-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           description
                        </th>
                        <th
                           scope="col"
                           className="p-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        >
                           Date
                        </th>
                        <th
                           scope="col"
                           className="p-3 table-head-th-r text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                        ></th>
                     </tr>
                  </thead>
                  <tbody>
                     {data && data?.length > 0 ? (
                        data?.map((blog: Blog, index: number) => {
                           const formattedDate = useDateformat(
                              blog?.created_at
                           );
                           const buttons = [
                              {
                                 button: (
                                    <Dropdown.Item className="!p-0 !bg-transparent hover:!bg-transparent">
                                       <NavLink
                                          href={`/admin/blog/${blog?.slug}`}
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
                                          href={`/admin/blog-edit/${blog?.id}`}
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
                                                Number(blog?.id),
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
                           const imagePath = localUrl + "/" + blog?.images[0];
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
                                 <td className="px-3 py-4 table-body-td text-[#2f2f2f] dark:text-[#fff] text-left font-['Arial-Regular',_sans-serif] text-xs font-bold">
                                    <div className=" flex items-center gap-x-2 w-60">
                                       {blog?.images.length > 0 && (
                                          <Img
                                             src={imagePath.toString()}
                                             alt="..."
                                             width={70}
                                             height={70}
                                             className="rounded w-14 h-[38px]"
                                          />
                                       )}
                                       <div className="w-48">{blog?.title}</div>
                                    </div>
                                 </td>
                                 <td className="px-3 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <p
                                       className="2xl:w-full w-[455px]"
                                       dangerouslySetInnerHTML={{
                                          __html: blog.desc,
                                       }}
                                    />
                                 </td>
                                 <td className="px-3 py-4 table-body-td text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <div className="w-20">
                                       {formattedDate}09 - 08 - 2024
                                    </div>
                                 </td>
                                 <td className="px-3 py-4 table-body-td-r text-left font-['Arial-Bold',_sans-serif] text-xs font-bold">
                                    <TableDropdownBtn buttons={buttons} />
                                 </td>
                              </tr>
                           );
                        })
                     ) : (
                        <tr className="bg-[white] border-b hover:border-transparent dark:bg-gray-800 dark:border-gray-700">
                           <td
                              colSpan={5}
                              className="px-3 py-4 table-body-td text-[#2f2f2f] text-center font-['Arial-Bold',_sans-serif] text-xs font-bold"
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
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
         />
      </Fragment>
   );
}
