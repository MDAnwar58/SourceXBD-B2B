import React from "react";

type Props = {
   tabPill?: string | undefined;
   setTabPill?: any | undefined;
};

export default function MessageSidebarTabPills({ tabPill, setTabPill }: Props) {
   return (
      <div className="flex justify-center pt-3 pb-4">
         <span className="bg-[rgba(255,255,255,0.19)] rounded-xl p-1 shadow-admin-inset flex items-center gap-x-2">
            <div
               className={`${tabPill === "All" ? "bg-[#ffffff] text-[#4285f4] shadow-admin-card" : "text-[#b2b2b2]"}  text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-[10px] px-4 py-2 flex justify-center items-center cursor-pointer`}
               onClick={() => setTabPill("All")}
            >
               All
            </div>
            <div
               className={`${tabPill === "Buyer" ? "bg-[#ffffff] text-[#4285f4] shadow-admin-card" : "text-[#b2b2b2]"} text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold  rounded-[10px] px-4 py-2 flex items-center justify-center cursor-pointer`}
               onClick={() => setTabPill("Buyer")}
            >
               Buyer
            </div>
            <div
               className={`${tabPill === "Seller" ? "bg-[#ffffff] text-[#4285f4] shadow-admin-card" : "text-[#b2b2b2]"} text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold  rounded-[10px] px-4 py-2 flex items-center justify-center cursor-pointer`}
               onClick={() => setTabPill("Seller")}
            >
               Seller
            </div>
         </span>
      </div>
   );
}
