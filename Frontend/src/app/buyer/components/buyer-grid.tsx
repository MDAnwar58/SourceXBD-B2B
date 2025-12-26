"use client";
import React from "react";

type Props = {
   children: React.ReactNode;
   className?: string | undefined;
   gridOne?: boolean | undefined;
   gap?: number | undefined;
};

export default function BuyerGrid({
   children,
   className,
   gridOne,
   gap = 3,
}: Props) {
   return (
      <div
         className={`grid ${gridOne === true ? "grid-cols-1" : ""} ${className} gap-${gap}`}
      >
         {children}
      </div>
   );
}
