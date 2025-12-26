"use client";
import React, {
   ChangeEventHandler,
   HTMLAttributes,
   KeyboardEventHandler,
   MouseEventHandler,
   ReactNode,
} from "react";

type Props = {
   children?: ReactNode | undefined;
   name?: string | undefined;
   id?: string | undefined;
   textAreaRef?: React.LegacyRef<HTMLTextAreaElement> | undefined;
   className?: string | undefined;
   onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
   onClick?: MouseEventHandler<HTMLTextAreaElement> | undefined;
   onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
   onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
   defaultValue?: string | number | undefined;
   //   value?: string | number | undefined;
   placeholder?: string | undefined;
   rows?: number | undefined;
   cols?: number | undefined;
   style?: HTMLAttributes<HTMLInputElement> | React.CSSProperties | undefined;
};
export default function Textarea({
   children,
   name,
   id,
   textAreaRef,
   className,
   onChange,
   onClick,
   onKeyUp,
   onKeyDown,
   defaultValue,
   placeholder,
   rows,
   cols,
   style,
}: Props) {
   return (
      <textarea
         name={name}
         id={id}
         ref={textAreaRef}
         className={className}
         onChange={onChange}
         onClick={onClick}
         onKeyUp={onKeyUp}
         onKeyDown={onKeyDown}
         defaultValue={defaultValue}
         placeholder={placeholder}
         rows={rows}
         cols={cols}
         style={style}
      >
         {children}
      </textarea>
   );
}
