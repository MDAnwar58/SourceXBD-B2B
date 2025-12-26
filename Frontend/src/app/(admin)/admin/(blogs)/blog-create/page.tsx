import React from "react";
import dynamic from "next/dynamic";
const BlogCreateForm = dynamic(() => import("./Components/BlogCreateForm"));

export default function BlogCreate() {
   return <BlogCreateForm />;
}
