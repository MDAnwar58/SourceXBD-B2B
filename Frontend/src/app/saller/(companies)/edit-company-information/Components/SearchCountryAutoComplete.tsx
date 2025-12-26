"use client";
import {
   Combobox,
   ComboboxButton,
   ComboboxInput,
   ComboboxOption,
   ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

type Item = {
   id?: string | number | undefined;
   iso?: string | undefined;
   name?: string | undefined;
   iso3?: string | undefined;
};

type Props = {
   items?: any | undefined;
   country?: null | undefined;
   setCountry?: any | undefined;
   placeholder?: string | undefined;
   className?: string | undefined;
};

export default function SearchCountryAutoComplete({
   items,
   country,
   setCountry,
   placeholder,
   className,
}: Props) {
   const [query, setQuery] = useState("");

   const Items =
      query === ""
         ? items
         : items.filter((item: Item) => {
              return (
                 item?.iso3?.toLowerCase().includes(query.toLowerCase()) ||
                 item?.iso?.toLowerCase().includes(query.toLowerCase()) ||
                 item?.name?.toLowerCase().includes(query.toLowerCase())
              );
           });
   return (
      <div className="">
         <Combobox
            value={country}
            onChange={(value) => setCountry(value)}
            onClose={() => setQuery("")}
         >
            <div className="relative">
               <ComboboxInput
                  className={clsx(
                     className,
                     "focus:ring-0 border-none focus:outline-none"
                  )}
                  displayValue={(item: any) => item?.name}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={placeholder}
               />
               <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                  <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
               </ComboboxButton>
            </div>

            <ComboboxOptions
               anchor="bottom"
               transition
               className={clsx(
                  "w-[var(--input-width)] rounded-xl border border-white/5  bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                  "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
               )}
            >
               {Items.map((item: Item) => (
                  <ComboboxOption
                     key={item.id}
                     value={item}
                     className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-slate-50"
                  >
                     <CheckIcon className="invisible size-4 bg-gray-50 shadow-xl group-data-[selected]:visible" />
                     <div className="text-sm/6 text-gray-700">
                        ({item.iso}) - {item.name}
                     </div>
                  </ComboboxOption>
               ))}
            </ComboboxOptions>
         </Combobox>
      </div>
   );
}
