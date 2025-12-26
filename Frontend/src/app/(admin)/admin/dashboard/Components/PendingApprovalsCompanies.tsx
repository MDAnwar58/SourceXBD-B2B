"use client";
import React from "react";
import { DashboardThreeDotsSvgIcon } from "@admin/components/SvgIcons";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});
const AdminCard = dynamic(() => import("@admin/components/card"), {
   ssr: false,
});
const Grid = dynamic(() => import("@admin/components/grid"), {
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

export default function PendingApprovalsCompanies() {
   const localUrl = LocalUrl();

   const { companies = [], companiesLength } = useSelector(
      (state: AdminState) => state.admin.dashboard
   );
   const Conpanies: Company[] = companies;

   return (
      <div className="xl:col-span-5 col-span-12 ">
         <AdminCard className="!bg-[rgba(66,133,244,0.05)] !rounded-[20px] !px-7 !pt-4 !pb-7">
            <div className=" flex items-center justify-between mb-5">
               <div className="flex items-center gap-x-3">
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative">
                     Pending Approvals
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
                     (Companies)
                  </div>
               </div>
               <div className="bg-[#ff7070] rounded-[50%] w-6 h-6 flex items-center justify-center">
                  <div className="text-[#ffffff] font-['Arial-Bold',_sans-serif] text-[10px] font-bold">
                     {companiesLength}
                  </div>
               </div>
            </div>

            <Grid cols={12} gap={3}>
               {Conpanies.length > 0
                  ? Conpanies.map((company, index: number) => {
                       const imageUrl = localUrl.concat(company?.logo);
                       return (
                          <div
                             key={index}
                             className="xl:col-span-12 lg:col-span-6 md:col-span-12 sm:col-span-6 col-span-12"
                          >
                             <div className=" bg-[rgba(240,242,255,0.50)] rounded-[14px] shadow-admin-sub-card">
                                <div className="bg-[rgba(152,176,238,0.50)] rounded-tl-[14px] rounded-tr-[14px] py-[0.35rem] px-4 flex items-center justify-between">
                                   <div className="text-[#2f2f2f] text-left font-['-',_sans-serif] text-[10px] font-normal relative">
                                      <span>
                                         <span className="id-no-1224-45569-span">
                                            ID No:
                                         </span>
                                         <span className="id-no-1224-45569-span2">
                                            {company?.u_id}
                                         </span>
                                      </span>
                                   </div>

                                   {/* <div className="bg-[rgba(47,47,47,0.60)] rounded-md px-3 py-1">
                                   <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                                      Basic
                                   </div>
                                </div> */}
                                </div>

                                <div className="flex px-4 py-3">
                                   <div className="w-[55%]">
                                      <div className="flex">
                                         {company?.logo ? (
                                            <Img
                                               src={imageUrl}
                                               alt="Company Image"
                                               width={100}
                                               height={100}
                                               className="rounded-[50%] w-[26px] h-[26px]"
                                               style={{
                                                  boxShadow:
                                                     "-1px -1px 6px 0px rgba(101, 101, 101, 0.2),1px 1px 6px 0px rgba(0, 0, 0, 0.2)",
                                               }}
                                            />
                                         ) : (
                                            <Img
                                               src={
                                                  "/assets/images/approval.png"
                                               }
                                               alt="Company Image"
                                               width={100}
                                               height={100}
                                               className="rounded-[50%] w-[26px] h-[26px]"
                                               style={{
                                                  boxShadow:
                                                     "-1px -1px 6px 0px rgba(101, 101, 101, 0.2),1px 1px 6px 0px rgba(0, 0, 0, 0.2)",
                                               }}
                                            />
                                         )}
                                         <div className="ps-3">
                                            <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                                               {company?.name}
                                            </div>
                                            <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                                               Lorem Ipsum dolor sit
                                            </div>
                                         </div>
                                      </div>
                                      <div className="pt-3">
                                         <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal">
                                            Phone Number
                                         </div>
                                         <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold pt-[0.05rem]">
                                            +880 {company?.user_phone}
                                         </div>
                                      </div>
                                   </div>
                                   <div className="w-[45%]">
                                      <div className="flex items-center justify-between">
                                         <div>
                                            <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                                               Date of register
                                            </div>
                                            <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                                               02 Sep, 2024
                                            </div>
                                         </div>
                                         <button
                                            type="button"
                                            className=" text-gray-900 bg-[#f4f4f4] rounded-full p-1"
                                         >
                                            <div className="w-3 h-3 ">
                                               <DashboardThreeDotsSvgIcon />
                                            </div>
                                         </button>
                                      </div>
                                      <div className="pt-3">
                                         <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal">
                                            Email
                                         </div>
                                         <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold pt-[0.05rem]">
                                            {company?.user_email}
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       );
                    })
                  : null}

               {/* <div className="xl:col-span-12 lg:col-span-6 md:col-span-12 sm:col-span-6 col-span-12">
                  <div className=" bg-[rgba(240,242,255,0.50)] rounded-[14px] shadow-admin-sub-card">
                     <div className="bg-[rgba(152,176,238,0.50)] rounded-tl-[14px] rounded-tr-[14px] py-[0.35rem] px-4 flex items-center justify-between">
                        <div className="text-[#2f2f2f] text-left font-['-',_sans-serif] text-[10px] font-normal relative">
                           <span>
                              <span className="id-no-1224-45569-span">
                                 ID No:
                              </span>
                              <span className="id-no-1224-45569-span2">
                                 1224-45569
                              </span>
                           </span>
                        </div>

                        <div className="bg-[rgba(15,175,1,0.60)] rounded-md px-[1.15rem] py-1">
                           <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                              Team
                           </div>
                        </div>
                     </div>

                     <div className="flex px-4 py-3">
                        <div className="w-[55%]">
                           <div className="flex">
                              <Img
                                 src="/assets/images/approval.png"
                                 alt="..."
                                 width={100}
                                 height={100}
                                 className="rounded-[50%] w-[26px] h-[26px]"
                                 style={{
                                    boxShadow:
                                       "-1px -1px 6px 0px rgba(101, 101, 101, 0.2),1px 1px 6px 0px rgba(0, 0, 0, 0.2)",
                                 }}
                              />
                              <div className="ps-3">
                                 <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                                    Company Name
                                 </div>
                                 <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                                    Lorem Ipsum dolor sit
                                 </div>
                              </div>
                           </div>
                           <div className="pt-3">
                              <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal">
                                 Phone Number
                              </div>
                              <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold pt-[0.05rem]">
                                 +880 1953683518
                              </div>
                           </div>
                        </div>
                        <div className="w-[45%]">
                           <div className="flex items-center justify-between">
                              <div>
                                 <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                                    Date of register
                                 </div>
                                 <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                                    02 Sep, 2024
                                 </div>
                              </div>
                              <button
                                 type="button"
                                 className=" text-gray-900 bg-[#f4f4f4] rounded-full p-1"
                              >
                                 <div className="w-3 h-3 ">
                                    <DashboardThreeDotsSvgIcon />
                                 </div>
                              </button>
                           </div>
                           <div className="pt-3">
                              <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal">
                                 Email
                              </div>
                              <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold pt-[0.05rem]">
                                 info78945@gmail.com
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div> */}
            </Grid>
         </AdminCard>
      </div>
   );
}
