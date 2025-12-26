import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const BlogDetailsPageContent = dynamic(
   () => import("./Components/BlogDetailsPageContent")
);

export const metadata: Metadata = {
   title: "Blog Details",
   description: "Blog Details",
};

type Props = {
   params: {
      id: string;
   };
};

export default function BlogDetails({ params }: Props) {
   console.log(params);
   return <BlogDetailsPageContent />;
}
