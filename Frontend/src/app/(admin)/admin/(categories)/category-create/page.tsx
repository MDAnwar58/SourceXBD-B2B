"use client";
import React, { Fragment, useEffect } from "react";
import { CategoriesSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const CategoryForm = dynamic(() => import("./Components/CategoryForm"), {
   ssr: false,
});
import { getCategoryTypes } from "@admin/categories/featrues/CategoryAcion";

const icon = (
   <div className="w-6 h-6">
      <CategoriesSvgIcon />
   </div>
);

export default function CategoryCreate() {
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getCategoryTypes());
   }, [dispatch]);

   return (
      <Fragment>
         <PageHeader icon={icon} title="Category Create" searchBox={false} />
         <CategoryForm />
      </Fragment>
   );
}
