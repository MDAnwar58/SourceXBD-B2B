import React, { Fragment } from "react";

export default function CitySelect() {
   return (
      <Fragment>
         <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium pb-1">
            City
         </div>
         <select className="bg-[rgba(152,176,238,0.05)] text-[#b2b2b2] text-left font-['Raleway-Medium',_sans-serif] text-[10px] leading-[117.46%] font-medium rounded-[10px] h-[47px] px-5 w-full border-none focus:outline-none">
            <option>Select City</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
         </select>
      </Fragment>
   );
}
