"use client";
import React, {
   ChangeEventHandler,
   MouseEventHandler,
   forwardRef,
} from "react";
import { Checkbox } from "flowbite-react";

type Props = {
   className?: string | undefined;
   onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
   onClick?: MouseEventHandler<HTMLInputElement> | undefined;
   defaultChecked?: boolean;
   defaultValue?: string | number | undefined;
   checked?: boolean | undefined;
   checkRef?: React.LegacyRef<HTMLInputElement> | undefined;
};

const CheckBox = ({
   className,
   onChange,
   onClick,
   defaultChecked,
   defaultValue,
   checked,
   checkRef,
}: Props) => {
   return (
      <Checkbox
         ref={checkRef} // forward the ref to the Checkbox input
         className={className}
         onChange={onChange}
         onClick={onClick}
         defaultChecked={defaultChecked}
         defaultValue={defaultValue}
         checked={checked}
      />
   );
};

export default CheckBox;
