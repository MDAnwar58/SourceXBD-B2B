"use client";
import { AppDispatch, SallerState } from "@/saller/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrustPoints } from "@/saller/companies/features/CompanyAction";

export default function VerificationStatusAndUpdateContent() {
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getTrustPoints());
   }, [dispatch]);

   const { trust_point } = useSelector(
      (state: SallerState) => state.saller.company
   );

   return (
      <div
         className="bg-[#ffffff] rounded-[20px] h-[358px] p-5"
         style={{
            boxShadow:
               "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
         }}
      >
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative">
            Verification
         </div>

         <div>
            <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] flex flex-wrap items-center justify-between p-3">
               <div className="flex flex-wrap items-center gap-9">
                  <div className="xs6:w-auto w-full">
                     <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold relative">
                        Company Verification
                     </div>
                     <div className="xs6:w-auto w-full">
                        <div className="text-[#515151] text-end font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                           {trust_point}%
                        </div>

                        <div className="xs6:w-[157px] w-full h-1 bg-gray-200 drop-shadow-sm">
                           <div
                              className={`${
                                 trust_point === 100
                                    ? "bg-[#90ff38]"
                                    : trust_point >= 80
                                      ? "bg-[#a7e673]"
                                      : trust_point >= 60
                                        ? "bg-[#73e6c4]"
                                        : trust_point >= 40
                                          ? "bg-[#d7e673]"
                                          : trust_point >= 20
                                            ? "bg-[#e6be73]"
                                            : "bg-[#e55151]"
                              } rounded h-full`}
                              style={{
                                 boxShadow:
                                    "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                                 width: `${trust_point}%`,
                              }}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     Your company verification complete
                  </div>
               </div>
               {trust_point === 100 ? (
                  <div className="bg-[rgba(144,255,56,0.60)] rounded w-[94px] h-6 flex justify-center items-center 6xs:mt-0 mt-3">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold">
                        Complete
                     </div>
                  </div>
               ) : null}
            </div>
         </div>
      </div>
   );
}
