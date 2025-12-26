"use client";
import React from "react";
import BlogContext from "../features/BlogContext";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type Props = {
   blogLength: number;
   totalBlogLength: number;
};

export default function LoadMore({ blogLength, totalBlogLength }: Props) {
   const { loadMore } = BlogContext();
   return (
      <div className="text-center">
         <Button
            type="button"
            className={`mt-10 ${blogLength === totalBlogLength ? " bg-blue-gradient-disable" : "bg-blue-gradient"} text-white rounded-2xl text-lg font-semibold px-10 py-3`}
            onClick={() => loadMore(3)}
            disabled={blogLength === totalBlogLength}
         >
            {blogLength === totalBlogLength ? "End" : "Load More"}
         </Button>
      </div>
   );
}
