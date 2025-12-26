"use client";
import React from "react";
import { DeleteSvgIcon } from "@admin/components/SvgIcons";
import truncate from "html-truncate";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), {
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

const formatDate = (isoString: string): string => {
   const date = new Date(isoString);
   const day = date.getDate().toString().padStart(2, "0"); // Ensure 2 digits for the day
   const month = date.toLocaleString("en-GB", { month: "short" }); // Get short month
   const year = date.getFullYear();
   return `${day} ${month}, ${year}`;
};

type Props = {
   company: Company;
   onHandleDeclineBtn: (id: number) => void;
   onHandleApproveBtn: (id: number) => void;
   onHandledeleteBtn: (id: number) => void;
};

export default function ApproveNewCopmanie({
   company,
   onHandleDeclineBtn,
   onHandleApproveBtn,
   onHandledeleteBtn,
}: Props) {
   const localUrl = LocalUrl();

   let date: string = "";
   if (company?.date !== undefined) {
      date = formatDate(company?.date) as string;
   }
   const truncatedHtml = truncate(company?.desc, 75);

   const imageUrl = localUrl.concat(company?.logo);

   return (
      <div className="3xl:col-span-4 5lg:col-span-6 col-span-12 3xs:mb-0 mb-5">
         <div className="bg-[#ffffff] rounded-[14px] shadow-admin-sub-card p-0">
            <div className="bg-[#f4f4f4] rounded-tl-[14px] rounded-tr-[14px] py-2 px-4 flex items-center justify-between">
               <div className="text-[#2f2f2f] text-left font-['-',_sans-serif] text-[10px] font-normal relative">
                  <span>
                     <span className="id-no-1224-45569-span">ID No:</span>
                     <span className="id-no-1224-45569-span2">
                        {company?.u_id}
                     </span>
                  </span>
               </div>

               {/* <Button
                  type="button"
                  className="bg-[rgba(15,175,1,0.60)] text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-[8px] font-bold rounded-md px-4 py-1"
               >
                  Team
               </Button> */}
            </div>
            <div className=" px-4 py-3">
               <div className="xs:flex">
                  <div className="xs:w-[50%] w-full">
                     <div className="flex">
                        {company?.logo ? (
                           <Img
                              src={imageUrl}
                              alt="..."
                              width={100}
                              height={100}
                              className="rounded-[100%]  w-8 h-8"
                              style={{
                                 boxShadow:
                                    "-1px -1px 6px 0px rgba(101, 101, 101, 0.2),1px 1px 6px 0px rgba(0, 0, 0, 0.2)",
                              }}
                           />
                        ) : (
                           <Img
                              src="/assets/images/approval.png"
                              alt="..."
                              width={100}
                              height={100}
                              className="rounded-[100%]  w-8 h-8"
                              style={{
                                 boxShadow:
                                    "-1px -1px 6px 0px rgba(101, 101, 101, 0.2),1px 1px 6px 0px rgba(0, 0, 0, 0.2)",
                              }}
                           />
                        )}
                        <div className="ps-3">
                           <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal">
                              {company?.name}
                           </div>

                           <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold pt-[0.17rem]">
                              {company?.industry}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="xs:w-[50%] w-full xs:mt-0 mt-2">
                     <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal">
                        Discription
                     </div>
                     <div
                        className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pt-[0.17rem]"
                        dangerouslySetInnerHTML={{ __html: truncatedHtml }}
                     />
                  </div>
               </div>

               <div className="flex 5xl:flex-row 3xl:flex-col xl:flex-row 5lg:flex-col 3md:flex-row md:flex-col 4xs:flex-row flex-col gap-1 5xl:items-center justify-between xs:mt-3 mt-2 xs:pb-5 pb-2">
                  <div className="flex gap-1 w-full">
                     <div className="xs:mb-0 mb-1 w-full">
                        <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                           Date
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                           {date}
                        </div>
                     </div>

                     <div className="xs:mb-0 mb-1 w-full">
                        <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                           Phone Number
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                           +880 {company?.user_phone}
                        </div>
                     </div>
                  </div>

                  <div className="xs:mb-0 mb-1 w-full">
                     <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal relative">
                        Email
                     </div>
                     <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                        {company?.user_email}
                     </div>
                  </div>
               </div>

               <div className=" flex justify-between items-center">
                  <div className="flex items-center xs5:gap-x-3 gap-x-2">
                     {/* <Button
                        type="button"
                        className="bg-[#eaeaea] text-[#979797] hover:text-red-500 rounded-[10px] xs4:w-[99px] xs5:w-[89px] xs6:w-[81px] w-[71px] h-[30px] font-['Arial-Bold',_sans-serif] text-xs font-bold"
                        onClick={() => onHandleDeclineBtn?.(company?.id)}
                     >
                        Decline
                     </Button> */}
                     <Button
                        type="button"
                        className="bg-[#98b0ee] text-white rounded-[10px] xs4:w-[93px] xs5:w-[83px] xs6:w-[75px] w-[70px] h-[30px] font-['Arial-Bold',_sans-serif] text-xs font-bold"
                        onClick={() => onHandleApproveBtn(company?.id)}
                     >
                        Approve
                     </Button>
                  </div>
                  <div>
                     <Button
                        type="button"
                        className="bg-[#e6e6e6] hover:bg-red-400 text-gray-700 hover:text-white rounded p-1 transition-all duration-200 ease-linear"
                        onClick={() => onHandledeleteBtn(company?.id)}
                     >
                        <div className="w-3.5 h-3.5">
                           <DeleteSvgIcon />
                        </div>
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
