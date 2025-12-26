"use client";
import React from "react";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));

type Props = {
   productLength: number;
   totalProductLength: number;
   onHandleLoadMore: (Limit: number) => void;
};

export default function LoadMoreBtn({
   productLength,
   totalProductLength,
   onHandleLoadMore,
}: Props) {
   return (
      <div className="text-center pt-7">
         <Button
            type="button"
            className={` ${
               productLength === totalProductLength
                  ? " bg-blue-gradient-disable"
                  : "bg-blue-gradient"
            } text-white text-md font-semibold px-10 h-11 rounded-2xl`}
            onClick={() => onHandleLoadMore(8)}
            disabled={productLength === totalProductLength}
         >
            {productLength !== totalProductLength ? "Load More" : "End"}
         </Button>
      </div>
   );
}
