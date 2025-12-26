"use client";
import React, { Fragment, useEffect, useRef } from "react";
import PageHeader from "@/saller/components/PageHeader";
import InventoryTable from "./InventoryTable";
import { InventorySvgIcon } from "@/saller/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/saller/store";
import { get_inventories } from "@/saller/inventory/features/InventoryAction";
import InventoryContext from "@/saller/inventory/features/InventoryContext";
import { useRouter } from "next/navigation";

const icon = (
   <div className="w-6 h-6">
      <InventorySvgIcon />
   </div>
);

export default function InventoryContent() {
   const { getInventories, page, perPage, search, setPage, setSearch } =
      InventoryContext();
   const router = useRouter();
   const searchRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      router.back();
      getInventories(page, perPage, search);
   }, [router, page, perPage, search]);

   return (
      <Fragment>
         <PageHeader icon={icon} title="Inventory" searchRef={searchRef} />
         <InventoryTable
            setPage={setPage}
            perPage={perPage}
            search={search}
            getInventories={getInventories}
         />
      </Fragment>
   );
}
