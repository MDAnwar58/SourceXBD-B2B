import React from "react";
import { DeleteSvgIcon, DownloadSvgIcon } from "./SvgIcons";

export default function DeleteBtn() {
   return (
      <div className="bg-[#e6e6e6] text-[#2F2F2F] rounded w-[22px] h-[22px] flex justify-center items-center">
         <div className="w-4 h-4">
            <DeleteSvgIcon />
         </div>
      </div>
   );
}
