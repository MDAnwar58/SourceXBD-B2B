"use client";
import React, { Fragment } from "react";

type Props = {
   transactionId: string;
};

export default function OrderCardHeader({ transactionId }: Props) {
   return (
      <Fragment>
         <div className="p-4">
            <h1 className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal ">
               #{transactionId}
            </h1>
            <p className="text-[#515151] pt-1 text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium ">
               Order Detail
            </p>
         </div>
         <div
            className="border-solid border-[#b2b2b2] border-t-[0.5px] border-r-[0] border-b-[0] border-l-[0] h-0 "
            style={{ marginTop: "-0.5px" }}
         />
      </Fragment>
   );
}
