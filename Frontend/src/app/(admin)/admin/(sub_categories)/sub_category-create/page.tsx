import React, { Fragment } from "react";
import { CategoriesSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const SubCategoryForm = dynamic(() => import("./Components/SubCategoryForm"));

const icon = (
   <div className="w-6 h-6">
      <CategoriesSvgIcon />
   </div>
);

export default function SubCategoryCreate() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Category Create" searchBox={false} />
         <SubCategoryForm />
      </Fragment>
   );
}
