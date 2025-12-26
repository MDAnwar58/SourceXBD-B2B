import React from "react";
import { AddSvgIcon } from "@/buyer/components/SvgIcons";
type Props = {
   totalLength: number;
};
export default function WishListProductAddCard({ totalLength }: Props) {
   return (
      <div
         className={`bg-[#ffffff] rounded-[30px] w-full ${totalLength > 0 ? "h-full" : "h-[367px]"} flex items-center justify-center`}
         style={{
            boxShadow:
               "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
         }}
      >
         <div>
            <div className="w-[75px] h-[75px] text-[#4285F4] mx-auto">
               <AddSvgIcon />
            </div>
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold mt-3">
               Add Product For Wishlist
            </div>
         </div>
      </div>
   );
}
