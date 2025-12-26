"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { useRouter } from "next/navigation";
import { updateCategoryType } from "../../../featrues/CategoryTypeAcion";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const Input = dynamic(() => import("@/components/Input"), { ssr: false });
const ToggleSwitch = dynamic(() => import("@admin/components/ToggleSwitch"), {
   ssr: false,
});
const AdminCard = dynamic(() => import("@admin/components/card"), {
   ssr: false,
});

interface CategoryTypeError {
   name?: string; // Define any other properties you expect here
}
interface CategoryType {
   name?: string;
   status?: string;
}
interface CategoryTypeId {
   id?: any;
}

type Props = {
   status: string;
   setStatus: React.Dispatch<React.SetStateAction<string>>;
};

export default function CategoryTypeUpdateForm({ status, setStatus }: Props) {
   const name = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const updateCategoryTypeHandle = (id: string) => {
      const payload = {
         name: name.current?.value!,
         status: status,
      };
      dispatch(updateCategoryType({ payload: payload, id, router }));
   };
   const { category_type, loading, error } = useSelector(
      (state: AdminState) => state.admin.categoryType
   );
   return (
      <Fragment>
         <AdminCard className="!bg-[#ffffff] !rounded-[20px] mb-7">
            <div className="mb-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                  Name
               </div>
               <Input
                  type="text"
                  inputRef={name}
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-[30px] w-full shadow-admin-add border-none focus:ring-0 px-5"
                  placeholder="Category Type Name"
                  defaultValue={(category_type as CategoryType)?.name}
               />
               {(error as CategoryTypeError)?.name && (
                  <small className="text-red-500 text-xs mt-1">
                     {(error as CategoryTypeError).name}
                  </small>
               )}
            </div>
            <div className="mb-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                  Status
               </div>
               <div className="">
                  <ToggleSwitch
                     checked={status === "active" ? true : false}
                     onChange={(value: any) =>
                        setStatus(value === true ? "active" : "inactive")
                     }
                  />
               </div>
            </div>
         </AdminCard>

         <div className=" flex justify-end items-center">
            <Button
               type="button"
               className={`${loading === true ? "bg-[#98b0eeac] text-[#5151519d] " : "bg-[#98b0ee] text-[#515151] "} capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] w-[129px] h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
               onClick={() =>
                  updateCategoryTypeHandle(
                     (category_type as CategoryTypeId)?.id
                  )
               }
            >
               Update
            </Button>
         </div>
      </Fragment>
   );
}
