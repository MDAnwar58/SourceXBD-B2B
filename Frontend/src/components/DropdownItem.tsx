"use client";
import { Dropdown } from "flowbite-react";
import React, { ReactNode } from "react";

type Props = {
   children?: ReactNode | undefined;
   className?: string | undefined;
   onClick?: (() => void) | undefined;
};

export default function DropdownItem({ children, className, onClick }: Props) {
   return (
      <Dropdown.Item
         className={className} //"!p-0 hover:!bg-transparent"
         onClick={onClick}
      >
         {children}
      </Dropdown.Item>
   );
}
