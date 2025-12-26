"use client";
import { Label, Radio } from "flowbite-react";
import React from "react";

type Props = {
   id?: string | undefined;
   name?: string | undefined;
   value?: string | number | readonly string[] | undefined;
   defaultChecked?: boolean | undefined;
   label?: string | undefined;
   htmlFor: string | undefined;
   onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
   className?: string | undefined;
   labelClassName?: string | undefined;
   checked?: boolean | undefined;
};

export default function CheckboxWithLabel({
   id,
   name,
   value,
   defaultChecked,
   label,
   htmlFor,
   onChange,
   className,
   labelClassName,
   checked,
}: Props) {
   return (
      <div className="flex items-center gap-2">
         <Radio
            id={id}
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            onChange={onChange}
            className={className}
            checked={checked}
         />
         <Label htmlFor={htmlFor} className={labelClassName}>
            {label}
         </Label>
      </div>
   );
}
