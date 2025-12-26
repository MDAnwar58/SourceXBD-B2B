import { AppDispatch } from "@/app/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onSearchGetProducts } from "./CommonAction";
import { useRouter } from "next/navigation";

export default function CommonContext() {
   const [selectedCategory, setSelectedCategory] = useState<{
      id: number | null;
      name: string;
      slug: string;
   }>({
      id: null,
      name: "all",
      slug: "",
   });
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const onHandleSearch = (): void => {
      if (search) {
         dispatch(
            onSearchGetProducts({
               search,
               category: String(selectedCategory?.slug),
               router,
               setSelectedCategory,
               setSearch,
            })
         );
      }
   };

   return {
      selectedCategory,
      setSelectedCategory,
      search,
      setSearch,
      onHandleSearch,
   };
}
