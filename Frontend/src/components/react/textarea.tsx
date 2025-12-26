"use client";
import { Field, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";
import { ChangeEventHandler, CSSProperties, Ref } from "react";

type Props = {
   label?: string | undefined;
   ref?: Ref<HTMLElement> | undefined;
   onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
   placeholder?: string | undefined;
   defaultValue?: string | undefined;
   className?: string | undefined;
   name?: string | undefined;
   style?: CSSProperties | undefined;
   disabled?: boolean | undefined;
};

export default function TextArea({
   label,
   ref,
   onChange,
   placeholder,
   defaultValue,
   className,
   name,
   style,
   disabled,
}: Props) {
   return (
      <div className="w-full">
         <Field>
            {label && (
               <Label className="text-sm/6 font-medium text-black">label</Label>
            )}
            <Textarea
               className={clsx(
                  `mt-1 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-gray-700 ${className}`,
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
               )}
               rows={3}
               ref={ref}
               onChange={onChange}
               placeholder={placeholder}
               defaultValue={defaultValue}
               name={name}
               style={style}
               disabled={disabled}
            />
         </Field>
      </div>
   );
}
