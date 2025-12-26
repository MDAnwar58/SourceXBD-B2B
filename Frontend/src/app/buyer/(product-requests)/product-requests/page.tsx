import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ProductRequestContent = dynamic(
   () => import("./Components/ProductRequestContent")
);

export const metadata: Metadata = {
   title: "Product Requests",
};

export default function ProductRequests() {
   return <ProductRequestContent />;
}
