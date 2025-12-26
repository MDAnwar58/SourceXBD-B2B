"use client";
import React, {
  ChangeEventHandler,
  LegacyRef,
  MouseEventHandler,
  ReactNode,
} from "react";
import "@admin/assets/css/select-option.css";

type Props = {
  children?: ReactNode | undefined;
  className?: string | undefined;
  value?: string | number | readonly string[] | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  ref?: LegacyRef<HTMLSelectElement> | undefined;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  onClick?: MouseEventHandler<HTMLSelectElement> | undefined;
};

export default function SelectBox({
  children,
  className,
  value,
  defaultValue,
  ref,
  onChange,
  onClick,
}: Props) {
  return (
    <select
      className={className}
      value={value}
      defaultValue={defaultValue}
      ref={ref}
      onChange={onChange}
      onClick={onClick}
    >
      {children}
      <div></div>
    </select>
  );
}
