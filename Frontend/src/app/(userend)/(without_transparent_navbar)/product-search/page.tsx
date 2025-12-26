import React from "react";
import "@/assets/css/related-product-slider.css";
import dynamic from "next/dynamic";
import { Metadata } from "next";
const ProductSearchPageContent = dynamic(
   () => import("./Components/ProductSearchPageContent")
);

export const metadata: Metadata = {
   title: "Product Search",
};

export default function ProductSearch() {
   return <ProductSearchPageContent />;
}
