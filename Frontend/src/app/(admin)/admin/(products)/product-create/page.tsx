import React, { Fragment } from "react";
import { AllProductsSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
import { Metadata } from "next";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const ProductCreateForm = dynamic(
   () => import("./Components/ProductCreateForm"),
   { ssr: false }
);

export const metadata: Metadata = {
   title: "Product Create",
};

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
