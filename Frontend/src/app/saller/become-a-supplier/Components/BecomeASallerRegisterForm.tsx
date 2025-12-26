import Input from "@/components/Input";
import React from "react";
import SallerGrid from "@/saller/components/saller-grid";

export default function BecomeASallerRegisterForm() {
   return (
      <div className="w-full">
         <div>
            <div className="text-[#98b0ee] text-left font-['Raleway-Bold',_sans-serif] text-[32px] leading-[117.46%] font-bold pb-3">
               Start selling on Lorem.com
            </div>
            <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs leading-[115.05%] font-normal pb-7">
               Get custom pricing plan and personalized business solutions from
               logo.com
            </div>

            <div className="pb-4">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                  Company Name
               </div>
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none px-5"
                  placeholder="Type here"
               />
            </div>

            <SallerGrid gridOne={true} className="grid-cols-2 gap-4">
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     First Name
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none px-5"
                     placeholder="Type here"
                  />
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Last Name
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none px-5"
                     placeholder="Type here"
                  />
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Phone Number
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none px-5"
                     placeholder="Type here"
                  />
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Email
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] w-full border-none focus:outline-none px-5"
                     placeholder="Type here"
                  />
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     Country
                  </div>
                  <select className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px]  px-5 w-full border-none focus:outline-none">
                     <option>Select Country</option>
                     <option>Option 1</option>
                     <option>Option 2</option>
                     <option>Option 3</option>
                  </select>
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
                     City
                  </div>
                  <select className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] px-5 w-full border-none focus:outline-none">
                     <option>Select City</option>
                     <option>Option 1</option>
                     <option>Option 2</option>
                     <option>Option 3</option>
                  </select>
               </div>
            </SallerGrid>

            <div className="flex flex-row gap-3 mt-5">
               <Input
                  type="checkbox"
                  className="bg-[#f5f5f5] rounded-sm border-solid border-[#4285f4] border w-[18px] h-[18px]"
               />

               <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs leading-4 font-normal relative">
                  The event organizer may use the above information to use to
                  send communications about lorem ipsum
               </div>
            </div>

            <div
               className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-base leading-[117.46%] font-bold rounded-[10px] h-[47px] 3xs:w-[455px] w-full flex justify-center items-center mt-7"
               style={{
                  background:
                     "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
               }}
            >
               Register Now
            </div>
         </div>
      </div>
   );
}
