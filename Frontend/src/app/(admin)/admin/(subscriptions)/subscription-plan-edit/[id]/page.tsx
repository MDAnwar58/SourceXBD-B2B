import React, { Fragment } from "react";
import SubscriptionPlanUpdateForm from "./Components/SubscriptionPlanUpdateForm";

type Props = {
   params: {
      id: string;
   };
};

export default function SubscriptionPlanEdit({ params }: Props) {
   return (
      <Fragment>
         <SubscriptionPlanUpdateForm params={params} />
      </Fragment>
   );
}
