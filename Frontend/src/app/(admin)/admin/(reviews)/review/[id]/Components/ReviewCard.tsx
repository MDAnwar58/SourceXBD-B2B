"use client";
import React from "react";
import {
   useDateWithMonthFormatExtra,
   useDffFormat,
} from "@/components/react/date";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));
const Img = dynamic(() => import("@/components/Image"));
const RatingStar = dynamic(() => import("@/components/RatingStar"));
const Replies = dynamic(() => import("./Replies"));
const ReviewCardFooter = dynamic(() => import("./ReviewCardFooter"));

type User = {
   name: string | null;
   avatar: string | "";
};

type Location = {
   country: string | null;
   state: string | null;
};

type Review = {
   id: number;
   user: User;
   location: Location;
   rating: string | null;
   created_at: string;
   title: string | null;
   desc: string | null;
};

type Props = {
   Review: Review;
   replySubmit: (replyId: number, limit: number) => void;
   limit: number;
   content: any;
   replyFormRef: any;
   getReplies: (reviewId: number, limit: number) => void;
   loadMoreReplies: (reviewId: number, Limit: number) => void;
   replyModal: boolean;
   setReplyModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ReviewCard({
   Review,
   replySubmit,
   limit,
   content,
   replyFormRef,
   loadMoreReplies,
   replyModal,
   setReplyModal,
}: Props) {
   let date;
   if (Review?.created_at !== "") {
      date = useDateWithMonthFormatExtra(String(Review?.created_at));
   }
   const daysAgoReview = useDffFormat(Review?.created_at);

   let reviewId = Review?.id;

   return (
      <AdminCard className="mt-9">
         <div className="flex justify-between items-center border-b border-gray-400 pb-2">
            <div className="flex gap-x-2">
               {Review?.user?.avatar !== "" ? (
                  <Img
                     src={Review?.user?.avatar.toString()}
                     alt="review comment user"
                     width={100}
                     height={100}
                     className="rounded-full w-[46px] h-[46px] "
                  />
               ) : null}
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold relative">
                     {Review?.user?.name}
                  </div>
                  <div className="flex items-center gap-x-1">
                     <div>
                        {Review?.rating ? (
                           <RatingStar
                              rating={Review?.rating}
                              activeColor="#FFD561"
                              inactiveColor="#B2B2B2"
                              size={81}
                           />
                        ) : null}
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                        ({Review?.rating})
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="bg-[#efefef] text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal rounded w-12 h-[17px] flex justify-center items-center">
                  {daysAgoReview && daysAgoReview}
               </div>
            </div>
         </div>
         <div className="3xs:flex justify-between items-center pt-1">
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium 3xs:mb-0 mb-1">
               Status: Purchased from seller
            </div>
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium 3xs:mb-0 mb-1">
               Purchas date: {date}
            </div>
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium">
               Location:{" "}
               {Review?.location?.state !== null && Review?.location?.state},{" "}
               {Review?.location?.country !== null && Review?.location?.country}
            </div>
         </div>
         <div
            className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-base font-normal py-3"
            dangerouslySetInnerHTML={{ __html: String(Review?.desc) }}
         />
         <div className="space-y-2">
            <Replies />
         </div>
         <ReviewCardFooter
            replySubmit={replySubmit}
            limit={limit}
            reviewId={reviewId}
            content={content}
            replyFormRef={replyFormRef}
            loadMoreReplies={loadMoreReplies}
            replyModal={replyModal}
            setReplyModal={setReplyModal}
         />
      </AdminCard>
   );
}
