"use client";
import {
   DownArrowSvgIcon,
   ReplySvgIcon,
} from "@/app/saller/components/SvgIcons";
import React from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const ReplyAddModal = dynamic(() => import("./ReplyAddModal"));
const Button = dynamic(() => import("@/components/Button"));

type Props = {
   replySubmit: (replyId: number, limit: number) => void;
   limit: number;
   reviewId: number;
   content: any;
   replyFormRef: any;
   loadMoreReplies: (reviewId: number, Limit: number) => void;
   replyModal: boolean;
   setReplyModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ReviewCardFooter({
   replySubmit,
   limit,
   reviewId,
   content,
   replyFormRef,
   loadMoreReplies,
   replyModal,
   setReplyModal,
}: Props) {
   const { replies = [], replyCount } = useSelector(
      (state: AdminState) => state.admin.review
   );

   return (
      <div
         className={`flex ${replies.length !== replyCount ? "justify-between" : "justify-end"} items-center`}
      >
         {replies.length !== replyCount ? (
            <Button
               type="button"
               className=" text-xs flex items-center text-gray-600"
               onClick={() => loadMoreReplies(reviewId, limit + 3)}
            >
               load more
               <div className="w-4 h-4 mt-[.1rem]">
                  <DownArrowSvgIcon />
               </div>
            </Button>
         ) : null}
         <Button
            type="button"
            className=" text-xs flex items-center bg-gray-50 drop-shadow-sm ps-3 pe-[.1rem] py-[.15rem] rounded-xl mt-3"
            onClick={() => setReplyModal(true)}
         >
            reply
            <div className="w-6 h-3 text-gray-500">
               <ReplySvgIcon />
            </div>
         </Button>
         <ReplyAddModal
            replyModal={replyModal}
            setReplyModal={setReplyModal}
            replySubmit={replySubmit}
            limit={limit}
            reviewId={reviewId}
            content={content}
            replyFormRef={replyFormRef}
         />
      </div>
   );
}
