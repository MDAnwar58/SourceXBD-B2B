"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { HelpAndSupportSvgIcon } from "@/buyer/components/SvgIcons";
import { ReportIncorrectParking } from "./ReportIncorrectParking";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, BuyerState } from "@/buyer/store";
import { getFAQs } from "../features/SupportAction";
import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
const Grid = dynamic(() => import("@/components/grid"), {
   ssr: false,
});
const ReportIncorrectParkingCard = dynamic(
   () => import("./ReportIncorrectParkingCard"),
   {
      ssr: false,
   }
);
const SupportCard = dynamic(() => import("./SupportCard"), {
   ssr: false,
});
const Card = dynamic(() => import("@/buyer/components/buyer-card"));
const PageHeader = dynamic(() => import("@/buyer/components/PageHeader"));
const InfoSolveIssueCard = dynamic(() => import("./InfoSolveIssueCard"));
const ReportIncorrectParkingContent = dynamic(
   () => import("./ReportIncorrectParkingContent")
);

type Faq = {
   ans: string;
   created_at: string;
   id: number;
   qs: string;
   status: string;
};

const icon = (
   <span className="w-6 h-6">
      <HelpAndSupportSvgIcon />
   </span>
);

type FormError = {
   subject?: string;
   content: string;
};

export default function HelpAndSupportContent() {
   const [isSupportOpen, setIsSupportOpen] = useState<boolean>(false);
   const [limit, setLimit] = useState<number>(10);
   const [err, setErr] = useState<FormError>({
      subject: "",
      content: "",
   });
   const [formElement, setFormElement] = useState<HTMLFormElement | null>(null);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      localStorage.getItem("isSupportOpen") === "true"
         ? setIsSupportOpen(true)
         : setIsSupportOpen(false);
      dispatch(getFAQs({ limit }));
   }, [dispatch, limit]);

   const { faqs = [] } = useSelector(
      (state: BuyerState) => state.buyer.buyerSupport
   );
   const FAQs: Faq[] = faqs;

   const faqAccordions = FAQs.map((faq: Faq, _) => ({
      id: faq?.id,
      name: faq.qs,
      content: faq.ans,
   }));

   async function onSubmitHandle(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      await Axios.post("user/supports/store", formData)
         .then(async (res) => {
            const msg = res.data.message;
            notify(msg);
            setErr({
               subject: "",
               content: "",
            });
            formElement?.reset();
         })
         .catch((err) => {
            setErr(err.response.data.errors);
         });
   }

   function onChangeReportIncorrectParking(isSupportOpen: boolean) {
      localStorage.setItem("isSupportOpen", isSupportOpen.toString());
      setIsSupportOpen(isSupportOpen);
   }

   return (
      <Fragment>
         <PageHeader icon={icon} title="Help & Support" searchBox={false} />

         {isSupportOpen !== true ? (
            <Card>
               <ReportIncorrectParkingContent />
               <InfoSolveIssueCard
                  setIsSupportOpen={setIsSupportOpen}
                  onChangeReportIncorrectParking={
                     onChangeReportIncorrectParking
                  }
               />
            </Card>
         ) : (
            <Grid className="!grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 !gap-7">
               <SupportCard
                  onSubmitHandle={onSubmitHandle}
                  setFormElement={setFormElement}
                  err={err}
               />
               <ReportIncorrectParkingCard faqAccordions={faqAccordions} />
            </Grid>
         )}
      </Fragment>
   );
}
