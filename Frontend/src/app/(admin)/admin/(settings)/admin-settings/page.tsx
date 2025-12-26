import React, { Fragment } from "react";
import { SettingsSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
import { Metadata } from "next";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const AdminSettingsContent = dynamic(
   () => import("./Components/AdminSettingsContent")
);

export const metadata: Metadata = {
   title: "Admin Settings",
   description: "Profile Settings",
};

const icon = (
   <div className="w-6 h-6">
      <SettingsSvgIcon />
   </div>
);

export default function AdminSettings() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Profile Settings" searchBox={false} />
         <AdminSettingsContent />
      </Fragment>
   );
}
