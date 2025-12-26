"use client";
import React, { Fragment, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { DownArrowSvgIcon } from "@admin/components/SvgIcons";
import {
   approveCopmany,
   declineCopmany,
} from "@admin/dashboard/features/DashboardAction";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import("@admin/components/grid"), {
   ssr: false,
});
const AdminCard = dynamic(() => import("@admin/components/card"), {
   ssr: false,
});
const ApproveNewCopmanie = dynamic(() => import("./ApproveNewCopmanie"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type Company = {
   date: string;
   desc: string;
   id: number;
   industry: string;
   logo: string;
   name: string;
   points: number;
   status: string;
   trust_point: number;
   u_id: number;
   user_email: string;
   user_image: string;
   user_name: string;
   user_phone: string;
};

type Props = {
   limit: number;
   loadMorePendingCompanies: (limit: number) => void;
   searchCompany: string;
   page: number;
   perPage: number;
   search: string;
   onHandleDeclineBtn: (id: number) => void;
   onHandledeleteBtn: (id: number) => void;
};

export default function ApprovalsNewCompanies({
   limit,
   loadMorePendingCompanies,
   searchCompany,
   page,
   perPage,
   search,
   onHandleDeclineBtn,
   onHandledeleteBtn,
}: Props) {
   const dispatch = useDispatch<AppDispatch>();

   const onHandleApproveBtn = useCallback(
      (id: number) => {
         dispatch(
            approveCopmany({
               id,
               limit,
               company_search: searchCompany,
               page,
               perPage,
               search,
            })
         );
      },
      [dispatch, limit, searchCompany, page, perPage, search]
   );

   const { companies, companiesLength } = useSelector(
      (state: AdminState) => state.admin.dashboard
   );
   const Companies: Company[] = companies;

   return (
      <AdminCard className=" !bg-white !rounded-[20px] xs:!px-6 !px-4 xs:!pt-4 !pt-3 xs:!pb-7 !pb-5 !mb-7 relative">
         <div className="text-[#2f2f2f] text-left font-['Geist-Bold',_sans-serif] text-xl font-bold mb-3 px-1">
            Pending Approval Copmanies
         </div>

         <Grid
            cols={12}
            gap={7}
            className={`${Companies.length > 6 ? "h-[73vh] overflow-y-auto p-1" : ""}`}
            style={{ scrollbarWidth: "none" }}
         >
            {Companies.length > 0 ? (
               Companies.map((company, index: number) => {
                  return (
                     <Fragment key={index}>
                        <ApproveNewCopmanie
                           company={company}
                           onHandleDeclineBtn={onHandleDeclineBtn}
                           onHandleApproveBtn={onHandleApproveBtn}
                           onHandledeleteBtn={onHandledeleteBtn}
                        />
                     </Fragment>
                  );
               })
            ) : (
               <div className="col-span-12 text-gray-500 text-center text-lg font-semibold">
                  Date not found
               </div>
            )}
         </Grid>

         {Companies.length !== companiesLength && Companies?.length > 6 ? (
            <Button
               type="button"
               className="bg-blue-gradient text-white rounded-full w-9 h-9 flex justify-center items-center absolute bottom-1 right-1"
               onClick={() => loadMorePendingCompanies(limit + 6)}
            >
               <div className="w-7 h-7">
                  <DownArrowSvgIcon />
               </div>
            </Button>
         ) : null}
      </AdminCard>
   );
}
