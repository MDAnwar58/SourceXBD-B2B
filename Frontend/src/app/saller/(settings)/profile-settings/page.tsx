import React, { Fragment } from "react";
import { SettingsSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
import { Metadata } from "next";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const ProfileSettingsContent = dynamic(
   () => import("./Components/ProfileSettingsContent")
);

export const metadata: Metadata = {
   title: "Profile Settings",
   description: "Profile Settings",
};

const icon = (
   <div className="w-6 h-6">
      <SettingsSvgIcon />
   </div>
);

export default function ProfileSettings() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Profile Settings" searchBox={false} />
         <ProfileSettingsContent />
      </Fragment>
   );
}
