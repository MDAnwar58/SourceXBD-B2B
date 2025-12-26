import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const BlogsContent = dynamic(() => import("./Components/BlogsContent"), {
   ssr: false,
});

export default function Blogs() {
   return <BlogsContent />;
}
