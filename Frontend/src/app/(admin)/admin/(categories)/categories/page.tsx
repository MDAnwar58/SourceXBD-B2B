import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const CategoriesTable = dynamic(() => import("./Components/CategoriesTable"), {
   ssr: false,
});

export default function Categories() {
   return (
      <Fragment>
         <CategoriesTable />
      </Fragment>
   );
}
