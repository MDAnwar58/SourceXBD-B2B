"use client";
import { CrosSvgIcon } from "@/app/buyer/components/SvgIcons";
import React, { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Axios from "@/app/utils/axios-client";
import { useHotNotify } from "@/components/react/react-hot-toaster";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const BoldBtn = dynamic(() => import("./BoldBtn"), {
   ssr: false,
});
const UnderLineBtn = dynamic(() => import("./UnderLineBtn"), {
   ssr: false,
});

type Form = {
   user_id: number;
   seller_id: number;
   desc: string;
};

type Props = {
   toggleReviewOrReport: (item: string) => void;
   reportTextAreaRef: any;
   userId: number;
   orderId: number;
};

export default function OrderReportArea({
   toggleReviewOrReport,
   reportTextAreaRef,
   userId,
   orderId,
}: Props) {
   const [isBold, setIsBold] = useState(false);
   const [isUnderline, setIsUnderline] = useState(false);
   const [desc, setDesc] = useState<string>("");
   const [err, setErr] = useState<object>({});
   const [loading, setLoading] = useState<boolean>(false);

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
         console.log("true");
      } else {
         setIsUnderline(false);
         document.execCommand("underline", false);
         console.log("false");
      }
   }, [isUnderline]);

   const onHandleReportSubmit = useCallback(
      async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         const payload = {
            user_id: userId,
            order_id: orderId,
            desc: reportTextAreaRef?.current?.innerHTML,
         };
         setLoading(true);
         await Axios.post("/user/orders/report-on-order", payload)
            .then((res) => {
               useHotNotify(res.data.msg, "success", 1000);
               reportTextAreaRef.current.innerHTML = "";
               setTimeout(() => {
                  setLoading(false);
               }, 1000);
               // setDesc("");
            })
            .catch((err) => {
               setErr(err.response.data.errors);
               setLoading(false);
            });
      },
      [userId, orderId, desc]
   );
   const error = err as Form;
   return (
      <div>
         <div className="flex justify-between items-center pb-3">
            <h3 className="text-[#fe1a1a] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold">
               Report
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
         <form onSubmit={onHandleReportSubmit}>
            <div
               className={`w-full mb-4 bg-[#f0f0f0] border ${
                  error?.user_id || error?.seller_id || error?.desc
                     ? " border-red-500"
                     : "border-gray-300"
               } rounded-[10px]`}
            >
               <div
                  ref={reportTextAreaRef}
                  className={`p-3 w-full h-24 text-[#515151] bg-[#f0f0f0] text-sm  font-normal focus:outline-none focus:ring-0 dark:placeholder-[#515151] text-wrap focus:border-none rounded-[10px]`}
                  contentEditable
                  suppressContentEditableWarning={true}
               ></div>
               <div className="flex items-center justify-between px-2 pb-2">
                  <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2 gap-2">
                     <BoldBtn isBold={isBold} toggleBold={toggleBold} />
                     <UnderLineBtn
                        isUnderline={isUnderline}
                        toggleUnderline={toggleUnderline}
                     />
                  </div>
                  <button
                     type="submit"
                     className={`rounded-md ${
                        loading === true ? "bg-red-300" : "bg-[#fe1a1a]"
                     } w-[71px] h-[22px] flex items-center justify-center text-[#ffffff] font-['Raleway-SemiBold',_sans-serif] text-[10px] font-semibold`}
                  >
                     Submit
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
}
