"use client";
import React from "react";
import "./embla-slider.css";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type PropType = {
   selected: boolean;
   index: number;
   onClick: () => void;
   slider: any | undefined;
};

export const Thumb: React.FC<PropType> = (props) => {
   const { selected, index, onClick, slider } = props;

   return (
      <div
         className={"embla-thumbs__slide".concat(
            selected ? " embla-thumbs__slide--selected" : ""
         )}
      >
         <Button
            onClick={onClick}
            type="button"
            className="embla-thumbs__slide__number"
         >
            <Img
               src={`${slider?.image_url}`}
               alt={`${slider?.alt}`}
               width={150}
               height={150}
               className="5lg:!w-full !w-[450px] 5lg:!h-[105px] !h-full rounded-[20px]"
            />
         </Button>
      </div>
   );
};
