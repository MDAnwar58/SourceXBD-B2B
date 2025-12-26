import React from "react";
import AdminCard from "@admin/components/card";
import InputCheckbox from "@/components/InputCheckbox";

export default function AdEmailNotificatinCard() {
   return (
      <AdminCard>
         <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold pb-3">
            Ad Email Notificatin
         </div>
         <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal xs:px-3 pb-3">
            Lorem ipsum dolor sit amet consectetur. Malesuada sem donec proin
            tellus sagittis. Porta dolor diam cursus mattis hendrerit. Ipsum
            nullam est lectus iaculis feugiat. Dictum odio diam dignissim id
            diam lacinia orci velit.Lorem ipsum dolor sit amet consectetur.
            Malesuada sem donec proin tellus sagittis. Porta dolor diam cursus
            mattis hendrerit. Ipsum nullam est lectus iaculis feugiat. Dictum
            odio diam dignissim id diam lacinia orci velit.
         </div>
         <div className="text-[#4285f4] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold relative">
            Change Access Control
         </div>
         <div className="pt-3">
            <div className="flex items-center gap-3 mb-3">
               <InputCheckbox
                  label="Users"
                  labelClassName="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                  ring="focus:ring-blue-300"
                  color="rgba(164 202 254)"
               />
            </div>
            <div className="flex items-center gap-3 mb-3">
               <InputCheckbox
                  label="Companies"
                  labelClassName="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                  ring="focus:ring-blue-300"
                  color="rgba(164 202 254)"
                  defaultChecked
               />
            </div>
            <div className="flex items-center gap-3 mb-3">
               <InputCheckbox
                  label="Products"
                  labelClassName="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                  ring="focus:ring-blue-300"
                  color="rgba(164 202 254)"
               />
            </div>
            <div className="flex items-center gap-3 mb-3">
               <InputCheckbox
                  label="Reviews"
                  labelClassName="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                  ring="focus:ring-blue-300"
                  color="rgba(164 202 254)"
               />
            </div>
            <div className="flex items-center gap-3 mb-3">
               <InputCheckbox
                  label="Buyer Complaints"
                  labelClassName="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                  ring="focus:ring-blue-300"
                  color="rgba(164 202 254)"
               />
            </div>
            <div className="flex items-center gap-3 mb-3">
               <InputCheckbox
                  label="Blog"
                  labelClassName="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                  ring="focus:ring-blue-300"
                  color="rgba(164 202 254)"
               />
            </div>
            <div className="flex items-center gap-3 mb-3">
               <InputCheckbox
                  label="Analytics"
                  labelClassName="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                  ring="focus:ring-blue-300"
                  color="rgba(164 202 254)"
               />
            </div>
            <div className="flex items-center gap-3 mb-3">
               <InputCheckbox
                  label="Subscriptions"
                  labelClassName="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                  ring="focus:ring-blue-300"
                  color="rgba(164 202 254)"
               />
            </div>
            <div className="flex items-center gap-3 mb-3">
               <InputCheckbox
                  label="Advertising"
                  labelClassName="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                  ring="focus:ring-blue-300"
                  color="rgba(164 202 254)"
               />
            </div>
         </div>
      </AdminCard>
   );
}
