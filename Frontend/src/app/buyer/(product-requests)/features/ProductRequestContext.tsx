import { AppDispatch } from "@/buyer/store";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { get_product_requests } from "./ProductRequestAction";

export default function ProductRequestContext() {
   const [page, setPage] = useState<number>(1);
   const [limit, setLimit] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();

   const getProductRequests = useCallback(
      (Page: number, Limit: number, search: string) => {
         dispatch(get_product_requests({ page: Page, limit: Limit, search }));
      },
      [dispatch]
   );
   return {
      getProductRequests,
      page,
      setPage,
      limit,
      setLimit,
      search,
      setSearch,
   };
}
