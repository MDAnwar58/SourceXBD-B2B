"use client";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import TextEditor from "@admin/components/TextEditor";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});

type Props = {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   onSubmitFAQs: (e: any) => void;
   ans: any;
   formRef: any;
   faqQs: string | undefined;
   edit: boolean;
   onSubmitUpdateFAQs: (e: any) => void;
};

export default function FAQsAddModal({
   isOpen,
   setIsOpen,
   onSubmitFAQs,
   ans,
   formRef,
   faqQs,
   edit,
   onSubmitUpdateFAQs,
}: Props) {
   return (
      <Fragment>
         <div
            className={`${isOpen !== false ? "" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[57] flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
         >
            <div className="relative p-4 w-full max-w-md max-h-full">
               {/* Modal content */}
               <form
                  onSubmit={(e) => {
                     if (edit !== true) {
                        onSubmitFAQs(e);
                     } else {
                        onSubmitUpdateFAQs(e);
                     }
                  }}
                  ref={formRef}
                  className="relative bg-white rounded-lg shadow dark:bg-gray-700"
               >
                  {/* Modal header */}
                  <div className="flex items-center justify-between p-4 md:px-5 md:py-2 border-b rounded-t dark:border-gray-600">
                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        FAQs {edit !== true ? "Add" : "Edit"}
                     </h3>
                     <Button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsOpen(false)}
                     >
                        <svg
                           className="w-3 h-3"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 14 14"
                        >
                           <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                           />
                        </svg>
                        <span className="sr-only">Close modal</span>
                     </Button>
                  </div>
                  {/* Modal body */}
                  <div className="p-4 md:p-5 space-y-4">
                     <Input
                        type="text"
                        className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-[35px] w-full shadow-admin-add border-none focus:ring-0 px-5"
                        placeholder="FAQs Question"
                        name="qs"
                        defaultValue={faqQs}
                     />
                     <TextEditor ref={ans} placeholder=" " />
                  </div>
                  {/* Modal footer */}
                  <div className="flex justify-end items-center gap-2 p-4 md:px-5 md:py-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                     <button
                        type="button"
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => setIsOpen(false)}
                     >
                        Decline
                     </button>{" "}
                     <button
                        type="submit"
                        className="text-white bg-blue-gradient focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     >
                        {edit !== true ? "Save" : "Update"}
                     </button>
                  </div>
               </form>
            </div>
         </div>
         {isOpen === true ? (
            <div className="bg-gray-900/50 backdrop-blur-md dark:bg-gray-900/80 fixed inset-0 z-[55]" />
         ) : null}
      </Fragment>
   );
}
