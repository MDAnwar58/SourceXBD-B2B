"use client";
import React, { Fragment, useEffect } from "react";
import Grid from "@admin/components/grid";
import AdminPersonalInfoCard from "./Components/AdminPersonalInfoCard";
import AdEmailNotificatinCard from "./Components/AdEmailNotificatinCard";
import SearchCard from "./Components/SearchCard";
import { SettingsSvgIcon } from "@admin/components/SvgIcons";
import PageHeader from "../../components/PageHeader";
import { useRouter } from "next/navigation";

const icon = (
   <div className="w-6 h-6">
      <SettingsSvgIcon />
   </div>
);

export default function Settings() {
   const router = useRouter();

   useEffect(() => {
      router.back();
   }, [router]);

   return (
      <Fragment>
         <PageHeader icon={icon} title="Settings" searchBox={false} />
         <Grid cols={12} gap={7}>
            <div className="col-span-12 xl:hidden block 3xs:mb-0 mb-7">
               <SearchCard />
            </div>
            <div className="xl:col-span-8 col-span-12">
               <AdminPersonalInfoCard />
               <AdEmailNotificatinCard />
            </div>
            <div className="xl:col-span-4 xl:block hidden">
               <SearchCard />
            </div>
         </Grid>
      </Fragment>
   );
}
