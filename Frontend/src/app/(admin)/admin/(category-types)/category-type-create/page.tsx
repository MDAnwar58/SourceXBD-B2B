"use client";
import React, { Fragment } from "react";
import { CategoriesSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const CategoryTypeForm = dynamic(
   () => import("./Components/CategoryTypeForm"),
   {
      ssr: false,
   }
);

const icon = (
   <div className="w-6 h-6">
      <CategoriesSvgIcon />
   </div>
);

export default function CategoryTypeCreate() {
   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Category Type Create"
            searchBox={false}
         />
         <CategoryTypeForm />
      </Fragment>
   );
}
