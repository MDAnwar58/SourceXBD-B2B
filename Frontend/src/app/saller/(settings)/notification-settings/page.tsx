import React, { Fragment } from "react";
import { SettingsSvgIcon } from "@admin/components/SvgIcons";
import PageHeader from "@admin/components/PageHeader";
import dynamic from "next/dynamic";
const NotificationSettingsContent = dynamic(
   () => import("./Components/NotificationSettingsContent")
);

const icon = (
   <div className="w-6 h-6">
      <SettingsSvgIcon />
   </div>
);

export default function AdminSettings() {
   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Notification Settings"
            searchBox={false}
         />
         <NotificationSettingsContent />
      </Fragment>
   );
}
