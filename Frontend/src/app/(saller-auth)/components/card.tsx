import React, {
  CSSProperties,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

type Props = {
  children?: ReactNode | undefined;
  className?: string | undefined;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  style?: CSSProperties | undefined;
};

export default function AdminCard({
  children,
  className,
  onClick,
  style,
}: Props) {
  return (
    <div
      className={`bg-[rgba(152,176,238,0.05)] rounded-2xl w-full h-auto shadow-admin-card p-5 ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}
