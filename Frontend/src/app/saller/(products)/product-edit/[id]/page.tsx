import React, { Fragment } from "react";
import { AllProductsSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const ProductEditForm = dynamic(() => import("./Components/ProductEditForm"));

const icon = (
   <span className="w-6 h-6">
      <AllProductsSvgIcon />
   </span>
);

type Props = {
   params: {
      id: string;
   };
};

export default function ProductEdit({ params }: Props) {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Product Edit" searchBox={false} />
         <ProductEditForm params={params} />
      </Fragment>
   );
}
