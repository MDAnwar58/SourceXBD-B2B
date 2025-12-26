import React, { Fragment } from "react";
import { DashboardQucikActionSvgIcon } from "@admin/components/SvgIcons";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const UserContent = dynamic(() => import("./Components/UserContent"), {
   ssr: false,
});
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});

export const metadata: Metadata = {
   title: "Users Details",
   description: "Users Details",
};

const icon = (
   <span className="w-6 h-6">
      <DashboardQucikActionSvgIcon />
   </span>
);

type Props = {
   params: {
      id: number;
   };
};

export default function UserDetails({ params }: Props) {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Users Details" searchBox={false} />
         <UserContent params={params} />
      </Fragment>
   );
}
