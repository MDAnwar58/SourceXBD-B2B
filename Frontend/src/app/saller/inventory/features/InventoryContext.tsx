import { useCallback, useState } from "react";
import { AppDispatch } from "@/saller/store";
import { useDispatch } from "react-redux";
import { get_inventories } from "./InventoryAction";
import { useRouter } from "next/navigation";

type EntityWithId = {
   id: string;
};

type IdCard = {
   url: string;
   title: string;
};

export default function InventoryContext() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const getInventories = useCallback(
      (Page: number, PerPage: number, Search: string): void => {
         dispatch(
            get_inventories({ page: Page, perPage: PerPage, search: Search })
         );
      },
      [dispatch]
   );

   return {
      getInventories,
      page,
      setPage,
      perPage,
      setPerPage,
      search,
      setSearch,
   };
}
