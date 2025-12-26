import React, { Fragment } from "react";
import { DashboardQucikActionSvgIcon } from "@admin/components/SvgIcons";
import UserInfo from "./Components/UserInfo";
import UserSocialDetails from "./Components/UserSocialDetails";
import UserContactDetails from "./Components/UserContactDetails";
import UserAvailableDetails from "./Components/UserAvailableDetails";
import RecentActivity from "./Components/RecentActivity";
import RecentOrders from "./Components/RecentOrders";
import PageHeader from "@admin/components/PageHeader";
import ShowProfilePassword from "./Components/ShowProfilePassword";
import AdminCard from "@admin/components/card";

const icon = (
   <span className="w-6 h-6">
      <DashboardQucikActionSvgIcon />
   </span>
);

export default function UserDetails() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Users Details" searchBox={false} />

         <div className="xs3:grid grid-cols-12 6lg:gap-9 gap-7">
            <div className="7xl:col-span-4 6lg:col-span-5 col-span-12 ">
               <AdminCard className="!bg-[#ffffff] !rounded-[20px] 3xs:mb-0 mb-5">
                  <UserInfo />
                  <UserSocialDetails />
                  <UserContactDetails />
                  <UserAvailableDetails />
               </AdminCard>
            </div>
            <div className="7xl:col-span-8 6lg:col-span-7 col-span-12 ">
               <AdminCard className="!bg-[#ffffff] !rounded-[20px] !h-full">
                  <RecentActivity />
                  <ShowProfilePassword />
                  <RecentOrders />
               </AdminCard>
            </div>
         </div>
      </Fragment>
   );
}
