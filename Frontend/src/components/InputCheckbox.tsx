import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { Checkbox, Label } from "flowbite-react";

type Props = {
  gap?: string | undefined;
  color?: string | undefined;
  backgroundColor?: string | undefined;
  rounded?: string | undefined;
  border?: string | undefined;
  borderColor?: string | undefined;
  ring?: string | undefined;
  size?: string | undefined;
  fontSize?: string | undefined;
  boxShadow?: string | undefined;
  defaultChecked?: boolean | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onClick?: MouseEventHandler<HTMLInputElement> | undefined;
  label?: string | undefined;
  labelClassName?: string | undefined;
};

export default function InputCheckbox({
  gap,
  color,
  backgroundColor,
  rounded,
  border,
  borderColor,
  ring,
  size,
  fontSize,
  boxShadow,
  defaultChecked,
  onChange,
  onClick,
  label,
  labelClassName,
}: Props) {
  return (
    <div className={`flex items-center gap-${gap ? gap : "2"}`}>
      <Checkbox
        id={label}
        className={ring}
        style={{
          color: color,
          backgroundColor: backgroundColor,
          border: `${border} solid ${borderColor}`,
          borderRadius: rounded,
          fontSize: fontSize,
          width: size,
          height: size,
          boxShadow: boxShadow,
        }}
        onChange={onChange}
        onClick={onClick}
        defaultChecked={defaultChecked}
      />
      {label && (
        <Label
          htmlFor={label}
          className={`flex cursor-pointer ${labelClassName}`}
        >
          {label}
        </Label>
      )}
    </div>
  );
}
