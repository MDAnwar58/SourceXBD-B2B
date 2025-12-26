import Img from "@/components/Image";
import AdminCard from "@admin/components/card";
import { PlusSvgIcon } from "@admin/components/SvgIcons";

export default function PaymentMethodCard() {
   return (
      <AdminCard>
         <div className="bg-[rgba(152,176,238,0.05)] rounded-xl px-3 py-2 flex justify-between items-center">
            <div className="flex items-center gap-x-5">
               <Img
                  src="/assets/images/visa.png"
                  alt="visa card"
                  width={70}
                  height={70}
                  className="w-8 h-8 rounded"
               />
               <div>
                  <div className="flex items-center gap-x-1">
                     <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold relative">
                        Private Card 1
                     </div>
                     <div className="text-[#b2b2b2] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                        *1125
                     </div>
                  </div>

                  <div className=" bg-[#2f2f2f] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] xs:text-xs text-[10px] font-bold  rounded-md w-[55px] h-6 xs3:hidden flex justify-center items-center">
                     Deafault
                  </div>
               </div>
            </div>
            <div className="bg-[#2f2f2f] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] xs:text-xs text-[10px] font-bold  rounded-md xs:w-[65px] xs:h-6 p-1 px-2 xs3:flex hidden justify-center items-center">
               Deafault
            </div>
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] rounded-xl px-3 py-2">
            <div className="flex items-center gap-x-5">
               <Img
                  src="/assets/images/mastercard.png"
                  alt="master card"
                  width={70}
                  height={70}
                  className="w-8 h-8 rounded"
               />
               <div className="flex items-center gap-x-1">
                  <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold relative">
                     Private Card 2
                  </div>
                  <div className="text-[#b2b2b2] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                     *1125
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] rounded-xl px-3 py-2 flex justify-between items-center">
            <div className="flex items-center gap-x-5">
               <Img
                  src="/assets/images/bank.png"
                  alt="bank"
                  width={70}
                  height={70}
                  className="w-8 h-8 rounded"
               />
               <div>
                  <div className="flex items-center gap-x-1">
                     <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold relative">
                        ACH Bank Transfer
                     </div>
                     <div className="text-[#b2b2b2] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold relative">
                        *1125
                     </div>
                  </div>
                  <div className=" bg-[#2f2f2f] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] xs:text-xs text-[10px] font-bold  rounded-md w-[55px] h-6 xs3:hidden flex justify-center items-center">
                     Deafault
                  </div>
               </div>
            </div>

            <div className=" bg-[#2f2f2f] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] xs:text-xs text-[10px] font-bold  rounded-md xs:w-[65px] w-[55px] xs:h-6 h-5 xs3:flex hidden justify-center items-center">
               Deafault
            </div>
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] text-[#4285F4] rounded-xl px-3 py-2 flex items-center gap-x-5">
            <div className="bg-[#eaeaea] rounded-lg w-[37px] h-[30px] flex items-center justify-center">
               <div className="w-4 h-4">
                  <PlusSvgIcon />
               </div>
            </div>

            <div className=" text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
               Add new payment method
            </div>
         </div>
      </AdminCard>
   );
}
