import React, { Fragment } from "react";
import { AllProductsSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
import { SelectProductSvgIcon } from "../../components/SvgIcons";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const ProductCreateForm = dynamic(
   () => import("./Components/ProductCreateForm")
);

const icon = (
   <span className="w-6 h-6">
      <SelectProductSvgIcon />
   </span>
);

export default function SelectProduct() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Select Product" searchBox={false} />
         <ProductCreateForm />
      </Fragment>
   );
}
