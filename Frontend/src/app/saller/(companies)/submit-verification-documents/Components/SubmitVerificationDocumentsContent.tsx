"use client";
import React, { useEffect } from "react";
import CompanyContext from "@/saller/companies/features/CompanyContext";
import { useDispatch, useSelector } from "react-redux";
import { SallerState } from "@/saller/store";
import { AppDispatch } from "@/saller/store";
import { getCompanyProfile } from "@/saller/companies/features/CompanyAction";
import dynamic from "next/dynamic";
const IdCards = dynamic(() => import("./IdCards"));

export default function SubmitVerificationDocumentsContent() {
   const {
      idCardBackImage,
      setIdCardBackImage,
      idCardFrontImage,
      setIdCardFrontImage,
      documentUpdate,
      onhandleIdCardFrontImageChange,
      onhandleIdCardBackImageChange,
      setCompanyId,
      companyId,
   } = CompanyContext();
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getCompanyProfile());
   }, [dispatch]);

   const { loading } = useSelector(
      (state: SallerState) => state.saller.company
   );

   const { user } = useSelector(
      (state: SallerState) => state.saller.sallerCommon
   );
   useEffect(() => {
      setCompanyId(user?.id);
   }, []);

   return (
      <div
         className="bg-[#ffffff] rounded-[20px] p-5"
         style={{
            boxShadow:
               "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
         }}
      >
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold pb-1">
            Verification
         </div>

         <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-[.1rem]">
            Setuping
         </div>
         <div className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pb-7">
            Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan nec
            at non ac. Tempor aliquet scelerisque diam ultrices nec aliquam
            penatibus lectus nibh. Quis quam sed nunc vel amet elit aliquet
            sodales libero.
         </div>
         <div>
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-3">
               Take a Photo of your ID card
            </div>

            <IdCards
               idCardFrontImage={idCardFrontImage}
               setIdCardFrontImage={setIdCardFrontImage}
               onhandleIdCardFrontImageChange={onhandleIdCardFrontImageChange}
               idCardBackImage={idCardBackImage}
               setIdCardBackImage={setIdCardBackImage}
               onhandleIdCardBackImageChange={onhandleIdCardBackImageChange}
            />
         </div>
      </div>
   );
}
