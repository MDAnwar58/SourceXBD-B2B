"use client";
import React from "react";
import { Dropdown } from "flowbite-react";
import { DashboardThreeDotsSvgIcon } from "./SvgIcons";
import Button from "@/components/Button";

export default function TransperentTableDropdownBtn() {
  const ThreeDotsbtn = (
    <span className=" text-gray-700 rounded-[50%] w-8 h-8 flex items-center justify-center">
      <div className="w-[21.33px] h-[21.33px]">
        <DashboardThreeDotsSvgIcon />
      </div>
    </span>
  );

  const itemClass =
    "!bg-[#ffffff] shadow-admin-table-btn hover:!bg-[#4285f4] !hover:bg-gray-100 hover:text-white rounded-lg py-1 px-3 transition-colors w-full flex justify-center mb-2";
  return (
    <Dropdown
      label={ThreeDotsbtn}
      dismissOnClick={false}
      arrowIcon={false}
      inline
      className=" bg-[rgba(240,242,255,0.40)] rounded-[10px] shadow-admin-card border-none px-3 pt-2"
      placement="bottom-end"
    >
      <Dropdown.Item className="!p-0 hover:!bg-transparent">
        <div className={itemClass}>View</div>
      </Dropdown.Item>
      <Dropdown.Item className={itemClass}>Edit</Dropdown.Item>
      <Dropdown.Item className={itemClass}>Delete</Dropdown.Item>
      <Dropdown.Item className={itemClass}>Ban</Dropdown.Item>
    </Dropdown>
  );
}
