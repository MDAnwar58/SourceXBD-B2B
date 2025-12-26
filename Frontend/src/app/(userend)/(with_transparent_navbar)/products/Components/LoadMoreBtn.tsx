"use client";
import dynamic from "next/dynamic";
import React from "react";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type Props = {
   onLoadMoreBtnHandle: (Limit: number) => void;
   limit: number;
};

export default function LoadMoreBtn({ onLoadMoreBtnHandle, limit }: Props) {
   return (
      <div className="text-center">
         <Button
            type="button"
            className="mt-10 bg-blue-gradient text-white rounded-2xl text-lg font-semibold px-10 py-3"
            onClick={() => onLoadMoreBtnHandle(limit + 20)}
         >
            Load More
         </Button>
      </div>
   );
}
