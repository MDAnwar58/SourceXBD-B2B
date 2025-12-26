"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { DashboardQucikActionSvgIcon } from "@admin/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { getUsers } from "@/admin/users/features/UserAction";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const UsersTable = dynamic(() => import("./UsersTable"), { ssr: false });
const AdminPagination = dynamic(() => import("@admin/components/Pagination"), {
   ssr: false,
});

type User = {
   company: string | null;
   created_at: string;
   email: string;
   id: number;
   image: any[];
   name: string;
   phone: string | null;
   role: string;
   status: string;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type Meta = {
   current_page: number;
   from: number;
   last_page: number;
   links: Link[];
   path: string;
   per_page: number;
   to: number;
   total: number;
};

type UsersData = {
   data: User[];
   meta: Meta;
};

const icon = (
   <span className="w-6 h-6">
      <DashboardQucikActionSvgIcon />
   </span>
);

export default function UsersContent() {
   const [page, setPage] = useState(1);
   const [perPage, setPerPage] = useState(5);
   const [search, setSearch] = useState("");
   const dispatch = useDispatch<AppDispatch>();
   const searchRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      dispatch(getUsers({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getUsers({ page, perPage, search }));
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
         dispatch(getUsers({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandlePagination = useCallback(
      (page: any) => {
         setPage(page);
         dispatch(getUsers({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const { users_data = {} } = useSelector(
      (state: AdminState) => state.admin.user
   );
   const { data = [], meta = {} } = users_data as UsersData;
   const users = data as User[];
   const Meta = meta as Meta;
   const links = Meta?.links;
   const last_page = Meta?.last_page;

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Users"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <UsersTable users={users} />
         <AdminPagination
            links={links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
            resetBtn={true}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
