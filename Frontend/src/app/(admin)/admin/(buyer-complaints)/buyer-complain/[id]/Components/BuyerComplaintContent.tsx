"use client";
import PageHeader from "@admin/components/PageHeader";
import { CompaniesSvgIcon } from "@admin/components/SvgIcons";
import React, { Fragment, useEffect } from "react";
import CompanyInfo from "./CompanyInfo";
import CompanyContactDetails from "./CompanyContactDetails";
import Categories from "./Categories";
import TrustPoints from "./TrustPoints";
import AdminCard from "@admin/components/card";
import Img from "@/components/Image";
import Textarea from "@/components/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { getBuyerComplaint } from "../../../features/BuyerComplaintAction";
import ComplainDetails from "./ComplainDetails";

const icon = (
   <span className="w-6 h-6">
      <CompaniesSvgIcon />
   </span>
);

type Company = {
   city: {
      name: string;
   };
   contact: string;
   country: {
      iso: string;
      phonecode: string;
   };
   desc: string;
   email: string;
   industry: string;
   logo: string;
   name: string;
   points: number;
   review: number;
   trust_point: number;
   type: any[];
};

type User = {
   id: number;
   image: string;
   name: string;
};

type BuyerComplaint = {
   company: Company;
   created_at: string;
   desc: string;
   id: number;
   is_read: number;
   report_id: string;
   user: User;
};

type Props = {
   params: {
      id: number;
   };
};

export default function BuyerComplaintContent({ params }: Props) {
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getBuyerComplaint({ id: params?.id }));
   }, [dispatch, params]);

   const { buyerComplaint = {} } = useSelector(
      (state: AdminState) => state.admin.buyerComplaint
   );
   const BuyerComplaint = buyerComplaint as BuyerComplaint;
   console.log(BuyerComplaint);
   const companyInfo: any = {
      companyName: BuyerComplaint?.company?.name ?? "",
      companyLogo: BuyerComplaint?.company?.logo ?? "",
      review: BuyerComplaint?.company?.review ?? "",
      points: BuyerComplaint?.company?.points ?? "",
      desc: BuyerComplaint?.company?.desc ?? "",
   };

   const contactDetails = {
      email: BuyerComplaint?.company?.email ?? "",
      phone: BuyerComplaint?.company?.contact ?? "",
      industry: BuyerComplaint?.company?.industry ?? "",
      country_iso: BuyerComplaint?.company?.country?.iso ?? "",
      phonecode: BuyerComplaint?.company?.country?.phonecode ?? "",
      city: BuyerComplaint?.company?.city?.name ?? "",
   };

   const complainDetails = {
      reportId:
         BuyerComplaint?.report_id !== undefined
            ? BuyerComplaint?.report_id
            : "",
      userName: BuyerComplaint?.user?.name ?? "",
      desc: BuyerComplaint?.desc !== undefined ? BuyerComplaint?.desc : "",
      complainDate:
         BuyerComplaint?.created_at !== undefined
            ? BuyerComplaint?.created_at
            : "",
      image:
         BuyerComplaint?.user?.image !== undefined
            ? BuyerComplaint?.user?.image
            : "",
   };

   const CompanyType = BuyerComplaint?.company?.type ?? [];

   const trustPoint = BuyerComplaint?.company?.trust_point ?? 0;

   return (
      <Fragment>
         <PageHeader icon={icon} title="Company Details" searchBox={true} />

         <div className=" 3xs:grid grid-cols-12 gap-x-9">
            <div className="3xl:col-span-3 6lg:col-span-4 lg:col-span-5 col-span-12 lg:mb-0 mb-7">
               <div className="bg-[#ffffff] rounded-[20px] shadow-admin-card p-5">
                  <CompanyInfo companyInfo={companyInfo} />
                  <CompanyContactDetails contactDetails={contactDetails} />
                  <Categories CompanyType={CompanyType} />
                  <TrustPoints trustPoint={trustPoint} />
               </div>
            </div>

            <ComplainDetails complainDetails={complainDetails} />
         </div>
      </Fragment>
   );
}
