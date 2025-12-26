import React from "react";

type Props = {
  children?: React.ReactNode;
  value?: string | number | undefined;
  defaultValue?: string | number | undefined;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  className?: string | undefined;
};

export default function Select({
  children,
  defaultValue,
  value,
  onChange,
  className,
}: Props) {
  return (
    <select
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      className={className}
    >
      {children}
    </select>
  );
}
