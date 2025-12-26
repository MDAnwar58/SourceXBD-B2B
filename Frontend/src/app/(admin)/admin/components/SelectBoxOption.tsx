import React, { MouseEventHandler, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  value?: string | number | readonly string[] | undefined;
  className?: string | undefined;
  onClick?: MouseEventHandler<HTMLOptionElement> | undefined;
};

export default function SelectBoxOption({
  children,
  value,
  className,
  onClick,
}: Props) {
  return (
    <option value={value} className={className} onClick={onClick}>
      {children}
    </option>
  );
}
