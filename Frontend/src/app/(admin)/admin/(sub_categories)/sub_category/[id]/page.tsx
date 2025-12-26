import React, { Fragment } from "react";
import { CategoriesSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const CategoryUpdateForm = dynamic(
   () => import("./Components/CategoryUpdateForm")
);

const icon = (
   <div className="w-6 h-6">
      <CategoriesSvgIcon />
   </div>
);

type Props = {
   params: {
      id: string;
   };
};

export default function CategoryEdit({ params }: Props) {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Category Edit" searchBox={false} />

         <CategoryUpdateForm params={params} />
      </Fragment>
   );
}
