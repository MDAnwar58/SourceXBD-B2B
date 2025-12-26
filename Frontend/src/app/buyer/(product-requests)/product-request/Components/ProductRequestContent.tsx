"use client";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
const PageHeader = dynamic(() => import("@/buyer/components/PageHeader"));
const ProductRequestForm = dynamic(() => import("./ProductRequestForm"));
import { ProductRequestSvgIcon } from "@/buyer/components/SvgIcons";

const icon = (
   <div className="w-6 h-6">
      <ProductRequestSvgIcon />
   </div>
);

export default function ProductRequestContent() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Product Request" searchBox={false} />
         <ProductRequestForm />
      </Fragment>
   );
}
