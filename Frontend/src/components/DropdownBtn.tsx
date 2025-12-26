"use client";
import React, { ReactNode } from "react";
import { Dropdown } from "flowbite-react";

type Props = {
   children?: ReactNode | undefined;
   label?: any | undefined;
   dismissOnClick?: any | undefined;
   arrowIcon?: boolean | undefined;
   inline?: boolean | undefined;
   className?: string | undefined;
   placement?: any | undefined;
};

export default function DropdownBtn({
   children,
   label,
   dismissOnClick,
   arrowIcon,
   inline,
   className,
   placement,
}: Props) {
   return (
      <Dropdown
         label={label}
         dismissOnClick={dismissOnClick}
         arrowIcon={arrowIcon}
         inline={inline}
         className={className} //" bg-[rgba(240,242,255,0.40)] rounded-[10px] shadow-admin-card border-none px-3 pt-2"
         placement={placement} //"bottom-end"
      >
         {children}
         {/* <Dropdown.Item className="!p-0 hover:!bg-transparent">
        <div className={itemClass}>View</div>
      </Dropdown.Item>
      <Dropdown.Item className={itemClass}>Edit</Dropdown.Item>
      <Dropdown.Item className={itemClass}>Delete</Dropdown.Item>
      <Dropdown.Item className={itemClass}>Ban</Dropdown.Item> */}
      </Dropdown>
   );
}
