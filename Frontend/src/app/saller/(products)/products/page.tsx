import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const ProductsTable = dynamic(() => import("./Components/ProductsTable"));

export default function ComponentName() {
   return (
      <Fragment>
         <ProductsTable />
      </Fragment>
   );
}
