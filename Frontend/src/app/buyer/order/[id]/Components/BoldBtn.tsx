"use client";
import dynamic from "next/dynamic";
import React from "react";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type Props = {
   isBold: boolean;
   toggleBold: () => void;
};

export default function BoldBtn({ isBold, toggleBold }: Props) {
   return (
      <Button
         type="button"
         className={`${
            isBold ? "bg-gray-300 text-[#2f2f2f] rounded" : "text-gray-400"
         }  text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold px-1 py-[.1rem]`}
         onClick={toggleBold}
      >
         B
      </Button>
   );
}
