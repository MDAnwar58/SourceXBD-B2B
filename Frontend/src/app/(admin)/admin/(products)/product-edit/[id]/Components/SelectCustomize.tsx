"use client";
import React from "react";

export default function SelectCustomize() {
   return (
      <select className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] border-none focus:ring-0 focus:border-none  text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] h-[30px] w-full shadow-admin-card py-0 px-5">
         <option value="Active">
            Active
            <div className="bg-[#90ff38] rounded-[50%] w-2 h-2 inline-block"></div>
         </option>
         <option value="Unactive">Unactive</option>
      </select>
   );
}
