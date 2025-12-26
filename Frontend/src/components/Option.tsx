import React from "react";

type Props = {
  children?: React.ReactNode;
  value?: string | number | undefined;
  className?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLOptionElement> | undefined;
};

export default function Option({ children, value, className, onClick }: Props) {
  return (
    <option value={value} className={className} onClick={onClick}>
      {children}
    </option>
  );
}
