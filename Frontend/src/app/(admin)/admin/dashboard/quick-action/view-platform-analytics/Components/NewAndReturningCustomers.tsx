"use client";
import React from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const CircleCounter = dynamic(() => import("./CircleCounter"), {
   ssr: false,
});

export default function NewAndReturningCustomers() {
   const { oldCustomersPercentage, newCustomersPercentage } = useSelector(
      (state: AdminState) => state.admin.dashboard
   );
   return (
      <div className=" bg-[#ffffff] rounded-2xl shadow-admin-card pt-5 pb-7 px-7">
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold xs4:w-[250px] w-[150px]"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            New vs. Returning Customers
         </div>
         <div className=" grid grid-cols-2 2xl:gap-10 6lg:gap-5 gap-7 14xl:px-60 11xl:px-56 8xl:px-48 6xl:px-28 4xl:px-20 2xl:px-10 px-0 mt-5">
            {/* TODO: New Customer start */}
            <div className="6lg:col-span-1 3lg:col-span-2 2md:col-span-1 md:col-span-2 3xs:col-span-1 col-span-2">
               <div
                  className="bg-[rgba(66,133,244,0.05)] rounded-[14px] w-full py-2 px-4"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <div className="text-[#98b0ee] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold border-b border-gray-300 pb-2">
                     New Customers
                  </div>
                  <div className="py-5">
                     <CircleCounter
                        percentage={newCustomersPercentage} //  15xl:w-[216px] 14xl:w-[175px] 1xl:w-[150px] 6lg:w-[116px] w-[216px]
                        className="15xl:h-[216px] 14xl:h-[175px] 1xl:h-[150px] 6lg:h-[116px] lg:h-[216px] 5md:h-[175px] 4md:h-[150px] 2md:h-[125px] 3sm:h-[250px] sm:h-[216px] 6xs:h-[175px] 4xs:h-[150px] 3xs:h-[125px] xs:h-[275px] xs6:h-[216px] h-[150px] font-['Arial-Bold',_sans-serif] font-bold"
                        textSize="24px"
                        pathTransitionDuration={0.7}
                        pathColor="#98b0ee"
                        textColor="#98b0ee"
                        trailColor="#e8e8e8"
                     />
                  </div>
               </div>
            </div>
            {/* TODO: New Customer end */}

            {/* TODO: Old customer start */}
            <div className="6lg:col-span-1 3lg:col-span-2 2md:col-span-1 md:col-span-2 3xs:col-span-1 col-span-2">
               <div
                  className="bg-[rgba(66,133,244,0.05)] rounded-[14px] w-full py-2 px-4"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <div className="text-[#98b0ee] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold border-b border-gray-300 pb-2">
                     Old Customers
                  </div>
                  <div className="py-5">
                     <CircleCounter
                        percentage={oldCustomersPercentage}
                        className="15xl:h-[216px] 14xl:h-[175px] 1xl:h-[150px] 6lg:h-[116px] lg:h-[216px] 5md:h-[175px] 4md:h-[150px] 2md:h-[125px] 3sm:h-[250px] sm:h-[216px] 6xs:h-[175px] 4xs:h-[150px] 3xs:h-[125px] xs:h-[275px] xs6:h-[216px] h-[150px] font-['Arial-Bold',_sans-serif] font-bold"
                        textSize="24px"
                        pathTransitionDuration={0.7}
                        pathColor="#98b0ee"
                        textColor="#98b0ee"
                        trailColor="#e8e8e8"
                     />
                  </div>
               </div>
            </div>
            {/* TODO: Old customer end */}
         </div>
      </div>
   );
}
