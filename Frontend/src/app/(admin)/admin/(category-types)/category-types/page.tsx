"use client";
import React, { Fragment } from "react";
import { CategoriesSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const CategoryTypesTable = dynamic(
   () => import("./Components/CategoryTypesTable"),
   {
      ssr: false,
   }
);
const AdminPagination = dynamic(() => import("@admin/components/Pagination"), {
   ssr: false,
});

const icon = (
   <div className="w-6 h-6">
      <CategoriesSvgIcon />
   </div>
);

export default function CategoryTypes() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Category Types" />
         <CategoryTypesTable />
      </Fragment>
   );
}
