import React from "react";

type Props = {
   defaultChecked?: boolean | undefined;
   checked?: boolean | undefined;
   onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
   label?: any | undefined;
   className?: string | undefined;
   id?: string | undefined;
};

export default function Radio({
   defaultChecked,
   checked,
   onChange,
   label,
   className,
   id,
}: Props) {
   return (
      <div className="flex items-center">
         <input
            defaultChecked={defaultChecked}
            id={id}
            type="radio"
            name="default-radio"
            className={
               "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" +
               className
            }
            onChange={onChange}
            checked={checked}
         />
         {label && (
            <label
               htmlFor={id}
               className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
               {label}
            </label>
         )}
      </div>
   );
}
