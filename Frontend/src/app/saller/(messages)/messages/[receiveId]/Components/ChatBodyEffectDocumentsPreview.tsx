import React, { useEffect, useState } from "react";
import { CrosSvgIcon } from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));

type Props = {
   index: number;
   onHandleRemoveDocument: (index: number) => void;
};

export default function ChatBodyEffectDocumentsPreview({
   index,
   onHandleRemoveDocument,
}: Props) {
   return (
      <div className=" relative w-28 h-28">
         <Img
            src="/assets/images/document.png"
            alt="product image"
            width={150}
            height={150}
            className="rounded-2xl w-full h-full"
         />
         <Button
            type="button"
            className="bg-red-500 hover:bg-red-700 hover:text-white/90 rounded-xl p-1 absolute right-1 top-1"
            onClick={() => onHandleRemoveDocument(index)}
         >
            <div className="w-3.5 h-3.5">
               <CrosSvgIcon />
            </div>
         </Button>
      </div>
   );
}
