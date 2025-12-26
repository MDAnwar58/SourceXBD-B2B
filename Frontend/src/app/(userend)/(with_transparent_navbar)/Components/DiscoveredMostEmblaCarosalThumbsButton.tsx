"use client";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
import React from "react";
const Img = dynamic(() => import("@/components/Image"));

type Product = {
   image: string;
};

type PropType = {
   selected: boolean;
   index: number;
   onClick: () => void;
   product: Product;
};

export const DiscoveredMostThumbs: React.FC<PropType> = (props) => {
   const { selected, index, onClick, product } = props;
   const localUrl = LocalUrl();
   let imagePath = localUrl + product?.image;
   return (
      <div
         className={"embla-thumbs__slide".concat(
            selected ? " embla-thumbs__slide--selected" : ""
         )}
      >
         <button
            onClick={onClick}
            type="button"
            className="embla-thumbs__slide__number bg-green-300 relative w-full h-full"
         >
            <Img
               src={imagePath.toString()}
               alt="..."
               width={200}
               height={96}
               className="w-full h-full"
            />
         </button>
      </div>
   );
};
