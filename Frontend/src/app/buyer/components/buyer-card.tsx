"use client";
import React, { MouseEventHandler } from "react";

type Props = {
   children: React.ReactNode;
   className?: string | undefined;
   onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};

export default function Card({ children, className, onClick }: Props) {
   return (
      <div
         className={`bg-[#ffffff] rounded-[20px] p-5 shadow-buyer-card ${className}`}
         onClick={onClick}
      >
         {children}
      </div>
   );
}
