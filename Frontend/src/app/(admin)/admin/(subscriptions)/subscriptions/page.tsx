import React, { Fragment } from "react";
import { ItemSubscriptionsSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const SubscriptionsContent = dynamic(
   () => import("./Components/SubscriptionsContent")
);

const icon = (
   <div className="w-6 h-6">
      <ItemSubscriptionsSvgIcon />
   </div>
);

export default function Subscriptions() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Subscriptions" searchBox={false} />

         <SubscriptionsContent />
      </Fragment>
   );
}
