import React, { Fragment } from "react";
import { CategoriesSvgIcon } from "@admin/components/SvgIcons";
import PageHeader from "@admin/components/PageHeader";
import dynamic from "next/dynamic";
const CategoryUpdateForm = dynamic(
   () => import("./Components/CategoryUpdateForm"),
   { ssr: false }
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
