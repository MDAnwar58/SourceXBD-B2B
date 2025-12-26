import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const CityTable = dynamic(() => import("./Components/CityTable"));

export default function page() {
   return (
      <Fragment>
         <CityTable />
      </Fragment>
   );
}
