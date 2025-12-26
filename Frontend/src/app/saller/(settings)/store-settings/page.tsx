"use client";
import React, { Fragment, useEffect } from "react";
import Grid from "@admin/components/grid";
import StoreInformationCard from "./Components/StoreInformationCard";
import PaymentSettings from "./Components/PaymentSettings";
import { SettingsSvgIcon } from "@admin/components/SvgIcons";
import PageHeader from "@admin/components/PageHeader";
import { useRouter } from "next/navigation";

const icon = (
   <div className="w-6 h-6">
      <SettingsSvgIcon />
   </div>
);

export default function AdminSettings() {
   const [validWindow, setValidWindow] = React.useState<boolean>(false);
   const router = useRouter();

   if (validWindow === false) {
      router.back();
   }
   return (
      <Fragment>
         <PageHeader icon={icon} title="Store Settings" searchBox={false} />
         <Grid cols={12} gap={7}>
            <StoreInformationCard />
            <PaymentSettings />
         </Grid>
      </Fragment>
   );
}
