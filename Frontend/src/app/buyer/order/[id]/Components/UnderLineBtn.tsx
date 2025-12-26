"use client";
import dynamic from "next/dynamic";
import React from "react";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type Props = {
   isUnderline: boolean;
   toggleUnderline: () => void;
};

export default function UnderLineBtn({ isUnderline, toggleUnderline }: Props) {
   return (
      <Button
         type="button"
         className={`${
            isUnderline ? "bg-gray-300 text-[#2f2f2f] rounded" : "text-gray-400"
         }  underline text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium px-1 py-[.1rem]`}
         onClick={toggleUnderline}
      >
         U
      </Button>
   );
}
