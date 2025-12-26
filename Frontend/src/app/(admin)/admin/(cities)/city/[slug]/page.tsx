import React, { Fragment } from "react";
import { BackgroundSvgIcon, CitySvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const AdminCard = dynamic(() => import("@admin/components/card"));
const Img = dynamic(() => import("@/components/Image"));
const Input = dynamic(() => import("@/components/Input"));
const Textarea = dynamic(() => import("@/components/Textarea"));
const Grid = dynamic(() => import("../../../components/grid"));

const icon = (
   <div className="w-6 h-6 text-[#2F2F2F]">
      <CitySvgIcon />
   </div>
);

export default function CityDetails() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="City Details" />

         <AdminCard className="!bg-[#ffffff] !rounded-[20px] ">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold mb-3">
               City Details
            </div>
            <AdminCard className="!bg-[#ffffff] !rounded-[20px]">
               <Grid cols={12} gap={5}>
                  <div className="4xl:col-span-3 xl:col-span-4 lg:col-span-5 5md:col-span-6 md:col-span-12 sm:col-span-6 col-span-12">
                     <Img
                        src="/assets/images/review-user-avatar.png"
                        alt="City user avatar"
                        width={250}
                        height={250}
                        className="w-full h-auto"
                     />
                  </div>
                  <div className="4xl:col-span-9 1xl2:col-span-8 col-span-12 h-full">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold w-[63px] pb-1">
                        City Name
                     </div>
                     <Input
                        type="text"
                        className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal w-full rounded-lg h-[30px] shadow-admin-add border-none focus:ring-0 px-5"
                        placeholder="Type"
                     />

                     <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold pt-3 pb-1 w-[93px]">
                        Description
                     </div>
                     <Grid cols={12} gap={5}>
                        <div className="4xl:col-span-8 2lg:col-span-7 col-span-12">
                           <Textarea className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal rounded-lg h-[150px] shadow-admin-add w-full border-none focus:ring-0" />
                        </div>
                        <div className="4xl:col-span-4 2lg:col-span-5 col-span-12 3xs:mt-0 mt-5">
                           <div
                              className="rounded-lg w-full xs3:p-5 xs4:p-3 p-2"
                              style={{
                                 background:
                                    "linear-gradient(0.21deg,rgba(198, 241, 255, 0.9) 0%,rgba(152, 176, 238, 0.9) 100%)",
                                 boxShadow:
                                    "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                              }}
                           >
                              <div className="xs6:flex items-center 4xs:gap-x-3 gap-x-1">
                                 <div className=" relative">
                                    <div>
                                       <div className="rounded-none w-[38px] h-[38px] 6xs:mx-0 mx-auto">
                                          <BackgroundSvgIcon />
                                       </div>
                                    </div>
                                    <div className="w-5 h-5 absolute top-[49%] left-[50%] transform-translate-middle">
                                       <CitySvgIcon />
                                    </div>
                                 </div>
                                 <div className="relative xs6:mt-0 mt-1">
                                    <div className="text-[#4285f4] xs6:text-left text-center font-['Raleway-Bold',_sans-serif] text-xs font-bold ">
                                       Quantity Of Companies
                                    </div>
                                    <div className="text-[#515151] xs6:text-left text-center font-['Arial-Regular',_sans-serif] text-[8px] font-normal ">
                                       July 20 - august 24
                                    </div>
                                 </div>
                              </div>

                              <div className="flex items-center xs6:justify-start justify-center 4xs:gap-x-4 gap-x-2 pt-1">
                                 <div className="text-[#4285f4] text-left font-['Arial-Bold',_sans-serif] text-xl font-bold relative">
                                    240
                                 </div>

                                 <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                                    Total Companies
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Grid>
                  </div>
               </Grid>
            </AdminCard>

            <div className="mt-7">
               <Img
                  src="/assets/images/city-map.png"
                  alt=""
                  width={1440}
                  height={450}
                  className="rounded-[14px] h-[269px] w-full"
               />
            </div>
         </AdminCard>
      </Fragment>
   );
}
