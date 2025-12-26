import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const SubCategoriesTable = dynamic(
   () => import("./Components/SubCategoriesTable")
);

export default function SubCategories() {
   return (
      <Fragment>
         <SubCategoriesTable />
      </Fragment>
   );
}
