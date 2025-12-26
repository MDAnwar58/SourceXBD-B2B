import Input from "@/components/Input";
import InputCheckbox from "@/components/InputCheckbox";
import { SvgPSSSearchIcon } from "@/components/SvgIcons";
import React, { Fragment } from "react";

export default function SupplierCities() {
  return (
    <Fragment>
      <div className="text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold pt-3">
        Supplier Cities
      </div>
      <div className="pt-2 px-2 relative">
        <div className="relative">
          <span className=" absolute top-[50%] left-[5%] transform-translate-y-middle">
            <SvgPSSSearchIcon width={16} height={16} color="#4285F4" />
          </span>
          <Input
            type="text"
            className="bg-[#e3e6fb] border-[.124rem] border-blue-500 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-9 pe-3 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
        <div className="pt-[.6rem]  -z-10">
          <div className="pb-2">
            <InputCheckbox
              label="Khulna"
              labelClassName="text-[#2f2f2f] text-left font-['Raleway-Regular',_sans-serif] text-sm font-normal"
              rounded="0.25rem"
              border="1px"
              borderColor="#4285f4"
              color="#4285f4"
              size="1rem"
              boxShadow="-2px -2px 10px 0px rgba(101, 101, 101, 0.05),2px 2px 10px 0px rgba(0, 0, 0, 0.05)"
              gap="4"
            />
          </div>
          <div className="pb-2">
            <InputCheckbox
              label="Pabna"
              labelClassName="text-[#2f2f2f] text-left font-['Raleway-Regular',_sans-serif] text-sm font-normal"
              rounded="0.25rem"
              border="1px"
              borderColor="#4285f4"
              color="#4285f4"
              size="1rem"
              boxShadow="-2px -2px 10px 0px rgba(101, 101, 101, 0.05),2px 2px 10px 0px rgba(0, 0, 0, 0.05)"
              gap="4"
            />
          </div>
          <div className="pb-2">
            <InputCheckbox
              label="Nator"
              labelClassName="text-[#2f2f2f] text-left font-['Raleway-Regular',_sans-serif] text-sm font-normal"
              rounded="0.25rem"
              border="1px"
              borderColor="#4285f4"
              color="#4285f4"
              size="1rem"
              boxShadow="-2px -2px 10px 0px rgba(101, 101, 101, 0.05),2px 2px 10px 0px rgba(0, 0, 0, 0.05)"
              gap="4"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
