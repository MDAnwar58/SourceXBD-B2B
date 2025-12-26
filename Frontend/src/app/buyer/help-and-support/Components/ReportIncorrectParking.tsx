"use client";
import { useState } from "react";
import { ArrowUpSvgIcon, DownArrowSvgIcon } from "@admin/components/SvgIcons";

type Props = {
   faqAccordions?: any | undefined;
};

export function ReportIncorrectParking({ faqAccordions }: Props) {
   const [accordion, setAccordion] = useState("");

   return (
      <div className="mt-9 pb-7 w-full">
         {faqAccordions?.length > 0
            ? faqAccordions?.map((faqAccordion: any) => (
                 <div
                    key={faqAccordion.id}
                    className="border-t-[0.5px] border-gray-500"
                 >
                    <div
                       className="flex items-center justify-between gap-x-7  py-[0.65rem]"
                       onClick={() =>
                          setAccordion((accordion: string) =>
                             accordion === faqAccordion.name
                                ? ""
                                : faqAccordion.name
                          )
                       }
                    >
                       <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-md font-normal">
                          {faqAccordion.name}
                       </div>
                       <div className="w-6 h-6 border-2 border-gray-500 text-gray-700 rounded-full flex justify-center items-center">
                          <div className="w-4 h-4">
                             {accordion === faqAccordion.name ? (
                                <ArrowUpSvgIcon />
                             ) : (
                                <DownArrowSvgIcon />
                             )}
                          </div>
                       </div>
                    </div>
                    {accordion === faqAccordion.name && (
                       <p
                          className="content text-gray-600 pb-3"
                          dangerouslySetInnerHTML={{
                             __html: faqAccordion.content,
                          }}
                       />
                    )}
                 </div>
              ))
            : null}
      </div>
   );
}
