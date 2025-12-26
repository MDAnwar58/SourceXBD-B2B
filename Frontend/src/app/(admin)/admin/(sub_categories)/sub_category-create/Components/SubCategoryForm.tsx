"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { AdminState, AppDispatch } from "@admin/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import TextEditor, { TextEditorHandle } from "@admin/components/TextEditor";
import {
   getCategories,
   createSubCategory,
} from "@/admin/sub_categories/featrues/SubCategoryAcion";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));
const Input = dynamic(() => import("@/components/Input"));
const ToggleSwitch = dynamic(() => import("@admin/components/ToggleSwitch"));
const Button = dynamic(() => import("@/components/Button"));
const SelectArea = dynamic(() => import("@admin/components/select"));

interface SubCategoryError {
   name?: string;
   desc?: any;
   status?: any;
}

export default function SubCategoryForm() {
   const name = useRef<HTMLInputElement>(null);
   const [categoryId, setCategoryId] = useState<string>("");
   const desc = useRef<TextEditorHandle>(null);
   const [status, setStatus] = useState<string>("active");
   const [loading, setLoading] = useState(false);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      dispatch(getCategories());
   }, [dispatch]);

   const onHandleCreateCategory = () => {
      const payload = {
         name: name.current?.value!,
         category_id: String(categoryId),
         desc: desc.current?.getEditorValue(),
         status: status,
      };
      dispatch(createSubCategory({ payload: payload, router }));
   };
   const {
      categories,
      loading: storeLoading,
      error,
   } = useSelector((state: AdminState) => state.admin.category);

   let options: any = [];
   categories?.length > 0 &&
      categories?.map((item: any) => {
         options.push({
            name: item.name,
            value: item.id,
         });
      });

   useEffect(() => {
      setLoading(storeLoading);
   }, [storeLoading]);

   const errors = error as SubCategoryError;
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
                  placeholder="Sub Category Name"
               />
               {errors?.name && (
                  <small className="text-red-500 text-xs mt-1">
                     {errors.name}
                  </small>
               )}
            </div>
            <div className="mb-3">
               <SelectArea
                  label="Category"
                  options={options}
                  onHandleSelectValue={(value) => setCategoryId(value)} // You should pass a function
               />
            </div>
            <div className="mb-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
                  Description
               </div>
               <TextEditor ref={desc} placeholder="Description write ..." />
               {errors?.desc && (
                  <small className="text-red-500 text-xs mt-1">
                     {errors.desc}
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
               {errors?.status && (
                  <small className="text-red-500 text-xs mt-1">
                     {errors.status}
                  </small>
               )}
            </div>
         </AdminCard>

         <div className=" flex justify-end items-center">
            <Button
               type="button"
               className={` ${
                  loading === true
                     ? "bg-[#ffeded] hover:bg-blue-400 text-[#919191] hover:text-[#e9e9e9]"
                     : "bg-[#f0f0f0] hover:bg-blue-gradient text-[#515151] hover:text-white"
               } capitalize text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold rounded-[14px] w-[129px] h-[42px] flex justify-center items-center transition-all duration-100 ease-linear`}
               onClick={() => onHandleCreateCategory()}
            >
               Save
            </Button>
         </div>
      </Fragment>
   );
}
