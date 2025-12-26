"use client";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const BlogHeroSection = dynamic(() => import("./BlogHeroSection"), {
   ssr: false,
});
const BlogTabContent = dynamic(() => import("./BlogTabContent"), {
   ssr: false,
});
const Blogs = dynamic(() => import("./Blogs"), {
   ssr: false,
});

export default function BlogsContent() {
   return (
      <Fragment>
         <BlogHeroSection />
         <div className="container pb-20 pt-14">
            <BlogTabContent />
            <Blogs />
         </div>
      </Fragment>
   );
}
