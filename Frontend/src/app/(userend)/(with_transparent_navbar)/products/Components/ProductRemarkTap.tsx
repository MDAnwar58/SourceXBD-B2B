"use client";
import React from "react";

type Remark = { name: string };

const remarks: Remark[] = [
   { name: "most_popular" },
   { name: "hot_selling" },
   { name: "top_review" },
];

type Props = {
   filter: string;
   slug: string;
   getProductsWithFilter: any;
};

export default function ProductRemarkTap({
   filter,
   slug,
   getProductsWithFilter,
}: Props) {
   return (
      <div className="flex xs:flex-row flex-col items-center gap-7 pt-5">
         {remarks.map((remark: Remark, index) => {
            const remarkName = remark?.name.replace(/_/g, " ");
            return (
               <div
                  key={index}
                  className={`${
                     remark.name === filter
                        ? "text-[#90a8e7] text-lg font-bold"
                        : "text-[#636363] text-md font-medium"
                  } cursor-pointer font-['Raleway-Bold',_sans-serif] relative`}
                  onClick={() => getProductsWithFilter(remark?.name)}
               >
                  <span className=" capitalize">{remarkName}</span>
                  {remark.name === filter ? (
                     <div className=" absolute -bottom-4 left-[50%] transform-translate-x-middle">
                        <span className=" inline-flex w-20 h-[2px] bg-[#90a8e7] drop-shadow-md"></span>
                     </div>
                  ) : null}
               </div>
            );
         })}
      </div>
   );
}
