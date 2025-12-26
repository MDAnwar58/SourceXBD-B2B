"use client";
import React, { use, useEffect, useRef } from "react";
import {
   PlusWithBorderSvgIcon,
   UploadImageSvgIcon,
   UploadPdfSvgIcon,
   UploadProductsSvgIcon,
} from "@/buyer/components/SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));

type Props = {
   productSelectionModal: boolean;
   setProductSelectionModal: React.Dispatch<React.SetStateAction<boolean>>;
   uploadBtnsOpen: boolean;
   setUploadBtnsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   imageRef: any;
   pdfRef: any;
};

export default function UploadBtns({
   productSelectionModal,
   setProductSelectionModal,
   uploadBtnsOpen,
   setUploadBtnsOpen,
   imageRef,
   pdfRef,
}: Props) {
   const uploadBtnsRef = useRef<HTMLDivElement>(null);

   const handleClickOutside = (event: MouseEvent) => {
      if (
         uploadBtnsRef.current &&
         !uploadBtnsRef.current.contains(event.target as Node)
      ) {
         setUploadBtnsOpen(false);
      }
   };
   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <div ref={uploadBtnsRef} className="flex items-center relative">
         <Button
            type="button"
            className="text-[#4285F4] w-6 h-6"
            onClick={() => setUploadBtnsOpen(!uploadBtnsOpen)}
         >
            <PlusWithBorderSvgIcon />
         </Button>
         {uploadBtnsOpen === true ? (
            <div className=" absolute  bottom-14 left-0 space-y-2">
               <Button
                  type="button"
                  className="flex flex-row items-center gap-2 bg-gray-100 drop-shadow-md rounded-2xl px-3 py-2 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400 w-[140px] text-center"
                  onClick={() =>
                     setProductSelectionModal(!productSelectionModal)
                  }
               >
                  <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                     <UploadProductsSvgIcon />
                  </div>
                  <div>Products</div>
               </Button>
               <Button
                  type="button"
                  className="flex flex-row items-center gap-2 bg-gray-100 drop-shadow-md rounded-2xl px-3 py-2 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400 w-[140px] text-center"
                  onClick={() => imageRef.current?.click()}
               >
                  <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                     <UploadImageSvgIcon />
                  </div>
                  <div>Images upload</div>
               </Button>
               <Button
                  type="button"
                  className="flex flex-row items-center gap-2 bg-gray-100 drop-shadow-md rounded-2xl px-3 py-2 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400 w-[140px] text-center"
                  onClick={() => pdfRef?.current?.click()}
               >
                  <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                     <UploadPdfSvgIcon />
                  </div>
                  <div>PDF upload</div>
               </Button>
            </div>
         ) : null}
      </div>
   );
}
