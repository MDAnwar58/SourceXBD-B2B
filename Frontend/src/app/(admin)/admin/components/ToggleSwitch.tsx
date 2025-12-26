"use client";
import React, { LegacyRef, Ref } from "react";
import { Switch } from "@headlessui/react";

type Props = {
   checked?: any | undefined;
   onChange?: (value: Boolean) => void | undefined;
};

export default function ToggleSwitch({ checked, onChange }: Props) {
   return (
      <Switch
         checked={checked}
         onChange={onChange}
         className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 data-[checked]:bg-[#81f124] data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 shadow-admin-add"
      >
         <span
            aria-hidden="true"
            className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"
         />
      </Switch>
   );
}
