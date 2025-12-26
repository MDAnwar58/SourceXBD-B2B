import InputCheckbox from "@/components/InputCheckbox";
import React, { Fragment } from "react";

export default function SupplierType() {
  return (
    <Fragment>
      <div className="text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold pt-3">
        Supplier Type
      </div>
      <div className="pt-[.7rem] px-2">
        <div className="pb-2">
          <InputCheckbox
            label="Trade assurance"
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
        <div className="">
          <InputCheckbox
            label="Verifide Supplier"
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
    </Fragment>
  );
}
