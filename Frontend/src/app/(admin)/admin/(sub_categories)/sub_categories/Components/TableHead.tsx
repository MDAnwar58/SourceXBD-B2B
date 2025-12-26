import dynamic from "next/dynamic";
import React from "react";
const CheckBox = dynamic(() => import("@/components/Checkbox"));

export default function TableHead() {
   return (
      <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
         <tr>
            <th scope="col" className="px-6 py-3 table-head-th-l">
               <CheckBox className="bg-[#f1f1f1] text-[#4285f4] rounded-sm border-solid border-[#4285f4] border focus:ring-[#4285f4] w-4 h-4" />
            </th>
            <th
               scope="col"
               className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
            >
               Sub Category
            </th>
            <th
               scope="col"
               className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
            >
               Slug
            </th>
            <th
               scope="col"
               className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
            >
               Category
            </th>
            <th
               scope="col"
               className="px-6 py-3 table-head-th text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
            >
               Status
            </th>
            <th
               scope="col"
               className="px-6 py-3 table-head-th-r text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
            ></th>
         </tr>
      </thead>
   );
}
