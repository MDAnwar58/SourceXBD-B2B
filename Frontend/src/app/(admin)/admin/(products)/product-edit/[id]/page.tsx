import React, { Fragment } from "react";
import { AllProductsSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
import { Metadata } from "next";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const ProductEditForm = dynamic(() => import("./Components/ProductEditForm"), {
   ssr: false,
});

export const metadata: Metadata = {
   title: "Product Edit",
};

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
