import React from "react";

export default function BlogRemarkTab() {
   return (
      <div className="flex xs:flex-row flex-col 3xs:justify-start justify-center items-center gap-7 pt-7 xs:pb-11 pb-9">
         <div className="text-[#90a8e7] font-['Raleway-Bold',_sans-serif] text-lg font-bold relative">
            <span>Most Popular</span>
            <div className=" absolute -bottom-4 left-[50%] transform-translate-x-middle">
               <span className=" inline-flex w-20 h-[2px] bg-[#90a8e7] drop-shadow-md"></span>
            </div>
         </div>
         <div className="text-[#636363] font-['Raleway-Medium',_sans-serif] text-md font-medium">
            Hot Selling
         </div>
         <div className="text-[#636363] font-['Raleway-Medium',_sans-serif] text-md font-medium">
            Best Reviews
         </div>
      </div>
   );
}
