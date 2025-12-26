"use client";
import { AppDispatch, RootState } from "@/app/store";
import Button from "@/components/Button";
import Input from "@/components/Input";
import InputCheckbox from "@/components/InputCheckbox";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeComment } from "../features/BlogDetailsAction";

type Form = {
   blogId: string;
   email: string;
   name: string;
   comment: string;
};

type Props = {
   blog_id: string;
};

export default function BlogDetailsForm({ blog_id }: Props) {
   const name = useRef<HTMLInputElement>(null);
   const email = useRef<HTMLInputElement>(null);
   const comment = useRef<HTMLTextAreaElement>(null);
   const form = useRef<HTMLFormElement>(null);
   const dispatch = useDispatch<AppDispatch>();

   const onHandleStoreComment = () => {
      const payload = {
         blog_id: Number(blog_id),
         email: email.current?.value,
         name: name.current?.value,
         comment: comment.current?.value,
      };
      dispatch(storeComment({ payload }))
         .then((action) => {
            if (storeComment.fulfilled.match(action)) {
               form.current?.reset();
            }
         })
         .catch((error) => {
            console.error("Failed to submit comment:", error);
         });
   };

   const { error } = useSelector(
      (state: RootState) => state.userend.blog_details
   );
   const formError = error as Form;
   return (
      <form
         ref={form}
         className="bg-[#f0f2ff] rounded-[20px] w-full sm:p-11 p-7 mt-12"
         style={{
            boxShadow:
               "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
         }}
      >
         <div className="grid 4xs:grid-cols-2 grid-cols-1 gap-5">
            <div>
               <Input
                  type="text"
                  inputRef={name}
                  className="bg-[#ffffff] rounded-[10px] w-full h-[55px] px-5 text-[#8f8f8f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium border border-gray-50"
                  placeholder="Your Name"
               />
               {formError.name && (
                  <small className="text-red-500 text-xs font-semibold">
                     {formError.name}
                  </small>
               )}
            </div>
            <div>
               <Input
                  type="email"
                  inputRef={email}
                  className="bg-[#ffffff] rounded-[10px] w-full h-[55px] px-5 text-[#8f8f8f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium border border-gray-50"
                  placeholder="Your Email"
               />

               {formError.email && (
                  <small className="text-red-500 text-xs font-semibold">
                     {formError.email}
                  </small>
               )}
            </div>
         </div>
         <div className="pt-2 pb-3">
            <InputCheckbox
               size="15px"
               color="#92aae9"
               ring="focus:ring-blue-300"
               label="retium tempus nisl pharetra amet ultrices aenean in."
               labelClassName="text-[#92aae9] text-left font-['Inter-Regular',_sans-serif] text-[15px] font-normal"
            />
         </div>
         <div className=" relative">
            <textarea
               className="bg-[#ffffff] rounded-[10px] w-full h-[20vh] p-5 text-[#8f8f8f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium border border-gray-50"
               placeholder="Your Comment"
               ref={comment}
            ></textarea>

            <Button
               type="button"
               className="bg-[#92aae9] rounded-[10px] 3xs:px-7 xs3:px-5 px-3 3xs:py-3 py-2 text-[#ffffff] font-['Inter-Medium',_sans-serif] 3xs:text-md xs3:text-sm text-xs font-medium absolute bottom-4 right-2"
               onClick={onHandleStoreComment}
            >
               Leave A Comment
            </Button>
         </div>
         {formError.comment && (
            <small className="text-red-500 text-xs font-semibold">
               {formError.comment}
            </small>
         )}
      </form>
   );
}
