import React from "react";
import ViewSallerProfileContent from "./Components/ViewSallerProfileContent";
import { Metadata } from "next";

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
