"use client";
import React, {
  ChangeEventHandler,
  Fragment,
  KeyboardEventHandler,
  MouseEventHandler,
  Ref,
} from "react";
import { Label, Radio } from "flowbite-react";

type Props = {
  label?: any | undefined;
  htmlFor?: any | undefined;
  gap?: string | undefined;
  id?: string | undefined;
  name?: string | undefined;
  ref?: Ref<HTMLInputElement> | undefined;
  value?: string | undefined;
  defaultChecked?: boolean | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onClick?: MouseEventHandler<HTMLInputElement> | undefined;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  className?: string | undefined;
};

export default function RadioButton({
  label,
  htmlFor,
  gap,
  id,
  name,
  ref,
  value,
  defaultChecked = false,
  onChange,
  onClick,
  onKeyUp,
  onKeyDown,
  className,
}: Props) {
  return (
    <Fragment>
      <div className={`flex items-center gap-${gap && gap}`}>
        <Radio
          id={id}
          name={name}
          ref={ref}
          value={value}
          defaultChecked={defaultChecked}
          onChange={onChange}
          onClick={onClick}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          className={className}
        />
        <Label htmlFor={htmlFor}>{label}</Label>
      </div>
    </Fragment>
  );
}
