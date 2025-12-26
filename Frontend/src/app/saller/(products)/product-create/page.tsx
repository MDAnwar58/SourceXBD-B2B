import React, { Fragment } from "react";
import { AllProductsSvgIcon } from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const ProductCreateForm = dynamic(
   () => import("./Components/ProductCreateForm")
);

const icon = (
   <span className="w-6 h-6">
      <AllProductsSvgIcon />
   </span>
);

export default function ProductCreate() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Product Create" searchBox={false} />
         <ProductCreateForm />
      </Fragment>
   );
}
