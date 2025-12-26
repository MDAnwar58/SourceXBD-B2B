import React from "react";
import dynamic from "next/dynamic";
const BlogUpdateForm = dynamic(() => import("./Components/BlogUpdateForm"));

type Props = {
   params: {
      id: string;
   };
};

export default function BlogEdit({ params }: Props) {
   return <BlogUpdateForm params={params} />;
}
