"use client";
import React, { Fragment, useEffect, useState } from "react";
import { SupportSvgIcon } from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, SallerState } from "@/app/saller/store";
import { getFAQs } from "@/saller/support/features/SupportAction";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const SupportFAQsAccordion = dynamic(() => import("./FAQsAccordion"));
const SupportForm = dynamic(() => import("./SupportForm"));

type Faq = {
   ans: string;
   created_at: string;
   id: number;
   qs: string;
   status: string;
};

const icon = (
   <div className="w-6 h-6">
      <SupportSvgIcon />
   </div>
);

export default function SupportContent() {
   const [limit, setLimit] = useState<number>(10);
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getFAQs({ limit }));
   }, [dispatch, limit]);

   const { faqs = [] } = useSelector(
      (state: SallerState) => state.saller.support
   );
   const FAQs: Faq[] = faqs;

   const faqAccordions = FAQs.map((faq: Faq, _) => ({
      id: faq?.id,
      name: faq.qs,
      content: faq.ans,
   }));

   return (
      <Fragment>
         <PageHeader icon={icon} title="Supports" />

         <div className=" xs:grid grid-cols-12 6lg:gap-5 gap-7">
            <SupportForm />

            <SupportFAQsAccordion faqAccordions={faqAccordions} />
         </div>
      </Fragment>
   );
}
