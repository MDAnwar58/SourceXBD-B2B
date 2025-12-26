"use client";
import React, { Fragment, useEffect } from "react";
import dynamic from "next/dynamic";
import { getUrlLastPart } from "@/components/react/url";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getBlog } from "../features/BlogDetailsAction";
const Blog = dynamic(
   () => import("@/userend/with_transparent_navbar/blogs/page")
);
const BlogDetailsHero = dynamic(() => import("./BlogDetailsHero"));
const BlogDetailsContent = dynamic(() => import("./BlogDetailsContent"));
const BlogDetailsFavoriteAndShare = dynamic(
   () => import("./BlogDetailsFavoriteAndShare")
);
const BlogDetailsForm = dynamic(() => import("./BlogDetailsForm"));

type Blog = {
   id: string;
   title: string;
   slug: string;
   sub_title: string;
   type: string;
   images: string[];
   desc: any;
   comments: any;
   tags: string;
};

export default function BlogDetailsPageContent({ params }: any) {
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      const slug = getUrlLastPart(window.location.href);
      dispatch(getBlog({ slug: String(slug) }));
   }, [dispatch]);

   const { blog } = useSelector(
      (state: RootState) => state.userend.blog_details
   );
   const BlogInfo = blog as Blog;

   return (
      <Fragment>
         <BlogDetailsHero blog={BlogInfo} />
         <div className="container pb-20">
            <BlogDetailsContent blog={BlogInfo} />
            <BlogDetailsFavoriteAndShare />
            <BlogDetailsForm blog_id={BlogInfo.id} />
         </div>
      </Fragment>
   );
}
