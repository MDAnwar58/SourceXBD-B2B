"use client";
import React, { HTMLAttributes, LegacyRef, MouseEventHandler } from "react";

type Props = {
   children: React.ReactNode;
   type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] | undefined;
   onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
   className?: string | undefined;
   style?: HTMLAttributes<HTMLButtonElement> | React.CSSProperties | undefined;
   buttonRef?: LegacyRef<HTMLButtonElement> | undefined;
   disabled?: boolean | undefined;
};

export default function Button({
   children,
   type,
   onClick,
   className,
   style,
   buttonRef,
   disabled,
}: Props) {
   return (
      <button
         type={type}
         onClick={onClick}
         className={className}
         style={style}
         ref={buttonRef}
         disabled={disabled}
      >
         {children}
      </button>
   );
}
