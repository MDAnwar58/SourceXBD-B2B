"use client";

import { Fragment, useState } from "react";
import {
   ArrowUpSvgIcon,
   DeleteSvgIcon,
   DownArrowSvgIcon,
} from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));

type Props = {
   faqAccordions?: any | undefined;
   edit?: boolean | undefined;
   setEdit?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
   faqDelete?: boolean | undefined;
   setFaqDelete?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
   onHandleEditFAQs: (FAQsId: number) => void | undefined;
   onHandleDeleteFAQs: (FAQsId: number) => void | undefined;
};

export function FAQsAccordion({
   faqAccordions,
   edit,
   setEdit,
   faqDelete,
   setFaqDelete,
   onHandleEditFAQs,
   onHandleDeleteFAQs,
}: Props) {
   const [accordion, setAccordion] = useState("");
   return (
      <div className="pt-3">
         {faqAccordions?.length > 0
            ? faqAccordions?.map((faqAccordion: any) => (
                 <div
                    key={faqAccordion.id}
                    className="border-t-2 border-gray-500"
                 >
                    <div
                       className="flex items-center justify-between gap-x-7  py-[0.65rem]"
                       onClick={() => {
                          if (!edit && !faqDelete) {
                             setAccordion((accordion: string) =>
                                accordion === faqAccordion.name
                                   ? ""
                                   : faqAccordion.name
                             );
                          }
                       }}
                    >
                       <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-md font-normal">
                          {faqAccordion.name}
                       </div>
                       {edit !== true && faqDelete !== true ? (
                          <div className="w-6 h-6 border-2 border-gray-500 text-gray-700 rounded-full flex justify-center items-center">
                             <div className="w-4 h-4">
                                {accordion === faqAccordion.name ? (
                                   <ArrowUpSvgIcon />
                                ) : (
                                   <DownArrowSvgIcon />
                                )}
                             </div>
                          </div>
                       ) : faqDelete === true ? (
                          <Button
                             type="button"
                             className="bg-red-400 hover:bg-red-600 w-auto p-1 rounded-md text-xs text-white hover:text-white/90 capitalize"
                             onClick={() => onHandleDeleteFAQs(faqAccordion.id)}
                          >
                             <div className="w-3.5 h-3.5">
                                <DeleteSvgIcon />
                             </div>
                          </Button>
                       ) : (
                          <Button
                             type="button"
                             className="bg-blue-gradient w-auto px-3 py-[.2rem] rounded-lg text-xs text-white hover:text-white/90 capitalize"
                             onClick={() => onHandleEditFAQs(faqAccordion.id)}
                          >
                             edit
                          </Button>
                       )}
                    </div>
                    {accordion === faqAccordion.name && (
                       <Fragment>
                          <p
                             className="content text-gray-600 pb-3"
                             dangerouslySetInnerHTML={{
                                __html: faqAccordion.content,
                             }}
                          />
                       </Fragment>
                    )}
                 </div>
              ))
            : null}
      </div>
   );
}
