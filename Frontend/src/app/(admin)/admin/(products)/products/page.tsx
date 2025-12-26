import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
const ProductsTable = dynamic(() => import("./Components/ProductsTable"), {
   ssr: false,
});

export const metadata: Metadata = {
   title: "Products",
};

export default function Products() {
   return (
      <Fragment>
         <ProductsTable />
      </Fragment>
   );
}
