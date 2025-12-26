import React, { useRef, useState } from "react";
import {} from "./SubscriptionAcion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import { useRouter } from "next/navigation";

export default function SubscriptionContext() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   return {
      page,
      perPage,
      search,
      setPerPage,
      setPage,
      setSearch,
   };
}
