import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { Fragment } from "react";

export default function MinOrder() {
  return (
    <Fragment>
      <div className="text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold pt-3">
        Min. Order
      </div>
      <div className="flex items-center gap-3 pt-2 px-2">
        <Input
          type="text"
          className="bg-[#e3e6fb] border-[.124rem] border-blue-500 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Less then"
        />
        <Button
          className="bg-[#4285f4] rounded-[10px] px-5 py-2 capitalize text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold"
          style={{
            boxShadow:
              "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          ok
        </Button>
      </div>
    </Fragment>
  );
}
