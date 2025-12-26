"use client";
import React, {
   ChangeEventHandler,
   HTMLAttributes,
   InputHTMLAttributes,
   KeyboardEventHandler,
   LegacyRef,
   MouseEventHandler,
} from "react";

type Props = {
   type?: InputHTMLAttributes<HTMLInputElement>["type"] | undefined;
   inputRef?: LegacyRef<HTMLInputElement> | undefined;
   id?: string | undefined;
   name?: string | undefined;
   className?: string | undefined;
   onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
   onClick?: MouseEventHandler<HTMLInputElement> | undefined;
   onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
   onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
   defaultValue?: string | number | readonly string[] | undefined;
   value?: string | number | undefined;
   placeholder?: string | undefined;
   style?: HTMLAttributes<HTMLInputElement> | React.CSSProperties | undefined;
   multiple?: boolean | undefined;
   checked?: boolean | undefined;
   disabled?: boolean | undefined;
   maxLength?: number | undefined;
   readOnly?: boolean | undefined;
   max?: string | number | undefined;
   onKeyUpCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
   onKeyDownCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
   onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
   accept?: string | undefined;
};

export default function Input({
   type,
   inputRef,
   id,
   name,
   className,
   onChange,
   onClick,
   onKeyUp,
   onKeyDown,
   defaultValue,
   value,
   placeholder,
   style,
   multiple,
   checked,
   disabled,
   maxLength,
   readOnly,
   max,
   onKeyUpCapture,
   onKeyDownCapture,
   onBlur,
   accept,
}: Props) {
   return (
      <input
         type={type}
         ref={inputRef}
         id={id}
         name={name}
         className={className}
         onChange={onChange}
         onClick={onClick}
         onKeyUp={onKeyUp}
         onKeyDown={onKeyDown}
         defaultValue={defaultValue}
         value={value}
         placeholder={placeholder}
         style={style}
         multiple={multiple}
         checked={checked}
         disabled={disabled}
         maxLength={maxLength}
         readOnly={readOnly}
         max={max}
         onKeyUpCapture={onKeyUpCapture}
         onKeyDownCapture={onKeyDownCapture}
         onBlur={onBlur}
         accept={accept}
      />
   );
}
