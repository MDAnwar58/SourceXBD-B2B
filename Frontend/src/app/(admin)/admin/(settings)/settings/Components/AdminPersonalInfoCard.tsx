import React from "react";
import AdminCard from "@admin/components/card";
import Img from "@/components/Image";
import Input from "@/components/Input";
import Grid from "../../../components/grid";

export default function AdminPersonalInfoCard() {
   return (
      <AdminCard className="mb-7">
         <div className="3xs:flex items-end gap-x-3">
            <Img
               src="/assets/images/setting-user.png"
               alt="setting user avatar"
               width={300}
               height={300}
               className="3xs:w-[216px] w-full 3xs:h-[200px] h-auto rounded-[14px]"
            />
            <div className="3xs:pt-0 pt-3">
               <div className="w-40 h-7 bg-[#98b0ee] text-white text-xs font-normal font-['Arial'] rounded-[10px] flex justify-center items-center mb-3">
                  Upload New Picture
               </div>
               <div className="w-[81px] h-7 bg-[#dbdbdb] text-white text-xs font-normal font-['Arial'] rounded-[10px] flex justify-center items-center">
                  Delete
               </div>
            </div>
         </div>

         <div className="pt-7">
            <Grid cols={2} gapX={7} className=" mb-3">
               <div className="3xs:mb-0 mb-3">
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal mb-1">
                     First Name
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[rgba(47,47,47,0.50)] shadow-admin-xs border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[14px] w-full h-[41px] px-5"
                     placeholder="First Name"
                  />
               </div>
               <div className="3xs:mb-0 mb-3">
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal mb-1">
                     Last Name
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[rgba(47,47,47,0.50)] shadow-admin-xs border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[14px] w-full h-[41px] px-5"
                     placeholder="Last Name"
                  />
               </div>
            </Grid>
            <Grid cols={2} gapX={7} className=" mb-3">
               <div className="3xs:mb-0 mb-3">
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal mb-1">
                     Phone Number
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[rgba(47,47,47,0.50)] shadow-admin-xs border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[14px] w-full h-[41px] px-5"
                     placeholder="+880 | 1953-683518"
                  />
               </div>
               <div className="3xs:mb-0 mb-3">
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal mb-1">
                     E-mail
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[rgba(47,47,47,0.50)] shadow-admin-xs border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[14px] w-full h-[41px] px-5"
                     placeholder="Email"
                  />
               </div>
            </Grid>
            <Grid cols={2} gapX={7} className=" mb-3">
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal mb-1">
                     E-mail
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[rgba(47,47,47,0.50)] shadow-admin-xs border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[14px] w-full h-[41px] px-5"
                     placeholder="Email"
                  />
               </div>
            </Grid>
         </div>
      </AdminCard>
   );
}
