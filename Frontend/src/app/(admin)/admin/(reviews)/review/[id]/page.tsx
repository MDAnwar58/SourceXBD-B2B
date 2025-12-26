import React, { Fragment } from "react";
import { ItemReviewsSvgIcon } from "@admin/components/SvgIcons";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const ReviewContent = dynamic(() => import("./Components/ReviewContent"));

export const metadata: Metadata = {
   title: "Review Details",
   description: "Review Details",
};

const icon = (
   <div className="w-6 h-6">
      <ItemReviewsSvgIcon />
   </div>
);

type Props = {
   params: {
      id: string;
   };
};

export default function ReviewDetails({ params }: Props) {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Review Details" />
         <ReviewContent params={params} />
      </Fragment>
   );
}
