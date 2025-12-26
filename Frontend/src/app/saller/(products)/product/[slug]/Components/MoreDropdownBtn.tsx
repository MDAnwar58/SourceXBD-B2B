"use client";
import React from "react";
import {
  DashboardThreeDotsSvgIcon,
  UpAndDownLineArrowSvgIcon,
} from "@/app/(admin)/admin/components/SvgIcons";
import DropdownBtn from "@/components/DropdownBtn";
import DropdownItem from "@/components/DropdownItem";

const TableUpDropdown = (
  <span className="text-gray-700 rounded-[50%] w-8 h-8 flex items-center justify-center">
    <div className="w-[21.33px] h-[21.33px]">
      <DashboardThreeDotsSvgIcon />
    </div>
  </span>
);

export default function MoreDropdownBtn() {
  return (
    <div>
      <DropdownBtn
        label={TableUpDropdown}
        inline
        arrowIcon={false}
        placement="bottom-end"
        className="bg-[rgba(255,255,255,0.40)] rounded-[10px] shadow-admin-card border-none px-3 pt-2"
      >
        <DropdownItem className="!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[66px] h-[26px] transition-colors flex items-center justify-center mb-2 !mt-[.05rem]">
          Edit
        </DropdownItem>
        <DropdownItem className="!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[66px] h-[26px] transition-colors flex items-center justify-center mb-2 !mt-[.05rem]">
          Delete
        </DropdownItem>
        <DropdownItem className="!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-[66px] h-[26px] transition-colors flex items-center justify-center mb-2 !mt-[.05rem]">
          Ban
        </DropdownItem>
      </DropdownBtn>
    </div>
  );
}
