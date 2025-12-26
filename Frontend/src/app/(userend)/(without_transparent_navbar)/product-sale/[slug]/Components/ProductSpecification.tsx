import React from "react";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/components/card"));

type Props = {
   specification: string;
};

export default function ProductSpecification({ specification }: Props) {
   return (
      <Card className="!px-7">
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold xs3:w-[210px] mb-3"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Product Specification
         </div>
         <div
            className="text-[#515151] font-['Arial-Regular',_sans-serif] leading-6"
            dangerouslySetInnerHTML={{ __html: specification }}
         />
      </Card>
   );
}
