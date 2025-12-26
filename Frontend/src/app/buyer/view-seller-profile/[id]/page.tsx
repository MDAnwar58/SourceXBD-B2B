import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ViewSallerProfileContent = dynamic(
   () => import("./Components/ViewSallerProfileContent")
);

export const metadata: Metadata = {
   title: "View Seller Profile",
};

type Props = {
   params: {
      id: number;
   };
};
export default function ViewSellerProfile({ params }: Props) {
   return <ViewSallerProfileContent params={params} />;
}
