import React, { MouseEventHandler, ReactNode } from "react";

type Props = {
   children?: ReactNode;
   className?: string | undefined;
   onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};

export default function Card({ children, className, onClick }: Props) {
   return (
      <div
         className={`bg-[#ffffff] text-gray-700 shadow-card w-full h-auto p-5 rounded-3xl ${className}`}
         onClick={onClick}
      >
         {children}
      </div>
   );
}
