"use client";
import Button from "@/components/Button";
import React from "react";
import OrderReportArea from "./OrderReportArea";
import OrderReviewArea from "./OrderReviewArea";
import OrderInfo from "./OrderInfo";
import OrderSellerInfo from "./OrderSellerInfo";

type Props = {
   reviewOrReport: string;
   toggleReviewOrReport: (item: string) => void;
   reportTextAreaRef: React.RefObject<HTMLDivElement>;
   reviewTextAreaRef: React.RefObject<HTMLDivElement>;
   order: any;
   productIds: number[];
   setProductIds: any;
   userId: number;
   orderId: number;
   orderInfo: any;
   orderSellerInfo: any;
   params: {
      id: number;
   };
};

export default function ReviewAndReportArea({
   reviewOrReport,
   toggleReviewOrReport,
   reportTextAreaRef,
   reviewTextAreaRef,
   order,
   productIds,
   setProductIds,
   userId,
   orderId,
   orderInfo,
   orderSellerInfo,
   params,
}: Props) {
   return (
      <div>
         {reviewOrReport === "" && (
            <div className="flex gap-4 justify-end">
               <Button
                  type="button"
                  className="bg-[#f0f0f0] rounded-[10px] w-24 h-7 flex justify-center items-center text-[#515151] font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold "
                  onClick={() => {
                     toggleReviewOrReport("report");
                     setTimeout(() => {
                        reportTextAreaRef.current?.focus();
                     }, 50);
                  }}
               >
                  Report
               </Button>
               <Button
                  type="button"
                  className="rounded-[10px] w-24 h-7 flex justify-center items-center text-[#ffffff] font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold "
                  style={{
                     background:
                        "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                  }}
                  onClick={() => {
                     toggleReviewOrReport("review");
                     setTimeout(() => {
                        reviewTextAreaRef.current?.focus();
                     }, 50);
                  }}
               >
                  Review
               </Button>
            </div>
         )}
         {reviewOrReport === "report" && (
            <OrderReportArea
               toggleReviewOrReport={toggleReviewOrReport}
               reportTextAreaRef={reportTextAreaRef}
               userId={userId}
               orderId={orderId}
            />
         )}
         {reviewOrReport === "review" && (
            <OrderReviewArea
               params={params}
               toggleReviewOrReport={toggleReviewOrReport}
               reviewTextAreaRef={reviewTextAreaRef}
               order={order}
               productIds={productIds}
               setProductIds={setProductIds}
            />
         )}
         <OrderInfo orderInfo={orderInfo} />
         <OrderSellerInfo orderSellerInfo={orderSellerInfo} />
      </div>
   );
}
