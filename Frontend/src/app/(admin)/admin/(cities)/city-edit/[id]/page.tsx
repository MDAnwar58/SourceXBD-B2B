import React, { Fragment } from "react";
import { CitySvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const CityUpdateForm = dynamic(() => import("./Components/CityUpdateForm"));

const icon = (
   <div className="w-6 h-6 text-[#2F2F2F]">
      <CitySvgIcon />
   </div>
);

type Props = {
   params: {
      id: number;
   };
};

export default function CityEdit({ params }: Props) {
   return (
      <Fragment>
         <PageHeader icon={icon} title="City Create" />

         <CityUpdateForm params={params} />
      </Fragment>
   );
}
