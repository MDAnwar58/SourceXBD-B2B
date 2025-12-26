"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { ListSvgIcon } from "@/buyer/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, BuyerState } from "@/buyer/store";
import { getWishProducts } from "@/buyer/wish-list/features/WishListAction";

import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/buyer/components/PageHeader"));
const Grid = dynamic(() => import("@/buyer/components/buyer-grid"));
const WishListProduct = dynamic(() => import("./WishListProduct"));
const WishListProductAddCard = dynamic(
   () => import("./WishListProductAddCard")
);
const Button = dynamic(() => import("@/components/Button"));

type WishProduct = {
   id: number;
   name: string;
   price: number;
   discount_price: number | null;
   min_order: number | null;
   s_desc: string;
   image: string;
   category: string;
   company: string;
   contact: string | null;
   is_wish_active: boolean;
   slug: string;
   spacification: any | null;
   time_ago: string;
};

const icon = (
   <span className="w-6 h-6">
      <ListSvgIcon />
   </span>
);

export default function WishListContent() {
   const [limit, setLimit] = useState<number>(3);
   const [search, setSearch] = useState<string>("");
   const searchRef = useRef<HTMLInputElement | null>(null);
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getWishProducts({ limit, search }));
   }, [dispatch, limit]);

   const onLoadMoreHandle = useCallback(
      (Limit: number) => {
         setLimit((limit) => limit + Limit);
         dispatch(getWishProducts({ limit: limit + Limit, search }));
      },
      [dispatch, search]
   );

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getWishProducts({ limit, search }));
      },
      [dispatch, limit]
   );

   const { wish_products = [], totalLength } = useSelector(
      (state: BuyerState) => state.buyer.wishList
   );

   const products = wish_products;

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Wish List"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />

         <Grid
            gridOne={true}
            className="13xl:grid-cols-6 9xl:grid-cols-5 3xl:grid-cols-4 lg:grid-cols-3 2md:grid-cols-2 md:grid-cols-1 xs:grid-cols-2 xs6:grid-cols-1 gap-7 mt-3"
            gap={5}
         >
            {products && products.length > 0
               ? products.map((product: WishProduct, index: number) => (
                    <Fragment key={index}>
                       <WishListProduct
                          product={product}
                          limit={limit}
                          search={search}
                       />
                    </Fragment>
                 ))
               : null}
            <WishListProductAddCard totalLength={totalLength} />
         </Grid>

         {totalLength > 3 ? (
            <div className="flex justify-center pt-9">
               <Button
                  type="button"
                  className={` ${totalLength !== products.length ? "bg-blue-gradient" : " bg-blue-gradient-disable"} px-9 py-3 rounded-2xl text-white shadow-admin-table-btn`}
                  onClick={() => onLoadMoreHandle(3)}
               >
                  {totalLength > products.length ? "Load More" : "End"}
               </Button>
            </div>
         ) : null}
      </Fragment>
   );
}
