import React from "react";
import AdminCard from "@admin/components/card";
import Input from "@/components/Input";

export default function StoreInformationCard() {
   return (
      <div className="lg:col-span-6 col-span-12 3xs:mb-0 mb-7">
         <AdminCard>
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold relative">
               Store Information Form
            </div>
            <div className="pt-3">
               <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal mb-2">
                  Store Name
               </div>
               <div className="px-1">
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[20px] h-[50px] w-full px-5"
                     placeholder="Type here"
                  />
               </div>
            </div>
            <div className="pt-3">
               <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal mb-2">
                  Discription
               </div>
               <div className="px-1">
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[20px] h-[50px] w-full px-5"
                     placeholder="Type here"
                  />
               </div>
            </div>
            <div className="pt-3">
               <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal mb-2">
                  Address
               </div>
               <div className="px-1">
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[20px] h-[50px] w-full px-5"
                     placeholder="Type here"
                  />
               </div>
            </div>
            <div className=" bg-blue-gradient text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold rounded-[20px] xs:w-[172px] w-full h-[50px] flex items-center justify-center mx-auto mt-5">
               Save
            </div>
         </AdminCard>
      </div>
   );
}
