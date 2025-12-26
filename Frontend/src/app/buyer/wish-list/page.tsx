import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const WishListContent = dynamic(() => import("./Components/WishListContent"));

export const metadata: Metadata = {
   title: "Wish List",
};

export default function WishList() {
   return <WishListContent />;
}
