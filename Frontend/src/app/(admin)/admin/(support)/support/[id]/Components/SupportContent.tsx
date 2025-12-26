"use client";
import { SupportSvgIcon } from "@admin/components/SvgIcons";
import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import { getSupport } from "@/admin/support/features/SupportAction";
import dynamic from "next/dynamic";
const SupportCard = dynamic(() => import("./SupportCard"));
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));

const icon = (
   <div className="w-6 h-6">
      <SupportSvgIcon />
   </div>
);

type Props = {
   params: {
      id: number;
   };
};

export default function SupportContent({ params }: Props) {
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getSupport({ id: params.id }));
   }, [dispatch, params]);
   return (
      <Fragment>
         <PageHeader icon={icon} title="Support Details" searchBox={false} />

         <SupportCard />
      </Fragment>
   );
}
