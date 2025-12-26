import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ProductsContent = dynamic(() => import("./Components/ProductsContent"));

export const metadata: Metadata = {
   title: "Products",
};

export default function Product() {
   return (
      <Fragment>
         <ProductsContent />
      </Fragment>
   );
}
