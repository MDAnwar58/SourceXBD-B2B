"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { OrderListSvgIcon } from "@admin/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { getOrders } from "@/admin/orders/features/OrderAction";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const OrdersTable = dynamic(() => import("./OrdersTable"));
const AdminPagination = dynamic(() => import("@admin/components/Pagination"));

const icon = (
   <div className="w-6 h-6">
      <OrderListSvgIcon />
   </div>
);

type Product = {
   category: string;
   discount_price: number;
   image: string;
   name: string;
   price: number;
};

type Seller = { name: string; image: string | null };
type User = { name: string; image: string | null };

type Order = {
   address: string;
   amount: string;
   company: string;
   created_at: string;
   id: number;
   location_name: string;
   pay_status: string;
   product: Product;
   qty: number;
   seller: Seller;
   status: string;
   transaction_id: string;
   user: User;
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

type OrdersData = {
   data: Order[];
   meta: Meta;
};

export default function OrderContent() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const searchRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      dispatch(getOrders({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getOrders({ page, perPage, search }));
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
         dispatch(getOrders({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandlePagination = useCallback(
      (page: any) => {
         setPage(page);
         dispatch(getOrders({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const { orders_data = {} } = useSelector(
      (state: AdminState) => state.admin.order
   );
   const OrdersData = orders_data as any;
   const { data = [], meta = {} } = OrdersData;
   const orders = data as Order[];
   const Meta = meta as Meta;
   const { links = [], last_page } = Meta;

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Orders"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <OrdersTable orders={orders} />
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
