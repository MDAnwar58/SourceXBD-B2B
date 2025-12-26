"use client";
import React, { useCallback, useRef, useState } from "react";
import { CrosSvgIcon } from "@/app/buyer/components/SvgIcons";
import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const RatingStarDynamic = dynamic(
   () => import("@/components/RatingStarDynamic")
);
const BoldBtn = dynamic(() => import("./BoldBtn"));
const UnderLineBtn = dynamic(() => import("./UnderLineBtn"));

type Form = {
   product_ids: any;
   desc: string;
   rattings: any;
};

type Props = {
   params: { id: number };
   toggleReviewOrReport: (item: string) => void;
   reviewTextAreaRef: any;
   order: any;
   productIds: number[];
   setProductIds: any;
};

export default function OrderReviewArea({
   params,
   toggleReviewOrReport,
   reviewTextAreaRef,
   order,
   productIds,
   setProductIds,
}: Props) {
   const [isBold, setIsBold] = useState(false);
   const [isUnderline, setIsUnderline] = useState(false);
   const [rating, setRating] = useState(0);
   const formRef = useRef<HTMLFormElement>(null);
   const [error, setError] = useState({});

   // Handle bold toggle
   const toggleBold = useCallback(() => {
      setIsBold((prev: boolean) => !prev);
      if (isBold === true) {
         document.execCommand("bold");
      } else {
         document.execCommand("bold", false);
      }
   }, [isBold]);

   const toggleUnderline = useCallback(() => {
      if (isUnderline === false) {
         setIsUnderline(true);
         document.execCommand("underline");
      } else {
         setIsUnderline(false);
         document.execCommand("underline", false);
      }
   }, [isUnderline]);

   const submitReview = useCallback(async () => {
      const payload = {
         product_ids: productIds,
         rattings: rating,
         desc: reviewTextAreaRef?.current?.innerHTML,
      };

      try {
         const response = await Axios.post("/user/review", payload);
         if (response.status === 200) {
            notify(response.data.msg);
            formRef?.current?.reset();
            toggleReviewOrReport("");
         }
      } catch (error: any) {
         setError(error.response.data.errors);
      }
   }, [params, rating]);

   const getRating = (rating: number) => {
      setRating(rating);
   };

   const Error = error as Error | any;

   return (
      <div>
         <div className="flex justify-between items-center pb-3">
            <h3 className="text-[#4285f4] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold">
               Review
            </h3>
            <Button
               type="button"
               className="px-2 py-[.1rem]"
               onClick={() => toggleReviewOrReport("")}
            >
               <div className="w-3 h-3">
                  <CrosSvgIcon />
               </div>
            </Button>
         </div>
         <form ref={formRef}>
            <div className="pb-2">
               <RatingStarDynamic getRating={getRating} rating={rating} />
            </div>
            <div
               className={`w-full mb-4 bg-[#f0f0f0] border ${Error?.desc || Error?.rattings || Error?.product_ids ? "border-red-500" : "border-gray-300"} rounded-[10px]`}
            >
               <div
                  ref={reviewTextAreaRef}
                  className="p-3 w-full h-24 text-[#515151] bg-[#f0f0f0] text-sm rounded-[10px] font-normal focus:outline-none focus:ring-0 focus:border-none dark:placeholder-[#515151] text-wrap"
                  contentEditable
                  suppressContentEditableWarning={true}
                  //   placeholder="Add your review ..................."
               ></div>
               <div className="flex items-center justify-between px-2 pb-2">
                  <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                     <BoldBtn isBold={isBold} toggleBold={toggleBold} />
                     <UnderLineBtn
                        isUnderline={isUnderline}
                        toggleUnderline={toggleUnderline}
                     />
                     {/* <ColorChangeBtn /> */}
                  </div>
                  <button
                     type="button"
                     className="rounded-md w-[71px] h-[22px] flex items-center justify-center text-[#ffffff] font-['Raleway-SemiBold',_sans-serif] text-[10px] font-semibold"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                     }}
                     onClick={submitReview}
                  >
                     Submit
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
}
