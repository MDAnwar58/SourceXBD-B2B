import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
const ProductRequestContent = dynamic(
   () => import("./Components/ProductRequestContent")
);

export const metadata: Metadata = {
   title: "Product Request",
};

export default function ProductRequestCreate() {
   return (
      <Fragment>
         <ProductRequestContent />
      </Fragment>
   );
}
