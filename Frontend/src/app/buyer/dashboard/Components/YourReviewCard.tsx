"use client";
import React from "react";
import {
   BuyerDashboardEditSvgIcon,
   DownArrowSvgIcon,
} from "@/buyer/components/SvgIcons";
import { BuyerState } from "@/buyer/store";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/buyer/components/buyer-card"), {
   ssr: false,
});
const Grid = dynamic(() => import("@/buyer/components/buyer-grid"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), { ssr: false });
const RatingStar = dynamic(() => import("@/components/RatingStar"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), { ssr: false });

type User = {
   email: string;
   id: number;
   image: any;
   name: string;
   phone: string;
   role: string;
   status: string;
};

type Review = {
   desc: string;
   id: number;
   product_id: number;
   rattings: number;
   status: string;
   title: string;
   user: User;
};

type Props = {
   reviewLimit: number;
   onHandleReviewLimit: (limit: number) => void;
};

export default function YourReviewCard({
   reviewLimit,
   onHandleReviewLimit,
}: Props) {
   const { reviews = [], totalLength } = useSelector(
      (state: BuyerState) => state.buyer.dashboard
   );
   console.log(reviews);
   return (
      <Card className="mt-7">
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Your Review
         </div>

         <Grid gridOne={true} className="lg:grid-cols-2 mt-4" gap={7}>
            {reviews &&
               reviews.length > 0 &&
               reviews.map((review: Review, index: number) => (
                  <Card
                     key={index}
                     className="!p-3 flex flex-row gap-2 !w-full"
                  >
                     <Img
                        src="/assets/images/background.png"
                        alt="product-image"
                        width={100}
                        height={100}
                        className="rounded-[50%] w-10 h-10 "
                     />
                     <div className="!w-full">
                        <span
                           className="text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold"
                           style={{
                              background:
                                 "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                           }}
                        >
                           Company Name
                        </span>
                        <div className="text-[#8b8b8b] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                           (Lorem Ipsum)
                        </div>
                        <div
                           className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pt-3"
                           dangerouslySetInnerHTML={{ __html: review?.desc }}
                        />
                        <div className="flex xs6:flex-row flex-col justify-between xs6:items-center pt-1 xs6:gap-0 gap-2">
                           <div className="flex flex-row items-end gap-2">
                              <RatingStar rating={review?.rattings} size={65} />
                              <div className="text-[#4285f4] text-left font-['Arial-Bold',_sans-serif] text-[8px] font-bold">
                                 {review?.rattings}/5
                              </div>
                           </div>
                           <div
                              className="rounded-lg w-[66px] h-[27px] flex flex-row justify-center items-center gap-1"
                              style={{
                                 background:
                                    "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                                 boxShadow:
                                    "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                              }}
                           >
                              <div className="w-4 h-4 text-white">
                                 <BuyerDashboardEditSvgIcon />
                              </div>
                              <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold relative">
                                 Edit
                              </div>
                           </div>
                        </div>
                     </div>
                  </Card>
               ))}
         </Grid>

         {reviews?.length !== totalLength && (
            <div className=" relative">
               <Button
                  type="button"
                  className="rounded-[50%] w-[38px] h-[38px] flex justify-center items-center absolute -right-3 -top-7"
                  style={{
                     background:
                        "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backdropFilter: "blur(25px)",
                  }}
                  onClick={() => onHandleReviewLimit(reviewLimit + 2)}
               >
                  <div className="w-6 h-6 text-white">
                     <DownArrowSvgIcon />
                  </div>
               </Button>
            </div>
         )}
      </Card>
   );
}
