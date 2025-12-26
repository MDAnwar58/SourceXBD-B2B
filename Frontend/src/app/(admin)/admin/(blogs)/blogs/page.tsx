import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const BlogsTable = dynamic(() => import("./Components/BlogsTable"));

export default function Blogs() {
   return (
      <Fragment>
         <BlogsTable />
      </Fragment>
   );
}
