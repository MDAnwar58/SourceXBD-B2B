"use client";
import { useState } from "react";
import { ArrowUpSvgIcon, DownArrowSvgIcon } from "@admin/components/SvgIcons";

type Props = {
   faqAccordions?: any | undefined;
};

export default function SupportFAQsAccordion({ faqAccordions }: Props) {
   const [accordion, setAccordion] = useState("");

   return (
      <div className="6lg:col-span-5 col-span-12 flex flex-row items-center gap-5 xs:pt-0 pt-7">
         <div
            className="bg-[rgba(152,176,238,0.05)] rounded-[10px] h-auto p-5 w-full"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium relative w-[43px]">
               FAQs
            </div>
            <div className="pt-3">
               {faqAccordions?.length > 0
                  ? faqAccordions?.map((faqAccordion: any) => (
                       <div
                          key={faqAccordion.id}
                          className="border-t-2 border-gray-500 cursor-pointer transition-all duration-300 ease-linear"
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
         </div>
      </div>
   );
}
