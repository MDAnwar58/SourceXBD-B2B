"use client";
import React, { Fragment } from "react";
import PageHeader from "../components/PageHeader";
import { HomeSvgIcon } from "../components/SvgIcons";
import HomeCalender from "./Components/HomeCalender";

const icon = (
   <div className="w-6 h-6 text-gray-700">
      <HomeSvgIcon />
   </div>
);

export default function AdminHome() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Admin Home" searchBox={false} />
         <HomeCalender />
      </Fragment>
   );
}
