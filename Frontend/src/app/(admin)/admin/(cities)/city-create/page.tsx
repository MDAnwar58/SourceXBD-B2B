import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const CityForm = dynamic(() => import("./Components/CityForm"));

export default function CityCreate() {
   return (
      <Fragment>
         <CityForm />
      </Fragment>
   );
}
